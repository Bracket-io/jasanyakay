import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Calendar, Linkedin, ArrowRight } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's Build Something Great</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're a founder looking for strategic investment, a company seeking product 
            transformation, or an organization needing data-driven growth strategies, I'm here to 
            help you succeed. Let's explore how we can create exceptional value together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-8 text-center hover:shadow-elegant transition-shadow">
            <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Strategic Consultation</h3>
            <p className="text-muted-foreground mb-6">
              Book a 30-minute call to discuss investment opportunities or product strategy
            </p>
            <Button variant="outline" className="w-full" asChild>
              <a href="https://calendly.com/jaskay" target="_blank" rel="noopener noreferrer">
                Schedule Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </Card>

          <Card className="p-8 text-center hover:shadow-elegant transition-shadow">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Partnership Inquiry</h3>
            <p className="text-muted-foreground mb-6">
              Connect for investment opportunities, advisory roles, or strategic partnerships
            </p>
            <Button variant="outline" className="w-full" asChild>
              <a href="mailto:iamjasanyakay@gmail.com">
                Send Email
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </Card>

          <Card className="p-8 text-center hover:shadow-elegant transition-shadow">
            <Linkedin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Professional Network</h3>
            <p className="text-muted-foreground mb-6">
              Connect for industry insights, thought leadership, and professional opportunities
            </p>
            <Button variant="outline" className="w-full" asChild>
              <a href="https://www.linkedin.com/in/jaskay/" target="_blank" rel="noopener noreferrer">
                Connect
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </Card>
        </div>

        <Card className="bg-gradient-primary p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            From early-stage investment opportunities to scaling established products, I bring 
            strategic insight, data expertise, and proven leadership to drive exceptional results. 
            Let's discuss how we can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Mail className="w-5 h-5 mr-2" />
              Book Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white/30 hover:bg-white/20">
              Read My Insights
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
