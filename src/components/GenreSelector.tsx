import useGenre from "@/services/hooks/useGenre";
import MenuSelector from "./MenuSelector";
import useGameQueryStore from "../store/useGameQueryStore"; // Импортируем стор

const GenreSelector = () => {
  // Достаем данные и экшен из Zustand
  const selectedGenreSlug = useGameQueryStore((s) => s.genreSlug);
  const setGenreSlug = useGameQueryStore((s) => s.setGenreSlug);

  const { data: genres, error } = useGenre();

  if (error) return null;

  return (
    <MenuSelector
      data={genres}
      // Находим выбранный объект для отображения в кнопке меню
      selectedItem={genres.find((g) => g.slug === selectedGenreSlug)}
      // Вызываем экшен стора напрямую
      onSelect={(g) => setGenreSlug(g.slug === "_all" ? null : g.slug)}
      defaultLabel="Genres"
      getLabel={(g) => g.name}
      getValue={(g) => g.slug}
    />
  );
};

export default GenreSelector;