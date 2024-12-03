import React from 'react';
import type { FC } from '../types/common';
import { useCallback } from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';

interface FileUploadProps {
  onFileUpload: (files: File[]) => void;
  maxFiles?: number;
  acceptedFileTypes?: string[];
}

const FileUpload: FC<FileUploadProps> = ({
  onFileUpload,
  maxFiles = 5,
  acceptedFileTypes = ['image/*', 'application/pdf']
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFileUpload(acceptedFiles);
  }, [onFileUpload]);

  const dropzoneOptions: DropzoneOptions = {
    onDrop,
    maxFiles,
    accept: acceptedFileTypes.reduce((acc, type) => ({ ...acc, [type]: [] }), {}),
    multiple: true,
    onDragOver: (e) => e.preventDefault(),
    onDragEnter: (e) => e.preventDefault(),
    onDragLeave: (e) => e.preventDefault(),
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone(dropzoneOptions);

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
    >
      <input {...getInputProps()} />
      <div className="space-y-2">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
        >
          <path
            d="M24 8v20m0-20L16 16m8-8l8 8m-16 4v12a4 4 0 004 4h8a4 4 0 004-4V20"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="text-gray-600">
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>
              Drag & drop files here, or <span className="text-blue-500">browse</span>
            </p>
          )}
        </div>
        <p className="text-sm text-gray-500">
          Supported files: Images, PDFs (Max {maxFiles} files)
        </p>
      </div>
    </div>
  );
};

export default FileUpload; 