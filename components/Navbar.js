import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  console.log(menuOpen);

  return (
    <>
      <nav className="flex pb-2 pt-2 shadow">
        <div className="flex items-center mr-auto">
          <img className="h-6 pl-2 pr-2" src="/plan.svg" />
          <h3>Sprintplanung Medusa</h3>
        </div>
        <div className="hidden md:block">
          <Link className="mr-4" href="/">
            Home
          </Link>
          <Link className="mr-2" href="/Settings">
            Settings
          </Link>
        </div>
        <button onClick={() => setMenuOpen((prev) => !prev)}>
          <svg
            class="w-6 h-6 mr-2 md:hidden block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <div className="">
        <Link className="block text-center mr-4 border-b border-gray-100 w-full p-2" href="/">
          Home
        </Link>
        <Link className="block text-center mr-2 border-b border-gray-100 w-full p-2" href="/Settings">
          Settings
        </Link>
      </div>
      )}
    </>
  );
};

export default Navbar;
