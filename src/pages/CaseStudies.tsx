import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Users, DollarSign, Target, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      role: "Senior Product Manager",
      duration: "18 months",
      title: "KeyBank Digital Transformation",
      subtitle: "Led the digital transformation of KeyBank's mobile banking platform, resulting in 40% increase in mobile engagement and $2M cost savings.",
      company: "KeyBank",
      challenge: "KeyBank's mobile platform was outdated with poor user experience, leading to declining customer satisfaction and increased support costs.",
      solution: "Redesigned the entire mobile experience with data-driven insights, implemented new features, and optimized user flows based on extensive user research.",
      results: [
        { icon: TrendingUp, value: "+40%", label: "Mobile Engagement" },
        { icon: Users, value: "+35%", label: "Customer Satisfaction" },
        { icon: DollarSign, value: "$2M", label: "Cost Savings" },
        { icon: Target, value: "+60%", label: "Task Completion Rate" },
      ],
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "Figma"],
      testimonial: {
        quote: "Kay's strategic vision and execution excellence transformed our digital banking experience. The results exceeded all expectations.",
        author: "Sarah Johnson",
        title: "VP of Digital Products, KeyBank",
      },
    },
    {
      role: "Co-Founder & Chief Product Officer",
      duration: "24 months",
      title: "WeSolv Platform Development",
      subtitle: "Built and scaled WeSolv from concept to 10K+ users, securing $500K in seed funding and establishing product-market fit.",
      company: "WeSolv",
      challenge: "Small businesses lacked affordable access to quality consulting and problem-solving expertise, leading to inefficient operations and missed growth opportunities.",
      solution: "Developed a marketplace platform connecting businesses with verified consultants, implementing AI-powered matching and integrated project management tools.",
      results: [
        { icon: Users, value: "10K+", label: "User Growth" },
        { icon: DollarSign, value: "$500K", label: "Funding Raised" },
        { icon: TrendingUp, value: "500+", label: "Consultant Network" },
        { icon: Target, value: "92%", label: "Project Success Rate" },
      ],
      technologies: ["React", "Python", "Django", "PostgreSQL", "Stripe", "AWS"],
      testimonial: {
        quote: "Kay's product leadership was instrumental in building WeSolv into a platform that truly serves our business community.",
        author: "Marcus Chen",
        title: "Co-Founder, WeSolv",
      },
    },
    {
      role: "Principal Data Product Manager",
      duration: "12 months",
      title: "Brightly Analytics Engine",
      subtitle: "Developed advanced analytics capabilities for Brightly's asset management platform, enabling predictive maintenance and reducing operational costs by 25%.",
      company: "Brightly Software",
      challenge: "Facility managers struggled with reactive maintenance approaches, leading to unexpected equipment failures and high operational costs.",
      solution: "Built machine learning models for predictive maintenance, created intuitive dashboards, and implemented real-time monitoring capabilities.",
      results: [
        { icon: DollarSign, value: "25%", label: "Cost Reduction" },
        { icon: Target, value: "85%", label: "Prediction Accuracy" },
        { icon: Users, value: "+300%", label: "User Adoption" },
        { icon: TrendingUp, value: "40%", label: "Time Savings" },
      ],
      technologies: ["Python", "TensorFlow", "React", "D3.js", "PostgreSQL", "Docker"],
      testimonial: {
        quote: "The analytics engine Kay developed revolutionized how our clients approach facility management. It's a game-changer.",
        author: "Lisa Rodriguez",
        title: "Head of Product, Brightly Software",
      },
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
                    <div>
                      <p className="font-semibold">{study.testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{study.testimonial.title}</p>
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
