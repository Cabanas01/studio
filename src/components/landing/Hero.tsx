"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, CheckCircle, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5513991932590&text=Oie%2C%20vim%20pelo%20site!";

  return (
    <section id="home" className="relative w-full min-h-[95vh] flex items-center py-24 overflow-hidden bg-zinc-950">
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            sizes="100vw"
            className="object-cover opacity-85"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />
        </div>
      )}
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl text-left">
          <div className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm md:text-base font-black uppercase tracking-widest text-primary-foreground mb-10 md:mb-12">
            Referência na Baixada Santista
          </div>
          <h1 className="text-6xl font-black tracking-tighter text-white sm:text-8xl md:text-9xl mb-10 md:mb-12 leading-[1] md:leading-[0.85]">
            DOCUMENTAÇÃO <br />
            VEICULAR E <br />
            <span className="text-primary italic">CURSOS EAD.</span>
          </h1>
          <p className="text-2xl text-zinc-100 md:text-4xl mb-12 md:mb-16 max-w-4xl font-medium leading-relaxed">
            Eliminamos a burocracia do seu veículo e aceleramos sua carreira com cursos 100% online.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 md:gap-10 items-start sm:items-center">
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-black rounded-2xl px-12 md:px-16 py-10 md:py-12 text-2xl md:text-3xl shadow-2xl shadow-primary/40 transition-all hover:scale-105 active:scale-95">
              <Link href={whatsappUrl} target="_blank">
                <MessageCircle className="mr-4 h-10 w-10 md:h-12 md:w-12" />
                FALAR COM ESPECIALISTA
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-black rounded-2xl px-12 md:px-16 py-10 md:py-12 text-2xl md:text-3xl transition-all hover:scale-105 bg-transparent backdrop-blur-sm">
              <Link href="https://dsdespachanteguaruja.com.br" target="_blank">
                <GraduationCap className="mr-4 h-10 w-10 md:h-12 md:w-12" />
                VER CURSOS EAD
              </Link>
            </Button>
          </div>
          
          <div className="mt-20 flex flex-col md:flex-row gap-12">
            <div className="flex items-center gap-6">
              <CheckCircle className="h-10 w-10 text-primary" />
              <span className="text-white font-bold text-lg md:text-xl uppercase tracking-wider">Gestão Detran-SP</span>
            </div>
            <div className="flex items-center gap-6">
              <CheckCircle className="h-10 w-10 text-primary" />
              <span className="text-white font-bold text-lg md:text-xl uppercase tracking-wider">Certificação Válida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}