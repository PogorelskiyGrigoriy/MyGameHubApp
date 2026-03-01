import { List, Text, HStack, Avatar, Button, Spinner, Box, Heading } from "@chakra-ui/react";
import useGenre from "@/services/hooks/useGenre";
import useGameQueryStore from "../store/useGameQueryStore";

const GenreList = () => {
  const selectedGenreSlug = useGameQueryStore((s) => s.genreSlug);
  const setGenreSlug = useGameQueryStore((s) => s.setGenreSlug);

  const { data: genres, isLoading, error } = useGenre();

  if (error) {
    return (
      <Text color="red" fontSize={"1.2rem"} fontWeight={"bold"}>
        {error.message}
      </Text>
    );
  }

  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Heading fontSize="2xl" mb={4}>Genres</Heading>
      
      {isLoading && <Spinner mb={4} />}

      <Box flex="1" overflowY="auto" overflowX="hidden" pr={2}>
        <List.Root variant="plain">
          {genres?.map((genre) => (
            <List.Item key={genre.id} mb={3}>
              <HStack gap={2} align="start" width="full">
                <Avatar.Root size="sm" flexShrink={0} mt={1}>
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
                  onClick={() => setGenreSlug(genre.slug === "_all" ? null : genre.slug)}
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
                  }}
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