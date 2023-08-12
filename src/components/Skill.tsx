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
  };

  return (
    <div>
      <p className="d-inline-block px-3 py-1 rounded-pill" style={skillStyle}>
        {props.children}
      </p>
    </div>
  );
}

export default Skill;
