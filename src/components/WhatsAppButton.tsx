import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  return (
    <motion.a
<<<<<<< HEAD
      href={`https://wa.me/+584123612679?text=${encodeURIComponent("Hola, me interesa tu servicio")}`}
=======
      href={`https://wa.me/+584121179412?text=${encodeURIComponent("Hola, estoy interesado en ")}`}
>>>>>>> 1221597 (flex)
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-card text-foreground px-4 py-2 rounded-lg shadow-frost text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ¿Necesitas ayuda?
      </span>
    </motion.a>
  );
}
