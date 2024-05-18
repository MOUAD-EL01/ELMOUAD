import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import image1 from "../assets/CSharp.svg";
import image2 from "../assets/Java.svg";
import image3 from "../assets/TypeScript.svg";
import image4 from "../assets/JS.svg";
import image5 from "../assets/net.png";
import image6 from "../assets/react.svg";
import image7 from "../assets/next.svg";
import image8 from "../assets/node.png";
import image9 from "../assets/express.png";
import image10 from "../assets/taiwlind.svg";
import image11 from "../assets/mysql.svg";
import image12 from "../assets/mongo.svg";
import image13 from "../assets/sqls.svg";
import image14 from "../assets/postgras.svg";
import image15 from "../assets/Git.svg";
type Techs = {
  image: string; // Assuming image is a URL to the image
  name: string;
};
const Tech = () => {
  return (
    <>
      <h1 id="Tech" className="font-bold text-5xl text-black text-center py-5">
        My Techstack
      </h1>
      <div>
        {renderTechSection(Programming, "Programming")}
        {renderTechSection(Framework, "Frameworks")}
        {renderTechSection(Databases, "Databases")}
        {renderTechSection(VersionControl, "Version Control")}
      </div>
    </>
  );
};

const renderTechSection = (items: Techs[], sectionTitle: string) => (
  <div className="py-4 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
    <h2 className="font-bold text-2xl py-4 text-black">{sectionTitle}</h2>
    <InfiniteMovingCards items={items} direction="right" speed="slow" />
  </div>
);

export default Tech;
const Programming = [
  {
    image: image1,
    name: "C#",
  },
  {
    image: image2,
    name: "Java",
  },
  {
    image: image3,
    name: "Typescripte",
  },
  {
    image: image4,
    name: "JS",
  },
];
const Framework = [
  {
    image: image5,
    name: "aspC#",
  },
  {
    image: image6,
    name: "React",
  },
  {
    image: image7,
    name: "nextjs",
  },
  {
    image: image8,
    name: "nodejs",
  },
  {
    image: image9,
    name: "nodejs",
  },
  {
    image: image10,
    name: "tailwind",
  },
];
const Databases = [
  {
    image: image11,
    name: "mysql",
  },
  {
    image: image12,
    name: "mongo",
  },
  {
    image: image13,
    name: "sqls",
  },
  {
    image: image14,
    name: "postg",
  },
];
const VersionControl = [
  {
    image: image15,
    name: "git",
  },
];
