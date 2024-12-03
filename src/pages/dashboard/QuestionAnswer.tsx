import React from 'react';
import type { FC, FormEvent } from '../../types/common';
import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import FileUpload from '../../components/FileUpload';
import { useTheme } from '../../contexts/ThemeContext';

interface Question {
  id: string;
  title: string;
  content: string;
  subject: string;
  studentName: string;
  timestamp: string;
  attachments: string[];
}

interface UploadedFile {
  id: string;
  name: string;
  url: string;
  type: string;
}

const mockQuestion: Question = {
  id: '1',
  title: 'Help with calculus integration',
  content: `I'm having trouble understanding integration by parts. Specifically:
  1. When should I use it?
  2. How do I choose u and dv?
  3. Can you show an example with ∫x ln(x) dx?`,
  subject: 'Mathematics',
  studentName: 'John Doe',
  timestamp: '15 minutes ago',
  attachments: ['https://via.placeholder.com/300x200']
};

const QuestionAnswer: FC = () => {
  const [answer, setAnswer] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleAnswerChange = (content: string) => {
    setAnswer(content);
  };

  const handleFileUpload = async (files: File[]) => {
    setIsSubmitting(true);
    try {
      // Simulate file upload API call
      const uploadedFiles: UploadedFile[] = await Promise.all(
        files.map(async (file) => {
          // In real implementation, upload file to server/cloud storage
          const fakeUrl = URL.createObjectURL(file);
          return {
            id: Math.random().toString(36).substr(2, 9),
            name: file.name,
            url: fakeUrl,
            type: file.type
          };
        })
      );

      setUploadedFiles(prev => [...prev, ...uploadedFiles]);
    } catch (error) {
      console.error('Error uploading files:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Answer submitted:', answer);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.history.back()}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Answer Question</h1>
            </div>
            <div className="flex items-center space-x-4">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleDarkMode}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 rounded-md"
              >
                {isDarkMode ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-md border dark:border-gray-600"
              >
                {showPreview ? 'Edit Answer' : 'Preview'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Question Details */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Question Details</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{mockQuestion.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {mockQuestion.subject} • {mockQuestion.timestamp}
                    </p>
                  </div>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 whitespace-pre-line">
                      {mockQuestion.content}
                    </p>
                  </div>
                  {mockQuestion.attachments.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Attachments</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {mockQuestion.attachments.map((url, index) => (
                          <img
                            key={index}
                            src={url}
                            alt={`Attachment ${index + 1}`}
                            className="rounded-lg border border-gray-200"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://via.placeholder.com/32"
                      alt={mockQuestion.studentName}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm text-gray-700">{mockQuestion.studentName}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Answer Editor */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Your Answer</h2>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <FileUpload onFileUpload={handleFileUpload} />
                  {uploadedFiles.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      {uploadedFiles.map((file) => (
                        <div
                          key={file.id}
                          className="flex items-center p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex-shrink-0">
                            {file.type.startsWith('image/') ? (
                              <img
                                src={file.url}
                                alt={file.name}
                                className="h-10 w-10 rounded object-cover"
                              />
                            ) : (
                              <svg className="h-10 w-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                          </div>
                          <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {file.name}
                            </p>
                            <button
                              onClick={() => window.open(file.url, '_blank')}
                              className="text-sm text-blue-600 hover:text-blue-500"
                            >
                              View
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {!showPreview ? (
                  <Editor
                    apiKey="9bwpvm33y0vazsy2nzi7574yqsxvz5c98xwv3o849051grdd"
                    value={answer}
                    onEditorChange={handleAnswerChange}
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount',
                        'codesample'
                      ],
                      toolbar:
                        'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | codesample | help',
                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                  />
                ) : (
                  <div 
                    className="prose max-w-none min-h-[500px] p-4 border rounded-md"
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                )}
                <div className="mt-6 flex justify-end space-x-4">
                  <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Save Draft
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !answer.trim()}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Answer'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuestionAnswer; 