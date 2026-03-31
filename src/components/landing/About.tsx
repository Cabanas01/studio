
import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-img');

  return (
    <section id="sobre" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            {aboutImage && (
              <div className="relative h-[350px] md:h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-premium">
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
            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-zinc-950 p-6 md:p-10 rounded-3xl shadow-2xl border-4 border-primary">
              <p className="text-4xl md:text-6xl font-black text-primary leading-none mb-1 md:mb-2 italic">10+</p>
              <p className="text-[10px] md:text-xs font-bold text-white uppercase tracking-[0.2em]">Anos de <br />Experiência</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-xs md:text-sm mb-4 block">Especialistas no Guarujá</span>
            <h2 className="text-4xl font-black tracking-tighter text-foreground sm:text-5xl lg:text-7xl mb-8 uppercase leading-[0.9]">
              PROFISSIONALISMO <br />
              QUE <span className="text-primary italic">LIBERTA VOCÊ.</span>
            </h2>
            <div className="space-y-6 text-base md:text-xl text-zinc-600 font-medium leading-relaxed">
              <p>
                A <strong>DS Despachante</strong> nasceu com o propósito de simplificar a vida do condutor no litoral paulista. Entendemos que seu tempo é precioso e a burocracia do Detran não deve ser um obstáculo.
              </p>
              <p>
                Com transparência total e processos 100% digitais, garantimos que cada documento seja resolvido com a máxima agilidade permitida pela lei.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {['Atendimento personalizado', 'Preços competitivos', 'Transparência total', 'Agilidade Detran-SP'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-900 font-black uppercase text-[10px] md:text-xs tracking-tight">
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
