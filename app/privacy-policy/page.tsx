import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade do sistema de agendamentos pelo WhatsApp.",
};

const ULTIMA_ATUALIZACAO = "31 de agosto de 2026";
const NOME_EMPRESA = "MITIG ME";
const EMAIL_CONTATO = "mitigtime@gmail.com";

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Política de Privacidade
          </h1>
          <p className="text-sm text-gray-500">
            Última atualização: {ULTIMA_ATUALIZACAO}
          </p>
        </header>

        <div className="space-y-10 leading-relaxed">
          <section>
            <p>
              Esta Política de Privacidade descreve como a {NOME_EMPRESA}{" "}
              (&quot;nós&quot;, &quot;nosso&quot;) coleta, usa, armazena e
              protege as informações dos usuários (&quot;você&quot;) do nosso
              sistema de agendamentos via WhatsApp. Ao utilizar nossos serviços,
              você concorda com as práticas descritas neste documento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Quais informações coletamos
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Dados de identificação: nome, número de telefone/WhatsApp.
              </li>
              <li>
                Dados de agendamento: datas, horários, serviços solicitados e
                histórico de mensagens trocadas para realizar o agendamento.
              </li>
              <li>
                Dados técnicos: informações de uso da landing page, como
                endereço IP, tipo de navegador e cookies (quando aplicável).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. Como usamos suas informações
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmar, remarcar ou cancelar agendamentos.</li>
              <li>
                Enviar lembretes e notificações relacionadas ao serviço via
                WhatsApp.
              </li>
              <li>Melhorar a qualidade e a experiência do nosso serviço.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. Compartilhamento de informações
            </h2>
            <p>
              Não vendemos ou alugamos seus dados pessoais. Podemos compartilhar
              informações com prestadores de serviço que nos auxiliam na
              operação do sistema (como provedores de infraestrutura e da API do
              WhatsApp), sempre limitados ao necessário para a prestação do
              serviço.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Armazenamento e segurança
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais razoáveis para
              proteger seus dados contra acesso não autorizado, perda ou
              alteração. Seus dados são armazenados pelo tempo necessário para
              cumprir as finalidades descritas nesta política ou conforme
              exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Seus direitos
            </h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem
              direito a acessar, corrigir, solicitar a exclusão ou a
              portabilidade dos seus dados pessoais, bem como revogar o
              consentimento dado anteriormente. Para exercer esses direitos,
              entre em contato conosco pelo e-mail informado abaixo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. Cookies
            </h2>
            <p>
              Nossa landing page pode utilizar cookies para melhorar sua
              experiência de navegação. Você pode desativar os cookies nas
              configurações do seu navegador, embora isso possa afetar algumas
              funcionalidades do site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Alterações a esta política
            </h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente.
              Recomendamos que você revise esta página de tempos em tempos para
              se manter informado sobre eventuais mudanças.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. Contato
            </h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre
              o tratamento dos seus dados, entre em contato conosco pelo e-mail{" "}
              <a
                href={`mailto:${EMAIL_CONTATO}`}
                className="text-blue-600 hover:underline"
              >
                {EMAIL_CONTATO}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
