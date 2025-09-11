import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Target, Award } from "lucide-react";

export const ProgramOverview = () => {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Comprehensive Curriculum",
      description: "Complete driving education covering all essential skills and safety protocols"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Scheduling",
      description: "Morning, afternoon, and weekend sessions to fit your busy lifestyle"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalized Training",
      description: "One-on-one instruction tailored to your learning pace and needs"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification Ready",
      description: "Complete preparation for your driving test and license acquisition"
    }
  ];

  const coreModules = [
    "Traffic Laws & Regulations",
    "Defensive Driving Techniques",
    "Vehicle Operation & Safety",
    "Road Signs & Navigation",
    "Emergency Procedures",
    "Parallel Parking Mastery",
    "Highway Driving Skills",
    "Night & Weather Driving"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Program Overview</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Master the Road with
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Expert Guidance
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive 3-month program combines classroom instruction with hands-on 
            driving experience to prepare you for safe, confident driving.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-elegant transition-smooth">
              <div className="text-primary mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Core modules */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Core Training Modules</h3>
            <p className="text-muted-foreground mb-8">
              Each module is carefully designed to build upon previous knowledge, 
              ensuring a comprehensive understanding of safe driving practices.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coreModules.map((module, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{module}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="bg-gradient-primary p-8 text-primary-foreground">
              <h4 className="text-2xl font-bold mb-4">Program Highlights</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>40+ hours of practical driving instruction</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Small class sizes for personalized attention</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Modern vehicles with dual controls</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Free DMV test preparation materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Ongoing support after graduation</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};