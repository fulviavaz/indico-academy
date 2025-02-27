'use client'

import Hero from "@/components/hero/hero";
import Nav from "../components/nav/nav";

export default function Home() {
  return (
    <main className="max-w-[1280px] mx-auto">
      <Nav />
      <Hero />
  </main>
  );
}
