import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Dex from "../pages/Dex.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
