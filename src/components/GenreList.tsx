import { List, Text, HStack, Avatar, Button, Spinner } from "@chakra-ui/react";
import useGenre from "@/services/hooks/useGenre";
import { type FC} from "react";

type Props = {
  onGenreSelect: (genre: string) => void; 
  selectedGenre: string | null; // Добавляем новое свойство
}

const GenreList : FC<Props> = ({ onGenreSelect, selectedGenre }) => {
  const {data: genres, isLoading,error} = useGenre();

  return (
    <>
    {isLoading && <Spinner></Spinner>}
     {error ? <Text color="red" fontSize={"3rem"} fontWeight={"bold"}>{error}</Text> : <List.Root variant="plain">
        {genres.map((genre) => (
          <List.Item key={genre.id} mb={3}>
            <HStack gap={1} align="center" width="full">
              {/* Аватар вынесен за пределы кнопки */}
              <Avatar.Root size="sm" flexShrink={0}>
                <Avatar.Image src={genre.image_background} objectFit="cover" outline={genre.slug === selectedGenre ? "2px solid" : "none"}
                 outlineColor="blue.500" />
                <Avatar.Fallback name={genre.name} />
              </Avatar.Root>
              {/* Кнопка содержит только текст названия жанра */}
              <Button
                variant="ghost"
                flex="1"
                justifyContent="flex-start"
                paddingInlineStart={2}
                whiteSpace="normal"
                textAlign="left"
                height="auto"
                paddingY={1}
                overflow="hidden"
                onClick={() => onGenreSelect(genre.slug)}
                // ГЛАВНОЕ: меняем стиль текста, если slug совпадает с выбранным
              fontWeight={genre.slug === selectedGenre ? "bold" : "normal"}
              color={genre.slug === selectedGenre ? "blue.500" : "inherit"}
              _hover={{ textDecoration: "underline" }}
              >
                <Text fontSize="lg" fontWeight="medium">
                  {genre.name}
                </Text>
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>}
    </>
  );
};

export default GenreList;
