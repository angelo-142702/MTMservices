import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import logo from "@/assets/logo.png";
=======
import logo from "@/assets/MTM.png";
>>>>>>> 1221597 (flex)

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#nosotros", label: "Sobre Nosotros" },
<<<<<<< HEAD
  { href: "#contacto", label: "Contacto" },
=======
  /* 
  
  { href: "#contacto", label: "Contacto" },
  */
>>>>>>> 1221597 (flex)
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-frost"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
<<<<<<< HEAD
          <a href="#inicio" className="flex items-center gap-2">
            <img src={logo} alt="Gestión de Frío" className="h-12 w-auto" />
=======
          <a href="#inicio" className="flex items-center gap-2 bg-white">
            <img src={logo} alt="Gestión de Frío" className="h-20 w-auto" />
>>>>>>> 1221597 (flex)
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+34600000000"
              className={`flex items-center gap-2 font-semibold ${
                isScrolled ? "text-primary" : "text-primary-foreground"
              }`}
            >
              <Phone className="w-5 h-5" />
              <span>+58 4123679412</span>
            </a>
            <Button variant="default" size="lg" className="font-semibold" asChild>
<<<<<<< HEAD
              <a href="#contacto">Contactar</a>
=======
              <a href={`https://wa.me/+584121179412?text=${encodeURIComponent("Hola, estoy interesado en el servicio")}`}
              target="_blank"
              >Contactar</a>
>>>>>>> 1221597 (flex)
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 bg-card rounded-lg shadow-frost animate-fade-in-up">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-4 border-t border-border mt-4">
              <a
                href="tel:+34600000000"
                className="flex items-center gap-2 text-primary font-semibold"
              >
                <Phone className="w-5 h-5" />
<<<<<<< HEAD
                <span>+58 4123679412</span>
=======
                <span>+58 4121179412</span>
>>>>>>> 1221597 (flex)
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
