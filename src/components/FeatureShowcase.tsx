import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion";

interface FeatureShowcaseProps {
  screenImage: string;
  title: string;
  featureIcon: string;
}

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  screenImage,
  title,
  featureIcon,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enterOpacity = interpolate(
    frame,
    [0, 20],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  const exitOpacity = interpolate(
    frame,
    [120, 150],
    [1, 0],
    { extrapolateLeft: "clamp" }
  );

  const laptopScale = spring({
    frame,
    fps,
    config: {
      damping: 15,
      mass: 1,
      stiffness: 100,
    },
  });

  const textX = interpolate(
    frame,
    [0, 30],
    [-100, 0],
    { extrapolateRight: "clamp" }
  );

  const iconScale = spring({
    frame: frame - 10,
    fps,
    config: {
      damping: 10,
      mass: 0.5,
      stiffness: 200,
    },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0a0a0a",
        opacity: enterOpacity * exitOpacity,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 30% 50%, #1a1a2e 0%, #0a0a0a 60%)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          gap: 80,
          padding: "0 100px",
        }}
      >
        <div
          style={{
            flex: 1,
            maxWidth: 600,
            transform: `translateX(${textX}px)`,
          }}
        >
          <div
            style={{
              fontSize: 80,
              marginBottom: 30,
              transform: `scale(${iconScale})`,
            }}
          >
            {featureIcon}
          </div>

          <h2
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.2,
              letterSpacing: -1,
            }}
          >
            {title}
          </h2>

          <p
            style={{
              fontSize: 28,
              color: "#a0a0a0",
              marginTop: 30,
              lineHeight: 1.6,
            }}
          >
            Streamline your operations with intelligent automation and seamless user experience.
          </p>

          <div
            style={{
              marginTop: 40,
              padding: "16px 32px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: 50,
              display: "inline-block",
              fontSize: 24,
              fontWeight: 600,
              color: "#ffffff",
              transform: `scale(${spring({
                frame: frame - 40,
                fps,
                config: { damping: 12, mass: 1, stiffness: 80 },
              })})`,
            }}
          >
            ⚡ Powered by Apex
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            transform: `scale(${laptopScale})`,
          }}
        >
          <div
            style={{
              width: 800,
              height: 500,
              background: "#1a1a1a",
              borderRadius: 20,
              padding: 15,
              boxShadow: "0 50px 100px rgba(0, 0, 0, 0.5)",
              border: "3px solid #2a2a2a",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "#000",
                borderRadius: 8,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={screenImage}
                alt="POS Screen"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "50%",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: -30,
              width: 900,
              height: 20,
              background: "#2a2a2a",
              borderRadius: "0 0 10px 10px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
            }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
