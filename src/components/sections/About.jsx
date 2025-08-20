import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = [
    [
      "HTML5",
      "https://icones.pro/wp-content/uploads/2021/05/icone-html-orange.png",
    ],
    [
      "CSS",
      "https://w7.pngwing.com/pngs/473/634/png-transparent-css-hd-logo-thumbnail.png",
    ],
    [
      "JavaScript",
      "https://images.seeklogo.com/logo-png/25/2/javascript-logo-png_seeklogo-255387.png",
    ],
    [
      "React",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHR_P-7OxbDx2-EpUFbKc24Ee2jKJYms_gUw&s",
    ],
    [
      "TypeScript",
      "https://e7.pngegg.com/pngimages/616/528/png-clipart-angularjs-typescript-javascript-vue-js-others-blue-angle-thumbnail.png",
    ],
    [
      "TailwindCSS",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s",
    ],
    [
      "Chakra UI",
      "https://img.icons8.com/?size=512&id=r9QJ0VFFrn7T&format=png",
    ],
  ];
  const backendSkills = [
    [
      "Node.js",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s",
    ],
    [
      "Express",
      "https://e7.pngegg.com/pngimages/846/87/png-clipart-website-development-express-js-node-js-javascript-npm-vue-js-text-trademark-thumbnail.png",
    ],
    [
      "MongoDB",
      "https://w7.pngwing.com/pngs/429/921/png-transparent-mongodb-plain-wordmark-logo-icon.png",
    ],
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web sites
              and creating innovative solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, i) => (
                    <div key={i} className="flex">
                      <img
                        className="h-5 w-5"
                        src={frontendSkills[i][1]}
                        alt="frontend logo"
                      />
                      <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        {frontendSkills[i][0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, i) => (
                    <div className="flex" key={i}>
                      <img
                        className="h-5 w-5"
                        src={backendSkills[i][1]}
                        alt="backend logo"
                      />
                      <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        {backendSkills[i][0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Bachelor of Technology</strong> - Uttarakhand
                  Technical University (2020-2024)
                </li>
                <li>
                  <strong>Relevant Coursework: </strong> Computer Science, Data
                  Structures, Web Development, Coputer Networking...
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Experience</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    Learn Software Engineering from Masai School(2024 - 2025)
                  </strong>{" "}
                  - Learn full stack web devlopment and data structure and
                  algorithm with hands on experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
