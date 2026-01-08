# Global Fitness SPA

A high-performance, award-winning Single Page Application for Global Fitness, built with React, Tailwind CSS, Framer Motion, and Lucide Icons.

## 🎨 Theme: "The Global Renaissance"

A fusion of raw street fitness, mental philosophy, and digital elegance. This is not just a fitness website—it's a movement for the global human renaissance.

### Color Palette
- **Obsidian Black** (#0a0a0a) - Primary background representing the "All Inclusive" darkness
- **Renaissance Yellow** (#FFE600) - The Sun/Intelligence accent color for CTAs and highlights

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

## 🔗 Pre-Configured Links

All social and contact links are already configured in `src/App.jsx`:

✅ **WhatsApp Group**: https://chat.whatsapp.com/G9c94IRyVID5c6mpkBA8Gw
✅ **Personal Sessions**: +353 83 080 1276
✅ **Instagram**: @jasonckennedy
✅ **Facebook**: jason.kennedy.12720

**To Update Calendly** (Line ~44):
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
1. **Header Navigation** - Prominent Global Fitness logo with social links (Instagram, Facebook, WhatsApp)
2. **Hero** - Full-screen immersive introduction with Ken Burns effect and emotional messaging
3. **The Trinity** - Bento grid (Body, Mind, Spirit) with powerful, persuasive copy
4. **The Guide** - Jason Kennedy's story and the global human renaissance vision
5. **Mental Nutritionist** - Philosophy section explaining mental nutrition and fertile soil concept
6. **What You Get** - 4 key benefits (Free consultation, Assessment, Equipment, Support)
7. **Testimonials Carousel** - 5 rotating student reviews categorized by Mind/Body/Spirit
8. **Live Training Schedule** - Mission control booking interface with dual CTAs
9. **FAQ Section** - 6 questions about training, 10 Toes In mentality, and logistics
10. **The Manifesto** - "Stop Waiting, Start Building" rallying cry
11. **Footer** - Dual conversion CTAs (WhatsApp Group + Personal Sessions) with social links

### Interactive Components
- **Fixed Header** - Scroll-triggered background with logo and social links
- **Testimonials Carousel** - Auto-rotating (6s) with manual navigation and category badges
- **FAQ Accordion** - Smooth expand/collapse animations with 6 questions
- **Floating Mobile Navigation** - Bottom dock with Home, About, WhatsApp icons
- **Calendar Booking Modal** - Popup for Calendly integration
- **Privacy Policy Modal** - Legal information display
- **1dollarwebsite.online Badge** - Branding credit in footer

## 📝 Copywriting Philosophy

All copy has been enhanced to be **persuasive, emotional, and action-oriented**:

- **Hero**: Focuses on escape from noise and personal renaissance
- **Trinity**: Emphasizes functional strength, mental sovereignty, and stillness as rebellion
- **Mental Nutritionist**: Introduces the concept of mental nutrition and fertile soil
- **Testimonials**: Real-feeling stories highlighting Mind/Body/Spirit transformations
- **FAQ**: Addresses the "10 Toes In" philosophy and common logistical questions
- **Manifesto**: Powerful "Stop Waiting, Start Building" message

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
