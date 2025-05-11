import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-4">Welcome to AI Chatbot</h1>
        <p className="text-xl mb-6">
          Your personal assistant to answer all your queries on AI and tech
          news!
        </p>
        <Link
          to="/chat"
          className="px-8 py-3 text-xl font-semibold bg-blue-700 rounded-full hover:bg-blue-800 transition duration-300"
        >
          Start Chat
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
