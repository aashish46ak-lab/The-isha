🎬 Echoes of Memory
==================

A cinematic, high-end emotional storytelling page built with React, Tailwind CSS, and Framer Motion.

This is a chronological visual journey of a memory, optimized for Vercel deployment.

## Features

### 🎨 Cinematic Design
- Deep charcoal/black aesthetic
- Floating particles with ambient fog effects
- Glassmorphism UI elements
- Smooth scroll-triggered animations
- Custom Framer Motion staggered entrance effects

### 📱 Scenes

**Scene 1: The Beginning**
- TikTok Reel icon animation
- WhatsApp group invite card (NEB Hacks / Paper Leak)
- Initial chat message with typing animation

**Scene 2: The Interaction**
- Instagram group chat interface
- Chat bubble animations
- Video file send indicator with "Seen" status

**Scene 3: The Fallout**
- Harsh messages with glitch effects
- Screen dimming animation
- Emotional impact with visual distortion

**Scene 4: The Memory Card**
- Glassmorphism card with avatars (blurred, no faces)
- Rhythmic heartbeat pulse animation on 💔 emoji
- Centered emotional message
- Inspirational reflection text

**Credits Section**
- Special thanks to Charming (long-distance sister)
- Heartfelt acknowledgment
- Glow effects and pulsing animations

### ⚙️ Technical Features

- **React 18** with TypeScript
- **Framer Motion** for complex animations
- **Tailwind CSS** for responsive styling
- **Next.js 14** framework
- **Responsive Design** (mobile, tablet, desktop)
- **Smooth Scroll Behavior**
- **Custom Scrollbar** styling
- **Particle Animation** system

## Installation & Setup

### 1. Clone and Navigate
```bash
cd your-repo-path
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit `http://localhost:3000` to view the page.

## Deploy to Vercel

### Option 1: Direct Git Integration
1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Vercel will auto-detect Next.js and deploy

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 3: Manual Deployment
```bash
npm run build
vercel --prod
```

## Project Structure

```
├── app/
│   ├── page.tsx          # Main component with all scenes
│   ├── layout.tsx        # Next.js layout wrapper
│   └── globals.css       # Global styles & animations
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── postcss.config.js     # PostCSS configuration
└── vercel.json          # Vercel deployment config
```

## Customization

### Change Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  charcoal: "#1a1a1a",
  deep: "#0f0f0f",
  // Add more colors
}
```

### Modify Messages
Edit the chat messages in `app/page.tsx` under each Scene section.

### Adjust Animations
- **Speed**: Change `duration` values in Framer Motion animations
- **Effects**: Modify `animate`, `whileInView`, `whileTap` props
- **Delays**: Adjust `delay` and `staggerChildren` values

### Update Credits
Replace the credits text in the final section with your own message.

## Performance Optimization

- ✅ Image lazy loading
- ✅ CSS animations (GPU-accelerated)
- ✅ Optimized Framer Motion animations
- ✅ Viewport-based animation triggers
- ✅ Responsive image sizes

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Audio Implementation

The page includes a mute/unmute toggle button (🔊/🔇) for potential audio features. 
To add background audio:

```javascript
// In app/page.tsx, add audio element
const audio = new Audio('/path-to-audio.mp3');
audio.loop = true;
isAudioPlaying ? audio.play() : audio.pause();
```

Place your audio file in `public/` directory.

## Tips for Best Experience

1. **Scroll slowly** to appreciate animations
2. **Enable sound** for ambiance (when implemented)
3. **Use on desktop** for full cinematic experience
4. **Dark room** viewing recommended for emotional impact
5. **Headphones** recommended for audio (future implementation)

## Contributing

Feel free to fork, modify, and create your own emotional stories!

## License

MIT License - Feel free to use for personal or commercial projects.

---

**Made with 💜 and memories**

> "Some goodbyes aren't meant forever."

Special thanks to Charming for being the pillar of support through it all. 🕊️
