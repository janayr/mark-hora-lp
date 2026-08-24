const todaySteps = [
  { emoji: "\uD83D\uDCF1", text: "Cliente pergunta um horário" },
  { emoji: "\u2702\uFE0F", text: "Você está atendendo" },
  { emoji: "\u23F3", text: "Demora para responder" },
  { emoji: "\u274C", text: "O cliente desiste ou agenda em outro lugar" },
];

const agendaZapSteps = [
  { emoji: "\uD83D\uDCF1", text: "Cliente envia mensagem" },
  { emoji: "\uD83D\uDCAC", text: "Vê os horários disponíveis na hora" },
  { emoji: "\u2705", text: "Cliente agenda sozinho" },
  { emoji: "\u2702\uFE0F", text: "Você continua trabalhando" },
];

type Step = { emoji: string; text: string };

function Timeline({
  steps,
  accent,
}: {
  steps: Step[];
  accent: "red" | "green";
}) {
  const dotColor = accent === "red" ? "bg-red-400" : "bg-emerald-500";
  const lineColor = accent === "red" ? "bg-red-100" : "bg-emerald-100";
  const chipBg =
    accent === "red"
      ? "bg-red-50 border-red-100"
      : "bg-emerald-50 border-emerald-100";

  return (
    <ol className="flex flex-col">
      {steps.map((step, index) => (
        <li key={step.text} className="flex flex-col">
          <div
            className={`flex items-center gap-4 rounded-2xl border ${chipBg} px-4 py-3.5`}
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-lg shadow-sm"
              aria-hidden="true"
            >
              {step.emoji}
            </span>
            <span className="text-sm font-medium leading-snug text-neutral-700">
              {step.text}
            </span>
          </div>

          {index < steps.length - 1 && (
            <div className="flex items-center gap-2 py-2 pl-8">
              <span className={`h-6 w-px ${lineColor}`} aria-hidden="true" />
              <span
                className={`h-1.5 w-1.5 rounded-full ${dotColor}`}
                aria-hidden="true"
              />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function ProblemSection() {
  return (
    <section className="bg-white text-primary antialiased">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 lg:py-28">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Você deveria estar atendendo clientes.
            <br className="hidden sm:block" /> Não respondendo WhatsApp.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-neutral-600">
            Enquanto você responde mensagens, poderia estar faturando mais.
          </p>
        </div>

        {/* Two columns */}
        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {/* Left — Hoje */}
          <div className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-50 text-red-500">
                <span
                  className="h-2 w-2 rounded-full bg-red-400"
                  aria-hidden="true"
                />
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-primary">
                Hoje
              </h3>
            </div>
            <Timeline steps={todaySteps} accent="red" />
          </div>

          {/* Right — Com Mitig Hora */}
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm ring-1 ring-emerald-50 transition-shadow hover:shadow-md sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <span
                  className="h-2 w-2 rounded-full bg-emerald-500"
                  aria-hidden="true"
                />
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                Com Mitig Hora
              </h3>
            </div>
            <Timeline steps={agendaZapSteps} accent="green" />
          </div>
        </div>
      </div>
    </section>
  );
}
