import Home from "./home/page";
import AboutMe from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import ParticleCanvas from "@/components/ParticleCanvas";

export default function Portfolio() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#0A0B1A] via-[#12132C] to-[#1A1C3F]">
      <ParticleCanvas />

      {/* Removidos os fundos individuais das seções para que o gradiente do container apareça */}
      <section id="home" className="relative z-10">
        <Home />
      </section>
      
      <section id="about" className="relative z-10">
        <AboutMe />
      </section>
      
      <section id="projects" className="relative z-10">
        <Projects />
      </section>
      
      <section id="contact" className="relative z-10">
        <Contact />
      </section>
    </div>
  );
}