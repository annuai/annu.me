import React from "react";
import ProjectLayout from '../components/ProjectLayout';

export const metadata = {
  id: "5",
  slug: "jacket",
  title: "Riding Jacket",
  category: "Apparel Design",
  tags: ["Visualisation", "Textile"],
  year: "2025",
  thumbnail: "/projects/jacket/jacket-thumb.png",
  images: ["/projects/jacket/jacket.jpeg", "/projects/jacket/jacket-1.jpeg", "/projects/jacket/jacket-2.png", "/projects/jacket/jacket-3.png", "/projects/jacket/jacket-4.png", "/projects/jacket/jacket-5.png", "/projects/jacket/jacket-6.png", "/projects/jacket/jacket-7.png", "/projects/jacket/jacket-8.png"],
  description: "A riding jacket designed for riders who want both style and protection. Made with high-quality materials, it offers a comfortable fit while keeping you safe on the road."
};

export default function WoodenLegoBoard() {
  return <ProjectLayout metadata={metadata} />;
}
