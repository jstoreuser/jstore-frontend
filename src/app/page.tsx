"use client"; // Add this directive for useState

import Link from 'next/link';
import { useState } from 'react'; // Import useState for loading state

// Refined Logo Component (Simple text-based, Sims-inspired colors)
const Logo = () => (
  <Link href="/" className="text-3xl font-bold text-emerald-500 hover:text-emerald-600 transition duration-300" style={{ fontFamily: "&quot;Arial Black&quot;, Gadget, sans-serif" }}>
    J<span className="text-sky-500">S</span>tore
  </Link>
);

// Header Component
const Header = () => (
  <header className="bg-white shadow-md py-4 px-6 md:px-10 sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <Logo />
      <nav>
        {/* Can add links like #how-it-works, #support later */}
        <a href="#how-it-works" className="text-gray-600 hover:text-emerald-600 mx-3">Como Funciona</a>
        <a href="#support" className="text-gray-600 hover:text-emerald-600 mx-3">Suporte</a>
      </nav>
    </div>
  </header>
);

// Footer Component (No changes needed here for now)
const Footer = () => (
  <footer className="bg-gray-100 py-6 px-6 md:px-10 mt-10">
    <div className="container mx-auto text-center text-gray-600 text-sm">
      <p>&copy; {new Date().getFullYear()} JStore. Todos os direitos reservados.</p>
      <div className="mt-2">
        <Link href="/terms" className="hover:text-emerald-600 mx-2">Termos de Serviço</Link>
        |
        <Link href="/privacy" className="hover:text-emerald-600 mx-2">Política de Privacidade</Link>
      </div>
    </div>
  </footer>
);

// Main Home Page Component
export default function Home() {
  const gameTitle = "JOGO TESTE (The Sims 4)";
  const gamePrice = "R$ 59,90"; // Example price
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Placeholder function to handle the purchase button click
  const handlePurchase = async () => {
    setIsLoading(true);
    setError(null);
    console.log("Iniciando processo de compra...");

    try {
      // Get API URL from environment variable
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) {
        throw new Error("API URL não está configurada.");
      }

      const response = await fetch(`${apiUrl}/payment/create`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ gameId: 'jogo-teste-sims4' }) // Example body
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({})); // Try to get error details
        const errorMessage = (typeof errorData === 'object' && errorData !== null && 'error' in errorData && typeof errorData.error === 'string') ? errorData.error : 'Falha ao iniciar o pagamento. Tente novamente.';
        throw new Error(errorMessage);
      }

      const data = await response.json();

      // Safely check if data is an object and has payment_url property
      if (typeof data === 'object' && data !== null && 'payment_url' in data && typeof data.payment_url === 'string') {
        console.log("Redirecionando para o Mercado Pago:", data.payment_url);
        // Redirect the user to Mercado Pago
        window.location.href = data.payment_url;
      } else {
        // Log the received data for debugging if it's not as expected
        console.error('Resposta inesperada da API:', data);
        throw new Error('URL de pagamento inválida ou não recebida da API.');
      }

    } catch (err: unknown) { // Use unknown instead of any
      console.error("Erro ao processar compra:", err);
      // Type check before accessing message property
      const message = (err instanceof Error) ? err.message : 'Ocorreu um erro inesperado.';
      setError(message);
      setIsLoading(false);
    } 
    // No need to set isLoading to false on success, as page redirects
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-100 to-emerald-100">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section - Refined styles */}
        <section className="text-center py-16 bg-gradient-to-br from-emerald-400 via-sky-500 to-emerald-400 rounded-xl shadow-xl text-white mb-12 relative overflow-hidden">
           {/* Optional: Add some subtle background pattern or graphic element */}
           <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 z-0"></div> {/* Subtle overlay */}
           <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md" style={{ fontFamily: "&quot;Arial Black&quot;, Gadget, sans-serif" }}>{gameTitle}</h1>
              <p className="text-xl md:text-2xl mb-8 drop-shadow-sm">Sua vida virtual completa, com todas as expansões!</p>
              
              {/* Placeholder for game image/video - User needs to replace this */}
              <div className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-sm text-gray-800 inline-block p-4 rounded-lg shadow-lg my-6">
                <p className="font-semibold">[Área para Imagem Principal ou Vídeo do Jogo]</p>
                <p className="text-sm">(Substitua este bloco pelo seu visual principal)</p>
              </div>

              <div>
                <p className="text-3xl font-bold mb-5 drop-shadow-sm">{gamePrice}</p>
                <button 
                  onClick={handlePurchase}
                  disabled={isLoading}
                  className={`bg-white text-emerald-600 font-bold py-3 px-10 rounded-full text-lg hover:bg-gray-200 transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? 'Processando...' : 'Comprar Agora'}
                </button>
                {error && <p className="text-red-200 mt-4 text-sm">Erro: {error}</p>}
              </div>
           </div>
        </section>

        {/* Description Section */}
        <section id="description" className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-emerald-300 pb-2">Sobre o Jogo</h2>
          {/* User needs to add detailed description */}
          <p className="text-gray-700 leading-relaxed mb-4">
            **[Insira aqui a descrição completa e atraente do JOGO TESTE (The Sims 4)]**
          </p>
          <p className="text-gray-700 leading-relaxed">
            Esta versão inclui todas as expansões lançadas até [mencionar data ou marco, se aplicável], proporcionando a experiência definitiva do The Sims 4. Nosso instalador exclusivo simplifica todo o processo, permitindo que você comece a jogar rapidamente.
          </p>
          {/* Placeholder for more images/features */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="bg-gray-100 p-3 rounded text-center text-sm text-gray-600">[Imagem/Feature 1]</div>
             <div className="bg-gray-100 p-3 rounded text-center text-sm text-gray-600">[Imagem/Feature 2]</div>
             <div className="bg-gray-100 p-3 rounded text-center text-sm text-gray-600">[Imagem/Feature 3]</div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-emerald-300 pb-2">Como Funciona</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-3 leading-relaxed">
            <li>Clique em &quot;Comprar Agora&quot; e você será redirecionado para o ambiente seguro do Mercado Pago para finalizar seu pagamento (aceitamos Pix, Cartão de Crédito/Débito e Boleto).</li>
            <li>Imediatamente após a confirmação do seu pagamento pelo Mercado Pago, você receberá acesso (nesta mesma loja, em uma página de sucesso) ao link para download do nosso instalador otimizado.</li>
            <li>Baixe o instalador (~23MB) e siga nosso tutorial detalhado que também estará disponível na página de sucesso. Ele explica passo a passo como executar o instalador.</li>
            <li>O instalador cuidará de tudo! Em poucos minutos, seu {gameTitle} completo estará pronto para jogar.</li>
            <li>Divirta-se criando suas histórias!</li>
          </ol>
          <div className="mt-5 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
              <h4 className="font-semibold text-emerald-800">Instalação Simplificada!</h4>
              <p className="text-sm text-emerald-700">
                Nosso diferencial é o instalador único e facilitado. Ele foi projetado para tornar a instalação de todas as expansões um processo rápido e sem complicações, mesmo para quem não tem muito conhecimento técnico. Basta executar e seguir as instruções na tela!
              </p>
          </div>
        </section>

        {/* Contact/Support Section */}
        <section id="support" className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-emerald-300 pb-2">Suporte e Contato</h2>
          <p className="text-gray-700 leading-relaxed">
            Encontrou algum problema durante a compra ou instalação? Nossa equipe está pronta para ajudar! Entre em contato conosco através do e-mail: <a href="mailto:suporte@jstoregames.com.br" className="text-emerald-600 hover:underline font-medium">suporte@jstoregames.com.br</a>.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            Nosso objetivo é responder a todas as solicitações dentro de 24 horas úteis.
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
}

