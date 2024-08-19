import React, { useState, useEffect, useRef } from "react";
import { InfoIcon } from "@chakra-ui/icons";
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
  useColorModeValue,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import VerbTreeGraphDialog from "../../../../components/modals/VerbTreeGraphDialog";
import HintDialog from "../../../../components/modals/HintDialog";
// import PassatoProssimoLesson from "../../../../components/modals/PassatoProssimoLesson";

const RegularAvereCard = () => {
  const [pronoun, setPronoun] = useState("");
  const [verb, setVerb] = useState({
    infinitive: "",
    type: "",
    definition: "",
  });
  const [userAnswer, setUserAnswer] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hasFlippedOnce, setHasFlippedOnce] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    isOpen: isHintOpen,
    onOpen: onHintOpen,
    onClose: onHintClose,
  } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const {
    isOpen: isVerbTreeOpen,
    onOpen: onVerbTreeOpen,
    onClose: onVerbTreeClose,
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
      console.log("Random Verb Data:", data); // Log the fetched data

      // Check if the verb has auxiliaryVerb: "avere" and isRegular: true
      if (data.auxiliaryVerb === "avere" && data.regularPassatoProssimo === true) {
        setVerb({
          infinitive: data.infinitive,
          type: data.type,
          definition: data.definition,
        });
      } else {
        console.log(
          "Verb does not meet criteria: auxiliaryVerb 'avere' and isRegular true"
        );
        // Optionally, handle this case (e.g., fetch another verb, show a message, etc.)
      }
    } catch (error) {
      console.error("Error fetching random verb:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const conjugatePassatoProssimo = (
    pronoun: string,
    verb: { infinitive: string; type: string }
  ) => {
    const auxiliaryVerb = getAuxiliaryVerb(pronoun);
    const pastParticiple = getPastParticiple(verb.infinitive, verb.type);
    return `${auxiliaryVerb} ${pastParticiple}`;
  };

  const getAuxiliaryVerb = (pronoun: string) => {
    switch (pronoun) {
      case "Io":
        return "ho";
      case "Tu":
        return "hai";
      case "Lui/Lei":
        return "ha";
      case "Noi":
        return "abbiamo";
      case "Voi":
        return "avete";
      case "Loro":
        return "hanno";
      default:
        return "";
    }
  };

  const getPastParticiple = (infinitive: string, verbType: string) => {
    const stem = infinitive.slice(0, -3);
    switch (verbType) {
      case "are":
        return `${stem}ato`;
      case "ere":
        return `${stem}uto`;
      case "ire":
        return `${stem}ito`;
      default:
        return "";
    }
  };

  const checkAnswer = () => {
    const correctAnswer = conjugatePassatoProssimo(pronoun, verb);
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
    return {
      type: `This is an -${verb.type.toUpperCase()} verb. (${verb.definition})`,
      auxiliaryVerbs: ["ho", "hai", "ha", "abbiamo", "avete", "hanno"],
      pastParticiple: `For -${verb.type} verbs, remove -${verb.type} and add -${
        verb.type === "are" ? "ato" : verb.type === "ere" ? "uto" : "ito"
      }`,
    };
  };

  const hint = {
    type: `This is an -${verb.type.toUpperCase()} verb. (${verb.definition})`,
    endings: ["ato", "uto", "ito"],
    auxiliaryVerbs: ["ho", "hai", "ha", "abbiamo", "avete", "hanno"],
    pastParticiple: `For -${verb.type} verbs, remove -${verb.type} and add -${
      verb.type === "are" ? "ato" : verb.type === "ere" ? "uto" : "ito"
    }`,
  };

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
          <Heading fontSize="xl">Passato Prossimo Regular Verbs (Avere)</Heading>
          <InfoIcon onClick={onHintOpen} cursor="pointer" />
        </HStack>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Badge
              colorScheme={
                verb.type === "are"
                  ? "green"
                  : verb.type === "ere"
                  ? "blue"
                  : "purple"
              }
            >
            Avere  -{verb.type.toUpperCase()}
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
                  {isFlipped ? verb.infinitive : pronoun}
                </Text>
              </ScaleFade>
            </Box>
            {!hasFlippedOnce && (
              <Text fontSize="sm" color="gray.500">
                Click the card to flip
              </Text>
            )}
            <Input
              placeholder="Enter conjugation (example: 'ho parlato')"
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
        <Button colorScheme="green" onClick={onVerbTreeOpen}>
          View My Verb Tree Graphs
        </Button>
        <Button
          colorScheme="green"
          onClick={() => lessonModalRef.current?.onLessonModalOpen()}
        >
          A Helpful Lesson
        </Button>

        <HintDialog
          isOpen={isHintOpen}
          onClose={onHintClose}
          hint={hint}
          cancelRef={cancelRef}
        />

        <VerbTreeGraphDialog
          title="Passato Prossimo Tree Graphs"
          isOpen={isVerbTreeOpen}
          onClose={onVerbTreeClose}
        />

        {/* <PassatoProssimoLesson ref={lessonModalRef} /> */}
      </VStack>
    </Box>
  );
};

export default RegularAvereCard;
