
import React from 'react';
import { 
  FileText, 
  CarFront, 
  CreditCard, 
  ArrowRight, 
  AlertTriangle, 
  ShieldCheck, 
  Search, 
  History,
  Scale,
  Truck,
  GraduationCap,
  Gavel
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const serviceCategories = [
  {
    category: "Documentação Veicular",
    items: [
      { title: 'Transferência', description: 'Compra e venda ou domicílio com agilidade total.', icon: CarFront },
      { title: '1º Emplacamento', description: 'Registro completo para veículos 0km sem erros.', icon: FileText },
      { title: '2ª Via de Documentos', description: 'CRV ou CRLV perdidos ou roubados resolvidos rápido.', icon: CreditCard },
      { title: 'Alterações', description: 'Mudança de cor, motor, chassi ou características.', icon: History },
      { title: 'Placa Mercosul', description: 'Adaptação imediata ao novo padrão obrigatório.', icon: ShieldCheck },
      { title: 'Comunicação de Venda', description: 'Isenção de responsabilidade sobre o veículo vendido.', icon: ShieldCheck },
    ]
  },
  {
    category: "Multas e Recursos",
    items: [
      { title: 'Consulta de Débitos', description: 'Levantamento completo de IPVA, taxas e multas.', icon: Search },
      { title: 'Recursos JARI/CETRAN', description: 'Defesas fundamentadas para evitar penalizações.', icon: Gavel },
      { title: 'Parcelamento', description: 'Facilitamos o pagamento de todos os débitos em até 12x.', icon: CreditCard },
      { title: 'Baixa de Multas', description: 'Resolução de multas indevidas e restrições legais.', icon: AlertTriangle },
    ]
  },
  {
    category: "Regularizações Avançadas",
    items: [
      { title: 'Veículos Apreendidos', description: 'Liberação completa e regularização para retirada.', icon: Truck },
      { title: 'Sinistrados', description: 'Regularização de veículos recuperados de média monta.', icon: ShieldCheck },
      { title: 'Gravame', description: 'Inclusão ou baixa de alienação fiduciária.', icon: Scale },
      { title: 'Vistoria', description: 'Agendamento e acompanhamento técnico especializado.', icon: Search },
    ]
  }
];

export function Services() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5513991932590&text=Oie%2C%20vim%20pelo%20site!";

  return (
    <section id="servicos" className="py-16 md:py-24 bg-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-3xl font-black tracking-tighter text-foreground sm:text-5xl lg:text-6xl uppercase leading-[0.9]">
            ASSESSORIA VEICULAR <br />
            <span className="text-primary italic">DE ALTA PERFORMANCE</span>
          </h2>
        </div>

        <div className="space-y-12 md:space-y-20">
          {serviceCategories.map((cat, idx) => (
            <div key={idx} className="space-y-6 md:space-y-8">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight border-l-4 border-primary pl-4 italic">
                {cat.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
                            SOLICITAR SERVIÇO <ArrowRight className="ml-2 h-3 w-3" />
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

        {/* Highlight for EAD Area */}
        <div id="cursos" className="mt-24 bg-zinc-950 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
                CAPACITAÇÃO <br />
                PROFISSIONAL <br />
                <span className="text-primary italic">100% ONLINE.</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-8 font-medium">
                Formação e atualização para MOPP, Coletivo, Emergência, Escolar, Carga Indivisível e normas NR. Estude de qualquer lugar com certificação válida.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-black rounded-full px-10 py-8 text-xl shadow-xl shadow-primary/20">
                <Link href="https://dsdespachanteguaruja.com.br" target="_blank">
                  ACESSAR PORTAL DE CURSOS
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['MOPP', 'Escolar', 'Emergência', 'NR-35', 'Passageiros', 'Direção Defensiva'].map((item, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="text-white font-bold text-xs uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
