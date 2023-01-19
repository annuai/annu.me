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
    <div className="text-sm">Display & Controls</div>
    <div className="max-w-md text-xl font-bold font-poppins">Sony A6000 - Redesigning the interface for hobby users</div>
    </div>
    </div>
    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4 py-6">
    <div className="max-w-sm text-md font-poppins">
      Done as a design project for Display & Control, the A6000 redesign went through a lot of research and understanding of complex iconography to eventually settle middle ground with the existing complexity and additionally added simplicity. This was done to make the system look familiar to expert users and help the hobbyist/ new user slowly adapt into the complexity of these devices.
    </div>
    
    <div className="flex mt-8">
  <div className="flex-initial w-44 text-xs font-bold font-poppins ">Execution</div>
  <div className="flex-initial w-64 text-xs font-poppins">Sony A6000 UI Redesign</div>
</div>
<div className="flex">
  <div className="flex-initial w-44 text-xs font-bold font-poppins mt-1">Project Duration</div>
  <div className="flex-initial w-64 text-xs font-poppins mt-1">1 month</div>
</div>
  
  </div>
    </div>


    <div className="max-w-screen-lg mx-auto mt-10">

    <div>
      The cameras UI has a huge information architecture. <a href="/images/projects/older/sony-a6000/information-architecture.png" className="underline">Here's a link to it</a>
    </div>

    <img className="max-w-full h-auto mt-4 mb-4 bg-white-100" src="/images/projects/older/sony-a6000/flow-graphic.png" alt="Sony A6000" />
    <div className="p-4">Graphical button Interactions with screens</div>

    <img className="max-w-full h-auto mt-4 mb-4 bg-white-100" src="/images/projects/older/sony-a6000/questionnaire.png" alt="Sony A6000" />
    <div className="p-4">Questionnaire for interview. Interviews were done with Usha Kiran - a semi-professional user, Shailan Parker - a professional photographer and Bilal Abid - A senior user.</div>

    <div className="flex-none lg:flex lg:flex-row">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/projects/older/sony-a6000/whatiswhat-01.png" alt="Sony A6000" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/projects/older/sony-a6000/whatiswhat-02.png" alt="Sony A6000" /></div>
    </div>
    <div className="p-4">Questionnaire to understand icon semiotics</div>

    <img className="max-w-full h-auto mt-4 mb-4 bg-white-100" src="/images/projects/older/sony-a6000/icons.png" alt="Sony A6000" />
    <div className="p-4">Iconography development process</div>

    <img className="max-w-full h-auto mt-4 mb-4 bg-white-100" src="/images/projects/older/sony-a6000/flow-old.png" alt="Sony A6000" />
    <div className="p-4">Flow Old</div>

    <img className="max-w-full h-auto mt-4 mb-4 bg-white-100" src="/images/projects/older/sony-a6000/flow-new.png" alt="Sony A6000" />
    <div className="p-4">Flow New - the revamped UI uses a more modern flat style aesthetic for the interface</div>

    <img className="max-w-full h-auto mt-4 mb-4 bg-white-100" src="/images/projects/older/sony-a6000/environment-interaction.png" alt="Sony A6000" />
    <div className="p-4">Environmental Interaction - The new interface was designed to change the color of icons based on contrast. So if the viewfinder has a bright image, the interface converts to dark to make it more legible.</div>
    
    <img className="max-w-full h-auto mt-4 mb-4 bg-white-100" src="/images/projects/older/sony-a6000/interface-new-old.png" alt="Sony A6000" />
    <div className="p-4">Old v/s New button placements</div>

    <img className="max-w-full h-auto mt-4 mb-4 bg-white-100" src="/images/projects/older/sony-a6000/interface-new.png" alt="Sony A6000" />
    <div className="p-4">The final redesigned interface</div>
    
</div>
<Footer />
  </div>
  );
};

export default Page;