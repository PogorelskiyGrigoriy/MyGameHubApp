import { HStack, Text } from "@chakra-ui/react";
import { type ParentPlatform } from "../models/fetch-types";

interface Props {
  platforms: ParentPlatform[];
}

const PlatformList = ({ platforms }: Props) => {
  return (
    <HStack
      gap={2}
      flexWrap="wrap"
      justifyContent="flex-end" // Прижимает элементы к правому краю контейнера
      flex="1"                   // Позволяет контейнеру занять свободное место
    >
      {platforms.map(({ platform }) => (
        <Text
          key={platform.id}
          fontSize="xs"
          fontWeight="bold"
          color="gray.500"
          textTransform="uppercase"
          textAlign="right"        // Выравнивает текст по правому краю
        >
          {platform.name}
        </Text>
      ))}
    </HStack>
  );
};

export default PlatformList;