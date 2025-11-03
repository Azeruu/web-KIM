import { useState, useEffect } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Cek preferensi tema dari localStorage
    const savedTheme = localStorage.getItem("theme") || "lightcuy";
    const isDarkMode = savedTheme === "darkcuy";

    document.documentElement.setAttribute("data-theme", savedTheme);
    setIsDark(isDarkMode);

    // Handle scroll untuk efek navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "lightcuy" : "darkcuy";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <div
      className={`flex justify-between items-center sticky top-0 px-6 md:px-10 navbar py-3 backdrop-blur-md z-50 transition-all duration-300 ${
        isScrolled
          ? "border-base-300 bg-base-100/80 shadow-lg"
          : "border-base-300/50 bg-base-100/60"
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(-30px)",
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* LOGO + BRAND */}
      <div className="flex justify-between items-center gap-3">
        <div className="relative group">
          <img
            src="/LogoKIM.png"
            alt="Kimglass Logo"
            className="w-12 h-12 rounded-full shadow-md transition-all duration-300 group-hover:shadow-primary/50 group-hover:scale-110"
          />
          <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
        </div>

        <a
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:from-secondary hover:to-accent transition-all duration-300"
        >
          KIMGLASS
        </a>
      </div>

      {/* MENU */}
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal gap-2 md:text-md text-sm font-medium">
          {[
            { name: "Home", href: "#home" },
            { name: "About Us", href: "#about" },
            { name: "Collection", href: "#collection" },
            { name: "Product", href: "#product" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-accent hover:bg-accent/10 transition-all duration-300 rounded-lg relative group px-4"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex items-center gap-3">
        <a
          href="/admin"
          className="hidden md:flex btn btn-sm btn-primary border-none px-5 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Admin
        </a>

        {/* Toggle Tema */}
        <label className="flex cursor-pointer items-center gap-2 bg-base-200/50 rounded-full px-3 py-2 hover:bg-base-200 transition-all duration-300">
          {/* Icon Sun */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-all duration-300 ${
              !isDark
                ? "text-warning scale-110 rotate-0"
                : "text-base-content/30 scale-90 rotate-90"
            }`}
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>

          {/* Toggle switch */}
          <input
            type="checkbox"
            className="toggle toggle-sm toggle-accent border-2 border-base-300"
            checked={isDark}
            onChange={toggleTheme}
          />

          {/* Icon Moon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-all duration-300 ${
              isDark
                ? "text-accent scale-110 rotate-0"
                : "text-base-content/30 scale-90 -rotate-90"
            }`}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </label>

        {/* Mobile Menu Button */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-3 shadow-xl bg-base-100 rounded-box w-52 border border-base-300"
          >
            <li>
              <a href="#home" className="hover:text-accent">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-accent">
                About Us
              </a>
            </li>
            <li>
              <a href="#collection" className="hover:text-accent">
                Collection
              </a>
            </li>
            <li>
              <a href="#product" className="hover:text-accent">
                Product
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
