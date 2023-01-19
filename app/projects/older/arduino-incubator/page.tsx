
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
    
    <Header />

    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4 py-8">
    <div className="text-sm">Electronics Prototyping</div>
    <div className="max-w-md text-xl font-bold font-poppins">Incubating eggs with Arduino</div>
    </div>
    </div>
    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4 py-6">
    <div className="max-w-xs text-md font-poppins">The idea was to use arduino to prototype a simple incubator, see if it works and then hatch eggs. The first try was succesful with one egg and later on with two eggs. Although the yield is pathetic, I had fun building it and waiting the whole 18 days to see if it hatches!</div>
    
    <div className="flex mt-8">
  <div className="flex-initial w-44 text-xs font-bold font-poppins ">Execution</div>
  <div className="flex-initial w-64 text-xs font-poppins">Working Prototype with Arduino</div>
</div>
<div className="flex">
  <div className="flex-initial w-44 text-xs font-bold font-poppins mt-1">Project Duration</div>
  <div className="flex-initial w-64 text-xs font-poppins mt-1">21 days</div>
</div>
  
  </div>
    </div>


    <div className="max-w-screen-lg mx-auto mt-10">
    <div className="flex-none lg:flex lg:flex-row p-3 pb-0">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/arduino-incubator/1.jpg" alt="Arduino" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/arduino-incubator/2.jpg" alt="Arduino" /></div>
    </div>
    <div className="px-4">Here are the sketch files for Arduino and NodeMCU to build this incubator. <a href="/files/incubator-sketch.zip" className="underline">Download</a></div>
    <div className="flex-none lg:flex lg:flex-row p-3 py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/arduino-incubator/3.jpg" alt="Arduino" /></div>
        {/* <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/arduino-incubator/2-3.jpg" alt="Arduino" /></div> */}
    </div>
    <div className="px-4">
      The eggs are marked, kept with paper cutouts to absord any extra moisture and the water is kept to maintain the moisture content throughout the 18 days of egg's development. The eggs need to be turned everyday twice - thus helping embryo develop evenly without complications. In a later stage, this process needs to completely automated.
      <div className="mt-3">Some examples of how youtubers have achieved this</div>
      <div><a href="https://www.youtube.com/watch?v=JivmYkE7SaU" className="hover:underline">How To hatch eggs in Automatic EGG INCUBATOR ( Capacity 48 eggs ) | Hatched Result</a></div>
      <div><a href="https://www.youtube.com/watch?v=Uxb4dhBYRg8" className="hover:underline">How to Make Automatic Eggs turner For Incubator - Eggs turning tray - Auto egg turner incubator</a></div>
      <div><a href="https://www.youtube.com/watch?v=dYdICG8h_WA" className="hover:underline">How to make Automatic Egg Turner for incubator - Egg turner - automatic egg turner - egg roller</a></div>
      <div><a href="https://www.youtube.com/watch?v=N7EIO8xQ9zg" className="hover:underline">AUTOMATIC EGG TURNER EASIEST WAY</a></div>
    </div>
    <div className="flex-none lg:flex lg:flex-row p-3 py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/arduino-incubator/4-2.jpg" alt="Arduino" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/arduino-incubator/4-3.jpg" alt="Arduino" /></div>
    </div>
    <div className="px-4">
      The first prototype was a simple bucket and light bulb and checking out if the temperature would be enough. This doesn't have any micro controllers. The prime objective is to understand whether it can be controlled without a microcontroller. The result is - the bucket gets heated pretty fast, the ideal temperature and humidity for the eggs are <b>37.7°C and 57% humidity</b>. This cannot be achieved without a controller.
    </div>
    <div className="flex-none lg:flex lg:flex-row p-3 py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/arduino-incubator/4.jpg" alt="Arduino" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/arduino-incubator/5.jpg" alt="Arduino" /></div>
    </div>
    <div className="px-4">
      Both NodeMCU and Arduino were considered first, it was much easier to just start with arduino and move on to ESP later on when its capabilities like WiFi and IoT are actually required. A first prototype was made using simple relay, temperature sensor and moisture sensor to control the temperature and humidity in closed loop - commonly called bang bang control. There was no way I could implement a more complex algorithm without increasing the overall cost. The ideal temperature control algorithm would have been PID control but would require more expensive components that can be controlled through PWM signals.
      <div className="mt-3"><a href="https://www.cs.utexas.edu/~todd/cs378/slides/control.pdf" className="underline">Different types of control</a></div>
    </div>
    <div className="flex-none lg:flex lg:flex-row p-3 py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/arduino-incubator/6.jpg" alt="Arduino" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/arduino-incubator/7.jpg" alt="Arduino" /></div>
    </div>
    <div className="px-4">
      Assembling the controller in the paint bucket. A small ice cream container was used to contain all the electronics - a fan regulator is used to control the intensity of the light - this can be increased or decreased - it helps with how fast the heat gets transferred - the temperature will anyway be maintained, but the speed of heat radiation might affect the eggs.
    </div>
    <div className="flex-none lg:flex lg:flex-row p-3 py-5">
        <div className="lg:basic-1/2 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/arduino-incubator/9-1.jpg" alt="Arduino" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/arduino-incubator/9-2.jpg" alt="Arduino" /></div>
    </div>
    <div className="px-4">
      Sketches for a future prototype wherein all the features explored in the bucket prototype will be integrated and will be reduced into a much smaller form with further usability - like being able to see the eggs without opening the incubator and having candlelight function to see the development of the eggs.
    </div>
    <div className="flex-none lg:flex lg:flex-row p-3 py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/arduino-incubator/9.jpg" alt="Arduino" /></div>
        {/* <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/arduino-incubator/2-3.jpg" alt="Arduino" /></div> */}
    </div>
    <div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/1HEweWgJcrg"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen;"
    ></iframe>
</div>
    <div className="px-4">
      The final test prototype is made and assembled, kept on for 18 days to see if eggs actually hatch. The trial was succesful, but only partially. Out of 8 eggs only two hatched, which makes the incubator highly inefficient. The product needs a lot more tweaking to get the electronics right. The issues could also have been because of the frequent powercuts in the area - which wasn't considered originally as part of the design. Most commercially available incubators can keep the heat contained for 6-8 hours without active power.
    </div>
    <div className="flex-none lg:flex lg:flex-row p-3 py-5">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/arduino-incubator/11.jpg" alt="Arduino" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/arduino-incubator/14.jpg" alt="Arduino" /></div>
    </div>

    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-3">
<div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/2sG9nbqxsXA"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen;"
    ></iframe>
</div>
  <div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/CdaRaoVJiFI"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen;"
    ></iframe>
</div>
</div>
</div>

<Footer />
  </div>
  );
};

export default Page;