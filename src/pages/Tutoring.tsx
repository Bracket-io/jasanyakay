import { Link } from "react-router-dom";

const Tutoring = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-10 sm:py-16">

        {/* Header */}
        <header className="flex items-center justify-between mb-20 sm:mb-28">
          <Link
            to="/tutoring"
            className="text-sm font-bold tracking-tight"
          >
            Kay Jasanya
          </Link>

          <a
            href="mailto:your@email.com"
            className="text-sm underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            Get in touch
          </a>
        </header>

        {/* Hero */}
        <section className="mb-24 sm:mb-32">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-5">
            Maths · Data · Technical
          </p>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl mb-6">
            Learn the problem.
            <br />
            Understand the solution.
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Personalised tutoring designed to help students understand
            difficult concepts, solve problems independently, and build
            confidence.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:your@email.com"
              className="inline-flex items-center border border-foreground px-5 py-3 text-sm font-bold hover:bg-foreground hover:text-background transition-colors"
            >
              Get in touch →
            </a>
          </div>
        </section>

        {/* What I teach */}
        <section className="mb-24 sm:mb-32">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
              What I can help with
            </h2>
          </div>

          <div className="border-t border-border">

            {/* Maths */}
            <article className="py-8 border-b border-border">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-2">
                    Mathematics
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                    Support for students building their mathematical
                    foundations or preparing for exams.
                  </p>
                </div>

                <p className="text-xs text-muted-foreground whitespace-nowrap">
                  GCSE · Functional Skills
                </p>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-5 text-sm">
                <span>Fractions</span>
                <span>Percentages</span>
                <span>Ratio</span>
                <span>Algebra</span>
                <span>Geometry</span>
                <span>Probability</span>
                <span>Statistics</span>
                <span>Exam preparation</span>
              </div>
            </article>

            {/* Data */}
            <article className="py-8 border-b border-border">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-2">
                    Data & Statistics
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                    Practical support for students learning to work with
                    data, statistics, spreadsheets, and quantitative
                    problems.
                  </p>
                </div>

                <p className="text-xs text-muted-foreground whitespace-nowrap">
                  Academic · Practical
                </p>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-5 text-sm">
                <span>Statistics</span>
                <span>Data analysis</span>
                <span>Excel</span>
                <span>Quantitative methods</span>
                <span>Data interpretation</span>
              </div>
            </article>

            {/* Technical */}
            <article className="py-8 border-b border-border">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-2">
                    Engineering & Technical
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                    Support for students working through technical,
                    engineering, and introductory programming concepts.
                  </p>
                </div>

                <p className="text-xs text-muted-foreground whitespace-nowrap">
                  University · Technical
                </p>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-5 text-sm">
                <span>Engineering mathematics</span>
                <span>Electrical engineering</span>
                <span>Programming fundamentals</span>
                <span>Technical problem solving</span>
              </div>
            </article>

          </div>
        </section>

        {/* How lessons work */}
        <section className="mb-24 sm:mb-32">
          <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8">
            How lessons work
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">

            <div>
              <p className="text-xs font-bold text-muted-foreground mb-3">
                01
              </p>

              <h3 className="text-lg font-bold mb-2">
                Identify the gaps
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                We start by understanding what the student already knows,
                where they are struggling, and what they need to improve.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold text-muted-foreground mb-3">
                02
              </p>

              <h3 className="text-lg font-bold mb-2">
                Build a focused plan
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Lessons are structured around the student's goals rather
                than following a one-size-fits-all approach.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold text-muted-foreground mb-3">
                03
              </p>

              <h3 className="text-lg font-bold mb-2">
                Learn by doing
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Concepts are explained clearly, followed by guided examples
                and independent practice.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold text-muted-foreground mb-3">
                04
              </p>

              <h3 className="text-lg font-bold mb-2">
                Build confidence
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                The goal is not simply getting the answer. Students learn
                how to approach unfamiliar questions themselves.
              </p>
            </div>

          </div>
        </section>

        {/* Approach */}
        <section className="mb-24 sm:mb-32">
          <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8">
            My approach
          </h2>

          <div className="border-t border-border">

            <div className="py-6 border-b border-border">
              <h3 className="font-bold mb-2">
                Understand, don't memorise
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                I focus on helping students understand why a method works,
                so they can recognise when and how to use it in a new
                question.
              </p>
            </div>

            <div className="py-6 border-b border-border">
              <h3 className="font-bold mb-2">
                Adapt to the student
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Everyone learns differently. Lessons can slow down when a
                concept needs more attention or move forward when the
                student is ready.
              </p>
            </div>

            <div className="py-6 border-b border-border">
              <h3 className="font-bold mb-2">
                Practice matters
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Understanding a concept is only the beginning. Students
                need opportunities to apply it, make mistakes, and learn
                how to correct them.
              </p>
            </div>

          </div>
        </section>

        {/* About */}
        <section className="mb-24 sm:mb-32">
          <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8">
            About your tutor
          </h2>

          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
              Kay Jasanya
            </h3>

            <p className="text-base leading-relaxed text-muted-foreground mb-5">
              I have an engineering and analytical background, with
              experience across technology, data, product, and education.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground mb-6">
              My approach to teaching comes from the same principle I use
              when solving technical problems: break difficult ideas into
              smaller pieces, understand the underlying logic, and build
              from there.
            </p>

            <ul className="space-y-2 text-sm">
              <li>• M.S. Engineering Management — Johns Hopkins University</li>
              <li>• B.S. Electrical Engineering — Morgan State University</li>
              <li>• Experience working with students and academic data</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border pt-12 pb-8">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-5">
            Get started
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5">
            Ready to get started?
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mb-8">
            Get in touch to discuss the student's current level, goals,
            subject, and availability.
          </p>

          <a
            href="mailto:your@email.com"
            className="inline-flex items-center border border-foreground px-5 py-3 text-sm font-bold hover:bg-foreground hover:text-background transition-colors"
          >
            Get in touch →
          </a>
        </section>

      </div>
    </main>
  );
};

export default Tutoring;
