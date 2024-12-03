import React from 'react';

const features = [
  {
    title: 'Instant Doubt Submission',
    description: 'Quickly post your academic queries and receive timely answers',
    icon: '⚡'
  },
  {
    title: 'Expert Tutors',
    description: 'Learn from our curated network of knowledgeable tutors',
    icon: '👨‍🏫'
  },
  {
    title: 'Real-Time Interaction',
    description: 'Connect through live chat or video calls for in-depth explanations',
    icon: '💬'
  },
  {
    title: '24/7 Availability',
    description: 'Submit your doubts anytime, get round-the-clock assistance',
    icon: '🕒'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-all duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 