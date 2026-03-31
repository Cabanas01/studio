
import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-img');

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            {aboutImage && (
              <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              </div>
            )}
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-2xl hidden md:block">
              <p className="text-4xl font-bold text-primary-foreground">15+</p>
              <p className="text-sm font-semibold text-primary-foreground">Anos de Experiência</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-6">
              Sobre a <span className="text-primary">Empresa</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                O <strong>Despachante Veicular Essencial</strong> nasceu com o propósito de simplificar a vida dos motoristas no Guarujá e Baixada Santista.
              </p>
              <p>
                Somos especialistas em todos os tipos de serviços de documentação automotiva, desde o licenciamento anual até processos complexos de regularização de motores e chassis.
              </p>
              <p>
                Nosso foco é total em agilidade, segurança e um atendimento personalizado. Sabemos que seu tempo é valioso, por isso criamos um fluxo de trabalho digital que permite resolver quase tudo sem que você precise sair de casa.
              </p>
              <p className="font-medium text-foreground">
                Confiança, transparência e rapidez: esses são os pilares que nos tornam referência no mercado de despachante veicular.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
