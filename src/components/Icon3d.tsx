import Image from "next/image";

interface Icon3dProps {
  src: string;
  alt: string;
  /** Velikost v px (80–120), výchozí 96 */
  size?: number;
  className?: string;
  priority?: boolean;
}

export function Icon3d({
  src,
  alt,
  size = 96,
  className = "",
  priority = false,
}: Icon3dProps) {
  return (
    <span
      className={`inline-block transition-transform duration-200 hover:scale-105 hover:drop-shadow-md ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-contain"
        loading={priority ? undefined : "lazy"}
        priority={priority}
        aria-hidden
      />
    </span>
  );
}
