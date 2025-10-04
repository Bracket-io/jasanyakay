import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      category: "Product",
      title: "CitiWatch Rec System",
      impact: "$2.3B AUM increase",
      company: "Citi",
      description: "Developed recommendation engine for Citi's wealth management platform, increasing client engagement by 45% and assets under management by $2.3B through personalized investment suggestions.",
      tags: ["ML", "Fintech", "Recommendation Systems", "Python"],
      featured: true,
    },
    {
      category: "Product",
      title: "Oasis USA Reforge Partnership",
      impact: "$5M Series A raised",
      company: "Reforge",
      description: "Led product strategy transformation for climate tech startup through Reforge accelerator program, resulting in 300% user growth and successful $5M Series A funding.",
      tags: ["Product Strategy", "Climate Tech", "Growth", "Reforge"],
      featured: false,
    },
    {
      category: "Product",
      title: "LightBackOn Energy Platform",
      impact: "50K+ households served",
      company: "LightBackOn",
      description: "Built comprehensive energy management platform for African markets, enabling 50K+ households to access clean energy solutions and reducing energy costs by 40%.",
      tags: ["Energy Tech", "Africa", "Social Impact", "Platform"],
      featured: false,
    },
    {
      category: "VC",
      title: "HBCUvc Investment Thesis",
      impact: "$10M deployed, 80% follow-on",
      company: "HBCUvc",
      description: "Authored comprehensive investment framework for funding HBCU-founded startups, leading to $10M fund deployment and 25 portfolio companies with 80% follow-on rate.",
      tags: ["Investment Thesis", "HBCU", "Diversity", "Fund Strategy"],
      featured: true,
    },
    {
      category: "Data",
      title: "AI Investment Framework",
      impact: "60% efficiency improvement",
      company: "Proprietary",
      description: "Developed proprietary AI-driven due diligence system for early-stage investments, improving deal sourcing efficiency by 60% and reducing false positives by 40%.",
      tags: ["AI/ML", "Due Diligence", "Investment", "Automation"],
      featured: false,
    },
    {
      category: "VC",
      title: "Fintech Research Whitepaper",
      impact: "$50M+ investment influence",
      company: "Research",
      description: "Published comprehensive analysis on embedded finance trends in Sub-Saharan Africa, influencing $50M+ in regional fintech investments and policy decisions.",
      tags: ["Research", "Fintech", "Africa", "Policy"],
      featured: false,
    },
    {
      category: "Product",
      title: "Intel Morgan State Autonomous Vehicles",
      impact: "3 patents filed",
      company: "Intel",
      description: "Led cross-functional team developing autonomous vehicle navigation systems at Intel, resulting in 3 patents and successful tech transfer to production vehicles.",
      tags: ["Autonomous Vehicles", "AI", "Patents", "Intel"],
      featured: false,
    },
    {
      category: "Product",
      title: "Housing + Health Platform",
      impact: "100K+ residents served",
      company: "Government",
      description: "Designed integrated platform connecting housing and healthcare data to improve community health outcomes, serving 100K+ residents across 15 cities.",
      tags: ["Healthcare", "Housing", "Data Integration", "Social Impact"],
      featured: false,
    },
  ];

  const filters = ["All", "Product", "VC", "Data"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        {/* Back to Home */}
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio & Impact</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Strategic investments, product transformations, and thought leadership that drive measurable growth. From early-stage startups to established companies, I help build products and strategies that create lasting market impact.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="rounded-full"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-glow transition-all">
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                </div>
              )}
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{project.category}</Badge>
                  <span className="text-sm text-muted-foreground">{project.company}</span>
                </div>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-primary font-semibold">
                  {project.impact}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Discuss
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              Ready to Transform Your Product Strategy?
            </CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Whether you're seeking strategic investment, product guidance, or data-driven growth strategies, I partner with founders and teams to build products that scale and succeed.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 flex-wrap">
            <a href="https://calendly.com/jaskay">
              <Button variant="secondary" size="lg">
                Discuss Partnership
              </Button>
            </a>
            <Link to="/case-studies">
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                View Case Studies
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
