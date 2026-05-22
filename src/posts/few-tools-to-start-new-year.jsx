import React from 'react';

export const metadata = {
  title: 'Few Tools to Start the New Year',
  date: '2023-01-02',
  excerpt:
    'A small collection of tools, communities, resources, and websites for developers, designers, startup builders, and curious makers.',
};

export default function FewToolsToStartTheNewYear() {
  return (
    <>
      <h2>Discovering Products & Trends</h2>

      <ul>
        <li>
          <a href="https://www.producthunt.com/" target="_blank" rel="noopener noreferrer">
            Product Hunt
          </a>{' '}
          — Discover new products, startups, and tools from around the world.
        </li>

        <li>
          <a href="https://news.ycombinator.com/" target="_blank" rel="noopener noreferrer">
            Hacker News
          </a>{' '}
          — Discussions on startups, technology, engineering, and internet culture.
        </li>

        <li>
          <a href="https://www.designernews.co/" target="_blank" rel="noopener noreferrer">
            Designer News
          </a>{' '}
          — Community discussions around design, UX, products, and creative work.
        </li>
      </ul>

      <h2>Productivity & Personal Growth</h2>

      <ul>
        <li>
          <a href="https://polarhabits.com/" target="_blank" rel="noopener noreferrer">
            Polar Habits
          </a>{' '}
          — A simple tool for tracking habits and building consistency.
        </li>
      </ul>

      <h2>Startup & Developer Resources</h2>

      <ul>
        <li>
          <a
            href="https://saasproducts.notion.site/saasproducts/100-AI-Startup-Ideas-5d1af89640414eeeabc6f9ea15bb30d6"
            target="_blank"
            rel="noopener noreferrer"
          >
            100 AI Startup Ideas
          </a>{' '}
          — A collection of startup ideas focused on AI products and SaaS.
        </li>

        <li>
          <a href="https://www.softfolios.com/" target="_blank" rel="noopener noreferrer">
            Softfolios
          </a>{' '}
          — Resources, tools, and guidance for developers building their careers.
        </li>

        <li>
          <a
            href="https://calthirkill.gumroad.com/l/build-a-giant-free"
            target="_blank"
            rel="noopener noreferrer"
          >
            Build a Giant
          </a>{' '}
          — A guide on startup growth, momentum, and scaling ideas.
        </li>
      </ul>

      <p>
        A few interesting tools and communities I bookmarked while entering the new year — spanning
        startups, developer culture, habits, AI, and product discovery.
      </p>
    </>
  );
}
