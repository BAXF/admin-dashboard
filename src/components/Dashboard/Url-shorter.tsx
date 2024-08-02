"use client";
import dynamic from "next/dynamic";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";

const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});

const UrlShortner: React.FC = () => {
  return (
      <div className='flex min-h-[48rem] '>
        <div className="hidden sm:block ">
          <form className=" min-w-80 max-w-180 w-230 ">
            <div className="flex items-center border-b border-teal-500 py-2">
              <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter your Url here ..." aria-label="Full url" />
              <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                  Make it shorter!!!
              </button>
            </div>
          </form>
         <div className='h-4 p-3 mt-5'>
          <h1>Result will displayed here ...</h1>
         </div>
        </div>
      </div>
  );
};

export default UrlShortner;
