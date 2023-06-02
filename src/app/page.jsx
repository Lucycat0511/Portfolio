import About from "./components/main/About";
import Contact from "./components/main/Contact";
import Hero from "./components/main/Hero";
import Projects from "./components/main/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
