import React, { useEffect, useState } from "react";
import { DarkLightModeBtn } from "../assets/images/Icons";

function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [darkMode]);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedMode);
      }, []);
      
      useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
        if (darkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [darkMode]);
  return (
    <button className="dark:text-white" onClick={() => setDarkMode(!darkMode)}>
      <DarkLightModeBtn />
    </button>
  );
}

export default DarkMode;
