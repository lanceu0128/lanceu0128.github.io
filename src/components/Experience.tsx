import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Skill from "./Skill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudRain,
  faHandshakeAngle,
  faDna,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

function Experience() {
  return (
    <div id="experience" className="full-height mb-0 pb-0">
      <h1 className="text-center py-4">Experience</h1>
      <VerticalTimeline lineColor="#ddd">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Summer 2023 - Fall 2023"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faCloudRain} />}
        >
          <h3 className="vertical-timeline-element-title">
            Cooperative Institute for Satellite Earth System Studies
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Summer Intern</h4>
          <Skill backgroundColor="#ffde57" textColor="black">
            Python
          </Skill>
          <Skill backgroundColor="black" textColor="white">
            Flask
          </Skill>
          <p>Developing 3D-VisSys. Rehired for Fall 2023!</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Spring 2023"
          iconStyle={{ background: "#61DBFB", color: "black" }}
          icon={<FontAwesomeIcon icon={faHandshakeAngle} />}
        >
          <h3 className="vertical-timeline-element-title">Hack4Impact-UMD</h3>
          <h4 className="vertical-timeline-element-subtitle">Engineer</h4>
          <Skill backgroundColor="#F0DB4F" textColor="black">
            Javascript
          </Skill>
          <Skill backgroundColor="#61DBFB" textColor="black">
            React
          </Skill>
          <p>
            Building software for social good. Team River Runner project team
            and Fall 2023 Recruitment
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Spring 2023"
          iconStyle={{ background: "rgb(77, 171, 207)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faDna} />}
        >
          <h3 className="vertical-timeline-element-title">
            FIRE Genome Computing Lab
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Undergraduate Researcher
          </h4>
          <Skill backgroundColor="#ffde57" textColor="black">
            Python
          </Skill>
          <Skill backgroundColor="rgb(77, 171, 207)" textColor="white">
            Numpy
          </Skill>
          <p>Visualizing and modeling DNA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Fall 2022 (to Present)"
          iconStyle={{ background: "#f89820", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Maryland
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Science - Computer Science
          </h4>
          <Skill backgroundColor="#f89820" textColor="white">
            Java
          </Skill>
          <Skill backgroundColor="#659ad2" textColor="white">
            C
          </Skill>
          <p>Go Terps!</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
