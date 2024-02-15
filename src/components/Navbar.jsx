import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="flex justify-between w-full bg-zinc-950 p-5 items-center border-b border-gray-400">
      <p className="text-white font-VarelaRound text-3xl">Akim Tarasov</p>
      <div className="flex gap-5 items-center">
        <a href="https://github.com/AkimT13" target="_blank">
          <FaGithub color={"white"} size={30} className="cursor-pointer" />
        </a>
        <a
          href="https://linkedin.com/in/akim-tarasov-2b1072298"
          target="_blank"
        >
          <FaLinkedin
            color={"white"}
            size={30}
            className="cursor-pointer"
            blank="_blank"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
