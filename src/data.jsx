import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpg';
import Work4 from './assets/project-4.jpg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Projects',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Vivek Kumar',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Verma',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '20 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Ballia (UP)',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '8840432962',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'vivekverma942003@gmail.com',
  },

  {
    id: 9,
    title: 'Instagram : ',
    description: 'verma_vivek_942003',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'English, Hindi',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '0+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '0+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Fresher',
    title: 'Web Developer ',
    desc: 'Front end React developer ',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Fresher',
    title: 'UI/UX Designer ',
    desc: ' ',
  },

  // {
  //   id: 3,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2005 - 2013',
  //   title: 'Consultant <span> Videohive </span>',
  //   desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  // },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021- till now',
    title: 'Engineering Degree <span> G.L Bajaj Institute of Technology & Management </span>',
    desc: 'Pursuing B-Tech (CS) from AKTU University',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021',
    title: 'Intermediate <span> UP Board of Education </span>',
    desc: 'Qualified intermediate class from up board of education',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'High School <span> Gyan Kunj Academy </span>',
    desc: 'Qualified class 10th from CBSE board in the year of 2019',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '80',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Bootstrap',
    percentage: '90',
  },

  {
    id: 5,
    title: 'Git & Github',
    percentage: '80',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Redux',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '90',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Portfolio Project 3D',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Self-Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://vivek-react-project-portfolio-3d.netlify.app',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'AI New Reader',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web App',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Self-Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Alan AI',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://glbajajproject-college-mini-project.netlify.app',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Netflix Clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web App',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Self Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://vivekproject-netflix-clone.netlify.app',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Amazon-Clone',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Self Project',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'It is an amazon-clone e-commerce web app',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Weather Forecast',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web App',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Self Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://react-project-weather-forecast.netlify.app',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
