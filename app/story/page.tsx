'use client';

import PopularCourses from '@/components/Home/PopularCourse';
import SuccessStories from '@/components/Story/Story';
import React from 'react';

const Page: React.FC = () => {
  return (
   <>
  
   <SuccessStories/>
   <PopularCourses/>
   
   </>
  );
};

export default Page;
