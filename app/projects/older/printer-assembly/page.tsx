"use client"
import Head from 'next/head'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
import '../../../page.module.css'
import Header from '../../../components/header'
import Footer from '../../../components/footer'

const Page = () => {
  // // Use the useEffect hook to cleanup the interval when the component unmounts
  // useEffect(() => {
  //   // import("flowbite/dist/flowbite");
  //   }, []);
  return (
  <div>
    <Head>
      <title>Annuai - Industrial Designer</title>
      <meta property="og:title" content="Annuai - Projects" key="title" />
    </Head>
    <Header />

    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4 py-8">
    <div className="text-sm">3D Printer Assembly</div>
    <div className="max-w-md text-xl font-bold font-poppins">Assembling my first 3D printer</div>
    </div>
    </div>
    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4">
    <div className="max-w-xs text-md font-poppins">I bought my first 3D printer - Tevo Tarantula Pro in 2019. It took around a month to reach from AliExpress. A day after I received the package, I decided to assemble it - which by no means was an easy task. It took a lot of going through tutorials and manuals to actually get it to working.</div>
    
    <div className="flex mt-8">
  <div className="flex-initial w-44 text-xs font-bold font-poppins ">Execution</div>
  <div className="flex-initial w-64 text-xs font-poppins">Assembly</div>
</div>
<div className="flex">
  <div className="flex-initial w-44 text-xs font-bold font-poppins mt-1">Duration</div>
  <div className="flex-initial w-64 text-xs font-poppins mt-1">2 hours</div>
</div>
  
  </div>
    </div>


    <div className="max-w-screen-lg mx-auto mt-10">
    <div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/bew837HBYBE"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen;"
    ></iframe>
</div>
</div>
<Footer />
  </div>
  );
};

export default Page;