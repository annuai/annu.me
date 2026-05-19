import React from "react";
import ProjectLayout from '../components/ProjectLayout';

export const metadata = {
    id: "11",
    slug: "display-bar",
    title: "Display Bar",
    category: "Product Design",
    tags: ["Design Visualisation", "Product Design", "Lifestyle"],
    year: "2026",
    thumbnail: "/projects/display-bar/display-bar.png",
    images: ["/projects/display-bar/display-bar.png", "/projects/display-bar/display-bar-1.png"],
    description:
        "Display Bar is a poster-hanging bar with lego blocks for hanging other items on top",
};

export default function FWD() {
    return <ProjectLayout metadata={metadata} />;
}
