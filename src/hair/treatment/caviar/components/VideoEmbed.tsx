import { useEffect, useRef } from "react";

const EMBED_HTML = `
<style>wistia-player[media-id='aei6s2bs2p']:not(:defined){background:center / contain no-repeat url('https://fast.wistia.com/embed/medias/aei6s2bs2p/swatch');display:block;filter:blur(5px);padding-top:177.78%;}</style>
<wistia-player media-id="aei6s2bs2p" aspect="0.5625" style="display:block;width:100%;border-radius:1.7rem;overflow:hidden;"></wistia-player>`;

interface VideoEmbedProps {
  className?: string;
}

/** reusable Wistia session video frame — safe to mount multiple times on the page */
export default function VideoEmbed({ className = "" }: VideoEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.innerHTML = EMBED_HTML;
  }, []);

  return (
    <div
      ref={ref}
      className={`wistia-frame relative overflow-hidden rounded-[1.7rem] bg-blush-100 shadow-[0_40px_86px_-30px_rgb(127_66_77/0.5)] ring-1 ring-white/70 ${className}`}
    />
  );
}
