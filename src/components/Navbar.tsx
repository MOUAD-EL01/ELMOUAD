import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuVariant = {
    initial: { x: "100%", scaleX: 0 },
    animate: {
      x: 0,
      scaleX: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
    },
    exit: {
      x: "100%",
      scaleX: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const openNaveMobile = () => {
    setOpen(!open);

    // alert(open);
  };
  return (
    <header className=" relative lg:static top-0 z-10 w-full h-[80px] leading-[80px] flex items-center bg-[white] shadow-md md:px-20">
      <div className="container">
        <div className="  lg:flex items-center justify-between">
          <div className=" lg:ml-0 ml-6 flex items-center gap-[4px]">
            <span
              className=" w-[40px] h-[40px] bg-black text-white text-md font-semibold
          rounded-full flex items-center justify-center "
            >
              M
            </span>
            <div className=" leading-[20px] pr-8">
              <h2 className=" text-md text-black font-semibold uppercase">
                Mouad
              </h2>
              <p className=" text-black text-md font-semibold uppercase">
                Elattar
              </p>
            </div>
            <div></div>
            <ul className=" hidden lg:visible lg:flex items-center gap-6">
              <li>
                <a
                  className="text-black font-semibold hover:border-b hover:border-black border-transparent border-b-2 transition duration-300"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-black font-semibold hover:border-b hover:border-black border-transparent border-b-2 transition duration-300"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-black font-semibold hover:border-b hover:border-black border-transparent border-b-2 transition duration-300"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>

              <li>
                <a
                  className="text-black font-semibold hover:border-b hover:border-black border-transparent border-b-2 transition duration-300"
                  href="#Tech"
                >
                  Tech
                </a>
              </li>
            </ul>
          </div>
          <div className="menu  lg:visible hidden lg:block">
            <ul className="flex items-center gap-10">
              {" "}
              <li>
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm font-semibold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span
        className=" text-2xl text-white md:hidden cursor-pointer "
        onClick={openNaveMobile}
      >
        <RxHamburgerMenu color="black" className="mr-8" />
      </span>{" "}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariant}
            initial="initial" // Initial position (off screen to the right)
            animate="animate" // Final position (center of the screen)
            exit="exit" // Animation duration and easing function
            className="fixed top-0 left-0 w-screen h-screen bg-[white] flex items-center justify-center"
          >
            <center>
              {" "}
              <div className="menu">
                <div
                  className=" absolute top-4 right-6"
                  onClick={openNaveMobile}
                >
                  {" "}
                  <IoMdClose color="black" size={40} />
                </div>
                <ul className="flex-col justify-center items-center gap-6">
                  <li data-aos="fade-left" data-aos-duration="750">
                    <a
                      onClick={openNaveMobile}
                      className="text-black font-semibold hover:border-b hover:border-black border-transparent border-b-2 transition duration-300 text-2xl"
                      href="#about"
                    >
                      about
                    </a>
                  </li>
                  <li data-aos="fade-left" data-aos-duration="650">
                    <a
                      onClick={openNaveMobile}
                      className="text-black font-semibold hover:border-b hover:border-black border-transparent border-b-2 transition duration-300 text-2xl"
                      href="#services"
                    >
                      services
                    </a>
                  </li>
                  <li data-aos="fade-left" data-aos-duration="550">
                    <a
                      onClick={openNaveMobile}
                      className="text-black font-semibold hover:border-b hover:border-black border-transparent border-b-2 transition duration-300 text-2xl"
                      href="#portfolio"
                    >
                      portfolio
                    </a>
                  </li>

                  <li data-aos="fade-left" data-aos-duration="450">
                    <a
                      onClick={openNaveMobile}
                      className="text-black font-semibold hover:border-b hover:border-black border-transparent border-b-2 transition duration-300 text-2xl"
                      href="#Tech"
                    >
                      Tech
                    </a>
                  </li>
                  <li data-aos="fade-left" data-aos-duration="450">
                    <a
                      onClick={openNaveMobile}
                      className="text-black font-semibold hover:border-b hover:border-black border-transparent border-b-2 transition duration-300 "
                      href="#contact"
                    >
                      <button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-2xl font-semibold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                        Contact
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </center>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
