import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Admin from "./pages/admin";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/produk" element={<Home />} />
        <Route path="/tentang" element={<Home />} />
        <Route path="/kontak" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
