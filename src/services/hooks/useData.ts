import React, { type DependencyList } from 'react'
import apiClient from '../api-client';
import {type FetchResponse } from '@/models/fetch-types';
import type { AxiosError, AxiosRequestConfig } from 'axios';


export default function useData<T>(endpoint: string, config?: AxiosRequestConfig, deps?: DependencyList)
: {data: T[], isLoading: boolean, error: string} {
    const [data, setData] = React.useState<T[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>("");
    React.useEffect(() => {
        setIsLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint, config)
        .then((res) => setData(res.data.results))
        .catch((e: AxiosError ) => setError(e.message))
        .finally(() => setIsLoading(false));
    }, deps || []);


  return {data, isLoading, error};
    
}
