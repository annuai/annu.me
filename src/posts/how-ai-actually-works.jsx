import React from "react";

export const metadata = {
    title: "How AI Actually Works",
    date: "2026-05-22",
    excerpt:
        "A simple explanation of Large Language Models and Multimodal AI.",
};

export default function HowAIActuallyWorks() {
    return (
        <>
            <p>
                AI feels magical until you understand that most of it is built on one
                surprisingly simple idea:
            </p>

            <blockquote>
                Predict what comes next.
            </blockquote>

            <p>
                Large Language Models (LLMs) are trained on enormous amounts of text:
                books, websites, code, conversations, documentation and more.
            </p>

            <p>
                During training, the model repeatedly tries to guess the next word in a
                sentence.
            </p>

            <blockquote>
                “The sky is ___”
            </blockquote>

            <p>
                After doing this billions of times, the model starts learning patterns:
                grammar, reasoning, structure, writing styles and relationships between
                ideas.
            </p>

            <p>
                Modern AI systems use something called a Transformer architecture, which
                allows the model to pay attention to important parts of a sentence while
                generating responses.
            </p>

            <p>
                So when you ask ChatGPT a question, it is not searching a database or
                “thinking” like a human.
            </p>

            <blockquote>
                It is predicting the most likely next piece of text — one token at a
                time.
            </blockquote>

            <p>
                Multimodal AI extends this idea beyond just text.
            </p>

            <p>
                Instead of only understanding words, multimodal systems can process:
            </p>

            <ul>
                <li>Images</li>
                <li>Audio</li>
                <li>Video</li>
                <li>Documents</li>
                <li>Speech</li>
            </ul>

            <p>
                An image, for example, gets broken down into smaller visual patches and
                converted into numerical representations called embeddings.
            </p>

            <p>
                The AI then learns connections between visuals and language.
            </p>

            <blockquote>
                A picture of a dog, the word “dog”, and the sound of barking become
                related internally.
            </blockquote>

            <p>
                This is why modern AI can:
            </p>

            <ul>
                <li>Describe photos</li>
                <li>Read screenshots</li>
                <li>Generate images</li>
                <li>Transcribe audio</li>
                <li>Understand videos</li>
                <li>Analyze diagrams</li>
            </ul>

            <p>
                Multimodal AI feels powerful because humans naturally understand the
                world through multiple senses at once. These systems are beginning to
                approximate that process digitally.
            </p>

            <p>
                Despite how intelligent AI can appear, it is still fundamentally a
                pattern-learning machine.
            </p>

            <blockquote>
                Not consciousness. Not understanding. Extremely advanced prediction.
            </blockquote>

            <p>
                <em>Written by ChatGPT.</em>
            </p>
        </>
    );
}