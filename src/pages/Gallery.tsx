import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { X } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import classroomImage from "@/assets/classroom.jpg";
import playzoneImage from "@/assets/playzone.jpg";
import artImage from "@/assets/art-activity.jpg";
import outdoorImage from "@/assets/outdoor-play.jpg";
import heroImage from "@/assets/hero-children.jpg";

const categories = ["All", "Classroom", "Activities", "Sports", "Events"];

const galleryImages = [
  { src: heroImage, alt: "Students at R.K. Mission School", category: "Classroom" },
  { src: classroomImage, alt: "Smart Classroom", category: "Classroom" },
  { src: playzoneImage, alt: "Play Zone", category: "Activities" },
  { src: artImage, alt: "Art Session", category: "Activities" },
  { src: outdoorImage, alt: "Outdoor Sports", category: "Sports" },
  { src: classroomImage, alt: "Learning Session", category: "Classroom" },
  { src: playzoneImage, alt: "Play Time", category: "Activities" },
  { src: artImage, alt: "Annual Day", category: "Events" },
  { src: outdoorImage, alt: "Sports Day", category: "Sports" },
  { src: heroImage, alt: "Republic Day", category: "Events" },
  { src: classroomImage, alt: "Science Lab", category: "Classroom" },
  { src: artImage, alt: "Drawing Competition", category: "Events" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === "All" ? galleryImages : galleryImages.filter(img => img.category === activeCategory);

  return (
    <Layout>
      <section className="relative py-24 bg-gradient-warm overflow-hidden">
        <div className="section-container relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary-light text-foreground rounded-full text-sm font-semibold mb-4">Gallery</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Glimpses of School Life</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore the vibrant world of R.K. Mission School through our collection of moments and memories.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-container">
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${activeCategory === cat ? "bg-primary text-primary-foreground shadow-soft" : "bg-cream text-foreground hover:bg-primary-light"}`}>
                {cat}
              </button>
            ))}
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <StaggerItem key={`${image.src}-${index}`}>
                  <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} whileHover={{ scale: 1.03 }} onClick={() => setSelectedImage(image.src)} className="group relative rounded-2xl overflow-hidden shadow-card cursor-pointer aspect-square">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-secondary-foreground text-sm font-medium">{image.category}</span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </AnimatePresence>
          </StaggerContainer>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)} className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4">
            <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 w-12 h-12 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors" aria-label="Close lightbox">
              <X className="h-6 w-6 text-foreground" />
            </button>
            <motion.img initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} src={selectedImage} alt="Gallery image" className="max-w-full max-h-[85vh] rounded-2xl shadow-large object-contain" onClick={(e) => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* <CTASection /> */}
    </Layout>
  );
}
