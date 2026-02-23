import React from 'react'
import apiClient from '../api-client';
import {type FetchResponse } from '@/models/fetch-types';


export default function useData<T>(endpoint: string): {data: T[], isLoading: boolean} {
    const [data, setData] = React.useState<T[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    React.useEffect(() => {
        setIsLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint).then((res) => setData(res.data.results))
        .finally(() => setIsLoading(false));
    }, [endpoint]);


  return {data, isLoading};
    
}
