import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  IconButton,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { FaBook, FaLanguage } from "react-icons/fa";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const verbTenses = [
    {
      name: "Indicativo",
      subtenses: [
        { name: "Presente", path: "/verb-conjugation/indicativo/presente" },
        {
          name: "Passato Prossimo",
          path: "/verb-conjugation/indicativo/passato-prossimo",
        },
        { name: "Imperfetto", path: "/verb-conjugation/indicativo/imperfetto" },
        {
          name: "Trapassato Prossimo",
          path: "/verb-conjugation/indicativo/trapassato-prossimo",
        },
        {
          name: "Passato Remoto",
          path: "/verb-conjugation/indicativo/passato-remoto",
        },
        {
          name: "Trapassato Remoto",
          path: "/verb-conjugation/indicativo/trapassato-remoto",
        },
        {
          name: "Futuro Semplice",
          path: "/verb-conjugation/indicativo/futuro-semplice",
        },
        {
          name: "Futuro Anteriore",
          path: "/verb-conjugation/indicativo/futuro-anteriore",
        },
      ],
    },
    {
      name: "Congiuntivo",
      subtenses: [
        { name: "Presente", path: "/verb-conjugation/congiuntivo/presente" },
        { name: "Passato", path: "/verb-conjugation/congiuntivo/passato" },
        {
          name: "Imperfetto",
          path: "/verb-conjugation/congiuntivo/imperfetto",
        },
        {
          name: "Trapassato",
          path: "/verb-conjugation/congiuntivo/trapassato",
        },
      ],
    },
    {
      name: "Condizionale",
      subtenses: [
        { name: "Presente", path: "/verb-conjugation/condizionale/presente" },
        { name: "Passato", path: "/verb-conjugation/condizionale/passato" },
      ],
    },
    {
      name: "Imperativo",
      subtenses: [
        { name: "Presente", path: "/verb-conjugation/imperativo/presente" },
      ],
    },
    {
      name: "Infinito",
      subtenses: [
        { name: "Presente", path: "/verb-conjugation/infinito/presente" },
        { name: "Passato", path: "/verb-conjugation/infinito/passato" },
      ],
    },
    {
      name: "Participio",
      subtenses: [
        { name: "Presente", path: "/verb-conjugation/participio/presente" },
        { name: "Passato", path: "/verb-conjugation/participio/passato" },
      ],
    },
    {
      name: "Gerundio",
      subtenses: [
        { name: "Presente", path: "/verb-conjugation/gerundio/presente" },
        { name: "Passato", path: "/verb-conjugation/gerundio/passato" },
      ],
    },
  ];

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <RouterLink to="/">
          <Flex alignItems="center">
            <FaLanguage size="24px" />
            <Text fontWeight="bold" ml={2}>
              Italian Verb Master
            </Text>
          </Flex>
        </RouterLink>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={4}>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                leftIcon={<FaBook />}
              >
                Verb Tenses
              </MenuButton>
              <MenuList>
                {verbTenses.map((mood) => (
                  <MenuGroup key={mood.name} title={mood.name}>
                    {mood.subtenses.map((tense) => (
                      <MenuItem
                        key={tense.path}
                        as={RouterLink}
                        to={tense.path}
                      >
                        {tense.name}
                      </MenuItem>
                    ))}
                  </MenuGroup>
                ))}
              </MenuList>
            </Menu>

            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem as={RouterLink} to="/about">
                  About
                </MenuItem>
                <MenuItem as={RouterLink} to="/contact">
                  Contact
                </MenuItem>
                <MenuItem
                  as="a"
                  href="https://github.com/brennanlazzara"
                  target="_blank"
                >
                  GitHub
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
