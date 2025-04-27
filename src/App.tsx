import { useState } from "react";
import Header from "./components/layouts/Header";
import "./styles/index.scss";
import Main from "./components/layouts/Main";
import Footer from "./components/layouts/Footer";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./components/pages/ProductPage";
import Cart from "./components/Cart";
import OrderPage from "./components/pages/OrderPage";
function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="/shop/product/:id" index element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<OrderPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
