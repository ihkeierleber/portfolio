// components/EducationCard.tsx
import React from 'react';

const EducationCard: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-gray-600 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-600">Education</h2>
      <h3 className='text-xl font-bold mb-2'>UnderGraduate</h3>
      <p className='mb-2 font-semibold'>University of Kansas</p>
      <p className='mb-2'>Business Analytics 2017-2020</p>
      <h3 className='text-xl font-bold mb-2'>Graduate</h3>
      <p className='mb-2 font-semibold'>University of Kansas</p>
      <p>Business Analytics 2020-2021</p>
    </div>
  );
};

export default EducationCard;