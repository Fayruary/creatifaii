import { memo, useState } from "react";
import { FaInstagram, FaTelegramPlane, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


/**
 * About Component
 * Displays personal profile information with a photo, bio, skill tags, experience history,
 * and a button to open a contact form popup.
 *
 * @component
 * @returns {JSX.Element} About section UI
 */
function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const tags = [
    "Fullstack Developer",
    "UI/UX Design",
    "Product Design",
    "Frontend Developer",
    "Backend Developer",
  ];

  const experiences = [
    ["UI/UX Designer", "Personal Projects", "2024"],
    ["Product Designer", "Personal Projects", "2024"],
    ["Frontend Developer", "Personal Projects", "2024"],
    ["Fullstack Developer", "Web Applications", "2025"],
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("submit jalan");

  try {
 

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log("status:", res.status);

    setSubmitted(true);
  } catch (err) {
    console.error("error:", err);
  }
};


  return (
    <section
      id="profile"
      className="bg-black text-white px-4 py-5"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Section - Profile Card */}
        <article
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg w-full lg:w-1/2"
          aria-label="Profile Information"
        >
          <div className="relative w-full overflow-hidden rounded-xl">
            <img
              src="/images/faii.png"
              alt="Portrait of Muhammad Fairuz Anwar"
              className="rounded-xl w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <span
              className="absolute bottom-2 left-2 bg-black/70 px-3 py-1 text-xs rounded-full text-green-400"
              role="status"
              aria-live="polite"
            >
              ● Available for work
            </span>
          </div>
          <h2 id="about-heading" className="mt-6 text-2xl font-semibold">
            Hello, I am <span className="text-gray-300">Muhammad Fairuz Anwar</span>
          </h2>
          <p className="text-gray-400 mt-2">
            UI/UX Designer & Fullstack Developer based in Indonesia.
          </p>

          {/* Connect Button */}
         <a
  className="inline-block mt-3
             px-1 py-5 font-medium 
            "
>
  Connect with me
</a>

            {/* Social Media Icons */}
<div className="mt-1 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3">
  <a
    href="https://www.instagram.com/fayruary/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 p-3 rounded-lg
               border border-white/10 bg-white/5
               hover:bg-white/10 transition"
  >
    <FaInstagram className="w-4 h-4 text-white/80" />
    <span className="text-xs text-white/80 font-medium">Instagram</span>
  </a>

  <a
    href="https://github.com/Fayruary"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 p-3 rounded-lg
               border border-white/10 bg-white/5
               hover:bg-white/10 transition"
  >
    <FaGithub className="w-4 h-4 text-white/80" />
    <span className="text-xs text-white/80 font-medium">GitHub</span>
  </a>

  <a
    href="https://x.com/fayruary"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 p-3 rounded-lg
               border border-white/10 bg-white/5
               hover:bg-white/10 transition"
  >
    <FaXTwitter className="w-4 h-4 text-white/80" />
    <span className="text-xs text-white/80 font-medium">Twitter</span>
  </a>

  <a
    href="https://t.me/anaravaa"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 p-3 rounded-lg
               border border-white/10 bg-white/5
               hover:bg-white/10 transition"
  >
    <FaTelegramPlane className="w-4 h-4 text-white/80" />
    <span className="text-xs text-white/80 font-medium">Telegram</span>
  </a>
</div>

        </article>

        {/* Right Section - Bio, Skills, Experience */}
        <article
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg w-full lg:w-1/2"
          aria-label="About Muhammad Fairuz Anwar"
        >
          <p className="mb-4 text-gray-300">
            I'm Muhammad Fairuz Anwar, a UI/UX Designer and Fullstack Developer based in Indonesia.
            I create intuitive designs and develop robust web applications to deliver 
            seamless digital experiences.
          </p>
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6" role="list">
            {tags.map((tag) => (
              <span
                key={tag}
                role="listitem"
                className="bg-black/50 border border-white/10 text-white text-sm px-3 py-1 rounded-full backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Experience Table */}
          <div className="space-y-3 text-sm mb-6" role="table" aria-label="Work experience">
            {experiences.map(([role, company, year]) => (
              <div
                key={`${role}-${company}-${year}`}
                role="row"
                className="flex justify-between bg-black/50 border border-white/10 px-4 py-3 rounded-xl text-gray-300 backdrop-blur-md"
              >
                <span role="cell">{role}</span>
                <span role="cell">{company}</span>
                <span role="cell">{year}</span>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
            id="contact"
            onSubmit={handleSubmit}
            className="bg-black/50 border border-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4"
          >
            <h3 className="text-lg font-semibold text-white">Contact Me</h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white resize-none h-32"
            ></textarea>
            <button
  type="submit"
  className="mt-2 bg-white hover:bg-gray-200 text-black font-semibold px-6 py-3 rounded-full transition transform active:scale-95"
>
  Send Message
</button>

            {submitted && <p className="text-green-400 mt-2">Message sent! Thank you.</p>}

          </form>
        </article>
      </div>
    </section>
  );
}

export default memo(About);
