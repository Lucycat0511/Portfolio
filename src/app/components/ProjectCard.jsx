"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProjectCard({
  project: { imageURL, title, description, languages, story },
  click,
}) {
  const [fullView, setFullView] = useState(false);
  return (
    <div className="flex">
      <Image
        onClick={() => {
          setFullView(!fullView);
        }}
        className={`z-10 absolute bg-secondary h-96 aspect-square shadow-inner border-white border rounded-3xl hover:bg-tertiary transition-all ease-linear duration-1000
        w-96 `}
        src={imageURL}
        alt="project image"
        width={100}
        height={100}
      ></Image>
      <div className="overflow-clip rounded-3xl">
        <div
          className={`pl-1/3 overflow-hidden w-full
        flex h-96 bg-secondary shadow-inner border-y-white border border-l-0 border-r-white rounded-3xl  transition-all ease-linear duration-1000
    ${fullView ? "-translate-x-0" : "-translate-x-full"}`}
        >
          <div className={`flex flex-col gap-4 pl-8 py-4 ml-96 pr-6`}>
            <div className="flex gap-2">
              {languages.map((language, index) => {
                return (
                  <spa key={index} className="bg-tertiary px-2 rounded-md">
                    {language}
                  </spa>
                );
              })}
            </div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{description}</p>
            <p>{story}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
