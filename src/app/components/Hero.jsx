import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex my-24 items-center">
        <div className="flex flex-col gap-2 mr-auto items-start">
          <p className="text-xl font-light">Hi! I'm Zachary, a</p>
          <h1 className="text-6xl font-semibold font-display">
            Front End
            <br />
            Web Developer
          </h1>
          <p className="text-xl font-light">based in Hyde Park, NY</p>
          <button
            className=" bg-secondary px-6 py-2 rounded-md shadow-md text-md font-light mt-2 hover:bg-quaternary hover:text-white transition-all ease-linear duration-100
            dark:text-black dark:bg-tertiary dark:hover:bg-secondary dark:hover:text-black"
          >
            Resume
          </button>
        </div>

        <Image
          className=" w-2/5 bg-white aspect-square rounded-full object-cover object-center"
          src="/assets/profile.jpg "
          alt="profile picture"
          width={500}
          height={500}
        ></Image>
      </div>

      <div className="self-center flex flex-col items-center">
        <p className="text-xl font-medium">Find out more!</p>
        <i className="fa-solid fa-arrow-down"></i>
      </div>
    </div>
  );
}
