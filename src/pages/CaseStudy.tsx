import {
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  Lightbulb,
  Target,
  TrendingUp,
  X,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  caseStudySections,
  getCaseStudy,
  readingTime,
} from "@/data/caseStudies";

const SectionHeading = ({
  number,
  title,
}: {
  number?: string;
  title: string;
}) => {
  return (
    <div className="mb-8">
      {number && (
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
          {number}
        </p>
      )}

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
    </div>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
    {children}
  </p>
);

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();

  const study = slug ? getCaseStudy(slug) : undefined;

  if (!study) {
    return (
      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 py-24">
          <div className="max-w-xl">
            <p className="text-sm text-muted-foreground mb-3">
              Case study not found
            </p>

            <h1 className="text-4xl font-bold mb-6">
              I couldn't find that project.
            </h1>

            <Button asChild>
              <Link to="/case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to case studies
              </Link>
            </Button>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  const navSections = caseStudySections;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <main>
        <section className="border-b border-border/60">
          <div className="container mx-auto px-4 py-12 md:py-20">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft className="h-4 w-4" />
              All case studies
            </Link>

            <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">{study.meta.role}</Badge>

                  <Badge variant="outline">
                    {study.meta.timeline}
                  </Badge>

                  <Badge variant="outline">{study.meta.stage}</Badge>

                  {study.independent && (
                    <Badge variant="outline">Independent</Badge>
                  )}
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                  {study.title}
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl">
                  {study.headline}
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-8">
                  <span className="text-sm text-muted-foreground">
                    {readingTime(study)} min read
                  </span>

                  {study.externalLink && (
                    <>
                      <span className="text-muted-foreground">·</span>

                      <a
                        href={study.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                      >
                        View project
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* Hero metadata */}
              <aside className="border border-border/60 rounded-xl p-6 bg-muted/20">
                <div className="space-y-6">
                  <div>
                    <Label>Role</Label>
                    <p className="font-medium">{study.meta.role}</p>
                  </div>

                  <div>
                    <Label>Timeline</Label>
                    <p className="font-medium">{study.meta.timeline}</p>
                  </div>

                  <div>
                    <Label>Stage</Label>
                    <p className="font-medium">{study.meta.stage}</p>
                  </div>

                  <div>
                    <Label>Ownership</Label>
                    <p className="text-sm leading-relaxed">
                      {study.meta.ownership}
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Sticky-ish navigation */}
        <div className="border-b border-border/60 bg-background/95 backdrop-blur z-20">
          <div className="container mx-auto px-4">
            <nav className="overflow-x-auto">
              <div className="flex min-w-max gap-6 py-4">
                {navSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                  >
                    {section.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[220px_minmax(0,780px)] gap-12 xl:gap-20">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-8 py-12">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Contents
                </p>

                <nav className="space-y-3">
                  {navSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {section.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="min-w-0">
              {/* At a glance */}
              <section id="summary" className="py-16 md:py-20 scroll-mt-24">
                <SectionHeading title="At a glance" />

                <div className="grid md:grid-cols-2 gap-5">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        The challenge
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.executiveSummary.challenge}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">My role</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.executiveSummary.role}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Approach</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.executiveSummary.approach}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Outcome</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.executiveSummary.outcome}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Context */}
              <section id="context" className="py-16 md:py-20 border-t scroll-mt-24">
                <SectionHeading number="01" title="Context" />

                <div className="space-y-8">
                  <p className="text-xl leading-relaxed">
                    {study.context.product}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Label>Users</Label>
                      <p className="leading-relaxed text-muted-foreground">
                        {study.context.users}
                      </p>
                    </div>

                    <div>
                      <Label>Existing workflow</Label>
                      <p className="leading-relaxed text-muted-foreground">
                        {study.context.existingWorkflow}
                      </p>
                    </div>

                    <div>
                      <Label>Market / organization</Label>
                      <p className="leading-relaxed text-muted-foreground">
                        {study.context.marketOrOrg}
                      </p>
                    </div>

                    <div>
                      <Label>Constraints</Label>
                      <p className="leading-relaxed text-muted-foreground">
                        {study.context.constraints}
                      </p>
                    </div>
                  </div>

                  <Card className="bg-muted/30">
                    <CardContent className="p-6">
                      <Label>Why it mattered</Label>
                      <p className="text-lg leading-relaxed">
                        {study.context.whyItMattered}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Problem */}
              <section id="problem" className="py-16 md:py-20 border-t scroll-mt-24">
                <SectionHeading number="02" title="The Problem" />

                <div className="space-y-10">
                  <div>
                    <Label>User goal</Label>
                    <p className="text-2xl leading-relaxed">
                      {study.problem.userGoal}
                    </p>
                  </div>

                  <div>
                    <Label>Existing experience</Label>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {study.problem.existingExperience}
                    </p>
                  </div>

                  <div>
                    <Label>Where the friction was</Label>

                    <div className="space-y-3">
                      {study.problem.friction.map((item, index) => (
                        <div
                          key={index}
                          className="flex gap-4 items-start border-b border-border/60 pb-4"
                        >
                          <span className="text-sm text-muted-foreground pt-1">
                            0{index + 1}
                          </span>

                          <p className="leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Before</Label>

                    <div className="border border-border/60 rounded-xl overflow-hidden">
                      {study.problem.beforeFlow.map((step, index) => (
                        <div
                          key={index}
                          className="flex gap-5 p-5 border-b last:border-b-0 border-border/60"
                        >
                          <span className="font-mono text-sm text-muted-foreground">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <p>{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Card>
                    <CardContent className="p-6">
                      <Label>Why it mattered</Label>
                      <p className="text-lg leading-relaxed">
                        {study.problem.whyItMattered}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Discovery */}
              <section
                id="discovery"
                className="py-16 md:py-20 border-t scroll-mt-24"
              >
                <SectionHeading number="03" title="Discovery" />

                <div className="space-y-10">
                  <div>
                    <Label>Questions I needed to answer</Label>

                    <div className="space-y-3">
                      {study.discovery.questions.map((question, index) => (
                        <div
                          key={index}
                          className="flex gap-4 items-start"
                        >
                          <span className="text-muted-foreground">?</span>

                          <p className="leading-relaxed">{question}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Evidence</Label>

                    <div className="grid md:grid-cols-2 gap-3">
                      {study.discovery.evidence.map((item, index) => (
                        <Card key={index}>
                          <CardContent className="p-5">
                            <p className="leading-relaxed">{item}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Findings</Label>

                    <div className="space-y-5">
                      {study.discovery.findings.map((finding, index) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <div className="grid md:grid-cols-[1fr_1fr] gap-6">
                              <div>
                                <p className="text-xs text-muted-foreground mb-2">
                                  Finding {index + 1}
                                </p>

                                <p className="text-lg leading-relaxed">
                                  {finding.observation}
                                </p>
                              </div>

                              <div className="space-y-5">
                                <div>
                                  <Label>Evidence</Label>
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    {finding.evidence}
                                  </p>
                                </div>

                                <div>
                                  <Label>Why it mattered</Label>
                                  <p className="text-sm leading-relaxed">
                                    {finding.whyItMattered}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Insight */}
              <section
                id="insight"
                className="py-16 md:py-20 border-t scroll-mt-24"
              >
                <SectionHeading number="04" title="Key Insight" />

                <Card className="bg-muted/30 mb-10">
                  <CardContent className="p-7 md:p-10">
                    <Lightbulb className="h-7 w-7 mb-6" />

                    <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed">
                      “{study.insight.quote}”
                    </blockquote>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <Label>What I initially believed</Label>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.insight.believed}
                    </p>
                  </div>

                  <div>
                    <Label>What I discovered</Label>
                    <p className="leading-relaxed">
                      {study.insight.discovered}
                    </p>
                  </div>

                  <div>
                    <Label>What changed</Label>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.insight.changed}
                    </p>
                  </div>
                </div>
              </section>

              {/* Strategy */}
              <section
                id="strategy"
                className="py-16 md:py-20 border-t scroll-mt-24"
              >
                <SectionHeading number="05" title="Product Strategy" />

                <Card className="mb-10">
                  <CardContent className="p-7">
                    <Label>Hypothesis</Label>

                    <p className="text-xl leading-relaxed">
                      {study.strategy.hypothesis}
                    </p>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <Label>Principles</Label>

                    <div className="space-y-4">
                      {study.strategy.principles.map((item, index) => (
                        <div
                          key={index}
                          className="flex gap-4 items-start"
                        >
                          <Check className="h-5 w-5 mt-0.5 shrink-0" />

                          <p className="leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Target flow</Label>

                    <div className="border border-border/60 rounded-xl overflow-hidden">
                      {study.strategy.targetFlow.map((step, index) => (
                        <div
                          key={index}
                          className="p-4 border-b last:border-b-0 border-border/60 flex gap-4"
                        >
                          <span className="text-sm text-muted-foreground">
                            {index + 1}
                          </span>

                          <p>{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <Label>What I deliberately wasn't solving</Label>

                  <div className="space-y-3">
                    {study.strategy.notSolving.map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-3 items-start text-muted-foreground"
                      >
                        <X className="h-5 w-5 shrink-0 mt-0.5" />

                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Options */}
              <section
                id="options"
                className="py-16 md:py-20 border-t scroll-mt-24"
              >
                <SectionHeading
                  number="06"
                  title="Options & Trade-offs"
                />

                <div className="space-y-5">
                  {study.options.rows.map((option, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex justify-between gap-5 items-start mb-5">
                          <div>
                            <p className="text-xs text-muted-foreground mb-2">
                              Option {index + 1}
                            </p>

                            <h3 className="text-xl font-semibold">
                              {option.label}
                            </h3>
                          </div>

                          <Badge variant="outline">
                            {option.complexity}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {option.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label>Benefits</Label>
                            <p className="text-sm leading-relaxed">
                              {option.benefits}
                            </p>
                          </div>

                          <div>
                            <Label>Limitations</Label>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {option.limitations}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-8 bg-muted/30">
                  <CardContent className="p-7 space-y-6">
                    <div>
                      <Label>Decision</Label>
                      <p className="text-xl leading-relaxed">
                        {study.options.decision}
                      </p>
                    </div>

                    <div>
                      <Label>Why</Label>
                      <p className="leading-relaxed text-muted-foreground">
                        {study.options.why}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label>What I gave up</Label>
                        <p className="leading-relaxed">
                          {study.options.gaveUp}
                        </p>
                      </div>

                      <div>
                        <Label>Why the trade-off was worth it</Label>
                        <p className="leading-relaxed">
                          {study.options.worthIt}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Prioritization */}
              <section
                id="prioritization"
                className="py-16 md:py-20 border-t scroll-mt-24"
              >
                <SectionHeading
                  number="07"
                  title="Prioritization & MVP"
                />

                <div className="overflow-x-auto border border-border/60 rounded-xl">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/40">
                      <tr className="text-left">
                        <th className="p-4 font-medium">Item</th>
                        <th className="p-4 font-medium">Impact</th>
                        <th className="p-4 font-medium">Effort</th>
                        <th className="p-4 font-medium">Decision</th>
                        <th className="p-4 font-medium">Reasoning</th>
                      </tr>
                    </thead>

                    <tbody>
                      {study.prioritization.rows.map((row, index) => (
                        <tr
                          key={index}
                          className="border-t border-border/60"
                        >
                          <td className="p-4 font-medium">{row.item}</td>
                          <td className="p-4">{row.impact}</td>
                          <td className="p-4">{row.effort}</td>
                          <td className="p-4">
                            <Badge variant="outline">
                              {row.decision}
                            </Badge>
                          </td>
                          <td className="p-4 text-muted-foreground">
                            {row.reasoning}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-10">
                  <Card>
                    <CardContent className="p-6">
                      <Target className="h-6 w-6 mb-5" />

                      <Label>MVP definition</Label>

                      <p className="leading-relaxed">
                        {study.prioritization.mvp}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <X className="h-6 w-6 mb-5" />

                      <Label>Cut from scope</Label>

                      <div className="space-y-3">
                        {study.prioritization.cut.length > 0 ? (
                          study.prioritization.cut.map((item, index) => (
                            <p
                              key={index}
                              className="text-muted-foreground leading-relaxed"
                            >
                              {item}
                            </p>
                          ))
                        ) : (
                          <p className="text-muted-foreground">
                            No additional scope cuts documented.
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Decisions */}
              <section
                id="decisions"
                className="py-16 md:py-20 border-t scroll-mt-24"
              >
                <SectionHeading
                  number="08"
                  title="Experience & Decisions"
                />

                <div className="space-y-5">
                  {study.keyDecisions.map((decision, index) => (
                    <Card key={index}>
                      <CardContent className="p-7">
                        <div className="flex items-start justify-between gap-5 mb-6">
                          <div>
                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                              Decision {index + 1}
                            </p>

                            <h3 className="text-xl font-semibold">
                              {decision.area}
                            </h3>
                          </div>

                          <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground" />
                        </div>

                        <div className="space-y-6">
                          <div>
                            <Label>Problem</Label>
                            <p className="text-muted-foreground leading-relaxed">
                              {decision.problem}
                            </p>
                          </div>

                          <div>
                            <Label>Decision</Label>
                            <p className="text-lg leading-relaxed">
                              {decision.decision}
                            </p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <Label>Why</Label>
                              <p className="text-muted-foreground leading-relaxed">
                                {decision.why}
                              </p>
                            </div>

                            <div>
                              <Label>Alternative</Label>
                              <p className="text-muted-foreground leading-relaxed">
                                {decision.alternative}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Execution */}
              <section
                id="execution"
                className="py-16 md:py-20 border-t scroll-mt-24"
              >
                <SectionHeading number="09" title="Execution" />

                <div className="space-y-10">
                  <div>
                    <Label>What I owned</Label>

                    <div className="grid md:grid-cols-2 gap-3">
                      {study.execution.owned.map((item, index) => (
                        <div
                          key={index}
                          className="border border-border/60 rounded-lg p-4"
                        >
                          <p className="leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {study.execution.crossFunctional.length > 0 && (
                    <div>
                      <Label>Cross-functional work</Label>

                      <div className="space-y-3">
                        {study.execution.crossFunctional.map(
                          (item, index) => (
                            <Card key={index}>
                              <CardContent className="p-5">
                                <p className="font-medium mb-2">
                                  {item.fn}
                                </p>

                                <p className="text-muted-foreground leading-relaxed">
                                  {item.detail}
                                </p>
                              </CardContent>
                            </Card>
                          ),
                        )}
                      </div>
                    </div>
                  )}

                  <div>
                    <Label>Delivery</Label>

                    <div className="space-y-0 border-l border-border ml-2">
                      {study.execution.delivery.map((item, index) => (
                        <div
                          key={index}
                          className="relative pl-8 pb-8 last:pb-0"
                        >
                          <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-foreground" />

                          <p className="text-sm text-muted-foreground mb-2">
                            {item.phase}
                          </p>

                          <p className="leading-relaxed">
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Measurement */}
              <section
                id="measurement"
                className="py-16 md:py-20 border-t scroll-mt-24"
              >
                <SectionHeading number="10" title="Measurement" />

                <Card className="mb-10">
                  <CardContent className="p-7">
                    <Label>Primary outcome</Label>

                    <p className="text-xl leading-relaxed">
                      {study.measurement.primaryOutcome}
                    </p>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-5">
                  {study.measurement.metrics.map((metric, index) => (
                    <Card key={index}>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg">
                          {metric.category}
                        </CardTitle>

                        <Badge
                          variant={
                            metric.status === "Measured"
                              ? "default"
                              : "outline"
                          }
                        >
                          {metric.status}
                        </Badge>
                      </CardHeader>

                      <CardContent>
                        <ul className="space-y-3">
                          {metric.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex gap-3 items-start"
                            >
                              <TrendingUp className="h-4 w-4 mt-1 shrink-0 text-muted-foreground" />

                              <span className="text-muted-foreground leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8">
                  <Label>Why these metrics</Label>

                  <p className="text-muted-foreground leading-relaxed">
                    {study.measurement.why}
                  </p>
                </div>
              </section>

              {/* Outcomes */}
              <section
                id="outcomes"
                className="py-16 md:py-20 border-t scroll-mt-24"
              >
                <SectionHeading number="11" title="Outcomes" />

                <div className="space-y-10">
                  <div>
                    <Label>Results</Label>

                    <div className="grid md:grid-cols-2 gap-4">
                      {study.outcomes.results.map((result, index) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <p className="text-lg leading-relaxed">
                              {result}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-5">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Check className="h-5 w-5" />
                          Validated
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-3">
                          {study.outcomes.validated.map((item, index) => (
                            <p
                              key={index}
                              className="text-sm text-muted-foreground leading-relaxed"
                            >
                              {item}
                            </p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                          <X className="h-5 w-5" />
                          Invalidated
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-3">
                          {study.outcomes.invalidated.map(
                            (item, index) => (
                              <p
                                key={index}
                                className="text-sm text-muted-foreground leading-relaxed"
                              >
                                {item}
                              </p>
                            ),
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Lightbulb className="h-5 w-5" />
                          Unexpected
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-3">
                          {study.outcomes.unexpected.map(
                            (item, index) => (
                              <p
                                key={index}
                                className="text-sm text-muted-foreground leading-relaxed"
                              >
                                {item}
                              </p>
                            ),
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Reflection */}
              <section
                id="reflection"
                className="py-16 md:py-20 border-t scroll-mt-24"
              >
                <SectionHeading number="12" title="Reflection" />

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <Label>What I would do differently</Label>

                    <div className="space-y-5">
                      {study.reflection.doDifferently.map(
                        (item, index) => (
                          <div
                            key={index}
                            className="flex gap-4 items-start"
                          >
                            <span className="text-sm text-muted-foreground">
                              0{index + 1}
                            </span>

                            <p className="leading-relaxed">{item}</p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <div>
                    <Label>What I learned</Label>

                    <div className="space-y-5">
                      {study.reflection.learned.map((item, index) => (
                        <div
                          key={index}
                          className="flex gap-4 items-start"
                        >
                          <Check className="h-5 w-5 shrink-0 mt-0.5" />

                          <p className="leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Card className="mt-12 bg-muted/30">
                  <CardContent className="p-8 md:p-10">
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                      Bottom line
                    </p>

                    <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
                      {study.headline}
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Next project */}
              <section className="py-16 border-t">
                <div className="flex justify-between items-center gap-5">
                  <Button variant="outline" asChild>
                    <Link to="/case-studies">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      All case studies
                    </Link>
                  </Button>

                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                  >
                    View next project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudy;