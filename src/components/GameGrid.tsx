import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGame from "@/services/hooks/useGame";
import useGameQueryStore from "../store/useGameQueryStore";

const GameGrid = () => {
  // Извлекаем параметры из стора
  const genreSlug = useGameQueryStore((s) => s.genreSlug);
  const parentPlatformId = useGameQueryStore((s) => s.parentPlatformId);
  const ordering = useGameQueryStore((s) => s.ordering);
  const searchText = useGameQueryStore((s) => s.searchText);

  const gameQuery = {
    genreSlug,
    parentPlatformId,
    ordering,
    searchText,
  };

  const { data: games, isLoading, error } = useGame(gameQuery);

  // В React Query error — это объект, берем message
  if (error) {
    return (
      <Text color="red" fontSize={"2rem"} fontWeight={"bold"}>
        {error.message}
      </Text>
    );
  }

  return (
    <>
      {isLoading && <Spinner mb={4} />}
      
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        gap={6}
        padding="10px"
        overflow="auto"
        maxHeight="80vh"
      >
        {/* Используем опциональную цепочку ?. так как до загрузки games === undefined */}
        {games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;