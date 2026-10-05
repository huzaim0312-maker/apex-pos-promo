import { Composition } from "remotion";
import { ApexVideo } from "./Composition";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="ApexVideo"
        component={ApexVideo}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          posScreens: [
            "/public/screenshots/billing.png",
            "/public/screenshots/checkout.png",
            "/public/screenshots/barcode.png",
            "/public/screenshots/search.png",
            "/public/screenshots/reports.png"
          ]
        }}
      />
    </>
  );
};
