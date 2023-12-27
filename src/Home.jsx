import React, { useState, useEffect } from "react";
const Home = () => {
  const [contributions, setContributions] = useState(0);
  const [repositories, setRepositories] = useState(0);

  useEffect(() => {
    // Fetch contributions
    fetch("https://api.github.com/repos/naveenterance")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setContributions(data.contributions);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch repositories
    fetch("https://api.github.com/users/naveenterance/repos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setRepositories(data.length);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return (
    <>
      {" "}
      <div className="w-full h-full    mt-24  mb-12 lg:flex  ">
        <div className="lg:w-1/4 h-64  m-2 flex-col items-center justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/87982480?v=4"
            className="m-auto max-h-full max-w-full  animate__animated animate__fadeInLeft"
            alt="Your Alt Text"
          />
          <div className="flex justify-around  p-2">
            <a href="mailto:naveenterance@gmail.com" target="_blank">
              <div className="rounded-full bg-slate-100  p-2 shadow-xl flex justify-center items-center animate__animated animate__fadeInUp">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-outlined/24/gmail-new.png"
                  alt="gmail-new"
                />
              </div>
            </a>
            <a href="https://github.com/naveenterance" target="_blank">
              <div className="rounded-full bg-slate-100  p-2 shadow-xl flex justify-center items-center animate__animated animate__fadeInUp">
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-glyphs/30/github.png"
                  alt="github"
                />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/naveen-terance/ "
              target="_blank"
            >
              <div className="rounded-full bg-slate-100  p-2 shadow-xl flex justify-center items-center animate__animated animate__fadeInUp">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-outlined/24/linkedin--v1.png"
                  alt="linkedin--v1"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="flex-col ">
          {" "}
          <div className="xl:text-4xl text-4xl italic  break-normal text-gray-500 animate__animated  animate__fadeInDown lg:m-2 mx-auto rounded-3xl shadow-lg bg-slate-100 p-12">
            HI, <br></br>I am Naveen,<br></br> A React Dev
          </div>
          <div className="w-72 h-1/6 bg-slate-100 shadow-lg rounded-3xl m-4 flex p-4 animate__animated animate__fadeInUp">
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-repository-agile-flaticons-flat-flat-icons.png"
              alt="external-repository-agile-flaticons-flat-flat-icons"
            />
            <p className="font-bold">
              Repositories: {repositories == 0 ? "30" : repositories}
            </p>
          </div>
        </div>
        <div className="flex-col">
          <div className="flex ">
            <div className=" animate__animated animate__fadeInDown m-2 w-36 h-36 rounded-3xl shadow-lg  bg-slate-100  ">
              <div class="absolute inset-0 mt-16 border-4 border-solid border-transparent  border-l-red-300  border-r-green-300 rotate rounded-full h-2"></div>
              <div class="absolute inset-2 mt-16 border-4 border-solid border-transparent  border-l-red-300  border-r-green-300 rotate2 rounded-full h-2"></div>

              <svg
                className="  "
                id="visual"
                viewBox="0 0 1000 1500"
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
            <div className="xl:visible invisible animate__animated lg:animate__fadeInRight animate__tada m-2 w-24 h-36 font-bold rounded-2xl shadow-lg  bg-slate-100  p-4">
              <p className="opacity-25">use arrow keys to navigate</p>
            </div>
          </div>
          <div className="rounded-3xl shadow-lg p-2 animate__animated animate__fadeInDown bg-slate-100 m-2">
            <img
              src="https://ssr-contributions-svg.vercel.app/_/naveenterance?chart=3dbar&format=svg"
              className="w-56  "
            />
          </div>
        </div>

        <div
          className="lg:w-1/2  flex-col m-2 animate__animated animate__fadeInRight
        "
        >
          <div className="bg-slate-100 p-4 rounded-3xl mb-2 font-semibold">
            <img src="./code.png" className="w-full mx-auto mb-2" />
            Embracing simplicity and elegance.<br></br>
            Carefully chosen color palette <br></br>
            Visually pleasing & highly functional
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
