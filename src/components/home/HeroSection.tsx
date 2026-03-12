import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Shield, BookOpen, Award, ArrowRight, Volume2, VolumeX } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const badges = [
  { icon: BookOpen, label: "CBSE Curriculum" },
  { icon: Award, label: "NCERT Pattern" },
  { icon: Shield, label: "Safe Campus" },
];

const videos = [
  "/videos/hero-tour.mp4",
  "/videos/hero-video-3.mp4",
  "/videos/hero-video-4.mp4",
];

export function HeroSection() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // auto change video
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    setMuted(!muted);
  };

  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden">

      {/* Background Video Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideo}
            ref={videoRef}
            autoPlay
            loop
            muted={muted}
            playsInline
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <source src={videos[currentVideo]} type="video/mp4" />
          </motion.video>
        </AnimatePresence>

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      {/* Sound Toggle */}
      <button
        onClick={toggleSound}
        className="absolute right-6 bottom-6 z-20 bg-black/40 backdrop-blur-md p-3 rounded-full text-white hover:bg-black/60 transition"
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      {/* Hero Content */}
      <div className="section-container relative z-10 py-16 lg:py-24">
        <div className="max-w-3xl">

          {/* Admission Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary rounded-full shadow-lg mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-sm font-semibold text-primary-foreground">
              Admissions Open 2025–26
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            Where Curiosity Meets{" "}
            <span className="text-primary">Care</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-md md:text-lg text-white/90 mb-6 max-w-xl"
          >
            CBSE Curriculum • NCERT Pattern • Safe Campus  
            Building strong foundations from Play to Class X.
          </motion.p>

          {/* Location Info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/70 text-sm mb-10"
          >
            📍 Near Bhagat Singh Chowk, Nawada  
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link to="/admission">
              <PremiumButton size="md" className="group">
                Enroll Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
              </PremiumButton>
            </Link>

            <Link to="/contact">
              <PremiumButton
                variant="outline"
                size="md"
                className="border-white text-white hover:bg-white/10"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Visit
              </PremiumButton>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            {badges.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
              >
                <item.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-white">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

    </section>
  );
}