import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, MessageCircle, Calendar, BarChart3, CheckCircle } from "lucide-react";

const Demonstracao = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      icon: MessageCircle,
      title: "Recepção Inteligente",
      description: "IA recebe e qualifica leads automaticamente via WhatsApp, Instagram e site",
      features: ["Resposta instantânea", "Qualificação de lead", "Coleta de dados"]
    },
    {
      icon: Calendar,
      title: "Agendamento Automático",
      description: "Sincroniza agenda e agenda consultas baseado em disponibilidade real",
      features: ["Agenda integrada", "Confirmações automáticas", "Lembretes personalizados"]
    },
    {
      icon: BarChart3,
      title: "Análise e Otimização",
      description: "Dashboard com métricas de conversão e insights para otimizar resultados",
      features: ["Relatórios detalhados", "ROI em tempo real", "Insights estratégicos"]
    }
  ];

  return (
    <section id="demonstracao" className="py-20 bg-ivory-glow">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-core/10 border border-gold-core/30 rounded-full px-6 py-2 mb-6">
            <Play className="h-4 w-4 text-gold-core" />
            <span className="text-gold-core font-body font-medium">
              Como Funciona
            </span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-6xl text-night-graphite mb-6">
            Transformação em
            <span className="text-gold-core"> 3 Etapas</span>
          </h2>
          
          <p className="font-body text-xl text-night-graphite/80 max-w-3xl mx-auto">
            Nossa solução de IA foi desenvolvida especificamente para clínicas de estética, 
            automatizando desde o primeiro contato até o fechamento.
          </p>
        </div>

        {/* Demo Video Placeholder */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden shadow-elegant border-gold-core/20">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-night-graphite to-muted aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-gold-core/20 border border-gold-core/40 rounded-full p-6 mb-4 inline-flex">
                    <Play className="h-12 w-12 text-gold-core" />
                  </div>
                  <h3 className="font-heading text-2xl text-ivory-glow mb-2">
                    Veja a IA em Ação
                  </h3>
                  <p className="text-ivory-glow/80 font-body">
                    Demonstração completa de 3 minutos
                  </p>
                  <Button 
                    variant="premium" 
                    className="mt-4"
                    onClick={() => scrollToSection('cta')}
                  >
                    Assistir Demonstração
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden shadow-card border-gold-core/20 hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8">
                {/* Step Number */}
                <div className="absolute top-4 right-4 bg-gold-core text-night-graphite rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="bg-gold-core/10 border border-gold-core/20 rounded-xl p-4 w-fit mb-6 group-hover:bg-gold-core/20 transition-colors">
                  <step.icon className="h-8 w-8 text-gold-core" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl text-night-graphite mb-4">
                  {step.title}
                </h3>
                
                <p className="font-body text-night-graphite/80 mb-6">
                  {step.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 font-body text-sm text-night-graphite/70">
                      <CheckCircle className="h-4 w-4 text-gold-core" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results Preview */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 text-center shadow-card border border-gold-core/20">
          <h3 className="font-heading text-3xl md:text-4xl text-night-graphite mb-6">
            Resultados Típicos em 30 Dias
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold-core mb-2">+250%</div>
              <div className="text-night-graphite/70 font-body text-sm">Leads Qualificados</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold-core mb-2">-80%</div>
              <div className="text-night-graphite/70 font-body text-sm">Tempo de Resposta</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold-core mb-2">+180%</div>
              <div className="text-night-graphite/70 font-body text-sm">Taxa de Conversão</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold-core mb-2">24h</div>
              <div className="text-night-graphite/70 font-body text-sm">Implementação</div>
            </div>
          </div>

          <Button 
            variant="premium" 
            size="lg" 
            className="mt-8"
            onClick={() => scrollToSection('cta')}
          >
            Quero Estes Resultados
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Demonstracao;