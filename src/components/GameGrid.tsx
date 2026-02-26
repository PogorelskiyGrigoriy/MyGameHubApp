import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGame from "@/services/hooks/useGame";
import useGameQueryStore from "../store/useGameQueryStore";

const GameGrid = () => {
  // 1. Извлекаем все нужные параметры из стора.
  // Мы создаем объект "на лету", чтобы передать его в хук useGame.
  const genreSlug = useGameQueryStore((s) => s.genreSlug);
  const parentPlatformId = useGameQueryStore((s) => s.parentPlatformId);
  const ordering = useGameQueryStore((s) => s.ordering);
  const searchText = useGameQueryStore((s) => s.searchText);

  // Собираем их в объект, который ожидает хук useGame (GameQueryParams)
  const gameQuery = {
    genreSlug,
    parentPlatformId,
    ordering,
    searchText,
  };

  const { data: games, isLoading, error } = useGame(gameQuery);

  return (
    <>
      {isLoading && <Spinner mb={4} />}
      {error ? (
        <Text color="red" fontSize={"3rem"} fontWeight={"bold"}>
          {error}
        </Text>
      ) : (
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
          gap={6}
          padding="10px"
          overflow="auto"
          maxHeight="80vh"
        >
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;