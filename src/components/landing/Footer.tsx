"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Instagram, Facebook, Clock } from 'lucide-react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5513991932590&text=Olá! Vim pelo site.";

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contato" className="bg-zinc-950 text-white pt-24 pb-12 border-t-8 border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex flex-col leading-[0.7] items-start group">
              <span className="text-6xl font-black tracking-tighter text-white">
                DS
              </span>
              <span className="text-primary uppercase text-[14px] tracking-[0.3em] font-black">
                DESPACHANTE
              </span>
            </div>
            <p className="text-zinc-400 text-xl font-medium leading-relaxed max-w-xs">
              Referência em regularização veicular e capacitação profissional na Baixada Santista.
            </p>
            <div className="flex gap-6">
              <Link href="https://instagram.com" target="_blank" className="bg-zinc-900 p-5 rounded-2xl hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="h-8 w-8" />
              </Link>
              <Link href="https://facebook.com" target="_blank" className="bg-zinc-900 p-5 rounded-2xl hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="h-8 w-8" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-primary text-xl mb-10 italic underline decoration-4 underline-offset-8">Navegação</h4>
            <ul className="space-y-6 text-zinc-300 font-bold uppercase text-[18px] tracking-widest">
              <li><Link href="/" className="hover:text-primary transition-colors py-2 inline-block">Início</Link></li>
              <li><Link href="/servicos" className="hover:text-primary transition-colors py-2 inline-block">Serviços</Link></li>
              <li><Link href="https://dsdespachanteguaruja.com.br" target="_blank" className="hover:text-primary transition-colors py-2 inline-block">Cursos EAD</Link></li>
              <li><Link href="/#sobre" className="hover:text-primary transition-colors py-2 inline-block">Sobre Nós</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-primary text-xl mb-10 italic underline decoration-4 underline-offset-8">Onde Estamos</h4>
            <ul className="space-y-10 text-zinc-300 font-bold text-xl md:text-2xl">
              <li className="flex gap-5 items-start leading-relaxed">
                <MapPin className="h-10 w-10 text-primary flex-shrink-0 mt-2" />
                <span>
                  Av. Alameda das Tulipas, 214<br />
                  Jardim Primavera, Guarujá - SP<br />
                  <span className="text-primary italic text-base md:text-lg uppercase tracking-wider font-black">(Em frente ao radar de 40 km/h)</span>
                </span>
              </li>
              <li className="flex gap-5 items-center text-primary font-black uppercase italic tracking-tighter text-3xl md:text-5xl mt-6">
                <Phone className="h-12 w-12" />
                <Link href={whatsappUrl} target="_blank" className="hover:underline">(13) 99193-2590</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-primary text-xl mb-10 italic underline decoration-4 underline-offset-8">Atendimento</h4>
            <ul className="space-y-8 text-zinc-300 font-bold uppercase text-[18px] tracking-widest">
              <li className="flex flex-col gap-3">
                <span className="text-zinc-500 text-lg">Segunda a Sexta</span>
                <span className="flex items-center gap-4 text-3xl"><Clock className="h-10 w-10 text-primary" /> 08:00 às 19:00</span>
              </li>
              <li className="flex flex-col gap-3">
                <span className="text-zinc-500 text-lg">Sábados</span>
                <span className="flex items-center gap-4 text-3xl"><Clock className="h-10 w-10 text-primary" /> 09:00 às 15:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[16px] text-zinc-500 font-black uppercase tracking-[0.2em]">
          <p>© {year ? year : '2025'} DS DESPACHANTE GUARUJÁ. Todos os direitos reservados.</p>
          <div className="flex gap-10 italic">
            <Link href="#" className="hover:text-primary transition-colors">Privacidade</Link>
            <Link href="#" className="hover:text-primary transition-colors">LGPD</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
