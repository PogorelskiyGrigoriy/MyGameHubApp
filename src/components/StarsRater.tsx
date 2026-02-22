import { HStack, Icon } from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface Props {
  rating: number; // получаем, например, 4.5
}

const StarsRater = ({ rating }: Props) => {
  // Создаем массив из 5 элементов
  const stars = Array.from({ length: 5 }, (_, i) => {
    const index = i + 1;
    if (rating >= index) {
      return <Icon key={i} as={FaStar} color="yellow.400" />;
    } else if (rating >= index - 0.5) {
      return <Icon key={i} as={FaStarHalfAlt} color="yellow.400" />;
    } else {
      return <Icon key={i} as={FaRegStar} color="gray.300" />;
    }
  });

  return <HStack gap={1}>{stars}</HStack>;
};

export default StarsRater;