# Global Fitness SPA

A high-performance, award-winning Single Page Application for Global Fitness, built with React, Tailwind CSS, Framer Motion, and Lucide Icons.

## 🎨 Theme: "The Global Renaissance"

A fusion of raw street fitness, mental philosophy, and digital elegance.

### Color Palette
- **Obsidian Black** (#0a0a0a) - Primary background
- **Renaissance Yellow** (#FFE600) - Accent color for buttons and highlights

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## 📸 Image Customization

### CRITICAL: Replace Placeholder Images

The application uses placeholder images that MUST be replaced with your actual images:

1. **Hero Background** (Line ~50 in `src/App.jsx`)
   - Current: Unsplash placeholder
   - Replace with: Las Canteras Beach at Sunset (Golden Hour)
   - Update the `backgroundImage` URL

2. **Jason Kennedy (The Guide)** (Line ~345 in `src/App.jsx`)
   - Current: Unsplash placeholder
   - Replace with: Your uploaded Jason with Angel Wings Mural image
   - Update the `src` attribute

3. **Community (The Manifesto)** (Line ~480 in `src/App.jsx`)
   - Current: Unsplash placeholder
   - Replace with: Your uploaded Group of people on the beach image
   - Update the `src` attribute

### How to Add Your Images

**Option 1: Place in `/public` folder**
```jsx
// Create /public/images folder
// Place your images there
<img src="/images/jason-wings.jpg" alt="Jason Kennedy" />
```

**Option 2: Import in component**
```jsx
import heroImage from './assets/hero-beach.jpg'
<div style={{ backgroundImage: `url('${heroImage}')` }} />
```

## 🔗 Configure External Links

Update these URLs in `src/App.jsx`:

1. **WhatsApp Number** (Line ~20)
   ```jsx
   const whatsappLink = "https://wa.me/YOUR_NUMBER?text=10%20Toes%20In"
   ```

2. **Calendly Link** (Line ~21)
   ```jsx
   const calendlyLink = "https://calendly.com/your-link"
   ```

## ✨ Features

### Animations
- **Ken Burns Effect** on hero background (zoom-out)
- **Staggered Text Animation** on hero headline
- **Scroll-triggered Reveals** using Framer Motion
- **Breathing Effect** on Wind icon (The Trinity section)
- **Hover Effects** on all interactive elements
- **Pulsing CTA Button** with glow effect

### Sections
1. **Hero** - Full-screen immersive introduction
2. **The Trinity** - Bento grid layout (Body, Mind, Spirit)
3. **The Guide** - Jason Kennedy introduction
4. **Live Training Schedule** - Mission control style booking
5. **The Manifesto** - Community showcase
6. **Footer** - Conversion-focused with WhatsApp CTA

### Components
- Floating mobile navigation
- Calendar booking modal
- Privacy policy modal
- 1dollarwebsite.online branding badge

## 🎯 Customization Tips

### Change Fonts
Fonts are loaded from Google Fonts in `index.html`:
- Heading: 'Oswald' or 'Inter Tight'
- Body: 'Inter Tight'

To change fonts, update the Google Fonts link and Tailwind config.

### Adjust Colors
Edit `tailwind.config.js`:
```js
colors: {
  obsidian: '#0a0a0a',
  renaissance: '#FFE600',
}
```

### Modify Animations
All animations are in `tailwind.config.js` under `animation` and `keyframes`.

## 📱 Responsive Design

The application is fully responsive:
- Mobile-first approach
- Floating dock navigation on mobile
- Adaptive typography and spacing
- Touch-optimized interactions

## 🔧 Tech Stack

- **React 18.3** - UI framework
- **Vite 5** - Build tool
- **Tailwind CSS 3.4** - Styling
- **Framer Motion 11** - Animations
- **Lucide React** - Icons

## 📄 Privacy Policy

Update the privacy policy content in the modal at the bottom of `src/App.jsx` (around line 620).

## 🎨 Design Philosophy

- **Minimal but Impactful** - Every element serves a purpose
- **Performance First** - Optimized animations and lazy loading
- **Emotional Connection** - Focus on storytelling and inspiration
- **Conversion Optimized** - Clear CTAs and user journey

## 📞 Support

For questions about this template, visit [1dollarwebsite.online](https://1dollarwebsite.online)

---

Built with 💛 by 1dollarwebsite.online
