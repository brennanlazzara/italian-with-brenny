import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import FlashCard from "../components/FlashCard";

const Home = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Box bg={bgColor} minH="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="center">
          <Heading as="h1" size="2xl" color={textColor} textAlign="center">
            Welcome to Brenny's World of Italian
          </Heading>
          <Text fontSize="xl" color={textColor} textAlign="center">
            Master Italian verb conjugations with my interactive flashcards!
          </Text>
          <Box w="full" maxW="md">
            <FlashCard />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Home;
