'use client';

import AboutSection from '@/components/About/AboutBanner';
import AboutAchievements from '@/components/About/Achievements';
// import BranchesDepartments from '@/components/About/BranchesDepartments';
import MilestoneSection from '@/components/About/Milestone';
import React from 'react';

const Page: React.FC = () => {
  return (
    <>
    <AboutSection/>
    <AboutAchievements/>
    <MilestoneSection/>
    {/* <BranchesDepartments/> */}
    </>
  );
};

export default Page;