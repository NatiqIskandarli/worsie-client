'use client';
import React from 'react';
import Dashboard from '../components/Dashboard';
import UploadFiles from '../components/UploadFiles';
import Approvals from '../components/Approvals';
import RecentlyAccessed from '../components/RecentlyAccessed';

const HomeLayout = () => {
  return (    
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Hello, Farid</h2>
          <Dashboard />
          <UploadFiles />
          <div className="flex mt-6 gap-4">
            <Approvals className="flex-1" />
            <RecentlyAccessed className="flex-1" />
          </div>
        </div>      
  );
};

export default HomeLayout;
