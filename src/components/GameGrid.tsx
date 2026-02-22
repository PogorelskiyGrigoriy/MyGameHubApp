import React from "react";
import { SimpleGrid, Image, Text, Card, CardBody, Heading } from "@chakra-ui/react";
import { type FetchResponse, type Game } from "@/models/fetch-types";
import apiClient from "@/services/api-client";

const GameGrid = () => {
  const [games, setGames] = React.useState<Game[]>([]);

  React.useEffect(() => {
    apiClient
      .get<FetchResponse>("games")
      .then((res) => setGames(res.data.results));
  }, []);

  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3 }}
      spacing={6}
      padding="10px"
    >
      {games.map((game) => (
        <Card key={game.id} borderRadius={10} overflow="hidden">
          <Image src={game.background_image} alt={game.name} />
          <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
          </Heading>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;