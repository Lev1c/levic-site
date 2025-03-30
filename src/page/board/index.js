import { Route, Routes } from "react-router-dom";
import { News } from "./news/news";

export const Board = () => {
  return (
    <div className="board">
      <div className="board-menu">
        <h2>Admin</h2>
        <ul className="board-menu-list">
          <li>News</li>
          <li>News</li>
          <li>News</li>
          <li>News</li>
        </ul>
      </div>
      <div style={{ width: "100%" }}>
        <div className="board-header">
          <div>
            <h4>Setting</h4>
          </div>
          <div>
            <h2>Exit</h2>
          </div>
        </div>
        <div className="main-board">
          <Routes>
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
