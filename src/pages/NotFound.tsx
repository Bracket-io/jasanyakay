import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Page not found</h1>
      <p className="text-sm text-muted-foreground mb-8 max-w-[600px]">
        That page doesn't exist. Try the selected work or get in touch.
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <Link to="/" className="underline hover:text-muted-foreground">
          Home
        </Link>
        <Link to="/work" className="underline hover:text-muted-foreground">
          Selected work
        </Link>
        <Link to="/contact" className="underline hover:text-muted-foreground">
          Contact
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
