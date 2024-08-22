import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Grid,
  Box,
  Text,
} from "@chakra-ui/react";
import VerbConjugationTable from "../verbTreeTable";

const PronounRoot = ({
  tense,
}: {
  tense: "presenteIndicativo" | "passatoProssimo";
}) => (
  <VerbConjugationTable
    verbType="pronounRoot"
    tense={tense as "presenteIndicativo" | "passatoProssimo"}
  />
);
const AreVerbTable = ({
  tense,
}: {
  tense: "presenteIndicativo" | "passatoProssimo";
}) => (
  <VerbConjugationTable
    verbType="are"
    tense={tense as "presenteIndicativo" | "passatoProssimo"}
  />
);
const EreVerbTable = ({
  tense,
}: {
  tense: "presenteIndicativo" | "passatoProssimo";
}) => (
  <VerbConjugationTable
    verbType="ere"
    tense={tense as "presenteIndicativo" | "passatoProssimo"}
  />
);
const IreVerbTable = ({
  tense,
}: {
  tense: "presenteIndicativo" | "passatoProssimo";
}) => (
  <VerbConjugationTable
    verbType="ire"
    tense={tense as "presenteIndicativo" | "passatoProssimo"}
  />
);

interface VerbTreeGraphDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  tense: "presenteIndicativo" | "passatoProssimo"; // Add more tenses as needed
}

const VerbTreeGraphDialog: React.FC<VerbTreeGraphDialogProps> = ({
  isOpen,
  onClose,
  title,
  tense,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <Box>
              <Text>ARE Verbs</Text>
              <AreVerbTable tense={tense} />
            </Box>
            <Box>
              <Text>ERE Verbs</Text>
              <EreVerbTable tense={tense} />
            </Box>
            <Box>
              <Text>IRE Verbs</Text>
              <IreVerbTable tense={tense} />
            </Box>
            <Box>
              <Text>Pronoun Root</Text>
              <PronounRoot tense={tense} />
            </Box>
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default VerbTreeGraphDialog;
