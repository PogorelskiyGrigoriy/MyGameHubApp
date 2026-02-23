import { SimpleGrid, Spinner } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGame from "@/services/hooks/useGame";


const GameGrid = () => {
  const {data: games, isLoading} = useGame()

  return (
    <>
    {isLoading && <Spinner></Spinner>}
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
    </>
  );
};

export default GameGrid;
