import React from "react";

export const metadata = {
  id: "3",
  slug: "printer",
  title: "3D Printer Design",
  category: "Consumer Electronics",
  year: "2022",
  thumbnail: "/projects/printer-hero.png",
  images: ["/projects/printer-hero.png"],
  // externalLink: "https://annuai.vercel.app/projects/invnt-3d", // Adding an external link example
  description:
    "A 3D printer design that combines functionality with cost-efficiency. With a sleek and compact form factor, it offers an intuitive user interface and high-quality printing capabilities, making it an ideal choice for both hobbyists and professionals in the world of 3D printing.",
};

export default function ThreeDPrinterDesign() {
  return <><a
    href="https://annuai.vercel.app/projects/invnt-3d"
    target="_blank"
    rel="noopener noreferrer"
    className="view-project-link"
  >
    View Full Project &rarr;
  </a></>;
}
