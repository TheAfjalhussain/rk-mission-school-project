import { Layout } from "@/components/layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Calendar, Download, Search } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import { useState } from "react";

const allNotices = [
  { title: "Admission Open for Session 2025-26", date: "March 1, 2025", category: "Admissions", description: "Applications are now being accepted for Play to Class X. Limited seats available." },
  { title: "Annual Sports Day — April 15", date: "Feb 20, 2025", category: "Events", description: "All students are invited to participate. Parents welcome to attend." },
  { title: "Parent-Teacher Meeting Schedule", date: "Feb 10, 2025", category: "Academic", description: "PTM scheduled for all classes. Please check class-wise dates." },
  { title: "Winter Vacation Notice", date: "Dec 15, 2024", category: "Academic", description: "School will remain closed from Dec 25 to Jan 5. Classes resume Jan 6." },
  { title: "Republic Day Celebration", date: "Jan 20, 2025", category: "Events", description: "Flag hoisting ceremony and cultural programme on Jan 26." },
  { title: "Fee Payment Reminder", date: "Jan 5, 2025", category: "Admissions", description: "Parents are requested to clear pending fee by Jan 15." },
];

const categories = ["All", "Academic", "Events", "Admissions"];

export default function Notices() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = allNotices.filter(n => {
    const matchesCategory = activeCategory === "All" || n.category === activeCategory;
    const matchesSearch = n.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <section className="relative py-24 bg-gradient-warm overflow-hidden">
        <div className="section-container relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary-light text-foreground rounded-full text-sm font-semibold mb-4">Notices</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Notices & Updates</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Stay informed about the latest happenings at R.K. Mission School.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-container max-w-4xl mx-auto">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search notices..." className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-cream text-foreground hover:bg-primary-light"}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Notice List */}
          <div className="space-y-4">
            {filtered.map((notice, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-primary-light text-foreground rounded-full text-xs font-semibold">{notice.category}</span>
                        <span className="flex items-center gap-1 text-muted-foreground text-xs"><Calendar className="h-3 w-3" />{notice.date}</span>
                      </div>
                      <h3 className="font-heading font-bold text-foreground mb-2">{notice.title}</h3>
                      <p className="text-muted-foreground text-sm">{notice.description}</p>
                    </div>
                    <button className="flex-shrink-0 w-10 h-10 bg-cream rounded-xl flex items-center justify-center hover:bg-primary-light transition-colors" aria-label="Download">
                      <Download className="h-5 w-5 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
            {filtered.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">No notices found matching your criteria.</div>
            )}
          </div>
        </div>
      </section>

      {/* <CTASection /> */}
    </Layout>
  );
}
