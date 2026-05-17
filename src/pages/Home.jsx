import React from 'react';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import DesignerBio from '../components/DesignerBio';
import useSEO from '../hooks/useSEO';

const Home = () => {
  useSEO({
    title: 'Annuai - Industrial Designer & Maker',
    description: 'Annuai is an Industrial Designer turning ideas into tangible experiences across domains.',
    url: 'https://annu.me/',
    image: '/favicon.svg'
  });
  return (
    <div className="page-wrapper">
      <Hero />
      <ProjectGrid />
      <DesignerBio />
    </div>
  );
};

export default Home;
