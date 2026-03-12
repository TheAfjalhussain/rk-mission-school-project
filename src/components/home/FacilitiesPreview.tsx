import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PremiumButton } from "@/components/ui/premium-button";
import classroomImage from "@/assets/classroom.jpg";
import playzoneImage from "@/assets/playzone.jpg";
import outdoorImage from "@/assets/outdoor-play.jpg";

const facilities = [
  { title: "Smart Classrooms", description: "Interactive whiteboards and modern learning stations for engaged education.", image: classroomImage },
  { title: "Play Zones", description: "Safe, colourful play areas designed for physical activity and social development.", image: playzoneImage },
  { title: "Outdoor Playground", description: "Spacious grounds with age-appropriate equipment for active play and sports.", image: outdoorImage },
];

export function FacilitiesPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading badge="Our Facilities" title="World-Class Spaces for Young Minds" subtitle="State-of-the-art facilities designed to inspire curiosity, creativity, and academic excellence." />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {facilities.map((facility, index) => (
            <StaggerItem key={index}>
              <motion.div whileHover={{ y: -8 }} className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={facility.image} alt={facility.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-secondary-foreground">
                  <h3 className="font-heading text-xl font-bold mb-2">{facility.title}</h3>
                  <p className="text-sm opacity-90">{facility.description}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Link to="/facilities">
            <PremiumButton variant="outline" className="group">
              Explore All Facilities
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </PremiumButton>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
