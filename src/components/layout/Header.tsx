import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown, Youtube, Instagram, Facebook, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
  name: string;
  path: string;
  children?: { name: string; path: string }[];
}

const navLinks: NavItem[] = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/about",
    children: [
      { name: "About School", path: "/about" },
      { name: "Vision & Mission", path: "/vision" },
      { name: "Teachers", path: "/teachers" },
    ],
  },
  {
    name: "Academics",
    path: "/academics",
    children: [
      { name: "Curriculum", path: "/academics" },
      { name: "Admission", path: "/admission" },
    ],
  },
  { name: "Facilities", path: "/facilities" },
  { name: "Activities", path: "/activities" },
  { name: "Gallery", path: "/gallery" },
  {
    name: "More",
    path: "#",
    children: [
      { name: "Testimonials", path: "/testimonials" },
      { name: "Notices", path: "/notices" },
      { name: "FAQ", path: "/faq" }
    ],
  },
  { name: "Contact", path: "/contact" },
];

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();

  const isActive = location.pathname === item.path || item.children?.some((c) => location.pathname === c.path);

  return (
    <div
      className="relative"
      onMouseEnter={() => { clearTimeout(timeoutRef.current); setOpen(true); }}
      onMouseLeave={() => { timeoutRef.current = setTimeout(() => setOpen(false), 150); }}
    >
      <Link
        to={item.path === "#" ? "#" : item.path}
        onClick={(e) => { if (item.path === "#") e.preventDefault(); }}
        className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
          isActive ? "bg-primary/15 text-primary-foreground font-bold" : "text-foreground/80 hover:text-foreground hover:bg-muted"
        }`}
      >
        {item.name}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 w-48 bg-card rounded-xl shadow-large border border-border overflow-hidden z-50"
          >
            {item.children!.map((child) => (
              <Link
                key={child.path}
                to={child.path}
                className={`block px-4 py-3 text-sm transition-colors ${
                  location.pathname === child.path
                    ? "bg-primary/10 text-foreground font-semibold"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {child.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMobile(null);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
       <div className="w-full bg-yellow-400 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+911234567890" className="flex items-center gap-2 hover:opacity-90 transition-opacity" aria-label="phone">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 12345 67890</span>
              </a>
              <a href="mailto:rkmissionnwd@gmail.com" className="flex items-center gap-2 hover:opacity-90 transition-opacity" aria-label="email">
                <Mail className="w-4 h-4" />
                <span className="font-medium">rkmissionnwd@gmail.com</span>
              </a>
              {/* <div className="hidden md:flex items-center gap-2 text-xs text-gray-800/90">
                <MapPin className="w-4 h-4" />
                <span>Check Location</span>
              </div> */}
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-xs">
                <Clock className="w-4 h-4" />
                <span>Mon - Sat: 9:00 AM - 3:00 PM</span>
              </div>

              <div className="flex items-center gap-3">
                <a href="#" aria-label="facebook" className="hidden sm:inline-flex items-center gap-1 hover:opacity-90">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" aria-label="instagram" className="hidden sm:inline-flex items-center gap-1 hover:opacity-90">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Youtube" className="hidden sm:inline-flex items-center gap-1 hover:opacity-90">
                  <Youtube className="w-4 h-4" />
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-card/95 backdrop-blur-md shadow-medium" : "bg-background"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-sunset rounded-2xl flex items-center justify-center shadow-soft">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-foreground">R.K. Mission School</span>
                {/* <span className="block text-xs text-muted-foreground font-medium">An English Medium School</span> */}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <DesktopDropdown key={link.name} item={link} />
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                      location.pathname === link.path
                        ? "bg-primary/15 text-primary-foreground font-bold"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/admission">
                <Button variant="default" size="lg" className="rounded-full font-semibold shadow-soft hover:shadow-medium transition-all">
                  Enroll Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <nav className="section-container py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.children ? (
                      <>
                        <button
                          onClick={() => setExpandedMobile(expandedMobile === link.name ? null : link.name)}
                          className={`flex items-center justify-between w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                            link.children.some((c) => location.pathname === c.path)
                              ? "bg-primary/15 text-primary-foreground font-bold"
                              : "text-foreground/80 hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          {link.name}
                          <ChevronDown className={`h-4 w-4 transition-transform ${expandedMobile === link.name ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {expandedMobile === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className={`block pl-8 pr-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                                    location.pathname === child.path
                                      ? "text-foreground font-semibold"
                                      : "text-muted-foreground hover:text-foreground"
                                  }`}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                          location.pathname === link.path
                            ? "bg-primary/15 text-primary-foreground font-bold"
                            : "text-foreground/80 hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Link to="/admission">
                    <Button variant="default" size="lg" className="w-full rounded-full font-semibold">
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
