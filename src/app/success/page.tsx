"use client"; // Required for useEffect and useSearchParams

import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; // Import for client-side parameter reading

// Define types for the order details state
interface OrderDetails {
  success: boolean;
  downloadUrl?: string;
  tutorialContent?: string;
  message?: string;
  orderId?: string;
}

// Component to display download/tutorial or status message based on client-side state
function PurchaseResultDisplay({ details, isLoading }: { details: OrderDetails | null, isLoading: boolean }) {
  if (isLoading) {
    return <div className="text-center p-10">Verificando status do pedido...</div>;
  }

  if (!details) {
    return <div className="text-center p-10 text-red-500">Não foi possível obter os detalhes do pedido.</div>;
  }

  if (details.success) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Pagamento Aprovado!</h2>
        <p className="text-gray-700 mb-6">Seu pedido (#{details.orderId || 'N/A'}) foi concluído com sucesso. Acesse seu jogo abaixo:</p>
        
        <a 
          href={details.downloadUrl || '#'}
          download 
          className={`inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 shadow-md mb-6 ${!details.downloadUrl || details.downloadUrl === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-disabled={!details.downloadUrl || details.downloadUrl === '#'}
        >
          Baixar Instalador do Jogo (~23MB)
        </a>

        <div className="mt-8 p-6 border rounded bg-gray-50 text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tutorial de Instalação</h3>
            {/* Render Markdown content safely in a real app, e.g., using react-markdown */}
            <pre className="whitespace-pre-wrap text-gray-700">{details.tutorialContent || 'Tutorial indisponível.'}</pre>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Status do Pedido</h2>
        <p className="text-gray-700 mb-6">Pedido: #{details.orderId || 'N/A'}</p>
        <p className="text-gray-700">{details.message || 'Ocorreu um problema com seu pedido.'}</p>
        <Link href="/" className="inline-block mt-6 text-green-600 hover:underline">
          Voltar para a Loja
        </Link>
      </div>
    );
  }
}

// Client component that reads search params and manages state
function SuccessContent() {
  const searchParams = useSearchParams();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const status = searchParams.get('status');
    const orderId = searchParams.get('order_id') || 'N/A';
    const paymentId = searchParams.get('payment_id'); // Example: might be needed for backend verification

    // Simulate fetching/determining details based on params
    // TODO: Replace this simulation with an actual API call to your backend
    // Your backend should verify the payment status using paymentId or orderId
    // and return the download link and tutorial content if approved.
    const fetchDetails = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

      if (status === 'approved') {
        // In a real app, fetch from backend: GET /api/download/link/{orderId} or similar
        setOrderDetails({
          success: true,
          // IMPORTANT: Replace with actual URL from backend API response
          downloadUrl: process.env.NEXT_PUBLIC_DOWNLOAD_URL || "#", 
          // IMPORTANT: Replace with actual tutorial content from backend API response
          tutorialContent: `## Tutorial de Instalação - JOGO TESTE\n\nParabéns pela sua compra! Siga os passos abaixo para instalar o jogo:\n\n1.  **Baixe o Instalador:** Clique no botão de download acima.\n2.  **Execute o Instalador:** Após o download, localize o arquivo e execute-o.\n3.  **Siga as Instruções:** O instalador irá guiá-lo.\n4.  **Conclusão:** Jogo instalado!\n5.  **Divirta-se!**\n\n*Nota: Tutorial e link de download virão do backend.*`,
          orderId: orderId
        });
      } else {
        setOrderDetails({
          success: false,
          message: status === 'pending' ? 'Seu pagamento ainda está sendo processado. Verifique novamente em breve.' : 'Ocorreu um problema com seu pagamento ou pedido. Entre em contato com o suporte.',
          orderId: orderId
        });
      }
      setIsLoading(false);
    };

    fetchDetails();

  }, [searchParams]); // Re-run effect if searchParams change

  return <PurchaseResultDisplay details={orderDetails} isLoading={isLoading} />;
}


// Main Success Page Component - Now simpler, just renders the client component within Suspense
export default function SuccessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-md py-4 px-6 md:px-10">
        <div className="container mx-auto">
          <Link href="/" className="text-2xl font-bold text-green-600">
            JStore
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Suspense is needed because useSearchParams() needs to be read in a client component */}
        <Suspense fallback={<div className="text-center p-10">Carregando...</div>}>
          <SuccessContent />
        </Suspense>
      </main>

      <footer className="bg-gray-100 py-6 px-6 md:px-10 mt-auto">
        <div className="container mx-auto text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} JStore. Todos os direitos reservados.</p>
          <div className="mt-2">
            <Link href="/terms" className="hover:text-green-600 mx-2">Termos de Serviço</Link>
            |
            <Link href="/privacy" className="hover:text-green-600 mx-2">Política de Privacidade</Link>
             |
            <Link href="/" className="hover:text-green-600 mx-2">Página Inicial</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

