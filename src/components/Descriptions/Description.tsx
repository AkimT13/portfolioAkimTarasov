import React from "react";

const Description = ({ fullDescription }) => {
  return (
    <div className="h-auto">
      <p className="text-white p-3">{fullDescription.details}</p>
      <p className="text-white p-3">{fullDescription.technologies}</p>
      <p className="text-white p-3">{fullDescription.issues}</p>
    </div>
  );
};

export default Description;
