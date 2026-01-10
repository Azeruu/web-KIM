import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/LogoKIM.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#beranda" },
    { name: "About", href: "#tentang" },
    { name: "Products", href: "#produk" },
    { name: "Features", href: "#keunggulan" },
    { name: "Contact", href: "#kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/60 backdrop-blur-sm shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-2 flex items-center justify-between">
        <a href="#beranda" className="font-serif text-2xl tracking-wider flex justify-center items-center">
          <span className="mr-1">
            <img src={logo} alt="" className="w-10 h-10 object-cover" />
          </span>
          <span className={isScrolled ? "text-(--kim)" : "text-primary-foreground"}>
            KIM
          </span>
          <span className={`font-light ${isScrolled ? "text-(--glass)" : "text-primary-foreground/70"}`}>
            GLASS
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-wider uppercase transition-colors duration-300 hover:opacity-70 ${
                isScrolled ? "text-white-200" : "text-primary-foreground"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-primary-foreground"} size={24} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-primary-foreground"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-elegant animate-fade-in">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground text-lg tracking-wider uppercase transition-colors duration-300 hover:text-accent"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
