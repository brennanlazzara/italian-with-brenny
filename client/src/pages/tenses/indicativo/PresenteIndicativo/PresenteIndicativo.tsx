import React from "react";
import { Box, Flex, Heading, VStack, Container } from "@chakra-ui/react";
import RegularCard from "./RegularCard";
import IrregularCard from "./IrregularCard";

const PresenteIndicativo = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch" w="full">
        <Heading as="h1" size="xl" textAlign="center">
          Presente Indicativo
        </Heading>
        <Flex
          justify="space-evenly"
          align="stretch"
          wrap={{ base: "wrap", md: "nowrap" }}
        >
          <Box width={{ base: "100%", md: "45%" }} mb={{ base: 4, md: 0 }}>
            <RegularCard />
          </Box>
          <Box width={{ base: "100%", md: "45%" }}>
            <IrregularCard />
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default PresenteIndicativo;