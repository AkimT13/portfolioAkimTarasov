import React from "react";

const Project = ({ title, description, use, tech, img }) => {
  return (
    <div className="w-[20rem] h-auto border rounded-2xl bg-zinc-900 hover:scale-105 transition ease-in-out duration-500">
      <img src={img} />
      <hr />
      <p className="text-white p-3 text-md font-VarelaRound">Title: {title}</p>
      <p className="text-white p-3 text-md font-VarelaRound">
        {" "}
        Description: {description}
      </p>
    </div>
  );
};

export default Project;
