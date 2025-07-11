import React, { useState } from "react";

export default function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/src/assets/feedback-form-background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-lg">
         {/* Title */}
        <div className="flex flex-col items-center mb-2">
          <h1 className="text-3xl font-serif font-bold bg-green-700 text-white px-8 py-2 rounded-b-lg rounded-t-lg mb-2 shadow-md" style={{ fontFamily: "cursive, serif" }}>
            Feedback Form
          </h1>
        </div>
        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-yellow-100 rounded-lg shadow-lg px-8 py-6"
        >
          {/* Info Box */}
          <div className="mb-4 flex justify-center">
            <div className="bg-yellow-400 text-gray-900 text-sm px-4 py-2 rounded shadow font-medium">
              Tell us about Your Experience at Paradiso Afrique
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Full Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Phone (Optional):</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-semibold">Message:</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition font-semibold"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}


