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
      category: "Venture Capital",
      date: "12/19/2023",
      title: "Investment Thesis — Vertical SaaS",
      description: "Deep dive into the vertical SaaS landscape, exploring market opportunities and investment strategies in specialized software solutions.",
      readTime: "10 min read",
      link: "https://jaskay.medium.com/investment-thesis-vertical-saas-7f3ad770873c",
    },
    {
      category: "Product Strategy",
      date: "1/15/2023",
      title: "Product Review #3: Masterclass",
      description: "Analyzing Masterclass's product strategy, user experience, and how they've created a premium learning platform.",
      readTime: "8 min read",
      link: "https://jaskay.medium.com/product-review-3-masterclass-b9daee74b5ad",
    },
  ];

  const recentArticles = [
    {
      category: "Impact",
      date: "11/30/2023",
      title: "Project GiiV — Revolutionizing Charity Giving in Nigeria",
      description: "Building a platform to transform how people give back, combining technology with social impact to revolutionize charitable donations.",
      readTime: "7 min read",
      link: "https://jaskay.medium.com/project-giiv-revolutionizing-charity-giving-in-nigeria-f6f1fbc07377",
    },
    {
      category: "Product Strategy",
      date: "10/1/2022",
      title: "Exploring Ruttl: A Deep Dive into User Experience and Features",
      description: "Product review analyzing Ruttl's approach to design collaboration and website feedback tools.",
      readTime: "8 min read",
      link: "https://jaskay.medium.com/product-review-2-ruttl-19eab887f7eb",
    },
    {
      category: "Venture Capital",
      date: "10/22/2022",
      title: "Startup Categories #1: Intro",
      description: "Introduction to understanding different startup categories and frameworks for evaluating early-stage companies.",
      readTime: "6 min read",
      link: "https://jaskay.medium.com/startup-categories-1-intro-b0941ae14e45",
    },
    {
      category: "Leadership",
      date: "11/30/2023",
      title: "Bob Iger Teaches Business Strategy and Leadership",
      description: "Key insights from Bob Iger's Masterclass on building Disney into a global entertainment powerhouse through strategic vision.",
      readTime: "9 min read",
      link: "https://jaskay.medium.com/bob-iger-teaches-business-strategy-and-leadership-12d7c9ea00a0",
    },
    {
      category: "Product Strategy",
      date: "1/4/2022",
      title: "KPCB '22 Product Challenge Response",
      description: "Tackling a strategic product challenge from Kleiner Perkins, exploring product thinking and user-centered design.",
      readTime: "10 min read",
      link: "https://jaskay.medium.com/kpcb-22-product-challenge-response-972cb76247e6",
    },
    {
      category: "Product Strategy",
      date: "9/24/2022",
      title: "Product Review #1: Mailscribe",
      description: "Analysis of Mailscribe's email productivity features and their approach to solving email overload challenges.",
      readTime: "6 min read",
      link: "https://jaskay.medium.com/product-review-1-mailscribe-abf59b32804",
    },
  ];

  const filters = ["All", "Product Strategy", "Venture Capital", "Leadership", "Impact"];

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
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="gap-2"
                      asChild
                    >
                      <a href={article.link} target="_blank" rel="noopener noreferrer">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </a>
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
              <Card 
                key={index} 
                className="hover:shadow-glow transition-all cursor-pointer"
                onClick={() => window.open(article.link, '_blank')}
              >
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
