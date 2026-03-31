
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5513991932590&text=Oie%2C%20vim%20pelo%20site!";

  return (
    <section className="relative w-full py-16 md:py-32 lg:py-40 overflow-hidden bg-zinc-950">
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
            Referência no Guarujá
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl mb-6 md:mb-8 leading-[0.95] md:leading-[0.9]">
            DOCUMENTAÇÃO <br />
            VEICULAR SEM <br />
            <span className="text-primary italic">COMPLICAÇÃO.</span>
          </h1>
          <p className="text-lg text-zinc-300 md:text-2xl mb-8 md:mb-12 max-w-2xl font-medium leading-relaxed">
            Resolvemos toda a burocracia do seu veículo com agilidade, transparência e o melhor preço da região.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-black rounded-xl px-8 md:px-10 py-7 md:py-8 text-lg md:text-xl shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95">
              <Link href={whatsappUrl} target="_blank">
                <MessageCircle className="mr-3 h-6 w-6 md:h-7 md:w-7" />
                COMEÇAR AGORA
              </Link>
            </Button>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-white font-bold text-sm md:text-base">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <span>Atendimento 100% Digital</span>
              </div>
              <p className="text-[10px] md:text-sm text-zinc-500 font-semibold uppercase tracking-wider">
                Rapidez e Segurança Garantida
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
