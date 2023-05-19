"use client";

export default function DarkModeSwitch() {
  return (
    <>
      <button
        className="fixed top-0 left-0"
        onClick={() => {
          document.documentElement.classList.toggle("dark");
        }}
      >
        Light/Dark
      </button>
    </>
  );
}
