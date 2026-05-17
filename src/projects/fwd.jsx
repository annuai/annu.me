import React from "react";
import ProjectLayout from '../components/ProjectLayout';

export const metadata = {
    id: "9",
    slug: "fwd",
    title: "Chinese Insurance",
    category: "UI/UX Design",
    tags: ["Design Visualisation", "UI Design", "Digital Product"],
    year: "2024",
    walthroughOnly: true,
    thumbnail: "/projects/fwd+maruti_fwd.svg",
    images: ["/projects/fwd+maruti_fwd.svg"],
    description:
        "Work done for a chinese Insurance giant",
};

export default function FWD() {
    return <ProjectLayout metadata={metadata} />;
}
