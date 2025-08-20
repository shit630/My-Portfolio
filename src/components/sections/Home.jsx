import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  const handleResumeClick = (e) => {
    e.preventDefault();

    const resumeUrl =
      "https://drive.google.com/uc?export=download&id=1Bniv6xHKNKg6bTFU_GIujjwm_inCxHF0";

    window.open(
      "https://drive.google.com/file/d/1Bniv6xHKNKg6bTFU_GIujjwm_inCxHF0/view?usp=sharing",
      "_blank"
    );

    // 2. Trigger download
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
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <div className="flex items-center justify-center">
            <div className="h-[200px] w-[200px]">
              <img className="rounded-full" src="/Profile.jpg" alt="" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Soumen Shit
          </h1>
          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleResumeClick}
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] cursor-pointer"
            >
              Resume
            </button>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
