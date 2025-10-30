'use client'
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const textArray = ['Industrial Designer', 'Tinkerer', 'Carpenter', 'Mechanic', 'Developer'];
  const [textThatChanges, setTextThatChanges] = useState<string>(textArray[0]);

  // keep counter in a ref so it persists between renders
  const counterRef = useRef<number>(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // start interval only once
    if (intervalRef.current == null) {
      intervalRef.current = window.setInterval(() => {
        counterRef.current = (counterRef.current + 1) % textArray.length;
        setTextThatChanges(textArray[counterRef.current]);
      }, 2000);
    }

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  return (
    <header className="w-full">
      <div className="max-w-screen-lg mx-auto px-4">
        <nav
          className="flex items-center justify-between py-4 pt-8 relative"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Brand */}
          <Link href="/" className="flex items-center flex-shrink-0 text-black mr-6">
            <div>
              <div className="font-semibold text-xl tracking-tight font-Inter">Annuai</div>
              <div className="font-light text-sm tracking-tight">{textThatChanges}</div>
            </div>
          </Link>

          {/* Mobile menu button placeholder (hidden on larger screens) */}
          <button
            className="lg:hidden flex items-center px-3 py-2 border rounded border-teal-400 hover:text-white hover:border-white"
            aria-label="Open menu"
            type="button"
          >
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          {/* Nav links */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/about" className="inline-block mt-0 hover:text-mainred">
              About<span className="hidden lg:inline">&nbsp;&amp;&nbsp;Résumé</span>
            </Link>
            <a
              href="https://blog.annu.me"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-mainred"
            >
              Blog
            </a>
          </div>

          {/* For small screens, right-aligned links below the nav (if you want them visible) */}
          <div className="lg:hidden flex items-center space-x-4">
            <Link href="/about" className="inline-block mt-0 hover:text-mainred text-sm">
              About
            </Link>
            <a
              href="https://blog.annu.me"
              className="inline-block text-sm px-3 py-1 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-mainred"
            >
              Blog
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
