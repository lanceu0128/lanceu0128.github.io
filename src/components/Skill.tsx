import { ReactNode } from "react";

interface SkillProps {
  children: ReactNode;
  backgroundColor: string;
  textColor: string;
}

function Skill(props: SkillProps) {
  const skillStyle = {
    backgroundColor: props.backgroundColor,
    color: props.textColor,
    display: "block !important",
  };

  return (
    <p
      className="d-inline-block px-3 mx-1 py-1 rounded-pill"
      style={skillStyle}
    >
      {props.children}
    </p>
  );
}

export default Skill;
