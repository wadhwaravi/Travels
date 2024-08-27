import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Hotel from "../Pages/Hotel";
import AskLocalPage from "../Components/Home/AskLocalPage";
import Marketplace from "../Components/MarketPlace/Marketplace";
import ProductDetail from "../Components/MarketPlace/ProductDetail";
import CitySelection from "../Components/Home/CitySelection";
import Homefour from "../Components/Home/AskALocal";

import CartPage from "../Components/Cart/CartPage";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/hotel" element={<Hotel />}></Route>
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/marketplace/:id" element={<ProductDetail />} />
      <Route path="/ask-a-local" element={<Homefour />} />
      <Route path="/connect-with-local" element={<AskLocalPage />} />
      <Route path="/city-selection" element={<CitySelection />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default AllRoutes;
