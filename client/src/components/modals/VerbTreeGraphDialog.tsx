import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import VerbConjugationTable from "../verbTreeTable";

interface VerbTreeGraphDialogProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  tense: "presenteIndicativo" | "passatoProssimo";
  verbType: "are" | "ere" | "ire" | "pronounRoot" | "irregular";
  irregularConjugations?: { [key: string]: string };
}

const VerbTreeGraphDialog: React.FC<VerbTreeGraphDialogProps> = ({
  title,
  isOpen,
  onClose,
  tense,
  verbType,
  irregularConjugations,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VerbConjugationTable
            verbType={verbType}
            tense={tense}
            irregularConjugations={irregularConjugations}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default VerbTreeGraphDialog;
