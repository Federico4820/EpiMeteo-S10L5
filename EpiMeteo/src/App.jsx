import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavMeteo from "./components/NavMeteo";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import FooterMeteo from "./components/FooterMeteo";
import InfoMeteo from "./components/InfoMeteo";

function App() {
  return (
    <BrowserRouter>
      <NavMeteo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/info/:Luogo" element={<InfoMeteo />} />
      </Routes>
      <FooterMeteo />
    </BrowserRouter>
  );
}

export default App;
