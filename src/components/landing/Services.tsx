
import React from 'react';
import { FileCheck, ArrowRightLeft, ShieldAlert, Banknote, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const services = [
  {
    title: 'Licenciamento Anual',
    description: 'Renovamos o licenciamento do seu veículo de forma prática, sem filas e com entrega rápida.',
    icon: FileCheck,
  },
  {
    title: 'Transferência de Veículo',
    description: 'Assessoria completa para transferência de propriedade, garantindo segurança jurídica no processo.',
    icon: ArrowRightLeft,
  },
  {
    title: 'Regularização de Débitos',
    description: 'Limpamos as pendências do seu carro. Multas, taxas e outras irregularidades resolvidas.',
    icon: ShieldAlert,
  },
  {
    title: 'IPVA e Multas',
    description: 'Consulta e parcelamento de IPVA e multas em atraso com as melhores condições do mercado.',
    icon: Banknote,
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
            Serviços <span className="text-primary">Essenciais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para que você não precise se preocupar com a burocracia do DETRAN.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-premium bg-slate-50 hover:bg-white transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-colors group-hover:bg-primary">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full mt-4">
                  <Link href="https://wa.me/5513999999999" target="_blank">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Solicitar Orçamento
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
