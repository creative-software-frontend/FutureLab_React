'use client';

import AvailableWorkplaces from '@/components/Freelancing/AvailableWorkplaces';
import FreelancingBanner from '@/components/Freelancing/FreelancingBanner';
import FreelancingCategories from '@/components/Freelancing/FreelancingCategories';
import FreelancingInitiativesCourses from '@/components/Freelancing/FreelancingInitiativesCourses';
import TopRatedFreelancers from '@/components/Freelancing/TopRatedFreelancers';
import React from 'react';

const Page: React.FC = () => {
  return (
   <>
  
   <FreelancingBanner/>
   <FreelancingCategories/>
   <FreelancingInitiativesCourses/>
   <AvailableWorkplaces/>
   <TopRatedFreelancers/>
   
   </>
  );
};

export default Page;
