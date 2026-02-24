import { type Game } from "@/models/fetch-types";
import useData from "./useData";
import {GameQuery} from "@/models/GameQuery";

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genreSlug,
        parent_platforms: gameQuery.platformSlug,
      },
    },
    [gameQuery]
  );

export default useGames;