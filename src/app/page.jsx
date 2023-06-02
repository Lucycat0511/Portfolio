import About from "./components/main/About";
import Contact from "./components/main/Contact";
import Footer from "./components/main/Footer";
import Hero from "./components/main/Hero";
import Navbar from "./components/main/Navbar";
import Projects from "./components/main/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-52  mx-body my-8">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
