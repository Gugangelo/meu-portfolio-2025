import Home from "./home/page";
import AboutMe from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Portfolio() {
  return (
    <>
      <section className="bg-blue-500">
        <Home />
      </section>
      
      <section id="about">
        <AboutMe />
      </section>
      
      <section id="projects" className="bg-blue-500">
        <Projects />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
