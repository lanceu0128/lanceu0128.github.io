import Navbar from "./components/Navbar";
import ScrollSpy from "react-ui-scrollspy";
import BigHero from "./components/BigHero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const onUpdateCallback = (el: string) => {
    console.log("Element in view: ", el);
  };

  return (
    <>
      <Navbar />

      <ScrollSpy
        scrollThrottle={100}
        useBoxMethod={false}
        onUpdateCallback={onUpdateCallback}
      >
        <BigHero />
        <Skills />
        <Projects />
        <Experience />
      </ScrollSpy>

      <p className="text-center py-5 my-0 bg-light">
        {" "}
        Designed and developed with <FontAwesomeIcon icon={faHeart} />
      </p>
    </>
  );
}

export default App;
