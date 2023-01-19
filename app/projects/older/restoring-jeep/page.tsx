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
    <div className="text-sm">Restoration + Process exploration</div>
    <div className="max-w-md text-xl font-bold font-poppins">Painting and restoring an old classic</div>
    </div>
    </div>
    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4 py-0">
    <div className="max-w-lg text-md font-poppins">This jeep started out in our family when I was 3 years old. The first time I saw it, it was black in color. It changed colors every two years until the ugly blue came in. I always hated the color, wanted it to change. My dad was reluctant on getting a paintjob - it was both expensive and the jeep was going through a lot of uncertainity since we heard about the new scrappage policy for older vehicles. I took the project up myself, decided to research and figure out how to paint vehicles, bought myself an electric spraygun and got to work.</div>
    
    <div className="flex mt-8">
  <div className="flex-initial w-44 text-xs font-bold font-poppins ">Execution</div>
  <div className="flex-initial w-64 text-xs font-poppins">Spray painting the Jeep</div>
</div>
<div className="flex">
  <div className="flex-initial w-44 text-xs font-bold font-poppins mt-1">Project Duration</div>
  <div className="flex-initial w-64 text-xs font-poppins mt-1">1 month</div>
</div>
  
  </div>
    </div>

    <div className="max-w-screen-lg mx-auto mt-10">
    {/* <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
      <div>
      <img className="max-w-full h-auto mt-4 mb-4 bg-cyan-100" src="/images/projects/older/restoring-jeep/0.jpg" alt="Jeep" />
      </div>
      <div>
      <img className="max-w-full h-auto mt-4 mb-4 bg-cyan-100" src="/images/projects/older/restoring-jeep/1.jpg" alt="Jeep" />
      </div>
    </div> */}

    <div className="gap-8 columns-2 content-start">
    <img className="max-w-full h-auto mt-4 mb-4 bg-cyan-100" src="/images/projects/older/restoring-jeep/0.jpg" alt="Jeep" />
    1. Getting the welding work done
    <img className="max-w-full h-auto mt-4 mb-4 bg-cyan-100" src="/images/projects/older/restoring-jeep/1.jpg" alt="Jeep" />
    2. Removing all parts
    <img className="max-w-full h-auto mt-4 mb-4 bg-cyan-100" src="/images/projects/older/restoring-jeep/2.jpg" alt="Jeep" />
    3. Putting on a lot of grey NC(Nitro Cellulose) Putty
    <img className="max-w-full h-auto mt-4 mb-4 bg-cyan-100" src="/images/projects/older/restoring-jeep/3.jpg" alt="Jeep" />
    4. Spraying on the grey 1K primer
    <img className="max-w-full h-auto mt-4 mb-4 bg-cyan-100" src="/images/projects/older/restoring-jeep/4.jpg" alt="Jeep" />
    5. Selecting the original color
    <img className="max-w-full h-auto mt-4 mb-4 bg-cyan-100" src="/images/projects/older/restoring-jeep/5.jpg" alt="Jeep" />
    6. Spraying on the inside a coat of white enamel(since rough usage)
    <img className="max-w-full h-auto mt-4 mb-4 bg-cyan-100" src="/images/projects/older/restoring-jeep/6.jpg" alt="Jeep" />
    7. Spraying on the final coat of PU 2 part paint and then a PU 2 part clear coat
    <img className="max-w-full h-auto mt-4 mb-4 bg-cyan-100" src="/images/projects/older/restoring-jeep/8.jpg" alt="Jeep" />
    8. Late night putting things back together
    <img className="max-w-full h-auto mt-4 mb-4 bg-cyan-100" src="/images/projects/older/restoring-jeep/9.jpg" alt="Jeep" />
    9. Decided to restore the original Engine number plate
    <img className="max-w-full h-auto mt-4 mb-4 bg-cyan-100" src="/images/projects/older/restoring-jeep/10.jpg" alt="Jeep" />
    10. Restored it with acrylic paint and a lot of cleaning
    <img className="max-w-full h-auto mt-4 mb-4 bg-cyan-100" src="/images/projects/older/restoring-jeep/11.jpg" alt="Jeep" />
    11. Better view of the plate
    <img className="max-w-full h-auto mt-4 mb-4 bg-cyan-100" src="/images/projects/older/restoring-jeep/12.jpg" alt="Jeep" />
    12. One of the few pictures my lack of documentation took
    <img className="max-w-full h-auto mt-4 mb-4 bg-cyan-100" src="/images/projects/older/restoring-jeep/13.jpg" alt="Jeep" />
    13. Tools
    <img className="max-w-full h-auto mt-4 mb-4 bg-cyan-100" src="/images/projects/older/restoring-jeep/14.jpg" alt="Jeep" />
    14. 3D printed a new jeep keychain and painted it(Red on one side, black on the other)
    <img className="max-w-full h-auto mt-4 mb-4 bg-cyan-100" src="/images/projects/older/restoring-jeep/15.jpg" alt="Jeep" />
    15. Final picture from the day it finished
</div>
    </div>

<Footer />
  </div>
  );
};

export default Page;