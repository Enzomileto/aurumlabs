import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  MessageCircle
} from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "Como funciona o processo de implementação?",
      answer: "O processo é super simples: 1) Reunião de alinhamento (30 min), 2) Configuração personalizada da IA com dados da sua clínica (4h), 3) Testes e ajustes (2h), 4) Treinamento da equipe (1h), 5) Go-live! Todo o processo leva apenas 24 horas e nossa equipe cuida de tudo para você."
    },
    {
      question: "Quanto custa e qual o retorno do investimento?",
      answer: "O investimento é de R$ 2.500/mês, sem taxa de setup. Nossos clientes veem ROI médio de 800% no primeiro mês. Uma clínica média que perde 50 leads/mês (R$ 7.500 em potencial perdido) recupera o investimento em menos de 10 dias e ainda economiza nos custos operacionais."
    },
    {
      question: "A IA realmente parece humana nas conversas?",
      answer: "Sim! Nossa IA foi treinada especificamente para clínicas de estética com milhares de conversas reais. Ela usa linguagem natural, entende gírias, responde objeções como uma recepcionista experiente e adapta o tom conforme o perfil do cliente. 98% dos leads não percebem que estão falando com IA."
    },
    {
      question: "Como funciona a integração com WhatsApp e outras plataformas?",
      answer: "A integração é nativa e oficial. Conectamos diretamente ao WhatsApp Business API, Instagram Direct, Facebook Messenger e seu site. Tudo funciona em tempo real sem precisar trocar de número ou alterar suas contas existentes. A IA opera 24/7 em todos os canais simultaneamente."
    },
    {
      question: "E se a IA não souber responder algo específico?",
      answer: "Nossa IA é constantemente atualizada e aprende com cada interação. Para casos específicos que ela ainda não domina, há um sistema de escalação inteligente que transfere automaticamente para sua equipe, mantendo todo o histórico da conversa. Você também pode treinar a IA com novas informações a qualquer momento."
    },
    {
      question: "Os dados dos meus pacientes ficam seguros?",
      answer: "Segurança é nossa prioridade máxima. Somos 100% LGPD compliant, com criptografia ponta a ponta, servidores no Brasil, backup automatizado e certificação ISO 27001. Seus dados nunca são compartilhados e você tem controle total sobre as informações armazenadas."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim, não há fidelidade. Você pode cancelar com 30 dias de antecedência. Porém, nossos clientes raramente cancelam porque os resultados são imediatos e mensuráveis. Oferecemos suporte contínuo e otimizações mensais para garantir que você continue vendo retorno."
    },
    {
      question: "Funciona para qualquer tipo de clínica de estética?",
      answer: "Nossa IA é otimizada para clínicas de estética premium que fazem procedimentos como harmonização facial, botox, preenchimento, tratamentos corporais, etc. Funciona tanto para clínicas pequenas (100+ atendimentos/mês) quanto para grandes redes. Durante a reunião, analisamos se seu perfil é ideal para nossa solução."
    },
    {
      question: "Que tipo de suporte vocês oferecem?",
      answer: "Suporte especializado 24/7 via WhatsApp com especialistas em clínicas de estética. Além disso: onboarding personalizado, treinamento da equipe, otimizações mensais, relatórios de performance, sessões de estratégia trimestrais e acesso ao nosso portal de conhecimento exclusivo."
    },
    {
      question: "Como posso acompanhar os resultados?",
      answer: "Dashboard completo em tempo real com: número de leads capturados, taxa de conversão por canal, ROI detalhado, comparativos mensais, horários de pico, análise de objeções mais comuns, tempo médio de resposta e muito mais. Relatórios automáticos enviados semanalmente por email."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-night-graphite to-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-core/10 border border-gold-core/30 rounded-full px-6 py-2 mb-6">
            <HelpCircle className="h-4 w-4 text-gold-core" />
            <span className="text-gold-core font-body font-medium">
              Perguntas Frequentes
            </span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-6xl text-ivory-glow mb-6">
            Dúvidas <span className="text-gold-core">Respondidas</span>
          </h2>
          
          <p className="font-body text-xl text-ivory-glow/90 max-w-3xl mx-auto">
            Respostas diretas para as principais dúvidas de donos de clínicas 
            de estética sobre nossa solução de IA.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gold-core/5 border-gold-core/30 hover:bg-gold-core/10 transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gold-core/5 transition-colors"
                  >
                    <h3 className="font-heading text-lg md:text-xl text-ivory-glow pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-gold-core flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gold-core flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <p className="font-body text-ivory-glow/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="text-center">
          <Card className="bg-gradient-card max-w-2xl mx-auto shadow-elegant border-gold-core/20">
            <CardContent className="p-8">
              <div className="bg-gold-core/10 border border-gold-core/20 rounded-full p-3 w-fit mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-gold-core" />
              </div>
              
              <h3 className="font-heading text-2xl md:text-3xl text-night-graphite mb-4">
                Ainda tem dúvidas?
              </h3>
              
              <p className="font-body text-night-graphite/80 mb-6">
                Nossa equipe de especialistas está pronta para esclarecer qualquer questão 
                e mostrar como a Aurum pode transformar sua clínica.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="premium"
                  onClick={() => scrollToSection('cta')}
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar com Especialista
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-gold-core text-gold-core hover:bg-gold-core hover:text-night-graphite"
                >
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    WhatsApp Direto
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;