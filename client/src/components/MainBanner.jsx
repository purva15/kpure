import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="h-[580px] flex flex-col items-center justify-center px-4 text-center bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dull)] to-[var(--color-accent-dark)] text-white rounded-b-3xl shadow-md">
      
      {/* Subtle Launch Banner */}
      <div className="flex flex-nowrap items-center justify-center gap-2.5 mb-6 border border-white/30 rounded-full bg-white/10 pl-4 p-1 text-sm text-white/90 max-w-full backdrop-blur-md">
        <p>Introducing our signature home fragrance</p>
        <div className="flex items-center cursor-pointer gap-2 bg-white text-[var(--color-primary)] border border-white/30 rounded-2xl px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm whitespace-nowrap hover:bg-[var(--color-accent)] transition">
          
          <p>Explore Now</p>
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5"
              stroke="#4A5568"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Hero Headline */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl leading-tight text-white">
        Transform Your Space with Nature’s Essence
      </h1>

      {/* Subheadline */}
      <p className="max-w-xl text-center mt-6 px-4 text-white/80">
        Discover KPure's botanical room fragrances—designed to elevate your mood, calm your senses, and breathe serenity into every corner of your home.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
        <Link
          to="/products"
          className="px-7 py-3 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-accent-dark)] transition"
        >
          Shop Fragrance
        </Link>
        <Link
          to="/about"
          className="group px-7 py-2.5 flex items-center gap-2 font-medium text-white hover:text-[var(--color-accent)] transition"
        >
          Learn more
          <svg
            className="group-hover:translate-x-1 transition pt-0.5"
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
