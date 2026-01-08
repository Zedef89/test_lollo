import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Dumbbell,
  BrainCircuit,
  Wind,
  Users,
  Calendar,
  Home,
  User,
  MessageCircle,
  ExternalLink,
  X
} from 'lucide-react'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const { scrollYProgress } = useScroll()

  // WhatsApp link with pre-filled message
  const whatsappLink = "https://wa.me/YOUR_NUMBER?text=10%20Toes%20In"
  const calendlyLink = "https://calendly.com/your-link"

  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Ken Burns Background */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="w-full h-full bg-cover bg-center animate-ken-burns"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          {/* Staggered Headline */}
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-gradient tracking-tight leading-none"
            >
              1 GO ROUND.
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-gradient tracking-tight leading-none mt-2"
            >
              MAKE IT COUNT.
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-renaissance tracking-tight leading-none mt-2"
            >
              10 TOES IN.
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl"
          >
            Your Mental Well-Being Journey Starts Here in Las Palmas.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-renaissance text-obsidian px-12 py-5 rounded-full font-bold text-xl md:text-2xl shadow-yellow-glow hover:shadow-yellow-glow-lg transition-all duration-300 animate-pulse-slow"
          >
            JOIN THE MOVEMENT
          </motion.a>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-16 glassmorphism px-6 py-3 rounded-full flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-renaissance/20 border-2 border-renaissance" />
              <div className="w-8 h-8 rounded-full bg-renaissance/20 border-2 border-renaissance" />
              <div className="w-8 h-8 rounded-full bg-renaissance/20 border-2 border-renaissance" />
            </div>
            <Users className="w-5 h-5 text-renaissance" />
            <span className="text-sm md:text-base font-semibold">Join 1 Million People</span>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-renaissance/50 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-renaissance rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* THE TRINITY SECTION */}
      <section className="relative py-24 px-6 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl font-bold text-center mb-4 text-gradient"
          >
            THE TRINITY
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-gray-400 text-lg mb-16"
          >
            Body. Mind. Spirit.
          </motion.p>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: The Body */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="glassmorphism rounded-3xl p-8 hover:border-renaissance/30 transition-all duration-300"
            >
              <div className="mb-6">
                <Dumbbell className="w-12 h-12 text-renaissance" />
              </div>
              <h3 className="font-heading text-3xl font-bold mb-4">THE BODY</h3>
              <p className="text-sm uppercase tracking-wider text-renaissance mb-3">
                Calisthenics & Endurance
              </p>
              <p className="text-gray-400 leading-relaxed">
                Strengthen and lengthen using bodyweight mastery. Build functional strength that translates to life.
              </p>
            </motion.div>

            {/* Card 2: The Mind */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="glassmorphism rounded-3xl p-8 hover:border-renaissance/30 transition-all duration-300"
            >
              <div className="mb-6">
                <BrainCircuit className="w-12 h-12 text-renaissance" />
              </div>
              <h3 className="font-heading text-3xl font-bold mb-4">THE MIND</h3>
              <p className="text-sm uppercase tracking-wider text-renaissance mb-3">
                Mental Nutrition
              </p>
              <p className="text-gray-400 leading-relaxed">
                Cultivate fertile soil for your dreams. Disconnect from political calamity, reconnect to self.
              </p>
            </motion.div>

            {/* Card 3: The Spirit */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="glassmorphism rounded-3xl p-8 hover:border-renaissance/30 transition-all duration-300"
            >
              <div className="mb-6">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Wind className="w-12 h-12 text-renaissance" />
                </motion.div>
              </div>
              <h3 className="font-heading text-3xl font-bold mb-4">THE SPIRIT</h3>
              <p className="text-sm uppercase tracking-wider text-renaissance mb-3">
                Yin Yoga & Breath
              </p>
              <p className="text-gray-400 leading-relaxed">
                Increase mental serenity through breath work. Find stillness in the chaos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE GUIDE SECTION */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-obsidian to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-gradient">
                THE GUIDE
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-renaissance mb-6">
                Jason Kennedy
              </h3>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I am Jason Kennedy. From Boston to Gran Canaria.
                </p>
                <p>
                  Amidst global calamity, I am building a <span className="text-renaissance font-bold">tsunami of change</span>.
                </p>
                <p>
                  My curriculum helps you document daily habits for self-discovery. This isn't about selling you a dream—it's about helping you <span className="italic">build</span> one.
                </p>
                <p className="text-xl font-bold text-white pt-4">
                  Let's go for your dreams. 10 Toes In.
                </p>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ rotate: 1, scale: 1.02 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-yellow-glow">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
                  alt="Jason Kennedy - The Guide"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
              </div>
              {/* Replace the above image URL with your uploaded Jason with Wings image */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* LIVE TRAINING SCHEDULE SECTION */}
      <section className="relative py-24 px-6 bg-obsidian">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glassmorphism rounded-3xl p-10 md:p-12 border-2 border-renaissance/20"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading text-4xl md:text-6xl font-bold text-gradient">
                TRAIN WITH US
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-blink" />
                <span className="text-sm font-semibold text-green-400">Sessions Active</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-2xl md:text-3xl font-bold mb-4">Las Palmas, Gran Canaria</p>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-5 h-5" />
                <span>Las Canteras Beach</span>
              </div>
            </div>

            <div className="space-y-4">
              <motion.button
                onClick={() => setShowModal(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-renaissance text-obsidian py-5 rounded-full font-bold text-xl shadow-yellow-glow hover:shadow-yellow-glow-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Calendar className="w-6 h-6" />
                CHECK LIVE CALENDAR & BOOK SESSION
              </motion.button>

              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full text-center py-4 text-renaissance font-semibold hover:underline flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Request Personalized 1-on-1 Program
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE MANIFESTO SECTION */}
      <section className="relative py-24 px-6 bg-black noise-bg">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-gradient leading-tight">
              YOU ARE CAPABLE OF ACHIEVING IT.
            </h2>
            <p className="text-3xl md:text-5xl font-bold text-renaissance mb-6">
              LET'S GO FOR YOUR DREAMS.
            </p>
            <p className="text-2xl md:text-4xl font-heading">
              #10ToesIn
            </p>
          </motion.div>

          {/* Community Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2232&auto=format&fit=crop"
              alt="Global Fitness Community"
              className="w-full h-auto object-cover"
            />
            {/* Replace with your uploaded Group Beach Photo */}
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-obsidian border-t border-white/10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-gradient">
              GLOBAL FITNESS
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Send us a direct message
            </p>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-green-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              Message '10 Toes In' on WhatsApp
            </motion.a>
          </motion.div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-400">
            <button
              onClick={() => setShowDisclaimer(true)}
              className="hover:text-renaissance transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <a href="#hero" className="hover:text-renaissance transition-colors">
              Home
            </a>
            <span>•</span>
            <a href="#guide" className="hover:text-renaissance transition-colors">
              About
            </a>
          </div>

          {/* 1dollarwebsite.online Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <a
              href="https://1dollarwebsite.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glassmorphism px-4 py-2 rounded-full text-sm text-gray-400 hover:text-renaissance transition-colors"
            >
              <span>Built with</span>
              <span className="font-bold text-renaissance">1dollarwebsite.online</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <p className="text-center text-gray-600 text-sm mt-6">
            © 2026 Global Fitness. All rights reserved.
          </p>
        </div>
      </footer>

      {/* FLOATING NAVIGATION (Mobile) */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden"
      >
        <div className="glassmorphism rounded-full px-6 py-3 flex items-center gap-6 border border-renaissance/30">
          <a href="#hero" className="p-2 hover:text-renaissance transition-colors">
            <Home className="w-6 h-6" />
          </a>
          <a href="#guide" className="p-2 hover:text-renaissance transition-colors">
            <User className="w-6 h-6" />
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-renaissance text-obsidian rounded-full"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </motion.div>

      {/* CALENDAR MODAL */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-obsidian border-2 border-renaissance/30 rounded-3xl p-8 max-w-2xl w-full relative"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="font-heading text-3xl font-bold mb-6 text-gradient">
              BOOK YOUR SESSION
            </h3>
            <p className="text-gray-400 mb-6">
              Click the button below to view our live calendar and book your spot.
            </p>
            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-renaissance text-obsidian py-4 rounded-full font-bold text-center hover:shadow-yellow-glow transition-all duration-300"
            >
              Open Calendar
            </a>
          </motion.div>
        </motion.div>
      )}

      {/* PRIVACY POLICY MODAL */}
      {showDisclaimer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setShowDisclaimer(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-obsidian border-2 border-renaissance/30 rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
          >
            <button
              onClick={() => setShowDisclaimer(false)}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors sticky top-0"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="font-heading text-3xl font-bold mb-6 text-gradient">
              PRIVACY POLICY
            </h3>
            <div className="text-gray-400 space-y-4">
              <p>Last updated: January 8, 2026</p>
              <p>
                This privacy policy will be updated with specific information about how Global Fitness collects, uses, and protects your personal information.
              </p>
              <p>
                For questions about our privacy practices, please contact us via WhatsApp.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default App
