"use client"
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
// import styles from '../page.module.css';
const Header = () => {
  // Count state
  // This will be displayed in the UI
  const [textThatChanges, setTextThatChanges] = React.useState<string>('Industrial Designer');
  const textArray = ['Industrial Designer', 'Tinkerer', 'Carpenter', 'Mechanic', 'Developer'];
  let counter = 0;

  // Ref
  // This will be used to store the interval
  const intervalref = useRef<number | null>(null);

  // Start the interval
  // This will be called when the user clicks on the start button
  const startInterval = () => {
    // if (intervalref.current !== null) return;
    intervalref.current = window.setInterval(() => {
      counter = counter + 1;
      if(counter == 5){
        counter = 0;
      }
      setTextThatChanges(textArray[counter]);
    }, 2000);
  };

  // Stop the interval
  // This will be called when the user clicks on the stop button
  const stopInterval = () => {
    if (intervalref.current) {
      window.clearInterval(intervalref.current);
      intervalref.current = null;
    }
  };
  // Use the useEffect hook to cleanup the interval when the component unmounts
  useEffect(() => {
    startInterval();
    // here's the cleanup function
    return () => {
      if (intervalref.current !== null) {
        window.clearInterval(intervalref.current);
      }
    };
  }, []);

  return (
    <nav className="flex items-center justify-between p-4 pt-8 max-w-screen-lg relative mx-auto">
    <div className="flex items-center flex-shrink-0 text-black mr-6">
      {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
      <Link href="/"><ul>
        <li><span className="font-semibold text-xl tracking-tight font-Inter">Annuai</span></li>
        <li><span className="font-light text-sm tracking-tight">{textThatChanges}</span></li>
      </ul>
      </Link>
    </div>
    <div className="block hidden">
      <button className="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-white hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div className="w-full block flex-grow flex items-center w-auto">
      <div className="text-sm flex-grow">
        {/* <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
          Work
        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
          About
        </a> */}
        {/* <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white">
          Blog
        </a> */}
      </div>
      <div>
      {/* <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4">
          Work
        </a> */}
        <Link href="/about">
        <div className="inline-block mt-4 hover:text-mainred mr-4">
          About<span className="hidden lg:inline-block">&nbsp;& Résumé</span>
        </div>
        </Link>
        <a href="https://blog.annu.me" className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-mainred mt-4">
          Blog
        </a>
      </div>
    </div>
  </nav>
  );
};

export default Header;