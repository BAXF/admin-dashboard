"use client";
import dynamic from "next/dynamic";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});

const UrlShortner: React.FC = () => {
  const { status } = useSession();

  if (status === "unauthenticated") {
    return redirect("/auth/signin");
  }
  return (
    <div className="flex min-h-[48rem] ">
      <div className="hidden sm:block ">
        <form className=" w-230 min-w-80 max-w-180 ">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="text-gray-700 mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter your Url here ..."
              aria-label="Full url"
            />
            <button
              className="flex-shrink-0 rounded border-4 border-teal-500 bg-teal-500 px-2 py-1 text-sm text-white hover:border-teal-700 hover:bg-teal-700"
              type="button"
            >
              Make it shorter!!!
            </button>
          </div>
        </form>
        <div className="mt-5 h-4 p-3">
          <h1>Result will displayed here ...</h1>
        </div>
      </div>
    </div>
  );
};

export default UrlShortner;
