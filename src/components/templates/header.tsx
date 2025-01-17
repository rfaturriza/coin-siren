"use client";
import Link from "next/link";
import { HyperHireLogo } from "../atoms/hyperhire_logo";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container mx-auto py-4">
      <nav className="relative flex justify-between items-center">
        <div>
          <a href="/">
            <HyperHireLogo />
          </a>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-full right-0 left-0 bg-white shadow-lg p-4 ml-28 mt-2 z-10 rounded-lg`}
        >
          <ul className="flex flex-col space-y-4">
            <Link href="/about" className="block text-gray-800">
              채용
            </Link>
            <Link href="/contact" className="block text-gray-800">
              해외 개발자 활용 서비스
            </Link>
            <button className="bg-gray-100 hover:bg-grey-700 text-[#4A77FF] font-bold py-2 px-4 rounded w-fit text-left">
              문의하기
            </button>
          </ul>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-4">
            <Link href="/about">채용</Link>
            <Link href="/contact">해외 개발자 활용 서비스</Link>
          </ul>
          <button className="bg-white hover:bg-grey-700 text-[#4A77FF] font-bold py-2 px-4 rounded">
            문의하기
          </button>
        </div>
      </nav>
    </header>
  );
};
