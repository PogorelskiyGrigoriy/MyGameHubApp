import useGenre from "@/services/hooks/useGenre";
import MenuSelector from "./MenuSelector";
import useGameQueryStore from "../store/useGameQueryStore";

const GenreSelector = () => {
  const selectedGenreSlug = useGameQueryStore((s) => s.genreSlug);
  const setGenreSlug = useGameQueryStore((s) => s.setGenreSlug);

  const { data: genres, error } = useGenre();

  if (error) return null;

  return (
    <MenuSelector
      // Передаем пустой массив, если данные еще грузятся, чтобы компонент не упал
      data={genres || []}
      // Безопасно ищем выбранный элемент
      selectedItem={genres?.find((g) => g.slug === selectedGenreSlug)}
      onSelect={(g) => setGenreSlug(g.slug === "_all" ? null : g.slug)}
      defaultLabel="Genres"
      getLabel={(g) => g.name}
      getValue={(g) => g.slug}
    />
  );
};

export default GenreSelector;