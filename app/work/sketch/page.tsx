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
    <div className="max-w-screen-lg m-auto">
    <div className="font-bold text-lg mt-4 mx-4">Sketches & Ideas</div>
    </div>
    <div className="container mx-auto">
    {/* <section className='columns-2 lg:columns-4 max-w-full mx-auto space-y-4'>
          <div className='rounded-md overflow-hidden'>
          <img src="/images/sketches/sketch/1.jpg"
                alt="image"/>
            </div>
            <div className='rounded-md overflow-hidden'>
          <img src="/images/sketches/sketch/1.jpg"
                alt="image"/>
            </div>
            <div className='rounded-md overflow-hidden'>
          <img src="/images/sketches/sketch/1.jpg"
                alt="image"/>
            </div>
            <div className='rounded-md overflow-hidden'>
          <img src="/images/sketches/sketch/1.jpg"
                alt="image"/>
            </div>
            <div className='rounded-md overflow-hidden'>
          <img src="/images/sketches/sketch/1.jpg"
                alt="image"/>
            </div>
            <div className='rounded-md overflow-hidden'>
          <img src="/images/sketches/sketch/1.jpg"
                alt="image"/>
            </div>
            <div className='rounded-md overflow-hidden'>
          <img src="/images/sketches/sketch/1.jpg"
                alt="image"/>
            </div>
            <div className='rounded-md overflow-hidden'>
          <img src="/images/sketches/sketch/1.jpg"
                alt="image"/>
            </div>
            <div className='rounded-md overflow-hidden'>
          <img src="/images/sketches/sketch/1.jpg"
                alt="image"/>
            </div>
            <div className='rounded-md overflow-hidden'>
          <img src="/images/sketches/sketch/1.jpg"
                alt="image"/>
            </div>
            <div className='rounded-md overflow-hidden'>
          <img src="/images/sketches/sketch/1.jpg"
                alt="image"/>
            </div>
</section> */}

<section className="overflow-hidden text-gray-700">
  <div className="container px-5 py-2 mx-auto lg:pt-10 lg:px-4">
    <div className="flex flex-wrap -m-1 md:-m-2">
      <div className="flex flex-wrap w-full lg:w-1/2">
        <div className="w-1/2 p-1 md:p-2 border-2 border-transparent">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/1.jpg" />
        </div>
        <div className="w-1/2 p-1 md:p-2 border-2 border-transparent">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/2.jpg" />
        </div>
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/5.jpg" />
        </div>
      </div>
      <div className="flex flex-wrap w-full lg:w-1/2">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/32.png" />
        </div>
        <div className="w-1/2 p-1 md:p-2 border-2 border-transparent">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/3.jpg" />
        </div>
        <div className="w-1/2 p-1 md:p-2 border-2 border-transparent">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/33.png" />
        </div>
      </div>
      <div className="flex flex-wrap w-full lg:w-1/2">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/6.jpg" />
        </div>
        <div className="w-1/2 p-1 md:p-2 border-2 border-transparent">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/7.png" />
        </div>
        <div className="w-1/2 p-1 md:p-2 border-2 border-transparent">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/8.png" />
        </div>
      </div>
      <div className="flex flex-wrap w-full lg:w-1/2">
        <div className="w-1/2 p-1 md:p-2 border-2 border-transparent">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/9.png" />
        </div>
        <div className="w-1/2 p-1 md:p-2 border-2 border-transparent">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/10.png" />
        </div>
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/11.png" />
        </div>
      </div>
      <div className="flex flex-wrap w-full lg:w-1/2">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/12.png" />
        </div>
        <div className="w-1/2 p-1 md:p-2 border-2 border-transparent">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/13.png" />
        </div>
        <div className="w-1/2 p-1 md:p-2 border-2 border-transparent">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/14.png" />
        </div>
      </div>
      <div className="flex flex-wrap w-full lg:w-1/2">
        <div className="w-1/2 p-1 md:p-2 border-2 border-transparent">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/16.png" />
        </div>
        <div className="w-1/2 p-1 md:p-2 border-2 border-transparent">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/17.png" />
        </div>
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/18.png" />
        </div>
      </div>
      <div className="flex flex-wrap w-full lg:w-1/2">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/20.png" />
        </div>
        <div className="w-1/2 p-1 md:p-2 border-2 border-transparent">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/21.png" />
        </div>
        <div className="w-1/2 p-1 md:p-2 border-2 border-transparent">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/24.png" />
        </div>
      </div>
      <div className="flex flex-wrap w-full lg:w-1/2">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/sketch/26.png" />
        </div>
        <div className="w-1/2 p-1 md:p-2 border-2 border-transparent">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/render/measure.png" />
        </div>
        <div className="w-1/2 p-1 md:p-2 border-2 border-transparent">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/render/marker.png" />
        </div>
      </div>
      <div className="flex flex-wrap w-full lg:w-1/2">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/render/cable-organizer-1.png" />
        </div>
        <div className="w-1/2 p-1 md:p-2 border-2 border-transparent">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/render/paper-cutter.png" />
        </div>
        {/* <div className="w-1/2 p-1 md:p-2 border-2 border-transparent">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/sketches/render/paper-cutter.png" />
        </div> */}
      </div>
    </div>
  </div>
</section>

</div>
<Footer />
  </div>
  );
};

export default Page;