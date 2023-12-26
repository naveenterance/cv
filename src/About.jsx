import React, { useState, useEffect } from "react";

const About = () => {
  return (
    <>
      <div class="flex flex-col items-center mx-auto mt-12  rounded-lg lg:w-1/2 shadow md:flex-row  hover:bg-gray-100 animate__animated lg:animate__fadeInLeft animate__fadeInDown">
        <img
          class="object-cover lg:w-1/2 rounded-lg h-48   m-1"
          src="./frontend.jpg"
          alt=""
        />

        <div class="flex flex-col justify-between p-4 leading-normal ">
          <h5 class="mb-8 mx-auto text-2xl font-bold tracking-tight text-gray-900">
            Frontend
          </h5>
          <div class="mb-3 font-normal flex">
            <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-blue-400">
              React
            </span>
            <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-indigo-400">
              Formik
            </span>
            <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-red-400">
              Router
            </span>
            <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-yellow-300">
              Query
            </span>
          </div>
        </div>
      </div>

      <div class="flex flex-col  items-center mx-auto mt-12  rounded-lg lg:w-1/2 shadow md:flex-row hover:bg-gray-100 animate__animated lg:animate__fadeInRight animate__fadeInUp">
        <div class=" flex-col justify-between p-8 leading-normal">
          <h5 class="mb-8 mx-auto text-2xl font-bold tracking-tight text-gray-900">
            Backend
          </h5>
          <div class="mb-3 font-normal flex">
            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400">
              Node js
            </span>
            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-green-400">
              MongoDB
            </span>
            <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-yellow-400">
              Express
            </span>
          </div>
        </div>

        <img
          class="object-cover lg:w-1/2 rounded-lg h-48  m-1 "
          src="./backend.jpg"
          alt="Frontend Preview"
        />
      </div>
    </>
  );
};

export default About;
