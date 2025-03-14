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
  const [prevSection, setPrevSection] = useState(0);
  const [delayedActiveIndex, setDelayedActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const menuItems = ["Home", "About", "Portfolio", "Program", "Contacts"];

  const scrollToSection = (index) => {
    setPrevSection(currentSection);
    setCurrentSection(index);
    // Задержка для анимации ухода текущего блока
    setTimeout(() => {
      setDelayedActiveIndex(index);
    }, 500); // Время должно совпадать с длительностью transition в CSS
  };

  const getSectionClass = (index) => {
    const isDelayedActive = index === delayedActiveIndex;
    const isPrevActive = index === prevSection;
    const isScrollingDown = currentSection > prevSection;

    // Базовый класс видимости
    let baseClass = `section-wrapper-true`;

    if (isPrevActive && !isDelayedActive) {
      // Предыдущий активный блок уходит
      return `${baseClass} ${
        isScrollingDown ? "exit-to-top" : "exit-to-bottom"
      }`;
    }

    // Неактивные блоки
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
