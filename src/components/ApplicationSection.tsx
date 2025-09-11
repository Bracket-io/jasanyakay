import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, Users, Trophy } from "lucide-react";

export const ApplicationSection = () => {
  const steps = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Submit Application",
      description: "Complete our online application form with your basic information and driving goals."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Initial Assessment",
      description: "Meet with our instructors to assess your current skill level and create a personalized plan."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule Training",
      description: "Choose your preferred schedule and begin your journey to becoming a confident driver."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Graduate & Succeed",
      description: "Complete the program, pass your test, and join our community of successful drivers."
    }
  ];

  const requirements = [
    "Must be at least 16 years old",
    "Valid learner's permit or willingness to obtain one",
    "Commitment to attend all scheduled sessions",
    "Basic English proficiency for safety instruction",
    "Physical ability to operate a motor vehicle"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Join Us</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Start Your
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Driving Journey?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the next cohort of the Oasis Driving Bootcamp and transform 
            your relationship with driving in just 3 months.
          </p>
        </div>

        {/* Process steps */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">How to Apply</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 text-center relative hover:shadow-elegant transition-smooth">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {index + 1}
                </div>
                <div className="text-primary mb-4 flex justify-center mt-4">
                  {step.icon}
                </div>
                <h4 className="text-lg font-semibold mb-3">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements and CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Program Requirements</h3>
            <p className="text-muted-foreground mb-8">
              We welcome students from all backgrounds and experience levels. 
              Here's what you need to get started:
            </p>
            
            <ul className="space-y-3 mb-8">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Financial Assistance Available</h4>
              <p className="text-muted-foreground text-sm">
                We offer payment plans and scholarships for qualifying students. 
                Don't let cost be a barrier to your success.
              </p>
            </div>
          </div>

          <div>
            <Card className="bg-gradient-hero p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Summer 2025 Cohort</h4>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Program Dates:</span>
                  <span className="font-semibold">June - August 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Application Deadline:</span>
                  <span className="font-semibold">May 15, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Spots Available:</span>
                  <span className="font-semibold">20 Students</span>
                </div>
                <div className="flex justify-between">
                  <span>Program Fee:</span>
                  <span className="font-semibold">Contact for Details</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button variant="hero" className="w-full" size="lg">
                  Apply Now
                </Button>
                <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10" size="lg">
                  Download Handbook
                </Button>
              </div>

              <p className="text-sm opacity-90 mt-4 text-center">
                Questions? Contact our admissions team for more information.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};