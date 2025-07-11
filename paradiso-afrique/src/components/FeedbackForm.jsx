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
          <h1 className="text-5xl font-italianno bg-amber-600 text-black dark:bg-gray-900 dark:text-white px-8 py-2">
            Feedback Form
          </h1>
        </div>
        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-orange-100 text-black dark:bg-gray-800 dark:text-white rounded-lg shadow-lg px-8 py-6"
        >
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
          <div className="text-center">
            <button
            type="submit"
            className="w-40 bg-green-700 text-black py-2 rounded hover:bg-green-800 font-semibold"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


