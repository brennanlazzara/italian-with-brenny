import React from "react";
import { Box, Flex, Heading, VStack, Container } from "@chakra-ui/react";
import RegularAvereCard from "./RegularAvereCard";
import RegularEssereCard from "./RegularEssereCard";

const PassatoProssimo = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch" w="full">
        <Heading as="h1" size="xl" textAlign="center">
          Passato Prossimo
        </Heading>
        <Flex
          justify="space-evenly"
          align="stretch"
          wrap={{ base: "wrap", md: "nowrap" }}
        >
          <Box width={{ base: "100%", md: "45%" }} mb={{ base: 4, md: 0 }}>
            <RegularAvereCard />
          </Box>
          <Box width={{ base: "100%", md: "45%" }}>
            <RegularEssereCard />
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default PassatoProssimo;
