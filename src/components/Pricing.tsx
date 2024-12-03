import React from 'react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Basic',
    price: '9.99',
    features: [
      '10 Questions per month',
      'Chat support',
      'Basic response time',
      'Access to study resources'
    ],
    recommended: false
  },
  {
    name: 'Pro',
    price: '19.99',
    features: [
      'Unlimited questions',
      'Priority support',
      'Video calls with tutors',
      'Advanced study materials',
      'Practice tests'
    ],
    recommended: true
  },
  {
    name: 'Premium',
    price: '39.99',
    features: [
      'Everything in Pro',
      '24/7 instant support',
      'One-on-one mentoring',
      'Personalized study plan',
      'Progress tracking'
    ],
    recommended: false
  }
];

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = (plan: string) => {
    navigate('/signup', { state: { selectedPlan: plan } });
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-all duration-300" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                plan.recommended ? 'ring-2 ring-blue-600 transform scale-105' : ''
              }`}
            >
              {plan.recommended && (
                <div className="bg-blue-600 text-white text-center py-2">
                  Recommended
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold dark:text-white">${plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleGetStarted(plan.name)}
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.recommended 
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 