//import { Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { ComingSoon, SellPage, BuyPage, JoiningForm } from "./page/index";
import {
  BuyingAndSelling,
  Buyer,
  Seller,
  Agent,
} from "./componentsFormRegistration/index";

import ScrollToTop from './utils/ScrollToTop'
 
import "./css/main.css";
 
function App() {
  return (
    <>
    <ScrollToTop />

      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/the-genuine/sell" element={<SellPage />} />
        <Route path="/the-genuine/buy" element={<BuyPage />} />
        <Route path="/the-genuine/joiningForm" element={<JoiningForm />} />
        <Route path="/the-genuine/registration/buying-and-selling" element={<BuyingAndSelling />} />
        <Route path="/the-genuine/registration/buyer" element={<Buyer />} />
        <Route path="/the-genuine/registration/seller" element={<Seller />} />
        <Route path="/the-genuine/registration/agent" element={<Agent />} />
      </Routes>

    </>
  );
}

export default App;
