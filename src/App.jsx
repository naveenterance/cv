import { useState, useEffect } from "react";

import "./App.css";
import "animate.css";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About";

function App() {
  const [view, setView] = useState("Home");
  const handleclick = (data) => {
    setView(data);
  };

  const [page, setPage] = useState();

  const handlePageChange = (value) => {
    setPage(value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 40) {
      setView((prevView) => {
        if (prevView === "Home") {
          return "Portfolio";
        } else if (prevView === "Portfolio") {
          return "About";
        } else if (prevView === "About") {
          return "Contact";
        } else if (prevView === "Contact") {
          return "Home";
        }
        return prevView;
      });
    } else if (event.keyCode === 38) {
      setView((prevView) => {
        if (prevView === "Home") {
          return "Contact";
        } else if (prevView === "Portfolio") {
          return "Home";
        } else if (prevView === "About") {
          return "Portfolio";
        } else if (prevView === "Contact") {
          return "About";
        }
        return prevView;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className=" fixed top-8 h-8 lg:w-3/4 w-72   z-50">
        <div className="flex  items-center ">
          <p
            className={`w-24 h-1 mr-1 text-slate-700 font-extrabold  ${
              view !== "Home" && "text-opacity-25"
            }`}
            onClick={() => handleclick("Home")}
          >
            Home
          </p>
          <p
            className={`w-24 h-1 mr-1 text-slate-700 font-extrabold  ${
              view !== "Portfolio" && "text-opacity-25"
            }`}
            onClick={() => handleclick("Portfolio")}
          >
            Portfolio
          </p>

          <p
            className={`w-24 h-1 mr-1 text-slate-700 font-extrabold  ${
              view !== "About" && "text-opacity-25"
            }`}
            onClick={() => handleclick("About")}
          >
            Skills
          </p>
          <p
            className={`w-24 h-1 mr-1 text-slate-700 font-extrabold  ${
              view !== "Contact" && "text-opacity-25"
            }`}
            onClick={() => handleclick("Contact")}
          >
            Contact
          </p>
        </div>
        <div className="flex mt-4">
          <hr
            className={`w-24 h-1 mr-1 bg-green-300 border-0 rounded font-extrabold animate__animated ${
              view == "Home" ? "animate__zoomIn" : "animate__zoomOut"
            }`}
          ></hr>
          <hr
            className={`w-24 h-1 mr-1 bg-green-300 border-0 rounded font-extrabold animate__animated ${
              view == "Portfolio" ? "animate__zoomIn" : "animate__zoomOut"
            }`}
          ></hr>
          <hr
            className={`w-24 h-1 mr-1 bg-green-300 border-0 rounded font-extrabold animate__animated ${
              view == "About" ? "animate__zoomIn" : "animate__zoomOut"
            }`}
          ></hr>
          <hr
            className={`w-24 h-1 mr-1 bg-green-300 border-0 rounded font-extrabold animate__animated ${
              view == "Contact" ? "animate__zoomIn" : "animate__zoomOut"
            }`}
          ></hr>
        </div>
      </div>
      {view == "Home" && (
        <div className="flex-col pb-12">
          <Home /> <Portfolio onPageChange={handlePageChange} />
          <About /> <Contact />
        </div>
      )}
      {view == "Portfolio" && <Portfolio onPageChange={handlePageChange} />}
      {view == "Contact" && <Contact />}
      {view == "About" && <About />}
    </>
  );
}

export default App;
