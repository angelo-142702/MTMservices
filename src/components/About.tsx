import { motion } from "framer-motion";
import { Award, Users, Clock, Shield } from "lucide-react";

const stats = [
  { icon: Clock, value: "8+", label: "Años de experiencia" },
  { icon: Users, value: "200+", label: "Clientes satisfechos" },
  { icon: Award, value: "98%", label: "Satisfacción garantizada" },
  { icon: Shield, value: "24/7", label: "Soporte disponible" },
];

const values = [
  {
    title: "Profesionalidad",
    description: "Técnicos certificados con formación continua en las últimas tecnologías.",
  },
  {
    title: "Rapidez",
    description: "Respuesta inmediata ante emergencias y tiempos de resolución mínimos.",
  },
  {
    title: "Garantía",
    description: "Todos nuestros trabajos cuentan con gratia bajo ciertas condiciones.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="section-padding bg-frost">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Sobre Nosotros
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Tecnicos en <span className="text-primary">Refrigeración</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
<<<<<<< HEAD
              Desde hace más de 8 años, en <strong>Gestión de Frío</strong> nos dedicamos a ofrecer 
=======
              Desde hace más de 8 años, en <strong>MTM services</strong> nos dedicamos a ofrecer 
>>>>>>> 1221597 (flex)
              soluciones integrales de refrigeración para locales comerciales o equipos domesticos en ciudad guayana. 
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 text-center shadow-frost border border-frost-border hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="font-heading text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
