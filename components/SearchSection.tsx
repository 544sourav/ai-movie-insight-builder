"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchSection() {
  const [id, setId] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const cleanedId = id.trim().toLowerCase();

    if (!/^tt\d{7,8}$/.test(cleanedId)) {
      alert("Enter valid IMDb ID (example: tt0133093)");
      return;
    }

    router.push(`/movie/${cleanedId}`);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white px-4 sm:px-6 lg:px-8">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-purple-900 via-black to-blue-900 animate-gradient bg-[length:300%_300%]" />

      {/* Floating Blur Circles */}
      <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-30 animate-blob top-10 left-10" />
      <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000 bottom-10 right-10" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          AI Movie Insight Builder
        </h1>

        <p className="text-gray-300 mb-8 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
          Enter an IMDb ID to get detailed movie insights and AI-powered
          audience sentiment analysis.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Enter IMDb ID (e.g., tt0133093)"
            value={id}
            onChange={(e) => setId(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="w-full px-4 py-3 rounded-lg bg-black/40 backdrop-blur-md border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <button
            onClick={handleSearch}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
