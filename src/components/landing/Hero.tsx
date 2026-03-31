
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
    <section id="home" className="relative w-full py-16 md:py-32 lg:py-40 overflow-hidden bg-zinc-950">
      {heroImage && (
        <div className="absolute inset-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            sizes="100vw"
            className="object-cover opacity-40 grayscale-[0.5]"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent" />
        </div>
      )}
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left">
          <div className="inline-flex items-center rounded-lg bg-primary px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest text-primary-foreground mb-6 md:mb-8">
            Referência na Baixada Santista
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl mb-6 md:mb-8 leading-[0.95] md:leading-[0.9]">
            DOCUMENTAÇÃO <br />
            VEICULAR E <br />
            <span className="text-primary italic">CURSOS EAD.</span>
          </h1>
          <p className="text-lg text-zinc-300 md:text-2xl mb-8 md:mb-12 max-w-2xl font-medium leading-relaxed">
            Eliminamos a burocracia do seu veículo e aceleramos sua carreira com cursos profissionalizantes 100% online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start sm:items-center">
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-black rounded-xl px-8 md:px-10 py-7 md:py-8 text-lg md:text-xl shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95">
              <Link href={whatsappUrl} target="_blank">
                <MessageCircle className="mr-3 h-6 w-6 md:h-7 md:w-7" />
                FALAR COM ESPECIALISTA
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-black rounded-xl px-8 md:px-10 py-7 md:py-8 text-lg md:text-xl transition-all hover:scale-105">
              <Link href="https://dsdespachanteguaruja.com.br" target="_blank">
                <GraduationCap className="mr-3 h-6 w-6 md:h-7 md:w-7" />
                VER CURSOS EAD
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row gap-8">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-primary" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">Gestão Detran-SP</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-primary" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">Certificação Válida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
