"use client";

import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="flex w-full justify-center">
      <div className="flex flex-col gap-8  w-3/5">
        <h1
          className={`self-left text-2xl font-bold
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        transition-all ease-out delay-200 duration-1000`}
        >
          About Me
        </h1>
        <div className="flex gap-8">
          <div
            className={`flex flex-col gap-2 leading-7 w-4/5
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            transition-all ease-out duration-1000`}
          >
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <p>
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiateprehenderit in voluptate velit esse cillum dolore eu fugiat
            </p>
            <p>
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.eprehenderit in voluptate velit esse cillum dolore eu
              fugiat
            </p>
            <p>
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiateprehenderit in voluptate velit esse cillum dolore eu
              fugiateprehenderit in voluptate velit esse cillum dolore eu fugiat
            </p>
            <p>
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </p>
            <p>
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            {/* Hi! My name is Zachary Maynor. I really enjoy building clean
              looking ad well-put-together websites!
              <br />
              ~how i started ie. highschool, journey through college~
              <br />
              ~how i ended up here and why?~
              <br />
              ~my focus~
              <br />
              ~languages I use and plan to learn~ */}
          </div>
          <div className="h-full px-4 flex flex-col gap-8  w-1/5 text-xs rounded-2xl">
            <div
              className={`flex flex-col gap-1 text-center
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            transition-all ease-out delay-[700ms] duration-1000`}
            >
              <i className="devicon-javascript-plain text-6xl"></i>
              <span>Javascript</span>
            </div>
            <div
              className={`flex flex-col gap-1 text-center
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            transition-all ease-out delay-[900ms] duration-1000`}
            >
              <i className="devicon-react-original text-6xl"></i>
              <span>React</span>
            </div>
            <div
              className={`flex flex-col gap-1 text-center
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            transition-all ease-out delay-[1100ms] duration-1000`}
            >
              <i className="devicon-tailwindcss-plain text-6xl"></i>
              <span>Tailwind</span>
            </div>
            <div
              className={`flex flex-col gap-1 text-center
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            transition-all ease-out delay-[1300ms] duration-1000`}
            >
              <i className="devicon-nextjs-original text-6xl"></i>
              <span>Next.js</span>
            </div>
            <div
              className={`flex flex-col gap-1 text-center
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            transition-all ease-out delay-[1500ms] duration-1000`}
            >
              <i className="devicon-bootstrap-plain text-6xl"></i>
              <span>Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
