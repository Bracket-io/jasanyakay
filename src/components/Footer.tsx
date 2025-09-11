import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-sm">O</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Oasis Driving</h3>
                <p className="text-sm opacity-90">Bootcamp</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Empowering safe, confident drivers in Charm City through 
              comprehensive education and community support.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#overview" className="opacity-90 hover:opacity-100 transition-smooth">Program Overview</a></li>
              <li><a href="#program" className="opacity-90 hover:opacity-100 transition-smooth">Core Sessions</a></li>
              <li><a href="#community" className="opacity-90 hover:opacity-100 transition-smooth">Community</a></li>
              <li><a href="#apply" className="opacity-90 hover:opacity-100 transition-smooth">Apply Now</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-smooth">Training Checklist</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-smooth">Driving Handbook</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-smooth">Learner Agreement</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-smooth">Mentor Agreement</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-smooth">FAQ</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-smooth">Safety Guidelines</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 opacity-90" />
                <span className="opacity-90">info@oasisdriving.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 opacity-90" />
                <span className="opacity-90">(410) 555-0123</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 opacity-90 mt-0.5" />
                <span className="opacity-90">
                  123 Driving School Lane<br />
                  Baltimore, MD 21201
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-medium mb-2">Program Directors</h5>
              <p className="text-sm opacity-90">James Lambert</p>
              <p className="text-sm opacity-90">Aminatu Abdullai</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
          <p>&copy; 2025 Oasis Driving Bootcamp. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-smooth">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-smooth">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};