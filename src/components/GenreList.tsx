import { List, Text, HStack, Avatar, Button, Spinner, Box, Heading } from "@chakra-ui/react";
import useGenre from "@/services/hooks/useGenre";
import { type FC } from "react";

type Props = {
  onGenreSelect: (genre: string | null) => void;
  selectedGenreSlug: string | null;
};

const GenreList: FC<Props> = ({ onGenreSelect, selectedGenreSlug }) => {
  // Получаем уже готовые данные (включая "All Genres" из маппера в хуке)
  const { data: genres, isLoading, error } = useGenre();

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
        overflowY="auto" 
        overflowX="hidden" 
        pr={2}
      >
        <List.Root variant="plain">
          {genres.map((genre) => (
            <List.Item key={genre.id} mb={3}>
              <HStack gap={2} align="start" width="full">
                <Avatar.Root size="sm" flexShrink={0} mt={1}>
                  {/* Теперь у нас slug есть всегда, кроме случая, если в маппере мы его не задали */}
                  {genre.slug !== "_all" ? (
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
                  onClick={() => onGenreSelect(genre.slug === "_all" ? null : genre.slug)}
                  variant="plain"
                  fontSize="lg"
                  fontWeight={
                    (genre.slug === selectedGenreSlug) || (genre.slug === "_all" && !selectedGenreSlug) 
                    ? "bold" 
                    : "normal"
                  }
                  color={
                    (genre.slug === selectedGenreSlug) || (genre.slug === "_all" && !selectedGenreSlug)
                    ? "fg" 
                    : "fg.muted"}
                  justifyContent="flex-start"
                  textAlign="left"
                  paddingX="0"
                  whiteSpace="normal" 
                  height="auto"
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