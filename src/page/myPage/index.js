import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

const MyPage = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`my-page ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default MyPage;
