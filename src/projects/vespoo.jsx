import React from "react";
import ProjectLayout from '../components/ProjectLayout';

export const metadata = {
  id: "3",
  slug: "vespoo",
  title: "Vespoo!",
  category: "Product Design",
  tags: ["3D Printing", "Toy Design", "Prototype"],
  gridSize: "tall",
  year: "2026",
  thumbnail: "/projects/vespoo/vespoo.png",
  images: ["/projects/vespoo/vespoo.png", "/projects/vespoo/vespoo-1.png"],
  description:
    "Vespoo is a fun little 3D Printed + Wooden toy made for kids and adults both.",
};

export default function Vespoo() {
  return <ProjectLayout metadata={metadata} />;
}
