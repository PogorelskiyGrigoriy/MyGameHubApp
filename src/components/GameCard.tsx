import { Card, Image, Heading, Text } from "@chakra-ui/react";
import {type Game } from "../models/fetch-types";
import StarsRater from "./StarsRater";

interface Props {
  game: Game;
}

// Компонент для отображения информации об игре
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <Card.Body>
        <Heading fontSize="2xl" mb={2}>{game.name}</Heading>
        {/* Отрисовываем наши звезды */}
        <StarsRater rating={game.rating} />
        <Text mt={2} fontSize="sm" color="gray.500">
          Metacritic: {game.metacritic}
        </Text>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;