import Project from "./Project";
import Skill from "./Skill";

function Projects() {
  return (
    <div id="projects" className="full-height">
      <h1 className="text-center py-4">Projects</h1>

      <div className="d-flex flex-column flex-md-row justify-content-around align-items-md-start align-items-center ">
        <Project
          image={"./3dvissys.png"}
          title="3D-VisSys"
          subtitle="CISESS Summer Internship"
          desc="An open-source web application that creates interactive 3D rainstorm visualizations in near-real-time"
          link="https://github.com/lanceu0128/3DVisSys"
        >
          <Skill backgroundColor="#ffde57" textColor="black">
            Python
          </Skill>
          <Skill backgroundColor="black" textColor="white">
            Flask
          </Skill>
          <Skill backgroundColor="#F0DB4F" textColor="black">
            Javascript
          </Skill>
          <Skill backgroundColor="#61DBFB" textColor="black">
            React
          </Skill>
          <Skill backgroundColor="#563d7c" textColor="white">
            Bootstrap
          </Skill>
          <Skill backgroundColor="#150458" textColor="white">
            Pandas
          </Skill>
          <Skill backgroundColor="rgb(77, 171, 207)" textColor="white">
            Numpy
          </Skill>
          <Skill backgroundColor="#119DFF" textColor="white">
            Plotly
          </Skill>
        </Project>
        <Project
          image={"./goray.png"}
          title="GoRay"
          subtitle="Personal Project"
          desc="A 3D raytracer capable of rendering lighting, reflections, shadows, and cel-shading built in Golang"
          link="https://github.com/lanceu0128/goray"
        >
          <Skill backgroundColor="#00ADD8" textColor="white">
            Go
          </Skill>
        </Project>
        <Project
          image={"./randomforest.png"}
          title="Stroke Classifier"
          subtitle="Personal Project"
          desc="A Random Forest Classifier model trained and tuned to identify patients who will have a stroke"
          link="https://github.com/lanceu0128/stroke_prediction"
        >
          <Skill backgroundColor="#ffde57" textColor="black">
            Python
          </Skill>
          <Skill backgroundColor="#150458" textColor="white">
            Pandas
          </Skill>
          <Skill backgroundColor="rgb(77, 171, 207)" textColor="white">
            Numpy
          </Skill>
          <Skill backgroundColor="#f78031" textColor="white">
            Matplotlib
          </Skill>
          <Skill backgroundColor="#F7931E" textColor="white">
            Scikit-Learn
          </Skill>
        </Project>
      </div>
    </div>
  );
}

export default Projects;
