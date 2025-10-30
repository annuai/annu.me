"use client"
import Head from 'next/head'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
import '../page.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, x: 0, y: -50 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
}
const Page = () => {
  // // Use the useEffect hook to cleanup the interval when the component unmounts
  // useEffect(() => {
  //   // import("flowbite/dist/flowbite");
  //   }, []);
  return (
  <div>
    <Head>
      <title>Annuai - About & Resume</title>
      <meta property="og:title" content="Annuai - Projects" key="title" />
    </Head>
    <Header />
    <motion.main
    variants={variants} // Pass the variant object into Framer Motion 
    initial="hidden" // Set the initial state to variants.hidden
    animate="enter" // Animated state to variants.enter
    exit="exit" // Exit state (used later) to variants.exit
    transition={{ type: 'tween', ease: 'linear', duration: 0.3 }}
    className=""
>
    <div className="w-full">
    <div className="max-w-screen-sm lg:max-w-screen-md mx-auto p-4 lg:pt-10">
        <div>
        <span className="display-inline lg:text-sm text-xs">Below is my Resume and here is a link to</span>
        <a href="/pdf/annuai-resume.pdf"><button type="button" className="lg:text-sm text-xs py-1.5 px-2 mr-1 ml-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">download</button></a>
        <span className="display-inline lg:text-sm text-xs">it</span>
        </div>
    </div>

    <div className="max-w-screen-sm lg:max-w-screen-md mx-auto py-0 px-4 lg:p-0">
    <div className="flex">
    <div className="flex-initial basis-1/2 md:basis-1/3 lg:basis-1/4">
  <img src="/images/other/me.jpg" className="min-w-[100%] lg:min-width-full w-full rounded" />
  </div>
  <div className="flex-initial p-6 pl-8 text-3xl font-inter">
    <p>Hello <img src="/images/other/folded-hands-emoji.png" className="w-7 h-7 inline mb-2" /></p>
    <p className="font-noto-malayalam">നമസ്കാരം</p>
    <p>नमस्ते</p>

    </div>
    </div>
    </div>

    <div className="flex max-w-screen-sm lg:max-w-screen-md mx-auto">
  <div className="flex-auto text-sm max-w-lg p-4">
    <div>
    <p>I’m an Industrial Design graduate who enjoys working on smart products. I intend to work at the intersection of technology and design - helping combine and produce technologically superior products with design thinking and user experience at their core.</p>
<p className="mt-3">I have an interest in new products that involve research from the ground up, to the final product where prototyping and testing are involved - particularly electronic products and interfaces.</p>
    </div>
    <div className="font-bold text-sm mt-2">Experience</div>

<ol className="relative text-sm border-l border-gray-200 dark:border-gray-700 mt-2">                  
    <li className="mb-8 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">February - June 2022</time>
        <h3 className="font-semibold text-gray-900 dark:text-white">Industrial Design Intern</h3>
        <h3 className="font-semibold text-gray-900 dark:text-white">Instillmotion Consulting, Hyderabad</h3>
        <p className="mb-4 font-normal text-gray-500 dark:text-gray-400">Prototyping and internal design of smart products involving mockups, proof of concepts and 3D printed prototypes.</p>
    </li>
    <li className="mb-8 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">January - June 2017</time>
        <h3 className="font-semibold text-gray-900 dark:text-white">Design/ Development Intern</h3>
        <h3 className="font-semibold text-gray-900 dark:text-white">Yaksha Visual Technologies, Chennai</h3>
        <p className="mb-4 font-normal text-gray-500 dark:text-gray-400">Worked in a team developing AR educational apps - card design, UI design and also developed a backend API for the application’s data management and authentication.</p>
    </li>
    <li className="mb-8 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">June - December 2016</time>
        <h3 className="font-semibold text-gray-900 dark:text-white">UI/UX Design Intern</h3>
        <h3 className="font-semibold text-gray-900 dark:text-white">Justbootup Technologies, Coimbatore</h3>
        <p className="mb-4 font-normal text-gray-500 dark:text-gray-400">Designed websites for multiple clients, prototyped websites and interactions.</p>
    </li>
</ol>
<div className="font-bold text-sm">Education</div>
<ol className="relative border-l border-gray-200 dark:border-gray-700 mt-2">                  
    <li className="mb-8 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2017 - 2021</time>
        <h3 className="font-semibold text-gray-900 dark:text-white">B.Des Industrial Design</h3>
        <h2 className="font-regular text-gray-900 dark:text-white">National Institute of Design, Haryana</h2>
    </li>
    <li className="mb-8 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2016 - 2022</time>
        <h3 className="font-semibold text-gray-900 dark:text-white">B.A Psychology</h3>
        <h2 className="tont-regular text-gray-900 dark:text-white">IGNOU</h2>
    </li>
</ol>
<div className="font-regular text-md inline lg:block">I can speak Malayalam, English and Hindi </div>
<div className="font-regular text-md inline lg:block">and I'm from Kannur, Kerala</div>
  </div>
  <div className="flex-initial text-xs">
  <ul className="m-4 min-w-min max-w-48 font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600 font-bold">Skills</li>
    <li className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">Prototyping</li>
    <li className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">User Research</li>
    <li className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">Interaction Design</li>
    <li className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">UI Design</li>
    <li className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">UI Prototyping</li>
    <li className="py-2 px-4 rounded-b-lg">AR Prototyping</li>
</ul>
<ul className="m-4 max-w-48 font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li className="py-2 px-4 rounded-t-lg border-b border-gray-200 dark:border-gray-600 font-bold">Interests</li>
    <li className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">Tinkering</li>
    <li className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">3D Printing</li>
    <li className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">Carpentry</li>
    <li className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">Reading</li>
    <li className="py-2 px-4 rounded-b-lg">Photography</li>
</ul>
<ul className="m-4 max-w-48 font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li className="py-2 px-4 rounded-t-lg border-b border-gray-200 dark:border-gray-600 font-bold">Languages</li>
    <li className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">Node.JS</li>
    <li className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">JavaScript</li>
    <li className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">HTML</li>
    <li className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">Arduino(C++)</li>
    <li className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">React</li>
    <li className="py-2 px-4 rounded-b-lg">C#</li>
</ul>
<ul className="m-4 max-w-48 font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li className="py-2 px-4 rounded-t-lg border-b border-gray-200 dark:border-gray-600 font-bold">Prototyping</li>
    <li className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">Hands-on</li>
    <li className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">3D Printing</li>
    <li className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">Raspberry Pi</li>
    <li className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">Arduino</li>
    <li className="py-2 px-4 rounded-b-lg">Unity</li>
</ul>
  </div>
</div>
<div className="max-w-screen-md mx-auto p-4 mt-20">
    <span className="display-inline lg:text-sm text-xs">I want you to read these books. Click on them to download</span>
    <div className="grid grid-cols-3 gap-2 max-w-screen-sm lg:grid-cols-4">
  <a href="https://www.libgen.is/book/index.php?md5=6561F3C3A76BC425F741CCB66F790ABE"><img className="w-full p-2 align-middle cursor-pointer" src="/images/book-recommendations/1.jpg" /></a>
  <a href="https://www.libgen.is/book/index.php?md5=6D70781E894E7CCDEC5CA2226BC4149F"><img className="w-full p-2 align-middle cursor-pointer" src="/images/book-recommendations/2.jpg" /></a>
  <a href="https://www.libgen.is/book/index.php?md5=7B1033EDEA297B7262A5B209997F5493"><img className="w-full p-2 align-middle cursor-pointer" src="/images/book-recommendations/3.jpg" /></a>
  <a href="https://www.libgen.is/book/index.php?md5=F31B5AA50E3B8A101C257085D0ED3CE2"><img className="w-full p-2 align-middle cursor-pointer" src="/images/book-recommendations/4.jpg" /></a>
  <a href="https://www.libgen.is/book/index.php?md5=3F3A676A00DA876B6ACCDAB9C7E6C3ED"><img className="w-full p-2 align-middle cursor-pointer" src="/images/book-recommendations/5.jpg" /></a>
  <a href="https://www.libgen.is/book/index.php?md5=92A019DCA81F725B44DFEA5063F7F326"><img className="w-full p-2 align-middle cursor-pointer" src="/images/book-recommendations/6.jpg" /></a>
  <a href="https://www.libgen.is/book/index.php?md5=9DB80AAC6758446E18354478F0843049"><img className="w-full p-2 align-middle cursor-pointer" src="/images/book-recommendations/7.jpg" /></a>
  <a href="https://www.libgen.is/book/index.php?md5=7BDC27AE453EA1B3BEB26E93CC5B7FBF"><img className="w-full p-2 align-middle cursor-pointer" src="/images/book-recommendations/8.jpg" /></a>
  </div>

    </div>
    {/* <div className="max-w-screen-lg mx-auto px-4 mt-8 bg-red-100">
    <div className="text-sm">Industrial Design + Product Experience</div>
    <div className="max-w-md text-xl font-bold font-poppins">Various Projects at Instillmotion Labs</div>
    <embed src="/pdf/annuai-resume.pdf#toolbar=0&navpanes=0&scrollbar=0" width="810px" height="1130px" border="0" WMODE="transparent" />
    </div> */}
    </div>
<Footer />
</motion.main>
  </div>
  );
};

export default Page;