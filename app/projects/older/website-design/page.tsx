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
    <div className="text-sm">Web Design compilation</div>
    <div className="max-w-md text-xl font-bold font-poppins">Websites I've designed</div>
    </div>
    </div>
    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4 py-6">
    <div className="max-w-xs text-md font-poppins">
      Web design was fun once upon a time
    </div>
    
    <div className="flex mt-8">
  <div className="flex-initial w-44 text-xs font-bold font-poppins ">Execution</div>
  <div className="flex-initial w-64 text-xs font-poppins">Sketch and Adobe Illustrator</div>
</div>
{/* <div className="flex">
  <div className="flex-initial w-44 text-xs font-bold font-poppins mt-1">Project Duration</div>
  <div className="flex-initial w-64 text-xs font-poppins mt-1">1 month</div>
</div> */}
  
  </div>
    </div>


    <div className="max-w-screen-lg mx-auto mt-10">

    <img className="max-w-full h-auto mt-4 mb-4 bg-white-100" src="/images/projects/older/website-design/2020/bhasha-website.png" alt="Website" />
    <div className="p-4">Website design for Bhasha Research(unofficial) - 2020</div>
    
    <img className="max-w-full h-auto mt-4 mb-4 bg-white-100" src="/images/projects/older/website-design/2020/joinery-website.png" alt="Website" />
    <div className="p-4">Joinery.in website</div>
    
    <img className="max-w-full h-auto mt-4 mb-4 bg-white-100" src="/images/projects/older/website-design/2016/encodeid-home.png" alt="Website" />
    <div className="p-4">Homepage with login designed for encodeID - 2016, Justbootup Technologies</div>
    
    <img className="max-w-full h-auto mt-4 mb-4 bg-white-100" src="/images/projects/older/website-design/2016/hiredev-home.png" alt="Website" />
    <div className="p-4">Homepage with login designed for Hiredev - 2016, Justbootup Technologies</div>
    
    <img className="max-w-full h-auto mt-4 mb-4 bg-white-100" src="/images/projects/older/website-design/2016/jinbuy-home.png" alt="Website" />
    <div className="p-4">Homepage with login designed for Jinbuy - 2016, Justbootup Technologies</div>

    <img className="max-w-full h-auto mt-4 mb-4 bg-white-100 my-10" src="/images/projects/older/website-design/2016/annu.co-website.png" alt="Website" />
    <div className="p-4">Homepage for annu.co, designed for myself - 2017</div>

    <img className="max-w-full h-auto mt-4 mb-4 bg-white-100" src="/images/projects/older/website-design/2016/Home-YVT.jpg" alt="Website" />
    <div className="p-4">One Page website designed for YVT - 2017</div>
    
</div>
<Footer />
  </div>
  );
};

export default Page;