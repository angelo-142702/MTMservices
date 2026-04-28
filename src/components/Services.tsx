import { motion } from "framer-motion";
import { 
  Snowflake, 
  Wrench, 
  Zap, 
  Clock, 
  Settings,
  ThermometerSnowflake
} from "lucide-react";

const services = [
  {
    icon: ThermometerSnowflake,
    title: "Reparación ",
    description: "Diagnóstico y reparación equipos comerciales y domesticos con garantía de servicio.",
  },
  {
    icon: Settings,
    title: "Mantenimiento Preventivo",
    description: "Programas de mantenimiento para prevenir averías y optimizar el rendimiento de sus equipos.",
  },
  {
    icon: Snowflake,
    title: "Instalación de Equipos Nuevos",
    description: "Instalación profesional de sistemas de refrigeración adaptados a sus necesidades específicas.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Services() {
  return (
    <section id="servicios" className="section-padding bg-frost">
      <div className="container-custom mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestros Servicios
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluciones Completas en{" "}
            <span className="text-primary">Refrigeración</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ofrecemos servicios integrales para mantener sus equipos de frío funcionando de manera óptima
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-card rounded-xl p-8 shadow-frost hover:shadow-card-hover transition-all duration-300 border border-frost-border hover:border-primary/30"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
