import React from "react";
import useGenre from "@/services/hooks/useGenre";
import MenuSelector from "./MenuSelector";

type Props = {
  selectedGenreSlug: string | null;
  onSelectGenre: (slug: string | null) => void;
};

const GenreSelector: React.FC<Props> = ({ selectedGenreSlug, onSelectGenre }) => {
  const { data: genres, error } = useGenre();

  if (error) return null;

  return (
    <MenuSelector
      data={genres}
      selectedItem={genres.find((g) => g.slug === selectedGenreSlug)}
      onSelect={(g) => onSelectGenre(g.slug === "_all" ? null : g.slug)}
      defaultLabel="Genres"
      getLabel={(g) => g.name}
      getValue={(g) => g.slug}
    />
  );
};

export default GenreSelector;