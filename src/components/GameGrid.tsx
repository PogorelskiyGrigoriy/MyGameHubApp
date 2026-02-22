import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { getGames } from "@/services/api-client"; // Импортируем готовую функцию
import { type Game } from "@/models/fetch-types";
import GameCard from "./GameCard";


const GameGrid = () => {
  const [games, setGames] = React.useState<Game[]>([]);

  React.useEffect(() => {
    // Просто вызываем функцию, логика ключа и эндпоинта скрыта внутри сервиса
    getGames().then((data) => setGames(data));
  }, []);

  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3 }}
      gap={6}
      padding="10px"
      overflow="auto"
      maxHeight="80vh"
    >
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
