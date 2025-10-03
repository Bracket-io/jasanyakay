import { Card } from "@/components/ui/card";
import { Award, Users, GraduationCap, Newspaper } from "lucide-react";

export const RecognitionSection = () => {
  const certifications = [
    {
      title: "Aha! PM Certification",
      organization: "Aha!",
      year: "2023",
      type: "Certification"
    },
    {
      title: "Bloomberg Marketing Concept",
      organization: "Bloomberg",
      year: "2021",
      type: "Certificate"
    },
    {
      title: "Professional Scrum Master",
      organization: "Scrum.org",
      year: "2021",
      type: "Certification"
    },
    {
      title: "Product Management Fundamentals",
      organization: "LinkedIn Learning",
      year: "2021",
      type: "Certificate"
    }
  ];

  const mentorship = [
    {
      organization: "HBCUvc",
      role: "Venture Capital Mentor",
      description: "Mentoring underrepresented founders in venture capital and startup ecosystem"
    },
    {
      organization: "SproutHacks",
      role: "Mentor",
      description: "Mentor for high school hackers"
    },
    {
      organization: "Trubel",
      role: "Data Mentor",
      description: "Guiding data science and analytics professionals"
    },
    {
      organization: "Johns Hopkins University",
      role: "Engineering Management Advisor",
      description: "Supporting graduate students in engineering leadership and management"
    }
  ];

  const press = [
    {
      outlet: "ScienceDirect",
      title: "Scholarly Article on Policy Intervention",
      year: "2025",
      description: "Published research on policy intervention strategies",
      link: "https://www.sciencedirect.com/science/article/pii/S2666188825005015"
    },
    {
      outlet: "NSF I-Corps",
      title: "NSF I-Corp Host",
      year: "2024",
      description: "Mid-Atlantic Region partners host Black founders in I-Corps event",
      link: "https://www.mtech.umd.edu/news/nsf-i-corps-hub-mid-atlantic-region-partners-host-black-founders-in-i-corps-event"
    },
    {
      outlet: "Harvard Innovation Lab",
      title: "NextGen AWS Fellow",
      year: "2023",
      description: "Selected for inaugural NextGen Accelerator program for Black-led startups",
      link: "https://innovationlabs.harvard.edu/about/news/25-black-led-startups-selected-for-inaugural-nextgen-accelerator-program/"
    },
    {
      outlet: "HBCUvc",
      title: "HBCUvc Fellow",
      year: "2021",
      description: "Fifth and largest class of venture capital fellows",
      link: "https://blog.hbcu.vc/hbcuvc-welcomes-its-fifth-and-largest-class-of-venture-capital-fellows-5cade19616ff"
    },
    {
      outlet: "Johns Hopkins University",
      title: "Hopkins HopStat Winner",
      year: "2023",
      description: "Winner of HopStart entrepreneurship competition",
      link: "https://engineering.jhu.edu/cle/hopstart/"
    },
    {
      outlet: "Morgan State University",
      title: "University Innovator",
      year: "2023",
      description: "Named as University Innovation Fellow",
      link: "https://www.morgan.edu/news/four-morgan-state-students-named-as-university-innovation-fellows"
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
              <Card key={`${item.outlet}-${item.title}`} className="p-6 hover:shadow-elegant transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <p className="font-medium text-primary">{item.outlet}</p>
                  <span className="text-sm text-muted-foreground">{item.year}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    Read more →
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
