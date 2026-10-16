import { Hero } from "@/components/home/hero";
import { ProofBar } from "@/components/home/proof-bar";
import { ProblemNavigator } from "@/components/home/problem-navigator";
import { SolutionsGrid } from "@/components/home/solutions-grid";
import { Journey } from "@/components/home/journey";
import { SmartTeaser } from "@/components/home/smart-teaser";
import { ProjectsPreview } from "@/components/home/projects-preview";
import { Impact, Faq, FinalCta } from "@/components/home/impact-cta";
import { SectorsShowcase } from "@/components/home/sectors";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofBar />
      <ProblemNavigator />
      <SolutionsGrid />
      <Journey />
      <SmartTeaser />
      <SectorsShowcase />
      <ProjectsPreview />
      <Impact />
      <Faq />
      <FinalCta />
    </>
  );
}
