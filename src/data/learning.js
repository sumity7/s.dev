// Areas Sumit is actively learning and exploring.
//
// IMPORTANT: this section is deliberately separate from Skills. Everything here
// is framed as in-progress learning, never as expertise. Keep that framing if
// you edit the copy.

import { FaBrain } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi'
import { SiPython } from 'react-icons/si'
import { TbMessageChatbot, TbDatabaseSearch, TbRobot } from 'react-icons/tb'

export const learningIntro =
  'Beyond my MERN core, I set time aside each week to build my foundations in Python and to explore how AI is reshaping the way software gets built. These are active areas of study rather than areas of expertise — I list them here so you know where I am heading, not what I have already mastered.'

export const learningItems = [
  {
    name: 'Python',
    stage: 'Currently learning',
    Icon: SiPython,
    color: '#4B8BBE',
    note: 'Working through the language fundamentals — syntax, data structures and standard library — as the foundation for everything below.',
  },
  {
    name: 'Artificial Intelligence',
    stage: 'Exploring',
    Icon: TbRobot,
    color: '#5A8CFF',
    note: 'Reading up on core AI concepts and how they apply to everyday product features.',
  },
  {
    name: 'Machine Learning',
    stage: 'Exploring',
    Icon: FaBrain,
    color: '#8FB0FF',
    note: 'Getting to grips with the basics — how models learn from data, and where ML is the right tool.',
  },
  {
    name: 'Generative AI',
    stage: 'Exploring',
    Icon: HiOutlineSparkles,
    color: '#F6B35C',
    note: 'Experimenting with generative models in small side projects, including AI-assisted message generation.',
  },
  {
    name: 'Large Language Models (LLMs)',
    stage: 'Exploring',
    Icon: TbMessageChatbot,
    color: '#59C6E6',
    note: 'Learning how LLMs are prompted, evaluated and wired into real applications through APIs.',
  },
  {
    name: 'Retrieval-Augmented Generation (RAG)',
    stage: 'Exploring',
    Icon: TbDatabaseSearch,
    color: '#8B9DFF',
    note: 'Studying how retrieval pipelines ground model responses in trusted, up-to-date data.',
  },
]

export const learningApproach = [
  'Structured self-study alongside client work',
  'Small, hands-on experiments over passive reading',
  'Applying new ideas to my own projects first',
]
