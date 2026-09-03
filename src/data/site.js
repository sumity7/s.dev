// Single source of truth for identity, contact and social links.
// Update anything here and it propagates across the whole site.

export const site = {
  name: 'Sumit Yadav',
  role: 'MERN Full Stack Developer',
  tagline: 'MongoDB · Express · React · Node.js',
  location: 'Lucknow, India',
  email: 'syadav787034@gmail.com',
  // Short hero description
  summary:
    'Building scalable, responsive and user-focused web applications with modern technologies.',
  // Career objective — shown in the hero, About and Contact sections
  careerGoal:
    'Currently seeking entry-level opportunities in IT and software development where I can apply my MERN Full Stack skills, contribute to real-world projects, and continue growing as a developer.',
  url: 'https://sumitydev.vercel.app/',
  resume: '/resume.pdf',
  available: true, // shows the "open to opportunities" status pill
}

export const socials = {
  github: 'https://github.com/sumity7',
  linkedin: 'https://www.linkedin.com/in/sumit-yadav-a1296827a/',
  instagram: 'https://www.instagram.com/deadly_sumit',
  portfolio: 'https://sumitydev.vercel.app/',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'learning', label: 'Learning' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

// ─────────────────────────────────────────────────────────────────────────
//  CONTACT FORM DELIVERY
//
//  The form posts to FormSubmit, which needs no account and no API key.
//  IMPORTANT one-time step: submit the form once after deploying. FormSubmit
//  emails you an activation link — click it, and every submission from then on
//  lands in your inbox. Until then submissions are held, not lost.
//
//  Prefer Formspree instead? Create a form at formspree.io and set
//  FORMSPREE_ID below — it takes priority over FormSubmit automatically.
//
//  If a network request fails for any reason, the form falls back to opening
//  the visitor's mail client with the message pre-filled, so it never dead-ends.
// ─────────────────────────────────────────────────────────────────────────
export const FORMSPREE_ID = ''

export const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${site.email}`
