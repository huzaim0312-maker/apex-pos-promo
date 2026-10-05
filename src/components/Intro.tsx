import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(
    frame,
    [0, 30, 120, 150],
    [0, 1, 1, 0]
  );

  const scale = spring({
    frame,
    fps,
    config: {
      damping: 12,
      mass: 1,
      stiffness: 80,
    },
  });

  const titleY = interpolate(
    frame,
    [0, 60],
    [100, 0]
  );

  const subtitleY = interpolate(
    frame,
    [30, 90],
    [100, 0]
  );

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
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
          transform: `scale(${scale})`,
        }}
      />

      <h1
        style={{
          fontSize: 120,
          fontWeight: 800,
          color: "#ffffff",
          margin: 0,
          textTransform: "uppercase",
          letterSpacing: -4,
          transform: `translateY(${titleY}px)`,
          textAlign: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Meet Apex POS
      </h1>

      <h2
        style={{
          fontSize: 48,
          fontWeight: 400,
          color: "#a0a0a0",
          margin: "40px 0 0 0",
          transform: `translateY(${subtitleY}px)`,
          textAlign: "center",
          letterSpacing: 2,
        }}
      >
        Fast, Smart & Reliable Billing
      </h2>

      <p
        style={{
          fontSize: 32,
          color: "#6366f1",
          marginTop: 60,
          fontWeight: 600,
          opacity: interpolate(frame, [60, 90], [0, 1]),
        }}
      >
        The Future of Retail Management
      </p>
    </AbsoluteFill>
  );
};
