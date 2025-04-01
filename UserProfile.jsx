import { useState } from "react";

export default function UserProfile() {
  const [gender, setGender] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white p-6 w-full h-screen">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <h2 className="text-2xl font-bold text-blue-400 text-center mb-4">User Profile</h2>

        {/* Full Name */}
        <div className="mb-3">
          <label className="block text-sm font-semibold">Full Name</label>
          <input className="w-full p-2 rounded bg-gray-700 text-white" type="text" placeholder="Enter your full name" />
        </div>

        {/* Date of Birth & Age */}
        <div className="flex flex-col sm:flex-row sm:space-x-3">
          <div className="w-full sm:w-1/2">
            <label className="block text-sm font-semibold">Date of Birth</label>
            <input className="w-full p-2 rounded bg-gray-700 text-white" type="date" />
          </div>
          <div className="w-full sm:w-1/2 mt-3 sm:mt-0">
            <label className="block text-sm font-semibold">Age</label>
            <input className="w-full p-2 rounded bg-gray-700 text-white" type="number" placeholder="Enter your age" />
          </div>
        </div>

        {/* Gender */}
        <div className="mt-3">
          <label className="block text-sm font-semibold">Gender</label>
          <select className="w-full p-2 rounded bg-gray-700 text-white" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Email */}
        <div className="mt-3">
          <label className="block text-sm font-semibold">Email</label>
          <input className="w-full p-2 rounded bg-gray-700 text-white" type="email" placeholder="Enter your email" />
        </div>

        {/* Phone Number */}
        <div className="mt-3">
          <label className="block text-sm font-semibold">Phone Number</label>
          <input className="w-full p-2 rounded bg-gray-700 text-white" type="tel" placeholder="Enter your phone number" />
        </div>

        {/* Location (City & State) */}
        <div className="flex flex-col sm:flex-row sm:space-x-3 mt-3">
          <div className="w-full sm:w-1/2">
            <label className="block text-sm font-semibold">City</label>
            <input className="w-full p-2 rounded bg-gray-700 text-white" type="text" placeholder="Enter your city" />
          </div>
          <div className="w-full sm:w-1/2 mt-3 sm:mt-0">
            <label className="block text-sm font-semibold">State</label>
            <input className="w-full p-2 rounded bg-gray-700 text-white" type="text" placeholder="Enter your state" />
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full p-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded">Submit</button>
      </div>
    </div>
  );
}