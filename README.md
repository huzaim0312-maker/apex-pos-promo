# Apex POS Promotional Video

A professional 30-second promotional video for Apex POS software, built with Remotion.

## Project Structure

```
apex-pos-promo-video/
├── package.json
├── tsconfig.json
├── remotion.config.ts
├── src/
│   ├── index.ts
│   ├── Root.tsx
│   ├── Composition.tsx
│   └── components/
│       ├── Intro.tsx
│       ├── FeatureShowcase.tsx
│       └── Outro.tsx
└── public/
    └── screenshots/
        ├── billing.png          # ADD YOUR SCREENSHOT HERE
        ├── checkout.png         # ADD YOUR SCREENSHOT HERE
        ├── barcode.png          # ADD YOUR SCREENSHOT HERE
        ├── search.png           # ADD YOUR SCREENSHOT HERE
        └── reports.png          # ADD YOUR SCREENSHOT HERE
```

## Setup Instructions

### 1. Add Your POS Screenshots

Place your POS software screenshots in the `public/screenshots/` folder with these exact filenames:
- `billing.png` - Billing/payment processing screen
- `checkout.png` - Cart checkout screen
- `barcode.png` - Barcode scanning screen
- `search.png` - Item search screen
- `reports.png` - Sales reports/dashboard screen

**Recommended image size:** 1920x1080 or higher for best quality

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

This will open the Remotion Studio where you can preview and edit your video.

### 4. Render the Final Video

```bash
npm run build
```

The video will be rendered to `out/video.mp4`

## Video Timeline (30 seconds total)

- **0-5s (Intro):** Animated title "Meet Apex POS - Fast, Smart & Reliable Billing"
- **5-10s:** Barcode Scanning & Checkout feature showcase
- **10-15s:** Item Search & Cart Management feature showcase
- **15-20s:** Real-Time Sales & Inventory Reports feature showcase
- **20-25s:** Smart Billing & Payment Processing feature showcase
- **25-30s (Outro):** Branding, contact info, and call-to-action

## Customization

### Change Colors
Edit the gradient colors in each component (currently purple/indigo: `#667eea` to `#764ba2`)

### Adjust Timing
Modify `durationInFrames` values in `src/Composition.tsx` (150 frames = 5 seconds at 30fps)

### Change Text
Edit the title and description text in `src/Composition.tsx` and component files

### Adjust Device Mockup
Modify the laptop frame styling in `src/components/FeatureShowcase.tsx`

## Rendering Options

**High quality (larger file):**
```bash
npx remotion render ApexVideo out/video.mp4 --codec=h264 --crf=18
```

**Balanced quality (default):**
```bash
npm run build
```

**Web-optimized (smaller file):**
```bash
npx remotion render ApexVideo out/video.mp4 --codec=h264 --crf=28
```

## Technical Specifications

- **Duration:** 30 seconds (900 frames at 30fps)
- **Resolution:** 1920x1080 (Full HD)
- **Format:** MP4 (H.264)
- **Style:** Modern, Apple-inspired dark theme with smooth animations

## Deployment

This project can be deployed to:
- StackBlitz
- CodeSandbox
- GitHub Codespaces
- Any cloud environment with Node.js support

Just upload the project files, add your screenshots, install dependencies, and run the build command.
