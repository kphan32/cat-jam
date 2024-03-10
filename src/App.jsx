import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import SelectInstrument from "./screens/SelectInstrument";
import Guitar from "./screens/Guitar";
import Piano from "./screens/Piano";
import Drumset from "./screens/Drumset";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instruments" element={<SelectInstrument />} />
          <Route path="/guitar" element={<Guitar />} />
          <Route path="/piano" element={<Piano />} />
          <Route path="/drumset" element={<Drumset />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
