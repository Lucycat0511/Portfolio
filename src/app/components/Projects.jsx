"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projectFullView, setProjectFullView] = useState(false);
  return (
    <div>
      <h1>My Projects</h1>
      <ProjectCard
        project={{
          imgURL: "/profile.jpg ",
          title: "Project A",
          description: "lorem",
          languages: ["React", "Tailwind CSS", "Next.js"],
          story: "Lorem Lorem",
        }}
        click={() => {
          setProjectFullView(!projectFullView);
        }}
        fullView={projectFullView}
      />
    </div>
  );
}
