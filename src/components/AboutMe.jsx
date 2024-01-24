import React from "react";

const AboutMe = () => {
  return (
    <div className="h-auto w-[90%] md:w-[80%] bg-zinc-900 border-gray-400 border self-center rounded-xl">
      <p className=" text-white font-VarelaRound text-4xl p-5 text-center">
        About Me
      </p>
      <div className="flex flex-col  ">
        <img src="/MyPhoto.jpg" className="  w-52 self-center rounded-full" />

        <p className="text-white text-center p-5 font-VarelaRound font-bold  md:p-20">
          Greetings, I'm Akim Tarasov, a Computer Science student at San
          Francisco State University with a passion for mastering software
          development. As an officer for SF-Hacks and a Learning Assistant for
          CSC 215, I blend clean code with problem-solving to push the
          boundaries of innovation in the digital landscape. Join me on this
          journey where dedication meets excellence.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
