import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Demonstracao from "@/components/Demonstracao";
import Vantagens from "@/components/Vantagens";
import Diferenciais from "@/components/Diferenciais";
import Sobre from "@/components/Sobre";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Demonstracao />
      <Vantagens />
      <Diferenciais />
      <Sobre />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
