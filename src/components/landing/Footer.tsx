
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const logoImage = PlaceHolderImages.find(img => img.id === 'logo-ds');

  return (
    <footer id="contato" className="bg-zinc-950 text-white pt-24 pb-12 border-t-4 border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              {logoImage && (
                <div className="relative h-12 w-12 grayscale invert">
                  <Image
                    src={logoImage.imageUrl}
                    alt="DS Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <span className="text-3xl font-black tracking-tighter">
                DS <span className="text-primary italic text-4xl block text-sm tracking-widest not-italic">DESPACHANTE</span>
              </span>
            </div>
            <p className="text-zinc-400 font-medium leading-relaxed">
              Simplificando a vida do motorista no Guarujá com agilidade, transparência e segurança em todos os processos.
            </p>
            <div className="flex gap-4">
              <Link href="https://instagram.com" target="_blank" className="bg-zinc-800 p-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://facebook.com" target="_blank" className="bg-zinc-800 p-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-primary text-sm mb-8 italic">Serviços Principais</h4>
            <ul className="space-y-4 text-zinc-300 font-bold uppercase text-xs tracking-widest">
              <li><Link href="#servicos" className="hover:text-primary transition-colors">Transferência Veicular</Link></li>
              <li><Link href="#servicos" className="hover:text-primary transition-colors">Licenciamento Anual</Link></li>
              <li><Link href="#servicos" className="hover:text-primary transition-colors">Primeiro Registro</Link></li>
              <li><Link href="#servicos" className="hover:text-primary transition-colors">Despachante Náutico</Link></li>
              <li><Link href="#servicos" className="hover:text-primary transition-colors">Despachante Bélico</Link></li>
              <li><Link href="#servicos" className="hover:text-primary transition-colors">Renovação de CNH</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-primary text-sm mb-8 italic">Localização</h4>
            <ul className="space-y-6 text-zinc-300 font-bold text-sm">
              <li className="flex gap-4 items-start">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                <span>Rua Mario Ribeiro, 123 - Centro<br />Guarujá - SP, 11410-001</span>
              </li>
              <li className="flex gap-4 items-center text-primary font-black uppercase italic tracking-tighter text-lg">
                <Phone className="h-6 w-6" />
                <span>(13) 99999-9999</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-primary text-sm mb-8 italic">Horários</h4>
            <ul className="space-y-4 text-zinc-300 font-bold uppercase text-xs tracking-widest">
              <li className="flex flex-col">
                <span className="text-zinc-500 mb-1">Segunda a Sexta</span>
                <span>08:30 às 18:00</span>
              </li>
              <li className="flex flex-col">
                <span className="text-zinc-500 mb-1">Sábados</span>
                <span>09:00 às 13:00</span>
              </li>
              <li className="pt-4">
                <span className="text-primary animate-pulse flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Atendimento Digital 24h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-500 font-black uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} DS DESPACHANTE GUARUJÁ. CNPJ: 00.000.000/0001-00</p>
          <div className="flex gap-10 italic">
            <Link href="#" className="hover:text-primary transition-colors">Políticas</Link>
            <Link href="#" className="hover:text-primary transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
