
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5513991932590&text=Oie%2C%20vim%20pelo%20site!";

  const navLinks = [
    { name: 'INÍCIO', href: '/' },
    { name: 'SERVIÇOS', href: '/servicos' },
    { name: 'DIFERENCIAIS', href: '/#diferenciais' },
    { name: 'CURSOS EAD', href: 'https://dsdespachanteguaruja.com.br', external: true },
    { name: 'SOBRE', href: '/#sobre' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'CONTATO', href: '/#contato' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex flex-col items-center leading-[0.85]">
                <span className="text-3xl md:text-4xl font-black tracking-tighter text-foreground">
                  DS
                </span>
                <span className="text-primary uppercase text-[10px] md:text-[12px] tracking-[0.2em] font-black">
                  DESPACHANTE
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden xl:flex items-center gap-8 text-[14px] font-black uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                target={link.external ? "_blank" : "_self"}
                className="transition-colors hover:text-primary whitespace-nowrap py-2"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-black rounded-full px-6 h-12 text-[13px] shadow-lg shadow-primary/20">
              <Link href={whatsappUrl} target="_blank">
                <MessageCircle className="mr-2 h-5 w-5" />
                WHATSAPP
              </Link>
            </Button>
          </nav>

          <button 
            className="xl:hidden p-3 text-foreground" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="xl:hidden border-t bg-background p-8 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => !link.external && setIsMenuOpen(false)}
              target={link.external ? "_blank" : "_self"}
              className="text-2xl font-black uppercase tracking-tight hover:text-primary transition-colors py-2 border-b border-zinc-100 last:border-0"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-black w-full rounded-full py-8 text-xl shadow-lg mt-4">
            <Link href={whatsappUrl} target="_blank" onClick={() => setIsMenuOpen(false)}>
              <MessageCircle className="mr-3 h-7 w-7" />
              Falar no WhatsApp
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
