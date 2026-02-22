import { Card, Image, Heading, Text } from "@chakra-ui/react";
import {type Game } from "../models/fetch-types";

interface Props {
  game: Game;
}

// Компонент для отображения информации об игре
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Text mt={2}>Metacritic: {game.metacritic}</Text>
        <Text>Rating: {game.rating}</Text>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;