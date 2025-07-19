import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, TrendingUp, Users, Shield, Smartphone, Brain, Target } from "lucide-react";
const Vantagens = () => {
  const problems = [{
    icon: Clock,
    title: "Perda de Leads por Demora",
    description: "73% dos leads desistem quando não recebem resposta em até 1 hora",
    impact: "Perda de R$ 15.000+ mensais"
  }, {
    icon: Users,
    title: "Equipe Sobrecarregada",
    description: "Recepcionistas gastam 60% do tempo com tarefas repetitivas",
    impact: "Baixa produtividade"
  }, {
    icon: Target,
    title: "Leads Não Qualificados",
    description: "45% das consultas agendadas são de pessoas sem perfil ideal",
    impact: "Agenda ocupada sem resultado"
  }];
  const benefits = [{
    icon: Smartphone,
    title: "Resposta Instantânea",
    description: "IA responde em menos de 3 segundos, 24/7, capturando 100% dos leads",
    result: "+300% em captura de leads"
  }, {
    icon: Brain,
    title: "Qualificação Inteligente",
    description: "Filtra automaticamente leads com maior potencial de conversão",
    result: "+180% em taxa de fechamento"
  }, {
    icon: DollarSign,
    title: "ROI Comprovado",
    description: "Cada R$ 1 investido retorna em média R$ 8 em novos faturamentos",
    result: "ROI de 800%"
  }, {
    icon: TrendingUp,
    title: "Escalabilidade",
    description: "Atende milhares de leads simultaneamente sem custo adicional",
    result: "Crescimento ilimitado"
  }, {
    icon: Shield,
    title: "Dados Seguros",
    description: "Compliance total com LGPD e criptografia de ponta a ponta",
    result: "100% de segurança"
  }, {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Automatiza 90% das tarefas repetitivas da recepção",
    result: "-6h diárias de trabalho manual"
  }];
  return <section id="vantagens" className="py-20 bg-gradient-to-br from-night-graphite to-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-core/10 border border-gold-core/30 rounded-full px-6 py-2 mb-6">
            <TrendingUp className="h-4 w-4 text-gold-core" />
            <span className="text-gold-core font-body font-medium">
              Dores vs Benefícios
            </span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-6xl text-ivory-glow mb-6">
            Pare de <span className="text-red-400">Perder Dinheiro</span>
            <br />
            Comece a <span className="text-gold-core">Lucrar Mais</span>
          </h2>
          
          <p className="font-body text-xl text-ivory-glow/90 max-w-3xl mx-auto">
            Sua clínica está perdendo milhares de reais todos os meses. 
            Veja como nossa IA resolve os maiores problemas do seu negócio.
          </p>
        </div>

        {/* Problems Section */}
        <div className="mb-20">
          <h3 className="font-heading text-3xl text-red-400 text-center mb-12">
            ❌ Problemas que Estão Custando Caro
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => <Card key={index} className="bg-red-900/20 border-red-400/30 hover:border-red-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-red-400/10 border border-red-400/20 rounded-xl p-3 w-fit mb-4">
                    <problem.icon className="h-6 w-6 text-red-400" />
                  </div>
                  
                  <h4 className="font-heading text-xl text-ivory-glow mb-3">
                    {problem.title}
                  </h4>
                  
                  <p className="font-body text-ivory-glow/80 mb-4 text-sm">
                    {problem.description}
                  </p>
                  
                  <div className="bg-red-400/10 rounded-lg p-3">
                    <span className="text-red-400 font-body font-semibold text-sm">
                      💸 {problem.impact}
                    </span>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Solutions Section */}
        <div>
          <h3 className="font-heading text-3xl text-gold-core text-center mb-12">
            ✅ Soluções que Geram Resultado
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => <Card key={index} className="bg-gold-core/5 border-gold-core/30 hover:border-gold-core/50 hover:bg-gold-core/10 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="bg-gold-core/10 border border-gold-core/20 rounded-xl p-3 w-fit mb-4 group-hover:bg-gold-core/20 transition-colors">
                    <benefit.icon className="h-6 w-6 text-gold-core" />
                  </div>
                  
                  <h4 className="font-heading text-xl text-ivory-glow mb-3">
                    {benefit.title}
                  </h4>
                  
                  <p className="font-body text-ivory-glow/80 mb-4 text-sm">
                    {benefit.description}
                  </p>
                  
                  <div className="bg-gold-core/10 rounded-lg p-3">
                    <span className="text-gold-core font-body font-semibold text-sm">
                      🚀 {benefit.result}
                    </span>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="mt-20 bg-gradient-card rounded-2xl p-8 md:p-12 text-center shadow-elegant">
          <h3 className="font-heading text-3xl md:text-4xl text-night-graphite mb-6">
            Calculadora de ROI
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-red-100 rounded-xl p-6 border-l-4 border-red-400">
              <h4 className="font-heading text-xl text-red-700 mb-4">Sem Aurum (Perdas)</h4>
              <div className="space-y-2 text-red-600 font-body">
                <div>• 100 leads perdidos/mês: <strong>R$ 15.000</strong></div>
                <div>• Consultas não qualificadas: <strong>R$ 8.000</strong></div>
                <div>• Horas extras da equipe: <strong>R$ 5.000</strong></div>
                <div className="border-t pt-2 mt-4">
                  <strong>Total perdido: R$ 28.000/mês</strong>
                </div>
              </div>
            </div>
            
            <div className="bg-green-100 rounded-xl p-6 border-l-4 border-gold-core">
              <h4 className="font-heading text-xl text-green-700 mb-4">Com Aurum (Ganhos)</h4>
              <div className="space-y-2 text-green-600 font-body">
                <div>• Leads capturados: <strong>+R$ 45.000</strong></div>
                <div>• Conversão otimizada: <strong>+R$ 25.000</strong></div>
                <div>• Economia operacional: <strong>+R$ 12.000</strong></div>
                <div className="border-t pt-2 mt-4">
                  <strong>Total ganho: R$ 82.000/mês</strong>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gold-core/10 rounded-xl border border-gold-core/30">
            <div className="text-3xl font-bold text-gold-core mb-2">
              R$ 110.000 de diferença mensal
            </div>
            <div className="text-night-graphite/80 font-body">ROI: 4.400%</div>
          </div>
        </div>
      </div>
    </section>;
};
export default Vantagens;