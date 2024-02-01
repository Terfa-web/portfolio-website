import React from "react";
import "./skills.css";

const frontendSkills = [
  { title: "Javascript", percentage: "90%" },
  { title: "Typescript", percentage: "90%" },
  { title: "React.js", percentage: "85%" },
  { title: "Redux", percentage: "90%" },
  { title: "Next.js", percentage: "90%" },
  { title: "Bootstrap", percentage: "80%" },
  { title: "Css", percentage: "90%" },
  { title: "Html", percentage: "90%" },
];
const backendSkills = [
  { title: "mySql", percentage: "70%" },
  { title: "mongoDB", percentage: "50%" },
];

const Skills = () => {
  return (
    <div className="skills__wrapper d-flex justify-content-between">
      <div className="frontend__skill w-50">
        {frontendSkills.map((skill, index) => (
          <SkillItem
            title={skill.title}
            percentage={skill.percentage}
            key={index}
          />
        ))}
      </div>

      <div className="backend__skill">
        {backendSkills.map((skill, index) => (
          <SkillItem
            key={index}
            title={skill.title}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </div>
  );
};

const SkillItem = ({ title, percentage }) => {
  return (
    <div className="skill__data mb-3">
      <div className="skill__title d-flex align-items-center justify-content-between gap-5">
        <h6>{title}</h6>
        <span>{percentage}</span>
      </div>

      <div className="skill__bar">
        <span
          className="skill__bar-percentage"
          style={{ width: `${percentage}` }}
        ></span>
      </div>
    </div>
  );
};

export default Skills;
