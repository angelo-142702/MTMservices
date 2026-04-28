import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Snowflake } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Frost Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />

      {/* Floating Snowflakes */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 text-primary-foreground/20"
      >
        <Snowflake className="w-16 h-16" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [360, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-1/4 text-primary-foreground/15"
      >
        <Snowflake className="w-12 h-12" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8"
          >
            <Snowflake className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground text-sm font-medium">
              Hagan todo con amor. <strong>1 Corintios 16:14</strong>
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Especialistas en{" "}
            <span className="text-accent">Refrigeración</span>
            <br />
             Comercial y Doméstica
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Reparación, mantenimiento y optimización de equipos de frío con más de 8 años de experiencia
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-glow"
              asChild
            >
              <a href={`https://wa.me/+584121179412?text=${encodeURIComponent("Hola, estoy interesado en el servicio")}`}
              >
                Solicita una evaluación 
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold"
              asChild
            >
              {/* <a href="#servicios">Ver servicios</a> */}
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
