import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Instant Solutions to Your Academic Doubts
          </h1>
          <p className="text-xl mb-8 text-white">
            Connect with expert tutors in real-time and get your questions answered instantly
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-white text-blue-600 dark:bg-gray-800 dark:text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 