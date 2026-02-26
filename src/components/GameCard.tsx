import { Card, Image, Heading, VStack, HStack } from "@chakra-ui/react";
import { type Game } from "../models/fetch-types";
import CriticScore from "./MetacriticScore";
import StarsRater from "./StarsRater";
import PlatformList from "./PlatformList";

/**
 * We use 'type' here to stay consistent with the rest of the application.
 * GameCard remains a "pure" or "dumb" component because it only displays 
 * data passed via props and doesn't depend on the global store.
 */
type Props = {
  game: Game;
};

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

        {/* Main container for the card footer info */}
        <HStack 
          justifyContent="space-between" 
          alignItems="flex-end" 
          width="full" 
          gap={4}
        >
          {/* Left side: Ratings and Scores (stacked vertically) */}
          <VStack alignItems="flex-start" gap={2} flexShrink={0}>
            <CriticScore metacritic={game.metacritic} />
            <StarsRater rating={game.rating} />
          </VStack>

          {/* Right side: Available Platforms */}
          <PlatformList platforms={game.parent_platforms} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;