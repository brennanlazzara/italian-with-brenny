import VerbConjugation from "./pages/VerbConjugation";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript />
      <div className="App">
        <VerbConjugation />
      </div>
    </ChakraProvider>
  );
}

export default App;
