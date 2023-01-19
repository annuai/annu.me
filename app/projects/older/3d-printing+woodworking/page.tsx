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
    <div className="max-w-screen-lg mx-auto px-4 pt-8">
    <div className="text-sm">3D Printing and woodworking</div>
    <div className="max-w-md text-xl font-bold font-poppins">Projects I've done over time</div>
    </div>
    </div>
    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4 pb-6 pt-3">
    <div className="max-w-xs text-md font-poppins">A compilation of 3D printed and wooden objects I've worked on</div>
    
    {/* <div className="flex mt-8">
  <div className="flex-initial w-44 text-xs font-bold font-poppins ">Execution</div>
  <div className="flex-initial w-64 text-xs font-poppins">3D Printing</div>
</div> */}
{/* <div className="flex">
  <div className="flex-initial w-44 text-xs font-bold font-poppins mt-1">Project Duration</div>
  <div className="flex-initial w-64 text-xs font-poppins mt-1">1 month</div>
</div> */}
  
  </div>
    </div>


    <div className="max-w-screen-lg mx-auto mt-10">

    <div className="px-4">
      Marble/ Tile cutter was converted to a Woodcutter by making a wooden plate with cutouts.
    </div>
    <div className="flex-none lg:flex lg:flex-row py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/woodcutter-1.jpg" alt="3D Printing" /></div>
        <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/woodcutter-2.jpg" alt="3D Printing" /></div>
        <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/woodcutter-3.jpg" alt="3D Printing" /></div>
        {/* <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/3d-print-hold-down-clamp.jpg" alt="3D Printing" /></div> */}
    </div>


    <div className="px-4">
    <p className="font-bold">Fridge Restoration</p>
    How do you fix a fridge handle of a fridge that is at least 15 years old. A part that isn't available in the market needs to be reverse engineered to the same form, 3D printed and tested to see if it fits fine. The fridge also needed new paint. It was starting to rust an needed good protection if it has to last another 5 years. From what I learnt painting the jeep, I could get this whole project done in a single day. The part was designed in Rhino and 3D printed.
    </div>
    <div className="flex-none lg:flex lg:flex-row py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/fridge-1.jpg" alt="3D Printing" /></div>
        <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/fridge-2.jpg" alt="3D Printing" /></div>
        <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/fridge-3.jpg" alt="3D Printing" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/fridge-4.jpg" alt="3D Printing" /></div>
        {/* <div className="lg:basic-2/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/fridge-5.jpg" alt="3D Printing" /></div> */}
    </div>

    <div className="px-4">
      <p className="font-bold">Catapult : Mechanisms</p>
      Done as a classroom project, the original catapult was taken as the inspiration to build something that had additional mechanism to make it more fun. The idea was to use a ratchet mechanism to load the catapult than turning it by hand.
    </div>
    <div className="flex-none lg:flex lg:flex-row py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/catapult-1.jpg" alt="3D Printing" /></div>
        <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/catapult-2.jpg" alt="3D Printing" /></div>
        <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/catapult-3.jpg" alt="3D Printing" /></div>
    </div>

    <div className="px-4">
      <p className="font-bold">Vice</p>
      <p>Having a vice is very handy with a lot of projects that involve small components. It is also very helpful while soldering. </p>
      <a className="underline" href="https://www.youtube.com/watch?v=mziT7KV-fRI"><p>More on the design of this vice</p></a>
    </div>
    <div className="flex-none lg:flex lg:flex-row py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/vice-1.jpg" alt="3D Printing" /></div>
        <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/vice-2.jpg" alt="3D Printing" /></div>
    </div>

    <div className="px-4">
      <p className="font-bold">GoPro Button</p>
      <p>GoPro had buttons that had deteriorated over time. There was nothing available online that could fix the issues with the buttons. So I decided to design a button that will fit in the GoPro and stay as is without coming off</p>
    </div>
    <div className="flex-none lg:flex lg:flex-row py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/gopro-button-1.jpg" alt="3D Printing" /></div>
        <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/gopro-button-2.jpg" alt="3D Printing" /></div>
        <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/gopro-button-3.jpg" alt="3D Printing" /></div>
    </div>

    <div className="px-4">
      Hold-down clamps were printed on PETG - the first time I had ever printed succesfully with a filament that wasn't PLA.
    </div>
    <div className="flex-none lg:flex lg:flex-row py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/3d-print-hold-down-clamp.jpg" alt="3D Printing" /></div>
        {/* <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/3d-print-hold-down-clamp.jpg" alt="3D Printing" /></div> */}
    </div>

    <div className="px-4">
      A set of gearboxes found on cults3D
    </div>
    <div className="flex-none lg:flex lg:flex-row py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/3d-print-1.jpg" alt="3D Printing" /></div>
        {/* <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/woodcutter-2.jpg" alt="3D Printing" /></div> */}
        {/* <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/woodcutter-3.jpg" alt="3D Printing" /></div> */}
        {/* <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/3d-print-hold-down-clamp.jpg" alt="3D Printing" /></div> */}
    </div>

    <div className="px-4">
      Filament Spool Holder made with wood and PVC Rod
    </div>
    <div className="flex-none lg:flex lg:flex-row py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/3d-print-spool-holder.jpg" alt="3D Printing" /></div>
        {/* <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/woodcutter-2.jpg" alt="3D Printing" /></div> */}
        {/* <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/woodcutter-3.jpg" alt="3D Printing" /></div> */}
        {/* <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/3d-print-hold-down-clamp.jpg" alt="3D Printing" /></div> */}
    </div>
    
    <div className="px-4">
      My workspace
    </div>
    <div className="flex-none lg:flex lg:flex-row py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/workspace-1.jpg" alt="3D Printing" /></div>
        <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/workspace-2.jpg" alt="3D Printing" /></div>
        <div className="lg:basic-1/3 mb-auto mt-auto px-1"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/workspace-3.jpg" alt="3D Printing" /></div>
        {/* <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/3d-printing+woodworking/3d-print-hold-down-clamp.jpg" alt="3D Printing" /></div> */}
    </div>

</div>
<Footer />
  </div>
  );
};

export default Page;