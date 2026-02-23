import { type Genre } from "@/models/fetch-types";
import useData from "./useData";


export default function useGenre(): Genre[] {
  return useData<Genre>("genres");
}