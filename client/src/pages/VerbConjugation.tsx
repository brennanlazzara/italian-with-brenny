import React from "react";
import {
  Box,
  Container,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import PresenteIndicativoCard from "../components/PresenteIndicativoCard";

const VerbConjugation = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Box bg={bgColor} minH="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="center">
          <Text fontSize="xl" color={textColor} textAlign="center">
            Master Italian verb conjugations with my interactive flashcards!
          </Text>
          <Box w="full" maxW="md">
            <PresenteIndicativoCard />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default VerbConjugation;
