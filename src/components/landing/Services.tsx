
import React from 'react';
import { 
  FileText, 
  CarFront, 
  CreditCard, 
  ArrowRight, 
  ShieldCheck, 
  Search, 
  Truck,
  GraduationCap,
  Gavel,
  Bike,
  IdCard,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const serviceCategories = [
  {
    category: "Serviços Veiculares",
    icon: CarFront,
    items: [
      { title: 'Transferência de propriedade', description: 'Processo completo de compra e venda com agilidade.' },
      { title: 'Primeiro emplacamento', description: 'Registro de veículos 0 km direto da concessionária.' },
      { title: 'Licenciamento anual', description: 'Regularização obrigatória anual sem complicação.' },
      { title: 'Emissão de CRLV', description: 'Acesso rápido ao documento digital do seu veículo.' },
      { title: 'Segunda via CRV/CRLV', description: 'Recuperação de documentos perdidos ou danificados.' },
      { title: 'Comunicação de venda', description: 'Proteção jurídica imediata ao vender seu veículo.' },
      { title: 'Baixa de veículo', description: 'Processo legal para veículos destinados a sucata.' },
      { title: 'Alteração de características', description: 'Regularização de cor, motor ou blindagem.' },
      { title: 'Mudança de município', description: 'Transferência de domicílio entre cidades ou estados.' },
      { title: 'Regularização de débitos', description: 'Levantamento e quitação de multas, IPVA e taxas.' },
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
      { title: 'CNH suspensa', description: 'Regularização completa do direito de dirigir.' },
      { title: 'Defesa de suspensão', description: 'Recursos técnicos contra processos de suspensão.' },
      { title: 'Defesa de cassação', description: 'Assessoria jurídica para evitar a perda da CNH.' },
      { title: 'Curso de reciclagem', description: 'Encaminhamento e suporte para condutores.' },
      { title: 'Consulta de pontuação', description: 'Verificação do status atual da sua habilitação.' },
    ]
  },
  {
    category: "Recursos de Multas",
    icon: Gavel,
    items: [
      { title: 'Defesa prévia', description: 'Primeira etapa de contestação de autuações.' },
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
      { title: 'Compra e venda segura', description: 'Análise documental para evitar fraudes no negócio.' },
      { title: 'Análise documental', description: 'Verificação minuciosa de toda a papelada.' },
      { title: 'Regularização geral', description: 'Solução para pendências complexas e atrasadas.' },
    ]
  }
];

export function Services() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5513991932590&text=Oie%2C%20vim%20pelo%20site!";

  return (
    <section id="servicos" className="py-16 md:py-24 bg-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-3xl font-black tracking-tighter text-foreground sm:text-5xl lg:text-6xl uppercase leading-[0.9]">
            ASSESSORIA <br />
            <span className="text-primary italic">DE ALTA PERFORMANCE</span>
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {serviceCategories.map((cat, idx) => (
            <div key={idx} className="space-y-6 md:space-y-10">
              <div className="flex items-center gap-4">
                <div className="bg-primary p-2 rounded-lg">
                  <cat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight italic">
                  {cat.category}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {cat.items.map((service, sIdx) => (
                  <Card key={sIdx} className="border-none shadow-premium bg-white hover:bg-zinc-950 transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                    <CardHeader className="p-6 pb-2">
                      <CardTitle className="text-lg md:text-xl font-black uppercase tracking-tight group-hover:text-white transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 flex-grow flex flex-col">
                      <p className="text-zinc-500 text-xs md:text-sm font-medium group-hover:text-zinc-400 transition-colors mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-auto">
                        <Button asChild variant="link" className="p-0 h-auto text-[10px] md:text-xs font-black uppercase tracking-widest text-primary group-hover:text-white transition-colors">
                          <Link href={whatsappUrl} target="_blank">
                            SOLICITAR <ArrowRight className="ml-2 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div id="cursos" className="mt-24 bg-zinc-950 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
                CAPACITAÇÃO <br />
                PROFISSIONAL <br />
                <span className="text-primary italic">100% ONLINE.</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-8 font-medium">
                Formação e atualização para motoristas profissionais. Estude de qualquer lugar com certificação válida.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-black rounded-full px-10 py-8 text-xl shadow-xl shadow-primary/20">
                <Link href="https://dsdespachanteguaruja.com.br" target="_blank">
                  ACESSAR PORTAL DE CURSOS
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['MOPP', 'Escolar', 'Emergência', 'NR-35', 'Passageiros', 'Carga Indivisível'].map((item, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="text-white font-bold text-xs uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
