import { Layout } from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold tracking-tight mb-8">Let's connect.</h1>

      <div className="space-y-4 text-sm">
        <p>
          <span className="text-muted-foreground">Email: </span>
          <a
            href="mailto:jaskay@example.com"
            className="underline hover:text-muted-foreground"
          >
            jaskay@example.com
          </a>
        </p>
        <p>
          <span className="text-muted-foreground">LinkedIn: </span>
          <a
            href="https://linkedin.com/in/kayjasanya"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-muted-foreground"
          >
            linkedin.com/in/kayjasanya
          </a>
        </p>
        <p>
          <span className="text-muted-foreground">Calendly: </span>
          <a
            href="https://calendly.com/jaskay"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-muted-foreground"
          >
            calendly.com/jaskay
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default Contact;
