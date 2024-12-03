import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: 'student' | 'tutor';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, userType }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleSignOut = () => {
    // Add sign out logic here
    navigate('/signin');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Dashboard Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to={`/dashboard/${userType}`} className="text-2xl font-bold text-blue-600">
              Clarioed
            </Link>

            <div className="flex items-center space-x-4">
              <Link 
                to={`/dashboard/${userType}/profile`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
              >
                Profile
              </Link>
              <Link 
                to={`/dashboard/${userType}/settings`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
              >
                Settings
              </Link>
              <button
                onClick={toggleDarkMode}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
              >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
              <button
                onClick={handleSignOut}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout; 