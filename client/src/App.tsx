import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, ColorModeScript, Box } from "@chakra-ui/react";
import VerbConjugation from "./pages/VerbConjugation";
import Header from "./components/Header";

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript />
      <Router>
        <Box className="App">
          <Header />
          <Box p={4}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/verb-conjugation" element={<VerbConjugation />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

function Home() {
  return <h2>Welcome to Italian Verb Master!</h2>;
}

function About() {
  return <h2>About Italian Verb Master</h2>;
}

function Contact() {
  return <h2>Contact Us</h2>;
}

export default App;
