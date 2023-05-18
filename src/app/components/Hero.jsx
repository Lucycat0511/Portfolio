import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex my-36 items-center">
        <div className="flex flex-col gap-2 mr-auto items-start">
          <p className="text-xl font-light">Hi! I'm Zachary, a</p>
          <h1 className="text-6xl font-semibold font-display">
            Front End
            <br />
            Web Developer
          </h1>
          <p className="text-xl font-light">based in Hyde Park, NY</p>
          <button className="bg-green-700 px-6 py-2 rounded-sm text-md font-light mt-2 hover:bg-green-900">
            Resume
          </button>
        </div>

        <Image
          className="w-96 bg-white aspect-square rounded-full"
          src="/profile.jpg "
          alt="profile picture"
          width={100}
          height={100}
        ></Image>
      </div>

      <div className="self-center flex flex-col items-center">
        <p className="text-xl font-medium">There's more!</p>
        <i className="fa-solid fa-arrow-down"></i>
      </div>
    </div>
  );
}
