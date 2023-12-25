import React, { useState, useEffect } from "react";
const Home = () => {
  return (
    <>
      {" "}
      <div className="w-1/2  h-full  lg:mx-96 ml-8 mt-24  mb-12 flex">
        <div className="flex-col">
          {" "}
          <p className="xl:text-4xl text-4xl italic  break-normal text-gray-500 animate__animated animate__fadeInLeft mr-4">
            HI, <br></br>I am Naveen,<br></br> A React Dev
          </p>
          <img
            src="https://ssr-contributions-svg.vercel.app/_/naveenterance?chart=3dbar&format=svg"
            className="w-56  animate__animated animate__fadeInLeft"
          />
        </div>
        <div className="flex-col  animate__animated animate__fadeInRight ml-4">
          <div class="absolute inset-0 mt-16 border-4 border-solid border-transparent  border-l-red-300  border-r-green-300 rotate rounded-full h-2"></div>
          <div class="absolute inset-2 mt-16 border-4 border-solid border-transparent  border-l-red-300  border-r-green-300 rotate2 rounded-full h-2"></div>

          <svg
            className="  "
            id="visual"
            viewBox="0 0 900 1500"
            width="150"
            height="300"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <g transform="translate(472.37929681463885 327.8027641307589)">
              <path
                className="animate__animated animate__infinite	infinite animate__rubberBand animate__slow"
                id="part1"
                d="M106.6 -137.5C145.5 -94.4 189.5 -67.8 194.2 -35.1C198.9 -2.4 164.4 36.3 138.1 77.8C111.8 119.2 93.7 163.4 61.7 179.3C29.8 195.1 -16.1 182.6 -68.2 170.8C-120.4 159.1 -178.8 148 -210.7 112.2C-242.6 76.5 -247.8 15.9 -226.8 -29C-205.8 -73.9 -158.5 -103.2 -116.3 -145.8C-74.1 -188.4 -37.1 -244.2 -1.6 -242.3C33.9 -240.3 67.7 -180.7 106.6 -137.5"
                fill="#FF0066"
              ></path>

              <path
                className="animate__animated animate__infinite	infinite animate__rubberBand "
                d="M112.4 -185.7C148 -152 180.9 -124.8 186.8 -91.3C192.7 -57.9 171.6 -18.1 166.7 24.8C161.8 67.7 173.1 113.7 161.8 157C150.5 200.2 116.5 240.7 73.7 255C31 269.3 -20.6 257.5 -62.2 234.7C-103.8 212 -135.4 178.4 -160.5 142.8C-185.6 107.2 -204.1 69.6 -207.4 31.3C-210.6 -7 -198.6 -46.1 -175 -72.5C-151.4 -98.8 -116.2 -112.5 -85.1 -148.3C-54.1 -184.1 -27 -242.1 5.7 -250.9C38.4 -259.7 76.8 -219.5 112.4 -185.7"
                fill="#FF0066"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="relative  mx-auto hover:bg-gray-100 lg:w-1/4 p-2 rounded-full animate__animated animate__fadeInUp">
        <div className="flex  justify-center items-center">
          <p className="text-4xl italic font-bold opacity-35 ">Use Up/down</p>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/dusk/64/arrow-keys.png"
            alt="arrow-keys"
            className="ml-8"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
