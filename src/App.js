import { Routes, Route, Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from './components/Footer';
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import { CartProvider } from "./context/CartContext";



function App() {



  return (
    <div>

      <CartProvider>

        <Header></Header>
        <br></br>

        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />

        </Routes>

        <Footer></Footer>
      </CartProvider>

    </div>
  );
}

export default App;
