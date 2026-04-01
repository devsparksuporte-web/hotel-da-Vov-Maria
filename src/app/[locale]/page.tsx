'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Diferenciais from "@/components/Diferenciais";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import UIExtensions from "@/components/UIExtensions";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <UIExtensions />
      <Navbar />
      <Hero />
      <div className="reveal">
        <About />
      </div>
      <div className="reveal">
        <Rooms />
      </div>
      <div className="reveal">
        <Diferenciais />
      </div>
      <div className="reveal">
        <Reviews />
      </div>
      <div className="reveal">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
