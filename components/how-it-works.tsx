import {
  MessageCircle,
  Sparkles,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Cliente envia uma mensagem",
    description:
      "O cliente pergunta por horários normalmente, por texto ou áudio.",
  },
  {
    icon: Sparkles,
    title: "Eu entendo e respondo",
    description:
      "Interpreto a mensagem, consulto sua agenda e ofereço horários disponíveis instantaneamente.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento confirmado",
    description:
      "O cliente escolhe um horário e recebe a confirmação automaticamente.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Como funciona
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-neutral-600">
            Em menos de um minuto, seu cliente agenda um horário diretamente
            pelo WhatsApp.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-stretch gap-6 md:flex-row md:items-center">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="flex flex-1 flex-col items-center gap-6 md:flex-row"
              >
                <div className="group flex-1 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="text-sm font-medium text-neutral-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold text-primary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-pretty leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div
                    className="flex items-center justify-center text-neutral-300"
                    aria-hidden="true"
                  >
                    <ArrowRight className="h-6 w-6 rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
