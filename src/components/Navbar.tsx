import { useState } from "react";

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
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse${
          isCollapsed ? "" : " show"
        } justify-content-end`}
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#big-hero">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Projects
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Experience
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Resume
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
