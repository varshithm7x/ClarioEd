import React from 'react';
import type { FC } from './types/common';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Public Pages
import Home from './pages/Home';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

// Dashboard Pages
import StudentDashboard from './pages/dashboard/StudentDashboard';
import TutorDashboard from './pages/dashboard/TutorDashboard';
import QuestionAnswer from './pages/dashboard/QuestionAnswer';
import Profile from './pages/dashboard/Profile';
import Settings from './pages/dashboard/Settings';

// Other Pages
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';

const App: FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* Protected Routes */}
            <Route
              path="/dashboard/student"
              element={
                <ProtectedRoute>
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/dashboard/student/profile" element={<Profile userType="student" />} />
            <Route path="/dashboard/student/settings" element={<Settings userType="student" />} />
            
            {/* Tutor Dashboard Routes */}
            <Route
              path="/dashboard/tutor"
              element={
                <ProtectedRoute>
                  <TutorDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/dashboard/tutor/answer/:questionId" element={<QuestionAnswer />} />
            <Route path="/dashboard/tutor/profile" element={<Profile userType="tutor" />} />
            <Route path="/dashboard/tutor/settings" element={<Settings userType="tutor" />} />
            
            {/* Other Pages */}
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            
            {/* 404 and Redirects */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App; 