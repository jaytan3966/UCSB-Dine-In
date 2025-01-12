"use client";

import { useState, useEffect } from "react";
import { useRef } from "react";
import React from "react";
import { Intro } from "./components/intro";
import { Navbar } from "./components/navbar";
import Reviews from "./components/reviewsGrid";
import { ReviewProps } from "./components/reviewsGrid";
import Halls from "./components/halls";

export default function Home() {
  const topRef = useRef<HTMLDivElement | null>(null);
  const diningRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const [topreviews, setReviews] = useState<ReviewProps[]>([]);

  useEffect(() => {
    async function getReviews(){
      try {
        const response = await fetch("/api/routing");
        if (response.ok) {
          let reviewz = await response.json();
          reviewz.sort((i: ReviewProps, j: ReviewProps) => j.rating - i.rating);
          reviewz = reviewz.slice(0,5);
      
          setReviews(reviewz);
        } else {
          console.error("Failed to fetch reviews");
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }
    getReviews();
  }, [])

  return (
    <>
      <header className="sticky top-0 z-10">
        <Navbar topRef={topRef} diningRef={diningRef} aboutRef={aboutRef} />
      </header>

      <main className="flex flex-col justify-center items-center">
        <Intro topRef={topRef} diningRef={diningRef} aboutRef={aboutRef}/>
        

        <h1 className="font-semibold text-2xl p-2 pt-6 text-[#1d2f54]" ref={topRef}>Highest Rated Foods</h1>
        <hr className="w-[22vw] border-[#1d2f54] p-2"/>
        <Reviews reviews={topreviews}/>
        <h1 className="font-semibold text-2xl p-2 text-[#1d2f54]" ref={diningRef}>Dining Commons</h1>
        <hr className="w-[22vw] border-[#1d2f54] p-2"/>
        <Halls />
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
