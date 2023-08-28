"use client";

import { useInView } from "react-intersection-observer";
import ProjectCard from "../util/ProjectCard";
import DesignCard from "../util/DesignCard";

const projects = [
  // {
  //   imgURL: "/assets/jacobs_website.jpeg",
  //   title: "Jacob Lang's Art Portfolio",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //   languages: ["React", "Tailwind CSS", "Next.js"],
  //   story:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  // },
  {
    imgURL: "",
    title: "Expense Tracker *(WIP)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    languages: ["React", "Tailwind CSS", "Firebase"],
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    imgURL: "",
    title: "eCommerce Landing Page *(WIP)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    languages: ["React", "Tailwind CSS"],
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    imgURL: "",
    title: "Simple Platform Game *(WIP)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    languages: ["React", "Tailwind CSS"],
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
const designs = [
  { imgURL: "", title: "QR Code" },
  { imgURL: "", title: "QR Code" },
  { imgURL: "", title: "QR Code" },
  { imgURL: "", title: "QR Code" },
  { imgURL: "", title: "QR Code" },
];

export default function Projects() {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="flex flex-col gap-8 w-full items-center">
      <div className="self-left md:w-full w-4/5 flex flex-col">
        <h1
          className={`text-2xl font-bold
        ${
          inView
            ? "opacity-100 translate-y-0"
            : "opacity-100 translate-y-0 md:opacity-0 md:translate-y-12"
        }
        move-and-fade ease-out delay-500 duration-1000`}
        >
          My Projects
          <hr />
        </h1>
      </div>
      <div className="flex flex-col md:gap-40 gap-24 w-4/5 md:w-full">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <ProjectCard
              key={index}
              project={project}
              rightOrientation={isEven}
            />
          );
        })}
        <div className="w-full md:w-full flex flex-col items-center gap-8">
          <h2 className="text-2xl font-bold">Design - To - Code</h2>
          <hr />
          <div
            className="grid grid-flow-row grid-cols-3 md:grid-cols-4 gap-4 md:gap-8
     w-full"
          >
            {designs.map((design, index) => {
              return (
                <DesignCard
                  key={index}
                  imgURL={design.imgURL}
                  title={design.title}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Design to code snippets */}
    </div>
  );
}
