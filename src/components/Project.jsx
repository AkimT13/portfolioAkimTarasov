import React, { useState } from "react";
import Description from "./Descriptions/Description";

const Project = ({
  title,
  description,
  use,
  tech,
  img,
  url,
  fullDescription,
}) => {
  const [moreDescription, setMoreDescription] = useState(true);
  const expand = () => {
    console.log("Button");
    setMoreDescription((prevMoreDescription) => !prevMoreDescription);
  };
  return (
    <>
      <div
        onClick={expand}
        className="w-[20rem] h-auto border rounded-2xl bg-zinc-900 hover:scale-105 transition ease-in-out duration-500 cursor-pointer z-50 "
      >
        {moreDescription ? (
          <div>
            <img src={img} />
            <hr />
            <p className="text-blue-300 p-3 text-2xl font-bold  font-VarelaRound">
              {" "}
              {title}
            </p>
            <p className="text-white p-3 text-md font-VarelaRound">
              {" "}
              {description}
            </p>
          </div>
        ) : (
          <Description fullDescription={fullDescription} title={title} />
        )}
      </div>
    </>
  );
};

export default Project;
