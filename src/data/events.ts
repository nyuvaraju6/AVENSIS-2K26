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
    id: 'stand-up-comedy',
    name: 'Stand-Up Comedy',
    description: 'Make the audience roar with laughter with your wit and humor. A platform for the funniest minds.',
    coordinators: [
      { name: "K. HARIKA", phone: "6303393385", dept: "ECE" },
      { name: "B. BHUVANESWARI", phone: "6304386043", dept: "B. PHARMA" }
    ],
    category: 'spot'
  },
  {
    id: 'auto-expo',
    name: 'Auto Expo',
    description: 'Showcase modified cars, superbikes and engineering creativity. Witness the engineering marvels.',
    coordinators: [
      { name: "MD. RIYAN", phone: "9885078279", dept: "CSE" },
      { name: "T. MAHESH REDDY", phone: "7396457282", dept: "MECH" }
    ],
    category: 'spot'
  },
  {
    id: 'fashion-show',
    name: 'Fashion Show',
    description: 'Walk the ramp and showcase your style. A platform where creativity meets elegance.',
    coordinators: [
      { name: "P. CHATHURYA", phone: "7386902863", dept: "MCA" },
      { name: "A. GOWRI", phone: "9381572054", dept: "DIPLOMA" }
    ],
    category: 'spot'
  },
  {
    id: 'ramp-walk',
    name: 'Ramp Walk',
    description: 'Individual spotlight on the runway. Show off your confidence and charisma.',
    coordinators: [
      { name: "G. BEAULA", phone: "7842709982", dept: "EEE" },
      { name: "B. SRIJA", phone: "8688963070", dept: "B. PHARMA" }
    ],
    category: 'spot'
  },
  {
    id: 'treasure-hunt',
    name: 'Treasure Hunt',
    description: 'Solve riddles, decode clues, and race against time to find the hidden treasure.',
    coordinators: [
      { name: "CH. SAMANTH", phone: "8712209988", dept: "DIPLOMA" },
      { name: "B. SOWMYA", phone: "9059045594", dept: "CSE" }
    ],
    category: 'spot'
  },
  {
    id: 'meme-creation',
    name: 'Meme Creation',
    description: 'Unleash your wit and humor. Create the most relatable and viral memes.',
    coordinators: [
      { name: "P. CHANDU", phone: "9652199440", dept: "CSM" },
      { name: "N. ESWAR", phone: "9390524975", dept: "EEE" }
    ],
    category: 'spot'
  },
  {
    id: 'reels-making',
    name: 'Reels Making (Instagram Story Challenge)',
    description: 'Create engaging Instagram reels featuring our college theme. Show your editing skills.',
    coordinators: [
      { name: "B. GEETHIKA", phone: "8341696916", dept: "CSE" },
      { name: "Y. SAI PRIYA", phone: "7396518452", dept: "PHARM D" }
    ],
    category: 'spot'
  },
  {
    id: 'spot-photography',
    name: 'Spot Photography',
    description: 'Capture the essence of Avensis through your lens. Best shots win big.',
    coordinators: [
      { name: "A. KARTHI KIRITI KAUSHIK", phone: "8688009867", dept: "CSE" },
      { name: "V. JYOTHIKA", phone: "8074650235", dept: "CSE" }
    ],
    category: 'spot'
  },
  {
    id: 'instrumental-music',
    name: 'Instrumental Music',
    description: 'Showcase your talent on musical instruments. Let the melodies speak.',
    coordinators: [
      { name: "CH. SAMANTH", phone: "8712209988", dept: "DIPLOMA" },
      { name: "B. SOWMYA", phone: "9059045594", dept: "CSE" }
    ],
    category: 'spot'
  },
  {
    id: 'e-sports',
    name: 'E-Sports (BGMI / Free Fire)',
    description: 'The ultimate battleground for gamers. Squad up and fight for victory.',
    coordinators: [
      { name: "B. RAVISANKAR", phone: "9703612177", dept: "DEGREE" },
      { name: "B. VENKATESH", phone: "7995703042", dept: "DEGREE" }
    ],
    category: 'spot'
  },
  {
    id: 'body-building',
    name: 'Body Building',
    description: 'Flex those muscles and show your dedication to fitness. Judged on symmetry and mass.',
    coordinators: [
      { name: "T AVINASH", phone: "9182359301", dept: "CSD" },
      { name: "DIVYESH", phone: "9390473488", dept: "CSM" }
    ],
    category: 'spot'
  },
  {
    id: 'balloon-burst',
    name: 'Balloon Burst Game',
    description: 'A fun and energetic game of bursting balloons. Quick reflexes win.',
    coordinators: [
      { name: "R BHARATH", phone: "9381149641", dept: "MCA" },
      { name: "RAJ VARDHAN", phone: "8639903622", dept: "B. PHARMA" }
    ],
    category: 'spot'
  },
  {
    id: 'advertisement-comp',
    name: 'Advertisement Competition',
    description: 'Pitch your ideas and create compelling advertisements for products.',
    coordinators: [
      { name: "K. NAVYA", phone: "9676083204", dept: "PHARMA D" },
      { name: "K. SAKETH", phone: "9948046481", dept: "ECE" }
    ],
    category: 'spot'
  },
  {
    id: 'clay-modelling',
    name: 'Clay Modelling & Best Out of Waste',
    description: 'Unleash your creativity with clay and recycled materials to create art.',
    coordinators: [
      { name: "BHAGYA", phone: "6304481865", dept: "B. PHARMA" },
      { name: "DIVYA JYOTHI", phone: "8309603493", dept: "CSMD" }
    ],
    category: 'spot'
  }
];

export const CULTURAL_EVENTS: Event[] = [
  {
    id: 'solo-singing',
    name: 'Solo Singing',
    description: 'Let your voice resonate. Showcase your vocal talent in this solo performance.',
    coordinators: [
      { name: "M. RAVINDRA", phone: "8179133543", dept: "MECH" },
      { name: "S. GANESH", phone: "7670921130", dept: "CSMD" }
    ],
    category: 'cultural'
  },
  {
    id: 'solo-dance',
    name: 'Solo Dance',
    description: 'Express through movement. High-energy solo performances in any style.',
    coordinators: [
      { name: "M. RAVINDRA", phone: "8179133543", dept: "MECH" },
      { name: "S. GANESH", phone: "7670921130", dept: "CSMD" }
    ],
    category: 'cultural'
  },
  {
    id: 'group-dance',
    name: 'Group Dance',
    description: 'Synchronized group performances that set the stage on fire.',
    coordinators: [
      { name: "M. RAVINDRA", phone: "8179133543", dept: "MECH" },
      { name: "S. GANESH", phone: "7670921130", dept: "CSMD" }
    ],
    category: 'cultural'
  },
  {
    id: 'duet-dance',
    name: 'Duet Dance',
    description: 'A synchronized dance performance by two. Show your chemistry and rhythm.',
    coordinators: [
      { name: "M. RAVINDRA", phone: "8179133543", dept: "MECH" },
      { name: "S. GANESH", phone: "7670921130", dept: "CSMD" }
    ],
    category: 'cultural'
  },
  {
    id: 'flashmob',
    name: 'Flashmob',
    description: 'Surprise the crowd with a spontaneous and energetic group dance.',
    coordinators: [
      { name: "M. RAVINDRA", phone: "8179133543", dept: "MECH" },
      { name: "S. GANESH", phone: "7670921130", dept: "CSMD" }
    ],
    category: 'cultural'
  },
  {
    id: 'group-singing',
    name: 'Group Singing',
    description: 'Harmonious group vocal performances across various genres.',
    coordinators: [
      { name: "M. RAVINDRA", phone: "8179133543", dept: "MECH" },
      { name: "S. GANESH", phone: "7670921130", dept: "CSMD" }
    ],
    category: 'cultural'
  },
  {
    id: 'skits-drama',
    name: 'Skits & Drama',
    description: 'Bring stories to life on stage. A platform for theatrical excellence.',
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
  title?: string;
  items: ScheduleItem[];
}

export const SCHEDULE: DaySchedule[] = [
  {
    day: 'Day 1',
    date: '13th March 2026',
    title: 'Inauguration & Cultural Extravaganza',
    items: [
      { time: '09:00 AM – 10:00 AM', event: 'Culturals Competitions' },
      { time: '10:00 AM – 12:00 PM', event: 'Inaugural Ceremony (Lighting the Lamp, Chief Guest Speech)' },
      { time: '12:00 PM – 01:00 PM', event: 'Culturals Competitions' },
      { time: '01:00 PM – 03:00 PM', event: 'Event Competitions' },
      { time: '03:00 PM – 05:00 PM', event: 'Celebrity / Singer Performance' },
      { time: '05:00 PM – 06:00 PM', event: 'Fashion Show / Body Building Show' },
    ]
  },
  {
    day: 'Day 2',
    date: '14th March 2026',
    items: [
      { time: '09:00 AM – 11:30 AM', event: 'Event Competitions' },
      { time: '11:30 AM – 03:00 PM', event: 'Culturals Competitions' },
      { time: '03:00 PM – 04:30 PM', event: 'Valedictory Function – Prize Distribution & Felicitation' },
      { time: '04:30 PM – 05:30 PM', event: 'Singer Performance' },
      { time: '05:30 PM – 06:30 PM', event: 'Live Band Performance' },
      { time: '06:30 PM – 06:45 PM onwards', event: 'Vote of Thanks & Closing Ceremony' },
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

export interface LeadershipProfile {
  id: number;
  name: string;
  role: string;
  dept: string;
  image: string;
}

export const CHIEF_PATRONS: LeadershipProfile[] = [
  { id: 1, name: "Sri M. Srinivasa Rao", role: "Former State Minister – AP", dept: "Founder Chairman, Avanthi Group of Colleges", image: "/faculty/sri-m-srinivasa-rao.jpg" },
  { id: 2, name: "Smt. M. Gnaneswari", role: "President", dept: "Avanthi Educational Society", image: "/faculty/smt-m-gnaneswari.jpg" }
];

export const CO_PATRONS: LeadershipProfile[] = [
  { id: 1, name: "Dr. B. Murali Krishna", role: "Principal", dept: "AIET", image: "/faculty/dr-b-murali-krishna.jpg" },
  { id: 2, name: "Dr. A. Chandra Sekhar", role: "Director – HR", dept: "Avanthi Group", image: "/faculty/dr-a-chandra-sekhar.jpg" },
  { id: 3, name: "Dr. K. Purna Nagasree", role: "Principal", dept: "AIPS", image: "/faculty/dr-k-purna-nagasree.jpg" },
  { id: 4, name: "Mr. P. Rama Krishna", role: "Principal", dept: "Avanthi Degree College", image: "/faculty/mr-p-rama-krishna.jpg" },
  { id: 5, name: "Mr. B. Jagadeeshwar Rao", role: "I/C Principal", dept: "Polytechnic College", image: "/faculty/mr-b-jagadeeshwar-rao.jpg" }
];

export const CONVENORS: LeadershipProfile[] = [
  { id: 1, name: "Dr. S.H. Shariff", role: "Associate Professor, HOD", dept: "MECH", image: "/faculty/dr-s-h-shariff.jpg" },
  { id: 2, name: "Dr. Ch. R. Phani Kumar", role: "Associate Professor", dept: "ECE", image: "/faculty/dr-ch-r-phani-kumar.jpg" }
];

export const CO_CONVENORS: LeadershipProfile[] = [
  { id: 1, name: "Dr. Uma Shankar V", role: "Vice Principal", dept: "AIPS", image: "/faculty/dr-uma-shankar-v.jpg" },
  { id: 2, name: "Dr. B. V. Swamy", role: "Assistant Professor", dept: "CSE", image: "/faculty/dr-b-v-swamy.jpg" },
  { id: 3, name: "Mr. Y. Babji", role: "Assistant Professor", dept: "CSMD", image: "/faculty/mr-y-babji.jpg" },
  { id: 4, name: "Mr. A. Seshu", role: "Assistant Professor", dept: "Polytechnic", image: "/faculty/mr-a-seshu.jpg" },
  { id: 5, name: "Mr. K. Satayanarayana", role: "Assistant Professor", dept: "Degree", image: "/faculty/mr-k-satayanarayana.jpg" }
];

export const FACULTY_COORDINATORS: LeadershipProfile[] = [
  { id: 1, name: "Mr. S. Kesava Rao", role: "Faculty Coordinator", dept: "B&SH", image: "/faculty/mr-s-kesava-rao.jpg" },
  { id: 12, name: "MR. K. ANIL", role: "Faculty Coordinator", dept: "CSE", image: "/faculty/mr-k-anil.jpg" },
  { id: 2, name: "Mr. Applaraju", role: "Faculty Coordinator", dept: "MCA", image: "/faculty/mr-applaraju.jpg" },
  { id: 3, name: "Mr. V. Pradeep Kumar", role: "Faculty Coordinator", dept: "MECH", image: "/faculty/mr-v-pradeep-kumar.jpg" },
  { id: 4, name: "Mrs. Sangeetha", role: "Faculty Coordinator", dept: "CSM", image: "/faculty/mrs-sangeetha.jpg" },
  { id: 5, name: "Dr. Rushi Naidu", role: "Faculty Coordinator", dept: "Pharmacy", image: "/faculty/dr-rushi-naidu.jpg" },
  { id: 6, name: "Mr. K. Satyanarayana", role: "Faculty Coordinator", dept: "Degree", image: "/faculty/mr-k-satyanarayana.jpg" },
  { id: 7, name: "G. Chinnayya", role: "Faculty Coordinator", dept: "B4&SH", image: "/faculty/g-chinnayya.jpg" },
  { id: 8, name: "Mrs. Soujanya", role: "Faculty Coordinator", dept: "ECE", image: "/faculty/mrs-soujanya.jpg" },
  { id: 9, name: "Mr. Suman Datta", role: "Faculty Coordinator", dept: "MBA", image: "/faculty/mr-suman-datta.jpg" },
  { id: 10, name: "Mr. K. A. Swamy", role: "Faculty Coordinator", dept: "Diploma", image: "/faculty/mr-k-a-swamy.jpg" },
  { id: 11, name: "Mr. G. Prasanth", role: "Faculty Coordinator", dept: "EEE", image: "/faculty/mr-g-prasanth.jpg" }
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
  { id: 1, name: 'T. MAHESH REDDY', phone: '9849699082', dept: 'MECH', committee: 'Student Overall Co-ordinator', image: "/faculty/t-mahesh-reddy.jpg" },
  { id: 2, name: 'B. VAMSHI NAIDU', phone: '8897814413', dept: 'CSMD', committee: 'Student Overall Co-ordinator', image: "/faculty/b-vamshi-naidu.jpg" },
  { id: 3, name: 'P. TEJ VARDHAN', phone: '9581378269', dept: 'CSE', committee: 'Student Overall Co-ordinator', image: "/faculty/p-tej-vardhan.jpg" },
  { id: 4, name: 'K. LAHARI', phone: '6301990861', dept: 'ECE', committee: 'Student Overall Co-ordinator', image: "/faculty/k-lahari.jpg" },
  { id: 5, name: 'G. LASHMIKANTH', phone: '9100737580', dept: 'MCA', committee: 'Student Overall Co-ordinator', image: "/faculty/g-lashmikanth.jpg" },
  { id: 6, name: 'K. SURESH', phone: '8790898562', dept: 'EEE', committee: 'Student Overall Co-ordinator', image: "/faculty/k-suresh.jpg" },
  { id: 7, name: 'K. JANARDHANA', phone: '9398583074', dept: 'MBA', committee: 'Student Overall Co-ordinator', image: "/faculty/k-janardhana.jpg" },
  { id: 8, name: 'L. TILAK KUMAR', phone: '9959349744', dept: 'B. PHARMA', committee: 'Student Overall Co-ordinator', image: "/faculty/l-tilak-kumar.jpg" },
  { id: 9, name: 'G. SATISH', phone: '8121917925', dept: 'PHARMA D', committee: 'Student Overall Co-ordinator', image: "/faculty/g-satish.jpg" },
  { id: 10, name: 'M. VENKATESH', phone: '8778829839', dept: 'DEGREE', committee: 'Student Overall Co-ordinator', image: "/faculty/m-venkatesh.jpg" },
  { id: 11, name: 'P. BHARATH KALYAN', phone: '6305965291', dept: 'DIPLOMA', committee: 'Student Overall Co-ordinator', image: "/faculty/p-bharath-kalyan.jpg" },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'T. Mahesh Reddy', role: 'Head Coordinator', dept: 'MECH', image: '/faculty/t-mahesh-reddy.jpg' },
  { name: 'B. Sowmya', role: 'Vice Coordinator', dept: 'CSE', image: '/faculty/b-sowmya.jpg' },
  { name: 'Md. Riyan', role: 'Vice Coordinator', dept: 'CSE', image: '/faculty/md-riyan.jpg' },
  { name: 'P. Tej Vardhan', role: 'Stalls Committee', dept: 'CSE', image: '/faculty/p-tej-vardhan.jpg' },
  { name: 'A. Karthi Kiriti Koushik', role: 'Stalls Committee', dept: 'CSE', image: '/faculty/a-karthi-kiriti-koushik.jpg' },
  { name: 'S. Ganesh', role: 'Cultural Committee', dept: 'CSMD', image: '/faculty/s-ganesh.jpg' },
  { name: 'B. Geethika', role: 'Cultural Committee', dept: 'CSE', image: '/faculty/b-geethika.jpg' },
  { name: 'K. Lahari', role: 'Promotions', dept: 'ECE', image: '/faculty/k-lahari.jpg' },
  { name: 'L. Tilak', role: 'Special Events', dept: 'B.Pharma', image: '/faculty/l-tilak.jpg' },
  { name: 'G. Satish', role: 'Stage & Outdoor Decoration', dept: 'Pharm.D', image: '/faculty/g-satish.jpg' },
  { name: 'P. Bharath', role: 'Stage & Outdoor Decoration', dept: 'Diploma', image: '/faculty/p-bharath.jpg' },
  { name: 'K. Janardhana', role: 'Sponsors', dept: 'MBA', image: '/faculty/k-janardhana.jpg' },
  { name: 'G. Lakshmi Kanth', role: 'Sponsors', dept: 'MCA', image: '/faculty/g-lakshmi-kanth.jpg' },
  { name: 'M. Venkatesh', role: 'E-Sports', dept: 'Degree', image: '/facult/m-venkatesh.jpg' },
  { name: 'Rohith', role: 'Digital Media', dept: 'CSE', image: '/faculty/rohith.jpg' },
  { name: 'Gopal', role: 'Digital Media', dept: 'MECH', image: '/faculty/gopal.jpg' }
];
