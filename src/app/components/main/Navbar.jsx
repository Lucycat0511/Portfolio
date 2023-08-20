"use client";

import { useScroll } from "@/app/hooks/useScroll";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const scrollDirection = useScroll();
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`flex flex-col items-center sticky z-20 w-full px-body py-4 bg-primary pt-4 shadow-sm
    ${scrollDirection === "up" ? "top-0" : !visible ? "-top-24" : "top-0"}
    dark:bg-quaternary
    move-and-fade ease-linear duration-150 `}
    >
      <div className="flex w-full">
        <p className="font-semibold text-md w-full md:w-fit">Zachary</p>

        {/* md navbar */}
        <nav className="grow hidden md:block">
          <ul className="flex gap-8 justify-center text-md">
            <Link
              href="/"
              className="font-light hover:text-quaternary hover:underline
            dark:hover:text-secondary"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-light hover:text-quaternary hover:underline
            dark:hover:text-secondary"
            >
              About
            </Link>
            <Link
              href="/my-projects"
              className="font-light hover:text-quaternary hover:underline
            dark:hover:text-secondary"
            >
              My Projects
            </Link>
            <Link
              href="/contact"
              className="font-light hover:text-quaternary hover:underline
            dark:hover:text-secondary"
            >
              Contact
            </Link>
          </ul>
        </nav>
        <ul className="flex gap-2 justify-end w-full md:w-fit">
          <Link href="https://github.com/Lucycat0511">
            <i
              className="fa-brands fa-github hover:text-quaternary text-lg
          dark:hover:text-secondary"
            ></i>
          </Link>
          <Link href="https://www.linkedin.com/in/zachary-maynor-900369118/">
            <i
              className="fa-brands fa-linkedin hover:text-quaternary text-lg
          dark:hover:text-secondary"
            ></i>
          </Link>
        </ul>
      </div>
      {/* sm navbar */}
      <nav className=" md:hidden flex flex-col items-center">
        <button
          className="absolute top-4 hover:text-quaternary dark:hover:text-secondary"
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {!visible ? (
            <i className="fa-solid fa-chevron-down fa-lg"></i>
          ) : (
            <i class="fa-solid fa-chevron-up fa-lg"></i>
          )}
        </button>
        <ul
          className={`flex flex-col gap-2 items-center text-md
        ${!visible && "hidden"}`}
        >
          <Link
            onClick={() => {
              setVisible(false);
            }}
            href="/"
            className="font-light hover:text-quaternary hover:underline
        dark:hover:text-secondary"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setVisible(false);
            }}
            href="/about"
            className="font-light hover:text-quaternary hover:underline
        dark:hover:text-secondary"
          >
            About
          </Link>
          <Link
            onClick={() => {
              setVisible(false);
            }}
            href="/my-projects"
            className="font-light hover:text-quaternary hover:underline
        dark:hover:text-secondary"
          >
            My Projects
          </Link>
          <Link
            onClick={() => {
              setVisible(false);
            }}
            href="/contact"
            className="font-light hover:text-quaternary hover:underline
        dark:hover:text-secondary"
          >
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
}
