import React from 'react';
import type { FC } from '../types/common';

const FAQ: FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
          Frequently Asked Questions
        </h1>
        {/* FAQ content will go here */}
      </div>
    </div>
  );
};

export default FAQ; 