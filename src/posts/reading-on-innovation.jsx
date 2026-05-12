import React from 'react';

export const metadata = {
    title: 'Reading on Innovation',
    date: '2021-04-06',
    excerpt:
        'A curated reading list on innovation, design thinking, knowledge creation, and strategic product development.'
};

export default function ReadingOnInnovation() {
    return (
        <>
            <h2>Design Thinking & Product Development</h2>

            <ul>
                <li>
                    <a
                        href="https://andra-cimpan.medium.com/how-to-build-a-digital-product-from-scratch-following-a-design-thinking-approach-67eda3b45ebb"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        How to Build a Digital Product from Scratch
                    </a>{' '}
                    — A practical walkthrough of building products using a design thinking approach.
                </li>
            </ul>

            <h2>Innovation Strategy & Frameworks</h2>

            <ul>
                <li>
                    <a
                        href="https://sloanreview.mit.edu/article/the-five-stages-of-successful-innovation/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        The Five Stages of Successful Innovation
                    </a>{' '}
                    — MIT Sloan’s breakdown of how innovation evolves inside organizations.
                </li>

                <li>
                    <a
                        href="https://www.innovation-point.com/Strategic%20Innovation%20White%20Paper.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Framework for Strategic Innovation
                    </a>{' '}
                    — A white paper outlining structured approaches to innovation strategy.
                </li>

                <li>
                    <a
                        href="https://hbr.org/2015/06/you-need-an-innovation-strategy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        You Need an Innovation Strategy
                    </a>{' '}
                    — Harvard Business Review on aligning innovation with long-term business goals.
                </li>
            </ul>

            <h2>Knowledge Creation & Organizational Learning</h2>

            <ul>
                <li>
                    <a
                        href="https://hbr.org/2007/07/the-knowledge-creating-company"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        The Knowledge-Creating Company
                    </a>{' '}
                    — A foundational article on how companies generate and transfer knowledge.
                </li>
            </ul>

            <h2>Barriers to Innovation</h2>

            <ul>
                <li>
                    <a
                        href="https://www.nasa.gov/sites/default/files/files/KThompson_BarrierstoInnovation.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        NASA — Barriers to Innovation
                    </a>{' '}
                    — Insights into organizational and psychological barriers that hinder innovation.
                </li>
            </ul>

            <p>
                These articles collectively explore how innovation happens — from
                ideation and design thinking to organizational culture, strategic
                execution, and knowledge sharing.
            </p>
        </>
    );
}