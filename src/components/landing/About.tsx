
import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-img');

  return (
    <section id="sobre" className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="relative order-2 lg:order-1">
            {aboutImage && (
              <div className="relative h-[400px] md:h-[650px] w-full rounded-[3rem] overflow-hidden shadow-premium border-8 border-zinc-50">
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
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-zinc-950 p-8 md:p-14 rounded-[2.5rem] shadow-2xl border-4 border-primary">
              <p className="text-5xl md:text-7xl font-black text-primary leading-none mb-2 md:mb-4 italic">Ref.</p>
              <p className="text-xs md:text-base font-bold text-white uppercase tracking-[0.2em] leading-relaxed">Um dos Maiores da <br />Baixada Santista</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-5xl font-black tracking-tighter text-foreground sm:text-6xl lg:text-8xl mb-12 uppercase leading-[0.9]">
              AUTORIDADE EM <br />
              <span className="text-primary italic">RESOLUÇÃO.</span>
            </h2>
            <div className="space-y-8 text-lg md:text-2xl text-zinc-600 font-medium leading-relaxed">
              <p>
                A <strong>DS Despachante Guarujá</strong> é uma empresa consolidada, reconhecida pela excelência em assessoria documental e formação profissional.
              </p>
              <p>
                Atuamos diretamente junto ao DETRAN-SP, eliminando burocracias e garantindo segurança jurídica e praticidade. Hoje, somos um hub completo de regularização e qualificação.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                {[
                  'Gestão integral de processos',
                  'Foco em resultados complexos',
                  'Certificação EAD válida',
                  'Transparência absoluta'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-zinc-900 font-black uppercase text-xs md:text-sm tracking-tight">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
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
