
import React from 'react';
import { 
  CarFront, 
  ArrowRight, 
  IdCard,
  Gavel,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const featuredServices = [
  { 
    title: 'Transferência de Veículo', 
    description: 'Processo completo de compra e venda com agilidade e segurança.',
    icon: CarFront 
  },
  { 
    title: 'Licenciamento Anual', 
    description: 'Regularização obrigatória sem complicação e sem filas.',
    icon: CheckCircle2 
  },
  { 
    title: 'Renovação de CNH', 
    description: 'Processo ágil para manter seu direito de dirigir sempre em dia.',
    icon: IdCard 
  },
  { 
    title: 'Recursos de Multas', 
    description: 'Defesa técnica especializada em todas as instâncias (JARI/CETRAN).',
    icon: Gavel 
  },
];

export function Services() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5513991932590&text=Oie%2C%20vim%20pelo%20site!";

  return (
    <section id="servicos" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black tracking-tighter text-foreground sm:text-5xl uppercase leading-[0.9] mb-4">
              SERVIÇOS <br />
              <span className="text-primary italic">ESSENCIAIS</span>
            </h2>
            <p className="text-zinc-600 font-medium">
              Soluções rápidas para as demandas mais comuns do seu dia a dia.
            </p>
          </div>
          <Button asChild variant="outline" className="border-2 border-zinc-950 font-black rounded-xl px-8 py-6 uppercase tracking-tighter hover:bg-zinc-950 hover:text-white transition-all">
            <Link href="/servicos">Ver todos os serviços</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {featuredServices.map((service, idx) => (
            <Card key={idx} className="border-none shadow-premium bg-white hover:bg-zinc-950 transition-all duration-500 group flex flex-col h-full">
              <CardHeader className="p-8 pb-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-zinc-950" />
                </div>
                <CardTitle className="text-xl font-black uppercase tracking-tight group-hover:text-white transition-colors leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 flex-grow">
                <p className="text-zinc-500 text-sm font-medium group-hover:text-zinc-400 transition-colors mb-6">
                  {service.description}
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-white">
                  <Link href={whatsappUrl} target="_blank">
                    SOLICITAR AGORA <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-zinc-950 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
                CURSOS <br />
                PROFISSIONAIS <br />
                <span className="text-primary italic">100% ONLINE.</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-8 font-medium">
                Sua regularização e crescimento profissional em um só lugar.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-black rounded-full px-10 py-8 text-xl shadow-xl shadow-primary/20 transition-transform hover:scale-105">
                <Link href="https://dsdespachanteguaruja.com.br" target="_blank">
                  ACESSAR PORTAL EAD
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['MOPP', 'Escolar', 'Emergência', 'NR-35', 'Passageiros', 'Carga Indivisível'].map((item, i) => (
                <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
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
