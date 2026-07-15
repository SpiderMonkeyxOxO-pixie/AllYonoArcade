import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logoData = readFileSync(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#05060c",
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(53,242,255,0.35), transparent 55%), radial-gradient(circle at 75% 75%, rgba(255,63,176,0.3), transparent 55%)",
        }}
      >
        <img src={logoSrc} width={168} height={168} style={{ marginBottom: 28 }} />
        <div style={{ display: "flex", fontSize: 58, fontWeight: 700, color: "#f3f5ff" }}>
          Yono Arcade
        </div>
        <div style={{ display: "flex", marginTop: 14, fontSize: 26, color: "#93a0c2", maxWidth: 820, textAlign: "center" }}>
          Download guide, all games, login help & an honest safety review
        </div>
      </div>
    ),
    { ...size }
  );
}
