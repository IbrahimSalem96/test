//import { Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import {
  ComingSoon,
  SellPage,
  BuyPage,
  JoiningForm,
  NotFoundURL,
} from "./page/index";
import {
  BuyingAndSelling,
  Buyer,
  Seller,
  Agent,
} from "./componentsFormRegistration/index";

import ScrollToTop from "./utils/ScrollToTop";

import "./css/main.css";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/joiningForm" element={<JoiningForm />} />
        <Route
          path="/registration/buying-and-selling"
          element={<BuyingAndSelling />}
        />
        <Route path="/registration/buyer" element={<Buyer />} />
        <Route path="/registration/seller" element={<Seller />} />
        <Route path="/registration/agent" element={<Agent />} />
        <Route path="*" element={<NotFoundURL />} />
      </Routes>
    </>
  );
}

export default App;
