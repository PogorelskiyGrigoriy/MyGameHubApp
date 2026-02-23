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
      fontWeight="bold"
      borderRadius="full"
      width="35px"
      height="35px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      padding={0}
    >
      {metacritic}
    </Badge>
  );
};

export default CriticScore;