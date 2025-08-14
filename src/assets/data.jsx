

export const Accordiondata = [
  {
    id: 1,
    title: "Individual Therapy",
    content: "Compassionate,evidence based mental health care tailored to your journey.",
    image:'../images/individual.jpg',
  },
  {
    id: 2,
    title: "Group Therapy",
    content: "Supportive group session for shared experiences and healing.",
    image: "/images/group.jpg",
  },
  {
    id: 3,
    title: " Family Counselling",
    content: "Strengths family relationships and improve communication.",
    image: "/images/familytherapy.jpg",
  },
  {
    id: 4,
    title: "Psychiatric Evaluations",
    content: "Comprehensive assessments for accurate diagnosis and treatment.",
    image: "/images/psychiatric.jpg",
  },
  {
    id: 5,
    title: "Medication Management",
    content: "Expect oversight of psychiatric for optimal outcomes.",
    image: "/images/medication.jpg",
  },
  {
    id: 6,
    title: "Crisis Intervention",
    content: "Immediate support during mental and emergencies.",
    image: "/images/crisis.jpg",
  },
];





export const DataImages = [{
  image:'./images/thintimer01.png',
  title:'Depression and Anxiety',
  description:'Compassionate evidence-based mental health care tailored to your journey'
},

{
image:'./images/depression.png',
title:'Bipolar Disorder',
description:"Specialized care and continuous support to help you manage mood swings and maintain emotional balance" 
},
{
image:'./images/bipolar.png',
title:'PTSD',
description:"Trauma-informed therapies to help you process past experiences and reclaim a sense of safety and resilience"
},
{
image:'./images/thinktimer04.png',
title:'ADHD',
description:"Targeted strategies and personalized interventions to enhance focus ,organization and daily performance"
},
{
image:'./images/worried.png',
title:'Eating Disorder',
description:"Compassionate multidisciplinary support to help rebuild a healthy relationship with food and your body "
},
{
image:'./images/maruwa.png',
title:'Substance Abuse',
description:"Compassionate evidence-based support to guide you on the path to recovery and lasting wellness."
}
]

export const questionData = [
  {
    id:1,
    title:'Do i need a referral to schedule an appointment?',
    response:"No, Dare Behavioral Health & Wellness Clinic welcomes self-referrals. You can book an appointment directly through our website or by calling our office. No physician referral is required. "
  },
  {
    id:2,
    title:'What insurance plans do you accept,and do you offer sliding-scale fees?',
    response:"We accept most major commercial and state insurance plans. we also offer a limited sliding-scale fee structure for uninsured or underinsured clients-please contact our billing team for details and eligibility. "
  },
  {
    id:3,
    title:'How do telehealth appointments work,and what equipment do i need?',
    response:"Telehealth sections are conducted over a secure.HIPAA-complaint video platform. You will need a smartphone,tablet,or computer with a webcam and reliable internet connection,a private quiet space. "
  },
    {
    id:4,
    title:'What should i expect during my first session?',
    response:"Your initial appointment include paperwork (which you can complete in advance via the patient portal),a clinical evaluation to understand your goals and concerns and collaborative goal-setting for your treatment plan. "
  },
    {
    id:5,
    title:'How can i cancel or reschedule an appointment?',
    response:"To cancel or reschedule please notify us at 24hours before your appointment by calling (123-456-7890 or via the Patient Portal Late cancellations or no-shows may incur a fee."
  },
]

// Icon components
const LeafIcon = () => (
  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 18V14C0 12.6167 0.487666 11.4377 1.463 10.463C2.43833 9.48833 3.61733 9.00067 5 9H15.725C16.3583 9 16.896 9.21667 17.338 9.65C17.78 10.0833 18.0007 10.6167 18 11.25C18 11.7667 17.8417 12.2293 17.525 12.638C17.2083 13.0467 16.8083 13.3173 16.325 13.45L14 14.125V18C14 18.35 13.921 18.6667 13.763 18.95C13.605 19.2333 13.3923 19.4667 13.125 19.65C12.8577 19.8333 12.566 19.946 12.25 19.988C11.934 20.03 11.609 19.984 11.275 19.85L6.55 18H0ZM12 15H6.375C6.25833 15 6.171 15.0333 6.113 15.1C6.055 15.1667 6.01733 15.2417 6 15.325C5.98267 15.4083 5.99533 15.4877 6.038 15.563C6.08067 15.6383 6.15133 15.6923 6.25 15.725L12 18V15ZM2 16H4.1C4.06667 15.9 4.04167 15.8 4.025 15.7C4.00833 15.6 4 15.4917 4 15.375C4 14.725 4.23333 14.1667 4.7 13.7C5.16667 13.2333 5.725 13 6.375 13H10.45L15.8 11.525C15.8833 11.4917 15.9417 11.45 15.975 11.4C16.0083 11.35 16.0167 11.2917 16 11.225C15.9833 11.1583 15.954 11.1043 15.912 11.063C15.87 11.0217 15.8077 11.0007 15.725 11H5C4.16667 11 3.45833 11.2917 2.875 11.875C2.29167 12.4583 2 13.1667 2 14V16ZM7 8C5.9 8 4.95833 7.60833 4.175 6.825C3.39167 6.04167 3 5.1 3 4C3 2.9 3.39167 1.95833 4.175 1.175C4.95833 0.391667 5.9 0 7 0C8.1 0 9.04167 0.391667 9.825 1.175C10.6083 1.95833 11 2.9 11 4C11 5.1 10.6083 6.04167 9.825 6.825C9.04167 7.60833 8.1 8 7 8ZM7 6C7.55 6 8.021 5.80433 8.413 5.413C8.805 5.02167 9.00067 4.55067 9 4C8.99933 3.44933 8.80367 2.97867 8.413 2.588C8.02233 2.19733 7.55133 2.00133 7 2C6.44867 1.99867 5.978 2.19467 5.588 2.588C5.198 2.98133 5.002 3.452 5 4C4.998 4.548 5.194 5.019 5.588 5.413C5.982 5.807 6.45267 6.00267 7 6Z" fill="#205C2A"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.417 13.713C22.368 8.70298 21.301 3.73498 18.463 1.99398C15.781 0.348977 13.44 1.01198 12.034 2.06798L11 2.84198M18.417 13.713C17.469 14.916 16.232 16.12 14.66 17.283C13.115 18.428 12.342 19 11 19C9.65798 19 8.88598 18.428 7.33998 17.283C-0.778019 11.275 0.0179811 4.15298 3.53698 1.99398C6.21898 0.348977 8.55998 1.01198 9.96598 2.06798L11 2.84198M18.417 13.713L12.892 7.44498C12.7823 7.32096 12.6322 7.23984 12.4683 7.21604C12.3044 7.19224 12.1374 7.22729 11.997 7.31498L9.81098 8.68098C9.38229 8.95218 8.86534 9.04709 8.36827 8.94586C7.87121 8.84462 7.43255 8.55508 7.14408 8.13782C6.85562 7.72055 6.73969 7.2079 6.82056 6.70712C6.90143 6.20633 7.17283 5.75623 7.57798 5.45098L11 2.84198" stroke="#205C2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlantIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.8798 2.15002L20.6798 2.55002C18.6232 3.26457 16.427 3.48384 14.2698 3.19002C12.0029 2.83824 9.68267 3.15084 7.58975 4.09002C6.48023 4.56247 5.50651 5.30494 4.75723 6.24983C4.00795 7.19473 3.50692 8.31203 3.29975 9.50002C3.08902 10.6425 3.11058 11.8157 3.36314 12.9496C3.6157 14.0836 4.09408 15.155 4.76975 16.1C4.70975 16.31 4.64975 16.52 4.59975 16.73C4.19359 18.4571 3.99221 20.2259 3.99975 22H5.99975C6.09478 20.548 6.29194 19.1044 6.58975 17.68C7.97719 18.4292 9.5331 18.8113 11.1098 18.79C12.5802 18.789 14.0356 18.4932 15.3898 17.92C22.9998 14.67 21.9998 3.86002 21.9998 3.41002L21.8798 2.15002ZM14.6098 16.08C11.9998 17.19 8.87975 17 7.12975 15.63C7.4256 14.6411 7.83147 13.6885 8.33975 12.79C8.73516 12.1436 9.20137 11.5432 9.72975 11C10.2699 10.4512 10.8782 9.97398 11.5398 9.58002C12.9068 8.76258 14.423 8.22547 15.9998 8.00002V7.00002C14.1854 6.93606 12.3821 7.30633 10.7398 8.08002C9.06074 8.90042 7.63655 10.1621 6.61975 11.73C6.24272 12.329 5.90855 12.9539 5.61975 13.6C5.15627 12.4144 5.02489 11.1248 5.23975 9.87002C5.38053 8.99156 5.74265 8.1634 6.292 7.46359C6.84135 6.76378 7.55984 6.21536 8.37975 5.87002C9.57505 5.31023 10.8799 5.0233 12.1998 5.03002C12.8198 5.03002 13.4298 5.09002 14.0698 5.14002C16.0741 5.39863 18.1091 5.27992 20.0698 4.79002C19.9998 7.55002 19.4998 14 14.6098 16.08Z" fill="#205C2A"/>
  </svg>
);

// Data array with component references
export const servicesData = [
  { id: 1, title: 'Therapy Services', icon: LeafIcon },
  { id: 2, title: 'Psychiatric Services', icon: HeartIcon },
  { id: 3, title: 'Wellness Programs', icon: PlantIcon },
];


 // Make sure this file is plain JS (no JSX elements)
export const therapyCards = [
  {
    id: 1,
    iconName: "FaUser",
    title: "Individual Therapy",
    text: "One on one sessions tailored to your goals. Providing a safe, confidential space to explore thoughts, feelings, and behaviors.",
  },
  {
    id: 2,
    iconName: "FaUsers",
    title: "Couples & Family Therapy",
    text: "Collaborative sessions focused on improving communication, resolving conflict and strengthening bonds within relationships.",
  },
  {
    id: 3,
    iconName: "FaUserFriends",
    title: "Group Therapy",
    text: "Guided peer groups that foster bonding, shared learning, and mutual encouragement under professional facilitation.",
  },
  {
    id: 4,
    iconName: "FaChild",
    title: "Child & Adolescent Therapy",
    text: "Developmentally appropriate interventions to help young clients navigate emotional, behavioral, and social challenges.",
  },
];


export const feedbacks = [
    {
      name: "Ashley M",
      quote: "I've never felt more seen and supported.",
      comment: "After struggling for years to find the right therapist, I finally found a place that truly listens. Dare changed my life.",
    },
    {
      name: "Devron T",
      quote: "The staff is warm, professional, and genuinely caring.",
      comment: "From the first phone call to my therapy sessions, I've felt nothing but compassion. They make mental health accessible and welcoming.",
    },
    {
      name: "Rachel B.",
      quote: "Telehealth made it easy for me to get help during tough times.",
      comment: "I was hesitant at first, but virtual care is seamless. My provider helped me manage my anxiety with patience and expertise.",
    },
    {
      name: "Kevin L",
      quote: "The wellness workshops helped me reconnect with myself.",
      comment: "I attended a mindfulness group and left feeling lighter, calmer, and more hopeful. Highly recommend their holistic approach.",
    },
    {
      name: "Jamila R",
      quote: "They really care about the whole person.",
      comment: "I worked with both a therapist and nutrition coach at Dare. The integrated care helped me regain balance emotionally and physically.",
    },
  ];

 export const videoData = [
  {
    src: "/automp.mp4",
    label: "01 GROUP THERAPY",
    paragraph:
      "Peer-led sessions share experiences\nbuild collective resilience together.",
  },
  {
    src: "/video1.mp4",
    label: "02 TELEHEALTH SERVICES",
    paragraph:
      "Convenient video sessions connecting you with\n expert mental health care from anywhere.",
  },
  {
    src: "/video2.mp4",
    label: "03 PSYCHIATRIC SERVICES",
    paragraph:
      "Assessments and  medication management for balanced mood, mental health."
  },
];

