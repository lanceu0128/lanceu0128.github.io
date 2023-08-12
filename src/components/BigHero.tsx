import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// landing screen
function BigHero() {
  return (
    <div
      id="big-hero"
      className="p-5 text-center text-dark full-height d-flex flex-column justify-content-center align-items-center bg-light"
    >
      <h1 className="mb-3">Lance Uymatiao</h1>
      <p className="mb-5">Studying Computer Science & Philosophy @ UMD</p>
      <FontAwesomeIcon className="mt-5" icon={faChevronDown} />
    </div>
  );
}

export default BigHero;
