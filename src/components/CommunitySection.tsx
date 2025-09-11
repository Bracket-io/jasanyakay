import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Star, MessageCircle } from "lucide-react";
import communityImage from "@/assets/community-learning.jpg";

export const CommunitySection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Graduate 2024",
      content: "The supportive community at Oasis made all the difference. I went from nervous beginner to confident driver!",
      rating: 5
    },
    {
      name: "Marcus Williams",
      role: "Graduate 2024", 
      content: "James and Aminatu are incredible instructors. They really care about each student's success.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Graduate 2023",
      content: "Best investment I've made. The skills I learned here keep me safe on the road every day.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Community</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Essence of
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              Our Community
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            More than just driving lessons - we're building a community of safe, 
            confident drivers who support each other on and off the road.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left content */}
          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <Card className="p-6 text-center bg-gradient-primary text-primary-foreground">
                <Heart className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-2xl font-bold mb-1">250+</h3>
                <p className="text-sm opacity-90">Lives Changed</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="text-2xl font-bold mb-1">98%</h3>
                <p className="text-sm text-muted-foreground">Pass Rate</p>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mb-4">Why Choose Our Community?</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Peer support groups and study sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Alumni mentor program</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Ongoing safety workshops</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Community driving events</span>
              </li>
            </ul>

            <Button variant="cta" size="lg">
              Join Our Community
            </Button>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={communityImage} 
                alt="Community learning environment" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">What Our Graduates Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-smooth">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};