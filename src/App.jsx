import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import ApiProvider from "./context/ApiContext";
import Profile from "./components/Profile";

const App = () => {
  const { token } = useContext(UserContext);

  return (
    <>
        <ApiProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route 
                path="/Register" 
                element={token ? <Navigate to="/" /> : <Register />} 
              />
              <Route 
                path="/login" 
                element={token ? <Navigate to="/" /> : <Login />} 
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route 
                path="/profile" 
                element={token ? <Profile /> : <Navigate to="/login" />} 
              />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </CartProvider>
        </ApiProvider>
    </>
  );
};

export default App;
