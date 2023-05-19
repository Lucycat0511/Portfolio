import Image from "next/image";

export default function ProjectCard({
  project: { imgURL, title, description, languages, story },
  rightOrientation,
}) {
  return (
    <div className={`flex h-96 ${rightOrientation && "flex-row-reverse"}`}>
      <div className="relative w-3/5 bg-secondary rounded-2xl">
        <Image
          className={`object-cover bg-secondary h-full w-full absolute aspect-square border-secondary border-2 rounded-2xl
            hover:-translate-x-2 hover:-translate-y-2
            transition-all ease-out duration-150`}
          src={imgURL}
          alt="project image"
          width={9999}
          height={9999}
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
