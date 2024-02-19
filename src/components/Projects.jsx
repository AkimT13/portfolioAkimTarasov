import React, { useState } from "react";
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
          fullDescription={{
            link: "https://sfhacks.io",
            details:
              "During my time as a web developer for the club SF Hacks, I had the oppurtunity to help create this website. It was a collaberative effort among other web develores in the club, which enhanced my ability to work in a team in the context of programming. It contains information regarding the event, a method of registering that involves sending QR codes that will be scanned on the day of the event, a place for sponsors to reach out, and is even accesseablity features and is responsive on mobile devices",
            technologies: "React, Next, Firebase, Tailwind, Node ",

            futureDevelopment:
              " For future hackathons, it would be great if the design of the webiste had some sort of cohesive theme. ",
          }}
        />
        <Project
          title="NewsGram"
          description="An ai driven news digest app"
          img="/newsGram.png"
          url="https://news-gram-akim-tarasovs-projects.vercel.app/"
          fullDescription={{
            link: "https://news-gram.vercel.app/",
            details:
              "NewsGram is a fullstack news application designed to condense extensive articles into easily digestible snippets. The goal is to empower users to quickly acquire information on current events without the cognitive load associated with reading lengthy articles. ",
            technologies:
              " React, Javascript, Vite, Vercel, NewsApi, gpt-3.5, Firebase, Tailwind, Node",

            futureDevelopment:
              " I want to implement more security for the database. Additonally, I have ideas for features that involve a lot more expertise in the area of machine alrning, such as a way to compare similar articles from different news websites in order to detect biases. As well as a chatbot feature that uses realtime events for context. These features would make this webiste a full fledged app that can solve many problems that people have when attempting to find information on current events.",
          }}
        />
        <Project
          title="FruitDetection"
          description="A simple convelutional nearal network used to detect fruit"
          img="/fruit.png"
          fullDescription={{
            details:
              " Fruit Detection is less of a showey project and more of a way for me to dip my toes in the realm of machine learning. I wanted to figure out a way to train an object detection model by feeding it pictures of fruit that were taken at all differnt angles, rather than having to draw boundery boxes around various fruits in different eviroments. It's basically a little experiment and a way to get me familiar with machine learing.",
            technologies: "Python, Tensorflow, Keras",

            futureDevelopment:
              " I don't evision anything else happeing with this project in paticular, however I do plan on taking the knowledge I gained from doing this project and transfering it to an area of machine learning such as language processing. The reason whyn is because I think learning about language processing models would be very beenficial for my other project, NewsGram.",
          }}
        />
      </div>
    </div>
  );
};

export default Projects;
