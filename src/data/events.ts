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
  },
  {
    id: 'instrumental-music',
    name: 'Instrumental Music',
    description: 'Showcase your talent on musical instruments. Let the melodies speak.',
    coordinators: [
      { name: "CH. SAMANTH", phone: "8712209988", dept: "DIPLOMA" },
      { name: "B. SOWMYA", phone: "9059045594", dept: "CSE" }
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
      { time: '05:00 PM – 06:00 PM', event: 'Fashion Show / Body Building Show' }
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
      { time: '06:30 PM – 06:45 PM onwards', event: 'Vote of Thanks & Closing Ceremony' }
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

export interface LeadershipProfile {
  id: number;
  name: string;
  role: string;
  dept: string;
  image: string;
}

export const CHIEF_PATRONS: LeadershipProfile[] = [
  { id: 1, name: "Sri M. Srinivasa Rao", role: "Former State Minister – AP", dept: "Founder Chairman, Avanthi Group of Colleges", image: "/faculty/sri-m-srinivasa-rao.jpeg" },
  { id: 2, name: "Smt. M. Gnaneswari", role: "President", dept: "Avanthi Educational Society", image: "/faculty/smt-m-gnaneswari.jpeg" },
  { id: 3, name: "Dr. M. L. Priyanka", role: "General Secretary", dept: "Avanthi Group of Colleges", image: "/faculty/dr-m-l-priyanka.jpeg"},
  { id: 4, name: "Sri M. V. S. S. Nandish", role: "Vice President", dept: "Avanthi Group of Colleges", image: "/faculty/sri-m-v-s-s-nandish.jpg"},
  { id: 5, name: "Sri I. Shravan Kumar", role: "Managing Director", dept: "Avanthi Group of Colleges", image: "/faculty/sri-i-shravan-kumar.jpg"}
];

export const CO_PATRONS: LeadershipProfile[] = [
  { id: 1, name: "Dr. B. Murali Krishna", role: "Principal", dept: "AIET", image: "/faculty/dr-b-murali-krishna.jpeg" },
  { id: 2, name: "Dr. A. Chandra Sekhar", role: "Director – HR", dept: "Avanthi Group", image: "/faculty/dr-a-chandra-sekhar.jpeg" },
  { id: 3, name: "Dr. K. Purna Nagasree", role: "Principal", dept: "AIPS", image: "/faculty/dr-k-purna-nagasree.jpeg" },
  { id: 4, name: "Mr. P. Rama Krishna", role: "Principal", dept: "Avanthi Degree College", image: "/faculty/mr-p-rama-krishna.jpeg" },
  { id: 5, name: "Mr. B. Jagadeeshwar Rao", role: "I/C Principal", dept: "Polytechnic College", image: "/faculty/mr-b-jagadeeshwar-rao.jpeg" }
];

export const CONVENORS: LeadershipProfile[] = [
  { id: 1, name: "Dr. S.H. Shariff", role: "Associate Professor, HOD", dept: "MECH", image: "/faculty/dr-s-h-shariff.jpeg" },
  { id: 2, name: "Dr. Ch. R. Phani Kumar", role: "Associate Professor", dept: "ECE", image: "/faculty/dr-ch-r-phani-kumar.jpeg" }
];

export const CO_CONVENORS: LeadershipProfile[] = [
  { id: 1, name: "Dr. Uma Shankar V", role: "Vice Principal", dept: "AIPS", image: "/faculty/dr-uma-shankar-v.jpeg" },
  { id: 2, name: "Dr. B. V. Swamy", role: "Assistant Professor", dept: "CSE", image: "/faculty/dr-b-v-swamy.jpeg" },
  { id: 3, name: "Mr. Y. Babji", role: "Assistant Professor", dept: "CSMD", image: "/faculty/mr-y-babji.jpeg" },
  { id: 4, name: "Mr. A. Seshu", role: "Assistant Professor", dept: "Polytechnic", image: "/faculty/mr-a-seshu.jpeg" },
  { id: 5, name: "Mr. K. Satayanarayana", role: "Assistant Professor", dept: "Degree", image: "/faculty/mr-k-satayanarayana.jpeg" }
];

export const FACULTY_COORDINATORS: LeadershipProfile[] = [
  { id: 1, name: "Mr. S. Kesava Rao", role: "Faculty Coordinator", dept: "CSE", image: "/faculty/mr-s-kesava-rao.jpeg" },
  { id: 2, name: "Mr. V. Pradeep Kumar", role: "Faculty Coordinator", dept: "MECH", image: "/faculty/mr-v-pradeep-kumar.jpeg" },
  { id: 3, name: "Mr. G. Prasanth", role: "Faculty Coordinator", dept: "EEE", image: "/faculty/mr-g-prasanth.jpeg" },
  { id: 4, name: "Mrs. Soujanya", role: "Faculty Coordinator", dept: "ECE", image: "/faculty/mrs-soujanya.jpeg" },
  { id: 5, name: "Mr. Suman Datta", role: "Faculty Coordinator", dept: "MBA", image: "/faculty/mr-suman-datta.jpeg" },
  { id: 6, name: "Mr. Applaraju", role: "Faculty Coordinator", dept: "MCA", image: "/faculty/mr-applaraju.jpeg" },
  { id: 7, name: "G. Chinnayya", role: "Faculty Coordinator", dept: "B&SH", image: "/faculty/g-chinnayya.jpeg" },
  { id: 8, name: "Mrs. Sangeetha", role: "Faculty Coordinator", dept: "CSM", image: "/faculty/mrs-sangeetha.jpeg" },
  { id: 9, name: "Dr. Rushi Naidu", role: "Faculty Coordinator", dept: "Pharmacy", image: "/faculty/dr-rushi-naidu.jpeg" },
  { id: 10, name: "Mr. K. Satyanarayana", role: "Faculty Coordinator", dept: "Degree", image: "/faculty/mr-k-satyanarayana.jpeg" },
  { id: 11, name: "Mr. K. A. Swamy", role: "Faculty Coordinator", dept: "Diploma", image: "/faculty/mr-k-a-swamy.jpeg" }
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
  { id: 1, name: 'T. MAHESH REDDY', phone: '9849699082', dept: 'MECH', committee: 'Student Overall Co-ordinator', image: "/faculty/t-mahesh-reddy.jpeg" },
  { id: 2, name: 'B. VAMSHI NAIDU', phone: '8897814413', dept: 'CSMD', committee: 'Student Overall Co-ordinator', image: "/faculty/b-vamshi-naidu.jpeg" },
  { id: 3, name: 'A.K.KIRITI KAUSHIK', phone: '8688009867', dept: 'CSE', committee: 'Student Overall Co-ordinator', image: "/faculty/a-k-kiriti-kaushik.jpeg" },
  { id: 4, name: 'K. LAHARI', phone: '6301990861', dept: 'ECE', committee: 'Student Overall Co-ordinator', image: "/faculty/k-lahari.jpeg" },
  { id: 5, name: 'G. LASHMIKANTH', phone: '9100737580', dept: 'MCA', committee: 'Student Overall Co-ordinator', image: "/faculty/g-lashmikanth.jpeg" },
  { id: 6, name: 'K. SURESH', phone: '8790898562', dept: 'EEE', committee: 'Student Overall Co-ordinator', image: "/faculty/k-suresh.jpeg" },
  { id: 7, name: 'K. JANARDHANA', phone: '9398583074', dept: 'MBA', committee: 'Student Overall Co-ordinator', image: "/faculty/k-janardhana.jpeg" },
  { id: 8, name: 'L. TILAK KUMAR', phone: '9959349744', dept: 'B. PHARMA', committee: 'Student Overall Co-ordinator', image: "/faculty/l-tilak-kumar.jpeg" },
  { id: 9, name: 'G. SATISH', phone: '8121917925', dept: 'PHARMA D', committee: 'Student Overall Co-ordinator', image: "/faculty/g-satish.jpeg" },
  { id: 10, name: 'M. VENKATESH', phone: '8778829839', dept: 'DEGREE', committee: 'Student Overall Co-ordinator', image: "/faculty/m-venkatesh.jpeg" },
  { id: 11, name: 'P. BHARATH KALYAN', phone: '6305965291', dept: 'DIPLOMA', committee: 'Student Overall Co-ordinator', image: "/faculty/p-bharath-kalyan.jpeg" }
];
