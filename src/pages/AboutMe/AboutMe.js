import React from "react";
import "./AboutMe.css";
import { useState, useEffect, useRef } from "react";

const AboutMe = () => {
  const completionWord = '프론트엔드 개발자 최진실입니다.';
  const [blogTitle, setBlogTitle] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(100);
          setBlogTitle(completionWord);
          clearInterval(typingInterval);
        }

        return result;
      });
    }, 150);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <div className="aboutme">
      <div className='box'>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>

        
        <span className="title">&lt;AboutMe /&gt;</span>

        <h1 className="main-title">{blogTitle}<span className="blink">|</span></h1>

        <div className="container">
          <div className="item">Name : 최진실</div>
          <div className="item">Birth : 2000.10.10</div>
          <div className="item">Edu : 세종대학교 데이터사이언스학과</div>
          <div className="item">Email : chl378900@naver.com</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

