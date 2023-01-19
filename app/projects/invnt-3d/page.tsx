"use client"
import Head from 'next/head'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
import '../../page.module.css'
import Header from '../../components/header'
import Footer from '../../components/footer'

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
    <div className="text-sm">Industrial Design</div>
    <div className="max-w-md text-xl font-bold font-poppins">Invnt 3D: Developing an inexpensive FDM 3D printing platform from readily available components</div>
    </div>
    </div>
    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4">
    <div className="max-w-md text-md font-poppins">
        Low-cost 3D printers are often badly designed in terms of usability to non-technical consumers. The project looks into development of a product for new enthusiasts interested in 3D printing without much technical knowledge, providing them a kickstart with a simple thoughtfully designed 3D printer.
        <span className="font-bold block mt-3">Problem Statement</span>
    How do we design and develop a versatile 3D printer platform with the less technically acquainted user in mind? How can the Indian context be put into the idea of the machine. What is the scope of the audience for such machines in India and how can design be used to better cater to their requirements?
    </div>
    
    <div>
    </div>
      
    <div className="flex mt-8">
  <div className="flex-initial w-44 text-xs font-bold font-poppins ">Type</div>
  <div className="flex-initial w-64 text-xs font-poppins">Product Design & Prototyping</div>
</div>
<div className="flex">
  <div className="flex-initial w-44 text-xs font-bold font-poppins mt-1">Project Duration</div>
  <div className="flex-initial w-64 text-xs font-poppins mt-1">6 months (June - December 2021)</div>
</div>

  </div>
    </div>


    <div className="max-w-screen-lg mx-auto mt-10">
      <img className="max-w-full h-auto pt-10 mb-10 bg-red-200" src="/images/projects/3d-printer/printer-hero.png" alt="3D printer render" />
      <div className="px-6 py-4">
        A 3D printer will soon become a household appliance. Today, they are machines that look and feel right out of a sci-fi movie - very complex in their appearance and mostly complex with their working and assembly as well. User-centric design can solve many of the problems of these printers. There is a market that would potentially buy 3D printers just like how they adapted inkjets and laser printers. Designing the printer that resolves the idea of printing objects for the naive individual will always be the ultimate goal of a consumer 3D printer design.
      </div>
    </div>
    <div className="max-w-screen-lg mx-auto mt-10">
    <div className="flex-none lg:flex lg:flex-row mt-3 bg-[#d3eaee]">
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto " src="/images/projects/3d-printer/invnt-annume2.png" alt="3D printer" /></div>
        <div className="lg:basic-1/3 mb-auto mt-auto hidden lg:block"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/projects/3d-printer/invnt-annume2-1.png" alt="3D printer" /></div>
    </div>
      {/* <img className="max-w-full h-auto bg-[#d3eaee]" src="/images/projects/3d-printer/invnt-annume2.png" alt="3D printer" /> */}
      <div className="px-6 py-6">
      Studying the market showed the huge growth potential for products being developed for the upcoming 3D printing boom. It's already happening - Ender 3, a low-cost 3D printer from Creality, a chinese company dominated the market in just two years. The market will grow 5x in 10 years.
      </div>

    <div className="flex-none lg:flex lg:flex-row mt-3">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto lg:pr-3" src="/images/projects/3d-printer/invnt-annume3-1.png" alt="3D printer" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/projects/3d-printer/invnt-annume3.png" alt="3D printer" /></div>
    </div>
    <div className="px-6 py-6">
      Market Research looked into getting a picture of what sells today right now and what will sell 5 years down the line. The products of today will eventually evolve into better ones. The real challenge is making the better one today itself.
      </div>

    <div className="flex-none lg:flex lg:flex-row bg-[#e1e0ec]">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/projects/3d-printer/invnt-annume4.png" alt="3D printer" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/projects/3d-printer/invnt-annume4-1.png" alt="3D printer" /></div>
    </div>
    <div className="px-6 py-6">
      Fused Filament Deposition was studied to fully understand the nuances of why's and why not's. This lead to helping make important decisions in the product development stage later on - especially while choosing extruder systems and motion platforms.
      </div>

      <img className="max-w-full h-auto bg-[#ffd1b0]" src="/images/projects/3d-printer/invnt-annume5.png" alt="3D printer" />
      
    <div className="flex-none lg:flex lg:flex-row">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/projects/3d-printer/invnt-annume6-1.png" alt="3D printer" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/projects/3d-printer/invnt-annume6.png" alt="3D printer" /></div>
    </div>

    <div className="flex-none lg:flex lg:flex-row p-3 py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/projects/3d-printer/invnt-annume7-1.png" alt="3D printer" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto pt-6 lg:pt-0" src="/images/projects/3d-printer/invnt-annume7.png" alt="3D printer" /></div>
    </div>
      
      <div className="max-w-screen-md mt-3 mb-12 lg:my-20 mx-6 lg:mx-4">
      <div className="text-md font-switzer font-bold mt-5">
        Redefined Brief
      </div>
      <div className="text-xl lg:text-2xl font-switzer">
      Develop a cost-effective CoreXY based highly extensible 3D printing platform with accessibility, maintenance and simplicity at the core
      </div>
      <div className="text-md font-switzer font-bold mt-3">
        Target Audience
      </div>
      <div className="text-xl lg:text-2xl font-switzer">
      Beginners, Hobbyists & Students
      </div>
      <div className="text-md font-switzer font-bold mt-3">
        Objectives
      </div>
      <ul className="space-y-1 max-w-md list-inside text-black dark:text-gray-400">
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        Fit into a budget segment of ₹30000
    </li>
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        Low-maintenance
    </li>
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        Connectivity Features
    </li>
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        Safety from fumes
    </li>
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        No noise design
    </li>
    </ul>
    </div>


      <div className="text-md font-switzer font-bold mt-5 mx-4">
  Ideation & Prototyping
</div>
      <img className="max-w-full h-auto" src="/images/projects/3d-printer/invnt-annume9.png" alt="3D printer" />
      <div className="px-6">
      The simplest functional form that increased visibility, maintains Do-It-Yourself capabilities and stays functional while being aesthetically pleasing was derived from the exploration. The final idea is to move forward with an enclosure made of 2020R aluminium extrusion profiles for the frame and clear acrylic sheets for the enclosure
      </div>
      
      <img className="max-w-full h-auto" src="/images/projects/3d-printer/invnt-annume10.png" alt="3D printer" />
      <div className="px-6 pt-3 pb-1">
      Display should be able to comfortably change orientation as the user prefers to
      </div>
      <div className="px-6">
      Location of the display is a personal preference - a movable display is more inclusive, modular and the internal design keeps upgradeability at the core
      </div>

      <img className="max-w-full h-auto" src="/images/projects/3d-printer/invnt-annume11.png" alt="3D printer" />
      <img className="max-w-full h-auto" src="/images/projects/3d-printer/invnt-annume12.png" alt="3D printer" />
      
      <div className="px-4 font-bold">Final Product</div>
      <img className="max-w-full h-auto" src="/images/projects/3d-printer/invnt-annume13.png" alt="3D printer" />

      <img className="max-w-full h-auto" src="/images/projects/3d-printer/invnt-annume14.png" alt="3D printer" />
      <img className="max-w-full h-auto" src="/images/projects/3d-printer/invnt-annume15.png" alt="3D printer" />
      <div className="px-4 font-bold mt-4">Indented Bill of Materials and Processes</div>
      <img className="max-w-full h-auto" src="/images/projects/3d-printer/invnt-annume16.png" alt="3D printer" />
      <div className="px-6">
      Overall product cost with all the parts sourced from Indian retail stores excluding any labour, transportation come to around ₹32000
      </div>
      <div className="px-6 mb-4">
      Prices are sourced from major DIY part resellers - including 
robu.in, novo3d.in, 
electronicspices.com, 
electronicscomp.com, 
rhydolabz.com
      </div>

      

      <img className="max-w-full h-auto" src="/images/projects/3d-printer/invnt-frame.png" alt="3D printer" />
      <div className="px-6 py-6">
      The frame was purchased as 340mm pieces of 2020R extruded aluminium profiles. They were tapped, powder coated and connected together with 3D printed corner connectors.
      </div>
      <img className="max-w-full h-auto" src="/images/projects/3d-printer/invnt-printhead.png" alt="3D printer" />
      <div className="px-6 py-6">
      Printhead can be opened easily to deal with failure - often times, printhead gets clogged and an easy access door to printhead is a boon for the user.
      </div>
      <img className="max-w-full h-auto" src="/images/projects/3d-printer/invnt-print.png" alt="3D printer" />
      <div className="px-6 py-6">
      Final machine
      </div>
      <img className="max-w-full h-auto" src="/images/projects/3d-printer/invnt-box.png" alt="3D printer" />
      <div className="px-6 py-6">
      Box was made to help with transporting the printer intact(without disassembly). Stickers were used as stencils to paint in the branding and handle with care signs.
      </div>
      


<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
<div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/B7JiMcPLz-U"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen;"
    ></iframe>
</div>
  <div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/ienUoz6PBDU"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen;"
    ></iframe>
</div>
</div>

<iframe src="https://myhub.autodesk360.com/ue289f061/shares/public/SH35dfcQT936092f0e439846dd6537c4507d?mode=embed" className="w-full mt-4" height="768" allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen;" frameBorder="0"></iframe>


      <div className="max-w-2xl px-6">
      <div className="text-md font-switzer font-bold mt-5">
  Learnings & Takeaways
</div>
<div className="text-sm font-switzer mt-5">
  <div className="font-bold mt-2">Technical Drawings/ Engineering Drawings</div>
  <div className="">
    Learnt how to create technical drawings for manufacturable parts.
  </div>
  <div className="font-bold mt-2">Learning new processes</div>
  <div className="">
    Processes other than 3D printing has been used widely in the project. Powder Coating, Tapping & Threading - all processes I had to explore to get the prototype up and running. 3D printing made this project possible - learning how to 3D print strong objects with less filament has also been a key learning in the project.
  </div>
  <div className="font-bold mt-2">Time management</div>
  <div className="">
    A lot of work has been done in a short amount of time. The project had a fixed timeline of 4 months initially, but it eventually grew onto 6 and then another month of documentation. Time management is a difficult task - especially when the dependency is on external factors. Planning must be done by considering external factors like logistics and processes.
  </div>
  <div className="font-bold mt-2">Purchase management</div>
  <div className="">
    As a self-sponsored project, there were a lot of constraints on how much money can be spent. Few original calculation errors lead to multiple purchases of similar components causing an unnecessary hike in the overall budget.
  </div>
</div>
</div>

      <div className="px-6 mt-4">
      <div className="max-w-md text-md font-inter"></div>
      <div className="max-w-md text-md font-poppins">For full detailed project, here's the <a className="underline" href="/pdf/invnt-3d-printer-gp.pdf">documentation</a></div>
      </div>

    </div>
<Footer />
  </div>
  );
};

export default Page;