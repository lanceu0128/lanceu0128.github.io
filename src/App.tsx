import Navbar from "./components/Navbar";
import BigHero from "./components/BigHero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ScrollSpy from "react-ui-scrollspy";
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
      </ScrollSpy>
    </>
  );
}

export default App;
