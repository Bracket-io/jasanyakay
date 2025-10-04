import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Thoughts = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const featuredArticles = [
    {
      category: "Product Strategy",
      date: "1/14/2024",
      title: "The Future of Product-Led Growth in B2B SaaS",
      description: "Exploring how data-driven product strategies are reshaping customer acquisition and retention in enterprise software.",
      readTime: "8 min read",
    },
    {
      category: "Venture Capital",
      date: "1/9/2024",
      title: "Venture Capital in the Age of AI",
      description: "How artificial intelligence is transforming investment decisions and due diligence processes in venture capital.",
      readTime: "12 min read",
    },
  ];

  const recentArticles = [
    {
      category: "Leadership",
      date: "1/4/2024",
      title: "Building Inclusive Tech Teams",
      description: "Practical strategies for creating diverse, high-performing teams in the technology sector.",
      readTime: "6 min read",
    },
    {
      category: "Data Science",
      date: "12/19/2023",
      title: "Data Governance in Startup Environments",
      description: "Implementing robust data practices without slowing down innovation in early-stage companies.",
      readTime: "10 min read",
    },
    {
      category: "Product Strategy",
      date: "12/14/2023",
      title: "The Product Manager's Guide to Technical Debt",
      description: "Balancing feature development with technical debt management for sustainable product growth.",
      readTime: "7 min read",
    },
    {
      category: "Analytics",
      date: "12/9/2023",
      title: "Metrics That Matter: Beyond Vanity KPIs",
      description: "Identifying and tracking the metrics that truly drive business value and product success.",
      readTime: "9 min read",
    },
  ];

  const filters = ["All", "Product Strategy", "Venture Capital", "Data Science", "Leadership", "Analytics"];

  const allArticles = [...featuredArticles, ...recentArticles];
  const filteredArticles = activeFilter === "All" 
    ? recentArticles 
    : recentArticles.filter(a => a.category === activeFilter);

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
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Thoughts & Insights</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sharing perspectives on product strategy, venture capital, data science, and leadership through thoughtful analysis and real-world experience.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-12 flex-wrap justify-center">
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

        {/* Featured Articles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-glow transition-all cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{article.title}</CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-primary">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                    <Button variant="ghost" size="sm" className="gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Articles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Recent Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-glow transition-all cursor-pointer">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{article.category}</Badge>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <Card className="bg-gradient-secondary text-secondary-foreground">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Stay Updated</CardTitle>
            <CardDescription className="text-secondary-foreground/80">
              Get my latest thoughts on product strategy, venture capital, and data science delivered directly to your inbox.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="flex w-full max-w-md gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background text-foreground"
              />
              <Button variant="default">Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Thoughts;
