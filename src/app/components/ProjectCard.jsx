import Image from "next/image";

export default function ProjectCard({
  project: { imageURL, title, description, languages, story },
  click,
  fullView,
}) {
  return (
    <div>
      <Image
        onClick={() => {
          click();
        }}
        className="w-96 bg-seconday shadow-inner border-white border aspect-square rounded-full hover:bg-tertiary transition-all ease-linear duration-150"
        src={imageURL}
        alt="profile picture"
        width={100}
        height={100}
      ></Image>
      {fullView && (
        <>
          <div>
            {languages.map((language) => {
              return <span>{language}</span>;
            })}
          </div>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{story}</p>
        </>
      )}
    </div>
  );
}
