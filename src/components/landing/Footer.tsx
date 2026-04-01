
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Instagram, Facebook, Clock } from 'lucide-react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5513991932590&text=Oie%2C%20vim%20pelo%20site!";

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contato" className="bg-zinc-950 text-white pt-24 pb-12 border-t-4 border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex flex-col leading-[0.8] group">
              <span className="text-4xl font-black tracking-tighter text-white">
                DS
              </span>
              <span className="text-primary uppercase text-[12px] tracking-[0.25em] font-black">
                DESPACHANTE
              </span>
            </div>
            <p className="text-zinc-400 text-lg font-medium leading-relaxed">
              Referência em regularização veicular e capacitação profissional na Baixada Santista.
            </p>
            <div className="flex gap-6">
              <Link href="https://instagram.com" target="_blank" className="bg-zinc-900 p-4 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://facebook.com" target="_blank" className="bg-zinc-900 p-4 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-primary text-sm mb-8 italic">Navegação</h4>
            <ul className="space-y-4 text-zinc-300 font-bold uppercase text-[12px] tracking-widest">
              <li><Link href="/" className="hover:text-primary transition-colors">Página Inicial</Link></li>
              <li><Link href="/servicos" className="hover:text-primary transition-colors">Todos os Serviços</Link></li>
              <li><Link href="https://dsdespachanteguaruja.com.br" target="_blank" className="hover:text-primary transition-colors">Cursos EAD</Link></li>
              <li><Link href="/#sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link href="/#faq" className="hover:text-primary transition-colors">Dúvidas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-primary text-sm mb-8 italic">Endereço</h4>
            <ul className="space-y-8 text-zinc-300 font-bold text-base md:text-lg">
              <li className="flex gap-4 items-start leading-relaxed">
                <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                <span>
                  Avenida Alameda das Tulipas, 214<br />
                  Jardim Primavera, Guarujá - SP<br />
                  <span className="text-primary italic text-[11px] md:text-xs uppercase tracking-wider font-black">(Em frente ao radar de 40 km/h)</span>
                </span>
              </li>
              <li className="flex gap-4 items-center text-primary font-black uppercase italic tracking-tighter text-2xl md:text-3xl">
                <Phone className="h-8 w-8" />
                <Link href={whatsappUrl} target="_blank" className="hover:underline">(13) 99193-2590</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-primary text-sm mb-8 italic">Horários</h4>
            <ul className="space-y-6 text-zinc-300 font-bold uppercase text-[12px] tracking-widest">
              <li className="flex flex-col gap-2">
                <span className="text-zinc-500 text-sm">Segunda a Sexta</span>
                <span className="flex items-center gap-3 text-lg"><Clock className="h-5 w-5 text-primary" /> 08:00 às 19:00</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-zinc-500 text-sm">Sábados</span>
                <span className="flex items-center gap-3 text-lg"><Clock className="h-5 w-5 text-primary" /> 09:00 às 15:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-zinc-500 font-black uppercase tracking-[0.2em]">
          <p>© {year ? year : '2025'} DS DESPACHANTE GUARUJÁ. Todos os direitos reservados.</p>
          <div className="flex gap-8 italic">
            <Link href="#" className="hover:text-primary transition-colors">Privacidade</Link>
            <Link href="#" className="hover:text-primary transition-colors">LGPD</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
