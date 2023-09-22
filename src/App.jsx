import { Route, Routes, useLocation } from "react-router";
import NavBar from "./Global-shit/NavBar";
import { AnimatePresence } from "framer-motion";
import Protfolio from "./components/pages/Protfolio";
import { useEffect } from "react";
import { lazy } from "react";

const About = lazy(() => import("./components/pages/About"));
const Contact = lazy(() => import("./components/pages/Contact"));
const PrivacyPolicy = lazy(() => import("./components/pages/PrivacyPolicy"));

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scroll({ top: 0, bottom: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
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
