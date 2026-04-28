import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#nosotros", label: "Sobre Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

const services = [
  "Reparación de equipos de refrigeración",
  "Mantenimiento Preventivo",
  "Instalación de Equipos",
  "Optimización Energética",
  "Emergencias 24/7",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <img src={logo} alt="Gestión de Frío" className="h-14 w-auto brightness-0 invert" />
            <p className="text-primary-foreground/80 leading-relaxed">
            <a href="https://www.freepik.com/free-photo/young-couple-selecting-new-refrigerator-household-appliance-store_21129938.htm">Imagenes de fabrikasimf en Freepik y </a>
            <a href="https://www.freepik.com/free-photo/meticulous-workers-diverse-team-doing-routine-air-conditioner-revision-assembling-manometers-competent-mechanics-checking-hvac-system-freon-leaks-leading-bad-cooling_50106130.htm">Imagenes de DC Studio en Freepik</a>
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  veneuela estado bolivar, ciudad guayana urb. Manoa carrera motilones manzana 28
                </span>
              </li>
              <li>
                <a
                  href="tel:+34600000000"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  {"+58 4123612679"}
                </a>
              </li>
              <li>
                <a
                  href="mailto:angelojesus2000@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  angelojesus2000@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} Gestión de Frío. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
