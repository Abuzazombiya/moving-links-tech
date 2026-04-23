import About from "@/Components/About";
import { Contact } from "@/Components/Contact";
import Hero from "@/Components/Hero";
import OurWork from "@/Components/OurWork";
import Services from "@/Components/Services";

export default function Home() {
  return (
   <main className="w-auto">
    <Hero />
    <Services />
    <OurWork />
    <About />
    <Contact />
   </main>
  );
}
