// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import AboutCard from '../components/AboutCard';
import ExperienceCard from '../components/ExperienceCard';
import EducationCard from '../components/EducationCard';
import SkillsCard from '../components/SkillsCard';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Israel Keierleber - Data Science/ Data Analytics / Web Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Israel Keierleber</h1>
        <p className="text-xl text-gray-600">Data Science/ Data Analytics / Web Development</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/israel-keierleber" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-blue-600" />
          </a>
          <a href="https://github.com/ihkeierleber" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-800" />
          </a>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <AboutCard />
        <ExperienceCard />
        <EducationCard />
        <SkillsCard /> 
      </main>

      <footer className="text-center mt-8">
        <p className="text-gray-600">&copy; 2024 Israel Keierleber. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;