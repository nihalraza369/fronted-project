"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <header className="w-full p-6 flex justify-between items-center bg-gray-900 shadow-md">
        <h1 className="text-3xl font-bold text-blue-400">Nihal Raza</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#about" className="hover:text-blue-300">About</Link></li>
            <li><Link href="#projects" className="hover:text-blue-300">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-blue-300">Contact</Link></li>
          </ul>
        </nav>
      </header>
      
      {/* Hero Section */}
      <motion.section 
        className="h-screen flex flex-col justify-center items-center text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2 className="text-5xl font-bold text-blue-400"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          Nihal Raza
        </motion.h2>
        <p className="text-lg mt-2">🚀 Full Stack Developer | AI Enthusiast | DevOps Learner</p>
        <motion.button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore My Work
        </motion.button>
      </motion.section>
      
      {/* Social Media Icons */}
      <motion.div 
        className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <a href="#" className="text-2xl text-white hover:text-blue-400"><FaInstagram /></a>
        <a href="#" className="text-2xl text-white hover:text-blue-400"><FaFacebook /></a>
        <a href="#" className="text-2xl text-white hover:text-blue-400"><FaGithub /></a>
        <a href="#" className="text-2xl text-white hover:text-blue-400"><FaLinkedin /></a>
        <a href="#" className="text-2xl text-white hover:text-blue-400"><FaTwitter /></a>
      </motion.div>
    </div>
  );
}
