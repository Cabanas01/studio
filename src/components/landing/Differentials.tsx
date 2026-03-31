
import React from 'react';
import { Zap, ShieldCheck, Headset, CheckCircle, Clock } from 'lucide-react';

const differentials = [
  {
    title: 'Atendimento Rápido',
    description: 'Sua documentação tratada com prioridade máxima.',
    icon: Clock,
  },
  {
    title: 'Sem Burocracia',
    description: 'Nós cuidamos de toda a papelada chata para você.',
    icon: Zap,
  },
  {
    title: 'Suporte Completo',
    description: 'Acompanhamento do início ao fim do processo.',
    icon: Headset,
  },
  {
    title: 'Processo 100% Facilitado',
    description: 'Simplicidade e transparência em cada etapa.',
    icon: CheckCircle,
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6 leading-tight">
              Por que escolher o <br />
              <span className="text-primary">Despachante Essencial?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nossa missão é transformar processos lentos e complicados em experiências fluidas e seguras para nossos clientes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentials.map((diff, index) => (
                <div key={index} className="flex gap-4 p-2">
                  <div className="flex-shrink-0">
                    <diff.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{diff.title}</h3>
                    <p className="text-sm text-muted-foreground">{diff.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-primary/10 rounded-[3rem] rotate-3 absolute inset-0 -z-10" />
            <div className="aspect-square bg-white rounded-[3rem] shadow-premium flex items-center justify-center p-12">
               <div className="text-center">
                  <div className="bg-primary w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Segurança Garantida</h3>
                  <p className="text-muted-foreground">Operamos dentro de todas as normas legais e com máxima transparência para sua tranquilidade.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
