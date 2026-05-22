import React from "react";
import ProjectLayout from '../components/ProjectLayout';

export const metadata = {
    id: "6",
    slug: "maruti",
    title: "Indian Car Maker",
    category: "UI/UX Design",
    tags: ["Design Visualisation", "UI Design", "UX Research"],
    year: "2024",
    walthroughOnly: true,
    thumbnail: "/projects/fwd+maruti_maruti.svg",
    images: ["/projects/fwd+maruti_maruti.svg"],
    description:
        "Work done for an Indian Carmaker",
};

export default function Maruti() {
    return <ProjectLayout metadata={metadata} />;
}
