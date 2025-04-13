import React, { useState } from "react";
import UserProfile from "./UserProfile";
import AthleteProfile from "./AthleteProfile";
import LoginPage from "./LoginPage";
import { FaUser, FaRunning, FaHome, FaBars } from "react-icons/fa";
import viratImage from "./assets/1.jpg";
import boltImage from "./assets/2.jpeg";
import serenaImage from "./assets/3.jpg";
import messiImage from "./assets/4.jpg";
import phelpsImage from "./assets/5.jpg";
import bilesImage from "./assets/6.jpg";

export default function App() {
  const [activeComponent, setActiveComponent] = useState("home");
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleMenuClick = (component) => {
    setActiveComponent(component);
    setShowMenu(false);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col md:flex-row text-gray-900 dark:text-white">

        {/* Sidebar (Desktop) */}
        <nav className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:to-gray-950 text-white p-6 w-full md:w-64 md:fixed md:h-full shadow-2xl hidden md:flex flex-col z-20">
          <div className="text-2xl font-bold mb-10 tracking-wide border-b pb-4 border-gray-600 flex justify-between items-center">
            🏆 Athlete Zone
            <button onClick={() => setDarkMode(!darkMode)} className="text-xl hover:scale-110 transition">
              {darkMode ? "🌞" : "🌙"}
            </button>
          </div>
          <ul className="space-y-4 w-full">
            {[
              { name: "Home", icon: <FaHome />, key: "home" },
              { name: "Login", icon: <FaUser />, key: "login" },
              { name: "User Profile", icon: <FaUser />, key: "user" },
              { name: "Athlete Profile", icon: <FaRunning />, key: "athlete" },
            ].map(({ name, icon, key }) => (
              <li key={key}>
                <button
                  className={`flex items-center space-x-3 p-3 w-full rounded-lg transition-all duration-300 hover:bg-gray-700 dark:hover:bg-gray-600 ${
                    activeComponent === key ? "bg-gray-700 dark:bg-gray-600" : ""
                  }`}
                  onClick={() => handleMenuClick(key)}
                >
                  <span className="text-xl transition-transform duration-300 hover:rotate-12 hover:scale-110">
                    {icon}
                  </span>
                  <span className="text-md font-medium">{name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Header */}
        <div className="md:hidden bg-gray-900 dark:bg-gray-800 text-white p-4 flex justify-between items-center z-30">
          <span className="text-lg font-bold flex items-center gap-2">
            🏆 Athlete Zone
          </span>
          <div className="flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="text-xl hover:scale-110 transition">
              {darkMode ? "🌞" : "🌙"}
            </button>
            <button onClick={() => setShowMenu(!showMenu)} className="text-2xl">
              <FaBars />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {showMenu && (
          <div className="md:hidden bg-gray-800 text-white p-4 space-y-3 absolute top-16 left-0 w-full z-20 shadow-lg">
            {[
              { label: "🏠 Home", key: "home" },
              { label: "🔑 Login", key: "login" },
              { label: "👤 User Profile", key: "user" },
              { label: "🏃‍♂️ Athlete Profile", key: "athlete" },
            ].map(({ label, key }) => (
              <button
                key={key}
                className="w-full text-left hover:text-gray-400"
                onClick={() => handleMenuClick(key)}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {/* Main Content */}
        <div
          className={`transition-all duration-300 p-4 w-full ${
            showMenu ? "mt-60" : "mt-4"
          } md:ml-64 md:w-[calc(100%-16rem)] flex justify-center`}
        >
          <div className="w-full max-w-4xl">
            {activeComponent === "home" && <HomePage />}
            {activeComponent === "login" && (
              <div className="w-full max-w-3xl">
                <LoginPage />
              </div>
            )}
            {activeComponent === "user" && (
              <div className="w-full max-w-3xl">
                <UserProfile />
              </div>
            )}
            {activeComponent === "athlete" && (
              <div className="w-full max-w-4xl">
                <AthleteProfile />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  const athletes = [
    {
      name: "Virat Kohli",
      sport: "Cricket",
      story:
        "Virat Kohli's journey from a young aspiring cricketer to an international legend is a testament to hard work and perseverance...",
      image: viratImage,
    },
    {
      name: "Usain Bolt",
      sport: "Athletics",
      story:
        "Usain Bolt, known as the fastest man on Earth, electrified the world with his incredible speed...",
      image: boltImage,
    },
    {
      name: "Serena Williams",
      sport: "Tennis",
      story:
        "Serena Williams is not just a champion but a revolutionary force in women's tennis...",
      image: serenaImage,
    },
    {
      name: "Lionel Messi",
      sport: "Football",
      story:
        "Lionel Messi, a magician with the ball, has dazzled fans worldwide with his extraordinary dribbling...",
      image: messiImage,
    },
    {
      name: "Michael Phelps",
      sport: "Swimming",
      story:
        "Michael Phelps' unparalleled dominance in swimming has made him the most decorated Olympian...",
      image: phelpsImage,
    },
    {
      name: "Simone Biles",
      sport: "Gymnastics",
      story:
        "Simone Biles has revolutionized gymnastics with her incredible power, precision, and fearless execution...",
      image: bilesImage,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-8 p-4 sm:p-6">
      {athletes.map((athlete, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 mb-8 transition transform hover:scale-105 duration-300 ease-in-out w-full`}
        >
          <img
            src={athlete.image}
            alt={athlete.name}
            className="w-full sm:w-64 h-64 object-cover rounded-lg shadow-md mb-4 md:mb-0"
          />
          <div className="w-full md:w-3/4 md:px-6 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
              {athlete.name}
            </h2>
            <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400">
              {athlete.sport}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              {athlete.story}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
