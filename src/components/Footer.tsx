import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-black sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Mouad Elattar
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex justify-center  items-center">
          <li>
            <a href="https://www.linkedin.com/in/mouad-el-attar-384096225/">
              <FaLinkedin size={30} className=" pl-2" />
            </a>
          </li>
          <li>
            <a href="https://github.com/MOUAD-EL01">
              <FaGithub size={30} className=" pl-2" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
