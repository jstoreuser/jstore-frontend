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

export default function TermsPage() {
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
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Termos de Serviço</h1>
        <div className="prose lg:prose-xl bg-white p-6 rounded shadow">
          <p>Última atualização: [Data]</p>

          <h2>1. Visão Geral</h2>
          <p>
            Estes Termos de Serviço (&quot;Termos&quot;) regem o uso do site [jstoregames.com.br] (&quot;Site&quot;) e a compra de produtos digitais oferecidos pela JStore (&quot;nós&quot;, &quot;nosso&quot;). Ao acessar ou usar nosso Site e comprar nossos produtos, você concorda em cumprir estes Termos.
          </p>

          <h2>2. Produtos e Compra</h2>
          <p>
            Oferecemos o jogo digital &quot;JOGO TESTE (The Sims 4)&quot; com todas as expansões incluídas, entregue através de um instalador digital. Os preços estão indicados no Site e podem ser alterados sem aviso prévio. O pagamento é processado através do Mercado Pago. Após a confirmação do pagamento, você receberá acesso a um link para download do instalador e a um tutorial de instalação.
          </p>

          <h2>3. Entrega Digital</h2>
          <p>
            O acesso ao link de download e ao tutorial é concedido imediatamente após a confirmação do pagamento pelo Mercado Pago. Não há envio físico. Você é responsável por garantir que seu sistema atenda aos requisitos mínimos para instalação e execução do jogo.
          </p>

          <h2>4. Licença de Uso</h2>
          <p>
            Ao comprar o jogo, você adquire uma licença limitada, não exclusiva e intransferível para instalar e usar o jogo para fins pessoais e não comerciais.
          </p>

          <h2>5. Reembolsos</h2>
          <p>
            Devido à natureza digital dos produtos, geralmente não oferecemos reembolsos após o acesso ao link de download ter sido concedido. Casos excepcionais podem ser analisados individualmente através do nosso suporte.
          </p>

          <h2>6. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo do Site, incluindo textos, gráficos, logos e o instalador (exceto o conteúdo original do jogo The Sims 4), é propriedade da JStore ou de seus licenciadores. O jogo The Sims 4 e suas expansões são propriedade de seus respectivos detentores de direitos autorais.
          </p>

          <h2>7. Limitação de Responsabilidade</h2>
          <p>
            Não nos responsabilizamos por quaisquer danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou incapacidade de usar nossos produtos ou Site.
          </p>

          <h2>8. Modificações nos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes Termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no Site.
          </p>

          <h2>9. Contato</h2>
          <p>
            Se tiver alguma dúvida sobre estes Termos, entre em contato conosco em <a href="mailto:suporte@jstoregames.com.br">suporte@jstoregames.com.br</a>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

