import React, { useState } from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import image1 from "../assets/tropical-plante.jpg";
import image2 from "../assets/enara.jpg";
import image3 from "../assets/garet.png";
import image4 from "../assets/comptabilit.jpg";

import image5 from "../assets/centre de radiologie.jpg";
import image6 from "../assets/arde-el-khalige .jpg";
import image7 from "../assets/allopeartion.png";

export const projects = [
  {
    title: "Tropical plante",
    description:
      "Experience the lush world of Tropical Planet through our meticulously crafted website, powered by Next.js for seamless performance and stunning visuals. Explore the  diverse collection of plants with ease, and immerse yourself in the beauty of nature from the comfort of your screen",
    link: "https://www.tropicalplant.ma/",
    image: image1,
    stack: ["Nextjs", "Reactjs", "TailwindCSS"],
  },
  {
    title: "Garet",
    description:
      " Discover the world of mining with Garet Mining's expert services showcased on our meticulously designed website, powered by Next.js for seamless performance and captivating visuals. Navigate through our diverse range of mining solutions effortlessly and delve into the depths of industry excellence, all from the convenience of your screen.",
    link: "https://www.garetmining.com/en",
    image: image3,
    stack: ["Nextjs", "Reactjs", "TailwindCSS"],
  },
  {
    title: "Enara",
    description:
      "Explore the enara shop an Ecommerce website powered by wordpresse and explore the diffrent product in a semlesse and smooth way ",
    link: "https://enara.ma/",
    image: image2,
    stack: ["Wordpresse", "Php"],
  },
  {
    title: "Comptabilit",
    description:
      "Dive into the world of finance with Comptabilt, where our client showcases their expert financial services through a WordPress-powered website. Experience seamless browsing as you explore diverse financial solutions, ensuring a smooth journey towards your financial goals.",
    link: "https://comptabilit.ca/",
    image: image4,
    stack: ["Wordpresse", "Php"],
  },
  {
    title: "Radiologie-ouladhriz",
    description:
      "A wordpresse webiste for a radiologicalCentre de Radiologie Oulad Hriz reflects my expertise in WordPress development. Seamlessly crafted, it showcases the center's commitment to advanced medical imaging services, demonstrating my proficiency in delivering professional online solutions",
    link: "https://radiologie-ouladhriz.ma/",
    image: image5,
    stack: ["Wordpresse", "Php"],
  },
  {
    title: "Ardelkhaleej",
    description:
      "A WordPress website for Ard El Khaleej, where I assure my client that their perfumes will be showcased and sold seamlessly and efficiently, attracting more clients with a smooth and fast browsing experience.",
    link: "https://ardelkhaleej.com/",
    image: image6,
    stack: ["Wordpresse", "Php"],
  },
  {
    title: "Alloperation",
    description:
      "Experience seamless browsing with a full-stack powered by Next.js and Tailwind CSS for Franot. Leveraging Hygraph for exceptional data delivery, our platform ensures a smooth exploration of their services, setting a benchmark for efficient browsing experiences.",
    link: "https://ardelkhaleej.com/",
    image: image7,
    stack: ["Nextjs", "Reactjs", "Hygraph", "TailwindCSS"],
  },
];

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMoreProjects = () => {
    setVisibleProjects((prevCount) => prevCount + 3);
  };

  return (
    <div>
      <div id="portfolio" className="text-center">
        <h1 className="font-bold text-5xl text-black">My websites</h1>
      </div>
      <div className="max-w-7xl mt-10 mb-0 mx-auto px-8">
        <HoverEffect items={projects.slice(0, visibleProjects)} />{" "}
        {visibleProjects < projects.length && (
          <div className="text-center">
            <button
              onClick={loadMoreProjects}
              className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm font-semibold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
