import React from 'react';
import AboutSection from '../components/AboutSection';
import ValuesSection from '../components/ValuesSection';
import useSEO from '../hooks/useSEO';

const About = () => {
  useSEO({
    title: 'Annuai | About',
    description: 'Learn more about Annuai, an Industrial Designer based in Kannur, Kerala.',
    url: 'https://annu.me/about',
    image: '/favicon.svg'
  });
  return (
    <div className="page-wrapper">
      <AboutSection />
      <ValuesSection />
    </div>
  );
};

export default About;
