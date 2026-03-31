
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const logoImage = PlaceHolderImages.find(img => img.id === 'logo-ds');
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5513991932590&text=Oie%2C%20vim%20pelo%20site!";

  const navLinks = [
    { name: 'Página Inicial', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Cursos', href: 'https://dsdespachanteguaruja.com.br', external: true },
    { name: 'Sobre', href: '#sobre' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-3">
              {logoImage && (
                <div className="relative h-10 w-10 md:h-12 md:w-12">
                  <Image
                    src={logoImage.imageUrl}
                    alt="DS Logo"
                    fill
                    className="object-contain"
                    data-ai-hint="logo icon"
                  />
                </div>
              )}
              <span className="text-xl md:text-2xl font-black tracking-tighter text-foreground leading-none">
                DS <span className="text-primary uppercase block text-[10px] md:text-xs tracking-[0.2em]">Despachante</span>
              </span>
            </Link>
          </div>

          <nav className="hidden xl:flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.15em]">
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
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-6 shadow-lg shadow-primary/20">
              <Link href={whatsappUrl} target="_blank">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden border-t bg-background p-6 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => !link.external && setIsMenuOpen(false)}
              target={link.external ? "_blank" : "_self"}
              className="text-xl font-bold uppercase tracking-tight"
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
