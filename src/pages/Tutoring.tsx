import { FormEvent, useState } from "react";

const superprofUrl =
  "https://www.superprof.co.uk/from-johns-hopkins-math-tutor-with-years-experience-secondary-and-higher-education.html";

const tutorEmail = "tutoring@kayjasanya.com";

const Tutoring = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What ages and levels do you tutor?",
      answer:
        "I work with students across a range of ages and abilities, from primary school through secondary school. This includes KS2, KS3, GCSE Maths, and Functional Skills Maths.",
    },
    {
      question: "Do you teach primary school maths?",
      answer:
        "Yes. I work with younger students on building strong mathematical foundations, developing confidence, and making sure they understand the ideas behind the answers rather than simply memorising methods.",
    },
    {
      question: "Do you help with GCSE Maths?",
      answer:
        "Yes. I support both Foundation and Higher GCSE Maths, including topic-by-topic support, homework, revision, exam technique, and preparation for specific exams.",
    },
    {
      question: "Do you teach Functional Skills Maths?",
      answer:
        "Yes. I provide support for Functional Skills Maths, including Level 1 and Level 2, depending on the student's programme and exam.",
    },
    {
      question: "Are lessons online or in person?",
      answer:
        "Lessons are primarily delivered online, making it easier to schedule sessions around school, work, and other commitments.",
    },
    {
      question: "How long is a lesson?",
      answer:
        "The standard lesson is 60 minutes. Shorter sessions can also be considered for younger students depending on their age, attention span, and learning needs.",
    },
    {
      question: "Can you help with homework?",
      answer:
        "Yes. Homework can be incorporated into lessons, but the focus is on helping the student understand the underlying concept so they can solve similar problems independently.",
    },
    {
      question: "How do I book a lesson?",
      answer:
        "Complete the enquiry form below and tell me a little about the student, what they need help with, and your preferred lesson times. I'll then get back to you to discuss the next steps.",
    },
  ];

  const subjects = [
    {
      title: "Primary Maths",
      description:
        "Build strong foundations and confidence with numbers, arithmetic, fractions, problem solving, geometry, and measurement.",
      topics: [
        "Number & arithmetic",
        "Fractions, decimals & percentages",
        "Times tables",
        "Problem solving",
        "Geometry & measurement",
        "Confidence building",
      ],
    },
    {
      title: "KS3 Maths",
      description:
        "Develop the skills students need as they move into more advanced secondary mathematics.",
      topics: [
        "Number",
        "Algebra",
        "Ratio & proportion",
        "Geometry",
        "Statistics & probability",
        "Problem solving",
      ],
    },
    {
      title: "GCSE Maths",
      description:
        "Structured support for students preparing for GCSE Maths, including both Foundation and Higher content.",
      topics: [
        "Foundation & Higher",
        "Algebra",
        "Geometry",
        "Statistics",
        "Probability",
        "Exam preparation",
      ],
    },
    {
      title: "Functional Skills Maths",
      description:
        "Practical, focused support for students preparing for Functional Skills Maths assessments.",
      topics: [
        "Number",
        "Fractions & percentages",
        "Ratio",
        "Money",
        "Measures",
        "Exam preparation",
      ],
    },
  ];

  const lessonSteps = [
    {
      number: "01",
      title: "Understand",
      description:
        "We identify what the student already understands and where they are getting stuck.",
    },
    {
      number: "02",
      title: "Explain",
      description:
        "I break difficult concepts into smaller, clearer steps using examples that make sense to the student.",
    },
    {
      number: "03",
      title: "Practise",
      description:
        "The student works through questions with guidance, gradually taking more responsibility for solving them.",
    },
    {
      number: "04",
      title: "Build confidence",
      description:
        "We review mistakes, reinforce the important ideas, and make sure the student can apply what they have learned independently.",
    },
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const parentName = String(formData.get("parentName") || "");
    const studentName = String(formData.get("studentName") || "");
    const studentLevel = String(formData.get("studentLevel") || "");
    const email = String(formData.get("email") || "");
    const lessonType = String(formData.get("lessonType") || "");
    const preferredTime = String(formData.get("preferredTime") || "");
    const message = String(formData.get("message") || "");

    const subject = `Maths tutoring enquiry — ${studentName || "New enquiry"}`;

    const body = `
Hello Kay,

I'd like to enquire about maths tutoring.

Parent/Guardian name:
${parentName}

Student name:
${studentName}

Student's level:
${studentLevel}

Parent/Guardian email:
${email}

Preferred lesson:
${lessonType}

Preferred day/time:
${preferredTime}

What the student needs help with:
${message}

Thank you.
    `.trim();

    const mailtoUrl =
      `mailto:${tutorEmail}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* =========================================================
          HEADER
      ========================================================= */}
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-6">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-lg font-bold tracking-tight">
                Kay Jasanya
              </p>

              <p className="text-xs text-muted-foreground mt-1">
                Maths Tutor
              </p>
            </div>

            <a
              href="#contact"
              className="text-sm font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 sm:px-8">

        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="py-20 sm:py-28 max-w-3xl">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">
            Primary · KS3 · GCSE · Functional Skills
          </p>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            Maths tutoring that meets students where they are.
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-2xl mb-8">
            Patient, personalised 1-to-1 maths support for students from
            primary school through secondary school — helping them understand
            maths, build confidence, and make progress.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-foreground px-5 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Book a lesson
            </a>

            <a
              href={superprofUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
            >
              View my Superprof profile →
            </a>
          </div>
        </section>

        {/* =========================================================
            APPROACH
        ========================================================= */}
        <section className="border-t border-border py-20 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-5">
                My approach
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Understanding first. Answers second.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Maths can become frustrating when a student knows how to get
                an answer sometimes, but does not understand why the method
                works.
              </p>

              <p>
                My goal is to make difficult concepts feel manageable. I break
                problems down, explain the reasoning behind each step, and give
                students enough practice to become comfortable solving
                questions independently.
              </p>

              <p>
                Every student starts from a different place, so lessons are
                adapted to their current ability, goals, and confidence level.
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================
            SUBJECTS
        ========================================================= */}
        <section className="border-t border-border py-20 sm:py-24">

          <div className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-5">
              What I teach
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Maths support across different stages.
            </h2>

            <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
              Whether a student needs help strengthening the basics, keeping
              up with schoolwork, or preparing for an important exam, lessons
              are tailored to what they need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {subjects.map((subject) => (
              <article
                key={subject.title}
                className="border border-border p-6 sm:p-8"
              >
                <h3 className="text-xl font-bold tracking-tight mb-3">
                  {subject.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {subject.description}
                </p>

                <ul className="space-y-2 text-sm">
                  {subject.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-3"
                    >
                      <span className="text-muted-foreground">
                        —
                      </span>

                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

          </div>
        </section>

        {/* =========================================================
            LESSON STRUCTURE
        ========================================================= */}
        <section className="border-t border-border py-20 sm:py-24">

          <div className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-5">
              A typical lesson
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              A simple structure that keeps students learning.
            </h2>
          </div>

          <div className="border-t border-border">

            {lessonSteps.map((step) => (
              <div
                key={step.number}
                className="grid grid-cols-[48px_1fr] sm:grid-cols-[72px_180px_1fr] gap-4 sm:gap-8 py-7 border-b border-border"
              >
                <span className="text-xs font-bold text-muted-foreground pt-1">
                  {step.number}
                </span>

                <h3 className="text-base font-bold sm:pt-0">
                  {step.title}
                </h3>

                <p className="col-span-2 sm:col-span-1 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* =========================================================
            PRICING
        ========================================================= */}
        <section className="border-t border-border py-20 sm:py-24">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-5">
                Lessons
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Flexible lesson options.
              </h2>
            </div>

            <div className="space-y-0 border-t border-border">

              <div className="flex items-center justify-between gap-6 py-5 border-b border-border">
                <div>
                  <p className="font-bold text-sm">
                    60-minute lesson
                  </p>

                  <p className="text-xs text-muted-foreground mt-1">
                    Standard 1-to-1 session
                  </p>
                </div>

                <p className="font-bold whitespace-nowrap">
                  £25
                </p>
              </div>

              <div className="flex items-center justify-between gap-6 py-5 border-b border-border">
                <div>
                  <p className="font-bold text-sm">
                    30-minute lesson
                  </p>

                  <p className="text-xs text-muted-foreground mt-1">
                    Particularly suitable for younger students
                  </p>
                </div>

                <p className="font-bold whitespace-nowrap">
                  £15
                </p>
              </div>

              <div className="py-5">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Longer-term arrangements and exam-preparation sessions can be
                  discussed depending on the student's needs.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            REVIEWS
        ========================================================= */}
        <section className="border-t border-border py-20 sm:py-24">

          <div className="max-w-3xl">

            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8">
              Parent feedback
            </p>

            <blockquote className="text-xl sm:text-2xl leading-relaxed font-medium tracking-tight">
              “I highly recommend Kay as a math tutor. I know Kay through our
              church, and he tutored my son in 9th-grade Algebra.
              <br />
              <br />
              What I appreciated most about Kay was his patience and his ability
              to break down difficult concepts in a way that made them easier to
              understand. He never rushed through a topic. Instead, he took the
              time to explain each step clearly and gave my son multiple
              opportunities to practice until he felt more comfortable and
              confident.
              <br />
              <br />
              I saw firsthand how Kay’s calm and encouraging approach helped my
              son work through challenging Algebra concepts. He is patient,
              supportive, and genuinely committed to helping students understand
              rather than simply giving them the answers.
              <br />
              <br />
              I would confidently recommend Kay to any student or parent looking
              for a knowledgeable, dependable, and encouraging tutor.”
            </blockquote>

            <p className="text-sm text-muted-foreground mt-8">
              — Parent of a 9th-grade Algebra student
            </p>

          </div>
        </section>

        {/* =========================================================
            SUPERPROF
        ========================================================= */}
        <section className="border-t border-border py-20 sm:py-24">

          <div className="border border-border p-8 sm:p-10">

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">

              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
                  More feedback
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                  See my tutoring profile on Superprof.
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  You can view my Superprof profile for additional information
                  about my tutoring experience, approach, and feedback from
                  people I have worked with.
                </p>
              </div>

              <a
                href={superprofUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-foreground px-5 py-3 text-sm font-medium whitespace-nowrap hover:bg-foreground hover:text-background transition-colors"
              >
                View Superprof →
              </a>

            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================= */}
        <section className="border-t border-border py-20 sm:py-24">

          <div className="mb-10">

            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-5">
              FAQ
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Questions parents and students often ask.
            </h2>

          </div>

          <div className="border-t border-border">

            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-border"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >

                    <span className="text-sm font-bold">
                      {faq.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`text-xl text-muted-foreground transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>

                  </button>

                  {isOpen && (
                    <div className="pb-6 pr-10">
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </section>

        {/* =========================================================
            BOOKING / ENQUIRY FORM
        ========================================================= */}
        <section
          id="contact"
          className="border-t border-border py-20 sm:py-28"
        >

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">

            {/* Left side */}
            <div>

              <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">
                Get started
              </p>

              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Let's make maths feel easier.
              </h2>

              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Tell me a little about the student and what they would like
                help with. I'll get back to you to discuss availability and
                arrange a lesson.
              </p>

              <div className="space-y-4 text-sm">

                <div>
                  <p className="font-bold">
                    Online 1-to-1 lessons
                  </p>

                  <p className="text-muted-foreground mt-1">
                    Flexible sessions designed around the student's needs.
                  </p>
                </div>

                <div>
                  <p className="font-bold">
                    Primary through secondary
                  </p>

                  <p className="text-muted-foreground mt-1">
                    Support for primary, KS3, GCSE, and Functional Skills
                    Maths.
                  </p>
                </div>

                <div>
                  <p className="font-bold">
                    Questions first
                  </p>

                  <p className="text-muted-foreground mt-1">
                    No pressure to book before we've discussed what the student
                    needs.
                  </p>
                </div>

              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="border border-border p-6 sm:p-8 space-y-6"
            >

              <div>
                <h3 className="text-xl font-bold tracking-tight">
                  Send a tutoring enquiry
                </h3>

                <p className="text-sm text-muted-foreground mt-2">
                  Complete the form and your email app will open with the
                  enquiry ready to send.
                </p>
              </div>

              {/* Parent name */}
              <div>
                <label
                  htmlFor="parentName"
                  className="block text-xs font-bold uppercase tracking-widest mb-2"
                >
                  Parent / Guardian name
                </label>

                <input
                  id="parentName"
                  name="parentName"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground transition-colors"
                />
              </div>

              {/* Student name */}
              <div>
                <label
                  htmlFor="studentName"
                  className="block text-xs font-bold uppercase tracking-widest mb-2"
                >
                  Student name
                </label>

                <input
                  id="studentName"
                  name="studentName"
                  type="text"
                  required
                  placeholder="Student's name"
                  className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground transition-colors"
                />
              </div>

              {/* Student level */}
              <div>
                <label
                  htmlFor="studentLevel"
                  className="block text-xs font-bold uppercase tracking-widest mb-2"
                >
                  Student's level
                </label>

                <select
                  id="studentLevel"
                  name="studentLevel"
                  required
                  defaultValue=""
                  className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground transition-colors"
                >
                  <option value="" disabled>
                    Select a level
                  </option>

                  <option value="Primary / KS2">
                    Primary / KS2
                  </option>

                  <option value="KS3">
                    KS3
                  </option>

                  <option value="GCSE Foundation">
                    GCSE Foundation
                  </option>

                  <option value="GCSE Higher">
                    GCSE Higher
                  </option>

                  <option value="Functional Skills">
                    Functional Skills
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-widest mb-2"
                >
                  Your email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground transition-colors"
                />
              </div>

              {/* Lesson type */}
              <div>
                <label
                  htmlFor="lessonType"
                  className="block text-xs font-bold uppercase tracking-widest mb-2"
                >
                  Lesson preference
                </label>

                <select
                  id="lessonType"
                  name="lessonType"
                  required
                  defaultValue=""
                  className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground transition-colors"
                >
                  <option value="" disabled>
                    Select a lesson
                  </option>

                  <option value="30-minute lesson">
                    30-minute lesson
                  </option>

                  <option value="60-minute lesson">
                    60-minute lesson
                  </option>

                  <option value="Not sure yet">
                    Not sure yet
                  </option>
                </select>
              </div>

              {/* Preferred time */}
              <div>
                <label
                  htmlFor="preferredTime"
                  className="block text-xs font-bold uppercase tracking-widest mb-2"
                >
                  Preferred day / time
                </label>

                <input
                  id="preferredTime"
                  name="preferredTime"
                  type="text"
                  placeholder="e.g. Tuesday after 5pm"
                  className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-widest mb-2"
                >
                  What does the student need help with?
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the topics they are struggling with, upcoming exams, or what you'd like them to improve."
                  className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground transition-colors resize-y"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full border border-foreground px-6 py-3.5 text-sm font-bold hover:bg-foreground hover:text-background transition-colors"
              >
                Send tutoring enquiry →
              </button>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Clicking the button will open your default email application
                with the enquiry details filled in. You can review the message
                before sending it.
              </p>

            </form>

          </div>
        </section>
      </main>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-border">

        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-8">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

            <p className="text-sm font-medium">
              Kay Jasanya · Maths Tutor
            </p>

            <p className="text-xs text-muted-foreground">
              Primary · KS3 · GCSE · Functional Skills
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default Tutoring;
