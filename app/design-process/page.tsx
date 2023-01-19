"use client"
import Head from 'next/head'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
import '../page.module.css'
import Header from '../components/header'
import Footer from '../components/footer'

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
    <div className="w-full bg-red-100 ">
    <div className="max-w-5xl mx-auto">
    <img className="object-cover h-auto pt-10 mb-10" src="/images/other/the-design-proces.png" alt="3D printer render" />
    </div>
    </div>
<Footer />
  </div>
  );
};

export default Page;