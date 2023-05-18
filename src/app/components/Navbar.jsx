import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center">
      <p className="font-semibold text-md w-20">Zachary</p>
      <nav className="grow ">
        <ul className="flex gap-8 justify-center">
          <Link
            href="#"
            className="font-light text-md hover:text-green-400 hover:underline"
          >
            Home
          </Link>
          <Link
            href="#"
            className="font-light text-md hover:text-green-400 hover:underline"
          >
            About
          </Link>
          <Link
            href="#"
            className="font-light text-md hover:text-green-400 hover:underline"
          >
            My Projects
          </Link>
          <Link
            href="#"
            className="font-light text-md hover:text-green-400 hover:underline"
          >
            Contact
          </Link>
        </ul>
      </nav>
      <ul className="flex gap-2 w-20 justify-end">
        <Link href="https://github.com/Lucycat0511">
          <i className="fa-brands fa-github hover:text-green-400"></i>
        </Link>
        <Link href="https://www.linkedin.com/in/zachary-maynor-900369118/">
          <i className="fa-brands fa-linkedin hover:text-green-400"></i>
        </Link>
      </ul>
    </div>
  );
}
