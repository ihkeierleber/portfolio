// components/SkillsCard.tsx
import React from 'react';

const SkillsCard: React.FC = () => {

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-gray-600 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className='flex justify-between flex-col'>
        <li><span className='font-bold'>Javascript</span> - Next js for fullstack/frontend, React for frontend, Node/Express for APIs</li>
        <li><span className='font-bold'>SQL</span> - SQL server for analysis. Created tables, sprocs, and tuned queries for efficiency</li>
        <li><span className='font-bold'>Python</span> - Machine Learning and Data Analysis tasks where methods outside of Excel were needed</li>
        <li><span className='font-bold'>AWS</span> - Created refreshable reporting in quicksight for individuals without Excel access. In personal projects have deployed databases on EC2 instances</li>
        <li><span className='font-bold'>Excel/GoogleSheets</span> - Making reports refreshable, pivot tables, lookups, and index/match</li>
        <li><span className='font-bold'>Prompt Engineering</span> - Using an llm made API calls to enhance data that had been entered to a journal (project on github but not currently running)</li>
        <li><span className='font-bold'>MongoDB</span> - Performed CRUD methods on MongoDB Atlas database</li>
        <li><span className='font-bold'>Supabase</span> - Performed CRUD methods on database and used Supabase for auth</li>
      </ul>
    </div>
  )
};

export default SkillsCard;