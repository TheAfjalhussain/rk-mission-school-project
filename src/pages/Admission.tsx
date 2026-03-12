import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ClipboardList, Eye, MessageSquare, CheckCircle, Download, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import { useState } from "react";
import { Link } from "react-router-dom";

const steps = [
  { icon: ClipboardList, title: "1. Submit Enquiry", description: "Fill the online enquiry form or visit our office with your child's details." },
  { icon: Eye, title: "2. Campus Visit", description: "Schedule a visit to tour our campus and meet the teaching staff." },
  { icon: MessageSquare, title: "3. Interaction", description: "A brief interaction session to understand your child's readiness." },
  { icon: CheckCircle, title: "4. Confirmation", description: "Complete the registration and fee payment to confirm admission." },
];

const documents = [
  "Birth Certificate (original + photocopy)",
  "Aadhar Card of child and parents",
  "Transfer Certificate (if applicable)",
  "Previous school report card",
  "Passport-size photographs (4 nos.)",
  "Address proof (Electricity bill / Voter ID)",
];

const eligibility = [
  { group: "Play / Nursery", age: "3 – 5 years" },
  { group: "Class I", age: "5+ years as on 31st March" },
  { group: "Class II – V", age: "Age-appropriate" },
  { group: "Class VI – VIII", age: "Age-appropriate with TC" },
  { group: "Class IX – X", age: "Age-appropriate with TC & marksheet" },
];

export default function Admission() {
  const [formData, setFormData] = useState({ parentName: "", phone: "", email: "", childName: "", childAge: "", classApplying: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your enquiry has been submitted. We will contact you shortly.");
    setFormData({ parentName: "", phone: "", email: "", childName: "", childAge: "", classApplying: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <section className="relative py-24 bg-gradient-warm overflow-hidden">
        <div className="section-container relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary-light text-foreground rounded-full text-sm font-semibold mb-4">Admissions Open</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Join R.K. Mission School</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Secure a seat for your child — limited intake for each class. CBSE curriculum, Play to Class X.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <AnimatedSection><SectionHeading badge="Process" title="Admission in 4 Simple Steps" subtitle="A straightforward process to welcome your child to R.K. Mission School." /></AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {steps.map((step, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ y: -6 }} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center h-full">
                  <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-5"><step.icon className="h-8 w-8 text-primary" /></div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-20 bg-cream">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Age Groups & Eligibility</h2>
              <div className="space-y-3">
                {eligibility.map((e, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-card rounded-xl shadow-soft">
                    <span className="font-heading font-bold text-foreground">{e.group}</span>
                    <span className="text-muted-foreground text-sm">{e.age}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Documents Required</h2>
              <ul className="space-y-3">
                {documents.map((doc, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 bg-card rounded-xl shadow-soft">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{doc}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold shadow-soft hover:shadow-medium transition-all">
                <Download className="h-5 w-5" /> Download Fee Schedule (PDF)
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Online Enquiry Form */}
      <section className="py-20 bg-background">
        <div className="section-container max-w-3xl mx-auto">
          <AnimatedSection>
            <SectionHeading badge="Apply Now" title="Online Admission Enquiry" subtitle="Fill in the details below and our admissions team will reach out to you." />
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-card rounded-3xl p-8 shadow-large mt-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="parentName" className="block text-sm font-medium text-foreground mb-2">Parent / Guardian Name *</label>
                    <input type="text" id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} required maxLength={100} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Full Name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="childName" className="block text-sm font-medium text-foreground mb-2">Child's Name *</label>
                    <input type="text" id="childName" name="childName" value={formData.childName} onChange={handleChange} required maxLength={100} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Child's Name" />
                  </div>
                  <div>
                    <label htmlFor="classApplying" className="block text-sm font-medium text-foreground mb-2">Class Applying For *</label>
                    <select id="classApplying" name="classApplying" value={formData.classApplying} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option value="">Select Class</option>
                      <option value="Play/Nursery">Play / Nursery</option>
                      <option value="Class I">Class I</option>
                      <option value="Class II">Class II</option>
                      <option value="Class III">Class III</option>
                      <option value="Class IV">Class IV</option>
                      <option value="Class V">Class V</option>
                      <option value="Class VI">Class VI</option>
                      <option value="Class VII">Class VII</option>
                      <option value="Class VIII">Class VIII</option>
                      <option value="Class IX">Class IX</option>
                      <option value="Class X">Class X</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email (optional)</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} maxLength={255} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Any Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={3} maxLength={1000} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" placeholder="Any specific questions or requirements..." />
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-soft hover:shadow-medium transition-all flex items-center justify-center gap-2">
                  Submit Enquiry <ArrowRight className="h-5 w-5" />
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* <CTASection /> */}
    </Layout>
  );
}
