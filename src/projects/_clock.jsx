import React from 'react';
import ProjectLayout from '../components/ProjectLayout';

export const metadata = {
  id: '7',
  slug: 'clock',
  title: 'Clock',
  category: 'Product Design',
  tags: ['Product Design', 'Visualisation', 'Prototype'],
  year: '2025',
  thumbnail: '/projects/clock/clock.png',
  images: ['/projects/clock/clock.png', '/projects/clock/clock-1.png'],
  description:
    'A clock designed to provide both functionality and aesthetic appeal. With its sleek and minimalist design, it adds a touch of elegance and sophistication to any space while providing accurate timekeeping.',
};

export default function Clock() {
  return <ProjectLayout metadata={metadata} />;
}
