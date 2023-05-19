import Image from "next/image";
import Button from "./util/Button";

export default function Hero() {
  return (
    <div className="flex flex-col gap-8 my-24">
      <div className="flex  items-center">
        <div className="flex flex-col gap-2 mr-auto items-start">
          <p className="text-xl font-light">Hi! I'm Zachary, a</p>
          <h1 className="text-6xl font-semibold font-display">
            Front End
            <br />
            Web Developer
          </h1>
          <p className="text-xl font-light">based in Hyde Park, NY</p>
          <Button text="Resume" />
        </div>

        <div className="group w-2/5 aspect-square relative">
          <div
            className={`w-full aspect-square rounded-2xl  bg-secondary
          group-hover:translate-x-2 group-hover:translate-y-2
          transition-all ease-out duration-200`}
          ></div>
          <Image
            className={`group absolute -top-2 -left-2 w-full aspect-square rounded-2xl object-cover object-center
            group-hover:-translate-x-2 group-hover:-translate-y-2
            transition-all ease-out duration-200
            `}
            src="/assets/profile.jpg "
            alt="profile picture"
            width={500}
            height={500}
          ></Image>
        </div>
      </div>

      {/* <div className="self-center flex flex-col items-center">
        <p className="text-xl font-medium">Find out more!</p>
        <i className="fa-solid fa-arrow-down"></i>
      </div> */}
    </div>
  );
}
