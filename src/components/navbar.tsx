import { useState, useEffect } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="flex justify-between items-center sticky top-0 px-10 navbar py-3 transparent backdrop-blur-md z-50"
    style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            }}>
      <div className="flex justify-between items-center gap-2">
        <img
          src="/LogoKIM.png"
          alt="Kimglass Logo"
          className="w-15 h-15 bg-white rounded-full"
        />
        <a href="/" className="btn btn-ghost text-xl font-bold text-primary">KIMGLASS</a>
      </div>
      <div className="mr-35">
        <ul className="menu menu-horizontal px-1 gap-4 md:text-md text-sm text-success font-medium">
          <li className="hover:text-primary">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-primary">
            <a href="#about">About Us</a>
          </li>
          <li className="hover:text-primary">
            <a href="#product">Product</a>
          </li>
          <li className="hover:text-primary">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <button>
        <a href="/admin" className="btn btn-primary btn-sm text-white">
          Admin
        </a>
      </button>
    </div>
  );
}
