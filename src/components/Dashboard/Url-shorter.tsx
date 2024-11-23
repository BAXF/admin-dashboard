"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
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
  const { data: session, status } = useSession();
  const [value, setValue] = useState("");
  const [shortenLink, setShortenLink] = useState("");

  if (status === "unauthenticated") {
    return redirect("/auth/signin");
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(`http://5.161.100.20:8080/shorten`, {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify({
          Original: "google.com",
          userEmail: session?.user?.email,
        }),
      });
      const data = await res.json();
      setShortenLink(data);
      console.log(data);
    } catch (err) {
      console.log("inja")
      console.log(err);
    }
  };

  return (
    <div className="flex min-h-[48rem] ">
      <div className="hidden sm:block ">
        <form className=" w-230 min-w-80 max-w-180 " onSubmit={handleSubmit}>
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="text-gray-700 mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight focus:outline-none"
              type="text"
              value={value}
              onChange={handleChange}
              placeholder="Enter your Url here ..."
              aria-label="Full url"
            />
            <button onClick={(e)=>handleSubmit(e)}> Make it shorter!!!</button>
          </div>
        </form>
        <div className="mt-5 h-4 p-3">
          <h1>
            {shortenLink ? shortenLink : "Result will displayed here ..."}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UrlShortner;
