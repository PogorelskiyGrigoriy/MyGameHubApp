import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../api-client";
import { type FetchResponse, type Game } from "@/models/fetch-types";
import type { GameQueryParams } from "@/models/GameQueryParams";

export default function useGame(gameQuery: GameQueryParams) {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genreSlug,
            parent_platforms: gameQuery.parentPlatformId,
            ordering: gameQuery.ordering,
            search: gameQuery.searchText,
            page: pageParam,
          },
        })
        .then((res) => res.data),
    
    initialPageParam: 1,
    
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      
      const url = new URL(lastPage.next);
      const page = url.searchParams.get("page");
      return page ? parseInt(page) : undefined;
    },
    
    staleTime: 1000 * 60,
  });
}