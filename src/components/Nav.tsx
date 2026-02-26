import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

const Nav = () => {
  return (
    <HStack width="100%" padding="10px" gap={10} justifyContent="space-between">
      <Image src={logo} alt="Logo" boxSize="60px" objectFit="contain" />

      {/* Теперь SearchInput сам берет данные из Zustand, пропсы не нужны */}
      <SearchInput />

      <ColorModeButton />
    </HStack>
  );
};

export default Nav;