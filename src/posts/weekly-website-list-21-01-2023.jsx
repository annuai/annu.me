import React from 'react';

export const metadata = {
    title: 'Weekly Websites List: 21/1/2023',
    date: '2023-01-21',
    excerpt:
        'A weekly collection of links on AI, neural networks, developer experience, design systems, learning resources, books, and idea generation.'
};

export default function WeeklyWebsitesList21012023() {
    return (
        <>
            <h2>Artificial Intelligence & Machine Learning</h2>

            <p>
                Andrej Karpathy is an AI developer who previously worked at Tesla and
                OpenAI. His writings and explanations around deep learning are some of
                the most approachable technical resources on AI.
            </p>

            <ul>
                <li>
                    <a
                        href="http://karpathy.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>Andrej Karpathy — Blog</strong>
                    </a>{' '}
                    — Articles and thoughts on AI, neural networks, and computing.
                </li>

                <li>
                    <a
                        href="http://karpathy.github.io/2022/03/14/lecun1989/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>A 33-Year-Old Neural Network Implementation</strong>
                    </a>{' '}
                    — Karpathy’s exploration of an old neural network paper and implementation.
                </li>

                <li>
                    <a
                        href="http://karpathy.github.io/2021/03/27/forward-pass/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>Forward Pass</strong>
                    </a>{' '}
                    — A short story on AI.
                </li>

                <li>
                    <a
                        href="https://openai.com/blog/whisper/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>Whisper — OpenAI Speech Recognition</strong>
                    </a>{' '}
                    — Understanding how OpenAI’s speech recognition system works.
                </li>

                <li>
                    <a
                        href="https://scale.com/blog/chatgpt-vs-claude"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>Meet Claude: Anthropic’s Rival to ChatGPT</strong>
                    </a>
                </li>

                <li>
                    <a
                        href="https://share-docs.clickup.com/25598832/d/h/rd6vg-14247/0b79ca1dc0f7429/rd6vg-15665"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>List of AI Tools</strong>
                    </a>
                </li>

                <li>
                    <a
                        href="https://ai.stackexchange.com/questions/22361/why-cant-language-models-like-gpt-3-continuously-learn-once-trained"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>Why Can't Language Models Continuously Learn Once Trained?</strong>
                    </a>{' '}
                    — Discussion about limitations in GPT-3 style models.
                </li>
            </ul>

            <h2>Developer Experience & Web Development</h2>

            <p>
                Lee Robinson is the VP of Developer Experience at Vercel and writes a
                lot about frontend engineering, developer tooling, and systems.
            </p>

            <ul>
                <li>
                    <a
                        href="https://leerob.io/blog"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>Lee Robinson — Blog</strong>
                    </a>
                </li>

                <li>
                    <a
                        href="https://leerob.io/blog/style-guides-component-libraries-design-systems"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>Everything I Know About Style Guides, Design Systems, and Component Libraries</strong>
                    </a>
                </li>

                <li>
                    <a
                        href="https://devhints.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>DevHints</strong>
                    </a>{' '}
                    — Handy cheatsheets for web development.
                </li>
            </ul>

            <h2>Books, Ideas & Learning</h2>

            <ul>
                <li>
                    <a
                        href="https://www.bestbooks.to/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>BestBooks</strong>
                    </a>{' '}
                    — Book recommendations from influential people.
                </li>

                <li>
                    <a
                        href="https://www.marclittlemore.com/creating-an-idea-habit/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>Building an Idea Factory</strong>
                    </a>{' '}
                    — Developing a habit of generating ideas consistently.
                </li>
            </ul>

            <p>
                This week’s rabbit holes revolved mostly around AI, developer tools,
                neural networks, and how people build systems for learning, creating,
                and generating ideas over time.
            </p>
        </>
    );
}