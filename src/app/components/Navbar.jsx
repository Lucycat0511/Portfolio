import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center">
      <p className="font-semibold text-md w-20">Zachary</p>
      <nav className="grow ">
        <ul className="flex gap-8 justify-center">
          <Link
            href="#"
            className="font-light text-md hover:text-quaternary hover:underline hover:font-medium
            dark:hover:text-secondary"
          >
            Home
          </Link>
          <Link
            href="#"
            className="font-light text-md hover:text-quaternary hover:underline hover:font-medium
            dark:hover:text-secondary"
          >
            About
          </Link>
          <Link
            href="#"
            className="font-light text-md hover:text-quaternary hover:underline hover:font-medium
            dark:hover:text-secondary"
          >
            My Projects
          </Link>
          <Link
            href="#"
            className="font-light text-md hover:text-quaternary hover:underline hover:font-medium
            dark:hover:text-secondary"
          >
            Contact
          </Link>
        </ul>
      </nav>
      <ul className="flex gap-2 w-20 justify-end">
        <Link href="https://github.com/Lucycat0511">
          <i
            className="fa-brands fa-github hover:text-quaternary text-lg
          dark:hover:text-secondary"
          ></i>
        </Link>
        <Link href="https://www.linkedin.com/in/zachary-maynor-900369118/">
          <i
            className="fa-brands fa-linkedin hover:text-quaternary text-lg
          dark:hover:text-secondary"
          ></i>
        </Link>
      </ul>
    </div>
  );
}
