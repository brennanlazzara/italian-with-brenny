import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

interface VerbConjugationTableProps {
  verbType: "are" | "ere" | "ire" | "pronounRoot";
  tense: "presenteIndicativo" | "passatoProssimo"; // Add more tenses as needed
}

const conjugationEndings: { [key: string]: { [tense: string]: string[] } } = {
  pronounRoot: {
    presenteIndicativo: ["I", "You", "He/She", "We", "You All", "They"],
    passatoProssimo: [],
  },
  are: {
    presenteIndicativo: ["o", "i", "a", "iamo", "ate", "ano"],
    passatoProssimo: ["ato", "ato", "ato", "ato", "ato", "ato"],
  },
  ere: {
    presenteIndicativo: ["o", "i", "e", "iamo", "ete", "ono"],
    passatoProssimo: ["uto", "uto", "uto", "uto", "uto", "uto"],
  },
  ire: {
    presenteIndicativo: ["o", "i", "e", "iamo", "ite", "ono"],
    passatoProssimo: ["ito", "ito", "ito", "ito", "ito", "ito"],
  },
};

function VerbConjugationTable({ verbType, tense }: VerbConjugationTableProps) {
  const endings = conjugationEndings[verbType][tense];

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Singular</Th>
            <Th>Plural</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Io = {endings[0]}</Td>
            <Td>Noi = {endings[3]}</Td>
          </Tr>
          <Tr>
            <Td>Tu = {endings[1]}</Td>
            <Td>Voi = {endings[4]}</Td>
          </Tr>
          <Tr>
            <Td>Lui/Lei = {endings[2]}</Td>
            <Td>Loro = {endings[5]}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default VerbConjugationTable;
