
import React from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5513991932590&text=Oie%2C%20vim%20pelo%20site!";

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Precisa resolver sua documentação agora?
            </h2>
            <p className="text-slate-300 text-lg mb-10 font-light">
              Não perca tempo em filas ou tentando entender burocracias. Clique no botão abaixo e fale diretamente com quem resolve.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl px-12 py-8 rounded-full shadow-2xl shadow-primary/40 transition-all hover:scale-105 active:scale-95">
              <Link href={whatsappUrl} target="_blank">
                <MessageCircle className="mr-3 h-8 w-8" />
                Falar no WhatsApp
              </Link>
            </Button>
            <p className="mt-8 text-slate-500 text-sm font-medium tracking-wide">
              RESPOSTA IMEDIATA EM HORÁRIO COMERCIAL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
