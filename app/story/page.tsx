'use client';

import TopRatedFreelancers from '@/components/Freelancing/TopRatedFreelancers';
import StatsSection from '@/components/Story/StatsSection';
// import PopularCourses from '@/components/Home/PopularCourse';
import SuccessStories from '@/components/Story/Story';
import React from 'react';

const Page: React.FC = () => {
  return (
   <>
  
   <SuccessStories/>
   <StatsSection/>
   {/* <PopularCourses/> */}
   <TopRatedFreelancers/>
   
   </>
  );
};

export default Page;
