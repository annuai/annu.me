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
    <div className="text-sm">Personal project</div>
    <div className="max-w-md text-xl font-bold font-poppins">Restoring a malayalam typewriter</div>
    </div>
    </div>
    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4">
    <div className="max-w-sm text-md font-poppins">I found a rather rare remington malayalam typewriter from a dump of old typewriting and primitive photocopying equipment. The fact that this machine could type in malayalam was so fascinating to me and I wanted to see it working. Brought it home, gave it a good clean and put in an old typewriter reel I had collected sometime ago and it started working! Later I gave it a protective white coating. Extracted letters are below!</div>
    
    <div className="flex mt-8">
  <div className="flex-initial w-44 text-xs font-bold font-poppins ">Execution</div>
  <div className="flex-initial w-64 text-xs font-poppins">Restored to working condition, Letters extracted and saved as an image</div>
</div>
<div className="flex">
  <div className="flex-initial w-44 text-xs font-bold font-poppins mt-1">Project Duration</div>
  <div className="flex-initial w-64 text-xs font-poppins mt-1">2 days</div>
</div>
  
  </div>
    </div>


    <div className="max-w-screen-lg mx-auto mt-10">
      <img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/restoring-typewriter/Malayalam-Typewriter - 3.jpg" alt="Typewriter" />
      <img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/restoring-typewriter/Malayalam-Typewriter - 2.jpg" alt="Typewriter" />
      <img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/restoring-typewriter/Malayalam-Typewriter - 1.jpg" alt="Typewriter" />
      <img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/older/restoring-typewriter/Malayalam-Typewriter - 4.jpg" alt="Typewriter" />

      <div className="text-md font-bold mb-4 mx-4">
          Letters were typed on paper, scanned and then extracted into individual letterforms.
          </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 p-4 lg:p-0">
      <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/0.png" alt="Typewriter" />
          <div className="m-auto pl-3">0</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/1.png" alt="Typewriter" />
          <div className="m-auto pl-3">1</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/2.png" alt="Typewriter" />
          <div className="m-auto pl-3">2</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/3.png" alt="Typewriter" />
          <div className="m-auto pl-3">3</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/4.png" alt="Typewriter" />
          <div className="m-auto pl-3">4</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/5.png" alt="Typewriter" />
          <div className="m-auto pl-3">5</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/6.png" alt="Typewriter" />
          <div className="m-auto pl-3">6</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/7.png" alt="Typewriter" />
          <div className="m-auto pl-3">7</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/8.png" alt="Typewriter" />
          <div className="m-auto pl-3">8</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/9.png" alt="Typewriter" />
          <div className="m-auto pl-3">9</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/a.png" alt="Typewriter" />
          <div className="m-auto pl-3">a</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/a1.png" alt="Typewriter" />
          <div className="m-auto pl-3">ae</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/a2.png" alt="Typewriter" />
          <div className="m-auto pl-3">a</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/aa.png" alt="Typewriter" />
          <div className="m-auto pl-3">aa</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/add.png" alt="Typewriter" />
          <div className="m-auto pl-3">add</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/ae.png" alt="Typewriter" />
          <div className="m-auto pl-3">ae</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/am.png" alt="Typewriter" />
          <div className="m-auto pl-3">am</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/ba.png" alt="Typewriter" />
          <div className="m-auto pl-3">ba</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/bha.png" alt="Typewriter" />
          <div className="m-auto pl-3">bha</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/ccha.png" alt="Typewriter" />
          <div className="m-auto pl-3">ccha</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/cha.png" alt="Typewriter" />
          <div className="m-auto pl-3">cha</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/colon.png" alt="Typewriter" />
          <div className="m-auto pl-3">:</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/comma.png" alt="Typewriter" />
          <div className="m-auto pl-3">,</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/da.png" alt="Typewriter" />
          <div className="m-auto pl-3">da</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/dda.png" alt="Typewriter" />
          <div className="m-auto pl-3">dda</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/ddda.png" alt="Typewriter" />
          <div className="m-auto pl-3">ddda</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/ddha.png" alt="Typewriter" />
          <div className="m-auto pl-3">ddha</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/dha.png" alt="Typewriter" />
          <div className="m-auto pl-3">dha</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/divide.png" alt="Typewriter" />
          <div className="m-auto pl-3">/</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/dot.png" alt="Typewriter" />
          <div className="m-auto pl-3">.</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/e.png" alt="Typewriter" />
          <div className="m-auto pl-3">e</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/e1.png" alt="Typewriter" />
          <div className="m-auto pl-3">e</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/eee.png" alt="Typewriter" />
          <div className="m-auto pl-3">ee</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/ga.png" alt="Typewriter" />
          <div className="m-auto pl-3">ga</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/ggha.png" alt="Typewriter" />
          <div className="m-auto pl-3">ggha</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/gha.png" alt="Typewriter" />
          <div className="m-auto pl-3">gha</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/ha.png" alt="Typewriter" />
          <div className="m-auto pl-3">ha</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/hyphen.png" alt="Typewriter" />
          <div className="m-auto pl-3">-</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/ill.png" alt="Typewriter" />
          <div className="m-auto pl-3">ill</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/jha.png" alt="Typewriter" />
          <div className="m-auto pl-3">jha</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/ka.png" alt="Typewriter" />
          <div className="m-auto pl-3">ka</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/kka.png" alt="Typewriter" />
          <div className="m-auto pl-3">kka</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/la.png" alt="Typewriter" />
          <div className="m-auto pl-3">la</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/la1.png" alt="Typewriter" />
          <div className="m-auto pl-3">la</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/leftbracket.png" alt="Typewriter" />
          <div className="m-auto pl-3">(</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/lll.png" alt="Typewriter" />
          <div className="m-auto pl-3">lll</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/ma.png" alt="Typewriter" />
          <div className="m-auto pl-3">ma</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/multiply.png" alt="Typewriter" />
          <div className="m-auto pl-3">*</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/na.png" alt="Typewriter" />
          <div className="m-auto pl-3">na</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/nga.png" alt="Typewriter" />
          <div className="m-auto pl-3">nga</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/nha.png" alt="Typewriter" />
          <div className="m-auto pl-3">nha</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/nja.png" alt="Typewriter" />
          <div className="m-auto pl-3">nja</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/nn.png" alt="Typewriter" />
          <div className="m-auto pl-3">nn</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/nna.png" alt="Typewriter" />
          <div className="m-auto pl-3">nna</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/nnn.png" alt="Typewriter" />
          <div className="m-auto pl-3">nnn</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/o.png" alt="Typewriter" />
          <div className="m-auto pl-3">o</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/ow.png" alt="Typewriter" />
          <div className="m-auto pl-3">ow</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/pa.png" alt="Typewriter" />
          <div className="m-auto pl-3">pa</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/percent.png" alt="Typewriter" />
          <div className="m-auto pl-3">%</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/pha.png" alt="Typewriter" />
          <div className="m-auto pl-3">pha</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/question.png" alt="Typewriter" />
          <div className="m-auto pl-3">?</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/quote.png" alt="Typewriter" />
          <div className="m-auto pl-3">"</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/ra.png" alt="Typewriter" />
          <div className="m-auto pl-3">ra</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/ra1.png" alt="Typewriter" />
          <div className="m-auto pl-3">ra</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/a.png" alt="Typewriter" />
          <div className="m-auto pl-3">a</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/rightbracket.png" alt="Typewriter" />
          <div className="m-auto pl-3">)</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/rra.png" alt="Typewriter" />
          <div className="m-auto pl-3">rra</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/rrr.png" alt="Typewriter" />
          <div className="m-auto pl-3">rrr</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/rru.png" alt="Typewriter" />
          <div className="m-auto pl-3">rru</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/rru1.png" alt="Typewriter" />
          <div className="m-auto pl-3">rru</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/sa.png" alt="Typewriter" />
          <div className="m-auto pl-3">sa</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/semicolon.png" alt="Typewriter" />
          <div className="m-auto pl-3">;</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/sha.png" alt="Typewriter" />
          <div className="m-auto pl-3">sha</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/sha1.png" alt="Typewriter" />
          <div className="m-auto pl-3">sha</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/singlequote.png" alt="Typewriter" />
          <div className="m-auto pl-3">'</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/star.png" alt="Typewriter" />
          <div className="m-auto pl-3">*</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/subtract.png" alt="Typewriter" />
          <div className="m-auto pl-3">-</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/ta.png" alt="Typewriter" />
          <div className="m-auto pl-3">ta</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/tha.png" alt="Typewriter" />
          <div className="m-auto pl-3">tha</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/tsa.png" alt="Typewriter" />
          <div className="m-auto pl-3">tsa</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/tta.png" alt="Typewriter" />
          <div className="m-auto pl-3">tta</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/tta1.png" alt="Typewriter" />
          <div className="m-auto pl-3">tta</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/u.png" alt="Typewriter" />
          <div className="m-auto pl-3">u</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/u1.png" alt="Typewriter" />
          <div className="m-auto pl-3">u</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/u2.png" alt="Typewriter" />
          <div className="m-auto pl-3">u</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/underscore.png" alt="Typewriter" />
          <div className="m-auto pl-3">_</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/uu.png" alt="Typewriter" />
          <div className="m-auto pl-3">uu</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/a.png" alt="Typewriter" />
          <div className="m-auto pl-3">a</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/va.png" alt="Typewriter" />
          <div className="m-auto pl-3">va</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/va1.png" alt="Typewriter" />
          <div className="m-auto pl-3">va</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/ya.png" alt="Typewriter" />
          <div className="m-auto pl-3">ya</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/ya1.png" alt="Typewriter" />
          <div className="m-auto pl-3">ya</div>
        </div>
        <div className="border border-slate-600">
          <img className="max-w-full h-auto my-10 m-auto" src="/images/projects/older/restoring-typewriter/typeheads/png/zha.png" alt="Typewriter" />
          <div className="m-auto pl-3">zha</div>
        </div>
      </div>
</div>
<Footer />
  </div>
  );
};

export default Page;