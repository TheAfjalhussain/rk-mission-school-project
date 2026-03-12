import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Palette, Music, BookOpen, Bike, PartyPopper, Globe, FlaskConical, Calculator, Languages, Drama, Leaf, Trophy } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import artImage from "@/assets/art-activity.jpg";
import outdoorImage from "@/assets/outdoor-play.jpg";

const learningActivities = [
  { icon: Calculator, title: "Math Olympiad", description: "Competitive math challenges and problem-solving workshops.", color: "bg-primary-light text-foreground" },
  { icon: Languages, title: "Language & Debate", description: "English and Hindi debate clubs, essay writing, and elocution.", color: "bg-secondary-light text-secondary" },
  { icon: FlaskConical, title: "Science Club", description: "Experiments, science fairs, and hands-on discovery sessions.", color: "bg-accent-light text-accent-foreground" },
  { icon: Trophy, title: "Inter-School Competitions", description: "Quiz competitions, sports meets, and cultural events.", color: "bg-sky-light text-sky" },
];

const creativeActivities = [
  { icon: Palette, title: "Art & Craft", description: "Painting, drawing, clay modeling, and craft projects.", color: "bg-lavender-light text-lavender" },
  { icon: Music, title: "Music & Dance", description: "Vocal, instrumental music, and classical/modern dance.", color: "bg-primary-light text-foreground" },
  { icon: Drama, title: "Drama & Theatre", description: "Annual plays, skits, and role-play for confidence building.", color: "bg-secondary-light text-secondary" },
  { icon: BookOpen, title: "Reading Club", description: "Library sessions, book reviews, and storytelling.", color: "bg-accent-light text-accent-foreground" },
];

const physicalActivities = [
  { icon: Bike, title: "Sports & Athletics", description: "Cricket, football, kabaddi, athletics, and annual sports day.", color: "bg-sky-light text-sky" },
  { icon: Leaf, title: "Yoga & PT", description: "Daily physical training and yoga sessions for fitness and focus.", color: "bg-secondary-light text-secondary" },
];

const specialEvents = [
  { icon: PartyPopper, title: "Annual Day & Festivals", description: "Republic Day, Independence Day, annual cultural programme, and festival celebrations." },
  { icon: Globe, title: "Field Trips & Excursions", description: "Educational visits to historical sites, museums, and nature trips." },
];

export default function Activities() {
  return (
    <Layout>
      <section className="relative py-24 bg-gradient-warm overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="section-container relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-accent-light text-accent-foreground rounded-full text-sm font-semibold mb-4">Activities & Events</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Beyond the Classroom</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A rich variety of co-curricular and extra-curricular activities that build confidence, creativity, and character.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-container">
          <AnimatedSection><SectionHeading badge="Academic" title="Competitive & Academic Activities" subtitle="Preparing students for excellence beyond the classroom." /></AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {learningActivities.map((a, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ y: -8 }} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                  <div className={`w-14 h-14 ${a.color} rounded-2xl flex items-center justify-center mb-5`}><a.icon className="h-7 w-7" /></div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">{a.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{a.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <img src={artImage} alt="Creative activities at R.K. Mission School" className="rounded-3xl shadow-large w-full" loading="lazy" />
            </AnimatedSection>
            <div>
              <AnimatedSection><SectionHeading badge="Creative" title="Creative Expression" subtitle="Nurturing imagination and artistic talent." centered={false} /></AnimatedSection>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {creativeActivities.map((a, i) => (
                  <StaggerItem key={i}>
                    <motion.div whileHover={{ x: 4 }} className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
                      <div className={`w-12 h-12 ${a.color} rounded-xl flex items-center justify-center flex-shrink-0`}><a.icon className="h-6 w-6" /></div>
                      <div><h3 className="font-heading font-bold text-foreground mb-1">{a.title}</h3><p className="text-muted-foreground text-sm">{a.description}</p></div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <AnimatedSection><SectionHeading badge="Physical" title="Sports & Fitness" subtitle="Building healthy bodies and team spirit." centered={false} /></AnimatedSection>
              <StaggerContainer className="grid grid-cols-1 gap-4 mt-8">
                {physicalActivities.map((a, i) => (
                  <StaggerItem key={i}>
                    <motion.div whileHover={{ x: 4 }} className="flex items-start gap-4 p-4 bg-cream rounded-xl">
                      <div className={`w-12 h-12 ${a.color} rounded-xl flex items-center justify-center flex-shrink-0`}><a.icon className="h-6 w-6" /></div>
                      <div><h3 className="font-heading font-bold text-foreground mb-1">{a.title}</h3><p className="text-muted-foreground text-sm">{a.description}</p></div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
            <AnimatedSection direction="right" className="order-1 lg:order-2">
              <img src={outdoorImage} alt="Sports at R.K. Mission School" className="rounded-3xl shadow-large w-full" loading="lazy" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-cool">
        <div className="section-container">
          <AnimatedSection><SectionHeading badge="Special Events" title="Celebrations & Experiences" subtitle="Creating memorable moments through festivals, field trips, and annual events." /></AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 max-w-4xl mx-auto">
            {specialEvents.map((e, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ y: -6 }} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mb-5"><e.icon className="h-8 w-8 text-primary" /></div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">{e.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{e.description}</p>
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
