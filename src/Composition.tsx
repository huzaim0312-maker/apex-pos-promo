import {
  AbsoluteFill,
  Sequence,
} from "remotion";
import { Intro } from "./components/Intro";
import { FeatureShowcase } from "./components/FeatureShowcase";
import { Outro } from "./components/Outro";

export const ApexVideo: React.FC<{
  posScreens: string[];
}> = ({ posScreens }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      <Sequence from={0} durationInFrames={150}>
        <Intro />
      </Sequence>

      <Sequence from={150} durationInFrames={150}>
        <FeatureShowcase
          screenImage={posScreens[2]}
          title="Lightning Fast Barcode Scanning & Checkout"
          featureIcon="📱"
        />
      </Sequence>

      <Sequence from={300} durationInFrames={150}>
        <FeatureShowcase
          screenImage={posScreens[3]}
          title="Effortless Item Search & Cart Management"
          featureIcon="🔍"
        />
      </Sequence>

      <Sequence from={450} durationInFrames={150}>
        <FeatureShowcase
          screenImage={posScreens[4]}
          title="Real-Time Sales & Inventory Reports"
          featureIcon="📊"
        />
      </Sequence>

      <Sequence from={600} durationInFrames={150}>
        <FeatureShowcase
          screenImage={posScreens[0]}
          title="Smart Billing & Payment Processing"
          featureIcon="💳"
        />
      </Sequence>

      <Sequence from={750} durationInFrames={150}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
