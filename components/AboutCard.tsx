// components/AboutCard.tsx
import React from 'react';

const AboutCard: React.FC = () => {
  return (
    <div className="bg-white shadow-md flex flex-col items-center rounded-lg p-6 text-gray-600">
      <h2 className="text-2xl font-bold mb-4 text-gray-600">About Me</h2>
      <p>
        I am a data analyst and developer with experience primarily in SQL, Python, and Excel for analyst work and
        JavaScript for development. I have worked on various projects involving data analysis, machine learning/ai, 
        and data engineering 
      </p>
      <br></br>
      <p>Sometimes my time after High School feels as though it has been so full it should not have been contained in just one life.
        After graduating I was fortunate enough to be a Missile Maintainer with the USAF in North Dakota where I learned 
        work ethic and service before self. Afterwards, I got my undergraduate and graduate degrees in analytics at the University of Kansas
        where I also played rugby, cheered, and powerlifted. Here I learned the importance of getting out of my comfort zone 
        to really learn
      </p>
      <br></br>
      <p>In my current role as an analyst I have learned the importance of context. Once I got to a point 
        where I was more than proficient with the tools I use as an analyst I learned that the specific frame 
        a question is being asked in is vitally important. A quote I like is do not miss the forest for the trees
      </p>
      <br></br>
      <p>
        In my free time I really enjoy challenging myself. I cut down stress as much as I can by rock climbing (indoors at a gym), playing/learning guitar, 
        or spending time with my friends and/or pets. Moving forward in my life I look forward to opportunities to physically and mentally challenge myself
      </p>

    </div>
  )
};

export default AboutCard;