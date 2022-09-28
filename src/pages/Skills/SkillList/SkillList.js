import '../Skills.css';
// import styled, { keyframes } from 'styled-components';
// import { css, keyframes } from '@emotion/react'

export default function SkillList(props) {
  const { skill } = props;

  // const animation = keyframes `
  //   0% { width: 0 };
  //   100% { width: skill.rate };
  // `
  // const stack = css`
  //   animation: ${animation} 2s 1;
  // `


  return (
    <div className="skillList_Container">
      <div className="skill_lang">{skill.lang}</div>
      <div className="skill_Container">
        <span style={{width : skill.rate}}>{skill.rate}</span>
      </div>
    </div>
  )
}