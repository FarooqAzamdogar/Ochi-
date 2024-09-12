import React from "react";

function Lards() {
  return (
    <div className="w-full h-screen flex gap-5 items-center px-32 bg-zinc-900">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative w-full rounded-xl h-full bg-[#004D43]">
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;2024
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
        <div className="card w-full relative rounded-xl  h-full bg-[#192826]">
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;2024
          </button>
        </div>
        <div className="card w-full relative rounded-xl  h-full bg-[#192826]">
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;2024
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lards;
