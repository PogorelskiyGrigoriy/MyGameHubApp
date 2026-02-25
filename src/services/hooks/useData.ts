import React, { type DependencyList } from 'react'
import apiClient from '../api-client';
import {type FetchResponse } from '@/models/fetch-types';
import type { AxiosError, AxiosRequestConfig } from 'axios';


// Универсальный хук для получения данных с API. Принимает endpoint, конфиг для запроса, зависимости для useEffect и необязательный mapper для трансформации данных.
export default function useData<T>(
  endpoint: string, 
  config?: AxiosRequestConfig, 
  deps?: DependencyList,
  mapper?: (data: T[]) => T[] // Если нужно трансформировать данные перед сохранением в стейт, можно передать функцию mapper. Она будет вызвана с массивом данных из ответа, и должна вернуть новый массив.
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