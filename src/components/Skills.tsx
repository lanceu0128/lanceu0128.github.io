import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skill from "./Skill";
import {
  faCode,
  faArrowPointer,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

function Skills() {
  return (
    <div id="skills" className="full-height">
      <h1 className="text-center py-5">Tech Stack</h1>

      <ul className="list-group list-group-horizontal mx-auto">
        <li className="list-group-item border-top-0 border-bottom-0 w-50 text-center">
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
          <p>C#</p>
          <p>C</p>
          <p>SQL</p>
          <p>HTML + CSS</p>
          <h5 className="pt-2">Developer Tools</h5>
          <p>Git + GitHub</p>
          <p>Linux / Unix</p>
        </li>
        <li className="list-group-item border-top-0 border-bottom-0 w-50 text-center">
          <h3>
            <FontAwesomeIcon icon={faArrowPointer} />
          </h3>
          <h3>Web Development </h3>
          <h5 className="pt-2">Frontend</h5>
          <p>React</p>
          <p>Bootstrap</p>
          <p>jQuery </p>
          <p>Figma</p>
          <h5 className="pt-2">Backend</h5>
          <p>Flask</p>
        </li>
        <li className="list-group-item border-top-0 border-bottom-0 border-right-0 w-50 text-center">
          <h3>
            <FontAwesomeIcon icon={faChartLine} />
          </h3>
          <h3>Data Science</h3>
          <h5 className="pt-2">Analysis</h5>
          <p>Pandas</p>
          <p>Numpy</p>
          <h5 className="pt-2">Visualization</h5>
          <p>Matplotlib</p>
          <p>Plotly</p>
          <h5 className="pt-2">Machine Learning</h5>
          <p>Scikit-Learn</p>
          <p>TensorFlow</p>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
