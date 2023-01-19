"use client"
import Head from 'next/head'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
import '../page.module.css'
import Header from '../components/header'

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

    <div className="w-full bg-red-200">
    <div className="max-w-screen-lg mx-auto p-6">
    <div className="text-sm">This is an empty page</div>
    <div className="max-w-xs text-xl font-poppins">This page is not supposed to exist, but I created it anyway</div>
    </div>
    </div>
  </div>
  );
};

export default Page;