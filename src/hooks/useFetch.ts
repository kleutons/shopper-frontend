import axios from "axios";
import { useEffect, useState } from "react";

const URL_API = 'http://localhost:4000/';

const api = axios.create({
    baseURL: URL_API
})

export function useFetchGet<T = unknown>(url: string){
    
    const  [data, setData] = useState<T | null>(null);
    const  [error, setError] = useState<Error | null>(null);  

    useEffect( () => {
        const fetch = async () => {
            //Axios
            api.get(url)
            .then(response => {
                const fetchData = response.data;
                setData(fetchData);
            })
            .catch(err => {
                setError(err);
            })
        }

        fetch();
    }, [url])

    return { data, error }
}

export function useFetchPostForm<T = unknown>(url: string, formData: FormData){
    const [isRequestSent, setIsRequestSent] = useState(false);
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect( () => {
    if (isRequestSent) {
        const fetch = async () => {
            //Axios
            api.post(url, formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                const fetchData = response.data;
                setData(fetchData);
            })
            .catch(err => {
                setError(err);
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

    return { data, setData, error, sendRequest }
}