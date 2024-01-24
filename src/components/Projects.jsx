import React from "react";
import Project from "./Project";
const Projects = () => {
  return (
    <div>
      <p className="text-white text-3xl p-10 md:pl-36 font-VarelaRound">
        Projects
      </p>
      <div className="flex justify-center gap-5">
        <Project
          img="/public/logopupleBluewithtext.png"
          title="SFHacks 2024"
          tech="Astro, React, Firebase, JavaScript, Tailwind"
          description="The website for the SFHacks Hackathon.  "
        />
        <Project
          title="NewsGram"
          description="A news app with an emphasis on rapidly feeding the user simplified descriptions of each artile"
        />
      </div>
    </div>
  );
};

export default Projects;
