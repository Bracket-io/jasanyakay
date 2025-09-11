import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProgramOverview } from "@/components/ProgramOverview";
import { CommunitySection } from "@/components/CommunitySection";
import { ApplicationSection } from "@/components/ApplicationSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <section id="overview">
          <ProgramOverview />
        </section>
        <section id="community">
          <CommunitySection />
        </section>
        <section id="apply">
          <ApplicationSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
