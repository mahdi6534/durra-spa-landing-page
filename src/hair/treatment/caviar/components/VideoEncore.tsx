import { Play } from "lucide-react";
import Reveal from "./Reveal";
import VideoEmbed from "./VideoEmbed";
import { Sparkle } from "./Icons";

interface VideoEncoreProps {
  title: string;
  note: string;
  id?: string;
}

/** compact in-flow replay of the session video — reinforces desire mid-journey */
export default function VideoEncore({ title, note, id }: VideoEncoreProps) {
  return (
    <section id={id} className="relative overflow-hidden py-12 sm:py-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-72 w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(245_214_222/0.55),transparent_65%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-blush-100 px-4 py-1.5 text-xs font-bold tracking-wide text-rosegold-600 ring-1 ring-rosegold-200/70">
            <Play className="h-3.5 w-3.5" />
            الدليل الحيّ يتكلّم عن نفسه
          </p>
          <h2 className="mx-auto mt-4 max-w-xl font-display text-2xl font-bold leading-snug text-ink sm:text-3xl sm:leading-snug">
            {title} <Sparkle className="ms-1 inline h-4 w-4 text-gold-400" />
          </h2>
        </Reveal>

        <Reveal delay={140} className="relative mx-auto mt-8 w-fit">
          <div className="conic-glow absolute -inset-4 rounded-[2.4rem] opacity-30 blur-xl" aria-hidden="true" />
          <div className="absolute -inset-1.5 rounded-[2.2rem] border border-rosegold-300/50" aria-hidden="true" />
          <VideoEmbed className="relative w-[240px] rounded-[1.9rem] sm:w-[280px]" />
          <Sparkle className="absolute -right-5 -top-5 h-6 w-6 animate-pulse-soft text-rosegold-400" />
          <Sparkle className="absolute -bottom-4 -left-5 h-5 w-5 animate-pulse-soft text-gold-400" style={{ animationDelay: "1.6s" }} />
        </Reveal>

        <Reveal delay={220} className="mt-7 text-center">
          <p className="text-sm font-bold text-ink-soft sm:text-base">{note}</p>
        </Reveal>
      </div>
    </section>
  );
}
