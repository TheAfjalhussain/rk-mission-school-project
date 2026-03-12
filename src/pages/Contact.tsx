import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Mail, title: "Email", details: ["rkmissionnwd@gmail.com"], action: "mailto:rkmissionnwd@gmail.com" },
  { icon: MapPin, title: "Address", details: ["Rajendra Nagar, Near Bhagat Singh Chowk", "(In Old LIC Office), Nawada - 805110"], action: "https://maps.google.com/?q=Nawada+Bihar" },
  { icon: Clock, title: "School Hours", details: ["Monday – Saturday: 9:00 AM – 3:00 PM", "Office: 8:00 AM – 4:00 PM"], action: null },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", relation: "", phone: "", email: "", childAge: "", preferredTime: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry! We'll get back to you soon.");
    setFormData({ name: "", relation: "", phone: "", email: "", childAge: "", preferredTime: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <section className="relative py-24 bg-gradient-cool overflow-hidden">
        <div className="section-container relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-secondary-light text-secondary rounded-full text-sm font-semibold mb-4">Contact Us</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">We'd Love to Hear from You</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about admissions, want to schedule a campus visit, or need more information? Reach out to us.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <div className="bg-card rounded-3xl p-8 shadow-large">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required maxLength={100} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Full Name" />
                    </div>
                    <div>
                      <label htmlFor="relation" className="block text-sm font-medium text-foreground mb-2">Relation to Child</label>
                      <select id="relation" name="relation" value={formData.relation} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                        <option value="">Select</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Guardian">Guardian</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} maxLength={255} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="childAge" className="block text-sm font-medium text-foreground mb-2">Child's Class / Age</label>
                      <select id="childAge" name="childAge" value={formData.childAge} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                        <option value="">Select</option>
                        <option value="Play/Nursery">Play / Nursery (3-5 yrs)</option>
                        <option value="Class I-V">Class I – V</option>
                        <option value="Class VI-VIII">Class VI – VIII</option>
                        <option value="Class IX-X">Class IX – X</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground mb-2">Preferred Visit Time</label>
                      <input type="text" id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="e.g., Mon 10 AM" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Your Message *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} maxLength={1000} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell us how we can help you..." />
                  </div>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-soft hover:shadow-medium transition-all flex items-center justify-center gap-2">
                    <Send className="h-5 w-5" /> Send Enquiry
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>

            <div className="space-y-6">
              <AnimatedSection><SectionHeading title="Get in Touch" subtitle="Reach out through any of these channels." centered={false} /></AnimatedSection>
              <StaggerContainer className="space-y-4">
                {contactInfo.map((info, i) => (
                  <StaggerItem key={i}>
                    <motion.div whileHover={{ x: 4 }} className="flex items-start gap-4 p-5 bg-cream rounded-2xl">
                      <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0"><info.icon className="h-6 w-6 text-primary" /></div>
                      <div><h3 className="font-heading font-bold text-foreground mb-1">{info.title}</h3>{info.details.map((d, j) => (<p key={j} className="text-muted-foreground text-sm">{d}</p>))}</div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Prospectus Download */}
              <AnimatedSection>
                <div className="bg-gradient-warm rounded-2xl p-6 text-center">
                  <h3 className="font-heading font-bold text-foreground mb-2">Download Prospectus</h3>
                  <p className="text-muted-foreground text-sm mb-4">Get fee details, curriculum info, and more.</p>
                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold shadow-soft hover:shadow-medium transition-all">
                    Download PDF
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream">
        <div className="section-container">
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden shadow-large h-[400px] bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Find Us Here</h3>
                <p className="text-muted-foreground">Rajendra Nagar, Near Bhagat Singh Chowk, Nawada - 805110</p>
                <a href="https://maps.google.com/?q=Nawada+Bihar+805110" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary-dark transition-colors">
                  Open in Google Maps
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gradient-sunset">
        <div className="section-container">
          <AnimatedSection className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Schedule a Campus Visit</h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">The best way to experience R.K. Mission School is to visit us. Book a tour and see our campus in action.</p>
            <motion.button whileHover={{ scale: 1.02 }} className="px-8 py-4 bg-card text-foreground rounded-full font-semibold shadow-soft hover:shadow-medium transition-all">Book a Visit Today</motion.button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
