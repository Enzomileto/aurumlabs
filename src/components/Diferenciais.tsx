import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Award, 
  Settings, 
  LineChart, 
  MessageSquare, 
  Lock,
  Headphones,
  Globe
} from "lucide-react";

const Diferenciais = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Zap,
      title: "IA Especializada em Estética",
      description: "Treinada especificamente para clínicas de estética com conhecimento em procedimentos, preços e objeções típicas do setor",
      highlight: "100% especializada"
    },
    {
      icon: MessageSquare,
      title: "Conversas Naturais",
      description: "Linguagem humanizada que não parece robô, adaptada ao perfil premium dos seus clientes",
      highlight: "98% aprovação"
    },
    {
      icon: Settings,
      title: "Personalização Total",
      description: "Configuramos a IA com a identidade da sua clínica, preços, procedimentos e tom de voz específicos",
      highlight: "100% customizada"
    },
    {
      icon: LineChart,
      title: "Analytics Avançados",
      description: "Dashboard completo com métricas de conversão, ROI, leads por canal e insights estratégicos",
      highlight: "Relatórios em tempo real"
    },
    {
      icon: Globe,
      title: "Multi-Canal",
      description: "Integração com WhatsApp, Instagram, Facebook, site e landing pages - tudo em um só lugar",
      highlight: "Todos os canais"
    },
    {
      icon: Lock,
      title: "Segurança Premium",
      description: "Compliance total com LGPD, criptografia ponta a ponta e dados armazenados no Brasil",
      highlight: "LGPD compliant"
    },
    {
      icon: Headphones,
      title: "Suporte Especializado",
      description: "Equipe dedicada de especialistas em clínicas de estética disponível 24/7",
      highlight: "Suporte 24/7"
    },
    {
      icon: Award,
      title: "Implementação Express",
      description: "Sua IA funcionando em 24h com treinamento personalizado para sua equipe",
      highlight: "24h para funcionar"
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-ivory-glow">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-core/10 border border-gold-core/30 rounded-full px-6 py-2 mb-6">
            <Award className="h-4 w-4 text-gold-core" />
            <span className="text-gold-core font-body font-medium">
              Nossos Diferenciais
            </span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-6xl text-night-graphite mb-6">
            Por que Escolher a
            <span className="text-gold-core"> Aurum?</span>
          </h2>
          
          <p className="font-body text-xl text-night-graphite/80 max-w-3xl mx-auto">
            Não somos apenas mais uma ferramenta de IA. Somos especialistas em clínicas de estética 
            que desenvolvemos a solução perfeita para o seu segmento.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden shadow-card border-gold-core/20 hover:shadow-elegant transition-all duration-300 group hover:scale-105">
              <CardContent className="p-6">
                {/* Icon */}
                <div className="bg-gold-core/10 border border-gold-core/20 rounded-xl p-3 w-fit mb-4 group-hover:bg-gold-core/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-gold-core" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg text-night-graphite mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="font-body text-sm text-night-graphite/70 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Highlight */}
                <div className="bg-gold-core/10 rounded-lg px-3 py-2">
                  <span className="text-gold-core font-body font-semibold text-xs">
                    ✨ {feature.highlight}
                  </span>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-card border border-gold-core/20">
          <h3 className="font-heading text-3xl md:text-4xl text-night-graphite text-center mb-8">
            Aurum vs Concorrência
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gold-core/20">
                  <th className="text-left font-body font-semibold text-night-graphite py-4">Funcionalidade</th>
                  <th className="text-center font-body font-semibold text-gold-core py-4 px-4">Aurum</th>
                  <th className="text-center font-body font-semibold text-night-graphite/60 py-4 px-4">Outras Soluções</th>
                </tr>
              </thead>
              <tbody className="font-body text-sm">
                <tr className="border-b border-gold-core/10">
                  <td className="py-4 text-night-graphite">Especialização em Estética</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-green-600 text-xl">✅</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-red-500 text-xl">❌</span>
                  </td>
                </tr>
                <tr className="border-b border-gold-core/10">
                  <td className="py-4 text-night-graphite">Implementação em 24h</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-green-600 text-xl">✅</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-yellow-500">⚠️ 30+ dias</span>
                  </td>
                </tr>
                <tr className="border-b border-gold-core/10">
                  <td className="py-4 text-night-graphite">Suporte Especializado 24/7</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-green-600 text-xl">✅</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-red-500 text-xl">❌</span>
                  </td>
                </tr>
                <tr className="border-b border-gold-core/10">
                  <td className="py-4 text-night-graphite">Compliance LGPD Total</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-green-600 text-xl">✅</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-yellow-500">⚠️ Parcial</span>
                  </td>
                </tr>
                <tr className="border-b border-gold-core/10">
                  <td className="py-4 text-night-graphite">ROI Garantido</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-green-600 text-xl">✅</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-red-500 text-xl">❌</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-night-graphite">Preço Justo</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-green-600 font-semibold">R$ 2.500/mês</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-red-500">R$ 5.000+ /mês</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="premium" 
              size="lg"
              onClick={() => scrollToSection('cta')}
            >
              Quero a Melhor Solução
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;