import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from "@chakra-ui/react";
  
  function VerbConjugationTable() {
    return (
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Singular</Th>
              <Th>-Plural</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>I = Io</Td>
              <Td>We = Noi</Td>
            </Tr>
            <Tr>
              <Td>You = Tu</Td>
              <Td>-You All = Voi</Td>

            </Tr>
            <Tr>
              <Td>He/She = Lui/Lei</Td>
              <Td>They = Loro</Td>

            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    );
  }
  
  export default VerbConjugationTable;