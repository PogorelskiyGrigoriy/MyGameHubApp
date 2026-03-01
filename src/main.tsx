import { Provider as ChackraProvider } from "@/components/ui/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 1. Создаем экземпляр клиента. 
// Здесь можно задать глобальные настройки для всех запросов в приложении.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Данные считаются "свежими" 1 минуту. В течение этого времени 
      // повторные переходы на страницу не вызовут запрос к API.
      staleTime: 1000 * 60, 
      // Отключаем перезапрос при смене фокуса окна, чтобы не спамить API RAWG
      refetchOnWindowFocus: false,
      // Количество попыток перезапроса при ошибке сети
      retry: 1,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 2. Оборачиваем Chakra UI Provider в QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <ChackraProvider>
        <App />
      </ChackraProvider>
      {/* 3. Панель разработчика (поможет на презентации показать работу кэша) */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);