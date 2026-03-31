import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full border-b border-border">
      <div className="max-w-[900px] mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="text-sm font-bold tracking-tight hover:underline">
          Kay Jasanya
        </Link>
        <nav className="flex items-center gap-8">
          <Link to="/work" className="text-sm text-muted-foreground hover:text-foreground hover:underline">
            Work
          </Link>
          <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground hover:underline">
            About
          </Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};
