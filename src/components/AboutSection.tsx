import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, LineChart, Users, Briefcase } from "lucide-react";

export const AboutSection = () => {
  const skills = [
    "Venture Capital",
    "Product Strategy",
    "Data Science",
    "Machine Learning",
    "Investment Analysis",
    "Portfolio Management",
    "Startup Advisory",
    "Product Analytics",
    "Strategic Planning",
    "Board Advisory",
    "Due Diligence",
    "Market Research",
    "Business Intelligence",
    "Growth Strategy"
  ];

  const expertise = [
    {
      icon: TrendingUp,
      title: "Strategic Investment",
      description: "Identifying and nurturing high-potential startups with data-driven investment strategies and portfolio optimization"
    },
    {
      icon: LineChart,
      title: "Product Innovation",
      description: "Transforming product visions into market-leading solutions through advanced analytics and user-centric design"
    },
    {
      icon: Briefcase,
      title: "Growth Analytics",
      description: "Building sophisticated measurement frameworks that drive sustainable growth and optimize key business metrics"
    },
    {
      icon: Users,
      title: "Leadership & Advisory",
      description: "Mentoring founders and leading cross-functional teams to execute product strategies that create lasting impact"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a strategic product leader and venture capital professional with a passion for 
            transforming innovative ideas into market-leading products. My expertise spans across 
            investment strategy, product development, and data science.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
            I help founders and established companies build products that matter, leveraging deep 
            market insights and advanced analytics to drive growth, optimize user experience, and 
            create sustainable competitive advantages in today's dynamic startup ecosystem.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-4 py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* What I Bring */}
        <div>
          <h3 className="text-2xl font-bold mb-8">What I Bring</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item) => (
              <Card key={item.title} className="p-6 hover:shadow-elegant transition-shadow">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
