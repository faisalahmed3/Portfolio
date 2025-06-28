import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import ScrollToTop from "./Component/ScrollToTop/ScrollToTop";


function App() {
  return (
    <div className="bg-gradient-to-br from-[#1a0c10] via-[#4b0c27] to-[#ff3c38] text-white font-sans scroll-smooth">
      <Navbar />

      <main className="overflow-x-hidden">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-16">
          <About />
        </section>

        <section id="skills" className="py-16">
          <Skills />
        </section>

        <section id="projects" className="py-16">
          <Projects />
        </section>

        <section id="experience" className="py-16">
          <Experience />
        </section>

        <section id="contact" className="py-16">
          <Contact />
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}


export default App;
