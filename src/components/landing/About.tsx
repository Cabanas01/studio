import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-img');

  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            {aboutImage && (
              <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              </div>
            )}
            <div className="absolute -bottom-10 -left-10 bg-zinc-950 p-10 rounded-[2.5rem] shadow-2xl border-4 border-primary hidden md:block">
              <p className="text-6xl font-black text-primary leading-none mb-2">10+</p>
              <p className="text-xs font-bold text-white uppercase tracking-[0.2em]">Anos de <br />Experiência</p>
            </div>
          </div>
          
          <div>
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4 block">Sobre a DS Despachante</span>
            <h2 className="text-4xl font-black tracking-tighter text-foreground sm:text-5xl lg:text-6xl mb-8 uppercase leading-[0.9]">
              PROFISSIONALISMO <br />
              QUE <span className="text-primary italic text-6xl md:text-7xl">TRANSFORMA.</span>
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 font-medium leading-relaxed">
              <p>
                A <strong>DS Despachante</strong> consolidou-se no Guarujá como referência em agilidade e segurança documental. Nossa missão é remover o peso da burocracia dos ombros dos nossos clientes.
              </p>
              <p>
                Trabalhamos com transparência absoluta em cada processo, garantindo que você tenha seu veículo regularizado no menor tempo possível e com o suporte de especialistas que entendem do assunto.
              </p>
              
              <ul className="space-y-3 mt-8">
                {['Atendimento personalizado', 'Preços justos e competitivos', 'Processos 100% legalizados', 'Suporte pós-serviço'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-900 font-bold uppercase text-sm tracking-tight">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
