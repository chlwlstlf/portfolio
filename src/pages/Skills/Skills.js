import React from "react";
import "./Skills.css";
import { useState, useEffect, useRef } from "react";
import SkillList from './SkillList/SkillList';

const Skills = () => {
  const [skills, setSkills] = useState([
    { id: 1, lang: 'C', rate : '90%' },
    { id: 2, lang: 'python', rate : '80%' },
    { id: 3, lang: 'R', rate : '60%' },
    { id: 4, lang: 'html', rate : '90%' },
    { id: 5, lang: 'css', rate : '80%' },
    { id: 6, lang: 'javascript', rate : '70%' },
    { id: 7, lang: 'React', rate : '80%' },
  ]);

  return (
    <div className="skills">
      <span className="title2">&lt;Skills /&gt;</span>
      <div>배운 순서대로</div>
      {skills && 
        <div className='skillList'>
          {skills.map(skill => (
              <SkillList skill={skill} key={skill.id} />
          ))}
        </div>
      }
    </div>
  );
};

export default Skills;

