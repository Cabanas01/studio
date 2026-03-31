
"use client";

import React from 'react';
import Link from 'next/link';
import { MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                ESSENCIAL <span className="text-primary font-black">DESPACHANTE</span>
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#servicos" className="transition-colors hover:text-primary">Serviços</Link>
            <Link href="#diferenciais" className="transition-colors hover:text-primary">Diferenciais</Link>
            <Link href="#sobre" className="transition-colors hover:text-primary">Sobre Nós</Link>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6">
              <Link href="https://wa.me/5513999999999" target="_blank">
                <MessageCircle className="mr-2 h-4 w-4" />
                Resolver agora pelo WhatsApp
              </Link>
            </Button>
          </nav>

          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          <Link href="#servicos" onClick={() => setIsMenuOpen(false)} className="px-2 py-2 text-lg font-medium">Serviços</Link>
          <Link href="#diferenciais" onClick={() => setIsMenuOpen(false)} className="px-2 py-2 text-lg font-medium">Diferenciais</Link>
          <Link href="#sobre" onClick={() => setIsMenuOpen(false)} className="px-2 py-2 text-lg font-medium">Sobre Nós</Link>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold w-full rounded-full py-6">
            <Link href="https://wa.me/5513999999999" target="_blank" onClick={() => setIsMenuOpen(false)}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
