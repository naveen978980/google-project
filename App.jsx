import React, { useState } from "react";
import UserProfile from "./UserProfile";
import AthleteProfile from "./AthleteProfile";
import { FaUser, FaRunning } from "react-icons/fa";

export default function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Select Your Profile</h1>
      
      {/* Toggle Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 shadow-md ${
            activeComponent === "user" ? "bg-blue-600" : "bg-gray-500 hover:bg-gray-600"
          }`}
          onClick={() => setActiveComponent("user")}
        >
          <FaUser className="text-lg" /> <span>User Profile</span>
        </button>
        
        <button
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 shadow-md ${
            activeComponent === "athlete" ? "bg-green-600" : "bg-gray-500 hover:bg-gray-600"
          }`}
          onClick={() => setActiveComponent("athlete")}
        >
          <FaRunning className="text-lg" /> <span>Athlete Profile</span>
        </button>
      </div>

      {/* Profile Component Display */}
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        {activeComponent === "user" && (
          <div className="animate-fade-in">
            <UserProfile />
          </div>
        )}
        {activeComponent === "athlete" && (
          <div className="animate-fade-in">
            <AthleteProfile />
          </div>
        )}
      </div>
    </div>
  );
}