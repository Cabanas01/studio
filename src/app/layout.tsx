import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DS Despachante Guarujá | Documentação Veicular Sem Complicação',
  description: 'Licenciamento, Transferência, Primeiro Registro e Segunda Via. Resolvemos toda a burocracia do seu veículo no Guarujá.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
