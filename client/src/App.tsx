import Home from "./pages/Home";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript />
      <div className="App">
        <Home />
      </div>
    </ChakraProvider>
  );
}

export default App;
