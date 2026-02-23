import React from 'react'
import apiClient from '../api-client';
import {type FetchResponse } from '@/models/fetch-types';
import type { AxiosError } from 'axios';


export default function useData<T>(endpoint: string): {data: T[], isLoading: boolean, error: string} {
    const [data, setData] = React.useState<T[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>("");
    React.useEffect(() => {
        setIsLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint).then((res) => setData(res.data.results))
        .catch((e: AxiosError ) => setError(e.message))
        .finally(() => setIsLoading(false));
    }, [endpoint]);


  return {data, isLoading, error};
    
}
