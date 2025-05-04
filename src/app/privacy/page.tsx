import Link from 'next/link';

const Footer = () => (
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
);

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-md py-4 px-6 md:px-10">
        <div className="container mx-auto">
          <Link href="/" className="text-2xl font-bold text-green-600">
            JStore
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Política de Privacidade</h1>
        <div className="prose lg:prose-xl bg-white p-6 rounded shadow">
          <p>Última atualização: [Data]</p>

          <h2>1. Introdução</h2>
          <p>
            A JStore (&quot;nós&quot;, &quot;nosso&quot;) está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita nosso site [jstoregames.com.br] (&quot;Site&quot;) e adquire nossos produtos.
          </p>

          <h2>2. Coleta de Informações</h2>
          <p>
            Podemos coletar informações sobre você de diversas formas:
            <ul>
              <li><strong>Informações Pessoais:</strong> Podemos coletar informações de identificação pessoal, como seu nome e endereço de e-mail, quando você realiza uma compra ou entra em contato conosco.</li>
              <li><strong>Informações de Pagamento:</strong> As informações de pagamento (como dados de cartão de crédito) são processadas diretamente pelo nosso gateway de pagamento (Mercado Pago) e não são armazenadas em nossos servidores.</li>
              <li><strong>Dados de Uso:</strong> Podemos coletar informações sobre como você acessa e usa o Site (por exemplo, endereço IP, tipo de navegador, páginas visitadas) através de ferramentas como o Google Analytics.</li>
            </ul>
          </p>

          <h2>3. Uso das Informações</h2>
          <p>
            Usamos as informações coletadas para:
            <ul>
              <li>Processar suas transações e entregar os produtos adquiridos.</li>
              <li>Responder às suas solicitações de suporte ao cliente.</li>
              <li>Melhorar nosso Site e ofertas de produtos.</li>
              <li>Monitorar e analisar o uso e as tendências para melhorar sua experiência.</li>
              <li>Enviar e-mails administrativos ou sobre sua compra.</li>
            </ul>
          </p>

          <h2>4. Compartilhamento de Informações</h2>
          <p>
            Não compartilhamos suas informações pessoais com terceiros, exceto:
            <ul>
              <li>Com provedores de serviços que nos auxiliam na operação do Site e processamento de pagamentos (como Mercado Pago e Hostinger), sob obrigações de confidencialidade.</li>
              <li>Se exigido por lei ou para proteger nossos direitos.</li>
              <li>Com o seu consentimento.</li>
            </ul>
          </p>

          <h2>5. Segurança das Informações</h2>
          <p>
            Implementamos medidas de segurança administrativas, técnicas e físicas para proteger suas informações pessoais. No entanto, nenhuma transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.
          </p>

          <h2>6. Cookies e Tecnologias de Rastreamento</h2>
          <p>
            Podemos usar cookies e tecnologias similares (como web beacons e pixels) para coletar informações sobre sua interação com nosso Site. Você pode controlar o uso de cookies através das configurações do seu navegador.
          </p>

          <h2>7. Seus Direitos</h2>
          <p>
            Dependendo da sua localização, você pode ter direitos sobre suas informações pessoais, como o direito de acessar, corrigir ou excluir seus dados. Entre em contato conosco para exercer esses direitos.
          </p>

          <h2>8. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre quaisquer alterações publicando a nova política no Site.
          </p>

          <h2>9. Contato</h2>
          <p>
            Se tiver dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato conosco em <a href="mailto:suporte@jstoregames.com.br">suporte@jstoregames.com.br</a>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

