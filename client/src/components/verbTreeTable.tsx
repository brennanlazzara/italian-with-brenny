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
}

const conjugationEndings: { [key: string]: string[] } = {
  pronounRoot: ["I", "You", "He/She", "We", "You All", "They"],
  are: ["o", "i", "a", "iamo", "ate", "ano"],
  ere: ["o", "i", "e", "iamo", "ete", "ono"],
  ire: ["o", "i", "e", "iamo", "ite", "ono"],
};

function VerbConjugationTable({ verbType }: VerbConjugationTableProps) {
  const endings = conjugationEndings[verbType];

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