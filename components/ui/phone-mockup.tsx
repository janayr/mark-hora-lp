import {
  ArrowRight,
  CheckCheck,
  MoreVertical,
  Phone,
  Video,
} from "lucide-react";
import Image from "next/image";

export const PhoneMockup = () => {
  return (
    <div>
      <div className="animate-hero-float">
        <div className="relative w-[300px] rounded-[2.75rem] border border-neutral-200 bg-neutral-900 p-3 shadow-2xl shadow-neutral-300/60 sm:w-[330px]">
          {/* Screen */}
          <div className="relative overflow-hidden rounded-[2.25rem] bg-[#e5ddd5]">
            {/* Notch */}
            <div className="absolute left-1/2 top-2 z-20 h-6 w-32 -translate-x-1/2 rounded-full bg-neutral-900" />

            {/* WhatsApp header */}
            <div className="relative z-10 flex items-center gap-3 bg-emerald-600 px-4 pb-3 pt-8 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold">
                <Image
                  src={"/favicon.svg"}
                  alt="Mark Hora"
                  width={0}
                  height={0}
                  className="h-auto w-auto p-1.5"
                />
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold leading-tight">Mark Hora</p>
                <p className="text-xs text-emerald-50/90">online</p>
              </div>
              <Video className="h-4 w-4 text-white/90" aria-hidden="true" />
              <Phone className="h-4 w-4 text-white/90" aria-hidden="true" />
              <MoreVertical
                className="h-4 w-4 text-white/90"
                aria-hidden="true"
              />
            </div>

            {/* Conversation */}
            <div className="flex min-h-[380px] flex-col gap-2 px-3 py-4">
              {/* Cliente */}
              <div
                className="animate-hero-message-in max-w-[75%] self-end rounded-2xl rounded-tr-sm bg-[#dcf8c6] px-3 py-2 shadow-sm"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="text-sm text-neutral-800">
                  Oi, tem horário amanhã?
                </p>
                <span className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-neutral-500">
                  09:41
                  <CheckCheck
                    className="h-3 w-3 text-sky-500"
                    aria-hidden="true"
                  />
                </span>
              </div>

              {/* IA */}
              <div
                className="animate-hero-message-in max-w-[80%] self-start rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm"
                style={{ animationDelay: "0.9s" }}
              >
                <p className="text-sm text-neutral-800">
                  Tenho às 09:00, 10:30, 14:00 e 16:00.
                </p>
                <span className="mt-0.5 block text-right text-[10px] text-neutral-400">
                  09:41
                </span>
              </div>

              {/* Cliente */}
              <div
                className="animate-hero-message-in max-w-[75%] self-end rounded-2xl rounded-tr-sm bg-[#dcf8c6] px-3 py-2 shadow-sm"
                style={{ animationDelay: "1.6s" }}
              >
                <p className="text-sm text-neutral-800">14h.</p>
                <span className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-neutral-500">
                  09:42
                  <CheckCheck
                    className="h-3 w-3 text-sky-500"
                    aria-hidden="true"
                  />
                </span>
              </div>

              {/* Typing indicator */}
              <div
                className="animate-hero-message-in max-w-[60px] self-start rounded-2xl rounded-tl-sm bg-white px-3 py-3 shadow-sm"
                style={{ animationDelay: "2.2s" }}
              >
                <span className="flex items-center gap-1">
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className="animate-hero-typing h-1.5 w-1.5 rounded-full bg-neutral-400"
                      style={{ animationDelay: `${dot * 0.2}s` }}
                    />
                  ))}
                </span>
              </div>

              {/* IA confirmation */}
              <div
                className="animate-hero-message-in max-w-[80%] self-start rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm"
                style={{ animationDelay: "3.2s" }}
              >
                <p className="text-sm text-neutral-800">
                  Perfeito! Seu horário foi confirmado. ✅
                </p>
                <span className="mt-0.5 block text-right text-[10px] text-neutral-400">
                  09:42
                </span>
              </div>
            </div>

            {/* Input bar */}
            <div className="flex items-center gap-2 bg-[#e5ddd5] px-3 pb-4 pt-1">
              <div className="flex-1 rounded-full bg-white px-4 py-2 text-sm text-neutral-400 shadow-sm">
                Mensagem
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
