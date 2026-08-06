import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Configuração em poucos minutos",
  "Sem fidelidade",
  "Suporte durante a implantação",
];

export default function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-900 px-8 py-14 text-center shadow-xl md:px-16 md:py-20">
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-green-wpp">
            Comece gratuitamente
          </span>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Pronto para automatizar seus agendamentos?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-neutral-300">
            Cuido disso pra você enquanto você faz o que realmente importa:
            atender.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/5511975876658?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20conhecer%20melhor%20o%20sistema%20de%20agendamentos%20pelo%20WhatsApp."
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 font-medium text-white transition hover:bg-emerald-600"
            >
              Quero testar gratuitamente
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://wa.me/5511975876658?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20conhecer%20melhor%20o%20sistema%20de%20agendamentos%20pelo%20WhatsApp."
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-xl border border-neutral-700 px-6 py-3 font-medium text-white transition hover:bg-neutral-800"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-neutral-300 md:flex-row md:gap-8">
            {benefits.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
