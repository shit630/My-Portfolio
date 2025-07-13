import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((res) => {
        alert("Message Sent!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => alert("Opps! Something went wrong. Please try again"));
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In touch
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  required
                  placeholder="Name..."
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                />
              </div>

              <div className="relative">
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  required
                  placeholder="example@gmail.com"
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                />
              </div>

              <div className="relative">
                <textarea
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  type="message"
                  name="message"
                  id="message"
                  required
                  value={formData.message}
                  rows={5}
                  placeholder="Your message..."
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                />
              </div>

              <button
                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </h2>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
