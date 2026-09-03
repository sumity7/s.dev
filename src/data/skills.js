// Categorized skills. Each item carries its brand colour, revealed on hover.
// No proficiency percentages — categorization plus an honest `level` badge
// communicates depth without inventing numbers.
//
// level: omit for working proficiency, or use 'Basic' / 'Learning'.

import { FaJava } from 'react-icons/fa'
import { TbApi, TbBrandVscode, TbCloud } from 'react-icons/tb'
import {
  SiJavascript,
  SiPython,
  SiC,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiJsonwebtokens,
  SiRazorpay,
  SiVercel,
  SiRender,
} from 'react-icons/si'

export const skillGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'React.js', Icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3' },
      { name: 'Vite', Icon: SiVite, color: '#8A6CFF' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express.js', Icon: SiExpress, color: '#AEB8CC' },
      { name: 'REST APIs', Icon: TbApi, color: '#5A8CFF' },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    title: 'Auth & Payments',
    items: [
      { name: 'JWT', Icon: SiJsonwebtokens, color: '#EC5B99' },
      { name: 'Razorpay', Icon: SiRazorpay, color: '#3C8DF0' },
    ],
  },
  {
    title: 'Tools & Cloud',
    items: [
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'GitHub', Icon: SiGithub, color: '#EAEEF7' },
      { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
      { name: 'VS Code', Icon: TbBrandVscode, color: '#3C9EE5' },
      { name: 'Vercel', Icon: SiVercel, color: '#EAEEF7' },
      { name: 'Render', Icon: SiRender, color: '#46E3B7' },
      { name: 'Microsoft Azure', Icon: TbCloud, color: '#3C9EE5' },
    ],
  },
  {
    title: 'Other languages',
    note: 'Beyond my MERN core — coursework and smaller programs.',
    items: [
      { name: 'Java', Icon: FaJava, color: '#E76F00', level: 'Basic' },
      { name: 'C', Icon: SiC, color: '#659AD2', level: 'Basic' },
      { name: 'Python', Icon: SiPython, color: '#4B8BBE', level: 'Learning' },
    ],
  },
]

export const coreConcepts = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'DBMS',
  'Operating Systems',
]
