import React, { useState, useEffect, useRef } from "react";
import { FaLightbulb } from "react-icons/fa";
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  VStack,
  HStack,
  ScaleFade,
  Badge,
  Divider,
  useColorModeValue,
  Spinner,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { InfoIcon } from "@chakra-ui/icons";

// import { get } from "http";

const FlashCard = () => {
  const [pronoun, setPronoun] = useState("");
  const [verb, setVerb] = useState("");
  const [verbType, setVerbType] = useState("");
  const [pronouns, setPronouns] = useState<string[]>([]);
  const [pronounType, setPronounType] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hasFlippedOnce, setHasFlippedOnce] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    fetchRandomPronoun();
    fetchRandomVerb();
  }, []);

  const fetchRandomPronoun = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5001/api/pronouns/random/subject"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data && data.pronouns && data.pronouns.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.pronouns.length);
        setPronoun(data.pronouns[randomIndex]);
        setPronounType(data.type);
      } else {
        throw new Error("No pronouns data received");
      }
    } catch (error) {
      console.error("Error fetching random pronoun:", error);
      // Optionally, set an error state here
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRandomVerb = async () => {
    setIsLoading(true);
    try {
      // ENV THIS URL VARIABLE BELOW
      const response = await fetch("http://localhost:5001/api/verbs/random");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setVerb(data.infinitive);
      setVerbType(data.type);
    } catch (error) {
      console.error("Error fetching random verb:", error);
      // Optionally, set an error state here
    } finally {
      setIsLoading(false);
    }
  };

  const conjugatePresenteIndicativo = (pronoun: string, verb: string) => {
    const stem = verb.slice(0, -3); // Remove the -are, -ere, or -ire ending
    const ending = verb.slice(-3);

    switch (pronoun) {
      case "Io":
        return `${stem}o`;
      case "Tu":
        return `${stem}i`;
      case "Lui/Lei":
        return `${stem}${ending === "are" ? "a" : "e"}`;
      case "Noi":
        return `${stem}iamo`;
      case "Voi":
        return `${stem}${
          ending === "are" ? "ate" : ending === "ere" ? "ete" : "ite"
        }`;
      case "Loro":
        return `${stem}${ending === "are" ? "ano" : "ono"}`;
      default:
        return verb;
    }
  };

  const checkAnswer = () => {
    const correctAnswer = conjugatePresenteIndicativo(pronoun, verb);
    setIsCorrect(
      userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()
    );
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setHasFlippedOnce(true);
  };

  const bgColor = useColorModeValue("white", "gray.700");
  const cardBgColor = useColorModeValue("gray.100", "gray.600");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const getNewCard = () => {
    fetchRandomPronoun();
    fetchRandomVerb();
    setIsFlipped(false);
    setUserAnswer("");
    setIsCorrect(null);
    setHasFlippedOnce(false);
  };

  const getHint = () => {
    if (verbType === "are") {
      return {
        type: "This is an -ARE verb.",
        endings: ["-o", "-i", "-a", "-iamo", "-ate", "-ano"],
      };
    } else if (verbType === "ere") {
      return {
        type: "This is an -ERE verb.",
        endings: ["-o", "-i", "-e", "-iamo", "-ete", "-ono"],
      };
    } else if (verbType === "ire") {
      return {
        type: "This is an -IRE verb.",
        endings: ["-o", "-i", "-e", "-iamo", "-ite", "-ono"],
      };
    }
    return { type: "", endings: [] };
  };

  const hint = getHint();

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="6"
      boxShadow="lg"
      bg={bgColor}
      borderColor={borderColor}
    >
      <VStack spacing={4}>
        <HStack spacing={4}>
          <Heading fontSize="xl">Presente Indicativo</Heading>
          <InfoIcon onClick={onOpen} cursor="pointer" />
        </HStack>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <AlertDialogContent
              maxW="400px"
              width="90%"
              position="relative"
              mx="auto"
            >
              <AlertDialogHeader
                fontSize="xl"
                fontWeight="bold"
                textAlign="center"
                pb={2}
              >
                <HStack justify="center" spacing={2}>
                  <FaLightbulb color="#F6E05E" />{" "}
                  {/* Yellow color for the lightbulb */}
                  <Text>Conjugation Hint</Text>
                </HStack>
              </AlertDialogHeader>

              <Divider borderColor="gray.300" borderWidth="2px" />

              <AlertDialogBody pt={4}>
                <VStack align="center" spacing={4} py={4}>
                  <Text fontSize="lg" fontWeight="medium" color="blue.600">
                    {hint.type}
                  </Text>
                  <Text fontSize="md">Common endings:</Text>
                  <Text fontSize="lg" fontWeight="bold" color="green.600">
                    {hint.endings.join(" · ")}
                  </Text>
                </VStack>
              </AlertDialogBody>

              <AlertDialogFooter justifyContent="center">
                <Button
                  ref={cancelRef}
                  onClick={onClose}
                  colorScheme="blue"
                  size="lg"
                  px={8}
                >
                  Got it!
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>

        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Badge
              colorScheme={
                verbType === "are"
                  ? "green"
                  : verbType === "ere"
                  ? "blue"
                  : "purple"
              }
            >
              Regular {verbType.toUpperCase()} Verb
            </Badge>
            <Box
              as={motion.div}
              w="100%"
              h="150px"
              bg={cardBgColor}
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              borderRadius="md"
              onClick={handleFlip}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ScaleFade in={true} initialScale={0.9}>
                <Text fontSize="2xl" fontWeight="bold">
                  {isFlipped ? verb : pronoun}
                </Text>
              </ScaleFade>
            </Box>
            {!hasFlippedOnce && (
              <Text fontSize="sm" color="gray.500">
                Click the card to flip
              </Text>
            )}
            <Input
              placeholder="Enter conjugation (example: 'Uso')"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  checkAnswer();
                }
              }}
            />
            <HStack spacing={4} width="100%">
              <Button colorScheme="gray" onClick={getNewCard} flex={1}>
                New Card
              </Button>
              <Button colorScheme="blue" onClick={checkAnswer} flex={1}>
                Check Answer
              </Button>
            </HStack>
            {isCorrect !== null && (
              <Text
                color={isCorrect ? "green.500" : "red.500"}
                fontWeight="bold"
              >
                {isCorrect ? "Correct!" : "Incorrect. Try again!"}
              </Text>
            )}
          </>
        )}
      </VStack>
    </Box>
  );
};

export default FlashCard;
