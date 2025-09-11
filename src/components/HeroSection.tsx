import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/hero-driving.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full font-medium mb-4">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Summer 2025 Program
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Oasis Driving
                <span className="block bg-gradient-secondary bg-clip-text text-transparent">
                  Bootcamp
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Professional driving education program in Charm City. Master safe driving skills 
                with expert instructors in a supportive community environment.
              </p>
            </div>

            {/* Program highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4 text-center">
                <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-white font-medium">June - August</p>
                <p className="text-white/80 text-sm">3 Month Program</p>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4 text-center">
                <MapPin className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-white font-medium">Charm City</p>
                <p className="text-white/80 text-sm">Local Training</p>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4 text-center">
                <Users className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-white font-medium">Expert Team</p>
                <p className="text-white/80 text-sm">Certified Instructors</p>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Professional driving instruction" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <Card className="absolute -bottom-6 -left-6 bg-white p-6 shadow-glow">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-1">100%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Directors info */}
      <div className="absolute bottom-8 left-8 right-8">
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4">
          <p className="text-white/80 text-sm mb-2">Program Directors:</p>
          <div className="flex flex-wrap gap-4">
            <p className="text-white font-medium">James Lambert</p>
            <p className="text-white font-medium">Aminatu Abdullai</p>
          </div>
        </Card>
      </div>
    </section>
  );
};