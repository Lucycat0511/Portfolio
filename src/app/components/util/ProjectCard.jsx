"use client";

import { useInView } from "react-intersection-observer";

import Image from "next/image";

export default function ProjectCard({
  project: { imgURL, title, description, languages, story },
  rightOrientation,
}) {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`flex h-96 ${rightOrientation && "flex-row-reverse"}
      ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      transition-all ease-out delay-200 duration-1000`}
    >
      <div
        className="relative w-3/5 bg-secondary rounded-2xl
      dark:bg-tertiary"
      >
        <Image
          className={`object-cover h-full w-full absolute aspect-square border-secondary border-2 rounded-2xl
            hover:-translate-x-2 hover:-translate-y-2
            dark:border-tertiary
            transition-all ease-out duration-150`}
          src={imgURL}
          alt="project image"
          width={9999}
          height={9999}
          priority
        ></Image>
      </div>

      <div
        className={`w-2/5 z-10  overflow-clip ${
          rightOrientation ? "mr-auto" : "ml-auto text-right"
        }`}
      >
        <div
          className={`flex flex-col gap-4 py-4 ${
            rightOrientation ? "pr-8" : "pl-8"
          }`}
        >
          <div className={`flex gap-2 ${!rightOrientation && "ml-auto"}`}>
            {languages.map((language, index) => {
              return (
                <span key={index} className="bg-tertiary px-2 rounded-md">
                  {language}
                </span>
              );
            })}
          </div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p>{description}</p>
          <p>{story}</p>
        </div>
      </div>
    </div>
  );
}
