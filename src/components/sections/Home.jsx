import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  const handleResumeClick = (e) => {
    e.preventDefault();

    const resumeUrl =
      "https://drive.google.com/uc?export=download&id=1Bniv6xHKNKg6bTFU_GIujjwm_inCxHF0";

    window.open(
      "https://drive.google.com/file/d/1Bniv6xHKNKg6bTFU_GIujjwm_inCxHF0/view?usp=sharing",
      "_blank"
    );

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Soumen_Shit_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 md:px-12 bg-gradient-to-b from-gray-900 via-gray-950 to-black"
    >
      <RevealOnScroll>
        <div className="text-center z-10 max-w-3xl">
          {/* Profile Image */}
          <div className="flex items-center justify-center mb-5 mt-15">
            <div className="h-[180px] w-[180px] md:h-[220px] md:w-[220px] rounded-full overflow-hidden border-4 border-blue-500/40 shadow-xl hover:scale-105 transition duration-300">
              <img
                className="h-full w-full object-cover"
                src="/Profile.jpg"
                alt="Soumen Shit"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent leading-tight">
            Hi, I'm <span className="text-blue-500">Soumen Shit</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            A passionate{" "}
            <span className="text-blue-400">Full-Stack Developer </span>
            who loves building clean, scalable, and user-friendly web
            applications. I aim to craft solutions that combine performance with
            great user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={handleResumeClick}
              className="bg-blue-500 text-white py-3 px-8 rounded-lg font-medium shadow-lg 
                         hover:bg-blue-600 hover:scale-105 transition transform duration-300 cursor-pointer"
            >
              📄 Resume
            </button>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-400 py-3 px-8 rounded-lg font-medium 
                         hover:bg-blue-500/10 hover:scale-105 transition transform duration-300"
            >
              ✉️ Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 text-gray-400 text-2xl">
            <a
              href="https://github.com/shit630"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/soumen-software-enginner/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:soumenshit907@gmail.com"
              className="hover:text-red-400 hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
