
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5513991932590&text=Olá! Vim pelo site e gostaria de tirar uma dúvida.";

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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex flex-col items-center leading-[0.8] group">
              <span className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">
                DS
              </span>
              <span className="text-primary uppercase text-[12px] md:text-[14px] tracking-[0.25em] font-black">
                DESPACHANTE
              </span>
            </Link>
          </div>

          <nav className="hidden xl:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                target={link.external ? "_blank" : "_self"}
                className="text-[16px] font-black uppercase tracking-wider transition-colors hover:text-primary whitespace-nowrap py-2"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-black rounded-full px-8 h-14 text-[16px] shadow-lg shadow-primary/20">
              <Link href={whatsappUrl} target="_blank">
                <MessageCircle className="mr-2 h-6 w-6" />
                WHATSAPP
              </Link>
            </Button>
          </nav>

          <button 
            className="xl:hidden p-4 text-foreground bg-zinc-100 rounded-xl" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir Menu"
          >
            {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="xl:hidden border-t bg-background p-8 flex flex-col gap-8 animate-in slide-in-from-top-4 duration-200 shadow-2xl h-screen">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => !link.external && setIsMenuOpen(false)}
              target={link.external ? "_blank" : "_self"}
              className="text-3xl font-black uppercase tracking-tight hover:text-primary transition-colors py-4 border-b border-zinc-100 last:border-0"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-black w-full rounded-2xl py-10 text-2xl shadow-xl mt-4">
            <Link href={whatsappUrl} target="_blank" onClick={() => setIsMenuOpen(false)}>
              <MessageCircle className="mr-3 h-8 w-8" />
              Falar no WhatsApp
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
