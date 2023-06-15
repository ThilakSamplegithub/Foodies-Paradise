import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AdminPage from "./AdminPage";
import ProductPage from "./ProductPage";
import AddToCartPage from "./AddToCartPage";
import SingleProductPage from "./SingleProductPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/addToCart" element={<AddToCartPage />} />
      <Route path="/singleProductPage/:id" element={<SingleProductPage />} />
    </Routes>
  );
};
