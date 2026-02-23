import { useEffect, useState } from "react";
import { List, Text, HStack, Avatar } from "@chakra-ui/react";
import apiClient from "../services/api-client";
import {type Genre } from "../models/fetch-types";

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const GenreList = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    apiClient
      .get<FetchGenresResponse>("/genres")
      .then((res) => setGenres(res.data.results));
  }, []);

  return (
    <List.Root variant="plain">
      {genres.map((genre) => (
        <List.Item key={genre.id} mb={3}>
          <HStack gap={3}>
            {/* Аватар для картинки жанра */}
            <Avatar.Root size="sm">
              <Avatar.Image 
                src={genre.image_background} 
                objectFit="cover" // Чтобы картинка не растягивалась
              />
              {/* Заглушка, если картинка не загрузится (первая буква названия) */}
              <Avatar.Fallback name={genre.name} />
            </Avatar.Root>

            <Text fontSize="lg" fontWeight="medium">
              {genre.name}
            </Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;