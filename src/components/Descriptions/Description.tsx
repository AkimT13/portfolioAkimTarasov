import React from "react";

const Description = ({ fullDescription, title }) => {
  return (
    <div className="h-auto p-3">
      <a
        className="text-blue-300  text-3xl underline font-VarelaRound text-center"
        href={fullDescription.link}
        target="_blank"
      >
        {title}
      </a>
      <p className="text-white p-3 font-VarelaRound">
        <span className="text-blue-300">Description:</span>{" "}
        {fullDescription.details}
      </p>
      <p className="text-white p-3 font-VarelaRound">
        <span className="text-blue-300">Technologies:</span>{" "}
        {fullDescription.technologies}
      </p>
      <p className="text-white p-3 font-VarelaRound">
        <span className="text-blue-300">Future Development:</span>{" "}
        {fullDescription.futureDevelopment}
      </p>
    </div>
  );
};

export default Description;
