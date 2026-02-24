import { List, Text, HStack, Avatar, Button, Spinner, Box, Heading } from "@chakra-ui/react";
import useGenre from "@/services/hooks/useGenre";
import { type FC, useMemo } from "react";
import { type Genre } from "@/models/fetch-types";

type Props = {
  onGenreSelect: (genre: string | null) => void;
  selectedGenreSlug: string | null;
};

const GenreList: FC<Props> = ({ onGenreSelect, selectedGenreSlug }) => {
  const { data: genres, isLoading, error } = useGenre();

  const genreOptions = useMemo(() => {
    if (genres.length === 0) return [];
    const allGenresOption = {
      id: -1,
      name: "All Genres",
      slug: null,
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
    <Box height="100%" display="flex" flexDirection="column">
      <Heading fontSize="2xl" mb={4}>Genres</Heading>
      
      {isLoading && <Spinner mb={4} />}

      <Box 
        flex="1" 
        overflowY="auto"   // Вертикальный скролл оставляем
        overflowX="hidden" // 1. Убираем горизонтальный скролл
        pr={2}             // Отступ справа, чтобы скроллбар не "прилипал" к тексту
      >
        <List.Root variant="plain">
          {genreOptions.map((genre) => (
            <List.Item key={genre.id} mb={3}>
              <HStack gap={2} align="start" width="full"> {/* Изменили align на "start" для длинных названий */}
                <Avatar.Root size="sm" flexShrink={0} mt={1}> {/* Добавили отступ сверху для выравнивания с текстом */}
                  {genre.slug ? (
                    <Avatar.Image
                      src={genre.image_background}
                      objectFit="cover"
                      outline={genre.slug === selectedGenreSlug ? "2px solid" : "none"}
                      outlineColor="blue.500"
                    />
                  ) : (
                    <Avatar.Fallback backgroundColor="gray.200" color="gray.600">
                      All
                    </Avatar.Fallback>
                  )}
                </Avatar.Root>

                <Button
                  onClick={() => onGenreSelect(genre.slug)}
                  variant="plain"
                  fontSize="lg"
                  fontWeight={genre.slug === selectedGenreSlug ? "bold" : "normal"}
                  color={genre.slug === selectedGenreSlug ? "fg" : "fg.muted"}
                  justifyContent="flex-start"
                  textAlign="left"
                  paddingX="0"
                  
                  // 2. Позволяем переносить слова на новую строчку
                  whiteSpace="normal" 
                  height="auto" // Важно: для переноса текста высота должна подстраиваться
                  lineHeight="short"
                  
                  _hover={{
                    textDecoration: "underline",
                    color: "fg",
                    background: "bg.emphasized/5",
                  }}
                  transition="all 0.2s"
                >
                  {genre.name}
                </Button>
              </HStack>
            </List.Item>
          ))}
        </List.Root>
      </Box>
    </Box>
  );
};

export default GenreList;