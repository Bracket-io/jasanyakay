import { Card } from "@/components/ui/card";
import { Award, Users, GraduationCap, Newspaper } from "lucide-react";

export const RecognitionSection = () => {
  const certifications = [
    {
      title: "Google Project Management",
      organization: "Google",
      year: "2023",
      type: "Professional Certificate"
    },
    {
      title: "Product Management Fundamentals",
      organization: "Reforge",
      year: "2023",
      type: "Certificate"
    },
    {
      title: "Scrum Master Certified",
      organization: "Scrum Alliance",
      year: "2022",
      type: "Certification"
    },
    {
      title: "Data Analytics Professional",
      organization: "Google",
      year: "2022",
      type: "Professional Certificate"
    }
  ];

  const mentorship = [
    {
      organization: "HBCUvc",
      role: "Venture Capital Mentor",
      description: "Mentoring underrepresented founders in venture capital and startup ecosystem"
    },
    {
      organization: "Reforge",
      role: "Product Mentor",
      description: "Guiding product managers in advanced product strategy and growth"
    },
    {
      organization: "Johns Hopkins University",
      role: "Engineering Management Advisor",
      description: "Supporting graduate students in engineering leadership and management"
    },
    {
      organization: "Morgan State University",
      role: "Startup Advisor",
      description: "Advising student entrepreneurs and startup initiatives"
    }
  ];

  const press = [
    {
      outlet: "TechCrunch",
      title: "Rising Stars in Product Management",
      year: "2023",
      description: "Featured among top product leaders driving innovation in fintech"
    },
    {
      outlet: "Forbes",
      title: "30 Under 30 in Venture Capital",
      year: "2023",
      description: "Recognized for investment strategy and portfolio company growth"
    },
    {
      outlet: "Harvard Business Review",
      title: "Data-Driven Product Strategy",
      year: "2023",
      description: "Interview on leveraging analytics for product decision making"
    },
    {
      outlet: "VentureBeat",
      title: "The Future of Fintech",
      year: "2022",
      description: "Commentary on emerging trends in financial technology"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Recognition & Credentials</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building expertise through continuous learning, mentoring the next generation, and 
            earning recognition for impactful work in product management and venture capital.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <Card key={cert.title} className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm text-muted-foreground">{cert.type}</p>
                  <span className="text-sm font-medium text-primary">{cert.year}</span>
                </div>
                <h4 className="text-lg font-semibold mb-1">{cert.title}</h4>
                <p className="text-muted-foreground">{cert.organization}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Mentorship */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Mentorship & Advisory</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {mentorship.map((item) => (
              <Card key={item.organization} className="p-6">
                <h4 className="text-lg font-semibold mb-2">{item.organization}</h4>
                <p className="text-primary font-medium mb-2">{item.role}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Press & Recognition */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Press & Recognition</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {press.map((item) => (
              <Card key={`${item.outlet}-${item.title}`} className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <p className="font-medium text-primary">{item.outlet}</p>
                  <span className="text-sm text-muted-foreground">{item.year}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
