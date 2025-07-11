import { Link, Route, Routes } from "react-router-dom";
import { News } from "./news/news";
import { useState } from "react";
import {
  AlignHorizontalSpaceAround,
  Banknote,
  BriefcaseBusiness,
  Calendar,
  CircleHelp,
  House,
  LogOut,
  Moon,
  NotebookPen,
  ScrollText,
  Sun,
} from "lucide-react";
import { Home } from "./home/home";

export const Board = () => {
  const { theme, setTheme } = useState();
  return (
    <div className="board">
      <div className="board-menu">
        <h2>Lev1c</h2>
        <ul className="board-menu-list">
          <Link to={"/board/home"} className="board-list-li">
            <House />
            Главная
          </Link>
          <Link to={"/board/news"} className="board-list-li">
            <ScrollText />
            TG Канал
          </Link>
          <Link className="board-list-li">
            <NotebookPen />
            Заметки
          </Link>
          <Link className="board-list-li">
            <Calendar /> Календарь
          </Link>
          <Link className="board-list-li">
            <Banknote />
            Финансы
          </Link>
          <Link className="board-list-li">
            <BriefcaseBusiness />
            Портфолио
          </Link>
          <Link className="board-list-li">
            <CircleHelp />
            Тренировка
          </Link>
        </ul>
      </div>
      <div className="board-block">
        <div className="board-header">
          <div>
            <button className="header-setting__icon">
              <AlignHorizontalSpaceAround />
            </button>
          </div>
          <div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="header-setting__icon"
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
            <button className="header-setting__icon">
              <LogOut />
            </button>
          </div>
        </div>
        <div className="container main-board">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
