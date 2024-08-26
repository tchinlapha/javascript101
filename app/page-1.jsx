// 1. Create a layout Left and Right Column like a Grid
"use client";
import React from "react";

const GachaMachine = () => {

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="lg:w-2/3 xl:w-3/4 mt-4 h-screen bg-red-500">
            Content
          </div>
          {/* Right Column */}
          <div className="lg:w-1/3 xl:w-1/4 mt-4 lg:ml-4 h-screen bg-blue-500">
            Content
          </div>
        </div>
      </div>
    </div>
  );
};

export default GachaMachine;