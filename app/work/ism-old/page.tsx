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
      <title>Annuai - Various Projects at Instillmotion Labs</title>
      <meta property="og:title" content="Annuai - Projects" key="title" />
    </Head>
    <Header />

    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4 mt-8">
    <div className="text-sm">Industrial Design + Product Experience</div>
    <div className="max-w-md text-xl font-bold font-poppins">Various Projects at Instillmotion Labs</div>
    </div>
    </div>
    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4 py-6">
    <div className="max-w-sm text-md font-poppins">Instillmotion is a product and system design studio based in Hyderabad. A small team working on smart futuristic products - right from research to prototyping and production.</div>

    <div className="flex mt-8">
  <div className="flex-initial w-44 text-xs font-bold font-poppins ">Designation</div>
  <div className="flex-initial w-64 text-xs font-poppins">Industrial Design Intern</div>
</div>
<div className="flex">
  <div className="flex-initial w-44 text-xs font-bold font-poppins mt-1">Internship Duration</div>
  <div className="flex-initial w-64 text-xs font-poppins mt-1">5 months (February - June 2022)</div>
</div>
</div>
    </div>



    <div className="max-w-screen-lg mx-auto mt-3">
    <img className="max-w-full h-auto pt-10 mb-10 bg-slate-100" src="/images/work/ism/sambrani+diya.png" alt="Sambrani+Diya render" /> 
    </div>
    <div className="max-w-screen-lg mx-auto mt-10 px-6">

      <div className="max-w-lg">
      <div className="text-md font-switzer font-bold">
        Project Brief
      </div>
      <div className="text-2xl font-switzer">
        To develop a semi-automatic, controlled, safe ignition system for household Sambrani’s
      </div>

      <div className="text-md font-switzer font-bold mt-5">
        Different usage contexts
      </div>

      <div className="text-md font-switzer mt-1">

      <ul className="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400">
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        Used in households in Pooja
    </li>
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        Used to cleanse the environment
    </li>
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        Used to keep away mosquitoes
    </li>
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        Used for the fragrance
    </li>
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        Time of the day in use: Dawn, Morning and Dusk
    </li>
</ul>
</div>
</div>

<div className="flex-none lg:flex lg:flex-row">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/work/ism/sambrani-sizes-1.png" alt="ISM Sambrani" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/work/ism/sambrani-sizes-2.png" alt="ISM Sambrani" /></div>
</div>
<div>Different types of Sambranis - they range from small conical ones large ones that burn for hours with upto a 8cm diameter</div>

<div>
<div className="max-w-screen-lg mx-auto mt-3">
<div className="text-md font-switzer font-bold mt-5">
  Different possible types of Ignition
      </div>
      
    <div className="mt-2"><span className="font-medium">Electricity-based</span> - Nichrome</div>
    
      <div className="text-md font-switzer mt-1">

      <ul className="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400">
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        Requires a fan to create airflow
    </li>
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        Requires to be plugged-in/ some power source (can be battery operated)
    </li>
    </ul>
    </div>

    <div className="mt-2"><span className="font-medium">Gas-based</span> - Jet Lighter</div>
    
      <div className="text-md font-switzer mt-1">

      <ul className="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400">
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        2-4 Seconds to light up
    </li>
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        Requires Refilling
    </li>
    </ul>

      </div>


      <div className="text-md font-switzer font-bold mt-5">
      Requirements & Constraints
      </div>

      <div className="text-md font-switzer mt-1">

      <ul className="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400">
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        Time to ignite - 3-5 seconds max
    </li>
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        Cater to sizes - upto 10cm in Diameter
    </li>
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        Safety of the users - Electrocution, Burns
    </li>
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        Ease of operability
    </li>
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        Safety for children and adults (Electrocution & Burns)
    </li>
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        Power Consumption - Max 250W on operation
    </li>
    <li className="flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        Portability? (Added value)
    </li>
</ul>
</div>
      
      </div>
      </div>
      
      <div className="mt-10 mb-2">Concept ideation for how to ignite the sambrani</div>
      <img className="max-w-full h-auto mb-1 bg-slate-100" src="/images/work/ism/sambrani-explorations.png" alt="ISM Sambrani" />


      <div className="mt-3">A cross and an edge-only variations of Nichrome plates were tested. The Cross wasn’t functioning as expected. It was melting the middle of the Sambrani cones instead of igniting the edge. The edge version was functioning better.
</div>
      <div className="flex-none lg:flex lg:flex-row">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/work/ism/2x/Asset 8.png" alt="ISM Sambrani" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/work/ism/2x/Asset 11.png" alt="ISM Sambrani" /></div>
</div>
<div className="mt-4"><p className="font-bold">Burning a Sambrani from the bottom</p>
<p>Insights: Gives an even burning, overall experience isn’t affected. Burning from the bottom is a viable option for the igniter</p>
<p>Ignition from the bottom will also help reduce the overall complexity of the product to bare minimum - helping reduce overall production cost. Time taken to burn fully is 19 minutes.</p>

</div>
<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-4">
<div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/bQy9_cx2fzE"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen;"
    ></iframe>
</div>
  <div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/yvbj5QnH3k8"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen;"
    ></iframe>
</div>
</div>

      <div className="mt-10 mb-2">Base plate concept wherein the plate can be turned to compensate for the height of a smaller sambrani.</div>
      <img className="max-w-full h-auto mb-1 bg-slate-100" src="/images/work/ism/2x/Asset 9.png" alt="ISM Sambrani" />
      
      <div className="mt-10 mb-2">Concepts similar to a plug-in mosquito repellant</div>
      <img className="max-w-full h-auto mb-1 bg-white" src="/images/work/ism/2x/Asset 10.png" alt="ISM Sambrani" />


      <div className="max-w-2xl">
      <div className="text-md font-switzer font-bold mt-5">
  Learnings & Takeaways
</div>
<div className="text-sm font-switzer mt-5">
  <div className="font-bold mt-2">Apply Intuition</div>
  <div className="">
    No one had considered burning a sambrani from the bottom. It was a rejected idea thinking the end-consumer wouldn't want it burning that way either. The initial tests showed otherwise. Burning from the bottom was the ideal way to go. Applying intuition works sometimes. Trust the instinct!
  </div>
  <div className="font-bold mt-2">Feedback and Iteration</div>
  <div className="">
    Receiving feedback after each experiment provided more clarity on the goals to achieve. Discussing failed experiments gave way to new and better ideas.
  </div>
  <div className="font-bold mt-2">Ideation is key</div>
  <div className="">
    Most of the ideas came about through spending more time with the project. Ideation is a key component of any project. Scribbling and sketching continously gives new ideas every once in a while.
  </div>
  <div className="font-bold mt-2">Creating electronic products with heating elements</div>
  <div className="">
    Gained experience in how electronic products with heating components can be produced with end-user safety in mind.
  </div>
</div>
</div>



      
      <div className="text-md font-switzer font-bold mt-5">
  Other Instillmotion projects are under an NDA
</div>
    </div>
<Footer />
  </div>
  );
};

export default Page;