
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
    <section id="home" className="relative w-full min-h-[90vh] flex items-center py-24 overflow-hidden bg-zinc-950">
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            sizes="100vw"
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        </div>
      )}
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl text-left">
          <div className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-xs md:text-sm font-black uppercase tracking-widest text-primary-foreground mb-8 md:mb-10">
            Referência na Baixada Santista
          </div>
          <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl mb-8 md:mb-10 leading-[1] md:leading-[0.9]">
            DOCUMENTAÇÃO <br />
            VEICULAR E <br />
            <span className="text-primary italic">CURSOS EAD.</span>
          </h1>
          <p className="text-xl text-zinc-100 md:text-3xl mb-10 md:mb-14 max-w-3xl font-medium leading-relaxed">
            Eliminamos a burocracia do seu veículo e aceleramos sua carreira com cursos profissionalizantes 100% online.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center">
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-black rounded-xl px-10 md:px-12 py-8 md:py-10 text-xl md:text-2xl shadow-2xl shadow-primary/40 transition-all hover:scale-105 active:scale-95">
              <Link href={whatsappUrl} target="_blank">
                <MessageCircle className="mr-4 h-8 w-8 md:h-10 md:w-10" />
                FALAR COM ESPECIALISTA
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-black rounded-xl px-10 md:px-12 py-8 md:py-10 text-xl md:text-2xl transition-all hover:scale-105 bg-transparent backdrop-blur-sm">
              <Link href="https://dsdespachanteguaruja.com.br" target="_blank">
                <GraduationCap className="mr-4 h-8 w-8 md:h-10 md:w-10" />
                VER CURSOS EAD
              </Link>
            </Button>
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row gap-10">
            <div className="flex items-center gap-4">
              <CheckCircle className="h-8 w-8 text-primary" />
              <span className="text-white font-bold text-base uppercase tracking-wider">Gestão Detran-SP</span>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle className="h-8 w-8 text-primary" />
              <span className="text-white font-bold text-base uppercase tracking-wider">Certificação Válida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
