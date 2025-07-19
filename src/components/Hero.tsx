import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-night-graphite via-night-graphite to-muted opacity-90"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <Sparkles className="h-8 w-8 text-gold-core opacity-60" />
      </div>
      <div className="absolute bottom-40 right-20 animate-pulse delay-1000">
        <TrendingUp className="h-12 w-12 text-gold-core opacity-40" />
      </div>

      <div className="relative container mx-auto px-4 text-center z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold-core/10 border border-gold-core/30 rounded-full mb-8 mx-[4px] px-[19px] py-[10px] my-[20px]">
            <Sparkles className="h-4 w-4 text-gold-core" />
            <span className="text-gold-core font-body font-medium">
              Revolucione sua Clínica de Estética
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-5xl md:text-7xl text-ivory-glow mb-6 leading-tight font-bold lg:text-7xl">
            Multiplique suas
            <span className="block text-gold-core">
              Conversões
            </span>
            com Agentes de IA
          </h1>

          {/* Subheadline */}
          <p className="font-body text-xl md:text-2xl text-ivory-glow/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Automatize o atendimento, qualifique leads e aumente sua receita com nossos 
            <strong className="text-gold-core"> Agentes de IA especializados</strong> em clínicas de estética premium.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-core mb-2">+300%</div>
              <div className="text-ivory-glow/80 font-body">Aumento em Conversões</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-core mb-2">24/7</div>
              <div className="text-ivory-glow/80 font-body">Atendimento Automatizado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-core mb-2">90%</div>
              <div className="text-ivory-glow/80 font-body">Redução de Custos</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" onClick={() => scrollToSection('cta')} className="group">
              Agendar Reunião de Triagem
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" onClick={() => scrollToSection('demonstracao')} className="border-gold-core text-gold-core hover:bg-gold-core hover:text-night-graphite">
              Ver Demonstração
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col items-center my-[60px]">
            <p className="text-ivory-glow/60 font-body text-sm mb-4">
              Confiado por clínicas premium em todo Brasil
            </p>
            <div className="flex items-center gap-6 opacity-60">
              <div className="text-ivory-glow font-body text-xs">LGPD Compliant</div>
              <div className="w-1 h-1 bg-ivory-glow rounded-full"></div>
              <div className="text-ivory-glow font-body text-xs">Dados Seguros</div>
              <div className="w-1 h-1 bg-ivory-glow rounded-full"></div>
              <div className="text-ivory-glow font-body text-xs">Suporte 24/7</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-core rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-core rounded-full mt-2"></div>
        </div>
      </div>
    </section>;
};
export default Hero;