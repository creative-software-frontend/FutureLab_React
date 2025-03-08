'use client';


import ContactForm from '@/components/Contact/ContactForm';
import ContactSection from '@/components/Contact/Locations';
import React from 'react';

const Page: React.FC = () => {
  return (
   <>
 
   <ContactSection/>
   <ContactForm/>
   </>
  );
};

export default Page;
