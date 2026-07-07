export const brand = {
  name: '4C',
  full: 'Connect · Collect · Commence · Contest',
  tagline: 'The marketing cell of NMIMS MPSTME.',
};

export const site = {
  brand: '4C',
  full: 'Connect · Collect · Commence · Contest',
  tagline: 'The marketing cell of NMIMS MPSTME.',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/events', label: 'Events' },
];

export const bars = [
  { slug: '', label: 'Home', color: 'cyan' },
  { slug: 'about', label: 'About', color: 'blue' },
  { slug: 'team', label: 'Team', color: 'violet' },
  { slug: 'events', label: 'Events', color: 'purple' },
];

export const heroSection = {
  titlePrefix: 'VR',
  logoSrc: '/4clogo.png',
  titleSuffix: 'NMIMS',
  subtitle: 'Where creativity meets technology to redefine marketing for the digital age.',
};

export const whatIsSection = {
  titlePrefix: 'WHAT IS',
  logoSrc: '/4clogo.png',
  paragraph: "4C is the college's marketing cell — four functions, Connect, Collect, Commence, and Contest, working as one team. We plan the strategy, design the identity, and run the outreach behind every major event on campus, from the first conversation with an organizing team to the campaign that fills the room.",
  rotatingWords: ['CONNECT', 'COLLECT', 'COMMENCE', 'CONTEST'],
  imageSrc: '/whatis.jpg'
};

export const missionSection = {
  titleLines: ['THE', 'BLUEPRINT'],
  eyebrow: 'What drives us',
  cards: [
    {
      tag: '01',
      title: 'Mission',
      copy:
        'To build the next generation of marketing talent by putting them in the arena. We trade hypothetical case studies for real budgets, live events, and immediate feedback, proving that the best way to learn marketing is to execute it.',
    },
    {
      tag: '02',
      title: 'Vision',
      copy:
        'A campus where every student idea finds its audience. We envision 4C as the default creative engine for the college, bridging the gap between those who build great things and the people who need to see them.',
    },
    {
      tag: '03',
      title: 'Values',
      copy:
        'Execution over everything. We design for the brief, back strategies with actual turnout data, and build resilient systems so that our quality never depends on luck or last-minute panic.',
    },
  ],
};

export const flagshipSection = {
  eyebrow: 'Flagship event',
  title: 'CONTEST',
  tagline: 'Inter-college marketing showdown',
  body:
    'Contest is the event 4C builds its whole year around — a one-day inter-college competition where student teams pitch full marketing campaigns for a live brief in front of industry judges. It is proof of everything we practice the other eleven months: strategy, design, and storytelling under a clock.',
  stats: [
    { value: '120+', label: 'Participants' },
    { value: '18', label: 'Colleges' },
    { value: '6', label: 'Judges' },
  ],
  cta: { label: 'See all events', href: '/events' },
};

export const sponsorsSection = {
  titleLines: ['BACKED BY', 'THE BEST'],
  baseLogoCount: 12,
  logoPathPrefix: '/sponsors/',
  totalSlots: 52,
  emptySlots: [13, 37],

  // Kept for backward compatibility if needed by other components
  eyebrow: 'Sponsors & partners',
  title: 'BACKED BY BRANDS WHO BELIEVE IN STUDENT WORK',
  sponsors: [
    'Northbridge Foods',
    'Vantage Analytics',
    'Cobalt Studio',
    'Harlow & Finch',
    'Meridian Press',
    'Outline Coffee',
  ],
};

export const aboutSection = {
  eyebrow: 'About us',
  title: 'WE TURN IDEAS INTO CAMPAIGNS',
  body:
    '4C started as a three-person poster team after a department fest sold half the tickets it should have — not from a lack of interest, but a lack of notice. That favor turned into a standing committee within a year, and the college\u2019s default marketing partner within three. Today we run on four functions: Connect, Collect, Commence, and Contest, each owned by a sub-team that hands off to the next.',
  values: [
    {
      title: 'Brief first, brand second',
      copy: 'We start every project by understanding the event, not by reaching for a template.',
    },
    {
      title: 'Deadlines are a design constraint',
      copy: 'We build systems — templates, checklists, contact lists — so quality never depends on luck.',
    },
    {
      title: 'Numbers, not vibes',
      copy: 'We track reach, registrations, and turnout, and use last year\u2019s data to plan this year\u2019s campaign.',
    },
  ],
};

export const teamGroups = [
  {
    id: 'lead',
    label: 'Leadership',
    members: [
      {
        name: 'Aryan Thakkar',
        role: 'President',
        image: '/team/aryan-thakkar1.jpeg',
      },
      {
        name: 'Krish Sarkar',
        role: 'Secretary',
        image: '/team/krish-sarkar.jpeg',
      },
      {
        name: 'Pratit Dedhia',
        role: 'Vice President - Operations',
        image: '/team/pratit-dedhia.jpeg',
      },
      {
        name: 'Prerna Chauhan',
        role: 'Vice President - Social Media',
        image: '/team/prerna-chauhan.jpeg',
      },
      {
        name: 'Yash Jain',
        role: 'Vice President',
        image: '/team/yash-jain.jpeg',
      },
      {
        name: 'Madhav Sahi',
        role: 'Vice President - Outreach',
        image: '/team/madhav-sahi.jpeg',
      },
      {
        name: 'Sylborn Furtado',
        role: 'Vice President - Creatives',
        image: '/team/sylborn-furtado.jpeg',
      },
    ],
  },
];

export const coreDepartments = [
  {
    code: 'T&R',
    name: 'Technicals & Research',
    heads: ['Aryan Kanungo', 'Vir Dharia'],
    subHeads: ['Ridhi Singh', 'Ashwin Upadhyay'],
  },
  {
    code: 'SMCW',
    name: 'Social Media & Content Writing',
    heads: ['Disha Hemani', 'Henisha Vadhan'],
    subHeads: ['Krishi Jain', 'Sanika'],
  },
  {
    code: 'CRM',
    name: 'Corporate Relations & Marketing',
    heads: ['Arya Desai', 'Keval Shah'],
    subHeads: ['Anushka Ghughe', 'Neil Kheterpal', 'Prisha Shah'],
  },
  {
    code: 'DC',
    name: 'Digital Creatives',
    heads: ['Rithika Hodage', 'Seetansh'],
    subHeads: ['Parv', 'Shreya Bhuia'],
  },
  {
    code: 'IHC',
    name: 'In-House Creatives',
    heads: ['Grisha Joshi', 'Sonakshi Prasad'],
    subHeads: ['Shaurrya Khandar', 'Tanushka Shah'],
  },
  {
    code: 'LA',
    name: 'Logistics & Administration',
    heads: ['Arnav Dhakad', 'Swayam Shah'],
    subHeads: ['Bhavya Dadhich', 'Palak Dave', 'Rahan Kakadiya'],
  },
  {
    code: 'P',
    name: 'Photography',
    heads: ['Maanas Vinze', 'Yash Jain'],
    subHeads: ['Sachin Kumar', 'Vedang Mane'],
  },
  {
    code: 'PR',
    name: 'Public Relations',
    heads: ['Aniha Khajanchi', 'Kapeesh Godiyal'],
    subHeads: ['Ashwini Doshi', 'Tarun Tiwari'],
  },
];

export const events = [
  {
    slug: 'contest',
    name: 'Contest',
    tagline: 'Inter-college marketing showdown',
    date: 'March 14',
    status: 'Flagship',
    body:
      'Our flagship one-day competition. Student teams from across the city pitch full campaigns for a live brief in front of industry judges.',
  },
  {
    slug: 'founders-week',
    name: "Founder's Week",
    tagline: 'Campus-wide orientation campaign',
    date: 'Aug 2–9',
    status: 'Upcoming',
    body:
      "A week-long welcome campaign for incoming students — signage, social takeovers, and a campus trail introducing every department.",
  },
  {
    slug: 'pitch-night',
    name: 'Pitch Night',
    tagline: 'Student venture showcase',
    date: 'Oct 21',
    status: 'Upcoming',
    body:
      "Outreach and on-ground promotion for the entrepreneurship cell's annual evening of student startup pitches.",
  },
  {
    slug: 'spring-fest',
    name: 'Spring Fest',
    tagline: 'College-wide cultural festival',
    date: 'Feb 2',
    status: 'Past',
    body:
      'Full campaign for the year\u2019s biggest cultural fest — brand identity, a three-week social rollout, and on-ground activation.',
  },
  {
    slug: 'alumni-meet',
    name: 'Alumni Meet',
    tagline: 'Annual alumni reunion',
    date: 'Dec 6',
    status: 'Past',
    body:
      "Invitations, RSVP tracking, and a same-day recap reel for the college's yearly alumni gathering.",
  },
];

export const footerHeroSection = {
  marqueeText: "LET'S CONNECT — LET'S CONNECT — LET'S CONNECT — LET'S CONNECT — LET'S CONNECT — ",
  bigEmail: "contact@4cnmims.in",
  contacts: [
    { name: "Aryan Thakkar", role: "President", phone: "+91 9820448705", email: "contact@4cnmims.in" },
    { name: "Krish Sarkar", role: "Secretary", phone: "+91 9892721055", email: "contact@4cnmims.in" },
    { name: "Madhav Sahi", role: "VP  Outreach", phone: "+91 9870215599", email: "outreach@4cnmims.in" },
  ],
  emails: [
    { email: "contact@4cnmims.in", purpose: "General" },
    { email: "outreach@4cnmims.in", purpose: "Events" },
    { email: "marketing@4cnmims.in", purpose: "Marketing" }
  ],
  socials: [
    { name: "Twitter", url: "https://x.com/4c" },
    { name: "LinkedIn", url: "https://linkedin.com/company/4c" },
    { name: "Instagram", url: "https://www.instagram.com/4cnmims?igsh=MTVtM2Z2b2RpcWsyNA==" }
  ]
};

export const footerSection = {
  logoSrc: '/4clogo.png',
  socials: [
    { id: 'ig', url: 'https://www.instagram.com/4cnmims?igsh=MTVtM2Z2b2RpcWsyNA==', brandColor: '#E4405F', ariaLabel: 'Instagram' },
    { id: 'li', url: 'https://linkedin.com/in/4cnmims', brandColor: '#0A66C2', ariaLabel: 'LinkedIn' },
    { id: 'x', url: 'https://x.com/4cnmims', brandColor: '#333333', ariaLabel: 'X' },
  ],
  builtBy: 'Built by the 4C web team.',
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ]
};
export const previousHistory = [
  {
    year: "AY 2024-25",
    superCore: [
      { role: "President", names: "Hardik Nagpal" },
      { role: "VPs", names: "Saomik Sahu, Tej Bachhav" },
      { role: "Secretary", names: "Salonee Surve" },
      { role: "Coordinator", names: "Anushka Naik" },
      { role: "Advisory", names: "no name on IG, only photos" }
    ],
    core: [
      { dept: "SMCW", text: "Heads-Tanay Shah & Nishika Shah | Subbies: Jhanvi Katariya, Ayaan Sayyed" },
      { dept: "PR", text: "Heads-Ritwik Sharma & Manasvi Achraya | Subbies: Arnav Rathod, Madhav Sahi" },
      { dept: "LA", text: "Heads-Yuvanesh Gopinath & Shrey Doda | Subbies: Mithil Gala, Shreya Shah, Praneel Bohra" },
      { dept: "Editorial", text: "Aditya Tomar & Jui Bhosale-Head | Subbies: Hrishikesh Kunde" },
      { dept: "DC", text: "Heads-Neerav Reddy,Tejas Parekh | Subbies: Vansh Patel" },
      { dept: "CR", text: "Heads- Tirth Mehta, Anjani Mallad Sai | Subbies: Sneha Darbar, Mridulika Mukherji" }
    ]
  },
  {
    year: "AY 2023-24",
    superCore: [
      { role: "Presi", names: "Umang Sharma" },
      { role: "VP", names: "Jay Maiyani, Shwetha Iyer, Tatvam Mittal" },
      { role: "Coordinator", names: "Shantanu Sinha & Dhruvi Mehta" },
      { role: "Advisory", names: "Pragaya Ratan, Sadhika Verma, Priyal Maniar, Ananya Singh Nirwan, Anushka Chaubey, Nidhi Kumbhat, Vidula Laghate" }
    ],
    core: [
      { dept: "Editorial", text: "Heads- Nishita, Sarvagaya & Soumya | Subbies: Yatharth" },
      { dept: "Photo", text: "Heads-Nitya" },
      { dept: "Logi", text: "Heads- Khushi & Hardik | Subbies: Tanay, Perraz, Viraj" },
      { dept: "Corporate Relations", text: "Heads-Salonee | Subbies: Riya & Sujal" },
      { dept: "PR", text: "Heads-Anushka & Soumik | Subbies: Kayan & Muzzammil" },
      { dept: "IHC", text: "Heads-Jiya " },
      { dept: "DC", text: "Heads- Siddhesh Jhawar | Subbies: Dinkar Joshi & Malav Gotecha" },
      { dept: "SMCW", text: "Heads-Krishna Pande | Subbies: Romana Dokadia & Aaryaki Patil" },
      { dept: "Crew", text: "Anushka Mirajkar, Bilal Serkhel, Samruddh Kamath, Herchelle Nandwana" }
    ]
  }
];
