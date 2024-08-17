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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Grid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { InfoIcon } from "@chakra-ui/icons";
import VerbConjugationTable from "./verbTreeTable";
import PresenteIndicativoLesson from "./modals/PresenteIndicativoLesson";

// Define tables for each verb type
const PronounRoot = () => <VerbConjugationTable verbType="pronounRoot" />;
const AreVerbTable = () => <VerbConjugationTable verbType="are" />;
const EreVerbTable = () => <VerbConjugationTable verbType="ere" />;
const IreVerbTable = () => <VerbConjugationTable verbType="ire" />;

const FlashCard = () => {
  const [pronoun, setPronoun] = useState("");
  const [verb, setVerb] = useState("");
  const [verbType, setVerbType] = useState("");
  const [verbDefinition, setVerbDefinition] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hasFlippedOnce, setHasFlippedOnce] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const lessonModalRef = useRef<{ onLessonModalOpen: () => void }>(null);

  useEffect(() => {
    fetchRandomPronoun();
    fetchRandomVerb();
  }, []);

  const fetchRandomPronoun = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_LOCAL_URL}/api/pronouns/random/subject`
      );
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      if (data && data.pronouns && data.pronouns.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.pronouns.length);
        setPronoun(data.pronouns[randomIndex]);
      } else {
        throw new Error("No pronouns data received");
      }
    } catch (error) {
      console.error("Error fetching random pronoun:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRandomVerb = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_LOCAL_URL}/api/verbs/random`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setVerb(data.infinitive);
      setVerbType(data.type);
      setVerbDefinition(data.definition);
    } catch (error) {
      console.error("Error fetching random verb:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const conjugatePresenteIndicativo = (pronoun: string, verb: string) => {
    const stem = verb.slice(0, -3);
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
    const isAnswerCorrect =
      userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setTimeout(() => {
        getNewCard();
      }, 1000);
    }
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
        type: `This is an -ARE verb. (${verbDefinition})`,
        endings: ["-o", "-i", "-a", "-iamo", "-ate", "-ano"],
      };
    } else if (verbType === "ere") {
      return {
        type: `This is an -ERE verb. (${verbDefinition})`,
        endings: ["-o", "-i", "-e", "-iamo", "-ete", "-ono"],
      };
    } else if (verbType === "ire") {
      return {
        type: `This is an -IRE verb. (${verbDefinition})`,
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
              Regular -{verbType.toUpperCase()} Verb
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
        <Button colorScheme="green" onClick={onModalOpen}>
          View My Verb Tree Graphs
        </Button>
        <Button
          colorScheme="green"
          onClick={() => lessonModalRef.current?.onLessonModalOpen()}
        >
          A Helpful Lesson
        </Button>

        {/* Verb Tree Graph Dialog */}
        <Modal isOpen={isModalOpen} onClose={onModalClose} size="2xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center">Verb Tree Graphs</ModalHeader>
            <ModalCloseButton />
            <ModalBody overflow="auto" p={4}>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <Box mb={4} overflow="hidden">
                  <Text
                    textAlign="center"
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                  >
                    Root
                  </Text>
                  <PronounRoot />
                </Box>
                <Box mb={4} overflow="hidden">
                  <Text
                    textAlign="center"
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                  >
                    ARE
                  </Text>
                  <AreVerbTable />
                </Box>
                <Box mb={4} overflow="hidden">
                  <Text
                    textAlign="center"
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                  >
                    ERE
                  </Text>
                  <EreVerbTable />
                </Box>
                <Box mb={4} overflow="hidden">
                  <Text
                    textAlign="center"
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                  >
                    IRE
                  </Text>
                  <IreVerbTable />
                </Box>
              </Grid>
            </ModalBody>
          </ModalContent>
        </Modal>

        <PresenteIndicativoLesson ref={lessonModalRef} />

        {/* HINT DIALOG */}
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
                  <FaLightbulb color="#F6E05E" /> <Text>Conjugation Hint</Text>
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
      </VStack>
    </Box>
  );
};

export default FlashCard;
