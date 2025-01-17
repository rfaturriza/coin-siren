"use client";
import React, { useState } from "react";

const CardCarousel = ({ cards }: { cards: React.ReactNode[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        aria-label="Previous card"
        className="absolute left-2 p-4 rounded-full z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* Cards */}
      <div className="flex items-center justify-center relative w-full h-64">
        {cards.map((card, index) => {
          const isActive = index === currentIndex;
          const isLeft =
            index === (currentIndex - 1 + cards.length) % cards.length;
          const isRight = index === (currentIndex + 1) % cards.length;

          const translateX = isActive
            ? "translate-x-0"
            : isLeft
            ? "md:-translate-x-36 -translate-x-10"
            : isRight
            ? "md:translate-x-36 translate-x-10"
            : "translate-x-0";

          return isActive || isLeft || isRight ? (
            <div
              key={index}
              className={`absolute transition-all duration-500 ${translateX} ${
                isActive
                  ? "z-20 scale-75 md:scale-100 opacity-100"
                  : "z-10 scale-50 md:scale-90 opacity-80"
              }`}
            >
              {card}
            </div>
          ) : null;
        })}
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        aria-label="Next card"
        className="absolute right-2 p-4 rounded-full z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default CardCarousel;
