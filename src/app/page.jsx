import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import DarkModeSwitch from "./components/DarkModeSwitch";

export default function Home() {
  return (
    <>
      <DarkModeSwitch />
      <Navbar />
      <main className="flex flex-col gap-32 my-20">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
