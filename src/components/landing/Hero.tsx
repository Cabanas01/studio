
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-48 overflow-hidden bg-black">
      {heroImage && (
        <div className="absolute inset-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-60"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>
      )}
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm mb-6 border border-primary/30">
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Atendimento Rápido no Guarujá e Região
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Resolva sua documentação veicular de forma <span className="text-primary">rápida e sem burocracia</span>
          </h1>
          <p className="text-lg text-slate-300 md:text-xl mb-10 max-w-2xl font-light">
            Especialistas em transferência, licenciamento, regularização de débitos e tudo o que seu veículo precisa para rodar tranquilo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8 py-7 text-lg shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
              <Link href="https://wa.me/5513999999999" target="_blank">
                <MessageCircle className="mr-2 h-6 w-6" />
                Falar com um especialista agora
              </Link>
            </Button>
            <p className="text-sm text-slate-400 mt-2 sm:mt-0 font-medium">
              * Atendimento rápido via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
