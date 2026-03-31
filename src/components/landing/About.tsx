
import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-img');

  return (
    <section id="sobre" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            {aboutImage && (
              <div className="relative h-[300px] md:h-[500px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              </div>
            )}
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-left-10 bg-zinc-950 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border-4 border-primary">
              <p className="text-4xl md:text-6xl font-black text-primary leading-none mb-1 md:mb-2">10+</p>
              <p className="text-[10px] md:text-xs font-bold text-white uppercase tracking-[0.2em]">Anos de <br />Experiência</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-xs md:text-sm mb-4 block">Sobre a DS Despachante</span>
            <h2 className="text-3xl font-black tracking-tighter text-foreground sm:text-5xl lg:text-6xl mb-6 md:mb-8 uppercase leading-[0.9]">
              PROFISSIONALISMO <br />
              QUE <span className="text-primary italic text-5xl md:text-7xl">TRANSFORMA.</span>
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-zinc-600 font-medium leading-relaxed">
              <p>
                A <strong>DS Despachante</strong> consolidou-se no Guarujá como referência em agilidade e segurança documental. Nossa missão é remover o peso da burocracia dos ombros dos nossos clientes.
              </p>
              <p>
                Trabalhamos com transparência absoluta em cada processo, garantindo que você tenha seu veículo regularizado no menor tempo possível.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                {['Atendimento personalizado', 'Preços justos', 'Processos 100% legalizados', 'Suporte pós-serviço'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-900 font-bold uppercase text-[10px] md:text-xs tracking-tight">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
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
