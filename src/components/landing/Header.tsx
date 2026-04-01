
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoImage = PlaceHolderImages.find(img => img.id === 'logo-ds');
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5513991932590&text=Oie%2C%20vim%20pelo%20site!";

  const navLinks = [
    { name: 'INÍCIO', href: '#home' },
    { name: 'SERVIÇOS', href: '#servicos' },
    { name: 'DIFERENCIAIS', href: '#diferenciais' },
    { name: 'CURSOS EAD', href: 'https://dsdespachanteguaruja.com.br', external: true },
    { name: 'SOBRE', href: '#sobre' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTATO', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              {logoImage && (
                <div className="relative h-14 w-14 transition-transform group-hover:scale-105">
                  <Image
                    src={logoImage.imageUrl}
                    alt="DS Despachante Logo"
                    fill
                    sizes="56px"
                    className="object-contain"
                    priority
                  />
                </div>
              )}
              <div className="flex flex-col leading-[0.8]">
                <span className="text-3xl md:text-4xl font-black tracking-tighter text-foreground">
                  DS
                </span>
                <span className="text-primary uppercase text-[9px] md:text-[11px] tracking-[0.25em] font-black">
                  DESPACHANTE
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden xl:flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.15em]">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                target={link.external ? "_blank" : "_self"}
                className="transition-colors hover:text-primary whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-black rounded-full px-5 h-10 text-[10px] shadow-lg shadow-primary/20">
              <Link href={whatsappUrl} target="_blank">
                <MessageCircle className="mr-2 h-4 w-4" />
                WHATSAPP
              </Link>
            </Button>
          </nav>

          <button 
            className="xl:hidden p-2 text-foreground" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="xl:hidden border-t bg-background p-6 flex flex-col gap-5 animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => !link.external && setIsMenuOpen(false)}
              target={link.external ? "_blank" : "_self"}
              className="text-xl font-black uppercase tracking-tight hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-black w-full rounded-full py-7 text-lg">
            <Link href={whatsappUrl} target="_blank" onClick={() => setIsMenuOpen(false)}>
              <MessageCircle className="mr-2 h-6 w-6" />
              Falar no WhatsApp
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
