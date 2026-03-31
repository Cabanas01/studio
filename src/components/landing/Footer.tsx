import React from 'react';
import Link from 'next/link';
import { MessageCircle, MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contato" className="bg-zinc-950 text-white pt-24 pb-12 border-t-4 border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
            <span className="text-3xl font-black tracking-tighter">
              DS <span className="text-primary italic text-4xl">DESPACHANTE</span>
            </span>
            <p className="text-zinc-400 font-medium leading-relaxed">
              Simplificando a vida do motorista no Guarujá e região com agilidade, transparência e segurança.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="bg-zinc-800 p-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="bg-zinc-800 p-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-primary text-sm mb-8 italic">Serviços</h4>
            <ul className="space-y-4 text-zinc-300 font-bold uppercase text-xs tracking-widest">
              <li><Link href="#servicos" className="hover:text-primary transition-colors">Licenciamento</Link></li>
              <li><Link href="#servicos" className="hover:text-primary transition-colors">Transferência</Link></li>
              <li><Link href="#servicos" className="hover:text-primary transition-colors">1º Registro</Link></li>
              <li><Link href="#servicos" className="hover:text-primary transition-colors">Segunda Via</Link></li>
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
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-500 font-black uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} DS DESPACHANTE GUARUJÁ. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10 italic">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
