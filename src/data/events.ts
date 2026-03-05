import { LucideIcon } from 'lucide-react';

export interface Coordinator {
  name: string;
  phone: string;
  dept: string;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  coordinators: Coordinator[];
  category: 'spot' | 'cultural';
  icon?: string;
  banner?: string;
}

export const SPOT_EVENTS: Event[] = [
  {
    id: 'auto-expo',
    name: 'Auto Expo',
    description: 'Showcase modified cars, superbikes and engineering creativity. Witness the engineering marvels and aesthetic masterpieces.',
    coordinators: [
      { name: "MD. RIYAN", phone: "9885078279", dept: "CSE" },
      { name: "R. MADHAN", phone: "7396457282", dept: "MECH" }
    ],
    banner: 'https://picsum.photos/seed/autoexpo/800/400',
    category: 'spot'
  },
  {
    id: 'fashion-show',
    name: 'Fashion Show',
    description: 'Walk the ramp and showcase your style. A platform where creativity meets elegance and attitude.',
    coordinators: [
      { name: "P. CHATHURYA", phone: "7386902863", dept: "MCA" },
      { name: "A. GOWRI", phone: "9381572054", dept: "DIPLOMA" }
    ],
    banner: 'https://picsum.photos/seed/fashionshow/800/400',
    category: 'spot'
  },
  {
    id: 'ramp-walk',
    name: 'Ramp Walk',
    description: 'Individual spotlight on the runway. Show off your confidence and charisma in this solo fashion event.',
    coordinators: [
      { name: "P. CHATHURYA", phone: "7386902863", dept: "MCA" },
      { name: "A. GOWRI", phone: "9381572054", dept: "DIPLOMA" }
    ],
    banner: 'https://picsum.photos/seed/rampwalk/800/400',
    category: 'spot'
  },
  {
    id: 'treasure-hunt',
    name: 'Treasure Hunt',
    description: 'Solve riddles, decode clues, and race against time to find the hidden treasure across the campus.',
    coordinators: [
      { name: "N. ESWAR", phone: "9390524975", dept: "EEE" },
      { name: "P. CHANDU", phone: "9652199440", dept: "CSMD" }
    ],
    banner: 'https://picsum.photos/seed/treasurehunt/800/400',
    category: 'spot'
  },
  {
    id: 'meme-creation',
    name: 'Meme Creation',
    description: 'Unleash your wit and humor. Create the most relatable and viral memes on the given spot theme.',
    coordinators: [
      { name: "B. GEETHIKA", phone: "8341696916", dept: "CSE" },
      { name: "Y. SAI PRIYA", phone: "7396518452", dept: "PHARM D" }
    ],
    category: 'spot'
  },
  {
    id: 'spot-photography',
    name: 'Spot Photography',
    description: 'Capture the essence of Avensis through your lens. Best shots that tell a story win big.',
    coordinators: [
      { name: "B. GEETHIKA", phone: "8341696916", dept: "CSE" },
      { name: "Y. SAI PRIYA", phone: "7396518452", dept: "PHARM D" }
    ],
    category: 'spot'
  },
  {
    id: 'reels-making',
    name: 'Reels Making',
    description: 'Create engaging Instagram reels featuring our college theme. Show your editing skills and creativity.',
    coordinators: [
      { name: "B. GEETHIKA", phone: "8341696916", dept: "CSE" },
      { name: "Y. SAI PRIYA", phone: "7396518452", dept: "PHARM D" }
    ],
    category: 'spot'
  },
  {
    id: 'e-sports',
    name: 'E-Sports (BGMI/Free Fire)',
    description: 'The ultimate battleground for gamers. Squad up and fight for the chicken dinner or booyah!',
    coordinators: [
      { name: "B. RAVISANKAR", phone: "9703612177", dept: "DEGREE" },
      { name: "B. VENKATESH", phone: "7995703042", dept: "DEGREE" }
    ],
    category: 'spot'
  },
  {
    id: 'body-building',
    name: 'Body Building',
    description: 'Flex those muscles and show your dedication to fitness. Judged on symmetry, mass, and definition.',
    coordinators: [
      { name: "MD. RIYAN", phone: "9885078279", dept: "CSE" },
      { name: "R. MADHAN", phone: "7396457282", dept: "MECH" }
    ],
    category: 'spot'
  }
];

export const CULTURAL_EVENTS: Event[] = [
  {
    id: 'singing',
    name: 'Singing Competition',
    description: 'Let your voice resonate. Solo and group performances across classical, pop, and rock genres.',
    coordinators: [
      { name: "M. RAVINDRA", phone: "8179133543", dept: "MECH" },
      { name: "S. GANESH", phone: "7670921130", dept: "CSMD" }
    ],
    category: 'cultural'
  },
  {
    id: 'dance',
    name: 'Dance Competition',
    description: 'Express through movement. High-energy performances in hip-hop, contemporary, and folk styles.',
    coordinators: [
      { name: "M. RAVINDRA", phone: "8179133543", dept: "MECH" },
      { name: "S. GANESH", phone: "7670921130", dept: "CSMD" }
    ],
    category: 'cultural'
  },
  {
    id: 'skits-drama',
    name: 'Skits & Drama',
    description: 'Bring stories to life on stage. A platform for theatrical excellence and powerful storytelling.',
    coordinators: [
      { name: "M. RAVINDRA", phone: "8179133543", dept: "MECH" },
      { name: "S. GANESH", phone: "7670921130", dept: "CSMD" }
    ],
    category: 'cultural'
  },
  {
    id: 'pro-night',
    name: 'DJ Night / Pro Night',
    description: 'The grand finale! Dance the night away with a celebrity DJ and live musical performances.',
    coordinators: [
      { name: "M. RAVINDRA", phone: "8179133543", dept: "MECH" },
      { name: "S. GANESH", phone: "7670921130", dept: "CSMD" }
    ],
    category: 'cultural'
  }
];

export interface ScheduleItem {
  time: string;
  event: string;
}

export interface DaySchedule {
  day: string;
  date: string;
  items: ScheduleItem[];
}

export const SCHEDULE: DaySchedule[] = [
  {
    day: 'Day 1',
    date: '13/03/2026',
    items: [
      { time: '9:00 AM – 10:00 AM', event: 'Culturals' },
      { time: '10:00 AM – 12:00 PM', event: 'Inauguration' },
      { time: '3:30 PM – 5:00 PM', event: 'Bike Expo' },
      { time: '6:30 PM – 9:30 PM', event: 'Pro Night' },
    ]
  },
  {
    day: 'Day 2',
    date: '14/03/2026',
    items: [
      { time: '9:00 AM – 12:00 PM', event: 'Culturals' },
      { time: '5:00 PM – 6:00 PM', event: 'Car Expo' },
      { time: '6:00 PM – 9:30 PM', event: 'DJ Night' },
    ]
  }
];

export interface TeamMember {
  name: string;
  role: string;
  dept: string;
  image: string;
}

export interface Attraction {
  name: string;
  description: string;
  image: string;
}

export const ATTRACTIONS: Attraction[] = [
  {
    name: 'Heart Balloons & Decorative Booths',
    description: 'Beautifully crafted heart-shaped balloon installations and themed decorative booths for the perfect aesthetic vibe.',
    image: 'https://picsum.photos/seed/balloons/600/400'
  },
  {
    name: 'Photo Booth with Props',
    description: 'Capture your fest memories with our professionally designed photo booths equipped with fun and quirky props.',
    image: 'https://picsum.photos/seed/photobooth/600/400'
  },
  {
    name: 'Cartoon Characters (Mascots)',
    description: 'Meet and greet our friendly Bear and Mickey mascots roaming around the campus to spread joy and cheer.',
    image: 'https://picsum.photos/seed/mascots/600/400'
  }
];

export interface OverallCoordinator {
  id: number;
  name: string;
  phone: string;
  dept: string;
  committee: string;
  image?: string;
}

export const OVERALL_COORDINATORS: OverallCoordinator[] = [
  { id: 1, name: 'T. MAHESH REDDY', phone: '9849699082', dept: 'MECH', committee: 'Student Overall Co-ordinator', image: "/coordinators/t-mahesh-reddy.jpeg" },
  { id: 2, name: 'B. VAMSHI NAIDU', phone: '8897814413', dept: 'CSMD', committee: 'Student Overall Co-ordinator', image: "/coordinators/b-vamshi-naidu.jpeg" },
  { id: 3, name: 'P. TEJ VARDHAN', phone: '9581378269', dept: 'CSE', committee: 'Student Overall Co-ordinator', image: "/coordinators/p-tej-vardhan.jpeg" },
  { id: 4, name: 'K. LAHARI', phone: '6301990861', dept: 'ECE', committee: 'Student Overall Co-ordinator', image: "/coordinators/k-lahari.jpeg" },
  { id: 5, name: 'G. LASHMIKANTH', phone: '9100737580', dept: 'MCA', committee: 'Student Overall Co-ordinator', image: "/coordinators/g-lashmikanth.jpeg" },
  { id: 6, name: 'K. SURESH', phone: '8790898562', dept: 'EEE', committee: 'Student Overall Co-ordinator', image: "/coordinators/k-suresh.jpeg" },
  { id: 7, name: 'K. JANARDHANA', phone: '9398583074', dept: 'MBA', committee: 'Student Overall Co-ordinator', image: "/coordinators/k-janardhana.jpeg" },
  { id: 8, name: 'L. TILAK KUMAR', phone: '9959349744', dept: 'B. PHARMA', committee: 'Student Overall Co-ordinator', image: "/coordinators/l-tilak-kumar.jpeg" },
  { id: 9, name: 'G. SATISH', phone: '8121917925', dept: 'PHARMA D', committee: 'Student Overall Co-ordinator', image: "/coordinators/g-satish.jpeg" },
  { id: 10, name: 'M. VENKATESH', phone: '8778829839', dept: 'DEGREE', committee: 'Student Overall Co-ordinator', image: "/coordinators/m-venktesh.jpeg" },
  { id: 11, name: 'P. BHARATH KALYAN', phone: '6305965291', dept: 'DIPLOMA', committee: 'Student Overall Co-ordinator', image: "/coordinators/p-bharath-kalyan.jpeg" },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'T. Mahesh Reddy', role: 'Head Coordinator', dept: 'MECH', image: 'https://picsum.photos/seed/tmr/400/400' },
  { name: 'B. Sowmya', role: 'Vice Coordinator', dept: 'CSE', image: 'https://picsum.photos/seed/bs/400/400' },
  { name: 'Md. Riyan', role: 'Vice Coordinator', dept: 'CSE', image: 'https://drive.google.com/thumbnail?id=1zB0dMrHj2_AihLVjFK5JFjlgaxbsX5yv&sz=w1000' },
  { name: 'P. Tej Vardhan', role: 'Stalls Committee', dept: 'CSE', image: 'https://picsum.photos/seed/ptv/400/400' },
  { name: 'A. Karthi Kiriti Koushik', role: 'Stalls Committee', dept: 'CSE', image: 'https://picsum.photos/seed/akkk/400/400' },
  { name: 'S. Ganesh', role: 'Cultural Committee', dept: 'CSMD', image: 'https://picsum.photos/seed/sg/400/400' },
  { name: 'B. Geethika', role: 'Cultural Committee', dept: 'CSE', image: 'https://picsum.photos/seed/bg/400/400' },
  { name: 'K. Lahari', role: 'Promotions', dept: 'ECE', image: 'https://picsum.photos/seed/kl/400/400' },
  { name: 'L. Tilak', role: 'Special Events', dept: 'B.Pharma', image: 'https://picsum.photos/seed/lt/400/400' },
  { name: 'G. Satish', role: 'Stage & Outdoor Decoration', dept: 'Pharm.D', image: 'https://picsum.photos/seed/gs/400/400' },
  { name: 'P. Bharath', role: 'Stage & Outdoor Decoration', dept: 'Diploma', image: 'https://picsum.photos/seed/pb/400/400' },
  { name: 'K. Janardhana', role: 'Sponsors', dept: 'MBA', image: 'https://picsum.photos/seed/kj/400/400' },
  { name: 'G. Lakshmi Kanth', role: 'Sponsors', dept: 'MCA', image: 'https://picsum.photos/seed/glk/400/400' },
  { name: 'M. Venkatesh', role: 'E-Sports', dept: 'Degree', image: 'https://picsum.photos/seed/mv/400/400' },
  { name: 'Rohith', role: 'Digital Media', dept: 'CSE', image: 'https://picsum.photos/seed/r/400/400' },
  { name: 'Gopal', role: 'Digital Media', dept: 'MECH', image: 'https://picsum.photos/seed/g/400/400' }
];
