import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HeroMetricsSection } from "@/components/HeroMetricsSection";
import { AnimatedToolsSlider } from "@/components/AnimatedToolsSlider";
import { ProjectsSection } from "@/components/ProjectsSection";
import { DevOpsToolchainFlow } from "@/components/DevOpsToolchainFlow";
import { TerminalSimulation } from "@/components/TerminalSimulation";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { AboutSection } from "@/components/AboutSection";
import { WhyHireMeSection } from "@/components/WhyHireMeSection";
import { ProductionOptimizationSection } from "@/components/ProductionOptimizationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { GitHubActivitySection } from "@/components/GitHubActivitySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WorkWithMeSection } from "@/components/WorkWithMeSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <HeroMetricsSection />
          <div className="py-10" />
          <AnimatedToolsSlider />
          <DevOpsToolchainFlow />
          <WhyHireMeSection />
          <ProjectsSection />
          <TerminalSimulation />
          <ProductionOptimizationSection />
          <BeforeAfterSection />
          <AboutSection />
          <ExperienceSection />
          <GitHubActivitySection />
          <TestimonialsSection />
          <WorkWithMeSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;

