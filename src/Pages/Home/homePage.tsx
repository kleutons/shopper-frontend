import React, { useState } from "react";
import { useFetchPostForm } from "../../hooks/useFetch";
import { TypeProductValidade } from "../../types/typeProduct";

export default function HomePage(){
    const [formData] = useState(new FormData());
    const { data, error, sendRequest } = useFetchPostForm('/product/bulk-update', formData);
    const fileInputRef = React.createRef<HTMLInputElement>();

    // Função para lidar com o envio do arquivo
    const handleFileChange = (event:any) => {
        const file = event.target.files[0];
        formData.append('file', file);
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (event:any) => {
        event.preventDefault();
        sendRequest();

        
        // Limpar após o envio
        if (fileInputRef.current){
            fileInputRef.current.value = '';
        }
    }
              

    return(
        <>
        <h1>Atualizar Preço</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="fileCsv">Escolha um arquivo CSV, e click em validar:</label>
            <br/>
            <input type="file" id="fileCsv" name="file" accept=".csv" onChange={handleFileChange} ref={fileInputRef} />
            <br/>
            <button type="submit">VALIDAR</button>
        </form>


        {error && <div>Erro: {error.message}</div>}

        {data && Array.isArray(data) && data.length > 0 && (
            <>
                <h2>Produtos Para Atualizar</h2>
                <table>
                    <thead>
                        <tr>
                        <th>Cod.</th>
                        <th>Nome</th>
                        <th>Preço Atual</th>
                        <th>Novo Preço</th>
                        <th>Tipo</th>
                        <th>Valido?</th>
                        <th>Pendência</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {data.map((item: TypeProductValidade, index: number) => (
                            <tr key={index}>
                                <td>{item.code}</td>
                                <td>{item.name}</td>
                                <td>{item.sales_price}</td>
                                <td>{item.new_price}</td>
                                <td>{item.typeProduct}</td>
                                <td>{!item.isError ? 'Sim' : 'Erro'}</td>
                                <td>{item.returnError}</td>
                            </tr>
                            
                        ))}
                    </tbody>
                </table>
                
                <button>Atualizar</button>
            </>
        )}        
        
        </>
    )
}