import {type Game } from "@/models/fetch-types";
import useData from "./useData";


export default function useGame(): Game[] {
  return useData<Game>("games");
}