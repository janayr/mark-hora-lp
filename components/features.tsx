import {
  Clock3,
  MessageCircleMore,
  CalendarDays,
  BellRing,
  RefreshCw,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "Disponível 24 horas",
    description:
      "Seus clientes podem agendar mesmo quando o estabelecimento estiver fechado.",
  },
  {
    icon: MessageCircleMore,
    title: "Texto e áudio",
    description:
      "Entendemos mensagens escritas e também áudios enviados pelos clientes.",
  },
  {
    icon: CalendarDays,
    title: "Agenda inteligente",
    description:
      "Consulta horários disponíveis e evita conflitos automaticamente.",
  },
  {
    icon: BellRing,
    title: "Confirmações automáticas",
    description:
      "Os clientes recebem confirmação do agendamento pelo WhatsApp.",
  },
  {
    icon: RefreshCw,
    title: "Remarcações simples",
    description:
      "O cliente pode remarcar ou cancelar sem precisar falar com você.",
  },
  {
    icon: Smartphone,
    title: "Sem aplicativo",
    description:
      "Tudo acontece dentro do WhatsApp. O cliente não precisa baixar nada.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            Tudo o que você precisa para automatizar seus agendamentos.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-neutral-500 md:text-lg">
            Menos tempo respondendo mensagens. Mais tempo atendendo clientes.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-neutral-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-neutral-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
