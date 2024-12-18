import React from 'react';
import type { FC } from '../../types/common';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const StudentDashboard: FC = () => {
  return (
    <DashboardLayout userType="student">
      <div>
        {/* Your specific dashboard content here */}
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard; 