import { readFileSync } from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;

const chips = [
  { label: "Waiting", bg: "#fffbeb", fg: "#b45309" },
  { label: "In interview", bg: "#ecfdf5", fg: "#047857" },
  { label: "Done", bg: "#eef2ff", fg: "#4338ca" },
];

export default function Image() {
  const logo = readFileSync(
    path.join(process.cwd(), "public/logo.svg"),
    "base64",
  );
  const logoSrc = `data:image/svg+xml;base64,${logo}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background:
          "linear-gradient(135deg, #eef2ff 0%, #f6f7fb 50%, #ecfdf5 100%)",
        color: "#0f172a",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        {/* biome-ignore lint/performance/noImgElement: rendered by satori, not by next/image */}
        <img src={logoSrc} width={76} height={76} alt="" />
        <div
          style={{
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: -1,
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            marginLeft: "auto",
            fontSize: 24,
            color: "#475569",
            border: "2px solid #d3d7e3",
            borderRadius: 999,
            padding: "10px 24px",
            display: "flex",
          }}
        >
          Roll number + room PIN
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 92,
            fontWeight: 700,
            letterSpacing: -3,
            lineHeight: 1.05,
          }}
        >
          Every panel.
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 700,
            letterSpacing: -3,
            lineHeight: 1.05,
          }}
        >
          One live board.
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            color: "#475569",
          }}
        >
          Recruitment panel tracker / waiting, live and done at a glance.
        </div>
      </div>

      <div style={{ display: "flex", gap: 18 }}>
        {chips.map((chip) => (
          <div
            key={chip.label}
            style={{
              background: chip.bg,
              color: chip.fg,
              border: "2px solid rgba(15, 23, 42, 0.06)",
              borderRadius: 999,
              padding: "14px 34px",
              fontSize: 30,
              fontWeight: 600,
              display: "flex",
            }}
          >
            {chip.label}
          </div>
        ))}
      </div>
    </div>,
    {
      ...size,
    },
  );
}
