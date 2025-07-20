import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Mail, Phone, MapPin, Instagram, Linkedin, ExternalLink } from "lucide-react";
import aurumLogo from "@/assets/aurum-logo.png";
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer id="contato" className="bg-ivory-glow pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* LGPD Notice */}
        <Card className="mb-16 shadow-card border-gold-core/20">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="bg-gold-core/10 border border-gold-core/20 rounded-full p-2 mt-1">
                <Shield className="h-5 w-5 text-gold-core" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl text-night-graphite mb-3">
                  Política de Privacidade e LGPD
                </h3>
                <p className="font-body text-night-graphite/80 text-sm leading-relaxed mb-4">
                  A Aurum está comprometida com a proteção dos seus dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD). 
                  Coletamos apenas informações necessárias para prestar nossos serviços e nunca compartilhamos seus dados com terceiros 
                  sem seu consentimento explícito.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-night-graphite">Dados coletados:</strong>
                    <ul className="font-body text-night-graphite/70 mt-1 space-y-1">
                      <li>• Nome, e-mail e telefone para contato</li>
                      <li>• Informações da clínica para personalização</li>
                      <li>• Dados de uso para melhorar nossos serviços</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-night-graphite">Seus direitos:</strong>
                    <ul className="font-body text-night-graphite/70 mt-1 space-y-1">
                      <li>• Acessar seus dados a qualquer momento</li>
                      <li>• Solicitar correção ou exclusão</li>
                      <li>• Revogar consentimento quando aplicável</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Button variant="outline" size="sm" className="border-gold-core text-gold-core hover:bg-gold-core hover:text-night-graphite">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Política Completa
                  </Button>
                  <Button variant="outline" size="sm" className="border-gold-core text-gold-core hover:bg-gold-core hover:text-night-graphite">
                    <Mail className="h-3 w-3 mr-2" />
                    Contatar DPO
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <img src={aurumLogo} alt="Aurum" className="h-12 w-auto mb-6" />
            <p className="font-body text-night-graphite/80 text-sm leading-relaxed mb-6">
              Especialistas em IA para clínicas de estética premium. 
              Multiplicamos seu faturamento com tecnologia de ponta 
              e suporte humanizado.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/aurum.ai" target="_blank" rel="noopener noreferrer" className="bg-gold-core/10 border border-gold-core/20 rounded-full p-2 hover:bg-gold-core/20 transition-colors">
                <Instagram className="h-4 w-4 text-gold-core" />
              </a>
              <a href="https://linkedin.com/company/aurum-ai" target="_blank" rel="noopener noreferrer" className="bg-gold-core/10 border border-gold-core/20 rounded-full p-2 hover:bg-gold-core/20 transition-colors">
                <Linkedin className="h-4 w-4 text-gold-core" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-night-graphite mb-4">
              Navegação
            </h4>
            <nav className="space-y-3">
              <button onClick={() => scrollToSection('hero')} className="block font-body text-night-graphite/70 hover:text-gold-core transition-colors text-sm">
                Início
              </button>
              <button onClick={() => scrollToSection('demonstracao')} className="block font-body text-night-graphite/70 hover:text-gold-core transition-colors text-sm">
                Como Funciona
              </button>
              <button onClick={() => scrollToSection('vantagens')} className="block font-body text-night-graphite/70 hover:text-gold-core transition-colors text-sm">
                Vantagens
              </button>
              <button onClick={() => scrollToSection('diferenciais')} className="block font-body text-night-graphite/70 hover:text-gold-core transition-colors text-sm">
                Diferenciais
              </button>
              <button onClick={() => scrollToSection('sobre')} className="block font-body text-night-graphite/70 hover:text-gold-core transition-colors text-sm">
                Sobre Nós
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg text-night-graphite mb-4">
              Soluções
            </h4>
            <div className="space-y-3 font-body text-sm text-night-graphite/70">
              <div>Agentes de IA Especializados</div>
              <div>Automação de WhatsApp</div>
              <div>Qualificação de Leads</div>
              <div>Agendamento Inteligente</div>
              <div>Analytics e Relatórios</div>
              <div>Integração Multi-Canal</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-night-graphite mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold-core" />
                <div className="font-body text-sm text-night-graphite/70">
                  <div>(21) 99363-7955</div>
                  <div className="text-xs">WhatsApp Comercial</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold-core" />
                <div className="font-body text-sm text-night-graphite/70">
                  <div>contatoaurumlabs@gmail.com</div>
                  <div className="text-xs">Comercial</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold-core" />
                <div className="font-body text-sm text-night-graphite/70">
                  <div>Rio de Janeiro, RJ</div>
                  <div className="text-xs">Atendemos todo Brasil</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Info */}
        <div className="border-t border-gold-core/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-body text-sm text-night-graphite/60">
              © 2024 Aurum Inteligência Artificial Ltda. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-wrap gap-6 font-body text-sm text-night-graphite/60">
              <button className="hover:text-gold-core transition-colors">
                Termos de Uso
              </button>
              <button className="hover:text-gold-core transition-colors">
                Política de Privacidade
              </button>
              <button className="hover:text-gold-core transition-colors">
                LGPD
              </button>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="font-body text-xs text-night-graphite/50">
              CNPJ: 00.000.000/0001-00 | Aurum Inteligência Artificial Ltda.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-card shadow-elegant border-gold-core/20">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl text-night-graphite mb-4">
                Pronto para Revolucionar sua Clínica?
              </h3>
              <p className="font-body text-night-graphite/80 mb-6">
                Agende sua reunião gratuita e descubra como multiplicar seus resultados.
              </p>
              <Button variant="premium" size="lg" onClick={() => scrollToSection('cta')}>
                Agendar Reunião Agora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </footer>;
};
export default Footer;