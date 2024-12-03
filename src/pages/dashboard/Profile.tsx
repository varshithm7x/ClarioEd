import React from 'react';
import type { FC } from '../../types/common';

interface ProfileProps {
  userType: 'student' | 'tutor';
}

const Profile: FC<ProfileProps> = ({ userType }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Profile Settings</h1>
          {/* Profile content will go here */}
        </div>
      </div>
    </div>
  );
};

export default Profile; 