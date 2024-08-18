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

const PronounRoot = () => <VerbConjugationTable verbType="pronounRoot" />;
const AreVerbTable = () => <VerbConjugationTable verbType="are" />;
const EreVerbTable = () => <VerbConjugationTable verbType="ere" />;
const IreVerbTable = () => <VerbConjugationTable verbType="ire" />;

interface VerbTreeGraphDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const VerbTreeGraphDialog: React.FC<VerbTreeGraphDialogProps> = ({
  isOpen,
  onClose,
  title,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody overflow="auto" p={4}>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <Box mb={4} overflow="hidden">
              <Text textAlign="center" fontSize="lg" fontWeight="bold" mb={2}>
                Root
              </Text>
              <PronounRoot />
            </Box>
            <Box mb={4} overflow="hidden">
              <Text textAlign="center" fontSize="lg" fontWeight="bold" mb={2}>
                ARE
              </Text>
              <AreVerbTable />
            </Box>
            <Box mb={4} overflow="hidden">
              <Text textAlign="center" fontSize="lg" fontWeight="bold" mb={2}>
                ERE
              </Text>
              <EreVerbTable />
            </Box>
            <Box mb={4} overflow="hidden">
              <Text textAlign="center" fontSize="lg" fontWeight="bold" mb={2}>
                IRE
              </Text>
              <IreVerbTable />
            </Box>
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default VerbTreeGraphDialog;
