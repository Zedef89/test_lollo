import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
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
  X,
  Instagram,
  Facebook,
  ChevronLeft,
  ChevronRight,
  Check,
  Star,
  Heart,
  Zap,
  Target,
  Gift,
  Phone,
  MapPin,
  Quote,
  ChevronDown,
  Sparkles
} from 'lucide-react'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)
  const { scrollYProgress } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  // Social & Contact Links
  const whatsappGroupLink = "https://chat.whatsapp.com/G9c94IRyVID5c6mpkBA8Gw"
  const whatsappPersonalLink = "https://wa.me/353830801276?text=Hi%20Jason%2C%20I%27d%20like%20to%20book%20a%201-on-1%20session"
  const instagramLink = "https://www.instagram.com/jasonckennedy/"
  const facebookLink = "https://www.facebook.com/jason.kennedy.12720"
  const calendlyLink = "https://calendly.com/your-link"

  // Testimonials Data
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Dublin, Ireland",
      category: "MIND",
      text: "Jason's mental nutrition approach changed everything. I was drowning in anxiety and political noise. Now I wake up with clarity and purpose. The daily habit tracking isn't just about fitness—it's about reclaiming your mental sovereignty.",
      icon: BrainCircuit
    },
    {
      name: "Marcus T.",
      location: "Las Palmas, Gran Canaria",
      category: "BODY",
      text: "From overweight and unmotivated to doing pull-ups on the beach at sunrise. The calisthenics curriculum isn't about aesthetics—it's about functional power that translates to every area of life. 10 toes in, always.",
      icon: Dumbbell
    },
    {
      name: "Elena R.",
      location: "Barcelona, Spain",
      category: "SPIRIT",
      text: "The Yin Yoga and breathwork sessions unlocked something primal in me. I found stillness I didn't know existed. Jason doesn't just teach exercises—he cultivates a philosophy of holistic human renaissance.",
      icon: Wind
    },
    {
      name: "David K.",
      location: "Boston, USA",
      category: "MIND",
      text: "I followed Jason from Boston to Gran Canaria through social media. When I finally joined a session in person, it was transformative. This isn't a gym—it's a movement. A global uprising of people choosing mental and physical freedom.",
      icon: Heart
    },
    {
      name: "Luna P.",
      location: "Berlin, Germany",
      category: "SPIRIT",
      text: "Traveled to Las Palmas specifically for this experience. The beach sessions at sunset, the community, Jason's philosophy about fertile mental soil—it all clicked. I'm building my dreams now, not just thinking about them.",
      icon: Sparkles
    }
  ]

  // FAQ Data
  const faqs = [
    {
      question: "Where do the training sessions take place?",
      answer: "We train primarily at Las Canteras Beach in Las Palmas, Gran Canaria. The beach is our sanctuary—open air, ocean energy, and the raw power of nature. Sessions happen at various times throughout the week. Join our WhatsApp group for live updates and session schedules."
    },
    {
      question: "What is the '10 Toes In' mentality?",
      answer: "10 Toes In means full commitment. No half measures. Both feet planted firmly in your decision to transform. It's a philosophy of unwavering dedication to your physical, mental, and spiritual evolution. You get one go-round in this life—make it count."
    },
    {
      question: "Do I need prior fitness experience?",
      answer: "Absolutely not. We meet you where you are. Whether you're a complete beginner or an advanced athlete, the curriculum adapts. This is about sustainable transformation, not ego-driven performance. Everyone starts somewhere—what matters is that you start."
    },
    {
      question: "Can I join if I don't live in Gran Canaria?",
      answer: "Yes! We have travelers joining us from all over the world. Many people plan trips to Las Palmas specifically for our sessions. Additionally, we offer online programming and personalized 1-on-1 coaching that you can follow from anywhere. The movement is global."
    },
    {
      question: "What's included in the personalized 1-on-1 program?",
      answer: "You get a free consultation, personalized fitness assessment, custom programming tailored to your goals, travel-friendly equipment recommendations, and ongoing support via WhatsApp. This is holistic coaching—body, mind, and spirit. We build your curriculum together."
    },
    {
      question: "What should I bring to a beach session?",
      answer: "Just yourself, water, and an open mind. We use bodyweight movements and minimal equipment. Wear comfortable athletic clothing. The beach provides the resistance, the ocean provides the soundtrack, and the community provides the energy."
    }
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  // Handle scroll for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* NAVIGATION HEADER */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-obsidian/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-renaissance rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7 text-obsidian" />
            </div>
            <div>
              <h1 className="font-heading text-2xl md:text-3xl font-bold text-white group-hover:text-renaissance transition-colors">
                GLOBAL FITNESS
              </h1>
              <p className="text-xs text-gray-400 tracking-wider">THE RENAISSANCE MOVEMENT</p>
            </div>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-renaissance/10 rounded-full transition-colors group"
            >
              <Instagram className="w-5 h-5 text-gray-400 group-hover:text-renaissance transition-colors" />
            </a>
            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-renaissance/10 rounded-full transition-colors group"
            >
              <Facebook className="w-5 h-5 text-gray-400 group-hover:text-renaissance transition-colors" />
            </a>
            <a
              href={whatsappGroupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-renaissance text-obsidian px-5 py-2 rounded-full font-bold text-sm hover:shadow-yellow-glow transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              JOIN GROUP
            </a>
          </div>
        </div>
      </motion.header>

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
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
          >
            Escape the noise. Reclaim your body, sharpen your mind, awaken your spirit.
            <br />
            <span className="text-renaissance font-semibold">Las Palmas is where your renaissance begins.</span>
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href={whatsappGroupLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-renaissance text-obsidian px-12 py-5 rounded-full font-bold text-xl md:text-2xl shadow-yellow-glow hover:shadow-yellow-glow-lg transition-all duration-300 animate-pulse-slow"
          >
            JOIN THE TRIBE
          </motion.a>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-16 glassmorphism px-8 py-4 rounded-full flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-renaissance/30 border-2 border-renaissance flex items-center justify-center">
                <Heart className="w-4 h-4 text-renaissance" />
              </div>
              <div className="w-10 h-10 rounded-full bg-renaissance/30 border-2 border-renaissance flex items-center justify-center">
                <Dumbbell className="w-4 h-4 text-renaissance" />
              </div>
              <div className="w-10 h-10 rounded-full bg-renaissance/30 border-2 border-renaissance flex items-center justify-center">
                <Zap className="w-4 h-4 text-renaissance" />
              </div>
            </div>
            <Users className="w-5 h-5 text-renaissance" />
            <span className="text-sm md:text-base font-semibold">A Global Movement of Transformation</span>
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
            className="text-center text-gray-300 text-lg md:text-xl mb-4 max-w-3xl mx-auto"
          >
            True transformation requires all three. Neglect one, and the others crumble.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center text-renaissance text-sm uppercase tracking-widest mb-16 font-bold"
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
              <p className="text-gray-300 leading-relaxed">
                Your body is the vehicle for your dreams. We forge it through bodyweight mastery—pull-ups, push-ups, sprints on the sand. No machines. No gimmicks. Just you, gravity, and the ocean breeze. Build strength that <span className="text-white font-semibold">carries over to life</span>.
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
              <p className="text-gray-300 leading-relaxed">
                Feed your mind or let the world poison it. We practice <span className="text-white font-semibold">mental nutrition</span>—daily habit tracking, intentional input, disconnecting from the chaos. Cultivate fertile mental soil. Your thoughts shape your reality. <span className="text-renaissance font-semibold">Choose them wisely.</span>
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
              <p className="text-gray-300 leading-relaxed">
                In the relentless grind, stillness is rebellion. Yin Yoga and breathwork aren't escapes—they're <span className="text-white font-semibold">weapons</span>. Control your breath, control your nervous system. Find the eye of the storm. Access the calm that fuels <span className="text-renaissance font-semibold">unstoppable action</span>.
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
              <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                <p>
                  From the streets of Boston to the shores of Gran Canaria, I've witnessed humanity's struggle. <span className="text-white font-semibold">We're drowning in noise.</span> Political theater. Digital addiction. Endless consumption.
                </p>
                <p>
                  I'm not here to sell you supplements or quick fixes. I'm building a <span className="text-renaissance font-bold">global human renaissance</span>—one person at a time.
                </p>
                <p>
                  My curriculum is simple: <span className="text-white font-semibold">Track your habits. Master your body. Feed your mind. Awaken your spirit.</span> Document the journey. Discover who you actually are beneath the conditioning.
                </p>
                <p className="text-white">
                  This isn't a transaction. It's a <span className="text-renaissance font-bold">transformation.</span>
                </p>
                <div className="flex items-center gap-4 pt-6">
                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-renaissance transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm">@jasonckennedy</span>
                  </a>
                  <a
                    href={facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-renaissance transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span className="text-sm">Follow on Facebook</span>
                  </a>
                </div>
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

      {/* MENTAL NUTRITIONIST PHILOSOPHY SECTION */}
      <section className="relative py-24 px-6 bg-obsidian border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left: Icon/Visual */}
            <div className="lg:col-span-2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-renaissance/20 to-transparent border-4 border-renaissance/30 flex items-center justify-center">
                  <BrainCircuit className="w-32 h-32 text-renaissance" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-4 border-transparent border-t-renaissance/50"
                />
              </motion.div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-gradient">
                  THE MENTAL NUTRITIONIST
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Your mind is a garden. What you feed it determines what grows.
                  </p>
                  <p>
                    Most people consume <span className="text-white font-semibold">mental junk food</span> daily—doom-scrolling, fear-based news, toxic relationships, empty entertainment. Then they wonder why they're anxious, depressed, and directionless.
                  </p>
                  <p>
                    <span className="text-renaissance font-bold">Mental nutrition</span> is the practice of intentional input. What you read, watch, listen to, and who you surround yourself with—these are your ingredients. Choose high-quality nutrients.
                  </p>
                  <p className="text-white font-semibold">
                    Cultivate fertile soil. Plant seeds of vision. Water them with daily action. Watch your dreams grow.
                  </p>
                  <p className="text-gray-400 italic">
                    This is the foundation of the Global Human Renaissance. We're not here to escape reality—we're here to <span className="text-renaissance font-semibold">build a better one</span>.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET SECTION */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-obsidian via-black to-obsidian">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-7xl font-bold mb-4 text-gradient">
              WHAT YOU GET
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              This isn't a gym membership. It's a complete transformation system.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glassmorphism rounded-2xl p-6 hover:border-renaissance/30 transition-all group"
            >
              <div className="w-14 h-14 bg-renaissance/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-renaissance/20 transition-colors">
                <Gift className="w-7 h-7 text-renaissance" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Free Consultation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Start with a no-pressure conversation. We assess your current state, goals, and challenges. No sales pitch—just real talk.
              </p>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glassmorphism rounded-2xl p-6 hover:border-renaissance/30 transition-all group"
            >
              <div className="w-14 h-14 bg-renaissance/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-renaissance/20 transition-colors">
                <Target className="w-7 h-7 text-renaissance" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Personalized Assessment</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Custom fitness evaluation. We identify your strengths, weaknesses, and create a tailored roadmap for your transformation.
              </p>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glassmorphism rounded-2xl p-6 hover:border-renaissance/30 transition-all group"
            >
              <div className="w-14 h-14 bg-renaissance/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-renaissance/20 transition-colors">
                <MapPin className="w-7 h-7 text-renaissance" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Travel-Friendly Equipment</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Train anywhere. We recommend minimal, portable gear. Resistance bands, bodyweight—tools that fit in a backpack.
              </p>
            </motion.div>

            {/* Benefit 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glassmorphism rounded-2xl p-6 hover:border-renaissance/30 transition-all group"
            >
              <div className="w-14 h-14 bg-renaissance/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-renaissance/20 transition-colors">
                <MessageCircle className="w-7 h-7 text-renaissance" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Ongoing Support</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Direct WhatsApp access to Jason and the community. Questions, accountability, motivation—we're here for the journey.
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href={whatsappPersonalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-renaissance text-obsidian px-10 py-5 rounded-full font-bold text-lg shadow-yellow-glow hover:shadow-yellow-glow-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Book Your Free Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="relative py-24 px-6 bg-obsidian">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-5xl md:text-7xl font-bold mb-4 text-gradient">
              VOICES OF THE MOVEMENT
            </h2>
            <p className="text-gray-400 text-lg">
              Real transformations. Real people. Real results.
            </p>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="glassmorphism rounded-3xl p-8 md:p-12 border-2 border-renaissance/20"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-renaissance/10 rounded-full flex items-center justify-center mb-6">
                    {React.createElement(testimonials[currentTestimonial].icon, {
                      className: "w-10 h-10 text-renaissance"
                    })}
                  </div>

                  {/* Category Badge */}
                  <div className="inline-block px-4 py-1 bg-renaissance/20 rounded-full mb-6">
                    <span className="text-renaissance text-sm font-bold tracking-wider">
                      {testimonials[currentTestimonial].category}
                    </span>
                  </div>

                  {/* Quote */}
                  <Quote className="w-12 h-12 text-renaissance/20 mb-4" />
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  {/* Author */}
                  <div>
                    <p className="text-white font-bold text-xl">{testimonials[currentTestimonial].name}</p>
                    <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-3 glassmorphism rounded-full hover:bg-renaissance/10 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-renaissance" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-renaissance w-8' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-3 glassmorphism rounded-full hover:bg-renaissance/10 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-renaissance" />
              </button>
            </div>
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
                href={whatsappPersonalLink}
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

      {/* FAQ SECTION */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black to-obsidian">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-7xl font-bold mb-4 text-gradient">
              QUESTIONS ANSWERED
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to know about the Global Fitness movement.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="glassmorphism rounded-2xl overflow-hidden neon-border relative backdrop-blur-xl bg-obsidian/40"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group relative z-10"
                >
                  <span className="font-heading text-lg md:text-xl font-bold group-hover:text-renaissance transition-colors duration-300">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown className="w-6 h-6 text-renaissance drop-shadow-[0_0_8px_rgba(255,230,0,0.5)]" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden relative z-10"
                    >
                      <div className="px-6 pb-5 text-gray-300 leading-relaxed border-t border-renaissance/10">
                        <div className="pt-4">{faq.answer}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-6">Still have questions?</p>
            <a
              href={whatsappPersonalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-renaissance font-semibold hover:underline"
            >
              <MessageCircle className="w-5 h-5" />
              Message Jason directly on WhatsApp
            </a>
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
              STOP WAITING.
              <br />
              START BUILDING.
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
              You're not broken. You're not behind. You don't need permission. The system is designed to keep you distracted, consuming, waiting for the "right time."
            </p>
            <p className="text-2xl md:text-4xl font-bold text-renaissance mb-8">
              THE RIGHT TIME IS NOW.
            </p>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
              Join a global tribe of people choosing strength over comfort, clarity over chaos, and action over endless planning. We train together. We grow together. We build the future together.
            </p>
            <p className="text-3xl md:text-5xl font-heading text-renaissance">
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
            <p className="text-gray-300 mb-4 text-lg md:text-xl">
              Ready to start your transformation?
            </p>
            <p className="text-gray-500 mb-8 text-sm">
              Join the WhatsApp community or book a personal session with Jason.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href={whatsappGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Join WhatsApp Group
              </motion.a>

              <motion.a
                href={whatsappPersonalLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 glassmorphism border-2 border-renaissance/30 text-renaissance px-8 py-4 rounded-full font-bold text-base hover:bg-renaissance/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Book 1-on-1 Session
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-renaissance transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-renaissance transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="text-sm">Facebook</span>
              </a>
            </div>
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
            href={whatsappGroupLink}
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
