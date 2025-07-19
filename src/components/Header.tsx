import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import aurumLogo from "@/assets/aurum-logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <header className="fixed top-0 w-full bg-ivory-glow/95 backdrop-blur-sm z-50 border-b border-gold-core/20">
      <div className="container mx-auto my-0 px-[17px] py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="font-body text-night-graphite hover:text-gold-core transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('demonstracao')} className="font-body text-night-graphite hover:text-gold-core transition-colors">
              Como Funciona
            </button>
            <button onClick={() => scrollToSection('vantagens')} className="font-body text-night-graphite hover:text-gold-core transition-colors">
              Vantagens
            </button>
            <button onClick={() => scrollToSection('diferenciais')} className="font-body text-night-graphite hover:text-gold-core transition-colors">
              Diferenciais
            </button>
            <button onClick={() => scrollToSection('sobre')} className="font-body text-night-graphite hover:text-gold-core transition-colors">
              Sobre Nós
            </button>
            <button onClick={() => scrollToSection('contato')} className="font-body text-night-graphite hover:text-gold-core transition-colors">
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="premium" onClick={() => scrollToSection('cta')} className="font-body">
              Agendar Reunião
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-night-graphite" /> : <Menu className="h-6 w-6 text-night-graphite" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden mt-4 pb-4 border-t border-gold-core/20 pt-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} className="font-body text-night-graphite hover:text-gold-core transition-colors text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('demonstracao')} className="font-body text-night-graphite hover:text-gold-core transition-colors text-left">
                Como Funciona
              </button>
              <button onClick={() => scrollToSection('vantagens')} className="font-body text-night-graphite hover:text-gold-core transition-colors text-left">
                Vantagens
              </button>
              <button onClick={() => scrollToSection('diferenciais')} className="font-body text-night-graphite hover:text-gold-core transition-colors text-left">
                Diferenciais
              </button>
              <button onClick={() => scrollToSection('sobre')} className="font-body text-night-graphite hover:text-gold-core transition-colors text-left">
                Sobre Nós
              </button>
              <button onClick={() => scrollToSection('contato')} className="font-body text-night-graphite hover:text-gold-core transition-colors text-left">
                Contato
              </button>
              <Button variant="premium" onClick={() => scrollToSection('cta')} className="font-body w-fit">
                Agendar Reunião
              </Button>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;