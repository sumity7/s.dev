// ─────────────────────────────────────────────────────────────────────────
//  PROJECT LINKS — every URL the site uses lives in this one block.
//  Leave `demo` as '' to hide the "Live demo" button for that project.
//  Where an individual repository isn't public yet, `code` points at the
//  GitHub profile so the button still goes somewhere real.
// ─────────────────────────────────────────────────────────────────────────
const GITHUB_PROFILE = 'https://github.com/sumity7'

const links = {
  codefusion: {
    code: 'https://github.com/sumity7/codefusion',
    demo: 'https://codefusion.nextgenfusion.in',
  },
  library: {
    code: 'https://github.com/sumity7/student-library-management-system',
    demo: 'https://student-library-management-system-ten.vercel.app/',
  },
  nova: {
    code: 'https://github.com/sumity7/nova-ecommerce',
    demo: 'https://nova-ecommerce-hazel.vercel.app/',
  },
  hotel: {
    code: GITHUB_PROFILE, // individual repo not public yet
    demo: 'https://hotel-management-system-xi-seven.vercel.app',
  },
  shrihs: {
    code: 'https://github.com/sumity7/shri-hs-library',
    demo: 'https://shri-hs-library-i2wl.vercel.app/',
  },
  portfolio: {
    code: GITHUB_PROFILE,
    demo: 'https://sumitydev.vercel.app/',
  },
  food: {
    code: GITHUB_PROFILE,
    demo: '', // no live deployment yet
  },
  autogreet: {
    code: GITHUB_PROFILE,
    demo: '', // backend service — nothing to view in a browser
  },
}

// Order matters: this is the order cards appear in. The first entry with
// `spotlight: true` becomes the large featured card.
export const projects = [
  {
    id: 'codefusion',
    name: 'CodeFusion',
    tagline: 'Full-stack UI component marketplace',
    description:
      'A full-stack platform where developers can discover, preview and access ready-to-use premium UI components and digital resources, with search, categories, live previews, authentication, wishlist, subscriptions and protected premium content.',
    highlights: [
      'Live UI previews with category-based browsing, search and filtering',
      'Authentication, wishlist and subscription/token-based access to protected premium content',
      'Admin/product management with a responsive light/dark UI and smooth animations',
    ],
    tech: [
      'React 19',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'Redux Toolkit',
      'Axios',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Docker',
    ],
    accent: '#B073FF',
    mock: 'codefusion',
    links: links.codefusion,
    spotlight: true,
  },
  {
    id: 'library',
    name: 'Student Library Management System',
    tagline: 'Full-stack library & seat-booking platform with payments',
    description:
      'A MERN application where students book library seats and pay online, with an admin dashboard to manage availability, bookings and payments.',
    highlights: [
      'JWT auth with role-based access for students and administrators',
      'Seat booking, availability management and an admin dashboard',
      'Razorpay payment processing wired through REST APIs',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'JWT', 'Tailwind'],
    accent: '#5A8CFF',
    mock: 'library',
    links: links.library,
    spotlight: false,
  },
  {
    id: 'nova',
    name: 'NOVA — Premium E-commerce Store',
    tagline: 'Full-stack online store with admin management',
    description:
      'A complete e-commerce app covering product browsing, cart, authentication and order management, plus an admin area to manage products, users and orders.',
    highlights: [
      'Product catalog, details, cart and order management',
      'User authentication and a responsive shopping experience',
      'REST APIs for products, users, cart and orders',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'Tailwind'],
    accent: '#59C6E6',
    mock: 'nova',
    links: links.nova,
    spotlight: false,
  },
  {
    id: 'hotel',
    name: 'Hotel Management System',
    tagline: 'Full-stack hotel operations & booking',
    description:
      'A hotel management application with secure authentication and REST APIs for handling rooms, bookings and day-to-day management tasks.',
    highlights: [
      'Backend REST APIs with database integration',
      'Authentication and role-aware management functionality',
      'Booking and management workflows',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    accent: '#8B9DFF',
    mock: 'hotel',
    links: links.hotel,
    spotlight: false,
  },
  {
    id: 'shrihs',
    name: 'Shri HS Library Website',
    tagline: 'Library website for a local study centre',
    description:
      'A responsive website for a local library and study centre, presenting facilities, timings and contact details in a clean, mobile-first layout.',
    highlights: [
      'Mobile-first responsive layout',
      'Clear information architecture for visitors',
      'Deployed and live on Vercel',
    ],
    tech: ['React', 'JavaScript', 'Tailwind', 'Vite'],
    accent: '#4FC08D',
    mock: 'shrihs',
    links: links.shrihs,
    spotlight: false,
  },
  {
    id: 'portfolio',
    name: 'Developer Portfolio',
    tagline: 'This site — built from scratch',
    description:
      'My personal portfolio, designed and built from scratch with React, Vite and Tailwind CSS. Fully responsive, accessible and SEO-ready.',
    highlights: [
      'Custom design system, no UI template',
      'Scroll animations that respect reduced-motion preferences',
      'Semantic HTML, structured data and Open Graph metadata',
    ],
    tech: ['React', 'Vite', 'Tailwind', 'JavaScript'],
    accent: '#8FB0FF',
    mock: 'portfolio',
    links: links.portfolio,
    spotlight: false,
  },
  {
    id: 'food',
    name: 'Food Delivery Website',
    tagline: 'Menu browsing & ordering interface',
    description:
      'A food delivery web application covering menu browsing, item selection and a cart-based ordering flow.',
    highlights: [
      'Menu browsing with categorized items',
      'Cart and ordering flow',
      'Responsive layout across devices',
    ],
    tech: ['React', 'JavaScript', 'CSS'],
    accent: '#F07C4A',
    mock: 'food',
    links: links.food,
    spotlight: false,
  },
  {
    id: 'autogreet',
    name: 'AutoGreet AI',
    tagline: 'Event reminder & greeting automation system',
    description:
      'A backend automation service that schedules and sends personalized greeting emails for birthdays, anniversaries, festivals and custom events using AI-generated content.',
    highlights: [
      'Cron-scheduled automation for birthdays, anniversaries and festivals',
      'Groq AI generates personalized greeting messages',
      'Nodemailer delivery with user, event and task management',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'Nodemailer', 'Groq AI', 'Cron'],
    accent: '#F6B35C',
    mock: 'autogreet',
    links: links.autogreet,
    spotlight: false,
  },
]
