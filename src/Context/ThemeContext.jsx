import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const root = window.document.documentElement;
    const favicon = document.querySelector("link[rel='icon']");

    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
      if (favicon) favicon.href = "/logo-dark.svg";
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      if (favicon) favicon.href = "/logo-light.svg";
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
