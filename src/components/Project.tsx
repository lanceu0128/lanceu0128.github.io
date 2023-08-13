import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ProjectProps {
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  link: string;
  children: ReactNode;
}

function Project(props: ProjectProps) {
  return (
    <div className="card w-sm-75 w-md-25 my-5">
      <img
        className="card-img-top w-100"
        src={props.image}
        alt={props.title}
        style={{ backgroundColor: "black" }}
      ></img>
      <div className="card-body">
        <a
          href={props.link}
          target="_blank"
          className="d-flex justify-content-between align-items-center"
        >
          <h3 className="card-title mb-0">{props.title}</h3>
          <h3>
            <FontAwesomeIcon icon={faGithub} />
          </h3>
        </a>
        <h6>{props.subtitle}</h6>
        <p className="card-text">{props.desc}</p>
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default Project;
