import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { ColorModeButton } from "./ui/color-mode";

const Nav: React.FC = () => {
  return (
    <HStack justifyContent="space-between" width="100%" padding="10px"> 
      <Image src={logo} alt="Logo" boxSize="60px" objectFit="contain" />
      <ColorModeButton />
    </HStack>
  );
};

export default Nav;
