"use client";

import { useRef } from "react";
import React from "react";
import { Intro } from "./components/intro";
import { Navbar } from "./components/navbar";

export default function Home() {
  const topRef = useRef<HTMLDivElement | null>(null);
  const diningRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <header className="sticky top-0 z-10">
        <Navbar topRef={topRef} diningRef={diningRef} aboutRef={aboutRef} />
      </header>

      <main className="flex flex-col justify-center items-center">
        <Intro topRef={topRef} diningRef={diningRef} aboutRef={aboutRef}/>
        <hr className="w-[100vw] border-[#1d2f54]"/>

        <h1 className="font-semibold text-2xl p-2 text-[#1d2f54]" ref={topRef}>Highest Rated Foods</h1>
        <hr className="w-[22vw] border-[#1d2f54] p-2"/>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1 className="font-semibold text-2xl p-2 text-[#1d2f54]" ref={diningRef}>Dining Commons</h1>
        <hr className="w-[22vw] border-[#1d2f54] p-2"/>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1 className="font-semibold text-2xl p-2 text-[#1d2f54]" ref={aboutRef}>About</h1>
        <hr className="w-[22vw] border-[#1d2f54] p-2"/>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </main>
    </>
  );
}
