import { type Genre } from "@/models/fetch-types";
import useData from "./useData";

export default function useGenre() {
  return useData<Genre>(
    "genres",
    undefined,
    [],
    // Добавляем дефолтный элемент "All Genres" через маппер
    (data) => [{ id: -1, name: "All Genres", slug: "_all" } as Genre, ...data]
  );
}