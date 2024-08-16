import { Box, Button, useColorMode } from "@chakra-ui/react";

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} mb={4}>
      Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};

export default ColorModeSwitcher;
