
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Instagram, Facebook, Clock } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const logoImage = PlaceHolderImages.find(img => img.id === 'logo-ds');
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5513991932590&text=Oie%2C%20vim%20pelo%20site!";

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contato" className="bg-zinc-950 text-white pt-20 pb-10 border-t-4 border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              {logoImage && (
                <div className="relative h-14 w-14 grayscale invert brightness-200">
                  <Image
                    src={logoImage.imageUrl}
                    alt="DS Despachante Logo"
                    fill
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
              )}
              <div className="flex flex-col leading-none">
                <span className="text-3xl font-black tracking-tighter text-white">
                  DS
                </span>
                <span className="text-primary uppercase text-[10px] tracking-[0.3em] font-black -mt-1">
                  DESPACHANTE
                </span>
              </div>
            </div>
            <p className="text-zinc-400 text-sm font-medium leading-relaxed">
              Um dos maiores escritórios da Baixada Santista. Referência em regularização veicular e formação profissional.
            </p>
            <div className="flex gap-4">
              <Link href="https://instagram.com" target="_blank" className="bg-zinc-900 p-2.5 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://facebook.com" target="_blank" className="bg-zinc-900 p-2.5 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-primary text-xs mb-6 italic">Navegação</h4>
            <ul className="space-y-3 text-zinc-300 font-bold uppercase text-[10px] tracking-widest">
              <li><Link href="#home" className="hover:text-primary transition-colors">Página Inicial</Link></li>
              <li><Link href="#servicos" className="hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link href="https://dsdespachanteguaruja.com.br" target="_blank" className="hover:text-primary transition-colors">Cursos EAD</Link></li>
              <li><Link href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</Link></li>
              <li><Link href="#sobre" className="hover:text-primary transition-colors">Sobre</Link></li>
              <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#contato" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-primary text-xs mb-6 italic">Endereço</h4>
            <ul className="space-y-5 text-zinc-300 font-bold text-xs">
              <li className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="leading-relaxed">
                  Avenida Alameda das Tulipas, 214<br />
                  Jardim Primavera, Guarujá - SP<br />
                  <span className="text-primary italic text-[9px] uppercase tracking-wider">(Em frente ao radar de 40 km/h)</span>
                </span>
              </li>
              <li className="flex gap-3 items-center text-primary font-black uppercase italic tracking-tighter text-lg">
                <Phone className="h-5 w-5" />
                <Link href={whatsappUrl} target="_blank" className="hover:underline">(13) 99193-2590</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-primary text-xs mb-6 italic">Horários</h4>
            <ul className="space-y-4 text-zinc-300 font-bold uppercase text-[10px] tracking-widest">
              <li className="flex flex-col gap-1">
                <span className="text-zinc-500">Segunda a Sexta</span>
                <span className="flex items-center gap-2"><Clock className="h-3 w-3" /> 08:00 às 19:00</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-zinc-500">Sábados</span>
                <span className="flex items-center gap-2"><Clock className="h-3 w-3" /> 09:00 às 15:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-zinc-500 font-black uppercase tracking-[0.2em]">
          <p>© {year ? year : '2025'} DS DESPACHANTE GUARUJÁ. CNPJ: 00.000.000/0001-00</p>
          <div className="flex gap-6 italic">
            <Link href="#" className="hover:text-primary transition-colors">Transparência</Link>
            <Link href="#" className="hover:text-primary transition-colors">LGPD</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
