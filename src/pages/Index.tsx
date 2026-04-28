import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
<<<<<<< HEAD
        <Contact />
=======
        {/* 
         <Contact />
         */}
>>>>>>> 1221597 (flex)
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
