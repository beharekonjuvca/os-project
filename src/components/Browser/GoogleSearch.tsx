import React from "react";

export const GoogleSearch = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col justify-center items-center mb-20">
        <h1 className="text-5xl font-bold mb-8">Google</h1>
        <input
          className="w-[500px] h-10 mb-6 p-3 rounded-lg bg-[#E7e7e7] border-2 border-solid border-[#78B856] focus:outline-none"
          type="text"
          placeholder="search"
        />
        <button className="bg-[#d0edf6] w-[130px] h-8 rounded-md font-medium">
          Search
        </button>
      </div>
    </div>
  );
};
