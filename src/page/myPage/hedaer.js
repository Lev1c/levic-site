import { useContext } from "react";
import { ThemeContext } from "../myPage/index";

import { Sun, Moon, Globe } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="header">
      <div className="container header-block">
        <div className="header-main-block">
          <h2>Lev1c</h2>
        </div>
        <div className="hedaer-setting-block">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="header-setting__icon"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
          <button className="header-setting__icon">
            <Globe />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
