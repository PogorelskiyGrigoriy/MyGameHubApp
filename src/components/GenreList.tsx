import { List, Text, HStack, Avatar, Button, Spinner } from "@chakra-ui/react";
import useGenre from "@/services/hooks/useGenre";

const GenreList = () => {
  const {data: genres, isLoading} = useGenre();

  return (
    <>
    {isLoading && <Spinner></Spinner>}
      <List.Root variant="plain">
        {genres.map((genre) => (
          <List.Item key={genre.id} mb={3}>
            <HStack gap={1} align="center" width="full">
              {/* Аватар вынесен за пределы кнопки */}
              <Avatar.Root size="sm" flexShrink={0}>
                <Avatar.Image src={genre.image_background} objectFit="cover" />
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
