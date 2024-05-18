import React from "react";
import { Meteors } from "../ui/meteors";

const Service = () => {
  const Services = [
    {
      text: "🌐 As a Front-End Developer, I revel in the art of translating design concepts into interactive and visually stunning websites. My proficiency in HTML, CSS, and, most importantly, JavaScript, allows me to create seamless, user-friendly interfaces that leave a lasting impression. From responsive designs to dynamic web applications, I thrive on turning ideas into engaging digital experiences. my Front-End tech-stack: Html - Css - Javascript - Reactjs - Bootstrap - Tailwind - TypeScript",
      name: "Front-End Development",
      title: "A Dream Within a Dream",
    },
    {
      text: "💡 On the Back-End, I architect and implement robust server-side solutions that form the backbone of web applications. Database management, server logic, and ensuring optimal performance – these are the challenges I embrace to ensure a seamless user experience. my Back-End tech-stack: Java - C# - Nodejs - Expressjs - SQLserver - Mysql - Asp.netCore",
      name: "Back-End Development",
      title: "A Dream Within a Dream",
    },
    {
      text: "💻 I'm a WordPress developer specializing in creating various types of websites,  e-commerce sites, blogs, portfolios, and more. I leverage a diverse range of plugins and themes to tailor each project to the specific needs of my clients or employer, ensuring their satisfaction and success.",
      name: "Wordpress",
      title: "A Dream Within a Dream",
    },
    {
      text: "💻 Troubleshooting and debugging are second nature to me, and I pride myself on my ability to identify and resolve issues efficiently. No bug is too elusive, and no problem too intricate to deter my enthusiasm for finding elegant solutions.",
      name: "Problem solving",
      title: "A Dream Within a Dream",
    },
  ];

  return (
    <div id="services" className="container my-24">
      <h1 className="font-bold text-5xl pb-4 mb-10 text-center text-black">
        What can I do?
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Services.map((service, index) => (
          <div>
            <div
              key={index}
              className="p-4 bg-white rounded shadow px-10 border-2 border-black  ml-4 mr-4"
            >
              <h2 className="font-bold text-lg">{service.name}</h2>
              <p className="text-sm">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
