import image from "../../../img/image 9.png";
import { Button } from "../../../components/button";

export const Portfolio = () => {
  return (
    <div className="container home-block">
      <div className="home-block-port">
        <div className="home-block-port-card">
          <img src={image} alt="" className="block-port-card__img" />
          <div className="block-port-card-setting">
            <h3>Eclant</h3>
            <div className="block-port-card-setting-dop">
              <p>Landing-page</p>
              <p>
                срок реализации: <span>10 дней</span>
              </p>
            </div>
          </div>
        </div>
        <div className="home-block-port-card">
          <img src={image} alt="" className="block-port-card__img" />
          <div className="block-port-card-setting">
            <h3>Eclant</h3>
            <div className="block-port-card-setting-dop">
              <p>Landing-page</p>
              <p>
                срок реализации: <span>10 дней</span>
              </p>
            </div>
          </div>
        </div>
        <div className="home-block-port-card">
          <img src={image} alt="" className="block-port-card__img" />
          <div className="block-port-card-setting">
            <h3>Eclant</h3>
            <div className="block-port-card-setting-dop">
              <p>Landing-page</p>
              <p>
                срок реализации: <span>10 дней</span>
              </p>
            </div>
          </div>
        </div>
        <div className="home-block-port-card">
          <img src={image} alt="" className="block-port-card__img" />
          <div className="block-port-card-setting">
            <h3>Eclant</h3>
            <div className="block-port-card-setting-dop">
              <p>Landing-page</p>
              <p>
                срок реализации: <span>10 дней</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
