import React from 'react';
import ProjectLayout from '../components/ProjectLayout';

export const metadata = {
  id: "6",
  slug: "organizer",
  title: "Organizer",
  category: "Product Design",
  tags: ["Industrial Design", "Prototype", "Storage"],
  year: "2025",
  thumbnail: "/projects/organizer/organizer.png",
  images: [
    "/projects/organizer/organizer.png",
    "/projects/organizer/organizer-1.jpeg",
    "/projects/organizer/organizer-2.jpeg",
  ],
  description: "An organizer designed to help you keep your belongings tidy and easily accessible. With its sleek and functional design, it offers a practical solution for organizing your space while adding a touch of style and sophistication."
};

export default function Organizer() {
  return <ProjectLayout metadata={metadata} />;
}
