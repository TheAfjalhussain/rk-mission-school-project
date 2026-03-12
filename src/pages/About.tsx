import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Target,
  Eye,
  Heart,
  BookOpen,
  Users,
  Award,
} from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const timeline = [
  {
    year: "Foundation",
    title: "Our Humble Beginning",
    description:
      "R.K. Mission School was established with a vision to provide quality English-medium education to students in Nawada and surrounding communities.",
  },
  {
    year: "Academic Growth",
    title: "Expanding Educational Excellence",
    description:
      "The school expanded its curriculum and infrastructure, introducing classes up to Class X with a strong CBSE-based academic framework.",
  },
  {
    year: "Modern Facilities",
    title: "Building a Future-Ready Campus",
    description:
      "Smart classrooms, science laboratories, computer labs, and activity-based learning environments were introduced to enhance student learning.",
  },
  {
    year: "Today",
    title: "A Trusted Educational Institution",
    description:
      "Today, R.K. Mission School proudly serves hundreds of families, providing holistic education focused on academic success and character building.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Care & Discipline",
    description:
      "We nurture students in a caring and disciplined environment that promotes respect, responsibility, and strong moral values.",
  },
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "Our CBSE-aligned curriculum ensures strong academic foundations while encouraging curiosity and lifelong learning.",
  },
  {
    icon: Users,
    title: "Strong Community",
    description:
      "We build meaningful relationships among students, parents, and teachers to create a supportive educational ecosystem.",
  },
  {
    icon: Award,
    title: "Holistic Development",
    description:
      "We focus on intellectual, emotional, physical, and social development to shape confident and responsible individuals.",
  },
];

export default function About() {
  return (
    <Layout>

      {/* HERO SECTION */}

      <section className="relative py-28 bg-gradient-warm overflow-hidden">

        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

        <div className="section-container relative">

          <AnimatedSection className="text-center max-w-4xl mx-auto">

            <span className="inline-block px-5 py-2 bg-primary-light text-foreground rounded-full text-sm font-semibold mb-6">
              About R.K. Mission School
            </span>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Shaping Young Minds <br /> For a Brighter Future
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              R.K. Mission School, Nawada is a leading English-medium institution
              dedicated to providing high-quality education from Play Group to
              Class X following the CBSE curriculum.  

              Managed by the **Swami Vivekanand Educational & Social Welfare Trust**,  
              the school focuses on developing confident, knowledgeable, and
              responsible students through modern teaching methods, strong values,
              and a nurturing learning environment.
            </p>

          </AnimatedSection>

        </div>

      </section>

      {/* VISION & MISSION */}

      <section className="py-24 bg-background">

        <div className="section-container">

          <div className="grid md:grid-cols-2 gap-12">

            <AnimatedSection direction="left">

              <div className="bg-primary-light rounded-3xl p-10 h-full shadow-card">

                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-primary-foreground" />
                </div>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Our vision is to become a leading educational institution that
                  inspires young minds to dream big, think critically, and act
                  responsibly. We strive to nurture confident individuals who
                  contribute positively to society and the nation.
                </p>

              </div>

            </AnimatedSection>

            <AnimatedSection direction="right">

              <div className="bg-secondary-light rounded-3xl p-10 h-full shadow-card">

                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-secondary-foreground" />
                </div>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to provide a safe, inclusive, and inspiring
                  learning environment where students develop academic excellence,
                  creativity, and strong moral values while preparing for future
                  challenges in an ever-changing world.
                </p>

              </div>

            </AnimatedSection>

          </div>

        </div>

      </section>

      {/* PRINCIPAL MESSAGE */}

      <section className="py-24 bg-cream">

        <div className="section-container">

          <AnimatedSection>

            <div className="max-w-4xl mx-auto text-center">

              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-secondary-foreground">
                  P
                </span>
              </div>

              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Message from the Principal
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed italic mb-6">

                "Education is not just about academic success; it is about shaping
                character, building confidence, and inspiring lifelong learning.

                At R.K. Mission School, our dedicated teachers and modern
                facilities create an environment where every child can discover
                their potential and grow into responsible leaders of tomorrow.
                We are proud to serve the families of Nawada and contribute to
                the future of our community."

              </p>

              <p className="font-heading font-bold text-foreground">
                Principal
              </p>

              <p className="text-sm text-muted-foreground">
                R.K. Mission School, Nawada
              </p>

            </div>

          </AnimatedSection>

        </div>

      </section>

      {/* VALUES */}

      <section className="py-24 bg-background">

        <div className="section-container">

          <AnimatedSection>

            <SectionHeading
              badge="Our Core Values"
              title="Principles That Guide Us"
              subtitle="The foundation of our educational philosophy and daily practices."
            />

          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {values.map((value, index) => (

              <StaggerItem key={index}>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 text-center h-full"
                >

                  <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                    {value.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>

                </motion.div>

              </StaggerItem>

            ))}

          </StaggerContainer>

        </div>

      </section>

      {/* TIMELINE */}

      <section className="py-24 bg-gradient-warm">

        <div className="section-container">

          <AnimatedSection>

            <SectionHeading
              badge="Our Journey"
              title="Milestones of Growth"
              subtitle="Key moments that shaped the success of R.K. Mission School."
            />

          </AnimatedSection>

          <div className="max-w-4xl mx-auto mt-16">

            <div className="relative">

              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block" />

              {timeline.map((item, index) => (

                <AnimatedSection key={index} delay={index * 0.1}>

                  <div className={`flex items-center gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>

                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>

                      <div className="bg-card rounded-2xl p-6 shadow-card inline-block">

                        <span className="text-primary font-bold text-lg">
                          {item.year}
                        </span>

                        <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                          {item.title}
                        </h3>

                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>

                      </div>

                    </div>

                    <div className="w-4 h-4 bg-primary rounded-full hidden md:block relative z-10" />

                    <div className="flex-1 hidden md:block" />

                  </div>

                </AnimatedSection>

              ))}

            </div>

          </div>

        </div>

      </section>

      <CTASection />

    </Layout>
  );
}