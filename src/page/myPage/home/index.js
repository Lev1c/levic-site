import { useEffect, useRef, useState } from "react";
import { About } from "../about";
import { Contact } from "../contac";
import Header from "../hedaer";
import Menu from "../menu";
import Hello from "../pageSection";
import { Portfolio } from "../portfoli";
import { Program } from "../program";

const Home = () => {
  const sections = [
    <Hello />,
    <About />,
    <Portfolio />,
    <Program />,
    <Contact />,
  ];

  const [currentSection, setCurrentSection] = useState(0);

  const containerRef = useRef(null);

  const menuItems = ["Home", "About", "Portfolio", "Program", "Contacts"];

  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", preventScroll, { passive: false });
      container.addEventListener("touchmove", preventScroll, {
        passive: false,
      });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", preventScroll);
        container.removeEventListener("touchmove", preventScroll);
      }
    };
  }, []);

  const scrollToSection = (index) => {
    setCurrentSection(index);
  };
  return (
    <div className="">
      <Header />
      <div className="home">
        {sections.map((SectionComponent, index) => (
          <div
            key={index}
            className={`section-wrapper section-wrapper-${
              currentSection === index
            }`}
          >
            {SectionComponent}
          </div>
        ))}
      </div>
      <div className="menu">
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-list_link">
              <button
                className={`menu-list_link_button ${
                  currentSection === index ? "active" : ""
                }`}
                onClick={() => scrollToSection(index)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
