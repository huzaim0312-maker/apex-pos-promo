import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion";

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(
    frame,
    [0, 30],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  const logoScale = spring({
    frame,
    fps,
    config: {
      damping: 12,
      mass: 1,
      stiffness: 80,
    },
  });

  const textY = interpolate(
    frame,
    [20, 60],
    [50, 0],
    { extrapolateRight: "clamp" }
  );

  const buttonScale = spring({
    frame: frame - 40,
    fps,
    config: {
      damping: 10,
      mass: 0.5,
      stiffness: 150,
    },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0a0a0a",
        opacity,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 50% 50%, #1a1a2e 0%, #0a0a0a 70%)",
        }}
      />

      <div
        style={{
          fontSize: 100,
          fontWeight: 800,
          color: "#ffffff",
          transform: `scale(${logoScale})`,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Apex POS
      </div>

      <h2
        style={{
          fontSize: 42,
          color: "#a0a0a0",
          margin: "30px 0 0 0",
          transform: `translateY(${textY}px)`,
          textAlign: "center",
        }}
      >
        Transform Your Business Today
      </h2>

      <div
        style={{
          marginTop: 60,
          display: "flex",
          gap: 40,
          alignItems: "center",
          transform: `translateY(${textY}px)`,
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          🌐 www.apexpos.com
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          📧 contact@apexpos.com
        </div>
      </div>

      <div
        style={{
          marginTop: 80,
          padding: "24px 64px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: 60,
          fontSize: 32,
          fontWeight: 700,
          color: "#ffffff",
          transform: `scale(${buttonScale})`,
          boxShadow: "0 20px 40px rgba(102, 126, 234, 0.4)",
          cursor: "pointer",
        }}
      >
        Get Started Free →
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 60,
          fontSize: 20,
          color: "#4a4a4a",
        }}
      >
        © 2024 Apex POS. All rights reserved.
      </div>
    </AbsoluteFill>
  );
};
