import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Virtual Tour", path: "/tour" },
  { label: "Gallery", path: "/gallery" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-navy-light/30">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-accent-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-heading font-bold text-primary-foreground">
                Prestige University
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-accent text-accent-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-navy-light/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary-foreground hover:bg-navy-light/50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary border-t border-navy-light/30 overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-accent text-accent-foreground"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-navy-light/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
