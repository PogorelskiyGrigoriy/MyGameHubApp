import { Card, Image, Heading, VStack, HStack } from "@chakra-ui/react";
import { type Game } from "../models/fetch-types";
import CriticScore from "./MetacriticScore";
import StarsRater from "./StarsRater";
import PlatformList from "./PlatformList";

interface Props {
  game: Game;
}

// Компонент для отображения информации об игре
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image
        src={game.background_image}
        alt={game.name}
        height="200px"
        width="100%"
        objectFit="cover"
        objectPosition="top"
      />
      <Card.Body>
        <Heading fontSize="2xl" mb={2}>
          {game.name}
        </Heading>

        <VStack alignItems="start" gap={3}>
          <HStack justifyContent="space-between" width="100%" gap={3}>
            <CriticScore metacritic={game.metacritic} />
            <PlatformList platforms={game.parent_platforms} />
          </HStack>

          <StarsRater rating={game.rating} />
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
