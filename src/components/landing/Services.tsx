
import React from 'react';
import { 
  ClipboardCheck, 
  FileText, 
  CarFront, 
  CreditCard, 
  ArrowRight, 
  AlertTriangle, 
  ShieldCheck, 
  Anchor, 
  Target, 
  UserCheck, 
  BadgePercent, 
  Search, 
  History,
  Scale
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const serviceCategories = [
  {
    category: "Documentação Veicular",
    items: [
      { title: 'Transferência', description: 'Compra e venda, transferência de propriedade ou domicílio com agilidade.', icon: CarFront },
      { title: '1º Emplacamento', description: 'Registro completo para veículos 0km com o menor custo da região.', icon: FileText },
      { title: '2ª Via de Documentos', description: 'Solicitação rápida de CRV ou CRLV em caso de perda, roubo ou extravio.', icon: CreditCard },
      { title: 'Alteração de Dados', description: 'Mudança de cor, categoria, endereço ou características do veículo.', icon: History },
    ]
  },
  {
    category: "Multas e Débitos",
    items: [
      { title: 'Consulta de Débitos', description: 'Levantamento completo de IPVA, licenciamento e multas pendentes.', icon: Search },
      { title: 'Recursos de Multas', description: 'Defesas fundamentadas (JARI/CETRAN) para evitar penalizações indevidas.', icon: Scale },
      { title: 'Parcelamento', description: 'Facilitamos o pagamento de todos os débitos do seu veículo.', icon: CreditCard },
      { title: 'Regularização', description: 'Baixa de multas indevidas e resolução de restrições administrativas.', icon: AlertTriangle },
    ]
  },
  {
    category: "Habilitação (CNH)",
    items: [
      { title: 'Renovação de CNH', description: 'Processo simplificado para manter seu direito de dirigir em dia.', icon: UserCheck },
      { title: 'Suspensão/Cassação', description: 'Assessoria em processos de suspensão ou cassação do direito de dirigir.', icon: ShieldCheck },
      { title: 'Reabilitação', description: 'Suporte completo para recuperar sua CNH de forma ágil e segura.', icon: History },
      { title: 'Reciclagem', description: 'Orientação especializada para condutores em processo de reciclagem.', icon: ClipboardCheck },
    ]
  },
  {
    category: "Serviços Especiais",
    items: [
      { title: 'Despachante Náutico', description: 'Documentação e regularização completa para embarcações e jet-skis.', icon: Anchor },
      { title: 'Despachante Bélico', description: 'Assessoria especializada em documentação e regularização de armas (CR).', icon: Target },
      { title: 'Isenções PCD', description: 'Processo de isenção para compra de veículos (IPI, ICMS, IPVA).', icon: BadgePercent },
      { title: 'Vistoria Veicular', description: 'Agendamento e acompanhamento para garantir a conformidade legal.', icon: Search },
    ]
  }
];

export function Services() {
  const whatsappUrl = "https://wa.me/5513999999999";

  return (
    <section id="servicos" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4 block">Portfólio Completo</span>
          <h2 className="text-4xl font-black tracking-tighter text-foreground sm:text-5xl lg:text-6xl uppercase leading-[0.9]">
            SOLUÇÕES ESPECIALIZADAS <br />
            PARA <span className="text-primary italic">VOCÊ E SEU BEM</span>
          </h2>
        </div>

        <div className="space-y-20">
          {serviceCategories.map((cat, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-tight border-l-4 border-primary pl-4 italic">
                {cat.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.items.map((service, sIdx) => (
                  <Card key={sIdx} className="border-none shadow-premium bg-white hover:bg-zinc-950 transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                    <CardHeader className="pb-4">
                      <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500">
                        <service.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl font-black uppercase tracking-tight group-hover:text-white transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-zinc-500 text-sm font-medium group-hover:text-zinc-400 transition-colors mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-auto">
                        <Button asChild variant="link" className="p-0 h-auto text-xs font-black uppercase tracking-widest text-primary group-hover:text-white transition-colors">
                          <Link href={whatsappUrl} target="_blank">
                            Solicitar Orçamento <ArrowRight className="ml-2 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-black rounded-full px-12 py-8 text-xl shadow-2xl transition-all hover:scale-105 active:scale-95">
            <Link href={whatsappUrl} target="_blank">
              DÚVIDA SOBRE OUTRO SERVIÇO? FALE CONOSCO
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
