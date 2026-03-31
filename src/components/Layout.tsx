import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-[900px] w-full mx-auto px-6 py-16">
        {children}
      </main>
      <footer className="border-t border-border">
        <div className="max-w-[900px] mx-auto px-6 py-6">
          <p className="text-xs text-muted-foreground">© 2025 Kay Jasanya</p>
        </div>
      </footer>
    </div>
  );
};
