import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      title: "Full Stack Development in MERN",
      school: "Masai School",
      duration: "Nov 2024 - Present",
      description:
        "Currently enrolled in a full-time, intensive Full Stack Web Development program at Masai School, focusing on the MERN stack (MongoDB, Express, React, Node.js). Gaining real-world experience through project-based learning and collaborative coding.",
    },
    {
      title: "Bachelor of Technology in Computer Science",
      school: "Roorkee Institute of Technology",
      duration: "2020 - 2024",
      description:
        "Graduated with 68.5%, focusing on programming fundamentals, algorithms, and data structures. Strengthened core concepts in computer science through academic and mini-project work.",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <RevealOnScroll>
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Education
          </h2>

          <div className="relative border-l border-blue-500/30 pl-6">
            {educationData.map((edu, index) => (
              <div key={index} className="mb-12 relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <FaGraduationCap size={14} />
                </div>

                {/* Card */}
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all shadow-md hover:shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {edu.title}
                  </h3>
                  <h4 className="text-blue-400 font-medium">{edu.school}</h4>
                  <p className="text-sm text-gray-400 mb-3">{edu.duration}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Education;
