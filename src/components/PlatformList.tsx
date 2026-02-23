import { HStack, Text } from "@chakra-ui/react";
import {type ParentPlatform } from "../models/fetch-types";

interface Props {
  platforms: ParentPlatform[];
}

const platformNames: { [key: number]: string } = {
  1: "PC",
  2: "PlayStation",
  3: "Xbox",
};

const PlatformList = ({ platforms }: Props) => {
  return (
    <HStack gap={2}>
      {platforms.map(({ platform }) => {
        const label = platformNames[platform.id];

        if (!label) return null;

        return (
          <Text
            key={platform.id}
            fontSize="xs"
            fontWeight="bold"
            color="gray.500"
            textTransform="uppercase"
          >
            {label}
          </Text>
        );
      })}
    </HStack>
  );
};

export default PlatformList;