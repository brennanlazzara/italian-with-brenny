import Home from "./pages/Home";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import ColorModeSwitcher from '../src/components/ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript />
      <div className="App">
        <ColorModeSwitcher />
        <Home />
      </div>
    </ChakraProvider>
  );
}

export default App;
