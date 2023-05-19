import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex gap-20">
      <Image
        className="w-1/12 bg-white aspect-square rounded-full object-cover object-center"
        src="/assets/profile.jpg "
        alt="profile picture"
        width={500}
        height={500}
      />
      <div className="flex gap-20">
        <ul className="flex flex-col">
          <Link
            href="#"
            className="font-light text-md hover:text-quaternary hover:underline hover:font-medium"
          >
            Home
          </Link>
          <Link
            href="#"
            className="font-light text-md hover:text-quaternary hover:underline hover:font-medium"
          >
            About
          </Link>
          <Link
            href="#"
            className="font-light text-md hover:text-quaternary hover:underline hover:font-medium"
          >
            My Projects
          </Link>
          <Link
            href="#"
            className="font-light text-md hover:text-quaternary hover:underline hover:font-medium"
          >
            Contact
          </Link>
        </ul>
        <ul className="flex flex-col">
          <Link href="https://github.com/Lucycat0511">
            <i className="fa-brands fa-github hover:text-quaternary text-lg"></i>
          </Link>
          <Link href="https://www.linkedin.com/in/zachary-maynor-900369118/">
            <i className="fa-brands fa-linkedin hover:text-quaternary text-lg"></i>
          </Link>
        </ul>
      </div>
    </footer>
  );
}
