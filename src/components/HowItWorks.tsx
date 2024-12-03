import React from 'react';

const steps = [
  {
    title: 'Submit Your Question',
    description: 'Share your academic doubts with detailed explanations and attachments if needed.',
    icon: '📝'
  },
  {
    title: 'Get Matched',
    description: 'Our system connects you with the most qualified tutor for your subject.',
    icon: '🤝'
  },
  {
    title: 'Real-time Interaction',
    description: 'Engage in live discussions, share screens, and get step-by-step guidance.',
    icon: '💡'
  },
  {
    title: 'Clear Understanding',
    description: 'Gain complete clarity on the topic with thorough explanations and examples.',
    icon: '✅'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-all duration-300" id="how-it-works">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                <span className="text-3xl">{step.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-6 h-6 text-gray-400 dark:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 