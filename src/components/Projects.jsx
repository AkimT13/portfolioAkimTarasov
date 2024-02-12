import React from "react";
import Project from "./Project";
const Projects = () => {
  return (
    <div>
      <p className="text-white text-3xl p-10 md:pl-36 font-VarelaRound">
        Projects
      </p>
      <div className="flex flex-col items-center gap-10 md:flex-row justify-center ">
        <Project
          img="/logopupleBluewithtext.png"
          title="SFHacks 2024"
          tech="Astro, React, Firebase, JavaScript, Tailwind"
          description="The website for the SFHacks Hackathon.  "
        />
        <Project
          title="NewsGram"
          description="A news app with an emphasis on rapidly feeding the user simplified descriptions of each article. It also has authentication and uses firebase. "
          img="/newsGram.png"
          url="https://news-gram-akim-tarasovs-projects.vercel.app/"
        />
        <Project
          title="FruitDetection"
          description="A simple convelutional nearal network used to detect fruit"
          img="/fruit.png"
        />
      </div>
    </div>
  );
};

export default Projects;
