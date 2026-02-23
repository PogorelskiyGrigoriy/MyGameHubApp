import {type Game } from "@/models/fetch-types";
import useData from "./useData";


export default function useGame(): {data: Game[], isLoading: boolean} {
  return useData<Game>("games");
}