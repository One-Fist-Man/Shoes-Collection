import React from 'react';

const PageLoading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="animate-spin h-8 w-8 border-4 border-t-4 border-t-blue-500 border-gray-200 rounded-full mx-auto mb-4"></div>
        <p className="text-gray-600 text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoading;
