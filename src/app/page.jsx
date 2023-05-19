import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import DarkModeSwitch from "./components/util/DarkModeSwitch";
import Journey from "./components/Journey";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <DarkModeSwitch />
      <Navbar />
      <main className="flex flex-col gap-56 my-20">
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
