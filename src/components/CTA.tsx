import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, CheckCircle, Clock, Phone, Mail, MapPin, ArrowRight, Star, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinic: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast({
      title: "Reunião Agendada! 🎉",
      description: "Entraremos em contato em até 2 horas para confirmar sua reunião de triagem."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      clinic: "",
      message: ""
    });
  };
  const benefits = ["Análise gratuita do potencial da sua clínica", "Demonstração personalizada da IA", "Proposta de ROI específica para seu negócio", "Sem compromisso ou taxa de implementação"];
  return <section id="cta" className="py-20 bg-ivory-glow">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-core/10 border border-gold-core/30 rounded-full px-6 py-2 mb-6">
            <Calendar className="h-4 w-4 text-gold-core" />
            <span className="text-gold-core font-body font-medium">
              Reunião de Triagem Gratuita
            </span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-6xl text-night-graphite mb-6">
            Pronto para <span className="text-gold-core">Multiplicar</span>
            <br />
            seus Resultados?
          </h2>
          
          <p className="font-body text-xl text-night-graphite/80 max-w-3xl mx-auto mb-8">
            Agende uma reunião gratuita de 30 minutos e descubra como nossa IA 
            pode transformar sua clínica de estética em uma máquina de vendas.
          </p>

          {/* Urgency Banner */}
          <div className="inline-flex items-center gap-2 bg-red-100 border border-red-300 rounded-full px-6 py-2 mb-8">
            <Clock className="h-4 w-4 text-red-600" />
            <span className="text-red-600 font-body font-medium">
              🔥 Apenas 10 vagas disponíveis este mês
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant border-gold-core/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gold-core/10 border border-gold-core/20 rounded-full p-2">
                  <Gift className="h-5 w-5 text-gold-core" />
                </div>
                <h3 className="font-heading text-2xl text-night-graphite">
                  Agendar Reunião Gratuita
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm font-medium text-night-graphite mb-2 block">
                      Nome Completo *
                    </label>
                    <Input type="text" placeholder="Seu nome" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} required className="border-gold-core/30 focus:border-gold-core" />
                  </div>
                  
                  <div>
                    <label className="font-body text-sm font-medium text-night-graphite mb-2 block">
                      E-mail *
                    </label>
                    <Input type="email" placeholder="seu@email.com" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} required className="border-gold-core/30 focus:border-gold-core" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm font-medium text-night-graphite mb-2 block">
                      WhatsApp *
                    </label>
                    <Input type="tel" placeholder="(11) 99999-9999" value={formData.phone} onChange={e => setFormData({
                    ...formData,
                    phone: e.target.value
                  })} required className="border-gold-core/30 focus:border-gold-core" />
                  </div>
                  
                  <div>
                    <label className="font-body text-sm font-medium text-night-graphite mb-2 block">
                      Nome da Clínica *
                    </label>
                    <Input type="text" placeholder="Clínica Exemplo" value={formData.clinic} onChange={e => setFormData({
                    ...formData,
                    clinic: e.target.value
                  })} required className="border-gold-core/30 focus:border-gold-core" />
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm font-medium text-night-graphite mb-2 block">
                    Conte-nos sobre sua clínica (opcional)
                  </label>
                  <Textarea placeholder="Principais procedimentos, número de atendimentos mensais, principais desafios..." value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} className="border-gold-core/30 focus:border-gold-core min-h-[100px]" />
                </div>

                <Button type="submit" variant="premium" size="lg" className="w-full">
                  Agendar Minha Reunião Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <div className="text-center">
                  <p className="font-body text-xs text-night-graphite/60">
                    Ao enviar, você concorda com nossa Política de Privacidade e 
                    autoriza contato via WhatsApp, e-mail e telefone.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Benefits & Contact Info */}
          <div className="space-y-8">
            {/* What You'll Get */}
            <Card className="shadow-card border-gold-core/20">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl text-night-graphite mb-6">
                  O que você vai receber:
                </h3>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gold-core mt-0.5 flex-shrink-0" />
                      <span className="font-body text-night-graphite/80">
                        {benefit}
                      </span>
                    </div>)}
                </div>

                <div className="mt-6 p-4 bg-gold-core/10 rounded-lg border border-gold-core/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 text-gold-core" />
                    <span className="font-body font-semibold text-night-graphite">
                      Bônus Exclusivo
                    </span>
                  </div>
                  <p className="font-body text-sm text-night-graphite/80">
                    Plano estratégico personalizado para aumentar sua conversão em 90 dias 
                    (valor R$ 2.500) - <strong className="text-gold-core">GRÁTIS</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-card border-gold-core/20">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl text-night-graphite mb-6">
                  Ou entre em contato direto:
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gold-core" />
                    <div>
                      <div className="font-body font-medium text-night-graphite">(21) 99363-7955</div>
                      <div className="font-body text-sm text-night-graphite/60">
                        WhatsApp - Resposta em até 5 min
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gold-core" />
                    <div>
                      <div className="font-body font-medium text-night-graphite">contatoaurumlabs@gmail.com</div>
                      <div className="font-body text-sm text-night-graphite/60">
                        E-mail comercial
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gold-core" />
                    <div>
                      <div className="font-body font-medium text-night-graphite">Rio de Janeiro, RJ</div>
                      <div className="font-body text-sm text-night-graphite/60">
                        Atendemos todo Brasil
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="font-body font-semibold text-green-700">
                      Resposta Rápida
                    </span>
                  </div>
                  <p className="font-body text-sm text-green-700">
                    Nossa equipe entra em contato em até 2 horas úteis para 
                    agendar sua reunião no melhor horário para você.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;