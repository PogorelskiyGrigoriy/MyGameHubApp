import React, { type DependencyList } from 'react'
import apiClient from '../api-client';
import {type FetchResponse } from '@/models/fetch-types';
import type { AxiosError, AxiosRequestConfig } from 'axios';


// useData.ts
export default function useData<T>(
  endpoint: string, 
  config?: AxiosRequestConfig, 
  deps?: DependencyList,
  mapper?: (data: T[]) => T[] // Добавляем функцию-трансформер
): { data: T[], isLoading: boolean, error: string } {
  const [data, setData] = React.useState<T[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");

  React.useEffect(() => {
    setIsLoading(true);
    apiClient.get<FetchResponse<T>>(endpoint, config)
      .then((res) => {
        // Если mapper передан, прогоняем данные через него, если нет — берем как есть
        const finalData = mapper ? mapper(res.data.results) : res.data.results;
        setData(finalData);
      })
      .catch((e: AxiosError) => {
        if (e.name === 'CanceledError') return;
        setError(e.message);
      })
      .finally(() => setIsLoading(false));
  }, deps || []);

  return { data, isLoading, error };
}