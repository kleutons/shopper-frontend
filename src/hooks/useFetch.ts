import axios from "axios";
import { useEffect, useState } from "react";

const URL_API = 'http://localhost:4000';

const api = axios.create({
    baseURL: URL_API
})

export function useFetchListProduct<T = unknown>(url: string){
    
    const  [data, setData] = useState<T | null>(null);
    const  [error, setError] = useState<Error | null>(null);  

    useEffect( () => {
        const fetch = async () => {
            //Axios
            api.get(url,{})
            .then(response => {
                const fetchData = response.data;
                setData(fetchData);
            })
            .catch(err => {
                setError(err);
            })
        }

        fetch();
    }, [])

    return { data, error }
}