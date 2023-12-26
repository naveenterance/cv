import React, { useState, useEffect } from "react";
const Contact = () => {
  const handleDownload = () => {
    // Replace 'your-pdf-file.pdf' with the actual file name
    const pdfUrl = "./Naveen_Resume.pdf";

    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = "downloaded-file.pdf"; // Specify the desired download file name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div class="p-6  bg-gray-100  sm:rounded-lg mt-12 lg:w-3/4  mx-auto animate__animated lg:animate__fadeInRight  animate__fadeInUp">
      <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight animate__animated lg:animate__fadeInLeft">
        Get in touch
      </h1>

      <div class="flex items-center mt-8 w-full text-gray-600 hover:underline hover:decoration-red-300 hover:decoration-2">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          class="w-8 h-8 text-gray-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <div class="ml-4 text-md tracking-wide font-semibold w-40">
          Kerala,India
        </div>
      </div>

      <div class="flex items-center mt-4 text-gray-600 hover:underline hover:decoration-red-300 hover:decoration-2">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          class="w-8 h-8 text-gray-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <a href="tel:+9633293051">
          <div class="ml-4 text-md tracking-wide font-semibold w-40">
            9633293051
          </div>
        </a>
      </div>

      <div class="flex items-center mt-2 text-gray-600 hover:underline hover:decoration-red-300 hover:decoration-2">
        <img
          width="36"
          height="36"
          src="https://img.icons8.com/fluency/48/mail.png"
          alt="mail"
        />
        <a href="mailto:naveenterance@gmail.com" target="_blank">
          <div class="ml-4 text-md tracking-wide font-semibold w-40">
            naveenterance@gmail.com
          </div>
        </a>
      </div>
      <div class="flex items-center mt-4 text-gray-600  hover:underline hover:decoration-red-300 hover:decoration-2">
        <img src="./github.gif" className="w-8 h-8" />
        <a href="https://github.com/naveenterance" target="_blank">
          <div class="ml-2  lg:text-lg text-xs tracking-wide font-semibold w-40 ">
            https://github.com/naveenterance
          </div>
        </a>
      </div>
      <div class="flex items-center mt-4 text-gray-600  hover:underline hover:decoration-red-300 hover:decoration-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="36"
          height="36"
          viewBox="0 0 48 48"
        >
          <path
            fill="#0288D1"
            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
          ></path>
          <path
            fill="#FFF"
            d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
          ></path>
        </svg>
        <div class="ml-1  lg:text-sm text-xs tracking-wide font-semibold w-40 ">
          <a
            href="https://www.linkedin.com/in/naveen-terance-a0732a14b/ "
            target="_blank"
          >
            https://www.linkedin.com/in/naveen-terance-a0732a14b/
          </a>
        </div>
      </div>
      <div class="flex items-center mt-4 text-gray-600  hover:underline hover:decoration-red-300 hover:decoration-2">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/office/40/open-resume.png"
          alt="open-resume"
        />
        <div
          class="ml-1  lg:text-sm text-xs tracking-wide font-semibold w-40 "
          onClick={handleDownload}
        >
          Download Resume
        </div>
      </div>
    </div>
  );
};

export default Contact;
