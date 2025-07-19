import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Target, 
  TrendingUp,
  CheckCircle,
  Star,
  Building,
  Heart
} from "lucide-react";

const Sobre = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    {
      icon: Building,
      value: "200+",
      label: "Clínicas Atendidas",
      description: "Em todo Brasil"
    },
    {
      icon: TrendingUp,
      value: "R$ 50M+",
      label: "Faturamento Gerado",
      description: "Para nossos clientes"
    },
    {
      icon: Users,
      value: "1M+",
      label: "Leads Processados",
      description: "Com alta conversão"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Satisfação",
      description: "Avaliação média"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Especialização",
      description: "Focamos 100% em clínicas de estética premium, conhecendo profundamente suas necessidades específicas."
    },
    {
      icon: Heart,
      title: "Resultado",
      description: "Nosso sucesso é medido pelo sucesso dos nossos clientes. Cada implementação visa ROI máximo."
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Tecnologia de ponta com suporte humanizado. Inovação com atendimento de primeira classe."
    }
  ];

  const team = [
    {
      name: "Dr. Ricardo Aurum",
      role: "CEO & Fundador",
      description: "15 anos no mercado de estética, especialista em gestão de clínicas premium",
      expertise: "Gestão & Estratégia"
    },
    {
      name: "Ana Silva",
      role: "CTO",
      description: "Especialista em IA com foco em automação de vendas para health & beauty",
      expertise: "Inteligência Artificial"
    },
    {
      name: "Carlos Santos",
      role: "Head of Customer Success",
      description: "Expert em implementação e otimização de processos em clínicas de estética",
      expertise: "Sucesso do Cliente"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-night-graphite to-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-core/10 border border-gold-core/30 rounded-full px-6 py-2 mb-6">
            <Users className="h-4 w-4 text-gold-core" />
            <span className="text-gold-core font-body font-medium">
              Quem Somos
            </span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-6xl text-ivory-glow mb-6">
            A <span className="text-gold-core">Aurum</span> por Trás 
            <br />dos Resultados
          </h2>
          
          <p className="font-body text-xl text-ivory-glow/90 max-w-3xl mx-auto">
            Somos especialistas em clínicas de estética que revolucionamos o mercado 
            com IA especializada. Nossa missão é multiplicar o faturamento das melhores clínicas do Brasil.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gold-core/5 border-gold-core/30 text-center hover:bg-gold-core/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-gold-core/10 border border-gold-core/20 rounded-full p-3 w-fit mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-gold-core" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gold-core mb-2">
                  {stat.value}
                </div>
                <div className="font-heading text-lg text-ivory-glow mb-1">
                  {stat.label}
                </div>
                <div className="font-body text-sm text-ivory-glow/70">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 mb-20 shadow-elegant text-center">
          <h3 className="font-heading text-3xl md:text-4xl text-night-graphite mb-6">
            Nossa Missão
          </h3>
          <p className="font-body text-xl text-night-graphite/80 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-gold-core">Democratizar o acesso à tecnologia de IA</strong> para clínicas de estética, 
            permitindo que profissionais talentosos foquem no que fazem de melhor: 
            <strong className="text-night-graphite"> transformar a autoestima dos seus pacientes</strong>, 
            enquanto nossa IA cuida de multiplicar seus resultados.
          </p>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="font-heading text-3xl md:text-4xl text-ivory-glow text-center mb-12">
            Nossos Valores
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gold-core/5 border-gold-core/30 hover:bg-gold-core/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="bg-gold-core/10 border border-gold-core/20 rounded-full p-4 w-fit mx-auto mb-6 group-hover:bg-gold-core/20 transition-colors">
                    <value.icon className="h-8 w-8 text-gold-core" />
                  </div>
                  
                  <h4 className="font-heading text-2xl text-ivory-glow mb-4">
                    {value.title}
                  </h4>
                  
                  <p className="font-body text-ivory-glow/80 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="font-heading text-3xl md:text-4xl text-ivory-glow text-center mb-12">
            Time de Especialistas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-gold-core/5 border-gold-core/30 hover:bg-gold-core/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-gold-core/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-gold-core" />
                  </div>
                  
                  <h4 className="font-heading text-xl text-ivory-glow text-center mb-2">
                    {member.name}
                  </h4>
                  
                  <div className="text-gold-core font-body font-semibold text-center mb-3">
                    {member.role}
                  </div>
                  
                  <p className="font-body text-sm text-ivory-glow/80 text-center mb-4">
                    {member.description}
                  </p>
                  
                  <div className="bg-gold-core/10 rounded-lg p-2 text-center">
                    <span className="text-gold-core font-body font-medium text-xs">
                      {member.expertise}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards/Certifications */}
        <div className="text-center">
          <h3 className="font-heading text-3xl text-ivory-glow mb-8">
            Certificações & Reconhecimentos
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-gold-core" />
              <span className="font-body text-ivory-glow/80">ISO 27001 - Segurança</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-gold-core" />
              <span className="font-body text-ivory-glow/80">LGPD Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-gold-core" />
              <span className="font-body text-ivory-glow/80">Google Cloud Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-gold-core" />
              <span className="font-body text-ivory-glow/80">AWS Certified</span>
            </div>
          </div>

          <Button 
            variant="premium" 
            size="lg"
            onClick={() => scrollToSection('cta')}
          >
            Conhecer Nossa Solução
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Sobre;