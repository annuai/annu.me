"use client"
import Head from 'next/head'
import React, { useState, useRef, useEffect } from 'react';
import { Inter } from '@next/font/google'
import Image from 'next/image'
import styles from '../../page.module.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const Page = () => {
  // // Use the useEffect hook to cleanup the interval when the component unmounts
  // useEffect(() => {
  //   // import("flowbite/dist/flowbite");
  //   }, []);
  return (
  <div>
    <Head>
      <title>Annuai - Developing an inexpensive FDM 3D printing platform from readily available components</title>
      <meta property="og:title" content="Annuai - Projects" key="title" />
    </Head>
    <Header />

    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4 py-8">
    <div className="text-sm">Miscellaneous</div>
    <div className="max-w-md text-xl font-bold font-poppins">A Bunch of other projects</div>
    
    <Link href="/projects/planter">
          <div className={styles.misccard+" mt-4 font-inter p-0 lg:hover:bg-mainyellow lg:hover:bg-opacity-50 block rounded lg:mt-4 lg:p-4"}>
          <p className="text-md font-regular">
          Classroom Project: IoT systems
          </p>
          <h2 className={inter.className+" text-lg font-bold"}>
          Design and development of an automatic watering and monitoring system for plants <span>-&gt;</span>
          </h2>
          </div>
        </Link>

    <Link href="/projects/older/restoring-typewriter">
          <div className={styles.misccard+" mt-4 font-inter p-0 lg:hover:bg-mainyellow lg:hover:bg-opacity-50 block rounded lg:mt-4 lg:p-4"}>
          <p className="text-md font-regular">
          Repair + Restoration
          </p>
          <h2 className={inter.className+" text-lg font-bold"}>
          Restoring a malayalam typewriter and preserving its letters<span>-&gt;</span>
          </h2>
          </div>
        </Link>

        <Link href="/projects/older/restoring-jeep">
          <div className={styles.misccard+" mt-4 font-inter p-0 lg:hover:bg-mainyellow lg:hover:bg-opacity-50 block rounded lg:mt-4 lg:p-4"}>
          <p className="text-md font-regular">
          Restoration + Process exploration
          </p>
          <h2 className={inter.className+" text-lg font-bold"}>
          Painting and restoration of Jeep<span>-&gt;</span>
          </h2>
          </div>
        </Link>

        <Link href="/projects/older/arduino-incubator">
          <div className={styles.misccard+" mt-4 font-inter p-0 lg:hover:bg-mainyellow lg:hover:bg-opacity-50 block rounded lg:mt-4 lg:p-4"}>
          <p className="text-md font-regular">
          Electronics Project
          </p>
          <h2 className={inter.className+" text-lg font-bold"}>
          Incubating eggs with Arduino<span>-&gt;</span>
          </h2>
          </div>
        </Link>

        <Link href="/projects/older/display-sony-a6000">
          <div className={styles.misccard+" mt-4 font-inter p-0 lg:hover:bg-mainyellow lg:hover:bg-opacity-50 block rounded lg:mt-4 lg:p-4"}>
          <p className="text-md font-regular">
          Classroom Project: Display & Controls
          </p>
          <h2 className={inter.className+" text-lg font-bold"}>
          Sony A6000 - Redesigning the interface for hobby users<span>-&gt;</span>
          </h2>
          </div>
        </Link>

        <Link href="/projects/older/printer-assembly">
          <div className={styles.misccard+" mt-4 font-inter p-0 lg:hover:bg-mainyellow lg:hover:bg-opacity-50 block rounded lg:mt-4 lg:p-4"}>
          <p className="text-md font-regular">
          3D Printer Assembly
          </p>
          <h2 className={inter.className+" text-lg font-bold"}>
          Assembling my first 3D printer<span>-&gt;</span>
          </h2>
          </div>
        </Link>


        <Link href="/projects/older/laptop-repair-timelapse">
          <div className={styles.misccard+" mt-4 font-inter p-0 lg:hover:bg-mainyellow lg:hover:bg-opacity-50 block rounded lg:mt-4 lg:p-4"}>
          <p className="text-md font-regular">
          Electronics Repair
          </p>
          <h2 className={inter.className+" text-lg font-bold"}>
          Laptop Keyboard Replacement<span>-&gt;</span>
          </h2>
          </div>
        </Link>

        <Link href="/projects/older/website-design">
          <div className={styles.misccard+" mt-4 font-inter p-0 lg:hover:bg-mainyellow lg:hover:bg-opacity-50 block rounded lg:mt-4 lg:p-4"}>
          <p className="text-md font-regular">
          Compilation
          </p>
          <h2 className={inter.className+" text-lg font-bold"}>
          Websites I've designed (old)<span>-&gt;</span>
          </h2>
          </div>
        </Link>

        <Link href="https://vanitarun.netlify.app">
          <div className={styles.misccard+" mt-4 font-inter p-0 lg:hover:bg-mainyellow lg:hover:bg-opacity-50 block rounded lg:mt-4 lg:p-4"}>
          <p className="text-md font-regular">
          Edited version of a Game
          </p>
          <h2 className={inter.className+" text-lg font-bold"}>
          Play VanitaRun<span>-&gt;</span>
          </h2>
          </div>
        </Link>
    
    </div>
    </div>

<Footer />
  </div>
  );
};

export default Page;