
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
      { title: 'Transferência', description: 'Compra e venda ou domicílio com agilidade.', icon: CarFront },
      { title: '1º Emplacamento', description: 'Registro completo para veículos 0km.', icon: FileText },
      { title: '2ª Via de Documentos', description: 'Solicitação rápida de CRV ou CRLV.', icon: CreditCard },
      { title: 'Alteração de Dados', description: 'Mudança de cor, endereço ou características.', icon: History },
    ]
  },
  {
    category: "Multas e Débitos",
    items: [
      { title: 'Consulta de Débitos', description: 'Levantamento de IPVA, licenciamento e multas.', icon: Search },
      { title: 'Recursos de Multas', description: 'Defesas fundamentadas para evitar penalizações.', icon: Scale },
      { title: 'Parcelamento', description: 'Facilitamos o pagamento de todos os débitos.', icon: CreditCard },
      { title: 'Regularização', description: 'Baixa de multas e resolução de restrições.', icon: AlertTriangle },
    ]
  },
  {
    category: "Habilitação (CNH)",
    items: [
      { title: 'Renovação de CNH', description: 'Processo simplificado para manter seu direito.', icon: UserCheck },
      { title: 'Suspensão/Cassação', description: 'Assessoria em processos de suspensão de CNH.', icon: ShieldCheck },
      { title: 'Reabilitação', description: 'Suporte para recuperar sua CNH com agilidade.', icon: History },
      { title: 'Reciclagem', description: 'Orientação para condutores em reciclagem.', icon: ClipboardCheck },
    ]
  },
  {
    category: "Serviços Especiais",
    items: [
      { title: 'Despachante Náutico', description: 'Regularização para barcos e jet-skis.', icon: Anchor },
      { title: 'Despachante Bélico', description: 'Assessoria em documentação de armas (CR).', icon: Target },
      { title: 'Isenções PCD', description: 'Processo de isenção de impostos (IPI, ICMS).', icon: BadgePercent },
      { title: 'Vistoria Veicular', description: 'Agendamento e acompanhamento legal.', icon: Search },
    ]
  }
];

export function Services() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5513991932590&text=Oie%2C%20vim%20pelo%20site!";

  return (
    <section id="servicos" className="py-16 md:py-24 bg-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-xs md:text-sm mb-4 block">Portfólio Completo</span>
          <h2 className="text-3xl font-black tracking-tighter text-foreground sm:text-5xl lg:text-6xl uppercase leading-[0.9]">
            SOLUÇÕES ESPECIALIZADAS <br />
            PARA <span className="text-primary italic">VOCÊ E SEU BEM</span>
          </h2>
        </div>

        <div className="space-y-12 md:space-y-20">
          {serviceCategories.map((cat, idx) => (
            <div key={idx} className="space-y-6 md:space-y-8">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight border-l-4 border-primary pl-4 italic">
                {cat.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {cat.items.map((service, sIdx) => (
                  <Card key={sIdx} className="border-none shadow-premium bg-white hover:bg-zinc-950 transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                    <CardHeader className="p-5 md:p-6 pb-2 md:pb-4">
                      <div className="bg-primary w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500">
                        <service.icon className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-lg md:text-xl font-black uppercase tracking-tight group-hover:text-white transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-5 md:p-6 pt-0 flex-grow flex flex-col">
                      <p className="text-zinc-500 text-xs md:text-sm font-medium group-hover:text-zinc-400 transition-colors mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-auto">
                        <Button asChild variant="link" className="p-0 h-auto text-[10px] md:text-xs font-black uppercase tracking-widest text-primary group-hover:text-white transition-colors">
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

        <div className="mt-16 md:mt-20 text-center">
          <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-black rounded-full px-8 md:px-12 py-7 md:py-8 text-base md:text-xl shadow-2xl transition-all hover:scale-105 active:scale-95">
            <Link href={whatsappUrl} target="_blank">
              OUTRO SERVIÇO? FALE CONOSCO
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
