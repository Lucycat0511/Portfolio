"use client";

import { useState } from "react";

export default function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <button
        className="fixed top-0 left-0"
        onClick={() => {
          document.documentElement.classList.toggle("dark");
          setDarkMode(!darkMode);
        }}
      >
        {darkMode ? "Dark" : "Light"}
      </button>
    </>
  );
}
