import { Route, Routes } from "react-router";
import NavBar from "./Global-shit/NavBar";
import { AnimatePresence } from "framer-motion";
import Protfolio from "./components/pages/Protfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";

function App() {
  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route element={<Protfolio />} path="/"></Route>
          <Route element={<About />} path="/about-us"></Route>
          <Route element={<Contact />} path="/contact"></Route>
          <Route element={<PrivacyPolicy />} path="/privacy-policy"></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
