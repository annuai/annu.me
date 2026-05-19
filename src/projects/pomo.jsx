import React from "react";
import ProjectLayout from "../components/ProjectLayout";

export const metadata = {
  id: "2",
  slug: "pomo",
  title: "Pomo: A Pomodoro Timer",
  category: "Software Development",
  gridSize: "large",
  tags: ["Software Development", "UI Design", "Digital Product"],
  year: "2026",
  thumbnail: "/projects/pomo-preview.png",
  images: ["/projects/pomo-preview.png"],
  description: "Pomodoro app for MacOS users",
  externalLink: "/pomo",
};

export default function FWD() {
  return <ProjectLayout metadata={metadata} />;
}
