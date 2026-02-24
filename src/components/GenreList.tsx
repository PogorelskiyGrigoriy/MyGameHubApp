import { List, Text, HStack, Avatar, Button, Spinner } from "@chakra-ui/react";
import useGenre from "@/services/hooks/useGenre";
import { type FC, useMemo } from "react";
import { type Genre } from "@/models/fetch-types";

type Props = {
  onGenreSelect: (genre: string | null) => void;
  selectedGenre: string | null;
};

const GenreList: FC<Props> = ({ onGenreSelect, selectedGenre }) => {
  const { data: genres, isLoading, error } = useGenre();

  // Профессиональный стандарт: готовим данные перед отрисовкой
  const genreOptions = useMemo(() => {
    if (genres.length === 0) return [];

    // Создаем виртуальный элемент для сброса фильтра
    const allGenresOption = {
      id: -1,
      name: "All Genres",
      slug: null, // null сигнализирует API сбросить фильтр
      image_background: "",
    } as unknown as Genre;

    return [allGenresOption, ...genres];
  }, [genres]);

  if (error) {
    return (
      <Text color="red" fontSize={"1.5rem"} fontWeight={"bold"}>
        {error}
      </Text>
    );
  }

  return (
    <>
      {isLoading && <Spinner mb={4} />}

      <List.Root variant="plain">
        {genreOptions.map((genre) => (
          <List.Item key={genre.id} mb={3}>
            <HStack gap={2} align="center" width="full">
              <Avatar.Root size="sm" flexShrink={0}>
                {genre.slug ? (
                  <Avatar.Image
                    src={genre.image_background}
                    objectFit="cover"
                    outline={genre.slug === selectedGenre ? "2px solid" : "none"}
                    outlineColor="blue.500"
                  />
                ) : (
                  // Заглушка для пункта "All Genres"
                  <Avatar.Fallback backgroundColor="gray.200" color="gray.600">
                    All
                  </Avatar.Fallback>
                )}
              </Avatar.Root>

              <Button
                variant="ghost"
                flex="1"
                justifyContent="flex-start"
                paddingInlineStart={2}
                whiteSpace="normal"
                textAlign="left"
                height="auto"
                paddingY={1}
                onClick={() => onGenreSelect(genre.slug)}
                // Логика активного состояния:
                // либо слаги совпадают, либо оба null (для "All Genres")
                fontWeight={genre.slug === selectedGenre ? "bold" : "normal"}
                color={genre.slug === selectedGenre ? "blue.500" : "inherit"}
                _hover={{ textDecoration: "underline", bg: "gray.100" }}
              >
                <Text fontSize="lg" fontWeight="medium">
                  {genre.name}
                </Text>
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;