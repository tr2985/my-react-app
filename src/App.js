import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import Footer from './components/Footer'
import Header from './components/Header'
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import { CartProvider } from "./context/CartContext";
import HomePagePanel from './pages/panel/PanelPage'
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";

function Application() {
  return (
    <div>
      <CartProvider>
        <AuthProvider>
          <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/terms" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/panel" element={<HomePagePanel />} />
            </Route>
          </Routes>
          <Footer></Footer>
        </AuthProvider>
      </CartProvider>
    </div>
  )
}

export default Application