import { useQuery } from "@tanstack/react-query";
import apiClient from "../api-client";
import { type FetchResponse, type Genre } from "@/models/fetch-types";

export default function useGenre() {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((res) => res.data.results),

    // select — это идеальное место для трансформации данных. 
    // Он мемоизирует результат автоматически.
    select: (data) => [
      { id: -1, name: "All Genres", slug: "_all" } as Genre,
      ...data,
    ],

    // Жанры не меняются часто, кэшируем на 24 часа
    staleTime: 1000 * 60 * 60 * 24,
  });
}