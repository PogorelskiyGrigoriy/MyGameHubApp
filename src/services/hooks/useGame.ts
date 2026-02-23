import {type Game } from "@/models/fetch-types";
import useData from "./useData";


export default function useGame(genre: string | null): {data: Game[], isLoading: boolean, error: string} {
  return useData<Game>("games", genre);
}