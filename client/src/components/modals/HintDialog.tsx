import React from "react";
import { FaLightbulb } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Divider,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

interface HintDialogProps {
  isOpen: boolean;
  onClose: () => void;
  hint: {
    type: string;
    endings: string[];
  };
  cancelRef: React.RefObject<HTMLButtonElement>;
}

const HintDialog: React.FC<HintDialogProps> = ({
  isOpen,
  onClose,
  hint,
  cancelRef,
}) => {
  return (
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
  );
};

export default HintDialog;
