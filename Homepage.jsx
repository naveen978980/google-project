import React from "react";
import viratImage from "./assets/1.jpg";
import boltImage from "./assets/2.jpeg";
import serenaImage from "./assets/3.jpg";
import messiImage from "./assets/4.jpg";
import phelpsImage from "./assets/5.jpg";
import bilesImage from "./assets/6.jpg";

const athletes = [
  {
    name: "Virat Kohli",
    sport: "Cricket",
    story: "Virat Kohli's journey from a young aspiring cricketer to an international legend is a testament to hard work and perseverance. With a relentless drive for excellence, he has shattered records, led India to historic victories, and inspired a generation with his leadership and passion for the game.",
    image: viratImage
  },
  {
    name: "Usain Bolt",
    sport: "Athletics",
    story: "Usain Bolt, known as the fastest man on Earth, electrified the world with his incredible speed. His record-breaking performances in the 100m and 200m sprints cemented his legacy as a legend in track and field. His showmanship, dedication, and dominance redefined what it meant to be a sprinter.",
    image: boltImage
  },
  {
    name: "Serena Williams",
    sport: "Tennis",
    story: "Serena Williams is not just a champion but a revolutionary force in women's tennis. With 23 Grand Slam singles titles, her strength, resilience, and mental fortitude have set new standards in the sport. Off the court, she has inspired millions through her advocacy for equality and empowerment.",
    image: serenaImage
  },
  {
    name: "Lionel Messi",
    sport: "Football",
    story: "Lionel Messi, a magician with the ball, has dazzled fans worldwide with his extraordinary dribbling and goal-scoring abilities. Overcoming early challenges, he rose to become a global icon, winning multiple Ballon d'Or awards and leading Argentina to World Cup glory. His humility and brilliance make him a true legend.",
    image: messiImage
  },
  {
    name: "Michael Phelps",
    sport: "Swimming",
    story: "Michael Phelps' unparalleled dominance in swimming has made him the most decorated Olympian in history with 23 gold medals. His dedication, resilience, and commitment to excellence have redefined competitive swimming, leaving behind an inspiring legacy for future generations.",
    image: phelpsImage
  },
  {
    name: "Simone Biles",
    sport: "Gymnastics",
    story: "Simone Biles has revolutionized gymnastics with her incredible power, precision, and fearless execution. Her groundbreaking skills and multiple Olympic gold medals have set a new benchmark in the sport. Beyond her athletic achievements, she is a strong advocate for mental health and athlete well-being.",
    image: bilesImage
  }
];

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto mt-8 p-6">
      {athletes.map((athlete, index) => (
        <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center bg-white shadow-lg rounded-lg p-8 mb-8 transition transform hover:scale-105 duration-300 ease-in-out w-full`}>
          <img 
            src={athlete.image} 
            alt={athlete.name} 
            className="w-48 h-48 object-cover rounded-lg shadow-md" 
          />
          <div className="w-full p-6 space-y-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{athlete.name}</h2>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">{athlete.sport}</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-0 w-full">{athlete.story}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
