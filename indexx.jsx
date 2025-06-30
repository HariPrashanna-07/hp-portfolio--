import { motion } from "framer-motion";
import { useEffect } from "react";

export default function PortfolioAbout() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const projectDetails = [
    {
      title: "Spotify Playlist Downloader",
      description:
        "A Streamlit web app that lets you input any Spotify playlist URL and automatically downloads the songs as MP3s by searching them on YouTube. It uses Spotipy for Spotify API access, yt_dlp for downloading, and zips all songs for easy download. Built with Python, Streamlit, and deployed online.",
    },
    {
      title: "Smart Irrigation System",
      description:
        "A wireless ESP32-based smart irrigation system with NRF24L01 modules. It reads soil moisture data remotely, automates watering when dry, and includes a web dashboard for manual control and data visualization. Designed for farmers using solar power and real-time control without Async libraries.",
    },
    {
      title: "Ambulance Traffic Control",
      description:
        "An AI-enabled traffic signal system that detects ambulances using a YOLOv8 object detection model and camera feed. When an ambulance is 100 meters away from the intersection, it turns green for that road and red for others, helping save lives. Built using Python, OpenCV, YOLOv8, and ESP32.",
    },
  ];

  const badgeClass =
    "flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-700 to-red-500 text-white rounded-full shadow-md hover:scale-105 transition-transform";

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-black to-red-900 text-white px-6 py-10 font-sans"
      id="top"
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-12 text-sm text-red-300">
        <span className="font-bold text-red-500">👨‍💻 Hari</span>
        <div className="space-x-4">
          <a href="#top" className="hover:text-white">Home</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="/Hari_Resume.pdf" className="hover:text-white" download>Resume</a>
        </div>
      </nav>

      {/* Hero */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-8 text-red-500"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Hari Prashanna 👋
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl leading-relaxed max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I'm a curious engineer with a spark for solving real-world problems using tech.
        Currently an undergrad in Electrical & Electronics Engineering (EEE) at Sri Eshwar College, I blend circuits with code to build meaningful solutions — from smart irrigation systems 🌱 to ambulance-detecting traffic lights 🚑.
        <br /><br />
        💻 I build Python apps, ESP32 hardware projects, and AI-integrated systems. I’ve explored YOLO, Firebase, Streamlit, Tailwind, and more.
        <br /><br />
        Outside of code? I chant, I think deep, and I never stop learning.
        <br /><br />
        Let's build the future — one bug, one byte, and one breakthrough at a time.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-10 flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a href="#projects" className={badgeClass}>🚀 View My Projects</a>
        <a href="https://leetcode.com/u/HariPrashannaV/" target="_blank" className={badgeClass}>💻 LeetCode</a>
        <a href="https://www.linkedin.com/in/hari-prashanna-v-725790333/" target="_blank" className={badgeClass}>🔗 LinkedIn</a>
        <a href="/Hari_Resume.pdf" download className={badgeClass}>📄 Download Resume</a>
      </motion.div>

      {/* Projects Section */}
      <div id="projects" className="mt-24">
        <motion.h2
          className="text-4xl font-bold text-red-400 mb-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <a
          href="#top"
          className="inline-block mb-6 text-sm text-red-300 underline hover:text-red-100"
        >
          ← Back to Home
        </a>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectDetails.map((proj, i) => (
            <motion.div
              key={i}
              className="bg-black bg-opacity-40 border border-red-800 p-6 rounded-xl hover:scale-105 transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-xl font-bold text-red-300 mb-2">{proj.title}</h3>
              <p className="text-sm text-white/90">{proj.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-24 text-center text-sm text-red-400">
        © 2025 Hari | Built with React, TailwindCSS & Framer Motion 🛠️
      </footer>
    </div>
  );
}
