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
      category: "Data",
      title: "CitiWatch AI Illegal Dumping Detection",
      impact: "25% cleanliness improvement",
      company: "City of Baltimore",
      description: "Partnered with Google AI/ML team to pilot CitiWatch camera feeds for detecting illegal dumping incidents. Created strategic presentation demonstrating how optimized camera usage could reduce illegal dumping and improve city cleanliness by 25%.",
      tags: ["Computer Vision", "AI/ML", "Smart Cities", "Google Partnership"],
      featured: true,
    },
    {
      category: "Product",
      title: "CitiStat Performance Hub",
      impact: "30% reporting efficiency, 40% engagement",
      company: "City of Baltimore",
      description: "Launched Quarto-powered website centralizing CitiStat updates for Office of Performance and Innovation. Streamlined access for 15+ agencies, reduced reporting efforts by 30%, and increased engagement by 40% across city departments.",
      tags: ["Quarto", "Data Visualization", "Gov Tech", "Process Optimization"],
      featured: true,
    },
    {
      category: "Data",
      title: "311 Service Request SLA Optimization",
      impact: "50% → 75% completion rate",
      company: "City of Baltimore",
      description: "Organized cross-agency meetings and conducted data analysis to optimize 311 service request SLAs. Improved compliance and increased completion rates from under 50% to 75%, directly impacting citizen satisfaction.",
      tags: ["Data Analysis", "Process Improvement", "Public Service", "KPIs"],
      featured: false,
    },
    {
      category: "Product",
      title: "$60K Innovation Space Build-Out",
      impact: "20 staff across 8 spaces",
      company: "City of Baltimore",
      description: "Orchestrated $60,000 project to furnish and equip Innovation and CitiStat workspaces. Managed vendor relations and delivered furniture, tech, and equipment on time and on budget for 20 staff across 3 workspaces and 5 executive areas.",
      tags: ["Project Management", "Vendor Relations", "Budget Management", "Operations"],
      featured: false,
    },
    {
      category: "Data",
      title: "Redlining & Justice40 Environmental Analysis",
      impact: "7,600 homes, 153 cities",
      company: "Morgan State University",
      description: "Led comprehensive data analysis for Redlining and Justice40 initiatives impacting 7,600 homes across 153 cities. Delivered insights driving equitable environmental policy decisions and community development strategies.",
      tags: ["Environmental Justice", "GIS Analysis", "Policy Impact", "Equity"],
      featured: true,
    },
    {
      category: "Data",
      title: "Environmental Justice Consulting",
      impact: "90% weekly output increase",
      company: "The Butterfly Effect Consulting",
      description: "Conducted in-depth research and created Environmental Justice presentations for consulting clients. Streamlined analytical processes and drove a 90% increase in weekly research output and deliverable quality.",
      tags: ["Research", "Consulting", "Environmental Justice", "Process Design"],
      featured: false,
    },
    {
      category: "Product",
      title: "Workspace ONE UEM for Enterprise Clients",
      impact: "High-profile Sweden deployment",
      company: "VMware",
      description: "Spearheaded rigorous certificate deployment testing using Workspace ONE UEM on Linux-based IGEL devices for high-profile clients in Sweden. Delivered two impactful presentations to Tech Sales and Marketing teams with product enhancement recommendations.",
      tags: ["Enterprise Software", "UEM", "Linux", "Product Testing"],
      featured: false,
    },
    {
      category: "Data",
      title: "Real-Time KPI Dashboards",
      impact: "5 dashboards, cross-team efficiency",
      company: "Oracle",
      description: "Developed and deployed 5 SQL-driven dashboards in APEX and Grafana for real-time KPI tracking, improving decision-making and operational efficiency across engineering and business teams.",
      tags: ["SQL", "APEX", "Grafana", "Business Intelligence"],
      featured: false,
    },
    {
      category: "Product",
      title: "Server Health Monitoring Platform",
      impact: "3 departments, compliance",
      company: "Morgan Stanley",
      description: "Created responsive data-driven health-monitoring website for Morgan Stanley's servers using Java, AngularJS, Spring Boot, and Kafka. Ensured compliance and uptime across 3 departments while presenting insights to executive and Wealth Management teams.",
      tags: ["Java", "Spring Boot", "Kafka", "Infrastructure"],
      featured: false,
    },
    {
      category: "VC",
      title: "Portfolio Company Updates & Analysis",
      impact: "31 startups, investor insights",
      company: "Oregon Sports Angels",
      description: "Created comprehensive Summer 2023 updates for 31 portfolio startups across sports tech ecosystem. Enhanced investor engagement by delivering actionable insights on key progress, milestones, and market positioning.",
      tags: ["Portfolio Management", "Sports Tech", "Investor Relations", "Analytics"],
      featured: false,
    },
    {
      category: "VC",
      title: "Investment Memos & Pipeline Analysis",
      impact: "20+ memos, multi-sector due diligence",
      company: "HBCUvc",
      description: "Presented 20+ investment memos and teasers for pipeline companies to Supply Change Capital. Used multi-level analysis to evaluate opportunities and deliver actionable investment recommendations across diverse sectors.",
      tags: ["Due Diligence", "Investment Analysis", "HBCU Founders", "Deal Flow"],
      featured: true,
    },
    {
      category: "VC",
      title: "Startup Due Diligence Pipeline",
      impact: "100+ startups evaluated",
      company: "MotivateVC",
      description: "Leveraged data analysis tools including Airtable, Excel, and Streak to streamline due diligence and manage stakeholder relationships for 100+ sector-agnostic US-based startups.",
      tags: ["Due Diligence", "CRM", "Data Analysis", "Early-Stage"],
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
