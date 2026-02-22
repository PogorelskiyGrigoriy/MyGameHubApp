import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

const CriticScore = ({ metacritic }: Props) => {
  const isHighScored = metacritic > 89;
  const bgColor = isHighScored ? "green.500" : "gray.200";
  const textColor = isHighScored ? "white" : "black";

  return (
    <Badge
      backgroundColor={bgColor}
      color={textColor}
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
    >
      {metacritic}
    </Badge>
  );
};

export default CriticScore;