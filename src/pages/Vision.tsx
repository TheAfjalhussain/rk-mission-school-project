import { Layout } from "@/components/layout";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/home";
import { motion } from "framer-motion";
import {
  Eye,
  Target,
  Heart,
  Star,
  Users,
  BookOpen,
  Shield,
  Award,
  Download,
} from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { useEffect, useState, useRef } from "react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We cultivate empathy, kindness, and respect, ensuring that every student grows in a nurturing and supportive environment.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We inspire students to pursue academic excellence and personal growth with curiosity, dedication, and confidence.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We instill honesty, responsibility, and ethical decision-making as the foundation of character development.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We foster collaboration among students, teachers, and families to create a strong and inclusive school community.",
  },
];

const metrics = [
  { value: 500, suffix: "+", label: "Students" },
  { value: 30, suffix: "+", label: "Teachers" },
  { value: 15, suffix: ":1", label: "Student Ratio" },
  { value: 10, suffix: "+", label: "Years of Excellence" },
  { value: 50, suffix: "+", label: "Annual Events" },
  { value: 100, suffix: "%", label: "Board Pass Rate" },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // let start = 0;
          const duration = 1500;
          const startTime = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value]);

  return (
    <span
      ref={ref}
      className="font-heading text-4xl md:text-5xl font-bold text-primary"
    >
      {count}
      {suffix}
    </span>
  );
}

export default function Vision() {
  return (
    <Layout>

      {/* HERO */}

      <section className="relative py-24 bg-gradient-navy text-background overflow-hidden">

        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-3xl rounded-full" />

        <div className="section-container text-center">

          <AnimatedSection>

            <span className="inline-block px-5 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
              Our Purpose
            </span>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Vision & Mission
            </h1>

            <p className="text-lg text-background/80 max-w-2xl mx-auto leading-relaxed">
              At R.K. Mission School, our vision and mission guide every
              decision we make — shaping an educational experience that
              empowers students to grow academically, morally, and socially.
            </p>

          </AnimatedSection>

        </div>

      </section>

      {/* VISION + MISSION */}

      <section className="py-24 bg-background">

        <div className="section-container">

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

            <AnimatedSection direction="left">

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-3xl p-10 shadow-xl border border-primary/10"
              >

                <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-primary" />
                </div>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our vision is to be a leading educational institution that
                  inspires young minds to become confident, responsible, and
                  innovative individuals. We aim to nurture lifelong learners
                  who contribute positively to society while staying rooted in
                  strong ethical values and cultural heritage.
                </p>

              </motion.div>

            </AnimatedSection>

            <AnimatedSection direction="right">

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-3xl p-10 shadow-xl border border-secondary/10"
              >

                <div className="w-16 h-16 rounded-2xl bg-secondary-light flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-secondary" />
                </div>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>

                <ul className="space-y-3 text-muted-foreground text-lg">

                  <li>• Provide a safe, inclusive, and inspiring learning environment.</li>

                  <li>• Deliver high-quality CBSE curriculum with modern teaching methods.</li>

                  <li>• Encourage creativity, curiosity, and critical thinking.</li>

                  <li>• Develop leadership, teamwork, and social responsibility.</li>

                  <li>• Partner with parents to support every child’s success.</li>

                </ul>

              </motion.div>

            </AnimatedSection>

          </div>

        </div>

      </section>

      {/* PHILOSOPHY */}

      <section className="py-24 bg-cream">

        <div className="section-container">

          <AnimatedSection>

            <SectionHeading
              badge="Learning Philosophy"
              title="How Our Students Learn"
              subtitle="Our teaching approach blends structured academics with creativity, exploration, and hands-on learning."
            />

          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <AnimatedSection delay={0.1}>

              <div className="bg-card rounded-2xl p-8 shadow-lg">

                <BookOpen className="text-primary mb-4" />

                <h3 className="font-heading font-bold text-lg mb-2">
                  Early Years Learning
                </h3>

                <p className="text-muted-foreground text-sm">
                  Play-based and activity-driven learning that builds curiosity,
                  creativity, and confidence.
                </p>

              </div>

            </AnimatedSection>

            <AnimatedSection delay={0.2}>

              <div className="bg-card rounded-2xl p-8 shadow-lg">

                <Award className="text-secondary mb-4" />

                <h3 className="font-heading font-bold text-lg mb-2">
                  Activity-Based Education
                </h3>

                <p className="text-muted-foreground text-sm">
                  Project-based learning and collaborative work help students
                  understand concepts deeply.
                </p>

              </div>

            </AnimatedSection>

            <AnimatedSection delay={0.3}>

              <div className="bg-card rounded-2xl p-8 shadow-lg">

                <Target className="text-accent mb-4" />

                <h3 className="font-heading font-bold text-lg mb-2">
                  Academic Excellence
                </h3>

                <p className="text-muted-foreground text-sm">
                  Structured CBSE curriculum with strong conceptual clarity and
                  exam readiness.
                </p>

              </div>

            </AnimatedSection>

          </div>

        </div>

      </section>

      {/* VALUES */}

      <section className="py-24 bg-background">

        <div className="section-container">

          <AnimatedSection>

            <SectionHeading
              badge="Our Values"
              title="Principles That Guide Us"
            />

          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {values.map((v, i) => (

              <StaggerItem key={i}>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-card rounded-2xl p-8 shadow-lg text-center"
                >

                  <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-5">
                    <v.icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="font-heading font-bold mb-2">
                    {v.title}
                  </h3>

                  <p className="text-muted-foreground text-sm">
                    {v.description}
                  </p>

                </motion.div>

              </StaggerItem>

            ))}

          </StaggerContainer>

        </div>

      </section>

      {/* METRICS */}

      <section className="py-24 bg-gradient-navy text-background">

        <div className="section-container">

          <AnimatedSection className="text-center mb-14">

            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>

            <p className="text-background/70">
              A growing legacy of excellence in education.
            </p>

          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">

            {metrics.map((m, i) => (

              <AnimatedSection key={i} delay={i * 0.1}>

                <AnimatedCounter value={m.value} suffix={m.suffix} />

                <p className="text-background/70 text-sm mt-2">
                  {m.label}
                </p>

              </AnimatedSection>

            ))}

          </div>

        </div>

      </section>

      {/* DOWNLOAD */}

      <section className="py-20 bg-cream">

        <div className="section-container text-center">

          <AnimatedSection>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Download Our Vision Document
            </h2>

            <p className="text-muted-foreground mb-8">
              Learn more about our philosophy, academic approach, and long-term
              educational goals.
            </p>

            <PremiumButton size="lg">

              <Download className="mr-2 h-5 w-5" />

              Download Vision PDF

            </PremiumButton>

          </AnimatedSection>

        </div>

      </section>

      {/* <CTASection /> */}

    </Layout>
  );
}