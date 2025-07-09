import { Poppins } from "next/font/google";

import Hero from "./components/Hero";
import Navbar from "./components/includes/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // add whatever weights you need
  variable: "--font-poppins", // optional if you're using CSS variables
  display: "swap",
});

export default function Home() {
  return (
    <main className={`bg-[var(--background)] ${poppins.className}`}>
      <Navbar />
      <Hero />
    </main>
  );
}
