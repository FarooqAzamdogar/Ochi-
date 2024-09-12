import React from "react";

function Footer() {
  return (
    <div className="w-full h-screen flex gap-5 bg-zinc-900 font-['Founders_Grotesk_X-Condensed'] p-20">
      <div className="w-1/2  h-full flex flex-col justify-between font-['Founders_Grotesk_X-Condensed']">
        <div className="heading">
          <h1 className="text-[8vw] font-semibold uppercase leading-none -mb-15">
            Eye-
          </h1>
          <h1 className="text-[8vw] font-semibold uppercase leading-none -mb-15">
            Opening{" "}
          </h1>
        </div>
        <h1 className="text-[2vw] font-semibold uppercase leading-none -mb-15">
          Ochi
        </h1>
      </div>
      <div className="w-1/2">
        <h1 className="text-[6vw] font-semibold uppercase leading-none -mb-15">
          Presentations
        </h1>
        <div className="detsfont-['Neue_Montreal'] mt-10 ">
          <a className="block text-xl font-light" href="#">
            Facebook
          </a>
          <a className="block text-xl font-light" href="#">
            Instgram
          </a>
          <a className="block text-xl font-light" href="#">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
