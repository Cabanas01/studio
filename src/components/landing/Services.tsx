import React from 'react';
import { ClipboardCheck, FileText, CarFront, CreditCard, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const services = [
  {
    title: 'Licenciamento',
    description: 'Renove o licenciamento do seu veículo de forma rápida e receba o documento digital no seu celular.',
    icon: ClipboardCheck,
  },
  {
    title: 'Transferência',
    description: 'Assessoria completa para transferência de propriedade ou de domicílio, sem dor de cabeça.',
    icon: CarFront,
  },
  {
    title: 'Primeiro Registro',
    description: 'Comprou um carro zero? Fazemos o primeiro emplacamento com agilidade e menor custo.',
    icon: FileText,
  },
  {
    title: '2ª Via de Documentos',
    description: 'Perdeu o CRV ou CRLV? Solicitamos a segunda via de forma rápida para você.',
    icon: CreditCard,
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4 block">Nossos Serviços</span>
            <h2 className="text-4xl font-black tracking-tighter text-foreground sm:text-5xl lg:text-6xl uppercase leading-[0.9]">
              SOLUÇÕES COMPLETAS <br />
              PARA O <span className="text-primary">SEU VEÍCULO</span>
            </h2>
          </div>
          <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-xl px-8 uppercase italic tracking-wider">
            <Link href="https://wa.me/5513999999999" target="_blank">
              Ver todos os serviços <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-xl bg-white hover:bg-zinc-950 transition-all duration-500 hover:-translate-y-3 group overflow-hidden">
              <CardHeader className="relative z-10">
                <div className="bg-primary w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-primary/20">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-black uppercase tracking-tight group-hover:text-white transition-colors leading-none">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-zinc-500 text-sm font-medium group-hover:text-zinc-400 transition-colors mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  href="https://wa.me/5513999999999" 
                  target="_blank"
                  className="inline-flex items-center text-xs font-black uppercase tracking-widest text-primary group-hover:text-white transition-colors"
                >
                  Saiba Mais <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </CardContent>
              {/* Decorative circle on hover */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
