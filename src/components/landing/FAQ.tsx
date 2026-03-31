import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quais documentos preciso para transferência de veículo?",
    answer: "Geralmente são necessários: CRV (recibo de compra e venda) assinado e com firma reconhecida, documento de identificação (RG ou CNH), comprovante de residência atualizado e o laudo de vistoria aprovado. Nossa equipe cuida de conferir tudo para você."
  },
  {
    question: "Quanto tempo demora o processo de licenciamento?",
    answer: "O licenciamento digital (CRLV-e) costuma ficar pronto em até 24 horas após o pagamento das taxas e baixa de eventuais multas. No Guarujá, garantimos a agilidade máxima nesse processo."
  },
  {
    question: "Posso parcelar multas e débitos atrasados?",
    answer: "Sim! Trabalhamos com sistemas que permitem o parcelamento de IPVA, licenciamento e multas em até 12x no cartão de crédito, regularizando a situação do seu veículo na hora."
  },
  {
    question: "Como funciona o serviço de despachante náutico?",
    answer: "Atuamos junto à Marinha do Brasil (Capitania dos Portos) para inscrição, transferência de propriedade, renovação de TIE e regularização de documentos para lanchas, jet-skis e outras embarcações."
  },
  {
    question: "O DS Despachante atende outras cidades além do Guarujá?",
    answer: "Sim, atendemos toda a Baixada Santista e também processos de outros municípios do estado de São Paulo, sempre de forma 100% digital e segura."
  },
  {
    question: "Como faço para recuperar uma CNH suspensa?",
    answer: "O processo envolve a entrega da CNH (se física), cumprimento do prazo de suspensão e realização do curso de reciclagem. Nós oferecemos assessoria completa para garantir que você recupere seu direito de dirigir o quanto antes."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4 block">Dúvidas Frequentes</span>
          <h2 className="text-4xl font-black tracking-tighter text-foreground sm:text-5xl uppercase leading-[0.9] mb-6">
            Tire suas <span className="text-primary italic">Dúvidas</span>
          </h2>
          <p className="text-zinc-600 font-medium">
            Confira as perguntas mais comuns dos nossos clientes. Se não encontrar o que procura, nos chame no WhatsApp.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-2xl px-6 bg-zinc-50/50">
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 font-medium text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
