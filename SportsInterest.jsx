import { useState } from "react";

export default function UserProfile() {
  const [gender, setGender] = useState("");
  const [awarenessLevel, setAwarenessLevel] = useState("");
  const [hasEquipment, setHasEquipment] = useState("");
  const [trainingMode, setTrainingMode] = useState("");

  return (
    <>
      <style>
        {`
          /* General Page Styling */
          body {
            background-color: #1a1a1a;
            font-family: Arial, sans-serif;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
          }

          /* Profile Box */
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          }

          .profile-box {
            background-color: #292929;
            padding: 50px;
            border-radius: 10px;
            width: 420px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          }

          /* Title */
          .title {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #4aa3df;
          }

          /* Form Group */
          .form-group {
            margin-bottom: 15px;
          }

          .form-group label {
            display: block;
            font-size: 16px;
            margin-bottom: 5px;
          }

          .form-group input,
          .form-group select {
            width: 100%;
            padding: 10px;
            font-size: 14px;
            border-radius: 8px;
            border: 1px solid #555;
            background-color: #444;
            color: white;
            outline: none;
          }

          .form-group input:focus,
          .form-group select:focus {
            border-color: #4aa3df;
          }

          /* Form Row */
          .form-row {
            display: flex;
            gap: 15px;
          }

          .form-row .form-group {
            flex: 1;
          }

          /* Radio Button Group */
          .radio-group {
            display: flex;
            gap: 15px;
          }

          /* Submit Button */
          .submit-btn {
            width: 100%;
            padding: 12px;
            background-color: #4aa3df;
            border: none;
            border-radius: 8px;
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s;
          }

          .submit-btn:hover {
            background-color: #3682b4;
          }
        `}
      </style>

      <div className="container">
        <div className="profile-box">
          <h2 className="title">User Profile</h2>

          {/* Full Name */}
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>

          {/* Date of Birth & Age */}
          <div className="form-row">
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input type="number" placeholder="Enter your age" />
            </div>
          </div>

          {/* Gender */}
          <div className="form-group">
            <label>Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>

          {/* Location (City & State) */}
          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input type="text" placeholder="Enter your city" />
            </div>
            <div className="form-group">
              <label>State</label>
              <input type="text" placeholder="Enter your state" />
            </div>
          </div>

          {/* Awareness Level of Sports */}
          <div className="form-group">
            <label>Awareness Level of Sports</label>
            <select value={awarenessLevel} onChange={(e) => setAwarenessLevel(e.target.value)}>
              <option value="">Select Awareness Level</option>
              <option value="never_played">Never Played</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* Access to Equipment */}
          <div className="form-group">
            <label>Do you have access to sports equipment?</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="yes"
                  checked={hasEquipment === "yes"}
                  onChange={() => setHasEquipment("yes")}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="no"
                  checked={hasEquipment === "no"}
                  onChange={() => setHasEquipment("no")}
                />{" "}
                No
              </label>
            </div>
          </div>

          {/* Preferred Training Mode */}
          <div className="form-group">
            <label>Preferred Training Mode</label>
            <select value={trainingMode} onChange={(e) => setTrainingMode(e.target.value)}>
              <option value="">Select Training Mode</option>
              <option value="self_training">Self-training</option>
              <option value="coaching">Coaching</option>
              <option value="academy">Academy</option>
            </select>
          </div>

          {/* Submit Button */}
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </>
  );
}
