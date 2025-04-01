import React, { useState } from "react";

export default function AthleteProfile() {
  const [sport, setSport] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [skillLevel, setSkillLevel] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-6">
      <div className="w-full max-w-md bg-gray-900 text-white p-6 rounded-lg shadow-lg sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <h2 className="text-2xl font-bold text-blue-400 text-center mb-4">🏆 Athlete Profile</h2>

        {/* Preferred Sport */}
        <label className="block text-sm font-semibold mb-1">Preferred Sport</label>
        <select className="w-full p-2 rounded bg-gray-700 text-white mb-3" value={sport} onChange={(e) => setSport(e.target.value)}>
          <option value="">Select Sport</option>
          <option value="cricket">Cricket</option>
          <option value="football">Football</option>
          <option value="badminton">Badminton</option>
        </select>

        {/* Height & Weight */}
        <div className="flex flex-col sm:flex-row sm:space-x-3">
          <div className="w-full sm:w-1/2">
            <label className="block text-sm font-semibold mb-1">Height (cm)</label>
            <input className="w-full p-2 rounded bg-gray-700 text-white" type="number" placeholder="Enter height" />
          </div>
          <div className="w-full sm:w-1/2 mt-3 sm:mt-0">
            <label className="block text-sm font-semibold mb-1">Weight (kg)</label>
            <input className="w-full p-2 rounded bg-gray-700 text-white" type="number" placeholder="Enter weight" />
          </div>
        </div>

        {/* Body Type & Skill Level */}
        <label className="block text-sm font-semibold mt-3">Body Type</label>
        <select className="w-full p-2 rounded bg-gray-700 text-white mb-3" value={bodyType} onChange={(e) => setBodyType(e.target.value)}>
          <option value="">Select Body Type</option>
          <option value="slim">Slim</option>
          <option value="muscular">Muscular</option>
          <option value="heavy">Heavy</option>
        </select>

        <label className="block text-sm font-semibold">Skill Level</label>
        <select className="w-full p-2 rounded bg-gray-700 text-white mb-3" value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)}>
          <option value="">Select Skill Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="professional">Professional</option>
        </select>

        {/* Training Center */}
        <label className="block text-sm font-semibold">Current Training Center</label>
        <input className="w-full p-2 rounded bg-gray-700 text-white mb-3" type="text" placeholder="Enter training center (if any)" />

        {/* Performance Data */}
        <label className="block text-sm font-semibold">Performance Data</label>
        <textarea className="w-full p-2 rounded bg-gray-700 text-white mb-3" placeholder="Enter past achievements, records, tournaments" rows="3"></textarea>

        {/* Injury History */}
        <label className="block text-sm font-semibold">Injury History</label>
        <textarea className="w-full p-2 rounded bg-gray-700 text-white mb-3" placeholder="Mention any past injuries" rows="3"></textarea>

        {/* Submit Button */}
        <button className="w-full p-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded">Submit</button>
      </div>
    </div>
  );
}
