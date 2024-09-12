import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black ">
      <h1 className='font-["Neue_Montreal"] text-[4.2vw] leading-[4.1vw] tracking-tight'>
        Ochi is a strategic partner for fast-gro­wing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full flex pt-10 border-t-[1px] mt-10 border-[#a1b562]  ">
        <div className='w-1/2 font-["Neue_Montreal"] '>
          <h1 className="text-[4.1vw]">Our approach :</h1>
          <button className="uppercase flex gap-10 items-center px-10 py-6 mt-5 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full "></div>
          </button>
        </div>

        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]"></div>
      </div>
    </div>
  );
}

export default About;
