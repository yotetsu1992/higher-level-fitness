import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import AuroraShader from "@/components/AuroraShader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Results from "@/components/Results";
import AIChat from "@/components/AIChat";
import Pricing from "@/components/Pricing";
import Application from "@/components/Application";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <AuroraShader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Results />
        <AIChat />
        <Pricing />
        <Application />
      </main>
      <Footer />
    </>
  );
}
