import React from "react";
import { Heading, useColorModeValue } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";

const Header = () => {
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <>
      <Heading as="h1" size="2xl" color={textColor} textAlign="center">
        Welcome to Brenny's World of Italian
      </Heading>
      <ColorModeSwitcher />
    </>
  );
};

export default Header;
