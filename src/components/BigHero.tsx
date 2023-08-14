import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function BigHero() {
  return (
    <div
      id="big-hero"
      className="px-5 text-center text-dark full-height d-flex flex-column justify-content-center align-items-center bg-light"
    >
      <h1 className="mb-3">Lance Uymatiao</h1>
      <p className="mb-3">Studying Computer Science & Philosophy @ UMD</p>
      <a id="arrow" href="#skills">
        <FontAwesomeIcon className="mt-3" icon={faChevronDown} />
      </a>
    </div>
  );
}

export default BigHero;
