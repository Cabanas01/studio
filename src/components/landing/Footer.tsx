
import React from 'react';
import Link from 'next/link';
import { MessageCircle, MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <span className="text-xl font-bold tracking-tight text-foreground">
              ESSENCIAL <span className="text-primary font-black">DESPACHANTE</span>
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Referência em documentação veicular no Guarujá. Agilidade e segurança para você e seu veículo.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="bg-white p-2 rounded-full border hover:text-primary transition-colors shadow-sm">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-white p-2 rounded-full border hover:text-primary transition-colors shadow-sm">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li><Link href="#servicos" className="hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</Link></li>
              <li><Link href="#sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link href="https://wa.me/5513999999999" target="_blank" className="text-primary font-bold">Contato WhatsApp</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>(13) 3333-3333 <br /> (13) 99999-9999</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Av. Puglisi, 123 - Centro<br />Guarujá - SP, 11410-001</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Atendimento</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Segunda a Sexta<br />08:30 às 18:00</span>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Sábado<br />09:00 às 13:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-medium">
          <p>© {new Date().getFullYear()} Despachante Veicular Essencial. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-foreground">Política de Privacidade</Link>
            <Link href="#" className="hover:text-foreground">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
