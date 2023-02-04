import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="flex justify-center h-10 mt-2">
      <div className="flex bg-blue-200 rounded-xl p-4 items-center justify-center">
        <ul className="flex flex-row space-x-20 xl:space-x-40 relative">
          <li className="hover:bg-blue-300 rounded-xl p-1 z-10"><Link href={"/"}>Home</Link></li>
          <li className="hover:bg-blue-300 rounded-xl p-1"><Link href={"/projects"}>Projects</Link></li>
          <li className="hover:bg-blue-300 rounded-xl p-1"><Link href={"/contact"}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;