import { Card, Image, Heading, VStack, HStack } from "@chakra-ui/react";
import { type Game } from "../models/fetch-types";
import CriticScore from "./MetacriticScore";
import StarsRater from "./StarsRater";
import PlatformList from "./PlatformList";

interface Props {
  game: Game;
}

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
        <Heading fontSize="2xl" mb={4}>
          {game.name}
        </Heading>

        {/* Главный контейнер для футера карточки */}
        <HStack justifyContent="space-between" alignItems="flex-end" width="full" gap={4}>

          {/* Левая сторона: Рейтинги (в столбик) */}
          <VStack alignItems="flex-start" gap={2} flexShrink={0}>
            <CriticScore metacritic={game.metacritic} />
            <StarsRater rating={game.rating} />
          </VStack>

          {/* Правая сторона: Платформы */}
          <PlatformList platforms={game.parent_platforms} />

        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
