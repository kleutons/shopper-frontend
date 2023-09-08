import React, { useEffect, useState } from "react";
import { useFetchPostForm } from "../../hooks/useFetch";
import { TypeProductValidade } from "../../types/typeProduct";
import { toast } from "react-hot-toast";
import { Btn, FormContainer, Input, Label, StyledTable } from "../style/style";
import { formatCurrency } from "../../utils/format";
import { clear } from "console";

export default function HomePage(){
    const [formData] = useState(new FormData());
    const { data, setData, error, setError, sendRequest } = useFetchPostForm('/product/validade-csv', formData);
    const { data: dataBulk, setData: setDataBulk, error: errorBulk, sendRequest: sendBulk } = useFetchPostForm('/product/bulk-update', formData);
    const fileInputRef = React.createRef<HTMLInputElement>();
    const formRef = React.createRef<HTMLFormElement>();
    const [btnDisabled, setBtnDisabled] = useState(true);

    useEffect( () => {

        if (error) {           
            if (error.data) {
                const errorRetun = String(error.data.error);
                if(errorRetun !== undefined){
                    toast.error('Tente Novamente');
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }else{
                    toast.error(String(error.data.error));
                }
            }else
            if(error.message === 'Network Error'){
                toast.error('Network Error, Tente Novamente');
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }else{
                console.log(error);
                console.log(error.message);
            }   
            setError(null);

        }

        if(Array.isArray(data)){
            const invalidCSV = data.find((item:TypeProductValidade) => item.isError === true);
            setBtnDisabled(!invalidCSV);
            if(invalidCSV){
                toast.error('CSV inválido, Veja Pendencias!');
            }
        }

        if(dataBulk){            
            formData.delete('file'); 
            if(dataBulk.data){
                toast.success(String(dataBulk.data));
                setTimeout(() => {setDataBulk(null);
                }, 200);
            }
        }
    }, [data, error, setError, setData, dataBulk, setDataBulk, errorBulk, formData])


   
    const handleFileChange = (event:any) => {
        const file = event.target.files[0];
        formData.append('file', file);
    };


    const handleSubmit = (event:any) => {
        event.preventDefault();
        sendRequest();

        
        // Limpar após o envio
        if (fileInputRef.current){
            fileInputRef.current.value = '';
        }
    }
              

     const handleSubmitAtualizar = (event:any) => {
        
        if (formRef.current) {
            event.preventDefault();
            sendBulk();
            setData(null);
        // Limpar após o envio
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
            
        }
        }
    }

    return(
        <>
        <h1>Atualizar Preço</h1>

        <FormContainer ref={formRef} onSubmit={handleSubmit}>
            <Label htmlFor="fileCsv">Escolha um arquivo CSV, e click em validar:</Label>
            <Input type="file" id="fileCsv" name="file" accept=".csv" onChange={handleFileChange} ref={fileInputRef} />
            <Btn type="submit">VALIDAR</Btn>
        </FormContainer>

        <h2>{data ? 'Produtos Para Atualizar' : 'Envie um Arquivo CSV'}</h2>
        {data && Array.isArray(data) && data.length > 0 && (
            <>
                
                <StyledTable>
                    <thead>
                        <tr>
                        <th>Cod.</th>
                        <th>Nome</th>
                        <th className="center">Preço Atual</th>
                        <th className="center">Novo Preço</th>
                        <th className="center">Tipo</th>
                        <th className="pendencia center">Pendência</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {data.map((item: TypeProductValidade) => (
                            <tr key={item.code}>
                                <td>{item.code}</td>
                                <td>{item.name}</td>
                                <td className="center">{formatCurrency(item.sales_price)}</td>
                                <td className="center">{formatCurrency(item.new_price)}</td>
                                <td className="center">{item.typeProduct}</td>
                                <td>{!item.isError ? '✅' : '⛔'} {item.returnError}</td>
                            </tr>
                            
                        ))}
                    </tbody>
                </StyledTable>
                
                <Btn disabled={!btnDisabled} onClick={handleSubmitAtualizar}>Atualizar</Btn>
            </>
        )}        
        
        </>
    )
}