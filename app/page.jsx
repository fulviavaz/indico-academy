'use client'

import Hero from "@/components/hero/hero";
import Nav from "../components/nav/nav";
import Speakers from "@/components/speakers/speakers";

export default function Home() {
  return (
    <main className="max-w-[1280px] mx-auto">
      <Nav />
      <Hero />
      <Speakers />
  </main>
  );
}
