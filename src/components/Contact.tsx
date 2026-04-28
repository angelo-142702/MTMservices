import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
  phone: z.string().trim().min(9, "Ingresa un teléfono válido").max(20),
  email: z.string().trim().email("Ingresa un email válido").max(255),
  message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000),
});

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "veneuela estado bolivar, ciudad guayana urb. Manoa carrera motilones manzana 28 ",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+58 4123612679",
    href: "tel:+34600000000",
  },
  {
    icon: Mail,
    title: "Email",
    content: "angelojesus2000@gmail.com",
    href: "mailto:angelojesus2000@gmail.com",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lun - Vie: 8:00 - 18:00 ",
  },
];

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);
      console.log("Form Data Submitted:", validatedData);
      // Simulate form submission
      const API_URL = 'https://email-gestionde-frio.vercel.app/api/email/send'; // Cambia a tu URL de producción
      const respuesta = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(validatedData)
        });
         const resultado = await respuesta.json();
        console.log("Respuesta del servidor:", resultado);
      
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      
      setFormData({ name: "", phone: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Contacto
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ¿Necesitas <span className="text-primary">Ayuda</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos aquí para resolver tus problemas de refrigeración. Contáctanos hoy mismo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-frost border border-frost-border"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Envíanos un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="¿En qué podemos ayudarte?"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>

            {/* WhatsApp Button */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-muted-foreground text-center mb-4">
                ¿Prefieres contacto directo?
              </p>
              <Button
                variant="outline"
                size="lg"
                className="w-full bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground border-whatsapp font-semibold"
                asChild
              >
                <a
                  href={`https://wa.me/+584123612679?text=${encodeURIComponent("Hola, me interesa tu servicio")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Escríbenos por WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-frost border border-frost-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-heading font-bold text-foreground mb-1">
                    {info.title}
                  </h4>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{info.content}</p>
                  )}
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
