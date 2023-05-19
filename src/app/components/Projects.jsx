"use client";
import ProjectCard from "./util/ProjectCard";

export default function Projects() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className="self-left text-2xl font-bold">My Projects</h1>
      <div className="flex flex-col gap-32 w-full">
        <ProjectCard
          project={{
            imgURL: "/assets/portfolio.png",
            title: "Project A",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            languages: ["React", "Tailwind CSS", "Next.js"],
            story:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          }}
        />
        <ProjectCard
          project={{
            imgURL: "/assets/profile.jpg ",
            title: "Project A",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            languages: ["React", "Tailwind CSS", "Next.js"],
            story:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          }}
          rightOrientation
        />
      </div>
      {/* Design to code snippets */}
    </div>
  );
}
