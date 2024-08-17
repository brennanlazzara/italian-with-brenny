import React, { forwardRef, useImperativeHandle } from "react";
import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const PresenteIndicativoLesson = forwardRef((props, ref) => {
  const {
    isOpen: isLessonModalOpen,
    onOpen: onLessonModalOpen,
    onClose: onLessonModalClose,
  } = useDisclosure();

  useImperativeHandle(ref, () => ({
    onLessonModalOpen,
  }));

  return (
    <Modal isOpen={isLessonModalOpen} onClose={onLessonModalClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">
          <b>A Helpful Lesson</b>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody p={4}>
          <Text textAlign="center">
            To conjugate regular Italian verbs in the{" "}
            <b>*Presente Indicativo* </b>
            tense, start with the verb's infinitive form. <br /> For{" "}
            <b>*-ARE* </b>
            verbs, remove *-ARE* and add endings like *-o*, *-i*, *-a*, *-iamo*,
            *-ate*, *-ano*. <br /> For <b>*-ERE* </b> verbs, drop *-ERE* and use
            endings like *-o*, *-i*, *-e*, *-iamo*, *-ete*, *-ono*. <br /> For{" "}
            <b>*-IRE* </b> verbs, remove *-IRE* and attach *-o*, *-i*, *-e*,
            *-iamo*, *-ite*, *-ono*. <br /> Just follow this pattern to
            correctly conjugate most verbs in the present tense!
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});

export default PresenteIndicativoLesson;
