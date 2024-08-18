import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
  IconButton,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import { FaBook, FaLanguage } from 'react-icons/fa';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <RouterLink to="/">
          <Flex alignItems="center">
            <FaLanguage size="24px" />
            <Text fontWeight="bold" ml={2}>
              Italian Verb Master
            </Text>
          </Flex>
        </RouterLink>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <Button as={RouterLink} to="/verb-conjugation" leftIcon={<FaBook />}>
              Verb Conjugation
            </Button>
            
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
              />
              <MenuList>
                <MenuItem as={RouterLink} to="/about">
                  About
                </MenuItem>
                <MenuItem as={RouterLink} to="/contact">
                  Contact
                </MenuItem>
                <MenuItem as='a' href='https://github.com/brennanlazzara' target='_blank'>
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