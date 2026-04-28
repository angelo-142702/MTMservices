import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

<<<<<<< HEAD
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
=======
import gallery2 from "@/assets/angelo.png";
import gallery3 from "@/assets/pedro.png";
import gallery5 from "@/assets/gallery-2.jpg";
>>>>>>> 1221597 (flex)
//Foto de <a href="https://unsplash.com/es/@film002?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">雙 film</a> en <a href="https://unsplash.com/es/fotos/unidad-de-aire-acondicionado-bajo-grandes-ventanas-con-cortinas-verdes-SiRHTf1t-xg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
 //Foto de <a href="https://unsplash.com/es/@andriancyns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andrianto Cahyono Putro</a> en <a href="https://unsplash.com/es/fotos/una-unidad-de-aire-acondicionado-montada-en-una-pared-ItJsBJlf5Qw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
           
const images = [
<<<<<<< HEAD
  { src: gallery2, title: "Reparación de Congeladores", category: "Reparaciones" },
  { src: gallery3, title: "Splits de 12-60 BTU", category: "Instalaciones" },
  { src: gallery5, title: "Vitrinas Comerciales", category: "Reparaciones" },
=======
  { src: gallery2, title: "Mantenimientos", category: "Sericio" },
  { src: gallery5, title: "refrigeradores y neveras", category: "Reparaciones" },
  { src: gallery3, title: "Reemplazo del compresor", category: "soluciones" },
>>>>>>> 1221597 (flex)
];

const categories = ["Todos", "Proyectos Destacados", "Antes/Después", "Equipos Reparados", "Instalaciones"];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("Todos");

  const filteredImages = filter === "Todos" 
    ? images 
    : images.filter(img => img.category === filter);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Galería
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nuestros <span className="text-primary">Trabajos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
<<<<<<< HEAD
            Explora algunos de nuestros proyectos más destacados
=======
            algunos de nuestros servcios
>>>>>>> 1221597 (flex)
          </p>
        </motion.div>

        {/* Filters 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="font-medium"
            >
              {category}
            </Button>
          ))}
        </motion.div>
        */}

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-frost"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-accent text-sm font-medium">{image.category}</span>
                  <h3 className="text-primary-foreground font-heading font-bold text-lg">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>


        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lightbox-overlay"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="lightbox-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-primary-foreground hover:text-accent transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <button
                  onClick={prevImage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-primary-foreground hover:text-accent transition-colors"
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-primary-foreground hover:text-accent transition-colors"
                >
                  <ChevronRight className="w-10 h-10" />
                </button>
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  className="w-full h-full object-contain rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-6 rounded-b-lg">
                  <span className="text-accent text-sm font-medium">{filteredImages[selectedImage].category}</span>
                  <h3 className="text-primary-foreground font-heading font-bold text-xl">{filteredImages[selectedImage].title}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
