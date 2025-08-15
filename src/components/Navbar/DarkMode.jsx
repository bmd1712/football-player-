import React, { useState, useEffect } from "react";
import devil from '../../assets/web/devil.png';
import angel from '../../assets/web/angel.png';
import mu from '../../assets/web/manchester-united (1).png';
import mureal from '../../assets/web/clown.png';

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleClick = () => {
    setAnimate(true); 
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light"); 
      setAnimate(false); 
    }, 300); 
  };

  return (
    <div className=""> 
      <img
        src={theme === "light" ? devil : angel}
        alt="Toggle Theme"
        onClick={handleClick}
        className={`w-8 cursor-pointer drop-shadow-2xl transform-gpu transition-transform duration-300 ${
          animate ? "rotate-y-90" : "rotate-y-0"
        }`}
      />
    </div>
  );
};

export default DarkMode;