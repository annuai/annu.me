import React from 'react';

export const metadata = {
  title: 'Questions that reveal Great Designers',
  date: '2026-05-14',
  excerpt:
    'A collection of thoughtful UX and product design interview questions with concise answers that reveal how designers think, collaborate, and make decisions.',
};

const questions = [
  {
    category: 'Portfolio & Project Thinking',
    items: [
      {
        q: 'Walk me through a project you’re most proud of.',
        a: 'I focus on the problem, constraints, iterations, and what changed during the process.',
      },
      {
        q: 'Why did you choose these projects for your portfolio?',
        a: 'They best represent how I think, solve problems, and handle complexity.',
      },
      {
        q: 'What problem were you actually solving?',
        a: 'I try to identify the core user frustration instead of surface-level issues.',
      },
      {
        q: 'How did you know the problem was worth solving?',
        a: 'The issue consistently appeared across users, workflows, or business goals.',
      },
      {
        q: 'What assumptions did you begin with?',
        a: 'I started with hypotheses around user behavior and validated them through testing.',
      },
      {
        q: 'Which assumption turned out to be wrong?',
        a: 'One key assumption about user priorities shifted after early feedback.',
      },
      {
        q: 'What changed the most between version one and the final outcome?',
        a: 'The structure became simpler after understanding how people actually used it.',
      },
      {
        q: 'What part of the project took the longest to figure out?',
        a: 'Defining the right direction took longer than execution.',
      },
      {
        q: 'What did you intentionally leave out of the solution?',
        a: 'I removed features that increased complexity without improving clarity.',
      },
      {
        q: 'What would you do differently if you restarted the project today?',
        a: 'I would validate assumptions earlier and involve users sooner.',
      },
    ],
  },
  {
    category: 'Design Process',
    items: [
      {
        q: 'How do you approach problems you’ve never encountered before?',
        a: 'I reduce uncertainty first through research, conversations, and quick prototypes.',
      },
      {
        q: 'How do you define whether a problem is a UX problem or a business problem?',
        a: 'I look at whether the friction comes from user behavior or strategic constraints.',
      },
      {
        q: 'When do you move from exploration into execution?',
        a: 'Once patterns become consistent and the direction feels defensible.',
      },
      {
        q: 'How do you know when you’ve done enough research?',
        a: 'When additional research stops producing new insights.',
      },
      {
        q: 'How do you prioritize when time is limited?',
        a: 'I focus on high-impact problems that reduce the most friction.',
      },
      {
        q: 'What does your process look like under extreme deadlines?',
        a: 'I simplify the scope and shorten feedback loops.',
      },
      {
        q: 'How does your process change when working alone versus in a team?',
        a: 'Teams require more alignment and communication throughout the process.',
      },
      {
        q: 'What’s a moment where your process completely broke down?',
        a: 'A project failed when assumptions were never validated early enough.',
      },
      {
        q: 'How do you avoid getting attached to early ideas?',
        a: 'I treat ideas as experiments rather than final answers.',
      },
      {
        q: 'When do you prototype versus directly execute?',
        a: 'I prototype when uncertainty is high or interactions are complex.',
      },
    ],
  },
  {
    category: 'Design Decisions & Trade-offs',
    items: [
      {
        q: 'Why did you choose this direction over the alternatives?',
        a: 'It balanced usability, feasibility, and clarity most effectively.',
      },
      {
        q: 'What other concepts did you explore?',
        a: 'I explored broader and more experimental directions before simplifying.',
      },
      {
        q: 'What trade-offs did you knowingly accept?',
        a: 'I sacrificed flexibility to improve usability and focus.',
      },
      {
        q: 'Tell me about a decision you couldn’t fully support with data.',
        a: 'I relied on intuition and past experience when timelines were tight.',
      },
      {
        q: 'Have you ever disagreed with user feedback?',
        a: 'Yes, sometimes feedback reflects symptoms rather than root problems.',
      },
      {
        q: 'What do you do when research and instinct conflict?',
        a: 'I try to understand why the conflict exists before choosing a direction.',
      },
      {
        q: 'Describe a time you defended a design decision.',
        a: 'I defended simplicity when stakeholders wanted unnecessary complexity.',
      },
      {
        q: 'Describe a time you changed your mind completely.',
        a: 'User testing revealed a workflow behaved differently than expected.',
      },
      {
        q: 'How do you make decisions when there’s no data available?',
        a: 'I rely on first principles, constraints, and fast validation.',
      },
      {
        q: 'What’s a design trend you disagree with?',
        a: 'Interfaces that prioritize aesthetics over clarity and usability.',
      },
    ],
  },
  {
    category: 'Collaboration & Communication',
    items: [
      {
        q: 'How do you explain design decisions to non-designers?',
        a: 'I connect decisions back to user needs and business impact.',
      },
      {
        q: 'What makes collaboration difficult for you?',
        a: 'Misalignment usually happens when goals are unclear.',
      },
      {
        q: 'Tell me about a conflict with a PM or engineer.',
        a: 'We disagreed on scope, but aligned after clarifying priorities.',
      },
      {
        q: 'How do you handle feedback you strongly disagree with?',
        a: 'I try to understand the concern before reacting defensively.',
      },
      {
        q: 'What kind of feedback is hardest for you to hear?',
        a: 'Feedback that questions clarity after significant iteration.',
      },
      {
        q: 'How do you know when to push back?',
        a: 'I push back when the decision negatively impacts users or product clarity.',
      },
      {
        q: 'How do you build trust with engineers?',
        a: 'By involving them early and respecting technical constraints.',
      },
      {
        q: 'Have you ever failed to communicate an idea clearly?',
        a: 'Yes, usually when I assumed too much shared context.',
      },
      {
        q: 'What’s your role in a team beyond designing screens?',
        a: 'I help align product thinking, workflows, and decision-making.',
      },
      {
        q: 'What kind of teammate do you work best with?',
        a: 'People who are curious, collaborative, and direct.',
      },
    ],
  },
  {
    category: 'Reflection & Growth',
    items: [
      {
        q: 'What’s a project that made you grow the most?',
        a: 'Projects with ambiguity and real constraints taught me the most.',
      },
      {
        q: 'What’s a skill you’re actively trying to improve?',
        a: 'I’m improving storytelling and strategic product thinking.',
      },
      {
        q: 'What kind of designer were you two years ago?',
        a: 'I focused more on outputs than systems and long-term thinking.',
      },
      {
        q: 'What’s a belief about design you’ve changed your mind about?',
        a: 'Good design is less about novelty and more about clarity.',
      },
      {
        q: 'What’s something junior designers misunderstand about design?',
        a: 'Design is more about decision-making than visuals.',
      },
      {
        q: 'What’s something senior designers sometimes overcomplicate?',
        a: 'Processes can become heavier than necessary.',
      },
      {
        q: 'How do you deal with creative burnout?',
        a: 'I step away, observe more, and reconnect with curiosity.',
      },
      {
        q: 'What motivates you to keep designing?',
        a: 'I enjoy turning vague problems into tangible solutions.',
      },
      {
        q: 'What kind of work do you want to be known for?',
        a: 'Thoughtful products that balance function, clarity, and emotion.',
      },
      {
        q: 'What’s something you still struggle with as a designer?',
        a: 'Knowing when to stop refining details.',
      },
    ],
  },
];

export default function InterviewQuestions() {
  return (
    <>
      <h1>Questions That Reveal Great Designers</h1>
      <p>
        Great design interviews are not about rehearsed answers. They reveal how designers think,
        adapt, communicate, and make decisions under constraints.
      </p>
      {questions.map((section) => (
        <div key={section.category}>
          <h2>{section.category}</h2>
          {section.items.map((item, index) => (
            <div key={index} style={{ marginBottom: '2rem' }}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      ))}
      AI wrote most of it - with support from me of course.
    </>
  );
}
