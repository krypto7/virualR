import React from "react";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";

function HeroSection() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          tools for Developers.
        </span>
      </h1>
      <p className="mt-4 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corporis
        omnis repellendus deserunt alias ipsa consectetur id maxime nobis. Quos
        quis voluptatem aut cumque iure?
      </p>
      <div className="flex justify-center my-10">
        <a
          href=""
          className="bg-gradient-to-r from-orange-500 to-red-800 py-2 px-4 mx-3 rounded-md "
        >
          Start for Free
        </a>
        <a href="" className="border py-2 px-4 mx-3 rounded-md ">
          Documentation
        </a>
      </div>
      <div className="flex justify-center mt-10">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-500 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-500 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default HeroSection;
