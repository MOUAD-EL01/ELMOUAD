import React from "react";
import HeroImage from "../assets/HeroImage.json";
import Lottie from "lottie-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="my-10 container flex flex-col-reverse sm:flex-row justify-center items-center gap-5 sm:gap-10">
      <div className="text-center sm:text-left">
        <h5 className="text-black font-semibold text-xl sm:text-3xl">
          Hello Everybody
        </h5>
        <h1 className="text-black font-bold text-2xl sm:text-5xl leading-tight sm:leading-snug mt-5">
          I'm Mouad Elattar <br /> a WEB Developer
        </h1>
        <p className="text-black max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-2xl pt-2">
          🚀 Hello World! <span className="font-bold">I'm Mouad</span>, a
          passionate and creative <span className="font-bold">Full Stack</span>{" "}
          Developer on a mission to bring digital ideas to life. With a love for
          crafting websites and a knack for solving problems using a diverse
          range of technologies, I thrive in the dynamic world of web
          development.
        </p>
        <p className="flex justify-center sm:justify-start items-center gap-2 pt-4 font-bold">
          Follow me:
          <a href="https://www.linkedin.com/in/mouad-el-attar-384096225/">
            <FaLinkedin size={19} className="" />
          </a>
          <a href="https://github.com/MOUAD-EL01">
            <FaGithub size={19} className="" />
          </a>
        </p>
      </div>
      <div className="w-full lg:max-w-md max-w-none">
        <Lottie animationData={HeroImage} loop={true} />
      </div>
    </div>
  );
};

export default Hero;
