import React from "react";
import RevealOnScroll from "../RevealOnScroll";

// Import icons
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiRedux,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiChakraui,
  SiFirebase,
  SiNetlify,
} from "react-icons/si";

const techIcons = {
  React: <FaReact className="text-cyan-400 text-2xl" />,
  Redux: <SiRedux className="text-purple-500 text-2xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-2xl" />,
  MongoDB: <SiMongodb className="text-green-400 text-2xl" />,
  "Express.js": <SiExpress className="text-gray-300 text-2xl" />,
  JavaScript: <SiJavascript className="text-yellow-400 text-2xl" />,
  HTML5: <FaHtml5 className="text-orange-500 text-2xl" />,
  CSS3: <FaCss3Alt className="text-blue-500 text-2xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500 text-2xl" />,
  "Chakra UI": <SiChakraui className="text-teal-400 text-2xl" />,
  Firebase: <SiFirebase className="text-yellow-500 text-2xl" />,
  Git: <FaGitAlt className="text-orange-600 text-2xl" />,
  GitHub: <FaGithub className="text-gray-300 text-2xl" />,
  Netlify: <SiNetlify className="text-blue-400 text-2xl" />,
};

const projects = [
  {
    title: "Nykaa Clone",
    img: "/niyka.png",
    desc: "An E-commerce web application built using HTML, CSS, JavaScript and Firebase for product inventory management.",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase", "GitHub", "Netlify"],
    live: "https://nyk-clone.netlify.app/",
    code: "https://github.com/akash9198/B42_WEB_023_Javascript-Juggernauts",
  },
  {
    title: "Flipkart Clone",
    img: "/flipkart.png",
    desc: "An E-commerce web application with Firebase database, designed with HTML, CSS and JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase", "GitHub", "Netlify"],
    live: "https://sprightly-frangipane-f468cb.netlify.app/",
    code: "https://github.com/shit630/B43_WEB_037_Browser-Breakers?tab=readme-ov-file",
  },
  {
    title: "Anti-Resume Platform",
    img: "/antiResume.png",
    desc: "A skill-first recruitment system where companies create tests and candidates prove their skills instead of resumes.",
    tech: [
      "React",
      "Firebase",
      "JavaScript",
      "HTML5",
      "CSS3",
      "GitHub",
      "Netlify",
    ],
    live: "https://deft-dieffenbachia-fdee24.netlify.app/",
    code: "https://github.com/shit630/B43_WEB_037_Browser-Breakers?tab=readme-ov-file",
  },
  {
    title: "Meals Master",
    img: "/mealMaster.png",
    desc: "A responsive meal browsing application built with modern tech stack for clean UI and fast navigation.",
    tech: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Firebase",
      "GitHub",
      "Netlify",
    ],
    live: "https://meals-master.vercel.app/",
    code: "https://github.com/jasminekeshari/Meals-Master?tab=readme-ov-file",
  },
];

const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-xl mb-4 w-full object-cover h-48"
                />
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>

                {/* Tech Icons */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} title={tech}>
                      {techIcons[tech]}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    🔗 Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    💻 Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Project;
