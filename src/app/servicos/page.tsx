import React from 'react';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { 
  CarFront, 
  IdCard, 
  Gavel, 
  Bike, 
  Briefcase, 
  Search, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const allServiceCategories = [
  {
    category: "Serviços Veiculares",
    icon: CarFront,
    items: [
      { 
        title: 'Transferência de propriedade', 
        description: 'Processo completo de compra e venda (compra e venda).',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20transferir%20meu%20veículo.%20Pode%20me%20passar%20valor?'
      },
      { 
        title: 'Primeiro emplacamento', 
        description: 'Registro de veículo 0 km direto da concessionária.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20fazer%20emplacamento%200km.%20Qual%20o%20valor?'
      },
      { 
        title: 'Licenciamento anual', 
        description: 'Regularização obrigatória anual sem complicações.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20licenciar%20meu%20veículo.%20Pode%20verificar%20valor?'
      },
      { 
        title: 'Emissão de CRLV', 
        description: 'Acesso ao documento digital (CRLV-e).',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20emitir%20meu%20CRLV'
      },
      { 
        title: 'Segunda via CRV/CRLV', 
        description: 'Recuperação de documentos perdidos ou danificados.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20preciso%20da%202ª%20via%20do%20documento.%20Valor?'
      },
      { 
        title: 'Comunicação de venda', 
        description: 'Proteção jurídica imediata ao vender seu veículo.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20fazer%20comunicação%20de%20venda'
      },
      { 
        title: 'Baixa de veículo', 
        description: 'Processo legal para veículos destinados a sucata.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20dar%20baixa%20no%20veículo.%20Valor?'
      },
      { 
        title: 'Alteração de características', 
        description: 'Regularização de cor, motor, blindagem, etc.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20regularizar%20alteração%20do%20veículo'
      },
      { 
        title: 'Mudança de município', 
        description: 'Transferência de domicílio entre cidades ou estados.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20transferir%20meu%20veículo%20de%20cidade'
      },
      { 
        title: 'Regularização de débitos', 
        description: 'Quitação de multas, IPVA e taxas atrasadas.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20regularizar%20débitos.%20Pode%20verificar?'
      },
      { 
        title: 'Parcelamento de débitos', 
        description: 'Facilitamos o pagamento em até 12x no cartão.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20parcelar%20débitos.%20Opções?'
      },
      { 
        title: 'Desbloqueio de veículo', 
        description: 'Resolução de bloqueios administrativos ou judiciais.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20meu%20veículo%20está%20bloqueado.%20Pode%20verificar?'
      },
      { 
        title: 'Pesquisa completa', 
        description: 'Análise detalhada de todo o histórico do veículo.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20pesquisa%20completa%20do%20veículo.%20Valor?'
      },
    ]
  },
  {
    category: "CNH (Habilitação)",
    icon: IdCard,
    items: [
      { 
        title: 'Renovação de CNH', 
        description: 'Processo ágil para manter seu direito de dirigir.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20renovar%20minha%20CNH.%20Valor?'
      },
      { 
        title: 'Segunda via de CNH', 
        description: 'Solicitação rápida em caso de perda ou roubo.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20preciso%20da%202ª%20via%20da%20CNH'
      },
      { 
        title: 'Adição de categoria', 
        description: 'Inclusão de categoria A ou B na sua carteira.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20adicionar%20categoria.%20Valor?'
      },
      { 
        title: 'Mudança de categoria', 
        description: 'Evolução para categorias profissionais C, D ou E.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20mudar%20categoria.%20Valor?'
      },
      { 
        title: 'Regularização de CNH Suspensa', 
        description: 'Assessoria completa para recuperar seu direito.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20minha%20CNH%20está%20suspensa.%20Pode%20me%20ajudar?'
      },
      { 
        title: 'Defesa de suspensão', 
        description: 'Recursos técnicos contra processos de suspensão.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20recorrer%20suspensão'
      },
      { 
        title: 'Defesa de cassação', 
        description: 'Assessoria jurídica para evitar a perda da CNH.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20recorrer%20cassação'
      },
      { 
        title: 'Curso de reciclagem', 
        description: 'Encaminhamento e suporte completo para condutores.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20fazer%20o%20curso%20de%20reciclagem'
      },
      { 
        title: 'Consulta de pontuação', 
        description: 'Verificação detalhada do status atual da sua CNH.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20consultar%20meus%20pontos'
      },
    ]
  },
  {
    category: "Recursos e Defesas",
    icon: Gavel,
    items: [
      { 
        title: 'Defesa prévia de multa', 
        description: 'Primeira etapa de contestação de autuações.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20recorrer%20uma%20multa'
      },
      { 
        title: 'Recurso JARI (1ª instância)', 
        description: 'Defesa técnica fundamentada perante a junta.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20recurso%20JARI'
      },
      { 
        title: 'Recurso CETRAN (2ª instância)', 
        description: 'Última etapa administrativa de recurso.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20recurso%20CETRAN'
      },
      { 
        title: 'Análise técnica', 
        description: 'Estudo detalhado da legalidade da autuação.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20análise%20de%20multa'
      },
      { 
        title: 'Recursos personalizados', 
        description: 'Elaboração de defesas exclusivas para seu caso.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20recurso%20completo'
      },
      { 
        title: 'Acompanhamento', 
        description: 'Monitoramento total do processo administrativo.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20acompanhar%20meu%20processo'
      },
    ]
  },
  {
    category: "Motocicletas",
    icon: Bike,
    items: [
      { 
        title: 'Transferência de moto', 
        description: 'Agilidade total para proprietários de duas rodas.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20transferir%20minha%20moto'
      },
      { 
        title: 'Regularização documental', 
        description: 'Tudo o que sua moto precisa para rodar em dia.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20regularizar%20minha%20moto'
      },
      { 
        title: 'Licenciamento e débitos', 
        description: 'Consulta e quitação de pendências específicas.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20licenciar%20minha%20moto'
      },
      { 
        title: 'Recursos de multas', 
        description: 'Defesa especializada para o público motociclista.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20recorrer%20multa%20de%20moto'
      },
    ]
  },
  {
    category: "Empresas e Frotas",
    icon: Briefcase,
    items: [
      { 
        title: 'Gestão de multas', 
        description: 'Controle total das autuações da sua frota empresarial.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20gestão%20de%20frotas'
      },
      { 
        title: 'Controle de documentos', 
        description: 'Gestão organizada de todos os veículos da empresa.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20controle%20documental'
      },
      { 
        title: 'Assessoria contínua', 
        description: 'Suporte mensal para manter a frota em conformidade.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20assessoria%20para%20minha%20empresa'
      },
      { 
        title: 'Relatórios gerenciais', 
        description: 'Acompanhamento detalhado de custos e prazos.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20relatórios%20de%20frota'
      },
    ]
  },
  {
    category: "Consultoria",
    icon: Search,
    items: [
      { 
        title: 'Assessoria DETRAN', 
        description: 'Atuação direta e qualificada junto ao órgão.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20assessoria%20completa%20DETRAN'
      },
      { 
        title: 'Compra e venda segura', 
        description: 'Análise documental para evitar fraudes.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20orientação%20para%20compra%20e%20venda'
      },
      { 
        title: 'Análise documental', 
        description: 'Verificação minuciosa de toda a papelada veicular.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20análise%20documental%20completa'
      },
      { 
        title: 'Regularização geral', 
        description: 'Solução para pendências complexas e atrasadas.',
        whatsappUrl: 'https://wa.me/5513991932590?text=Olá,%20quero%20regularizar%20meu%20veículo'
      },
    ]
  }
];

export default function ServicesPage() {
  const globalWhatsappUrl = "https://api.whatsapp.com/send?phone=5513991932590&text=Olá! Gostaria de saber mais sobre os serviços da DS.";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-zinc-950 py-32 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-10">
              RESOLVA SEU DOCUMENTO <br />
              <span className="text-primary italic">SEM DOR DE CABEÇA</span>
            </h1>
            <p className="text-zinc-400 text-2xl md:text-3xl max-w-4xl font-medium leading-relaxed">
              Nós cuidamos da burocracia enquanto você ganha tempo e tranquilidade.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
        </section>

        <section className="py-24 bg-zinc-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-32">
              {allServiceCategories.map((cat, idx) => (
                <div key={idx} className="space-y-12">
                  <div className="flex items-center gap-6 border-b-8 border-primary pb-6">
                    <cat.icon className="h-14 w-14 text-primary" />
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight italic">
                      {cat.category}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {cat.items.map((service, sIdx) => (
                      <Card key={sIdx} className="border-none shadow-premium bg-white hover:shadow-2xl transition-all duration-300 rounded-[2.5rem]">
                        <CardHeader className="p-10 pb-4">
                          <CardTitle className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-10 pt-0">
                          <p className="text-zinc-600 text-lg md:text-xl font-medium mb-10 leading-relaxed">
                            {service.description}
                          </p>
                          <Button asChild variant="link" className="p-0 h-auto text-base font-black uppercase tracking-widest text-primary">
                            <Link href={service.whatsappUrl || globalWhatsappUrl} target="_blank">
                              SOLICITAR <ArrowRight className="ml-2 h-6 w-6" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
