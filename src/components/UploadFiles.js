'use client';
import React, { useEffect } from 'react';
import { Card } from 'antd';
import Uppy from '@uppy/core';
import { Dashboard, ProgressBar } from '@uppy/react';
import XHRUpload from '@uppy/xhr-upload';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import '@uppy/progress-bar/dist/style.css';

const UploadFiles = () => {
  const uppy = new Uppy({
    restrictions: { maxFileSize: 5000000, maxNumberOfFiles: 5, allowedFileTypes: ['image/*', 'application/pdf'] },
    autoProceed: true,
  }).use(XHRUpload, { endpoint: '/upload-endpoint' }); // Replace with your endpoint

  useEffect(() => {
    return () => uppy.cancelAll(); // Clean up Uppy instance when the component unmounts
  }, []);

  return (
    <Card title="Upload Files" className="mb-6">
      <Dashboard
        uppy={uppy}
        proudlyDisplayPoweredByUppy={false} // Explicitly hide the "Powered by Uppy" text
        hideUploadButton
        height={200}
        width="100%"
        showLinkToFileUploadResult={false}
        note="Drag and drop files here or click to browse"
      />
    </Card>
  );
};

export default UploadFiles;
