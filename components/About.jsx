import { memo, useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
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
          <button
            className="mt-6 bg-gradient-to-r from-neutral-800 to-black px-6 py-3 border border-gray-700 rounded-full font-medium hover:opacity-90 transition"
            onClick={() =>
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }
          >
            Connect with me
          </button>
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
              className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none h-32"
            ></textarea>
            <button
              type="submit"
              className="mt-2 bg-white hover:bg-gray-200 text-black font-semibold px-6 py-3 rounded-full transition"
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
