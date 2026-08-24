import { Zap, Mic, CalendarCheck, CheckCircle2, Check } from "lucide-react";
import { PhoneMockup } from "./ui/phone-mockup";

const benefits = [
  {
    icon: Zap,
    title: "Resposta instantânea",
    description: "Respondo no mesmo segundo, a qualquer hora do dia.",
  },
  {
    icon: Mic,
    title: "Entendo áudios",
    description: "O cliente pode mandar áudio e eu compreendo naturalmente.",
  },
  {
    icon: CalendarCheck,
    title: "Agenda atualizada",
    description: "Os horários ficam sempre sincronizados, sem conflitos.",
  },
  {
    icon: CheckCircle2,
    title: "Confirmo sozinho",
    description: "A confirmação é automática, sem nenhum trabalho manual.",
  },
];

export default function Demo() {
  return (
    <section id="demo" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Veja o Mitig Hora em ação
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Uma conversa simples é o suficiente para agendar um horário.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-start">
            <PhoneMockup />
          </div>

          {/* Benefit cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="rounded-3xl border border-white/30 bg-green-wpp p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary">
                    <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
