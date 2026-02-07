import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#4A5942",
          borderRadius: 4,
          border: "2px solid #8C9284",
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 900,
            color: "#FFCC00",
            letterSpacing: -1,
          }}
        >
          CS
        </span>
      </div>
    ),
    { ...size }
  );
}
