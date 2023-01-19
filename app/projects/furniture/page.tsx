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
      <title>Annuai - Augmented Reality Experience for 70+ Indigenous languages</title>
      <meta property="og:title" content="Annuai - Projects" key="title" />
    </Head>
    <Header />

    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4 py-8">
    <div className="text-sm">Personal Project - Furniture</div>
    <div className="max-w-md text-xl font-bold font-poppins">Building tables and cabinets with plywood</div>
    </div>
    </div>
    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4">
    <div className="max-w-xs text-md font-poppins">I
     build furniture mostly out of necessity. But it has come to a point where I put a lot of utility and thought to my mostly made-at-once furniture.
    </div>
      <div className="max-w-xs text-sm font-poppins mt-4"></div>

      <div className="flex mt-8">
  <div className="flex-initial w-44 text-xs font-bold font-poppins ">Execution</div>
  <div className="flex-initial w-64 text-xs font-poppins">Built with Plywood, PVC</div>
</div>
{/* <div className="flex">
  <div className="flex-initial w-44 text-xs font-bold font-poppins mt-1">Project Duration</div>
  <div className="flex-initial w-64 text-xs font-poppins mt-1">2020 to 2022</div>
</div> */}

  </div>
    </div>
    <div className="max-w-screen-lg mx-auto mt-10">
    <div className="flex-none lg:flex lg:flex-row p-3 pb-0">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/furniture/1.jpg" alt="Furniture" /></div>
    </div>
    <div className="px-4">
      <p>The cabinet was custom made to fit into a small unused space in the house. The dimensions are 207(l)x45(w)x84(h) cm. The idea is to develop a simple utilitarian cabinet with plugs attached for functionality and automatic internal lighting on drawers and doors. Framing the cabinet was the easiest part - it took only 3 hours to complete. The whole body of the cabinet was done first day.</p>
      <p>The next part was putting the drawer rails together - which took a lot of calculation to make sure it was aligned perfectly - this didn't work out well in the end because of a few calculation errors I made. Few changes were made to fix the issues, including adding a small piece of plywood on the sides to get the rails to work.</p>
    </div>

    <iframe src="https://myhub.autodesk360.com/ue289f061/shares/public/SH35dfcQT936092f0e43cd323ab8fc640a68?mode=embed" className="w-full mt-8" height="768" allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen;" frameBorder="0"></iframe>

    <div className="flex-none lg:flex lg:flex-row p-3 pb-0">
    <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/furniture/2.jpg" alt="Furniture" /></div>
    </div>
    <div className="px-4">Painting the cabinet took more time since I had no idea of the processes I was working with. Plywood requires special primer that makes the wood absord less paint and reduce the amount of paint required. I learnt this the hard way - after failing twice - painting directly first and using an automotive primer second.</div>

    <div className="flex-none lg:flex lg:flex-row p-3 py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/furniture/4.jpg" alt="Furniture" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/furniture/5.jpg" alt="Furniture" /></div>
    </div>
    <div className="flex-none lg:flex lg:flex-row p-3 py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/furniture/6.jpg" alt="Furniture" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/furniture/7.jpg" alt="Furniture" /></div>
    </div>
    <div className="flex-none lg:flex lg:flex-row p-3 py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/furniture/8.jpg" alt="Furniture" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/furniture/10.jpg" alt="Furniture" /></div>
    </div>
    <div className="video-container mb-20">
  <iframe
    src="https://www.youtube.com/embed/8sFVAL07-Oc"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen;"
    ></iframe>
</div>

<div className="px-4">
<div className="text-sm">Personal Project</div>
<div className="text-md font-bold">PVC Table</div>
</div>
<div className="flex-none lg:flex lg:flex-row p-3 py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/furniture/pvc-table-1.jpg" alt="Furniture" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/furniture/pvc-table-2.jpg" alt="Furniture" /></div>
    </div>


<div className="px-4">
<div className="text-sm">Classroom Project</div>
<div className="text-md font-bold">Furniture Design: Thonet</div>
</div>
<div className="max-w-screen-lg mx-auto mt-10">
      <img className="max-w-full h-auto my-10 bg-red-200" src="/images/projects/furniture/thonet/thonet.005.jpeg" alt="Furniture" />
      <img className="max-w-full h-auto my-10 bg-red-200" src="/images/projects/furniture/thonet/thonet.013.jpeg" alt="Furniture" />
</div>
<p className="px-4">Click <a href="/images/projects/furniture/thonet/Thonet-Furniture-Design.pdf" className="underline">here</a> for the Thonet project</p>

</div>

<Footer />
  </div>
  );
};

export default Page;