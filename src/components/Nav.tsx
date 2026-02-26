import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput"; // Импортируем наш новый компонент

interface Props {
  onSearch: (searchText: string) => void;
}

const Nav: React.FC<Props> = ({ onSearch }) => {
  return (
    <HStack width="100%" padding="10px" gap={10} justifyContent="space-between">

      <Image src={logo} alt="Logo" boxSize="60px" objectFit="contain" />

      <SearchInput onSearch={onSearch} />

      <ColorModeButton />
    </HStack>
  );
};

export default Nav;
