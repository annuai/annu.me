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
    <div className="text-sm">Electronics Repair</div>
    <div className="max-w-md text-xl font-bold font-poppins">Laptop Keyboard Replacement</div>
    </div>
    </div>
    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4">
    <div className="max-w-xs text-md font-poppins">Replacing a samsung laptops keyboard</div>
    
    <div className="flex mt-8">
  <div className="flex-initial w-44 text-xs font-bold font-poppins ">Execution</div>
  <div className="flex-initial w-64 text-xs font-poppins">Repairwork</div>
</div>
<div className="flex">
  <div className="flex-initial w-44 text-xs font-bold font-poppins mt-1">Duration</div>
  <div className="flex-initial w-64 text-xs font-poppins mt-1">1 hour</div>
</div>
  
  </div>
    </div>


    <div className="max-w-screen-lg mx-auto mt-10">
    <div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/w0U_RTGDsKA"
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