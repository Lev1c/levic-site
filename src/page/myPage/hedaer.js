import { useContext } from "react";
import { ThemeContext } from "../myPage/index";

import { Sun, Moon } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="header">
      <div className="container header-block">
        <div className="header-main-block">
          <h2>Lev1c</h2>
        </div>
        <div className="hedaer-setting-block">
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
