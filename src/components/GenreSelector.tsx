import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import React, { useState } from "react";
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

  // Находим текущий жанр. Если выбран "_all", selectedGenre найдет наш объект из маппера
  const selectedGenre = genres.find((g) => g.slug === selectedGenreSlug);

  if (error) return null;

  return (
    <MenuRoot onOpenChange={(e) => setIsOpen(e.open)} unmountOnExit>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {/* Если selectedGenre не найден или это "All Genres", покажется имя или дефолт */}
          {selectedGenre?.name || "Genres"}
          {isOpen ? <LuChevronUp /> : <LuChevronDown />}
        </Button>
      </MenuTrigger>

      <MenuContent portalled maxH="400px" overflowY="auto">
        {genres.map((genre) => (
          <MenuItem
            key={genre.id}
            value={genre.slug}
            onClick={() => 
              // Если slug равен "_all", передаем в App null, чтобы сбросить фильтр
              onSelectGenre(genre.slug === "_all" ? null : genre.slug)
            }
          >
            {genre.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default GenreSelector;