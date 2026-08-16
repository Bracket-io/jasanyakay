import { Layout } from "@/components/Layout";

const links = [
  { label: "Email", value: "iamjasanyakay@gmail.com", href: "mailto:iamjasanyakay@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/jaskay", href: "https://www.linkedin.com/in/jaskay" },
  { label: "X", value: "x.com/JasanyaKayode", href: "https://x.com/JasanyaKayode" },
  { label: "Medium", value: "jaskay.medium.com", href: "https://jaskay.medium.com" },
];

const Contact = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold tracking-tight mb-4">
        Building something interesting? Let's talk.
      </h1>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[600px] mb-12">
        I'm open to senior product roles, advisory work, and conversations about
        data products, civic systems, fintech, and applied AI.
      </p>

      <div className="space-y-4 text-sm">
        {links.map((l) => (
          <p key={l.label}>
            <span className="text-muted-foreground">{l.label}: </span>
            <a
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={l.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="underline hover:text-muted-foreground"
            >
              {l.value}
            </a>
          </p>
        ))}
      </div>
    </Layout>
  );
};

export default Contact;
