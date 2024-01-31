import React from 'react';
import ProfilePage from '../page';

const Page = ({ params }: any) => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md">
        <div className="flex items-center justify-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-black">ProfilePage</h1>
            <p className="text-gray-600">{params.id}</p>
          </div>
        </div>

        
        </div>
      </div>
  );
};

export default Page;
