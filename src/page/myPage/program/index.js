import face from "../../../img/face.png";
import { Button } from "../../../components/button";

export const Program = () => {
  return (
    <div className="container home-block">
      <div className="home-block-about">
        <img src={face} alt="" className="home-block-about__img" />
        <div className="home-block-about-block">
          <div className="home-block-about-text">
            <h2>Program</h2>
            <p>
              Lorem Ipsum is fish text often used in print and web design. Lorem
              Ipsum has been the standard "fish" for Latin texts since the early
              16th century. At that time, a certain unnamed printer created a
              large collection of font sizes and shapes.
            </p>
          </div>
          <Button layout={"Next"} className={"button-default-about"} />
        </div>
      </div>
    </div>
  );
};
