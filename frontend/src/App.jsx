import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/protected-route";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import About from "./pages/about";
import Services from "./pages/services";
import Dashboard from "./pages/dashboard";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /> </ProtectedRoute>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
