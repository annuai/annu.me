import React from 'react';
import './printer.css';

export const metadata = {
  id: "1",
  slug: "invnt-printer",
  title: "3D Printer Design",
  category: "Consumer Electronics",
  tags: ["Industrial Design", "Mechanical Engineering", "Visualisation"],
  gridSize: "large",
  year: "2022",
  thumbnail: "/projects/invnt-3d-printer/printer-hero-with-bg.png",
  images: ["/projects/invnt-3d-printer/printer-hero.png"],
  description: "Developing an inexpensive FDM 3D printing platform from readily available components, prioritizing usability, low-maintenance, and cost-efficiency."
};

export default function ThreeDPrinterDesign() {
  return (
    <div className="printer-case-study">
      {/* Intro Header Section */}
      <section className="cs-intro-section">
        <span className="cs-category">Industrial Design</span>
        <h1 className="cs-title">
          Invnt 3D: Developing an inexpensive FDM 3D printing platform from readily available components
        </h1>

        <div className="cs-intro-grid">
          <div className="cs-intro-text">
            <p className="cs-lead">
              Low-cost 3D printers are often badly designed in terms of usability to non-technical consumers. The project looks into development of a product for new enthusiasts interested in 3D printing without much technical knowledge, providing them a kickstart with a simple thoughtfully designed 3D printer.
            </p>
            <div className="cs-problem-statement">
              <h3>Problem Statement</h3>
              <p>
                How do we design and develop a versatile 3D printer platform with the less technically acquainted user in mind? How can the Indian context be put into the idea of the machine? What is the scope of the audience for such machines in India and how can design be used to better cater to their requirements?
              </p>
            </div>
          </div>

          <div className="cs-meta-box">
            <div className="cs-meta-row">
              <span className="cs-meta-label">Type</span>
              <span className="cs-meta-val">Product Design & Prototyping</span>
            </div>
            <div className="cs-meta-row">
              <span className="cs-meta-label">Project Duration</span>
              <span className="cs-meta-val">6 months (June - December 2021)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="cs-section hero-section">
        <div className="cs-image-wrapper bg-red-light">
          <img src="/projects/invnt-3d-printer/printer-hero.png" alt="3D printer render" />
        </div>
        <div className="cs-caption-box">
          <p>
            A 3D printer will soon become a household appliance. Today, they are machines that look and feel right out of a sci-fi movie - very complex in their appearance and mostly complex with their working and assembly as well. User-centric design can solve many of the problems of these printers. There is a market that would potentially buy 3D printers just like how they adapted inkjets and laser printers. Designing the printer that resolves the idea of printing objects for the naive individual will always be the ultimate goal of a consumer 3D printer design.
          </p>
        </div>
      </section>

      {/* Market Research Sections */}
      <section className="cs-section bg-teal-block">
        <div className="cs-split-grid align-center">
          <div className="cs-image-column span-2">
            <img src="/projects/invnt-3d-printer/invnt-annume2.png" alt="3D printer view 1" />
          </div>
          <div className="cs-image-column span-1 hide-mobile">
            <img src="/projects/invnt-3d-printer/invnt-annume2-1.png" alt="3D printer view 2" />
          </div>
        </div>
        <div className="cs-caption-box">
          <p>
            Studying the market showed the huge growth potential for products being developed for the upcoming 3D printing boom. It's already happening - Ender 3, a low-cost 3D printer from Creality, a Chinese company dominated the market in just two years. The market will grow 5x in 10 years.
          </p>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split-grid align-center">
          <div className="cs-image-column span-1">
            <img src="/projects/invnt-3d-printer/invnt-annume3-1.png" alt="3D printer market" className="pr-3-desktop" />
          </div>
          <div className="cs-image-column span-2">
            <img src="/projects/invnt-3d-printer/invnt-annume3.png" alt="3D printer market chart" />
          </div>
        </div>
        <div className="cs-caption-box">
          <p>
            Market Research looked into getting a picture of what sells today right now and what will sell 5 years down the line. The products of today will eventually evolve into better ones. The real challenge is making the better one today itself.
          </p>
        </div>
      </section>

      <section className="cs-section bg-purple-block">
        <div className="cs-split-grid align-center">
          <div className="cs-image-column span-1">
            <img src="/projects/invnt-3d-printer/invnt-annume4.png" alt="Fused Filament Deposition research" />
          </div>
          <div className="cs-image-column span-2">
            <img src="/projects/invnt-3d-printer/invnt-annume4-1.png" alt="FFD motion platform" />
          </div>
        </div>
        <div className="cs-caption-box">
          <p>
            Fused Filament Deposition was studied to fully understand the nuances of why's and why not's. This led to helping make important decisions in the product development stage later on - especially while choosing extruder systems and motion platforms.
          </p>
        </div>
      </section>

      {/* Product Architecture and Enclosure */}
      <section className="cs-section bg-orange-block">
        <div className="cs-image-wrapper">
          <img src="/projects/invnt-3d-printer/invnt-annume5.png" alt="Product exploded view" />
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split-grid">
          <div className="cs-image-column span-1">
            <img src="/projects/invnt-3d-printer/invnt-annume6-1.png" alt="Motion platform prototype" />
          </div>
          <div className="cs-image-column span-2">
            <img src="/projects/invnt-3d-printer/invnt-annume6.png" alt="Electronics assembly" />
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split-grid py-5">
          <div className="cs-image-column span-1">
            <img src="/projects/invnt-3d-printer/invnt-annume7-1.png" alt="Frame structure tap connection" />
          </div>
          <div className="cs-image-column span-2">
            <img src="/projects/invnt-3d-printer/invnt-annume7.png" alt="Complete frame setup" />
          </div>
        </div>
      </section>

      {/* Redefined Brief and Objectives */}
      <section className="cs-section brief-objectives-section">
        <div className="brief-card">
          <div className="brief-block">
            <span className="brief-label">Redefined Brief</span>
            <p className="brief-highlight">
              Develop a cost-effective CoreXY based highly extensible 3D printing platform with accessibility, maintenance and simplicity at the core.
            </p>
          </div>

          <div className="brief-block">
            <span className="brief-label">Target Audience</span>
            <p className="brief-highlight">
              Beginners, Hobbyists & Students
            </p>
          </div>

          <div className="brief-block">
            <span className="brief-label">Objectives</span>
            <ul className="objectives-list">
              <li>
                <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Fit into a budget segment of ₹30,000</span>
              </li>
              <li>
                <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Low-maintenance design</span>
              </li>
              <li>
                <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Smart connectivity features</span>
              </li>
              <li>
                <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Safety enclosure for toxic fumes</span>
              </li>
              <li>
                <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>No-noise operations design</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ideation & Prototyping */}
      <section className="cs-section">
        <h2 className="section-title">Ideation & Prototyping</h2>
        <div className="cs-image-wrapper">
          <img src="/projects/invnt-3d-printer/invnt-annume9.png" alt="Concept sketches" />
        </div>
        <div className="cs-caption-box">
          <p>
            The simplest functional form that increased visibility, maintains Do-It-Yourself capabilities and stays functional while being aesthetically pleasing was derived from the exploration. The final idea is to move forward with an enclosure made of 2020R aluminium extrusion profiles for the frame and clear acrylic sheets for the enclosure.
          </p>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-image-wrapper">
          <img src="/projects/invnt-3d-printer/invnt-annume10.png" alt="Movable display structure" />
        </div>
        <div className="cs-caption-box">
          <p className="font-bold">Display should be able to comfortably change orientation as the user prefers to.</p>
          <p>
            Location of the display is a personal preference - a movable display is more inclusive, modular and the internal design keeps upgradeability at the core.
          </p>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-grid-2col">
          <img src="/projects/invnt-3d-printer/invnt-annume11.png" alt="Enclosure detail" className="rounded-img" />
          <img src="/projects/invnt-3d-printer/invnt-annume12.png" alt="Hinges and modular joints" className="rounded-img" />
        </div>
      </section>

      {/* Final Product */}
      <section className="cs-section">
        <h2 className="section-title">Final Product</h2>
        <div className="cs-image-wrapper">
          <img src="/projects/invnt-3d-printer/invnt-annume13.png" alt="Final 3D printer render" />
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-grid-2col">
          <img src="/projects/invnt-3d-printer/invnt-annume14.png" alt="Detailed assembly profile" className="rounded-img" />
          <img src="/projects/invnt-3d-printer/invnt-annume15.png" alt="Printbed calibration detail" className="rounded-img" />
        </div>
      </section>

      {/* Bill of Materials */}
      <section className="cs-section">
        <h2 className="section-title">Indented Bill of Materials and Processes</h2>
        <div className="cs-image-wrapper">
          <img src="/projects/invnt-3d-printer/invnt-annume16.png" alt="BOM Spreadsheet" />
        </div>
        <div className="cs-caption-box">
          <p>
            Overall product cost with all the parts sourced from Indian retail stores excluding any labour, transportation comes to around <strong>₹32,000</strong>.
          </p>
          <p className="text-secondary text-sm">
            Prices are sourced from major DIY part resellers - including Robu, Novo3D, Electronic Spices, Electronics Comp, and RhydoLabz.
          </p>
        </div>
      </section>

      {/* Component Level Deep Dive */}
      <section className="cs-section cs-grid-2col gap-3">
        <div className="deep-dive-card">
          <img src="/projects/invnt-3d-printer/invnt-frame.png" alt="Frame" />
          <div className="card-padding">
            <h3>The Frame</h3>
            <p>The frame was purchased as 340mm pieces of 2020R extruded aluminium profiles. They were tapped, powder coated and connected together with 3D printed corner connectors.</p>
          </div>
        </div>

        <div className="deep-dive-card">
          <img src="/projects/invnt-3d-printer/invnt-printhead.png" alt="Printhead" />
          <div className="card-padding">
            <h3>The Printhead</h3>
            <p>Printhead can be opened easily to deal with failure - often times, printhead gets clogged and an easy access door to printhead is a boon for the user.</p>
          </div>
        </div>

        <div className="deep-dive-card">
          <img src="/projects/invnt-3d-printer/invnt-print.png" alt="Final Machine" />
          <div className="card-padding">
            <h3>Final Machine</h3>
            <p>A fully assembled, fully functional prototype operating in the test workspace.</p>
          </div>
        </div>

        <div className="deep-dive-card">
          <img src="/projects/invnt-3d-printer/invnt-box.png" alt="Packaging Box" />
          <div className="card-padding">
            <h3>Custom Shipping Box</h3>
            <p>Box was made to help with transporting the printer intact (without disassembly). Stickers were used as stencils to paint in the branding and handle-with-care signs.</p>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="cs-section videos-section">
        <h2 className="section-title">Case Videos</h2>
        <div className="cs-videos-grid">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/B7JiMcPLz-U"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              title="3D printer showcase video 1"
            ></iframe>
          </div>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/ienUoz6PBDU"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              title="3D printer showcase video 2"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CAD Embed Section */}
      <section className="cs-section cad-embed-section">
        <h2 className="section-title">Interactive CAD Assembly Model</h2>
        <div className="cad-wrapper">
          <iframe src="https://gmail5422695.autodesk360.com/shares/public/SH90d2dQT28d5b6028116c7046e2df1076f1?mode=embed" width="800" height="600" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0"></iframe>
          {/* <iframe
            src="https://myhub.autodesk360.com/ue289f061/shares/public/SH35dfcQT936092f0e439846dd6537c4507d?mode=embed"
            height="550"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen"
            frameBorder="0"
            title="Invnt 3D Autodesk CAD Embed"
          ></iframe> */}
        </div>
      </section>

      {/* Learnings and Takeaways */}
      <section className="cs-section learnings-section">
        <h2 className="section-title">Learnings & Takeaways</h2>
        <div className="learnings-grid">
          <div className="learning-card">
            <h4>Technical Drawings / Engineering Drawings</h4>
            <p>Learnt how to create manufacturing-ready technical drawings with tight tolerances and accurate callouts for CNC, laser routing, and tapped profiles.</p>
          </div>

          <div className="learning-card">
            <h4>Learning New Fabrication Processes</h4>
            <p>Explored several fabrication techniques beyond basic FDM 3D printing, including aluminum powder coating, profile tapping, and threading. Mastered optimizing print density for high structural integrity with minimal filament.</p>
          </div>

          <div className="learning-card">
            <h4>Time & Project Management</h4>
            <p>The project initially targeted a strict 4-month deadline, which extended to 6 months of prototype iteration and 1 month of documentation. Learned to factor logistical lead times, sourcing delays, and fabrication cycles into the schedule.</p>
          </div>

          <div className="learning-card">
            <h4>Logistics & Purchase Management</h4>
            <p>As a self-sponsored project, budgeting was paramount. Encountered initial inventory overlap due to calculations errors, which highlighted the crucial role of thorough, checked Bill of Materials prior to active purchasing.</p>
          </div>
        </div>
      </section>

      {/* Download and Documentation */}
      <section className="cs-section documentation-section">
        <div className="doc-box">
          <p>For a highly detailed exploration, design specifications, calculations, and analysis:</p>
          <a href="/projects/invnt-3d-printer/invnt-3d-printer-gp.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary doc-btn">
            Read Full Project Documentation PDF &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
