import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Users, DollarSign, Target, Quote, Lightbulb, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      role: "Product Consultant",
      duration: "2021",
      title: "Dynata Scope Change Process Optimization",
      subtitle: "Saving $10-$15M through data-driven process improvements",
      company: "Dynata",
      challenge: "Communication gaps between PM & Sales teams, lack of standardized algorithms for scope change evaluation, inefficient trigger notification system, and inaccurate project pricing estimates leading to $10-$15M in annual losses.",
      solution: "Conducted cross-functional interviews with PM and Sales teams, developed standardized training framework, created data-driven Scope Change Score algorithm using historical datasets, and designed optimized BOS notification system with refined IR estimation.",
      results: [
        { icon: DollarSign, value: "$10-$15M", label: "Potential Savings" },
        { icon: TrendingUp, value: "+45%", label: "Process Efficiency" },
        { icon: Users, value: "100%", label: "Team Alignment" },
        { icon: Target, value: "4", label: "Key Recommendations" },
      ],
      technologies: ["Python", "Data Analytics", "Process Optimization", "BOS"],
      testimonial: {
        quote: "The team's analytical approach and comprehensive recommendations provided us with a clear roadmap to significantly reduce scope change losses.",
        author: "Jessica Grace",
        title: "Program Manager, Dynata",
      },
      link: "https://docs.google.com/presentation/d/1dJSvx1WADQwQvTfRIvfSTGlhLPJoBHEM1cZmo13p8ug/edit?slide=id.g104e6c1d130_10_131",
    },
    {
      role: "Product Designer & Developer",
      duration: "2021",
      title: "Brightly WorxHub Dashboard Redesign",
      subtitle: "Redesigning enterprise facility management platform",
      company: "Brightly (Siemens Company)",
      challenge: "Complex enterprise facility management system needed improved usability and streamlined workflows for facility managers and maintenance teams.",
      solution: "Conducted user research with facility managers, created intuitive dashboard redesign with improved information architecture, developed interactive prototype focusing on task efficiency and data visualization.",
      results: [
        { icon: Users, value: "+60%", label: "User Satisfaction" },
        { icon: TrendingUp, value: "+40%", label: "Task Completion" },
        { icon: Lightbulb, value: "15+", label: "UX Improvements" },
        { icon: Target, value: "5", label: "Key Features" },
      ],
      technologies: ["Figma", "UX Research", "Prototyping", "User Testing"],
      testimonial: {
        quote: "The redesigned dashboard significantly improved our team's daily workflows and reduced time spent on routine facility management tasks.",
        author: "Operations Manager",
        title: "Enterprise Client",
      },
      link: "https://www.figma.com/proto/qRgEiQswJ6Sch40Kws4ngJ/UX-Case-Study?type=design&node-id=3-10&t=LKQ3RoeyvxoVVcAm-0&scaling=contain&page-id=3%3A3",
    },
    {
      role: "Product Manager",
      duration: "2020",
      title: "GrapeVine: Ethical Shopping Platform",
      subtitle: "Connecting conscious consumers with values-aligned businesses",
      company: "GrapeVine (Startup)",
      challenge: "Consumers lacked a platform to discover businesses aligned with their ethical values. Businesses needed better ways to market their social responsibility initiatives. 70% of millennials prioritize corporate social responsibility in purchasing decisions.",
      solution: "Built Android app connecting socially conscious consumers with ethical businesses. Integrated News API and multiple ethical business databases (GreenMeLocal, FairTrade). Implemented bookmark and discovery features with value-based filtering, user profiles, and business categorization.",
      results: [
        { icon: Users, value: "2,000+", label: "User Base" },
        { icon: TrendingUp, value: "200+", label: "Business Listings" },
        { icon: Lightbulb, value: "500", label: "Daily News Stories" },
        { icon: Target, value: "70%", label: "Millennial Market" },
      ],
      technologies: ["Java", "Android Studio", "Firebase", "News API"],
      testimonial: {
        quote: "GrapeVine simplifies finding companies with the community's best interests at heart, giving corporations an incentive to practice social responsibility.",
        author: "Drew Sierra",
        title: "User Persona - PE Analyst",
      },
      link: "https://docs.google.com/presentation/d/1KhHp6qOn0Oj0XpVvIQF85lSfs_MhJvFNgc4wN5D4zAk/edit?slide=id.g8a14ba1252_0_24",
    },
    {
      role: "Product Strategist",
      duration: "2021",
      title: "Pinterest Growth Strategy",
      subtitle: "Case competition winning product growth framework",
      company: "Pinterest Case Competition",
      challenge: "Develop comprehensive growth strategy to increase Pinterest's user engagement and monetization while maintaining platform authenticity and creator ecosystem.",
      solution: "Created data-driven growth framework analyzing user behavior patterns, developed creator monetization strategies, and proposed features to enhance discovery and engagement for both creators and consumers.",
      results: [
        { icon: Award, value: "Winner", label: "Competition Rank" },
        { icon: TrendingUp, value: "3-Year", label: "Growth Strategy" },
        { icon: Users, value: "5+", label: "Impact Areas" },
        { icon: Target, value: "10+", label: "Key Initiatives" },
      ],
      technologies: ["Product Strategy", "Data Analysis", "Market Research", "Growth Hacking"],
      testimonial: {
        quote: "Outstanding strategic thinking and comprehensive analysis. The team demonstrated deep understanding of Pinterest's ecosystem and user needs.",
        author: "Pinterest Competition Judges",
        title: "2021 Pinterest Case Competition",
      },
      link: "https://www.canva.com/design/DAEgWEXy7_o/6beNspF0Q_l_P5owHW0N-A/edit",
    },
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Deep dives into transformative product initiatives that drove measurable business impact across fintech, enterprise software, and marketplace platforms.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gradient-secondary text-secondary-foreground">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <Badge variant="outline" className="border-secondary-foreground text-secondary-foreground">
                    {study.role}
                  </Badge>
                  <span className="text-sm">{study.duration}</span>
                </div>
                <CardTitle className="text-3xl mb-2">{study.title}</CardTitle>
                <CardDescription className="text-secondary-foreground/90 text-base">
                  {study.subtitle}
                </CardDescription>
                <div className="mt-4">
                  <Badge className="bg-primary text-primary-foreground">{study.company}</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-destructive">Challenge</h3>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Solution</h3>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                </div>

                {/* Key Results */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Key Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {study.results.map((result, i) => (
                      <Card key={i} className="text-center">
                        <CardContent className="pt-6">
                          <result.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                          <div className="text-3xl font-bold text-primary mb-1">
                            {result.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {result.label}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <Card className="bg-muted">
                  <CardContent className="pt-6">
                    <Quote className="w-8 h-8 text-primary mb-4" />
                    <p className="text-lg italic mb-4">{study.testimonial.quote}</p>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <p className="font-semibold">{study.testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{study.testimonial.title}</p>
                      </div>
                      {study.link && (
                        <a href={study.link} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm">
                            View Full Case Study
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-primary text-primary-foreground mt-12">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Ready to Transform Your Product?</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Let's discuss how data-driven product strategies can drive measurable impact for your business.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 justify-center flex-wrap">
            <a href="https://calendly.com/jaskay">
              <Button variant="secondary" size="lg">
                Start a Conversation
              </Button>
            </a>
            <Link to="/work">
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                View Portfolio
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
