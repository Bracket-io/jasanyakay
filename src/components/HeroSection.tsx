import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Linkedin, Github, Mail, ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
      
      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Product Leader & Data Strategist
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-bold mb-4 leading-tight">
            Kay <span className="text-primary">Jasanya</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-3 text-muted-foreground mb-8">
            <span>Venture Capital</span>
            <span>•</span>
            <span>Product Strategy</span>
            <span>•</span>
            <span>Data Science</span>
            <span>•</span>
            <span>Startup Advisory</span>
          </div>
          
          <p className="text-xl text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transforming startups through data-driven product strategies and strategic investments. 
            I help founders build products that scale, leveraging deep analytics and market insights 
            to drive exceptional growth and user engagement.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="text-lg px-8 py-6">
            <Mail className="w-5 h-5 mr-2" />
            Partner With Me
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            View Portfolio
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center mb-16">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mail className="w-5 h-5" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>

      {/* Profile image floating card - optional */}
      <Card className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-2 shadow-glow hidden lg:block">
        <div className="w-24 h-24 bg-primary/10 rounded-full"></div>
      </Card>
    </section>
  );
};
