"use client";

import { useInView } from "react-intersection-observer";
import ProjectCard from "../util/ProjectCard";

const projects = [
  {
    imgURL: "/assets/portfolio_project.jpeg",
    title: "My Portfolio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    languages: ["React", "Tailwind CSS", "Next.js"],
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    imgURL: "/assets/jacobs_website.jpeg",
    title: "Jacob Lang's Art Portfolio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    languages: ["React", "Tailwind CSS", "Next.js"],
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    imgURL: "/assets/portfolio_project.jpeg",
    title: "Expense Tracker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    languages: ["React", "Tailwind CSS", "Next.js", "Typescript"],
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function Projects() {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="flex flex-col gap-8 w-full">
      <h1
        className={`self-left text-2xl font-bold
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        transition-all ease-out delay-500 duration-1000`}
      >
        My Projects
      </h1>
      <div className="flex flex-col gap-40 w-full">
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
      </div>
      {/* Design to code snippets */}
    </div>
  );
}
