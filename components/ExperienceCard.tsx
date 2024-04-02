// components/ExperienceCard.tsx
import React from 'react';

const ExperienceCard: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-gray-600 flex flex-col items-center justify-between">
      <h2 className="text-2xl font-bold mb-4 ">Work Experience</h2>
      <h3 className='text-xl font-bold'>SelectQuote</h3>
      <h3 className='text-sm'>Data Analyst/Data Enablement</h3>
      <ul className="list-disc">
        <li>As a member of an operations team worked with Sales and management to create refreshable reports querying
from a SQL database. Excel, Python, and SQL supported reporting this initiative</li>
        <li>Coordinated with Business Intelligence and other data teams to ensure SQL tables were accurate and reporting
correct information to support Medicare Annual Enrollment Period and preparation for the period</li>
        <li>In a Data Enablement position optimized SQL queries, utilized indexes, and prepared/validated stored procedures
            for downstream reporting
        </li>
        <li>
            Validated underlying database structure against business logic
        </li>
      </ul>
      <h3 className='text-xl font-bold'>United States Air Force</h3>
      <h3 className='text-sm'>Missile Maintenance Technician/Assistant Team Chief</h3>
      <ul className="list-disc">
        <li>Supported the nuclear mission through meticulously inspecting dispatch vehicles and equipment, handling
classified material/components as Top-Secret clearance indicated, and performing necessary maintenance directly
upon Inter Continental Ballistic Missiles (ICBM’s)</li>
        <li>Prepared two ICBM’s for test launch in 2016. After 57 days of scrutinized preparation for the launch, it resulted in
a $117 million success that was observed by US allies and contributed to the nuclear deterrence mission
</li>
      </ul>
    </div>
  );
};

export default ExperienceCard;