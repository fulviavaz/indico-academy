'use client'

import Hero from "@/components/hero/hero";
import Nav from "../components/nav/nav";
import Speakers from "@/components/speakers/speakers";
import Subjects from "@/components/subjects/subjects";

export default function Home() {
  return (
    <main className="max-w-[1280px] mx-auto items-center justify-center">
      <Nav />
      <Hero />
      <Speakers />
      <Subjects />
  </main>
  );
}
