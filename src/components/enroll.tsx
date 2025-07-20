"use client";
import { useState } from "react";

export default function EnrollForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    studentClass: "",
    stream: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Send this data to your backend (API / Firestore etc.)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-8 bg-[#fdf4f9] rounded-2xl shadow-lg space-y-5 text-[#2d1b4e]"
    >
      <h2 className="text-3xl font-bold text-center text-[#6b3fa0] mb-2">
        Enroll Now
      </h2>
      <p className="text-center text-sm text-gray-600">
        Fill out the form to register your interest
      </p>

      <input
        type="text"
        name="name"
        placeholder="Student Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6b3fa0]"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6b3fa0]"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address (optional)"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6b3fa0]"
      />

      <select
        name="studentClass"
        required
        value={formData.studentClass}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6b3fa0]"
      >
        <option value="">Select Class</option>
        <option value="9">Class 9</option>
        <option value="10">Class 10</option>
        <option value="11">Class 11</option>
        <option value="12">Class 12</option>
      </select>

      {["11", "12"].includes(formData.studentClass) && (
        <select
          name="stream"
          value={formData.stream}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6b3fa0]"
        >
          <option value="">Select Stream</option>
          <option value="Science">Science</option>
          <option value="Commerce">Commerce</option>
          <option value="Arts">Arts</option>
        </select>
      )}

      <textarea
        name="message"
        placeholder="Message (optional)"
        value={formData.message}
        onChange={handleChange}
        rows={3}
        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6b3fa0]"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-[#6b3fa0] text-white p-3 rounded-full font-semibold hover:bg-[#5b3290] transition duration-300"
      >
        Submit
      </button>
    </form>
  );
}
