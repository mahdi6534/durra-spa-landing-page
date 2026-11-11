interface LogoProps {
  className?: string;
  compact?: boolean;
}

/**
 * Recreated official DORH SPA logo —
 * stacked zen stones above letter-spaced serif wordmark.
 */
export default function Logo({ className = "", compact = false }: LogoProps) {
  if (compact) {
    return (
      <svg viewBox="0 0 320 210" className={className} aria-label="DORH SPA" role="img">
        <defs>
          <linearGradient id="stoneA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F0E5CE" />
            <stop offset="100%" stopColor="#D8C19D" />
          </linearGradient>
          <linearGradient id="stoneB" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EADCc2" />
            <stop offset="100%" stopColor="#CFB48C" />
          </linearGradient>
          <linearGradient id="stoneC" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F2E7D2" />
            <stop offset="100%" stopColor="#DBC4A2" />
          </linearGradient>
        </defs>
        {/* top teardrop pebble */}
        <path
          d="M160 14 C 181 14 196 35 196 53 C 196 71 181 82 160 82 C 139 82 124 71 124 53 C 124 35 139 14 160 14 Z"
          fill="url(#stoneA)"
        />
        {/* second pebble */}
        <path
          d="M86 100 C 118 88 206 86 232 98 C 252 107 250 126 224 135 C 182 149 112 146 88 134 C 68 124 66 109 86 100 Z"
          fill="url(#stoneB)"
        />
        {/* third pebble (tilted, offset) */}
        <g transform="rotate(-6 160 165)">
          <path
            d="M104 150 C 132 140 198 138 216 147 C 232 155 229 171 208 179 C 172 191 120 189 102 180 C 86 172 87 157 104 150 Z"
            fill="url(#stoneC)"
          />
        </g>
        {/* bottom pancake pebble */}
        <path
          d="M62 190 C 96 178 232 176 262 188 C 284 197 281 214 250 222 L 250 222 C 218 230 96 231 68 219 C 46 210 43 199 62 190 Z"
          fill="url(#stoneB)"
          transform="translate(0 -22)"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 342" className={className} aria-label="DORH SPA" role="img">
      <defs>
        <linearGradient id="lsA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0E5CE" />
          <stop offset="100%" stopColor="#D6BD97" />
        </linearGradient>
        <linearGradient id="lsB" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EADCC2" />
          <stop offset="100%" stopColor="#CBAE84" />
        </linearGradient>
        <linearGradient id="lsC" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F2E7D2" />
          <stop offset="100%" stopColor="#D9C09C" />
        </linearGradient>
      </defs>
      <g>
        <path
          d="M160 14 C 181 14 196 35 196 53 C 196 71 181 82 160 82 C 139 82 124 71 124 53 C 124 35 139 14 160 14 Z"
          fill="url(#lsA)"
          className="origin-[160px_48px] animate-[float_9s_ease-in-out_infinite]"
        />
        <path
          d="M86 100 C 118 88 206 86 232 98 C 252 107 250 126 224 135 C 182 149 112 146 88 134 C 68 124 66 109 86 100 Z"
          fill="url(#lsB)"
          className="origin-[160px_120px] animate-[float_11s_ease-in-out_infinite]"
        />
        <g transform="rotate(-6 160 165)">
          <path
            d="M104 150 C 132 140 198 138 216 147 C 232 155 229 171 208 179 C 172 191 120 189 102 180 C 86 172 87 157 104 150 Z"
            fill="url(#lsC)"
            className="origin-[160px_165px] animate-[float_10s_ease-in-out_infinite]"
          />
        </g>
        <path
          d="M62 168 C 96 156 232 154 262 166 C 284 175 281 192 250 200 C 218 208 96 209 68 197 C 46 188 43 177 62 168 Z"
          fill="url(#lsB)"
          className="origin-[160px_185px] animate-[float_12s_ease-in-out_infinite]"
        />
      </g>
      <text
        x="160"
        y="268"
        textAnchor="middle"
        fontFamily="Marcellus, serif"
        fontSize="52"
        letterSpacing="14"
        fill="#C7A975"
        style={{ paddingInlineStart: 14 }}
      >
        DORH
      </text>
      <text
        x="160"
        y="316"
        textAnchor="middle"
        fontFamily="Marcellus, serif"
        fontSize="21"
        letterSpacing="20"
        fill="#C7A975"
        style={{ paddingInlineStart: 20 }}
      >
        SPA
      </text>
    </svg>
  );
}
