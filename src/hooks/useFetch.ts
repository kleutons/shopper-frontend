import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

const URL_API = 'http://localhost:4000';

const api = axios.create({
    baseURL: URL_API
})

export function useFetchGet<T = unknown>(url: string){
    
    const  [data, setData] = useState<T | null>(null);
    const  [error, setError] = useState<Error | Response | null>(null);  

    useEffect( () => {

        const fetchUrl = URL_API+url;
        fetch(fetchUrl).then(response => {
            if(response.ok){
                return response.json();
            }else{
                setError(response);
            }
           
        }).then((data) =>{
            setData(data)
        }).catch((err) =>{
            setError(err);
        });

    }, [url])

    return { data, error }
}

export function useFetchPostForm(url: string, formData: FormData){

    interface CustomAxiosError extends AxiosError {
        data?: { error: String };
      }

    interface CustomResponse extends Response {
        data: String;
    }

      
    const [isRequestSent, setIsRequestSent] = useState(false);
    const [data, setData] = useState<CustomResponse | null>(null);
    const [error, setError] = useState<CustomAxiosError | null>(null);

    useEffect( () => {
    if (isRequestSent) {
        setData(null);

        const fetch = async () => {
            //Axios
            api.post(url, formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                if(response.data){
                    setData(response.data);
                }
            })
            .catch(err => {              
                if(err.response){
                    setError(err.response);
                }else{
                    setError(err);
                }
                              
            }).finally(() =>{
                setIsRequestSent(false);
            })
        }

        fetch();
    }
    }, [url, formData, isRequestSent]);

    const sendRequest = () => {
        setIsRequestSent(true);
    };

    return { data, setData, error, setError, sendRequest }
}