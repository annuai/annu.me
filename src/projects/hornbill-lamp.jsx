import React from 'react';

export const metadata = {
  id: "2",
  slug: "hornbill-lamp",
  title: "Hornbill Lamp",
  category: "Product Design",
  tags: ["Lighting Design", "Visualisation", "Prototype"],
  gridSize: "large",
  year: "2025",
  thumbnail: "/projects/hornbill-lamp/hornbill-lamp.png",
  images: [
    "/projects/hornbill-lamp/hornbill-lamp-1.jpeg",
    "/projects/hornbill-lamp/hornbill-lamp-2.jpeg",
    "/projects/hornbill-lamp/hornbill-lamp-3.jpeg",
  ],
  description: "A lamp designed to provide both functional lighting and aesthetic appeal. With its unique and artistic design, it adds a touch of elegance and sophistication to any space while providing warm and inviting illumination."
};

export default function HornbillLamp() {
  return (
    <>
      <p>{metadata.description}</p>
    </>
  );
}
