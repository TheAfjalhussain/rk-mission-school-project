import { motion } from "framer-motion";
import { Shield, Users, BookOpen, Award, HeartHandshake, Video } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  { icon: Shield, title: "Safe & Secure", description: "CCTV monitoring, secure entry, and trained staff ensure your child's safety at all times.", color: "bg-secondary" },
  { icon: Users, title: "Experienced Teachers", description: "Qualified and passionate educators dedicated to nurturing every student's potential.", color: "bg-primary" },
  { icon: BookOpen, title: "CBSE & NCERT", description: "Structured curriculum following CBSE standards and NCERT pattern for academic excellence.", color: "bg-accent" },
  { icon: Award, title: "Holistic Development", description: "Beyond academics — sports, arts, and values-based education for well-rounded growth.", color: "bg-sky" },
  { icon: Video, title: "Smart Classrooms", description: "Technology-enabled learning with interactive whiteboards and digital resources.", color: "bg-lavender" },
  { icon: HeartHandshake, title: "Parent Partnership", description: "Regular PTMs, progress reports, and open communication to support your child's journey.", color: "bg-secondary" },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            badge="Why R.K. Mission"
            title="The Right Choice for Your Child"
            subtitle="We combine safety, strong academics, and a caring environment to help every child thrive."
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-5`}>
                  <feature.icon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
