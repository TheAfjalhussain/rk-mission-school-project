import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Monitor, Shield, Bus, Utensils, TreePine, Video, Heart, BookOpen, FlaskConical, Laptop } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import classroomImage from "@/assets/classroom.jpg";
import playzoneImage from "@/assets/playzone.jpg";
import outdoorImage from "@/assets/outdoor-play.jpg";

const facilities = [
  { icon: Monitor, title: "Smart Classrooms", description: "Equipped with interactive whiteboards, projectors, and modern learning stations for engaging education.", image: classroomImage, features: ["Interactive Whiteboards", "Projectors", "Learning Stations", "Child-Safe Furniture"] },
  { icon: TreePine, title: "Play Zones", description: "Vibrant indoor play areas for younger students with safe equipment encouraging physical activity.", image: playzoneImage, features: ["Safe Equipment", "Age-Appropriate", "Indoor Play", "Supervised"] },
  { icon: TreePine, title: "Outdoor Playground", description: "Spacious grounds with sports equipment for cricket, athletics, and outdoor games.", image: outdoorImage, features: ["Sports Ground", "Athletics Track", "Open Green Area", "Shaded Zones"] },
];

const safetyFeatures = [
  { icon: Video, title: "CCTV Monitoring", description: "Cameras across all areas for safety" },
  { icon: Shield, title: "Secure Entry", description: "Controlled access to campus" },
  { icon: Heart, title: "First Aid Ready", description: "Trained staff & emergency protocols" },
  { icon: Utensils, title: "Hygiene Standards", description: "Regular sanitisation of all areas" },
];

const additionalFacilities = [
  { icon: FlaskConical, title: "Science Lab", description: "Well-equipped laboratory for practical science learning and experiments" },
  { icon: Laptop, title: "Computer Lab", description: "Modern computers with internet access for digital literacy and IT education" },
  { icon: BookOpen, title: "Library", description: "Rich collection of books, reference materials, and reading space for students" },
  { icon: Bus, title: "Transport", description: "Safe school transport with trained drivers covering Nawada and nearby areas" },
];

export default function Facilities() {
  return (
    <Layout>
      <section className="relative py-24 bg-gradient-cool overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
        <div className="section-container relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-secondary-light text-secondary rounded-full text-sm font-semibold mb-4">Our Facilities</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Modern Spaces for Growing Minds</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our thoughtfully designed facilities support learning, play, and development at every level.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-container">
          {facilities.map((facility, index) => (
            <AnimatedSection key={index} className="mb-20 last:mb-0">
              <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
                <motion.div whileHover={{ scale: 1.02 }} className={`rounded-3xl overflow-hidden shadow-large ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img src={facility.image} alt={facility.title} className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
                </motion.div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center mb-5">
                    <facility.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">{facility.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{facility.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {facility.features.map((f, i) => (
                      <span key={i} className="px-4 py-2 bg-cream rounded-full text-sm font-medium text-foreground">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeading badge="Safety First" title="Your Child's Safety Is Our Priority" subtitle="We maintain the highest safety standards to give you complete peace of mind." />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {safetyFeatures.map((feature, index) => (
              <StaggerItem key={index}>
                <motion.div whileHover={{ y: -6 }} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center h-full">
                  <div className="w-14 h-14 bg-secondary-light rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <feature.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeading badge="Additional Facilities" title="More Ways We Support Learning" subtitle="Labs, library, and transport for a complete educational experience." />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {additionalFacilities.map((facility, index) => (
              <StaggerItem key={index}>
                <motion.div whileHover={{ y: -6 }} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-accent-light rounded-2xl flex items-center justify-center mb-5">
                    <facility.icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">{facility.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
