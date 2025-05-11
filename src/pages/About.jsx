import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Page Heading */}
        <h1 className="text-4xl font-semibold mb-6">About Us</h1>

        {/* Mission Section */}
        <div className="bg-white text-black p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At My AI Chatbot, we strive to leverage the latest advancements in
            artificial intelligence to help users easily find relevant
            information through dynamic conversations. We aim to make
            information discovery more intuitive and personalized through
            cutting-edge technology.
          </p>
        </div>

        {/* What We Do Section */}
        <div className="bg-white text-black p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-semibold mb-4">What We Do</h2>
          <p className="text-lg leading-relaxed">
            We provide users with an AI-powered chatbot that can answer
            questions, generate summaries, and provide the latest news on
            various topics. Our goal is to simplify information retrieval and
            make it accessible anytime and anywhere.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white text-black p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg leading-relaxed mb-4">
            Have questions? Feel free to reach out to us! We'd love to hear from
            you.
          </p>
          <a
            href="mailto:info@myaichatbot.com"
            className="text-blue-500 text-lg hover:underline"
          >
            info@myaichatbot.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
