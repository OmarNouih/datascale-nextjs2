import { C } from '@/lib/tokens';
import { navTo } from '@/lib/utils/nav';

// ════════════════════════════════════════════════════════════
//  🔴 HOW TO USE YOUR REAL LOGO
//
//  OPTION A — Image file (recommended):
//    1. Put your logo file in /public/logo.png  (or .svg/.webp)
//    2. Replace the <svg> block below with:
//         <img src="/logo.png" alt="Data Scale Business" style={{ height: size * 1.5 }} />
//
//  OPTION B — Inline SVG:
//    Replace the entire <svg>…</svg> block with your own SVG code.
//    Tip: open your .svg file in a text editor and copy the contents.
//
//  OPTION C — Keep only the text (no icon):
//    Delete the <svg> block entirely and adjust the gap if needed.
// ════════════════════════════════════════════════════════════

export default function Logo({ size = 30, dark = false }) {
  return (
    <div
      onClick={() => navTo('home')}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      {/* ── LOGO ICON — replace this block ── */}
        <img src="/logo.png" alt="Data Scale Business" style={{ height: size * 1.5 }} />
      {/* ── END LOGO ICON ── */}

    </div>
  );
}
