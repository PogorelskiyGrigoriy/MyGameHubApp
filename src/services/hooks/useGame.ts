import { type Game } from "@/models/fetch-types";
import useData from "./useData";
import type { GameQueryParams } from "@/models/GameQueryParams";

export default function useGame(gameQuery: GameQueryParams) {
  return useData<Game>(
    "games",
    {
      params: {
        genres: gameQuery.genreSlug,
        parent_platforms: gameQuery.parentPlatformId,
        ordering: gameQuery.ordering,
        search: gameQuery.searchText,
      },
    },
    // Передаем массив примитивов. 
    // Если любой из них изменится, useData выполнит запрос.
    [
      gameQuery.genreSlug,
      gameQuery.parentPlatformId,
      gameQuery.ordering,
      gameQuery.searchText
    ]
  )
}