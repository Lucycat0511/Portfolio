"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function About({ shorten }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="flex w-full justify-center">
      <div className="flex flex-col gap-8  w-4/5 ">
        <h1
          className={`self-left text-2xl font-bold
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        move-and-fade ease-out delay-200 duration-1000`}
        >
          About Me
          <hr />
        </h1>

        <div className="flex gap-8">
          <div
            className={`flex flex-col gap-2 leading-7 w-full md:w-4/5
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            move-and-fade ease-out duration-1000`}
          >
            <p>
              I wasn’t always interested in web development, nor am I from Hyde
              Park! I grew up in Toms River, NJ actually. I’ve had a love for
              building and solving problems from a young age. When I was in
              middle school, I used to play Minecraft a lot, but I got bored of
              the same ‘vanilla’ game so began to add “mods.” I would implement
              new features and soon I wanted to create them myself! I learned
              Java, installed my first IDE, Eclipse, and began making mods for
              Minecraft. The rest is history!
            </p>
            <p>
              After middle school and all throughout highschool, I continued
              making simple applications, even dabbling in html and C++. I
              enjoyed it, but thought there was more to the world than sitting
              inside all day programming. I decided not to pursue a career in
              Programming and chose to major in Biology. In community college, I
              learned a lot more by expanding out and trying different subjects
              of interest. I think my time was well spent and it broadened my
              horizons! That’s when I took my first Plant Biology class and fell
              in love with the world of plants!
            </p>
            {!shorten && (
              <>
                <p>
                  I decided to further my career in Botany, and enrolled at the
                  University of Maine. I went on to attain my degree and found
                  the love of my love while I was at it! Her name is Hana, she
                  is the most important person to me and pushes me to this day
                  to pursue my interests. Once I graduated, I still felt unsure,
                  and I needed a masters if I wanted to continue my research. I
                  didn’t have the money and I felt like I needed a change, so I
                  moved to Hyde Park, NY and enrolled at the Culinary Institute
                  of America. Probably not the wisest decision as I was flat out
                  broke, and now have a bit of student loan debt.
                </p>
                <p>
                  My time at CIA was splendid and I learned valuable skills that
                  not only apply to the kitchen. Alas, I only stayed for a
                  semester as financials began overwhelm me. I continued to
                  pursue a career in the food industry, working at Beekman Arms,
                  and I enjoy my work! The thing with working in a kitchen is
                  that it’s physically and mentally taxing to a degree that I
                  don’t think I can see myself doing for the rest of my life.
                  *Thus, Web Development walks in.*
                </p>
              </>
            )}

            <p>
              I needed a career switch and I went with ole reliable. I made a
              complete circle and went back to programming. I decided to take a
              different course of action and checked out Web Development, as it
              is a mix of art and technical skill, a lot like cooking. I started
              off by taking Angela Yu’s bootcamp course on on Udemy and I fell
              in love. I watched as Angela explain topics and they blossomed
              into full web pages before my eyes. That’s when I realized that
              Web development is also like Botany, and I get the same
              satisfaction of watching some grow and bloom into a beautiful
              website. I finished Angela’s bootcamp and went on to get certified
              through Meta, taking their Front End Developer course. After that
              experience, I began to build my portfolio, and help friends make
              websites. Now I look to the future and a hopeful career shift.
            </p>

            <Link
              href="/about"
              className="font-light hover:text-quaternary hover:underline
            dark:hover:text-secondary"
            >
              Read More
            </Link>
          </div>
          <div
            className="h-full px-4 hidden flex-col gap-8  w-1/5 text-xs rounded-2xl
          md:flex"
          >
            <div
              className={`flex flex-col gap-1 text-center
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            move-and-fade ease-out delay-[700ms] duration-1000`}
            >
              <i className="devicon-javascript-plain text-6xl"></i>
              <span>Javascript</span>
            </div>
            <div
              className={`flex flex-col gap-1 text-center
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            move-and-fade ease-out delay-[900ms] duration-1000`}
            >
              <i className="devicon-react-original text-6xl"></i>
              <span>React</span>
            </div>
            <div
              className={`flex flex-col gap-1 text-center
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            move-and-fade ease-out delay-[1100ms] duration-1000`}
            >
              <i className="devicon-tailwindcss-plain text-6xl"></i>
              <span>Tailwind</span>
            </div>
            <div
              className={`flex flex-col gap-1 text-center
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            move-and-fade ease-out delay-[1300ms] duration-1000`}
            >
              <i className="devicon-git-plain text-6xl"></i>
              <span>Git</span>
            </div>
            <div
              className={`flex flex-col gap-1 text-center
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            move-and-fade ease-out delay-[1500ms] duration-1000`}
            >
              <i className="devicon-firebase-plain text-6xl"></i>

              <span>Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
