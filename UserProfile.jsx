import { useState, useEffect } from "react";

// React applications typically access environment variables with REACT_APP_ prefix
// For Vite projects, use import.meta.env.VITE_API_BASE_URL
const API_BASE_URL = 
  (typeof window !== "undefined" && window.__ENV__?.API_BASE_URL) || 
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_BASE_URL) ||
  "http://localhost:3001";

export default function UserProfile() {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "error" or "success"

  // Calculate age automatically when DOB changes
  useEffect(() => {
    if (formData.dob) {
      const birthDate = new Date(formData.dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      
      setFormData(prev => ({ ...prev, age: age.toString() }));
    }
  }, [formData.dob]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Please select a gender";
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    // City and state
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    
    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Data to Backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    
    // Validate form
    if (!validateForm()) {
      setMessage("Please fix the errors in the form");
      setMessageType("error");
      return;
    }

    try {
      const checkResponse = await fetch(`${API_BASE_URL}/api/users/check`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, phone: formData.phone }),
      });
      
      if (checkResponse.status === 409) {
        setMessage("⚠️ You are already registered. Please log in or use a different email/phone.");
        setMessageType("error");
        return;
      }

      const response = await fetch(`${API_BASE_URL}/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      if (response.ok) {
        setMessage("✅ Registration successful! Welcome aboard.");
        setMessageType("success");
        // Reset form on success
        setFormData({
          fullName: "",
          dob: "",
          age: "",
          gender: "",
          email: "",
          phone: "",
          city: "",
          state: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        setMessage("❌ " + (result.message || "An unexpected error occurred. Please try again later."));
        setMessageType("error");
      }
    } catch (error) {
      // Avoid logging sensitive information
      setMessage("❌ Cannot connect to server. Please try again later.");
      setMessageType("error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-6 w-full h-full">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-400 text-center mb-4">User Profile</h2>
        {message && (
          <div className={`text-center text-lg font-bold p-4 rounded mb-4 ${messageType === "error" ? "text-red-700 bg-red-300 border border-red-600" : "text-green-700 bg-green-300 border border-green-600"}`}
            role="alert"
            aria-live="assertive">
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="fullName" className="block text-sm font-semibold">Full Name*</label>
            <input 
              id="fullName"
              name="fullName" 
              className={`w-full p-2 rounded ${errors.fullName ? 'bg-red-900 border border-red-500' : 'bg-gray-700'} text-white`} 
              type="text" 
              placeholder="Enter your full name" 
              value={formData.fullName} 
              onChange={handleChange} 
              aria-required="true"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
            />
            {errors.fullName && <p id="fullName-error" className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-3">
            <div className="w-full sm:w-1/2">
              <label htmlFor="dob" className="block text-sm font-semibold">Date of Birth*</label>
              <input 
                id="dob"
                name="dob" 
                className={`w-full p-2 rounded ${errors.dob ? 'bg-red-900 border border-red-500' : 'bg-gray-700'} text-white`} 
                type="date" 
                value={formData.dob} 
                onChange={handleChange} 
                aria-required="true"
                aria-invalid={!!errors.dob}
                aria-describedby={errors.dob ? "dob-error" : undefined}
              />
              {errors.dob && <p id="dob-error" className="text-red-500 text-xs mt-1">{errors.dob}</p>}
            </div>
            <div className="w-full sm:w-1/2 mt-3 sm:mt-0">
              <label htmlFor="age" className="block text-sm font-semibold">Age</label>
              <input 
                id="age"
                name="age" 
                className="w-full p-2 rounded bg-gray-700 text-white" 
                type="number" 
                placeholder="Auto-calculated"
                value={formData.age} 
                onChange={handleChange} 
                readOnly
                aria-readonly="true"
              />
              <p className="text-xs text-gray-400 mt-1">Automatically calculated from birth date</p>
            </div>
          </div>

          <div className="mt-3">
            <label htmlFor="gender" className="block text-sm font-semibold">Gender*</label>
            <select 
              id="gender"
              name="gender" 
              className={`w-full p-2 rounded ${errors.gender ? 'bg-red-900 border border-red-500' : 'bg-gray-700'} text-white`} 
              value={formData.gender} 
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.gender}
              aria-describedby={errors.gender ? "gender-error" : undefined}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p id="gender-error" className="text-red-500 text-xs mt-1">{errors.gender}</p>}
          </div>

          <div className="mt-3">
            <label htmlFor="email" className="block text-sm font-semibold">Email*</label>
            <input 
              id="email"
              name="email" 
              className={`w-full p-2 rounded ${errors.email ? 'bg-red-900 border border-red-500' : 'bg-gray-700'} text-white`} 
              type="email" 
              placeholder="Enter your email" 
              value={formData.email} 
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mt-3">
            <label htmlFor="phone" className="block text-sm font-semibold">Phone Number*</label>
            <input 
              id="phone"
              name="phone" 
              className={`w-full p-2 rounded ${errors.phone ? 'bg-red-900 border border-red-500' : 'bg-gray-700'} text-white`} 
              type="tel" 
              placeholder="Enter your phone number" 
              value={formData.phone} 
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-3 mt-3">
            <div className="w-full sm:w-1/2">
              <label htmlFor="city" className="block text-sm font-semibold">City*</label>
              <input 
                id="city"
                name="city" 
                className={`w-full p-2 rounded ${errors.city ? 'bg-red-900 border border-red-500' : 'bg-gray-700'} text-white`} 
                type="text" 
                placeholder="Enter your city" 
                value={formData.city} 
                onChange={handleChange} 
                aria-required="true"
                aria-invalid={!!errors.city}
                aria-describedby={errors.city ? "city-error" : undefined}
              />
              {errors.city && <p id="city-error" className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>
            <div className="w-full sm:w-1/2 mt-3 sm:mt-0">
              <label htmlFor="state" className="block text-sm font-semibold">State*</label>
              <input 
                id="state"
                name="state" 
                className={`w-full p-2 rounded ${errors.state ? 'bg-red-900 border border-red-500' : 'bg-gray-700'} text-white`} 
                type="text" 
                placeholder="Enter your state" 
                value={formData.state} 
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!!errors.state}
                aria-describedby={errors.state ? "state-error" : undefined}
              />
              {errors.state && <p id="state-error" className="text-red-500 text-xs mt-1">{errors.state}</p>}
            </div>
          </div>

          <div className="mt-3">
            <label htmlFor="password" className="block text-sm font-semibold">Password*</label>
            <input 
              id="password"
              name="password" 
              className={`w-full p-2 rounded ${errors.password ? 'bg-red-900 border border-red-500' : 'bg-gray-700'} text-white`} 
              type="password" 
              placeholder="Enter your password" 
              value={formData.password} 
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            {errors.password && <p id="password-error" className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div className="mt-3">
            <label htmlFor="confirmPassword" className="block text-sm font-semibold">Confirm Password*</label>
            <input 
              id="confirmPassword"
              name="confirmPassword" 
              className={`w-full p-2 rounded ${errors.confirmPassword ? 'bg-red-900 border border-red-500' : 'bg-gray-700'} text-white`} 
              type="password" 
              placeholder="Confirm your password" 
              value={formData.confirmPassword} 
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.confirmPassword}
              aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
            />
            {errors.confirmPassword && <p id="confirmPassword-error" className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          <button 
            type="submit" 
            className="w-full p-3 mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition duration-200"
            aria-label="Submit registration form"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}