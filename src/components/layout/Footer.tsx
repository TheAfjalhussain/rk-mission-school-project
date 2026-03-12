import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Vision & Mission", path: "/vision" },
  { name: "Academics", path: "/academics" },
  { name: "Admission", path: "/admission" },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
];

const moreLinks = [
  { name: "Our Teachers", path: "/teachers" },
  { name: "Activities & Events", path: "/activities" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Notices", path: "/notices" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact Us", path: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-background">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-sunset rounded-2xl flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl">R.K. Mission School</span>
                <span className="block text-xs opacity-70 font-medium">An English Medium School</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              CBSE Curriculum • NCERT Pattern • Play to Class X.
              Where curiosity meets care and every child's potential is nurtured.
            </p>
            <p className="text-background/50 text-xs">
              Run by: Swami Vivekanand Educational & Social Welfare
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Social media">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">More</h4>
            <ul className="space-y-3">
              {moreLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  Rajendra Nagar, Near Bhagat Singh Chowk<br />
                  (In Old LIC Office), Nawada - 805110
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:rkmissionnwd@gmail.com" className="text-background/70 hover:text-primary transition-colors text-sm">
                  rkmissionnwd@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+911234567890" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Call Admissions
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/70 text-sm">Mon – Sat: 9:00 AM – 3:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="section-container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} R.K. Mission School. All rights reserved.
          </p>
          <div>
               <a
                href="https://growthix.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md text-gray-400 flex items-center justify-center flex-wrap hover:text-blue-800 "
              >
               <div className="mt-2">Designed & Developed By :   <span className="font-medium">Growthix.in</span></div>
             </a>
           </div>
          <div className="flex items-center gap-6 text-sm">
            <Link to="#" className="text-background/50 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-background/50 hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="#" className="text-background/50 hover:text-primary transition-colors">Admission Policy</Link>
          </div>
        </div>
           
      </div>
    </footer>
  );
}
