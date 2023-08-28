import Image from "next/image";

export default function DesignCard({ imgURL, title }) {
  return (
    <div className="group w-full bg-quaternary aspect-square relative">
      <Image
        src={imgURL}
        className="group-hover:brightness-50 bg-white w-full aspect-square"
      ></Image>
      <h3 className="hidden group-hover:block text-white absolute top-5 text-center w-full">
        {title}
      </h3>
    </div>
  );
}
