import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AnimatedToolsSlider } from "@/components/AnimatedToolsSlider";
import { StatsSection } from "@/components/StatsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PipelineSection } from "@/components/PipelineSection";
import { ToolsGridSection } from "@/components/ToolsGridSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AnimatedToolsSlider />
        <StatsSection />
        <PipelineSection />
        <ProjectsSection />
        <ToolsGridSection />
        <BeforeAfterSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;