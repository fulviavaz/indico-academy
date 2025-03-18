'use client'

import Hero from "@/components/hero/hero";
import Nav from "../components/nav/nav";
import Speakers from "@/components/speakers/speakers";
import Subjects from "@/components/subjects/subjects";
import Modalities from "@/components/modalities/modalities";
import Form from "@/components/form/form";
import Footer from "@/components/footer/footer";
import About from "@/components/about/about";
import Award from "@/components/award/award";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <>
    <main className="max-w-[1280px] mx-auto items-center justify-center">
      <Nav />
        <Hero />
        <About />
      <Speakers />
      <Subjects />
        <Modalities />
        <Award />
        <Form />
        <Contact/>
    </main>
      <Footer />
      </>
  );
}
