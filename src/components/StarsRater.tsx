import { HStack, Icon } from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface Props {
  rating: number; 
}

const StarsRater = ({ rating }: Props) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const diff = rating - i;

    if (diff > 0.75) {
      return <Icon key={i} as={FaStar} color="yellow.400" />;
    } else if (diff > 0.25) {
      return <Icon key={i} as={FaStarHalfAlt} color="yellow.400" />;
    } else {
      return <Icon key={i} as={FaRegStar} color="gray.300" />;
    }
  });

  return <HStack gap={1}>{stars}</HStack>;
};

export default StarsRater;