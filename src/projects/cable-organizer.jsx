import React from 'react';

export const metadata = {
  id: "1",
  slug: "cable-organizer",
  title: "Cable Organizer",
  category: "Industrial Design / Product",
  year: "2025",
  thumbnail: "/projects/cable-organizer/cable-org.png",
  images: ["/projects/cable-organizer/cable-org.png"],
  description: "Cable organizer designed to keep your workspace tidy and efficient. With a sleek, minimalist design, it provides a practical solution for managing cables while adding a touch of elegance to your desk."
};

export default function CableOrganizer() {
  return (
    <>
      <p>{metadata.description}</p>
    </>
  );
}
