import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thanks for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-100 flex items-center justify-center px-4 py-16">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
          📬 Contact Code-Connect
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-purple-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-purple-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-purple-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Or email us directly at{" "}
          <a
            href="mailto:support@code-connect.dev"
            className="text-pink-500 font-medium hover:underline"
          >
            support@code-connect.dev
          </a>
        </p>

        {/* 🛠 Support Info */}
        <div className="mt-10 border-t pt-6 border-purple-300">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">
            🛠️ Support from Us
          </h3>
          <p className="text-gray-700 mb-4">
            Need help with login issues, bugs, feedback, or suggestions?
            We’re here to help you!
          </p>

          <h4 className="text-purple-600 font-medium mb-1">🔎 How to Report an Issue:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Provide a clear description of the issue you're facing</li>
            <li>Include screenshots or error messages if possible</li>
            <li>Mention the browser/device used (optional)</li>
            <li>Email us at <strong>support@code-connect.dev</strong></li>
          </ul>

          <p className="text-gray-700">
            We aim to respond to all queries within <span className="font-semibold text-purple-700">24–48 hours</span>. Thank you for being part of the Code-Connect community 💜
          </p>
        </div>
      </div>
    </div>
  );
}
