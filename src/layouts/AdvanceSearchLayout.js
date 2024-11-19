'use client';
import React, { Suspense, lazy } from 'react';
//import '@/styles/AdvanceSearch.css';
const AdvanceSearchContent = lazy(() => import('@/components/AdvanceSearchContent'));

const AdvanceSearchLayout = () => {
  return (    
        <Suspense fallback={<div>Loading Content...</div>}>
          <AdvanceSearchContent />
        </Suspense>
  );
};


export default AdvanceSearchLayout;
