import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Basic SEO Metadata
export const metadata: Metadata = {
  title: "JStore - Compre JOGO TESTE (The Sims 4) Completo",
  description: "Adquira o JOGO TESTE (The Sims 4) com todas as expansões inclusas. Download direto e instalação facilitada após a compra via Mercado Pago.",
  keywords: ["JOGO TESTE", "The Sims 4", "download", "completo", "expansões", "jogo", "pc", "comprar", "jstore"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: Replace G-XXXXXXXXXX with the user's actual Google Analytics ID
  const gaTrackingId = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"; 

  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-50`}>
        {children}
        
        {/* Google Analytics Integration */}
        {gaTrackingId !== "G-XXXXXXXXXX" && (
          <>
            <Script 
              strategy="afterInteractive" 
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <Script 
              id="google-analytics" 
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaTrackingId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}

