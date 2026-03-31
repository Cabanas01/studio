
import React from 'react';
import { Users, Zap, ShieldCheck } from 'lucide-react';

export function Authority() {
  return (
    <div className="bg-white border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x py-12">
          <div className="flex items-center justify-center gap-4 px-8 py-4 md:py-0">
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-bold">+ de 5.000</p>
              <p className="text-sm text-muted-foreground">Clientes Atendidos</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4 px-8 py-4 md:py-0">
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-bold">Rápido e Confiável</p>
              <p className="text-sm text-muted-foreground">Processos Agilizados</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4 px-8 py-4 md:py-0">
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-bold">100% Especialistas</p>
              <p className="text-sm text-muted-foreground">Documentação Veicular</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
