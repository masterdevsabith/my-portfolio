import { Poppins } from "next/font/google";

import Hero from "./components/Hero";
import Navbar from "./components/includes/Navbar";
import About from "./components/About";
import ContentCreation from "./components/ContentCreation";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/includes/Footer";
import FadeIn from "./components/ui/fadein-wrapper";
import ScrollerContext from "./components/includes/ScrollerContext";
import Skills from "./components/Skills";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // add whatever weights you need
  variable: "--font-poppins", // optional if you're using CSS variables
  display: "swap",
});

export default function Home() {
  return (
    <ScrollerContext>
      <main className={`relative bg-[var(--background)] ${poppins.className}`}>
        <Navbar />

        <Hero />

        <About />

        <ContentCreation />

        {/* <Skills /> */}

        <Works />

        <Contact />

        {/* <Footer /> */}
      </main>
    </ScrollerContext>
  );
}
