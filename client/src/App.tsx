import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, ColorModeScript, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// INDICATIVO
import PresenteIndicativo from "./pages/tenses/indicativo/PresenteIndicativo/PresenteIndicativo";
import IndicativoPassatoProssimo from "./pages/tenses/indicativo/PassatoProssimo";
import IndicativoImperfetto from "./pages/tenses/indicativo/Imperfetto";
import IndicativoTrapassatoProssimo from "./pages/tenses/indicativo/TrapassatoProssimo";
import IndicativoPassatoRemoto from "./pages/tenses/indicativo/PassatoRemoto";
import IndicativoTrapassatoRemoto from "./pages/tenses/indicativo/TrapassatoRemoto";
import IndicativoFuturoSemplice from "./pages/tenses/indicativo/FuturoSemplice";
import IndicativoFuturoAnteriore from "./pages/tenses/indicativo/FuturoAnteriore";
// CONGIUNTIVO
import CongiuntivoPresente from "./pages/tenses/congiuntivo/Presente";
import CongiuntivoPassato from "./pages/tenses/congiuntivo/Passato";
import CongiuntivoImperfetto from "./pages/tenses/congiuntivo/Imperfetto";
import CongiuntivoTrapassato from "./pages/tenses/congiuntivo/Trapassato";
// CONDIZIONALE
import CondizionalePresente from "./pages/tenses/condizionale/Presente";
import CondizionalePassato from "./pages/tenses/condizionale/Passato";
// IMPERATIVO
import ImperativoPresente from "./pages/tenses/imperativo/Presente";
// INFINITO
import InfinitoPresente from "./pages/tenses/infinito/Presente";
import InfinitoPassato from "./pages/tenses/infinito/Passato";
// PARTICIPIO
import ParticipioPresente from "./pages/tenses/participio/Presente";
import ParticipioPassato from "./pages/tenses/participio/Passato";
// GERUNDIO
import GerundioPresente from "./pages/tenses/gerundio/Presente";
import GerundioPassato from "./pages/tenses/gerundio/Passato";

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
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Indicativo routes */}
              <Route
                path="/verb-conjugation/indicativo/presente"
                element={<PresenteIndicativo />}
              />
              <Route
                path="/verb-conjugation/indicativo/passato-prossimo"
                element={<IndicativoPassatoProssimo />}
              />
              <Route
                path="/verb-conjugation/indicativo/imperfetto"
                element={<IndicativoImperfetto />}
              />
              <Route
                path="/verb-conjugation/indicativo/trapassato-prossimo"
                element={<IndicativoTrapassatoProssimo />}
              />
              <Route
                path="/verb-conjugation/indicativo/passato-remoto"
                element={<IndicativoPassatoRemoto />}
              />
              <Route
                path="/verb-conjugation/indicativo/trapassato-remoto"
                element={<IndicativoTrapassatoRemoto />}
              />
              <Route
                path="/verb-conjugation/indicativo/futuro-semplice"
                element={<IndicativoFuturoSemplice />}
              />
              <Route
                path="/verb-conjugation/indicativo/futuro-anteriore"
                element={<IndicativoFuturoAnteriore />}
              />

              {/* Congiuntivo routes */}
              <Route
                path="/verb-conjugation/congiuntivo/presente"
                element={<CongiuntivoPresente />}
              />
              <Route
                path="/verb-conjugation/congiuntivo/passato"
                element={<CongiuntivoPassato />}
              />
              <Route
                path="/verb-conjugation/congiuntivo/imperfetto"
                element={<CongiuntivoImperfetto />}
              />
              <Route
                path="/verb-conjugation/congiuntivo/trapassato"
                element={<CongiuntivoTrapassato />}
              />

              {/* Condizionale routes */}
              <Route
                path="/verb-conjugation/condizionale/presente"
                element={<CondizionalePresente />}
              />
              <Route
                path="/verb-conjugation/condizionale/passato"
                element={<CondizionalePassato />}
              />

              {/* Imperativo route */}
              <Route
                path="/verb-conjugation/imperativo/presente"
                element={<ImperativoPresente />}
              />

              {/* Infinito routes */}
              <Route
                path="/verb-conjugation/infinito/presente"
                element={<InfinitoPresente />}
              />
              <Route
                path="/verb-conjugation/infinito/passato"
                element={<InfinitoPassato />}
              />

              {/* Participio routes */}
              <Route
                path="/verb-conjugation/participio/presente"
                element={<ParticipioPresente />}
              />
              <Route
                path="/verb-conjugation/participio/passato"
                element={<ParticipioPassato />}
              />

              {/* Gerundio routes */}
              <Route
                path="/verb-conjugation/gerundio/presente"
                element={<GerundioPresente />}
              />
              <Route
                path="/verb-conjugation/gerundio/passato"
                element={<GerundioPassato />}
              />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
