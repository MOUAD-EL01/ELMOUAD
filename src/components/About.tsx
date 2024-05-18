import { Meteors } from "../ui/meteors";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div id="about" className=" container my-10   text-center">
      <h1 className=" font-bold text-5xl text-black">So who am i ?</h1>
      <center>
        <p className=" text-lg pt-4 lg:w-[800px]   text-justify lg:mx-0 mx-8">
          I am a 22-year-old programmer with 10 months of experience. Through a
          blend of academic study and self-guided learning, I've cultivated the
          essential skills to excel as a web developer. My drive to adapt to
          diverse languages and environments has honed my ability to learn
          quickly. While I've mastered the fundamentals and refined my
          problem-solving skills, my thirst for knowledge remains unquenched.
          I'm eager to delve deeper into the programming realm, aspiring to
          develop tools that can simplify and enhance people's daily lives.
          What's my favorite language? JavaScript. Why? Because, as the saying
          goes, 'Any application that can't be written in JavaScript will
          eventually be written in JavaScript.'
        </p>
      </center>
      <center>
        <div className="block lg:flex items-center justify-center mt-4 gap-4 w-[70%]"></div>
      </center>
      <center>
        {" "}
        <div className="  gap-y-5 lg:flex gap-32 mt-6 justify-center">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,

              borderRadius: "100%",
            }}
            className=" w-full relative max-w-xs lg:mt-0 mt-8"
          >
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-white border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <h1 className="font-bold text-xl text-black mb-4 relative z-50">
                Software development technician
              </h1>

              <p className="font-normal text-base text-slate-500 mb-4 text-justify  relative z-50">
                📅 From October 2020 to July 2022 OFPPT ISGI Casablanca, Morocco
                <br /> 💡 Mention : Très Bien
              </p>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,

              borderRadius: "100%",
            }}
            className=" w-full relative max-w-xs lg:mt-0 mt-4"
          >
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-white border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-start items-start">
              <h1 className="font-bold text-xl text-black mb-4 relative z-50">
                National Baccalaureate
              </h1>

              <p className="font-normal text-base text-slate-500 mb-4 text-justify  relative z-50">
                📅 From September 2019 to July 2020 boustan el malaika
                Casablanca, Morocco <br />
                💡 filière : science physique <br />
                💡 Mention : Très Bien
              </p>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </motion.div>
        </div>
      </center>
    </div>
  );
};

export default About;
