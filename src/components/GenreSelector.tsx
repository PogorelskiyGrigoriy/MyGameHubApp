import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import React, {useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import useGenre from "@/services/hooks/useGenre";

type Props = {
  selectedGenreSlug: string | null;
  onSelectGenre: (slug: string | null) => void;
};

const GenreSelector: React.FC<Props> = ({
  selectedGenreSlug,
  onSelectGenre,
}) => {
  const { data: genres, error } = useGenre();
  const [isOpen, setIsOpen] = useState(false);

  // Находим текущий выбранный жанр для отображения в кнопке
  const selectedGenre = genres.find((g) => g.slug === selectedGenreSlug);

  if (error) return null;

  return (
    <MenuRoot onOpenChange={(e) => setIsOpen(e.open)} unmountOnExit>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {selectedGenre?.name || "Genres"}
          {isOpen ? <LuChevronUp /> : <LuChevronDown />}
        </Button>
      </MenuTrigger>

      <MenuContent 
        portalled // Чтобы меню не обрезалось контейнерами
        maxH="400px" 
        overflowY="auto"
      >
        {/* Опция сброса (All Genres) */}
        <MenuItem 
          value="_all" 
          onClick={() => onSelectGenre(null)}
        >
          All Genres
        </MenuItem>

        {genres.map((genre) => (
          <MenuItem
            key={genre.id}
            value={genre.slug}
            onClick={() => onSelectGenre(genre.slug)}
          >
            {genre.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default GenreSelector;