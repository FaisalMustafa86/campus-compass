import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide mx-auto section-padding py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
               <div className="w-12 h-12 rounded-full overflow-hidden group-hover:scale-105 transition-transform bg-white/10">
              <img
                src="/nutechlogo.png"
                alt="NUtech Logo"
                className="w-full h-full object-contain"
              />
            </div>
              <div className="flex flex-col">
                <span className="text-lg font-heading font-bold leading-none">NUtech</span>
                <span className="text-xs text-primary-foreground/80">National University of Technology</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Serving the nation through quality education, research, and innovation in technology and engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Virtual Tour", path: "/tour" },
                { label: "Gallery", path: "/gallery" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>Sector I-12, Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+92 51 5476809</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>info@nutech.edu.pk</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Office Hours</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Monday - Friday: 8:30 AM - 4:30 PM</li>
              <li>Saturday: Closed</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-light/30 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} National University of Technology (NUtech). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;