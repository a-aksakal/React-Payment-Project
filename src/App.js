import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import { LoginProvider } from "./store/LoginContext";
import ProductsPage from "./pages/products/ProductsPage";
import { CartProvider } from "./store/CartContext";
import PaymentPage from "./pages/payment/PaymentPage";
function App() {
  return (
    <>
      <LoginProvider>
        <CartProvider>
          <div className="body">
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/payment" element={<PaymentPage />} />
            </Routes>
          </div>
        </CartProvider>
      </LoginProvider>
    </>
  );
}

export default App;
