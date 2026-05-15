import React from 'react';

export const metadata = {
  id: "2",
  slug: "lego-board",
  title: "Wooden Lego Board",
  category: "Lifestyle / Product",
  year: "2025",
  thumbnail: "/projects/lego-board/lego-block.png",
  images: ["/projects/lego-board/lego-block.png"],
  description: "Lego board designed to provide a sturdy and visually appealing base for building Lego creations. Crafted from high-quality wood, it offers a smooth surface for building while adding a touch of warmth and sophistication to playtime."
};

export default function WoodenLegoBoard() {
  return (
    <>
      <p>{metadata.description}</p>
    </>
  );
}
