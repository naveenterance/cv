import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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

  // const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = () => {
  //   const currentPosition = window.scrollY;

  //   const scrollThreshold = 50;

  //   if (currentPosition > scrollPosition + scrollThreshold) {
  //     setView((prevView) => getNextView(prevView, "down"));
  //   }

  //   if (currentPosition < scrollPosition - scrollThreshold) {
  //     setView((prevView) => getNextView(prevView, "up"));
  //   }

  //   setScrollPosition(currentPosition);
  // };

  // const getNextView = (currentView, direction) => {
  //   switch (currentView) {
  //     case "Home":
  //       return direction === "down" ? "Portfolio" : "Contact";
  //     case "Portfolio":
  //       return direction === "down" ? "About" : "Home";
  //     case "About":
  //       return direction === "down" ? "Contact" : "Portfolio";
  //     case "Contact":
  //       return direction === "down" ? "Home" : "About";
  //     default:
  //       return currentView;
  //   }
  // };
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
    // window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <div className="fixed top-8 h-8 lg:left-1/2 left-48 transform -translate-x-1/2 -translate-y-1/2  lg:bg-gray-100  z-50 px-2 pb-4  rounded-lg">
        <div className="flex  items-center">
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
        <div className="w-1 h-4 ml-24 mt-1 pl-1">
          <div className="w-3/4 bg-gray-200 rounded-full h-1 mb-4">
            <div
              className={`bg-red-300 h-1 rounded-full ${
                page === 1 && view === "Portfolio" ? "w-8" : ""
              } ${page === 2 && view === "Portfolio" ? "w-16" : ""} ${
                page === 3 && view === "Portfolio" ? "w-24" : ""
              } transition-width ease-in-out duration-300`}
            ></div>
          </div>
        </div>
      </div>
      {view == "Home" && <Home />}
      {view == "Portfolio" && <Portfolio onPageChange={handlePageChange} />}
      {view == "Contact" && <Contact />}
      {view == "About" && <About />}
    </>
  );
}

export default App;
