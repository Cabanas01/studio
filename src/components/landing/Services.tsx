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
    icon: CarFront,
    whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20transferir%20meu%20veículo.%20Pode%20me%20passar%20valor?'
  },
  { 
    title: 'Licenciamento Anual', 
    description: 'Regularização obrigatória sem complicação e sem filas.',
    icon: CheckCircle2,
    whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20licenciar%20meu%20veículo.%20Pode%20verificar%20valor?'
  },
  { 
    title: 'Renovação de CNH', 
    description: 'Processo ágil para manter seu direito de dirigir sempre em dia.',
    icon: IdCard,
    whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20renovar%20minha%20CNH.%20Valor?'
  },
  { 
    title: 'Recursos de Multas', 
    description: 'Defesa técnica especializada em todas as instâncias (JARI/CETRAN).',
    icon: Gavel,
    whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20recorrer%20uma%20multa'
  },
];

export function Services() {
  const globalWhatsappUrl = "https://api.whatsapp.com/send?phone=5513991932590&text=Oie%2C%20vim%20pelo%20site!";

  return (
    <section id="servicos" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black tracking-tighter text-foreground sm:text-7xl uppercase leading-[0.9] mb-6">
              SERVIÇOS <br />
              <span className="text-primary italic">PRINCIPAIS</span>
            </h2>
            <p className="text-zinc-600 text-xl font-medium">
              Soluções rápidas e eficientes para o seu veículo.
            </p>
          </div>
          <Button asChild variant="outline" className="border-4 border-zinc-950 font-black rounded-xl px-10 py-8 uppercase tracking-tighter hover:bg-zinc-950 hover:text-white transition-all text-lg">
            <Link href="/servicos">Ver todos os serviços</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {featuredServices.map((service, idx) => (
            <Card key={idx} className="border-none shadow-premium bg-white hover:bg-zinc-950 transition-all duration-500 group flex flex-col h-full rounded-[2rem]">
              <CardHeader className="p-10 pb-4">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-zinc-950" />
                </div>
                <CardTitle className="text-2xl font-black uppercase tracking-tight group-hover:text-white transition-colors leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10 pt-0 flex-grow">
                <p className="text-zinc-500 text-lg font-medium group-hover:text-zinc-400 transition-colors mb-10">
                  {service.description}
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-sm font-black uppercase tracking-widest text-primary group-hover:text-white">
                  <Link href={service.whatsappUrl || globalWhatsappUrl} target="_blank">
                    SOLICITAR AGORA <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-zinc-950 rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                CURSOS <br />
                PROFISSIONAIS <br />
                <span className="text-primary italic">100% ONLINE.</span>
              </h2>
              <p className="text-zinc-400 text-2xl mb-12 font-medium">
                Cresça profissionalmente com cursos reconhecidos.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-black rounded-full px-14 py-10 text-2xl shadow-2xl shadow-primary/30 transition-transform hover:scale-105">
                <Link href="https://dsdespachanteguaruja.com.br" target="_blank">
                  ACESSAR PORTAL EAD
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {['MOPP', 'Escolar', 'Emergência', 'NR-35', 'Passageiros', 'Carga Indivisível'].map((item, i) => (
                <div key={i} className="bg-zinc-900/50 border-2 border-zinc-800 p-6 rounded-3xl flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-white font-bold text-sm md:text-base uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
