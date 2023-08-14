import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="px-3 navbar navbar-expand-lg fixed-top">
      <a className="navbar-brand font-weight-bold" href="/"></a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleCollapse}
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        className={`collapse navbar-collapse${
          isCollapsed ? "" : " show"
        } justify-content-end`}
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a
              className="nav-link"
              href="#big-hero"
              data-to-scrollspy-id="big-hero"
            >
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              href="#skills"
              data-to-scrollspy-id="skills"
            >
              Skills
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              href="#projects"
              data-to-scrollspy-id="projects"
            >
              Projects
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              href="#experience"
              data-to-scrollspy-id="experience"
            >
              Experience
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/lanceu/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              href="https://www.github.com/lanceu0128/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              href="mailto: lanceu0128@gmail.com"
              target="_blank"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
