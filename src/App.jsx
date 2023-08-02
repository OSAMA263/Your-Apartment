import { Route, Routes } from "react-router";
import NavBar from "./Global-comps/NavBar";
import { AnimatePresence } from "framer-motion";
import Protfolio from "./components/pages/Protfolio";

function App() {
  return (
    <>
      <NavBar />
        <AnimatePresence mode="wait">
      <Routes>
          <Route element={<Protfolio />} path="/"></Route>
      </Routes>
        </AnimatePresence>
    </>
  );
}

export default App;
