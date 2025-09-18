import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="products/:productId" element={<ProductDetail />}></Route>
        <Route path="cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
