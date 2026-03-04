import { LucideIcon } from 'lucide-react';

export interface Event {
  id: string;
  name: string;
  description: string;
  coordinator: string;
  contact: string;
  category: 'spot' | 'cultural';
  icon?: string;
  coordinatorDept?: string;
  coordinatorPhoto?: string;
  banner?: string;
}

export const SPOT_EVENTS: Event[] = [
  {
    id: 'auto-expo',
    name: 'Auto Expo',
    description: 'Showcase modified cars, superbikes and engineering creativity. Witness the engineering marvels and aesthetic masterpieces.',
    coordinator: 'MD. RIYAN',
    contact: '9885078279',
    coordinatorDept: 'CSE',
    coordinatorPhoto: '/images/coordinators/md-riyan.jpg',
    banner: 'https://picsum.photos/seed/autoexpo/800/400',
    category: 'spot'
  },
  {
    id: 'fashion-show',
    name: 'Fashion Show',
    description: 'Walk the ramp and showcase your style. A platform where creativity meets elegance and attitude.',
    coordinator: 'P. CHATHURYA',
    contact: '7386902863',
    coordinatorDept: 'MCA',
    coordinatorPhoto: '/images/coordinators/p-chathurya.jpg',
    banner: 'https://picsum.photos/seed/fashionshow/800/400',
    category: 'spot'
  },
  {
    id: 'ramp-walk',
    name: 'Ramp Walk',
    description: 'Individual spotlight on the runway. Show off your confidence and charisma in this solo fashion event.',
    coordinator: 'P. CHATHURYA',
    contact: '7386902863',
    coordinatorDept: 'MCA',
    coordinatorPhoto: '/images/coordinators/p-chathurya.jpg',
    banner: 'https://picsum.photos/seed/rampwalk/800/400',
    category: 'spot'
  },
  {
    id: 'treasure-hunt',
    name: 'Treasure Hunt',
    description: 'Solve riddles, decode clues, and race against time to find the hidden treasure across the campus.',
    coordinator: 'N. ESWAR',
    contact: '9390524975',
    coordinatorDept: 'EEE',
    coordinatorPhoto: '/images/coordinators/n-eswar.jpg',
    banner: 'https://picsum.photos/seed/treasurehunt/800/400',
    category: 'spot'
  },
  {
    id: 'meme-creation',
    name: 'Meme Creation',
    description: 'Unleash your wit and humor. Create the most relatable and viral memes on the given spot theme.',
    coordinator: 'Priya Das',
    contact: '+91 65432 10987',
    coordinatorDept: 'CSE',
    category: 'spot'
  },
  {
    id: 'spot-photography',
    name: 'Spot Photography',
    description: 'Capture the essence of Avensis through your lens. Best shots that tell a story win big.',
    coordinator: 'Vikram Singh',
    contact: '+91 54321 09876',
    coordinatorDept: 'ECE',
    category: 'spot'
  },
  {
    id: 'reels-making',
    name: 'Reels Making',
    description: 'Create engaging Instagram reels featuring our college theme. Show your editing skills and creativity.',
    coordinator: 'Ananya Roy',
    contact: '+91 43210 98765',
    coordinatorDept: 'CSE',
    category: 'spot'
  },
  {
    id: 'e-sports',
    name: 'E-Sports (BGMI/Free Fire)',
    description: 'The ultimate battleground for gamers. Squad up and fight for the chicken dinner or booyah!',
    coordinator: 'Karan Malhotra',
    contact: '+91 32109 87654',
    coordinatorDept: 'CSE',
    category: 'spot'
  },
  {
    id: 'body-building',
    name: 'Body Building',
    description: 'Flex those muscles and show your dedication to fitness. Judged on symmetry, mass, and definition.',
    coordinator: 'Arjun Reddy',
    contact: '+91 21098 76543',
    coordinatorDept: 'MECH',
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
    coordinatorDept: 'CSE',
    category: 'cultural'
  },
  {
    id: 'dance',
    name: 'Dance Competition',
    description: 'Express through movement. High-energy performances in hip-hop, contemporary, and folk styles.',
    coordinator: 'Siddharth Jain',
    contact: '+91 09876 54321',
    coordinatorDept: 'ECE',
    category: 'cultural'
  },
  {
    id: 'skits-drama',
    name: 'Skits & Drama',
    description: 'Bring stories to life on stage. A platform for theatrical excellence and powerful storytelling.',
    coordinator: 'Tanvi Shah',
    contact: '+91 99887 76655',
    coordinatorDept: 'CSE',
    category: 'cultural'
  },
  {
    id: 'pro-night',
    name: 'DJ Night / Pro Night',
    description: 'The grand finale! Dance the night away with a celebrity DJ and live musical performances.',
    coordinator: 'Fest Committee',
    contact: 'avensis@college.edu',
    coordinatorDept: 'ALL',
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

export interface StudentCoordinator {
  id: number;
  name: string;
  phone: string;
  committee: string;
  dept: string;
  photo?: string;
}

export interface OverallCoordinator {
  id: number;
  name: string;
  phone: string;
  dept: string;
  photo?: string;
}

export const OVERALL_COORDINATORS: OverallCoordinator[] = [
  { id: 1, name: 'T. MAHESH REDDY', phone: '9849699082', dept: 'MECH', photo: "/images/overall-coordinators/mahesh.jpg" },
  { id: 2, name: 'B. VAMSHI NAIDU', phone: '8897814413', dept: 'CSMD', photo: "/images/overall-coordinators/vamshi.jpg" },
  { id: 3, name: 'P. TEJ VARDHAN', phone: '9581378269', dept: 'CSE', photo: "/images/overall-coordinators/tej.jpg" },
  { id: 4, name: 'K. LAHARI', phone: '6301990861', dept: 'ECE', photo: "/images/overall-coordinators/lahari.jpg" },
  { id: 5, name: 'G. LASHMIKANTH', phone: '9100737580', dept: 'MCA', photo: "/images/overall-coordinators/lakshmikanth.jpg" },
  { id: 6, name: 'K. SURESH', phone: '8790898562', dept: 'EEE', photo: "/images/overall-coordinators/suresh.jpg" },
  { id: 7, name: 'K. JANARDHANA', phone: '9398583074', dept: 'MBA', photo: "/images/overall-coordinators/janardhana.jpg" },
  { id: 8, name: 'L. TILAK KUMAR', phone: '9959349744', dept: 'B. PHARMA', photo: "/images/overall-coordinators/tilak.jpg" },
  { id: 9, name: 'G. SATISH', phone: '8121917925', dept: 'PHARMA D', photo: "/images/overall-coordinators/satish.jpg" },
  { id: 10, name: 'M. VENKATESH', phone: '8778829839', dept: 'DEGREE', photo: "/images/overall-coordinators/venkatesh.jpg" },
  { id: 11, name: 'P. BHARATH KALYAN', phone: '6305965291', dept: 'DIPLOMA', photo: "/images/overall-coordinators/bharath.jpg" },
];

export const STUDENT_COORDINATORS: StudentCoordinator[] = [
  { id: 1, name: 'MD. RIYAN', phone: '9885078279', committee: 'AUTO EXPO', dept: 'CSE', photo: "/images/coordinators/md-riyan.jpg" },
  { id: 2, name: 'R. MADHAN', phone: '7396457282', committee: 'STUDENT COORDINATOR', dept: 'MECH', photo: "/images/coordinators/r-madhan.jpg" },
  { id: 3, name: 'M. RAVINDRA', phone: '8179133543', committee: 'CULTURALS', dept: 'MECH', photo: "/images/coordinators/m-ravindra.jpg" },
  { id: 4, name: 'S. GANESH', phone: '7670921130', committee: 'STUDENT COORDINATOR', dept: 'CSMD', photo: "/images/coordinators/s-ganesh.jpg" },
  { id: 5, name: 'K. HARIKA', phone: '6303393385', committee: 'PROMOTIONS', dept: 'ECE', photo: "/images/coordinators/k-harika.jpg" },
  { id: 6, name: 'B. BHUVANESWARI', phone: '6304386043', committee: 'STUDENT COORDINATOR', dept: 'B. PHARMA', photo: "/images/coordinators/b-bhuvaneswari.jpg" },
  { id: 7, name: 'P. CHANDU', phone: '9652199440', committee: 'STALLS', dept: 'CSMD', photo: "/images/coordinators/p-chandu.jpg" },
  { id: 8, name: 'N. ESWAR', phone: '9390524975', committee: 'STUDENT COORDINATOR', dept: 'EEE', photo: "/images/coordinators/n-eswar.jpg" },
  { id: 9, name: 'G. BEAULA', phone: '7842709982', committee: 'STAGE & DECORATION', dept: 'EEE', photo: "/images/coordinators/g-beaula.jpg" },
  { id: 10, name: 'B. SRIJA', phone: '8688963070', committee: 'STUDENT COORDINATOR', dept: 'B. PHARMA', photo: "/images/coordinators/b-srija.jpg" },
  { id: 11, name: 'K. NAVYA', phone: '9676083204', committee: 'ADVERTISEMENT COMPETITION', dept: 'PHARMA D', photo: "/images/coordinators/k-navya.jpg" },
  { id: 12, name: 'K. SAKETH', phone: '9948046481', committee: 'STUDENT COORDINATOR', dept: 'ECE', photo: "/images/coordinators/k-saketh.jpg" },
  { id: 13, name: 'CH. SAMANTH', phone: '8712209988', committee: 'SPONSORS', dept: 'DIPLOMA', photo: "/images/coordinators/ch-samanth.jpg" },
  { id: 14, name: 'B. SOWMYA', phone: '9059045594', committee: 'STUDENT COORDINATOR', dept: 'CSE', photo: "/images/coordinators/b-sowmya.jpg" },
  { id: 15, name: 'T. LOKESH', phone: '7032574352', committee: 'STUDENT COORDINATOR', dept: 'MBA', photo: "/images/coordinators/t-lokesh.jpg" },
  { id: 16, name: 'P. CHATHURYA', phone: '7386902863', committee: 'FASHION SHOW', dept: 'MCA', photo: "/images/coordinators/p-chathurya.jpg" },
  { id: 17, name: 'A. GOWRI', phone: '9381572054', committee: 'STUDENT COORDINATOR', dept: 'DIPLOMA', photo: "/images/coordinators/a-gowri.jpg" },
  { id: 18, name: 'B. RAVISANKAR', phone: '9703612177', committee: 'E-SPORTS', dept: 'DEGREE', photo: "/images/coordinators/b-ravisankar.jpg" },
  { id: 19, name: 'B. VENKATESH', phone: '7995703042', committee: 'STUDENT COORDINATOR', dept: 'DEGREE', photo: "/images/coordinators/b-venkatesh.jpg" },
  { id: 20, name: 'B. GEETHIKA', phone: '8341696916', committee: 'DIGITAL MEDIA', dept: 'CSE', photo: "/images/coordinators/b-geethika.jpg" },
  { id: 21, name: 'Y. SAI PRIYA', phone: '7396518452', committee: 'STUDENT COORDINATOR', dept: 'PHARM D', photo: "/images/coordinators/y-sai-priya.jpg" },
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
