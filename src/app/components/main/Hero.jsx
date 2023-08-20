import Image from "next/image";
import Button from "../util/Button";

function Profile() {
  return (
    <div className="group w-full aspect-square relative">
      <div
        className={`w-full aspect-square rounded-full  bg-secondary
  group-hover:translate-x-2 group-hover:translate-y-2
  dark:bg-tertiary
  move-and-fade ease-out duration-200`}
      ></div>
      <Image
        className={`group absolute -top-2 -left-2 w-full aspect-square rounded-full  object-cover object-center
    group-hover:-translate-x-2 group-hover:-translate-y-2
    move-and-fade ease-out duration-200
    `}
        src="/assets/profile.jpeg"
        alt="profile picture"
        width={500}
        height={500}
      ></Image>
    </div>
  );
}

export default function Hero() {
  return (
    <div
      className="flex flex-col items-center h-[70vh] gap-12 justify-center mt-10
    md:flex-row"
    >
      <div className="md:hidden w-3/5 max-w-xs flex justify-center">
        <Profile />
      </div>

      <div
        className="flex flex-col gap-2  items-center
      md:items-start"
      >
        <p className="text-xl font-light">Hi! I&apos;m Zachary, a</p>
        <h1
          className="text-5xl font-semibold font-display text-center
        md:text-left md:text-6xl"
        >
          Front End
          <br />
          Web Developer
        </h1>
        <p className="text-xl font-light">based in Hyde Park, NY</p>
        <Button>
          <a href="/assets/Resume.pdf" download>
            Resume
          </a>
        </Button>
      </div>

      <div className="md:block hidden w-full max-w-xs">
        <Profile />
      </div>
    </div>
  );
}
