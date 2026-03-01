import { useQuery } from "@tanstack/react-query";
import apiClient from "../api-client";
import { type FetchResponse, type Game } from "@/models/fetch-types";
import type { GameQueryParams } from "@/models/GameQueryParams";

export default function useGame(gameQuery: GameQueryParams) {
  return useQuery<Game[], Error>({
    // Массив зависимостей: запрос перезапустится автоматически при изменении любого поля
    queryKey: ["games", gameQuery],
    
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genreSlug,
            parent_platforms: gameQuery.parentPlatformId,
            ordering: gameQuery.ordering,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data.results),
    
    // Оставляем данные в кэше "свежими" 1 минуту
    staleTime: 1000 * 60, 
  });
}