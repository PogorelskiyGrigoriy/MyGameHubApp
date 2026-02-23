import React from 'react'
import apiClient from '../api-client';
import {type FetchResponse } from '@/models/fetch-types';


export default function useData<T>(endpoint: string): T[] {
    const [data, setData] = React.useState<T[]>([]);
    React.useEffect(() => {
        apiClient.get<FetchResponse<T>>(endpoint).then((res) => setData(res.data.results));
    }, [endpoint]);


  return data;
    
}
