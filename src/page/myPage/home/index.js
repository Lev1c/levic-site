import { useRef, useState } from "react";

import { About } from "../about";
import { Contact } from "../contac";
import Header from "../hedaer";
import Hello from "../pageSection";
import { Portfolio } from "../portfoli";
import { Program } from "../program";

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [prevSection, setPrevSection] = useState(0);
  const [delayedActiveIndex, setDelayedActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const scrollToSection = (index) => {
    setPrevSection(currentSection);
    setCurrentSection(index);
    setTimeout(() => {
      setDelayedActiveIndex(index);
    }, 500);
  };

  const sections = [
    <Hello scrollToSection={scrollToSection} />,
    <About scrollToSection={scrollToSection} />,
    <Portfolio />,
    <Program />,
    <Contact />,
  ];

  const menuItems = ["Home", "About", "Portfolio", "Program", "Contacts"];

  const getSectionClass = (index) => {
    const isDelayedActive = index === delayedActiveIndex;
    const isPrevActive = index === prevSection;
    const isScrollingDown = currentSection > prevSection;

    let baseClass = `section-wrapper-true`;

    if (isPrevActive && !isDelayedActive) {
      return `${baseClass} ${
        isScrollingDown ? "exit-to-top" : "exit-to-bottom"
      }`;
    }

    if (index < currentSection) {
      return `${baseClass} scroll-up`;
    } else if (index > currentSection) {
      return `${baseClass} scroll-down`;
    }

    return baseClass;
  };

  return (
    <div className="home-container" ref={containerRef}>
      <Header />
      <div className="sections-container">
        {sections.map((SectionComponent, index) => (
          <div key={index} className={getSectionClass(index)}>
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
                  currentSection === index ? "menu-list_link_button-active" : ""
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
