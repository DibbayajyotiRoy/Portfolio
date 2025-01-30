import HeroSection from "@/components/HeroSection";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Projects />
      <Resume />
    </>
  );
}
