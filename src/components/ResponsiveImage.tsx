import { type ImgHTMLAttributes } from "react";

interface ResponsiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  widths?: number[];
}

function getBaseName(src: string): string {
  const parts = src.split("/");
  const file = parts[parts.length - 1];
  const dot = file.lastIndexOf(".");
  return dot > 0 ? file.slice(0, dot) : file;
}

function getExt(src: string): string {
  const parts = src.split("/");
  const file = parts[parts.length - 1];
  const dot = file.lastIndexOf(".");
  return dot > 0 ? file.slice(dot) : ".jpg";
}

export default function ResponsiveImage({
  src,
  alt,
  widths = [400, 800, 1200],
  loading = "lazy",
  decoding = "async",
  className = "",
  ...rest
}: ResponsiveImageProps) {
  const base = getBaseName(src);
  const ext = getExt(src);
  const dir = src.substring(0, src.lastIndexOf("/") + 1);
  const optimized = `${dir}optimized/`;

  const webpSrcSet = widths
    .map((w) => `${optimized}${base}-${w}w.webp ${w}w`)
    .join(", ");

  const jpgSrcSet = widths
    .map((w) => `${optimized}${base}-${w}w.jpg ${w}w`)
    .join(", ");

  const fallbackSrc = `${optimized}${base}${ext === ".webp" ? ".jpg" : ext}`;
  const defaultSrc = `${optimized}${base}-800w.jpg`;

  return (
    <picture>
      <source
        type="image/webp"
        srcSet={webpSrcSet}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
      />
      <source
        type="image/jpeg"
        srcSet={jpgSrcSet}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
      />
      <img
        src={defaultSrc}
        alt={alt}
        loading={loading}
        decoding={decoding}
        className={className}
        {...rest}
      />
    </picture>
  );
}
