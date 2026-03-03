import { LucideIcon } from 'lucide-react';

export interface Event {
  id: string;
  name: string;
  description: string;
  coordinator: string;
  contact: string;
  category: 'spot' | 'cultural';
  icon?: string;
}

export const SPOT_EVENTS: Event[] = [
  {
    id: 'auto-expo',
    name: 'Auto Expo',
    description: 'A grand showcase of modified cars and superbikes. Witness the engineering marvels and aesthetic masterpieces.',
    coordinator: 'Rahul Sharma',
    contact: '+91 98765 43210',
    category: 'spot'
  },
  {
    id: 'fashion-show',
    name: 'Fashion Show',
    description: 'Walk the ramp and showcase your style. A platform where creativity meets elegance and attitude.',
    coordinator: 'Sneha Kapoor',
    contact: '+91 87654 32109',
    category: 'spot'
  },
  {
    id: 'ramp-walk',
    name: 'Ramp Walk',
    description: 'Individual spotlight on the runway. Show off your confidence and charisma in this solo fashion event.',
    coordinator: 'Sneha Kapoor',
    contact: '+91 87654 32109',
    category: 'spot'
  },
  {
    id: 'treasure-hunt',
    name: 'Treasure Hunt',
    description: 'Solve riddles, decode clues, and race against time to find the hidden treasure across the campus.',
    coordinator: 'Amit Verma',
    contact: '+91 76543 21098',
    category: 'spot'
  },
  {
    id: 'meme-creation',
    name: 'Meme Creation',
    description: 'Unleash your wit and humor. Create the most relatable and viral memes on the given spot theme.',
    coordinator: 'Priya Das',
    contact: '+91 65432 10987',
    category: 'spot'
  },
  {
    id: 'spot-photography',
    name: 'Spot Photography',
    description: 'Capture the essence of Avensis through your lens. Best shots that tell a story win big.',
    coordinator: 'Vikram Singh',
    contact: '+91 54321 09876',
    category: 'spot'
  },
  {
    id: 'reels-making',
    name: 'Reels Making',
    description: 'Create engaging Instagram reels featuring our college theme. Show your editing skills and creativity.',
    coordinator: 'Ananya Roy',
    contact: '+91 43210 98765',
    category: 'spot'
  },
  {
    id: 'e-sports',
    name: 'E-Sports (BGMI/Free Fire)',
    description: 'The ultimate battleground for gamers. Squad up and fight for the chicken dinner or booyah!',
    coordinator: 'Karan Malhotra',
    contact: '+91 32109 87654',
    category: 'spot'
  },
  {
    id: 'body-building',
    name: 'Body Building',
    description: 'Flex those muscles and show your dedication to fitness. Judged on symmetry, mass, and definition.',
    coordinator: 'Arjun Reddy',
    contact: '+91 21098 76543',
    category: 'spot'
  }
];

export const CULTURAL_EVENTS: Event[] = [
  {
    id: 'singing',
    name: 'Singing Competition',
    description: 'Let your voice resonate. Solo and group performances across classical, pop, and rock genres.',
    coordinator: 'Megha Iyer',
    contact: '+91 10987 65432',
    category: 'cultural'
  },
  {
    id: 'dance',
    name: 'Dance Competition',
    description: 'Express through movement. High-energy performances in hip-hop, contemporary, and folk styles.',
    coordinator: 'Siddharth Jain',
    contact: '+91 09876 54321',
    category: 'cultural'
  },
  {
    id: 'skits-drama',
    name: 'Skits & Drama',
    description: 'Bring stories to life on stage. A platform for theatrical excellence and powerful storytelling.',
    coordinator: 'Tanvi Shah',
    contact: '+91 99887 76655',
    category: 'cultural'
  },
  {
    id: 'pro-night',
    name: 'DJ Night / Pro Night',
    description: 'The grand finale! Dance the night away with a celebrity DJ and live musical performances.',
    coordinator: 'Fest Committee',
    contact: 'avensis@college.edu',
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
