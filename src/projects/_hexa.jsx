import React from 'react';
import ProjectLayout from '../components/ProjectLayout';

export const metadata = {
  id: '9',
  slug: 'hexa',
  title: 'Hexa Organizer',
  category: 'Product Design',
  tags: ['Design Visualisation', 'Product Design', 'Lifestyle'],
  year: '2026',
  thumbnail: '/projects/hexa/hexa-organizer.png',
  images: ['/projects/hexa/hexa-organizer.png', '/projects/hexa/hexa-organizer-1.jpeg'],
  description: 'Hexagonal organizer for daily items',
};

export default function FWD() {
  return <ProjectLayout metadata={metadata} />;
}
