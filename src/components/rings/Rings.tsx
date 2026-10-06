import { useId } from "react";

type Props = {
  className?: string;
  title?: string;
};

const EDGE = "rgba(92, 70, 32, 0.45)";
const UNDER_ARC = "M37.66 20.59A10 10 0 0 1 33 26.66";

// Desenhadas já unidas; o segundo grupo "left" redesenha o cruzamento de baixo por cima do anel direito.
export default function Rings({ className, title }: Props) {
  const gradientId = useId();
  const stroke = `url(#${gradientId})`;

  return (
    <svg
      className={className}
      viewBox="0 0 72 36"
      fill="none"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="72"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#F0DBA8" />
          <stop offset="50%" stopColor="#C6A769" />
          <stop offset="100%" stopColor="#9C7C45" />
        </linearGradient>
      </defs>

      <g data-ring="left">
        <circle cx="28" cy="18" r="10" stroke={EDGE} strokeWidth="4" />
        <circle cx="28" cy="18" r="10" stroke={stroke} strokeWidth="3" />
      </g>

      <g data-ring="right">
        <g data-ring-spin>
          <circle cx="44" cy="18" r="10" stroke={EDGE} strokeWidth="4" />
          <circle cx="44" cy="18" r="10" stroke={stroke} strokeWidth="3" />
          <path d="M44 4.2 46.2 6.6 44 9 41.8 6.6Z" fill="#F7EFD9" stroke="#C6A769" strokeWidth="0.8" />
        </g>
      </g>

      <g data-ring="left">
        <path d={UNDER_ARC} stroke={EDGE} strokeWidth="4" />
        <path d={UNDER_ARC} stroke={stroke} strokeWidth="3" />
      </g>
    </svg>
  );
}
