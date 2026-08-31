import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { selectedWork } from "@/data/projects";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <section className="max-w-4xl mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Selected Work
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Case Studies
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A closer look at how I approach ambiguous problems, discover what
            matters, make product trade-offs, and turn ideas into working
            products and data systems.
          </p>
        </section>

        {/* Projects */}
        <section className="space-y-10">
          {selectedWork.map((project, index) => (
            <Card
              key={project.slug}
              className="overflow-hidden border-border/60"
            >
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-[1fr_320px]">
                  {/* Main */}
                  <div className="p-7 md:p-10">
                    <div className="flex items-center gap-3 flex-wrap mb-5">
                      <span className="text-sm text-muted-foreground">
                        0{index + 1}
                      </span>

                      <Badge variant="secondary">
                        {project.productCategory ?? project.category}
                      </Badge>

                      <span className="text-sm text-muted-foreground">
                        {project.year}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                      {project.title}
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                      {project.headline ?? project.subtitle}
                    </p>

                    <p className="text-base leading-relaxed max-w-3xl mb-8">
                      {project.overview}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <Button asChild>
                        <Link to={`/project/${project.slug}`}>
                          Read case study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>

                      {project.externalLink && (
                        <Button variant="outline" asChild>
                          <a
                            href={project.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            External project
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="border-t lg:border-t-0 lg:border-l border-border/60 bg-muted/30 p-7 md:p-8">
                    <div className="space-y-7">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                          Role
                        </p>
                        <p className="font-medium">{project.role}</p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                          Timeline
                        </p>
                        <p className="font-medium">{project.timeline}</p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                          Scope
                        </p>
                        <p className="font-medium leading-relaxed">
                          {project.scope}
                        </p>
                      </div>

                      {project.capabilities &&
                        project.capabilities.length > 0 && (
                          <div>
                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                              Capabilities
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {project.capabilities
                                .slice(0, 4)
                                .map((capability) => (
                                  <Badge
                                    key={capability}
                                    variant="outline"
                                    className="font-normal"
                                  >
                                    {capability}
                                  </Badge>
                                ))}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Bottom */}
        <section className="mt-20 pt-12 border-t border-border/60">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              How I work
            </p>

            <h2 className="text-3xl font-bold mb-4">
              Problem first. Evidence second. Product third.
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              These case studies focus less on what I built and more on why I
              built it, what I learned, what I chose not to build, and what the
              evidence said afterwards.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;