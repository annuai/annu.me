"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from './components/header'
import Footer from './components/footer'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link'
import { GoogleAnalytics } from "nextjs-google-analytics"
import { motion } from "framer-motion"

const inter = Inter({ subsets: ['latin'] })
const variants = {
  hidden: { opacity: 0, x: 0, y: -50 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 100, y: 0 },
}

const Home = () => {
    // Count state
  // This will be displayed in the UI
  const [textThatChanges, setTextThatChanges] = React.useState<string>('I stand where innovation and design meets technology');
  // const textArray = ['I stand where innovation and design meets technology', 'Don\'t just think, Do it!'];
  const textArray = ['I stand where innovation and design meets technology', 'I stand where innovation and design meets technology'];
  let counter = 0;

  // Ref
  // This will be used to store the interval
  const intervalref = useRef<number | null>(null);

  // Start the interval
  // This will be called when the user clicks on the start button
  const startInterval = () => {
    // if (intervalref.current !== null) return;
    intervalref.current = window.setInterval(() => {
      counter = counter + 1;
      if(counter == 2){
        counter = 0;
      }
      else if(counter == 1){

      }
      setTextThatChanges(textArray[counter]);
    }, 15000);
  };

  // Stop the interval
  // This will be called when the user clicks on the stop button
  const stopInterval = () => {
    if (intervalref.current) {
      window.clearInterval(intervalref.current);
      intervalref.current = null;
    }
  };
  // Use the useEffect hook to cleanup the interval when the component unmounts
  useEffect(() => {
    startInterval();
    // here's the cleanup function
    return () => {
      if (intervalref.current !== null) {
        window.clearInterval(intervalref.current);
      }
    };
  }, []);
  return (
    <div className="bg-[url('/images/back.png')] bg-accentyellow bg-center bg-clip-border bg-no-repeat">
      <Header />
      
    <main className={styles.main}>
{/* 
      <div className="max-w-screen-lg rounded-lg text-white hero-animator">
        <div className="w-full h-80 lg:h-96 bg-[url('/images/hero.png')] lg:rounded-lg">
          <div className="flex-none lg:flex">
            <div className="flex-none w-full sm:w-1/2 h-14 px-8 pt-12 font-bold font-karla text-2xl lg:w-2/3 lg:text-4xl lg:px-32 lg:py-24 lg:pl-20">
              I stand where innovation and design meets technology
            </div>
            <div className="flex-none w-full sm:w-1/2 mt-24 px-8 font-inter text-sm lg:mt-0 lg:px-16 lg:w-1/3 lg:text-md lg:py-24">
            I'm a recent Industrial Design graduate who enjoys working on hands-on projects, design research and digital(UI and UX) design. Currently trying to build a small business while actively looking for interesting opportunities.
            </div>
</div>
        </div>
      </div> */}
<motion.main
    variants={variants} // Pass the variant object into Framer Motion 
    initial="hidden" // Set the initial state to variants.hidden
    animate="enter" // Animated state to variants.enter
    exit="exit" // Exit state (used later) to variants.exit
    transition={{ type: 'linear' }} // Set the transition to linear
    className="shadow-xl overflow-hidden max-w-screen-lg w-full h:80 md:h-96 relative"
>
      <div className="max-w-screen-lg w-full h:80 md:h-96 relative rounded-lg text-white hero-animator">
        <div className="w-full h-80 md:h-96 lg:h-full bg-slate-600 lg:rounded-lg">
        <video id="video2" className="m-auto block rounded w-full opacity-10 h-full object-cover"  playsInline autoPlay muted loop>
          <source src="/videos/bg.mp4" type="video/mp4" />
          </video> 
          
          <div className="absolute top-0 left-0 flex lg:flex">
            <div className="flex-none w-full sm:w-1/2 h-14 px-8 pt-12 font-bold font-karla text-2xl lg:w-2/3 lg:text-4xl lg:px-32 lg:py-24 lg:pl-20">
              {textThatChanges}
              {/* I stand where innovation and design meets technology */}
            </div>
            <div className="absolute w-full sm:w-1/2 mt-40 px-8 font-inter text-sm lg:mt-0 lg:static lg:px-16 lg:w-1/3 lg:text-md lg:py-24">
            I'm a recent Industrial Design graduate who enjoys working on hands-on projects, design research and digital(UI and UX) design. Currently trying to build a small business while actively looking for interesting opportunities.
            </div>
</div>
        </div>
      </div>
      </motion.main>
      
      <div className="max-w-screen-lg mx-3 mt-6">
        {/* <div className="font-inter pl-5">Projects</div> */}
      <div className={styles.grid}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        <Link href="/projects/invnt-3d">
          <div className={styles.card}>
          <p className={inter.className+"text-3xl"}>
            Industrial Design
          </p>
          <h2 className={inter.className}>
          Developing an inexpensive FDM 3D printing platform from readily available components <span>-&gt;</span>
          </h2>
        </div>
        </Link>

        <Link href="/work/ism">
          <div className={styles.card}>
          <p className={inter.className+"text-3xl"}>
          Industrial Design + Product Experience
          </p>
          <h2 className={inter.className}>
          Various projects at Instillmotion Labs: An innovative product development and prototyping lab <span>-&gt;</span>
          </h2>
          </div>
        </Link>

        <Link href="/projects/bhashavan">
          <div className={styles.card}>
          <p className={inter.className+"text-3xl"}>
          Digital Design + Development
          </p>
          <h2 className={inter.className}>
          Bhasha Van: An Augmented Reality experience for 70+ indigenous languages of India <span>-&gt;</span>
          </h2>
          </div>
        </Link>
{/* 
        <Link href="/projects/planter">
          <div className={styles.card}>
          <p className={inter.className+"text-3xl"}>
          Classroom Project: IoT systems
          </p>
          <h2 className={inter.className}>
          Design and development of an automatic watering and monitoring system for plants <span>-&gt;</span>
          </h2>
          </div>
        </Link> */}

        <Link href="/projects/furniture">
          <div className={styles.card}>
          <p className={inter.className+"text-3xl"}>
          Personal Project - Furniture
          </p>
          <h2 className={inter.className}>
          Building tables and cabinets with plywood <span>-&gt;</span>
          </h2>
          </div>
        </Link>

        <Link href="/work/sketch">
          <div className={styles.card}>
          <p className={inter.className+"text-3xl"}>
          Sketches
          </p>
          <h2 className={inter.className}>
          Things I have sketched over time (Mostly Ideas and Objects)<span>-&gt;</span>
          </h2>
          </div>
        </Link>

        <Link href="/projects/older/3d-printing+woodworking">
          <div className={styles.card}>
          <p className={inter.className+"text-3xl"}>
          Explorations
          </p>
          <h2 className={inter.className}>
          3D Printing & Woodworking Projects<span>-&gt;</span>
          </h2>
          </div>
        </Link>

        <Link href="/design-process">
          <div className={styles.card}>
          <p className={inter.className+"text-3xl"}>
          Design Process graphic
          </p>
          <h2 className={inter.className}>
          Current version of my ever-evolving Design Process<span>-&gt;</span>
          </h2>
          </div>
        </Link>

        <Link href="/projects/misc">
          <div className={styles.card}>
          <p className={inter.className+"text-3xl"}>
          Miscellaneous Projects
          </p>
          <h2 className={inter.className}>
          Other smaller projects<span>-&gt;</span>
          </h2>
          </div>
        </Link>

        {/* <div className="p-6 max-w-sm mx-auto bg-white rounded-xl flex items-center space-x-4">
  <div className="shrink-0">
    <Image className="h-12 w-12" src="/thirteen.svg" width={30} height={30} alt="ChitChat Logo" />
  </div>
  <div>
    <div className="text-xl font-medium text-black">ChitChat</div>
    <p className="text-slate-500">You have a new message!</p>
  </div>
</div> */}
      </div>
      </div>
      </div>
    </main>
    <Footer />
    <GoogleAnalytics trackPageViews />
    </div>
  )
}
export default Home;