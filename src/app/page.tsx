import CanvasContainer from "@/components/CanvasContainer";
import ParticleField from "@/components/ParticleField";
import BackgroundElements from "@/components/BackgroundElements";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import SectionTransition from "@/components/SectionTransition";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";

import Loader from "@/components/Loader";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <Loader />
      <BackgroundElements />
      <CanvasContainer>
        <ParticleField count={200} />
      </CanvasContainer>
      
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <Certificates />
      <SectionTransition text="PASSIONS & LANGUAGES" />
      <Interests />
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
