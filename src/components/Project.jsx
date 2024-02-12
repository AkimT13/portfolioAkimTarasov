import React, { useState } from "react";

const Project = ({ title, description, use, tech, img, url }) => {
  const [moreDescription, setMoreDescription] = useState(false);
  return (
    <div className="w-[20rem] h-auto border rounded-2xl bg-zinc-900 hover:scale-105 transition ease-in-out duration-500 cursor-pointer">
      <img src={img} />
      <hr />
      <p className="text-blue-300 p-3 text-2xl font-bold  font-VarelaRound">
        {" "}
        {title}
      </p>
      <p className="text-white p-3 text-md font-VarelaRound"> {description}</p>
    </div>
  );
};

export default Project;
