
import React from 'react';
import { Zap, ShieldCheck, Headset, CheckCircle, Clock, Smartphone, Search, MessageSquare } from 'lucide-react';

const differentials = [
  {
    title: 'Atendimento via WhatsApp',
    description: 'Resolva tudo sem sair de casa com suporte imediato e digital.',
    icon: MessageSquare,
  },
  {
    title: 'Sem Filas ou Burocracia',
    description: 'Nós cuidamos da papelada chata e das idas ao Detran por você.',
    icon: Zap,
  },
  {
    title: 'Transparência Total',
    description: 'Acompanhamento passo a passo de cada etapa do seu processo.',
    icon: Search,
  },
  {
    title: 'Especialistas Detran',
    description: 'Equipe treinada para evitar erros e agilizar documentações.',
    icon: ShieldCheck,
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4 block">Por que a DS?</span>
            <h2 className="text-4xl font-black tracking-tighter text-foreground sm:text-5xl lg:text-6xl mb-8 uppercase leading-[0.9]">
              EFICIÊNCIA QUE <br />
              <span className="text-primary italic">VOCÊ PRECISA.</span>
            </h2>
            <p className="text-lg text-zinc-600 mb-10 font-medium">
              Nossa missão é transformar processos lentos em experiências fluidas. No Guarujá, somos referência em agilidade documental.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {differentials.map((diff, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 bg-white p-3 rounded-2xl shadow-sm border border-zinc-100 self-start">
                    <diff.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 uppercase tracking-tight">{diff.title}</h3>
                    <p className="text-sm text-zinc-500 font-medium leading-tight">{diff.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-primary/10 rounded-[4rem] rotate-3 absolute inset-0 -z-10 blur-xl" />
            <div className="aspect-square bg-zinc-950 rounded-[3rem] shadow-2xl flex items-center justify-center p-12 text-center">
               <div className="space-y-6">
                  <div className="bg-primary w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-primary/20">
                    <ShieldCheck className="h-12 w-12 text-zinc-950" />
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">Segurança <br /><span className="text-primary">Garantida</span></h3>
                  <p className="text-zinc-400 font-medium text-sm px-4">
                    Operamos em total conformidade com as normas legais do Detran-SP e Marinha do Brasil, garantindo tranquilidade absoluta.
                  </p>
                  <div className="pt-4 flex justify-center gap-2">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
