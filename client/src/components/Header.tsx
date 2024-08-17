import React from "react";
import { Heading, useColorModeValue } from "@chakra-ui/react";

const Header = () => {
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Heading as="h1" size="2xl" color={textColor} textAlign="center">
      Welcome to Brenny's World of Italian
    </Heading>
  );
};

export default Header;
