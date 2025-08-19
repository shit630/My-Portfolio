import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Nykaa Clone</h3>
              <img className="rounded" src="/niyka.png" alt="project1" />

              <p className="text-gray-400 mb-4">
                Build E-commerce web application using HTML, CSS, JavaScript and
                used firebase for database customizable product inventory.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5", "CSS", "JavaScript", "Firebase"].map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-around items-center">
                <a
                  target="blank"
                  href="https://nyk-clone.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  target="blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  href="https://github.com/akash9198/B42_WEB_023_Javascript-Juggernauts"
                >
                  Source Code →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Flipkart Clone</h3>
              <img className="rounded" src="/flipkart.png" alt="project 2" />
              <p className="text-gray-400 mb-4">
                Build E-commerce web application using HTML, CSS, JavaScript and
                used firebase for database customizable product inventory.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5", "CSS", "JavaScript", "Firebase"].map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-around items-center">
                <a
                  target="blank"
                  href="https://sprightly-frangipane-f468cb.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  target="blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  href="https://github.com/shit630/B43_WEB_037_Browser-Breakers?tab=readme-ov-file"
                >
                  Source Code →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Anti-Resume Platform</h3>
              <img className="rounded" src="/antiResume.png" alt="project3" />
              <p className="text-gray-400 mb-4">
                Anti-Resume Platform is a skill-first recruitment system where
                hiring decisions are based on real-world capabilities instead of
                traditional resumes. Companies can create custom tests, and
                candidates can browse and take any test that matches their skill
                set.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5", "CSS", "JavaScript", "React", "Firebase"].map(
                  (tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-around items-center">
                <a
                  target="blank"
                  href="https://deft-dieffenbachia-fdee24.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  target="blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  href="https://github.com/shit630/B43_WEB_037_Browser-Breakers?tab=readme-ov-file"
                >
                  Source Code →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Meals Master</h3>
              <img className="rounded" src="/mealMaster.png" alt="project4" />
              <p className="text-gray-400 mb-4">
                Meals Master is a beautiful and responsive meal browsing
                application where users can explore a wide variety of dishes. It
                offers a clean UI, fast navigation, and mobile-friendly design,
                built using modern front-end technologies.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "HTML5",
                  "CSS",
                  "JavaScript",
                  "React",
                  "typeSctipt",
                  "Tailwind CSS",
                  "Firebase",
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-around items-center">
                <a
                  target="blank"
                  href="https://meals-master.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  target="blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  href="https://github.com/jasminekeshari/Meals-Master?tab=readme-ov-file"
                >
                  Source Code →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Project;
