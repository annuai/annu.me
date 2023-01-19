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
  <>
    <Head>
      <title>Annuai - Augmented Reality Experience for 70+ Indigenous languages</title>
      <meta property="og:title" content="Annuai - Projects" key="title" />
    </Head>
    <Header />

    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4 py-8">
    <div className="text-sm">Digital Design + Development</div>
    <div className="max-w-md text-xl font-bold font-poppins">Bhasha Van: An Augmented Reality experience for 70+ indigenous languages of India</div>
    </div>
    </div>
    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4">
    <div className="max-w-xs text-md font-poppins">Bhasha Research is a non-profit working towards preservation of indigenous languages all over India.</div>

    <div className="flex mt-8">
  <div className="flex-initial w-44 text-xs font-bold font-poppins ">Execution</div>
  <div className="flex-initial w-64 text-xs font-poppins">Application in Unity</div>
</div>
<div className="flex">
  <div className="flex-initial w-44 text-xs font-bold font-poppins mt-1">Project Duration</div>
  <div className="flex-initial w-64 text-xs font-poppins mt-1">2020 to 2022</div>
</div>
  </div>
    </div>


    <div className="max-w-screen-lg mx-auto mt-10">
      <img className="max-w-full h-auto my-10 bg-green-100" src="/images/projects/bhasha/flow.png" alt="UI Flow" />
      <div className="max-w-screen-md px-6">
      <p>
        The project started as an extension of an existing project at Bhasha Kendra(as it is locally called), Tejgarh. The project is called Bhasha Van - transliterating to forest of languages. The original project is an audio experience with an android app that gives content on 120 different languages - most of them popular, very widely used ones.
      </p>
      <p>
        As an update to the existing project, Bhasha Van project was restarted as an Augmented Reality experience for 140 different indigenous languages. While the project originally sounded simple - the requirement was an app that scans a card and displays content related to that card - card contains information related to the language. A lot of explorations were done to find what was feasible, what ideas would make more sense than the others.
      </p>
      </div>
      {/* <div className="flex-none lg:flex lg:flex-row mt-3 bg-slate-100">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/projects/bhasha/bhasha-annume-01.png" alt="3D printer" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/projects/bhasha/bhasha-annume-03.png" alt="3D printer" /></div>
    </div> */}
      <img className="max-w-full h-auto mt-10 bg-slate-100" src="/images/projects/bhasha/bhasha-annume-01.png" alt="" />
      <div className="max-w-screen-md px-6 mt-6 mb-6">
      <span className="font-bold">Marker/ Card Design</span>
      <p>
        The cards that needed to be scanned required unique images on the marker. This was a challenge since there was no content available that connected all the languages together and still had a similar visual style. Originally the idea was to use textures from the academy - mostly adivasi drawings, that had a lot of interesting textures. The issue was they were available only in limited numbers and would require a huge amount of effort to get all the textures to a similar visual style for the cards.
      </p>
      <p>
        To solve the issue with textures, another option that was explored was to use a map of India and use textures in the map - the textures will be unique, the map will also point to the location where the language is spoken. This was tested out in unity to figure out that since the borders in the map were one and the same all throughout, the maps were detective false positives - the languages detected weren't the actual languages on the marker image.
      </p>
      
      <p>
        This required even more problem solving efforts, eventually settling down to markers of tree images done by Dr. Madan Meena, director of Adivasi Academy. The tree images also were limited in number, but it was possible to do adjustments to make it work for all the 70 languages. After a lot of composition trials, a final form was achieved for the markers.
      </p>
      </div>
      <div className="flex-none lg:flex lg:flex-row bg-slate-100">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/projects/bhasha/bhasha-annume-05.png" alt="3D printer" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/projects/bhasha/bhasha-annume-03.png" alt="3D printer" /></div>
    </div>
      <div className="flex-none lg:flex lg:flex-row bg-slate-100">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/projects/bhasha/bhasha-annume-07.png" alt="3D printer" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/projects/bhasha/bhasha-annume-08.png" alt="3D printer" /></div>
    </div>
      <div className="flex-none lg:flex lg:flex-row bg-slate-100">
        <div className="lg:basic-1/3 mb-auto mt-auto"><img className="max-w-full h-auto inline-block mb-auto mt-auto" src="/images/projects/bhasha/bhasha-annume-09.png" alt="3D printer" /></div>
        <div className="lg:basic-2/3 mb-auto mt-auto"></div>
    </div>
    
    <div className="max-w-screen-md px-6 mt-6 mb-6">
      <p>
        While other shapes were explored for the marker, it was kite festival, the first time I visited the academy. The festival had an important connection with the place. Kites everywhere - all kids playing with kites. This inspired the decision of making the marker into a rough kite shape - it had to be less obvious and more functional.
      </p>
      </div>
      
      {/* <img className="max-w-full h-auto my-10 bg-slate-100" src="/images/projects/bhasha/bhasha-annume-04.png" alt="" /> */}
      {/* Intro Screen */}
      <div className="max-w-screen-md px-6 mt-6 mb-6">
      <p>
        Introduction Board was also designed in a similar style
      </p>
      </div>
      <img className="max-w-full h-auto my-10 bg-slate-100" src="/images/projects/bhasha/bhasha-annume-10.png" alt="" />
      
      {/* Cards */}
      <div className="max-w-screen-md px-6 mt-6 mb-6">
      <p>
        A glimpse of what the final marker images look like.
      </p>
      </div>
      <img className="max-w-full h-auto my-10 bg-slate-100" src="/images/projects/bhasha/bhasha-annume-11.png" alt="" />

      {/* Marker placement */}
      <div className="max-w-screen-md px-6 mt-6 mb-6">
      <p>
        Final placement of the markers and introduction board in the campus
      </p>
      </div>
      <img className="max-w-full h-auto my-10 bg-slate-100" src="/images/projects/bhasha/bhasha-annume-06.png" alt="" />

      {/* UI */}
      <div className="max-w-screen-md px-6 mt-6 mb-6">
      <span className="font-bold">UI Design</span>
      <p>
        UI Design was the more complex part of the project. There was a lot of unstructured data available to Bhasha. Mostly in audio and video. There had to be a balance in the amount of content and type of content to be provided in the application.
      </p>
      <p>
        Original prototype for the application was made in Unity with ARFoundation. Many other AR libraries were also tried including ARCore and ARKit - ultimately, unity was the best bet - it had the capability to port the application effortlessly to a different platform as well. This was working good until I figured out most devices don't support AR and most available android tablets under a budget of ₹30,000 did not have the support. The application was rebuilt again later on for iOS only, iPads were also purchased.
      </p>
      </div>
      <img className="max-w-full h-auto mt-10 bg-slate-100" src="/images/projects/bhasha/bhasha-annume-02.png" alt="" />
      <img className="max-w-full h-auto mb-10 bg-slate-100" src="/images/projects/bhasha/bhasha-annume-12.png" alt="" />

          <div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/JAMXkD40Yng"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen;"
    ></iframe>
</div>

      <div className="max-w-2xl px-6">
      <div className="text-md font-switzer font-bold mt-5">
  Learnings & Takeaways
</div>
<div className="text-sm font-switzer mt-5">
  <div className="font-bold mt-2">Unity development</div>
  <div className="">
    Coding the whole application was a humongous task. The task required a lot of learning on unity's interface and C# programming. I also had to get external help to complete the work.
  </div>
  <div className="font-bold mt-2">Balancing time and work</div>
  <div className="">
    The time taken to complete this project cannot be justified in any way. A project that should've ended in 3 months took around 2 years to reach completion stage. The major issues were with working out a balance with deliverables from other individuals. The content editors and creators I had to work with had to learn much of their craft and work things out slowly.
  </div>
  <div className="font-bold mt-2">AR's true potential</div>
  <div className="">
    AR has a lot of potential - it might even become the operating system of the future. By starting out with small and simple projects like these - I'm able to slowly explore what the future holds for us.
  </div>
  <div className="font-bold mt-2">Printing on acrylic</div>
  <div className="">
    UV printing is a process I explored to make the printed markers.
  </div>
</div>
</div>

    </div>
<Footer />
  </>
  );
};

export default Page;