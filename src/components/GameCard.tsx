import { Card, Image, Heading, Box} from "@chakra-ui/react";
import {type Game } from "../models/fetch-types";
import CriticScore from "./MetacriticScore";
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
        
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <StarsRater rating={game.rating} />
            <CriticScore metacritic={game.metacritic} />
        </Box>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;