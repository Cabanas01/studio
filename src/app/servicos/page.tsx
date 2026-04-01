
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
      { title: 'Transferência de propriedade', description: 'Processo completo de compra e venda.' },
      { title: 'Primeiro emplacamento', description: 'Registro de veículos 0 km direto da concessionária.' },
      { title: 'Licenciamento anual', description: 'Regularização obrigatória anual sem complicação.' },
      { title: 'Emissão de CRLV', description: 'Acesso rápido ao documento digital do seu veículo.' },
      { title: 'Segunda via CRV/CRLV', description: 'Recuperação de documentos perdidos ou danificados.' },
      { title: 'Comunicação de venda', description: 'Proteção jurídica imediata ao vender seu veículo.' },
      { title: 'Baixa de veículo', description: 'Processo legal para veículos destinados a sucata.' },
      { title: 'Alteração de características', description: 'Regularização de cor, motor ou blindagem.' },
      { title: 'Mudança de município', description: 'Transferência de domicílio entre cidades ou estados.' },
      { title: 'Regularização de débitos', description: 'Quitação de multas, IPVA e taxas atrasadas.' },
      { title: 'Parcelamento de débitos', description: 'Facilitamos o pagamento em até 12x no cartão.' },
      { title: 'Desbloqueio de veículo', description: 'Resolução de bloqueios administrativos ou judiciais.' },
      { title: 'Pesquisa completa', description: 'Análise detalhada de todo o histórico do veículo.' },
    ]
  },
  {
    category: "CNH (Habilitação)",
    icon: IdCard,
    items: [
      { title: 'Renovação de CNH', description: 'Processo ágil para manter seu direito de dirigir.' },
      { title: 'Segunda via de CNH', description: 'Solicitação rápida em caso de perda ou roubo.' },
      { title: 'Adição de categoria', description: 'Inclusão de categoria A ou B na sua carteira.' },
      { title: 'Mudança de categoria', description: 'Evolução para categorias profissionais C, D ou E.' },
      { title: 'Regularização de CNH Suspensa', description: 'Assessoria completa para recuperar seu direito.' },
      { title: 'Defesa de suspensão', description: 'Recursos técnicos contra processos de suspensão.' },
      { title: 'Defesa de cassação', description: 'Assessoria jurídica para evitar a perda da CNH.' },
      { title: 'Curso de reciclagem', description: 'Encaminhamento e suporte para condutores.' },
      { title: 'Consulta de pontuação', description: 'Verificação do status atual da sua habilitação.' },
    ]
  },
  {
    category: "Recursos e Defesas",
    icon: Gavel,
    items: [
      { title: 'Defesa prévia de multa', description: 'Primeira etapa de contestação de autuações.' },
      { title: 'Recurso JARI (1ª instância)', description: 'Defesa técnica fundamentada perante a junta.' },
      { title: 'Recurso CETRAN (2ª instância)', description: 'Última etapa administrativa de recurso.' },
      { title: 'Análise técnica', description: 'Estudo detalhado da legalidade da autuação.' },
      { title: 'Recursos personalizados', description: 'Elaboração de defesas exclusivas para seu caso.' },
      { title: 'Acompanhamento', description: 'Monitoramento total do processo administrativo.' },
    ]
  },
  {
    category: "Motocicletas",
    icon: Bike,
    items: [
      { title: 'Transferência de moto', description: 'Agilidade total para proprietários de duas rodas.' },
      { title: 'Regularização documental', description: 'Tudo o que sua moto precisa para rodar em dia.' },
      { title: 'Licenciamento e débitos', description: 'Consulta e quitação de pendências específicas.' },
      { title: 'Recursos de multas', description: 'Defesa especializada para motociclistas.' },
    ]
  },
  {
    category: "Empresas e Frotas",
    icon: Briefcase,
    items: [
      { title: 'Gestão de multas', description: 'Controle total das autuações da sua frota.' },
      { title: 'Controle de documentos', description: 'Gestão organizada de todos os veículos da empresa.' },
      { title: 'Assessoria contínua', description: 'Suporte mensal para manter a frota em conformidade.' },
      { title: 'Relatórios gerenciais', description: 'Acompanhamento detalhado de custos e prazos.' },
    ]
  },
  {
    category: "Consultoria",
    icon: Search,
    items: [
      { title: 'Assessoria DETRAN', description: 'Atuação direta e qualificada junto ao órgão.' },
      { title: 'Compra e venda segura', description: 'Análise documental para evitar fraudes.' },
      { title: 'Análise documental', description: 'Verificação minuciosa de toda a papelada.' },
      { title: 'Regularização geral', description: 'Solução para pendências complexas e atrasadas.' },
    ]
  }
];

export default function ServicesPage() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5513991932590&text=Olá! Gostaria de saber mais sobre os serviços da DS.";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-zinc-950 py-24 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
              PORTFÓLIO <br />
              <span className="text-primary italic">COMPLETO DE SERVIÇOS</span>
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl font-medium">
              Gestão integral de processos veiculares e habilitação. Resolvemos a burocracia para você focar no que importa.
            </p>
          </div>
        </section>

        <section className="py-20 bg-zinc-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {allServiceCategories.map((cat, idx) => (
                <div key={idx} className="space-y-10">
                  <div className="flex items-center gap-4 border-b-4 border-primary pb-4">
                    <cat.icon className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-black uppercase tracking-tight italic">
                      {cat.category}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cat.items.map((service, sIdx) => (
                      <Card key={sIdx} className="border-none shadow-sm bg-white hover:shadow-xl transition-all duration-300">
                        <CardHeader className="p-6 pb-2">
                          <CardTitle className="text-lg font-black uppercase tracking-tight">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 pt-0">
                          <p className="text-zinc-500 text-sm font-medium mb-6">
                            {service.description}
                          </p>
                          <Button asChild variant="link" className="p-0 h-auto text-[10px] font-black uppercase tracking-widest text-primary">
                            <Link href={whatsappUrl} target="_blank">
                              SOLICITAR <ArrowRight className="ml-2 h-3 w-3" />
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
