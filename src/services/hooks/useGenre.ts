import { type Genre } from "@/models/fetch-types";
import useData from "./useData";


export default function useGenre(): {data: Genre[], isLoading: boolean} {
  return useData<Genre>("genres");
}