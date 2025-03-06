import { useEffect, useRef, useState } from "react";
import face from "../../../img/face.png";

export const About = () => {
  return (
    <div className="container home-block">
      <div className="home-block-about">
        <img src={face} width={500} alt="" />
        <div className="home-block-about-block">
          <div className="home-block-about-text">
            <h2>Let's meet?</h2>
            <p>
              Lorem Ipsum is fish text often used in print and web design. Lorem
              Ipsum has been the standard "fish" for Latin texts since the early
              16th century. At that time, a certain unnamed printer created a
              large collection of font sizes and shapes.
            </p>
          </div>
          <button></button>
        </div>
      </div>
    </div>
  );
};
