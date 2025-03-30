import { Mail } from "lucide-react";
import { Button } from "../../../components/button";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="container home-block">
      <div className="home-block-contact">
        <div className="home-block-contact__title">
          <h2>Questions left ?</h2>
          <p>Our work will be structured as follows</p>
        </div>
        <div className="home-block-contact-link">
          <div className="home-block-contact-link-setting">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
            </svg>
            <Link to="https://t.me/L4v1c">@L4v1c</Link>
          </div>
          <div className="home-block-contact-link-setting">
            <Mail className="img-contact-link" />
            <Link to="mailto:example@gmail.com">dvauck2@gmail.com</Link>
          </div>
        </div>
        <Button layout={"Brif"} className="contact-button" />
      </div>
    </div>
  );
};
