import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Twitter, Instagram, Youtube, BookOpen, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-2xl mb-4">Kay Jasanya</h3>
            <p className="text-sm opacity-90 mb-4">
              Product Leader & Data Strategist helping founders build 
              products that scale through data-driven strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#work" className="opacity-90 hover:opacity-100 transition-smooth">Work</a></li>
              <li><a href="#thoughts" className="opacity-90 hover:opacity-100 transition-smooth">Thoughts</a></li>
              <li><a href="#cases" className="opacity-90 hover:opacity-100 transition-smooth">Cases</a></li>
              <li><a href="#contact" className="opacity-90 hover:opacity-100 transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-3 flex-wrap">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <BookOpen className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
            <div className="mt-6">
              <Button variant="outline" className="w-full bg-white/10 text-white border-white/30 hover:bg-white/20">
                <Mail className="w-4 h-4 mr-2" />
                Newsletter
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
          <p>&copy; 2025 Kay Jasanya. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-smooth">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};