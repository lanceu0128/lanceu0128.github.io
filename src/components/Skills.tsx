import "../App.css";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skill from "./Skill";
import {
  faCode,
  faArrowPointer,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

function Skills() {
  return (
    <div
      id="skills"
      className="full-height d-sm-flex flex-sm-column d-md-block"
    >
      <h1 className="text-center py-5">Tech Stack</h1>

      <ul className="list-group list-group-horizontal-md mx-auto">
        <li className="list-group-item border-top-0 border-bottom-0 w-s-100 w-m-75 text-center">
          <h3>
            <FontAwesomeIcon icon={faCode} />
          </h3>
          <h3>Software Development</h3>
          <h5 className="pt-2">Languages</h5>
          <Skill backgroundColor="#ffde57" textColor="black">
            Python
          </Skill>
          <Skill backgroundColor="#00ADD8" textColor="white">
            Go
          </Skill>
          <Skill backgroundColor="#f89820" textColor="white">
            Java
          </Skill>
          <Skill backgroundColor="#F0DB4F" textColor="#323330">
            Javascript / TypeScript
          </Skill>
          <Skill backgroundColor="#A179DC" textColor="white">
            C#
          </Skill>
          <Skill backgroundColor="#659ad2" textColor="white">
            C
          </Skill>
          <Skill backgroundColor="#0f80cc" textColor="white">
            SQL
          </Skill>
          <Skill backgroundColor="#F16529" textColor="white">
            HTML + CSS
          </Skill>
          <h5 className="pt-2">Developer Tools</h5>
          <Skill backgroundColor="black" textColor="white">
            Git + GitHub
          </Skill>
          <Skill backgroundColor="#003778" textColor="#F6F7FA">
            Linux / Unix
          </Skill>
        </li>
        <li className="list-group-item border-top-0 border-bottom-0 w-s-100 w-m-75 text-center">
          <h3>
            <FontAwesomeIcon icon={faArrowPointer} />
          </h3>
          <h3>Web Development </h3>
          <h5 className="pt-2">Frontend</h5>
          <Skill backgroundColor="#61DBFB" textColor="white">
            React
          </Skill>
          <Skill backgroundColor="#563d7c" textColor="white">
            Bootstrap
          </Skill>
          <Skill backgroundColor="#0769AD" textColor="white">
            jQuery
          </Skill>
          <Skill backgroundColor="#f14e1c" textColor="white">
            Figma
          </Skill>
          <h5 className="pt-2">Backend</h5>
          <Skill backgroundColor="black" textColor="white">
            Flask
          </Skill>
        </li>
        <li className="list-group-item border-top-0 border-bottom-0 border-right-0 w-s-100 w-m-75 text-center">
          <h3>
            <FontAwesomeIcon icon={faChartLine} />
          </h3>
          <h3>Data Science</h3>
          <h5 className="pt-2">Analysis</h5>
          <Skill backgroundColor="#150458" textColor="white">
            Pandas
          </Skill>
          <Skill backgroundColor="rgb(77, 171, 207)" textColor="white">
            Numpy
          </Skill>
          <h5 className="pt-2">Visualization</h5>
          <Skill backgroundColor="#f78031" textColor="white">
            Matplotlib
          </Skill>
          <Skill backgroundColor="#119DFF" textColor="white">
            Plotly
          </Skill>
          <h5 className="pt-2">Machine Learning</h5>
          <Skill backgroundColor="#F7931E" textColor="white">
            Scikit-Learn
          </Skill>
          <Skill backgroundColor="#FFA800" textColor="white">
            Tensorflow
          </Skill>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
