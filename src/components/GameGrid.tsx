import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGame from "@/services/hooks/useGame";


const GameGrid = () => {
  const {data: games, isLoading, error} = useGame()

  return (
    <>
    {isLoading && <Spinner>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</Spinner>}
     {error ? <Text color="red" fontSize={"3rem"} fontWeight={"bold"}>{error}</Text> : <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        gap={6}
        padding="10px"
        overflow="auto"
        maxHeight="80vh"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>}
    </>
  );
};

export default GameGrid;
