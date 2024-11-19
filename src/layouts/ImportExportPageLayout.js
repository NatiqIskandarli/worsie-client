import React, { useState } from 'react';
import { Radio, Button, Input,Typography } from 'antd';
import { ArrowLeftOutlined, DesktopOutlined, GoogleOutlined, CloudOutlined }  from '@ant-design/icons';
import styles from '../styles/importExport.module.css';

const { Title, Text } = Typography;

const ImportExport = () => {
  const [importFileType, setImportFileType] = useState('worsie');
  const [exportFileType, setExportFileType] = useState('worsie');

  const handleImportFileTypeChange = (e) => {
    setImportFileType(e.target.value);
  };

  const handleExportFileTypeChange = (e) => {
    setExportFileType(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className="header-section">
        <Button 
            className="back-button" 
            icon={<ArrowLeftOutlined />} 
            type="text" 
            onClick={() => router.back()}
            >
        </Button>
        <Title level={2} className="page-title">Import / Export</Title>
      </div>

      <div className={styles.section}>
        <h3 className={styles.subtitle}>Import Cabinet</h3>
        <Radio.Group onChange={handleImportFileTypeChange} value={importFileType} className={styles.radioGroup}>
          <Radio value="worsie">worsie file</Radio>
          <Radio value="excel">MS Excel file</Radio>
          <Radio value="access">MS Access file</Radio>
        </Radio.Group>

        <p className={styles.label}>Upload from:</p>
        <div className={styles.uploadOptions}>
          <div className={styles.fromDevice}>
          {[
            { icon: <DesktopOutlined />, text: "My Computer" },
            { icon: <GoogleOutlined />, text: "Google Drive" },
            { icon: <CloudOutlined />, text: "OneDrive" }
          ].map((option, index) => (
              <Button key={index} type="primary" className={styles.uploadButton} icon={option.icon}>
                {option.text}
              </Button>
          ))}
          </div>
          <div className={styles.fromWeb}>
            <Input defaultValue="shell.wrs" className={styles.textInput} />
            <Button type="primary" className={styles.proceedButton}>Proceed</Button>
          </div>
        </div>
      </div>


      <div className={styles.section}>
        <h3 className={styles.subtitle}>Export Cabinet</h3>
        <Radio.Group onChange={handleImportFileTypeChange} value={importFileType} className={styles.radioGroup}>
          <Radio value="worsie">worsie file</Radio>
          <Radio value="excel">MS Excel file</Radio>
        </Radio.Group>

        <p className={styles.label}>Upload from:</p>
        <div className={styles.uploadOptions}>
          <div className={styles.fromDevice}>
          {[
            { icon: <DesktopOutlined />, text: "My Computer" },
            { icon: <GoogleOutlined />, text: "Google Drive" },
            { icon: <CloudOutlined />, text: "OneDrive" }
          ].map((option, index) => (
              <Button key={index} type="primary" className={styles.uploadButton} icon={option.icon}>
                {option.text}
              </Button>
          ))}
          </div>
          <div className={styles.fromWeb}>
            <Input defaultValue="shell.wrs" className={styles.textInput} />
            <Button type="primary" className={styles.proceedButton}>Proceed</Button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ImportExport;