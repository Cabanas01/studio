"use client";

import React from 'react';
import Link from 'next/link';
import { MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-black tracking-tighter text-foreground">
                DS <span className="text-primary uppercase">Despachante</span>
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
            <Link href="#servicos" className="transition-colors hover:text-primary">Serviços</Link>
            <Link href="#sobre" className="transition-colors hover:text-primary">Quem Somos</Link>
            <Link href="#contato" className="transition-colors hover:text-primary">Contato</Link>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-6 shadow-lg shadow-primary/20">
              <Link href="https://wa.me/5513999999999" target="_blank">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Link>
            </Button>
          </nav>

          <button 
            className="md:hidden p-2 text-foreground" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background p-6 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-200">
          <Link href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold uppercase tracking-tight">Serviços</Link>
          <Link href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold uppercase tracking-tight">Quem Somos</Link>
          <Link href="#contato" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold uppercase tracking-tight text-primary">Contato</Link>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-black w-full rounded-full py-7 text-lg">
            <Link href="https://wa.me/5513999999999" target="_blank" onClick={() => setIsMenuOpen(false)}>
              <MessageCircle className="mr-2 h-6 w-6" />
              Falar no WhatsApp
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
