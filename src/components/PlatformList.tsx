import { HStack, Text } from "@chakra-ui/react";
import { type ParentPlatform } from "../models/fetch-types";

interface Props {
  platforms: ParentPlatform[];
}

const PlatformList = ({ platforms }: Props) => {
  // Добавляем проверку, чтобы компонент не упал, если массив пуст
  if (!platforms) return null;

  return (
    <HStack
      gap={2}
      flexWrap="wrap"
      justifyContent="flex-end"
      flex="1"
    >
      {platforms.map(({ platform }) => (
        <Text
          key={platform.id}
          fontSize="xs"
          fontWeight="bold"
          color="gray.500"
          textTransform="uppercase"
          textAlign="right"
        >
          {platform.name}
        </Text>
      ))}
    </HStack>
  );
};

export default PlatformList;