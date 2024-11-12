import React, { useState } from 'react';
import { Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons'; // Upload Icon from Ant Design

const ButtonUpload = ({ onFileSelect, onUpload, loading }) => {
  const [fileName, setFileName] = useState('');

  // Handle file selection
  const handleFileChange = (info) => {
    if (info.fileList.length > 0) {
      const file = info.fileList[0].originFileObj;
      setFileName(file.name); // Store file name to display
      if (onFileSelect) {
        onFileSelect(file); // Optional: Pass the selected file to the parent
      }
    }
  };

  // Simulate file upload (You can replace this with your actual upload logic)
  const handleUpload = () => {
    if (onUpload) {
      onUpload(); // Trigger custom upload function in parent component
    }
  };

  return (
    <div>
      {/* Upload component from Ant Design */}
      <Upload
        beforeUpload={() => false} // Prevent auto-upload
        onChange={handleFileChange}
        showUploadList={false} // Hide default file list
      >
        <Button
          icon={<UploadOutlined />}
          loading={loading} // Show loading spinner when uploading
          disabled={loading} // Disable button during upload
        >
          {loading ? 'Uploading...' : 'Select File'}
        </Button>
      </Upload>

      {/* Display selected file name */}
      {fileName && !loading && (
        <div style={{ marginTop: 8 }}>
          <span>Selected file: {fileName}</span>
        </div>
      )}

      {/* Upload button */}
      {fileName && !loading && (
        <Button
          type="primary"
          onClick={handleUpload}
          style={{ marginTop: 16 }}
        >
          Upload File
        </Button>
      )}
    </div>
  );
};

export default ButtonUpload;