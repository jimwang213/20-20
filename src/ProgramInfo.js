import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


import Button from 'antd/es/button';
import { Table } from 'antd';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Typography as AntTypography, Divider } from 'antd';
import { List, Avatar } from 'antd';
import './App.css';

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'

import TopMenu from './TopMenu';

//Importing avatars for 20/20 rankings
import t1 from './RankingIcon/1.png';
import t2 from './RankingIcon/2.png';
import t3 from './RankingIcon/3.png';
const tierpic = [t1, t2, t3];

// Empty set just to initialize the list. Actual data comes from elsewhere.
const rankingdata = [
  {
  }
];

const colorpal = [
  'danger', 'warning', 'success', 'info', 'primary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary',
  'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary',
];

const programs =
{

  /* Business Related Programs */

  'business-analytics': {
    title: "Business Analytics",
    description: 'The Masters in Business Analytics prepares you for a career in big data. The programs will teach you basic skills in data preparation, data mining, and data decision making in a business context. Develop the necessary skills to be a data scientist or analyst in one of the fastest growing fields in business.',
    data: [
      {
        Medium_Salary: '$90,000',
        Average_Tuition: '$55,435 (year)',
        Program_Length: '12-18 Months',
        Occupations_PostGrad: 'Data Scientist, Business Analyst, Consulting',
      }
    ],
    columns: [
      {
        title: 'Medium Salary',
        dataIndex: 'Medium_Salary',
      },
      {
        title: 'Average Tuition',
        dataIndex: 'Average_Tuition',
      },
      {
        title: 'Program Length',
        dataIndex: 'Program_Length',
      },
      {
        title: 'Occupations PostGrad',
        dataIndex: 'Occupations_PostGrad',
      }
    ],
    schools: [
      {
        header: "Massachusettes Institute of Technology",
        link: 'MIT',
        title: "Master of Business Analytics (Sloan)",
        location: "",
        gre: "GRE: 169",
        gpa: "GPA: 3.9",
        arate: "Acceptance Rate: 4% (800 applicants)"
      },
      {
        header: "University of Texas - Austin",
        link: 'UTAustin',
        title: "Master of Science in Business Analytics (McCombs)",
        location: "",
        gre: "GRE: 165, GMAT: 730",
        gpa: "GPA: 3.69",
        arate: "unknown"
      },
      {
        header: "University of Southern California",
        link: 'USC',
        title: "Master of Science in Business Analytics (Marshall)",
        location: "",
        gre: "GRE: 166, GMAT: 724",
        gpa: "3.7",
        arate: "unknown"
      }
    ],
    tiers: [
      { tierlist: "Massachusettes Institute of Technology, California Institute of Technology" },
      { tierlist: "Carnegie Mellon University" },
      { tierlist: "Pepe University" }
    ]
  },

  'MBA': {
    title: "M.B.A.",
    description: "The Masters in Business Administration program prepares prospective students with 2-4 years of work experience to become our future executives that lead core business decisions.",
    data: [
      {
        Medium_Salary: '$120,000',
        Average_Tuition: '$65,435 (year)',
        Program_Length: '2 years',
        Occupations_PostGrad: 'Finance, Consulting, Tech, F500 Rotation Programs',
      }
    ],
    columns: [
      {
        title: 'Medium Salary',
        dataIndex: 'Medium_Salary',
      },
      {
        title: 'Average Tuition',
        dataIndex: 'Average_Tuition',
      },
      {
        title: 'Program Length',
        dataIndex: 'Program_Length',
      },
      {
        title: 'Occupations_PostGrad',
        dataIndex: 'Occupations_PostGrad',
      }
    ],
    schools: [
      {
        header: "Harvard University",
        link: "Harvard",
        title: "Harvard Business School",
        gre: "169",
        gpa: "3.7",
        arate: "4% (800 applicants)"
      },
      {
        header: "Stanford University",
        link: "Stanford",
        title: "Stanford Graduate School of Business",
        gre: "170",
        gpa: "3.8",
        arate: "5% (800 applicants)"
      },
      {
        header: "University of Pennslyvania",
        link: "UPenn",
        title: "Wharton",
        gre: "169",
        gpa: "3.7",
        arate: "6% (800 applicants)"
      }
    ],
    tiers: [
      { tierlist: "Massachusettes Institute of Technology, California Institute of Technology" },
      { tierlist: "Carnegie Mellon University" },
      { tierlist: "Pepe University" }
    ]
  },

  'finance': {
    title: "Masters of Science in Finance",
    description: "The Masters Science in Finance prepares prospective students with 2-4 years of work experience to become our future executives that lead core business decisions.",
    data: [
      {
        Medium_Salary: '$120,000',
        Average_Tuition: '$65,435 (year)',
        Program_Length: '2 years',
        Occupations_PostGrad: 'Finance, Consulting, Tech, F500 Rotation Programs',
      }
    ],
    columns: [
      {
        title: 'Medium Salary',
        dataIndex: 'Medium_Salary',
      },
      {
        title: 'Average Tuition',
        dataIndex: 'Average_Tuition',
      },
      {
        title: 'Program Length',
        dataIndex: 'Program_Length',
      },
      {
        title: 'Occupations_PostGrad',
        dataIndex: 'Occupations_PostGrad',
      }
    ],
    schools: [
      {
        header: "Harvard University",
        link: "Harvard",
        title: "Harvard Business School",
        gre: "169",
        gpa: "3.7",
        arate: "4% (800 applicants)"
      },
      {
        header: "Stanford University",
        link: "Stanford",
        title: "Stanford Graduate School of Business",
        gre: "170",
        gpa: "3.8",
        arate: "5% (800 applicants)"
      },
      {
        header: "University of Pennslyvania",
        link: "UPenn",
        title: "Wharton",
        gre: "169",
        gpa: "3.7",
        arate: "6% (800 applicants)"
      }
    ],
    tiers: [
      { tierlist: "Massachusettes Institute of Technology, California Institute of Technology" },
      { tierlist: "Carnegie Mellon University" },
      { tierlist: "Pepe University" }
    ]
  },

  'management': {
    title: "Masters of Science in Management",
    description: "The Masters Science in Management prepares prospective students with 2-4 years of work experience to become our future executives that lead core business decisions.",
    data: [
      {
        Medium_Salary: '$120,000',
        Average_Tuition: '$65,435 (year)',
        Program_Length: '2 years',
        Occupations_PostGrad: 'Finance, Consulting, Tech, F500 Rotation Programs',
      }
    ],
    columns: [
      {
        title: 'Medium Salary',
        dataIndex: 'Medium_Salary',
      },
      {
        title: 'Average Tuition',
        dataIndex: 'Average_Tuition',
      },
      {
        title: 'Program Length',
        dataIndex: 'Program_Length',
      },
      {
        title: 'Occupations_PostGrad',
        dataIndex: 'Occupations_PostGrad',
      }
    ],
    schools: [
      {
        header: "Harvard University",
        link: "Harvard",
        title: "Harvard Business School",
        gre: "169",
        gpa: "3.7",
        arate: "4% (800 applicants)"
      },
      {
        header: "Stanford University",
        link: "Stanford",
        title: "Stanford Graduate School of Business",
        gre: "170",
        gpa: "3.8",
        arate: "5% (800 applicants)"
      },
      {
        header: "University of Pennslyvania",
        link: "UPenn",
        title: "Wharton",
        gre: "169",
        gpa: "3.7",
        arate: "6% (800 applicants)"
      }
    ],
    tiers: [
      { tierlist: "Massachusettes Institute of Technology, California Institute of Technology" },
      { tierlist: "Carnegie Mellon University" },
      { tierlist: "Pepe University" }
    ]
  },

  'Economics': {
    title: "Masters of Science in Economics",
    description: "The Masters Science in Economics prepares prospective students with 2-4 years of work experience to become our future executives that lead core business decisions.",
    data: [
      {
        Medium_Salary: '$120,000',
        Average_Tuition: '$65,435 (year)',
        Program_Length: '2 years',
        Occupations_PostGrad: 'Finance, Consulting, Tech, F500 Rotation Programs',
      }
    ],
    columns: [
      {
        title: 'Medium Salary',
        dataIndex: 'Medium_Salary',
      },
      {
        title: 'Average Tuition',
        dataIndex: 'Average_Tuition',
      },
      {
        title: 'Program Length',
        dataIndex: 'Program_Length',
      },
      {
        title: 'Occupations_PostGrad',
        dataIndex: 'Occupations_PostGrad',
      }
    ],
    schools: [
      {
        header: "Harvard University",
        link: "Harvard",
        title: "Harvard Business School",
        gre: "169",
        gpa: "3.7",
        arate: "4% (800 applicants)"
      },
      {
        header: "Stanford University",
        link: "Stanford",
        title: "Stanford Graduate School of Business",
        gre: "170",
        gpa: "3.8",
        arate: "5% (800 applicants)"
      },
      {
        header: "University of Pennslyvania",
        link: "UPenn",
        title: "Wharton",
        gre: "169",
        gpa: "3.7",
        arate: "6% (800 applicants)"
      }
    ],
    tiers: [
      { tierlist: "Massachusettes Institute of Technology, California Institute of Technology" },
      { tierlist: "Carnegie Mellon University" },
      { tierlist: "Pepe University" }
    ]
  },

  /* Engineering  Related Programs */

  'computer-science': {
    title: "Masters of Science in Computer Science",
    description: "The Masters of Science in Computer Science prepares students with the cutting edge training in Machine Learning, AI, Cybersecurity, and Software Engineering. The programs  on a wide array",
    data: [
      {
        Medium_Salary: '$116,679',
        Average_Tuition: '$47,324 (year)',
        Program_Length: '1-2 years',
        Occupations_PostGrad: 'Software Developer, Data Scientist, Computer Scientist'
      }
    ],
    columns: [
      {
        title: 'Medium Salary',
        dataIndex: 'Medium_Salary',
      },
      {
        title: 'Average Tuition',
        dataIndex: 'Average_Tuition',
      },
      {
        title: 'Program Length',
        dataIndex: 'Program_Length',
      },
      {
        title: 'Occupations_PostGrad',
        dataIndex: 'Occupations_PostGrad',
      }
    ],
    schools: [
      {
        header: "Massachusettes Institute of Technology",
        link: "MIT",
        title: "Masters in Computer Engineering",
        gre: "169",
        gpa: "3.8",
        arate: "4% (800 applicants)"
      },
      {
        header: "California Institute of Technology",
        link: "CIT",
        title: "Masters in Computer Science",
        gre: "170",
        gpa: "3.8",
        arate: "5% (800 applicants)"
      },
      {
        header: "Carnegie Mellon University",
        link: "CMU",
        title: "Master of Science in Computer Science",
        gre: "169",
        gpa: "3.7",
        arate: "6% (800 applicants)"
      }
    ],
    tiers: [
      { tierlist: "Massachusettes Institute of Technology, California Institute of Technology" },
      { tierlist: "Carnegie Mellon University" },
      { tierlist: "Pepe University" }
    ]
  },
  'mechanical-engineering': {
    title: "Masters of Science in Mechanical Engineering",
    description: "The Masters of Science in Mechanical Engineering prepares students with the cutting edge training in Robotics, AI, Mechanics, and Software Engineering. The programs  on a wide array",
    data: [
      {
        Medium_Salary: '$116,679',
        Average_Tuition: '$47,324 (year)',
        Program_Length: '1-2 years',
        Occupations_PostGrad: 'Software Developer, Data Scientist, Computer Scientist'
      }
    ],
    columns: [
      {
        title: 'Medium Salary',
        dataIndex: 'Medium_Salary',
      },
      {
        title: 'Average Tuition',
        dataIndex: 'Average_Tuition',
      },
      {
        title: 'Program Length',
        dataIndex: 'Program_Length',
      },
      {
        title: 'Occupations_PostGrad',
        dataIndex: 'Occupations_PostGrad',
      }
    ],
    schools: [
      {
        header: "Massachusettes Institute of Technology",
        link: "MIT",
        title: "Masters in Computer Engineering",
        gre: "169",
        gpa: "3.8",
        arate: "4% (800 applicants)"
      },
      {
        header: "California Institute of Technology",
        link: "CIT",
        title: "Masters in Computer Science",
        gre: "170",
        gpa: "3.8",
        arate: "5% (800 applicants)"
      },
      {
        header: "Carnegie Mellon University",
        link: "CMU",
        title: "Master of Science in Computer Science",
        gre: "169",
        gpa: "3.7",
        arate: "6% (800 applicants)"
      }
    ],
    tiers: [
      { tierlist: "Massachusettes Institute of Technology, California Institute of Technology" },
      { tierlist: "Carnegie Mellon University" },
      { tierlist: "Pepe University" }
    ]
  },

  'electrical-engineering': {
    title: "Masters of Science in Electrical Engineering",
    description: "The Masters of Science in Electrical Engineering prepares students with the cutting edge training in Robotics, AI, Mechanics, and Software Engineering. The programs  on a wide array",
    data: [
      {
        Medium_Salary: '$116,679',
        Average_Tuition: '$47,324 (year)',
        Program_Length: '1-2 years',
        Occupations_PostGrad: 'Software Developer, Data Scientist, Computer Scientist',
      }
    ],
    columns: [
      {
        title: 'Medium Salary',
        dataIndex: 'Medium_Salary',
      },
      {
        title: 'Average Tuition',
        dataIndex: 'Average_Tuition',
      },
      {
        title: 'Program Length',
        dataIndex: 'Program_Length',
      },
      {
        title: 'Occupations PostGrad',
        dataIndex: 'Occupations_PostGrad',
      }
    ],
    schools: [
      {
        header: "Massachusettes Institute of Technology",
        link: "MIT",
        title: "Masters in Computer Engineering",
        gre: "169",
        gpa: "3.8",
        arate: "4% (800 applicants)",
      },
      {
        header: "California Institute of Technology",
        link: "CIT",
        title: "Masters in Computer Science",
        gre: "170",
        gpa: "3.8",
        arate: "5% (800 applicants)",
      },
      {
        header: "Carnegie Mellon University",
        link: "CMU",
        title: "Master of Science in Computer Science",
        gre: "169",
        gpa: "3.7",
        arate: "6% (800 applicants)",
      }
    ],
    tiers: [
      { tierlist: "Massachusettes Institute of Technology, California Institute of Technology" },
      { tierlist: "Carnegie Mellon University" },
      { tierlist: "Pepe University" }
    ]
  },

  'material-engineering': {
    title: "Masters of Science in Material Engineering",
    description: "The Masters of Science in Material Engineering prepares students with the cutting edge training in Robotics, AI, Mechanics, and Software Engineering. The programs  on a wide array",
    data: [
      {
        Medium_Salary: '$116,679',
        Average_Tuition: '$47,324 (year)',
        Program_Length: '1-2 years',
        Occupations_PostGrad: 'Software Developer, Data Scientist, Computer Scientist'
      }
    ],
    columns: [
      {
        title: 'Medium Salary',
        dataIndex: 'Medium_Salary',
      },
      {
        title: 'Average Tuition',
        dataIndex: 'Average_Tuition',
      },
      {
        title: 'Program Length',
        dataIndex: 'Program_Length',
      },
      {
        title: 'Occupations_PostGrad',
        dataIndex: 'Occupations_PostGrad',
      }
    ],
    schools: [
      {
        header: "Massachusettes Institute of Technology",
        link: "MIT",
        title: "Masters in Computer Engineering",
        gre: "169",
        gpa: "3.8",
        arate: "4% (800 applicants)"
      },
      {
        header: "California Institute of Technology",
        link: "CIT",
        title: "Masters in Computer Science",
        gre: "170",
        gpa: "3.8",
        arate: "5% (800 applicants)"
      },
      {
        header: "Carnegie Mellon University",
        link: "CMU",
        title: "Master of Science in Computer Science",
        gre: "169",
        gpa: "3.7",
        arate: "6% (800 applicants)"
      }
    ],
    tiers: [
      { tierlist: "Massachusettes Institute of Technology, California Institute of Technology" },
      { tierlist: "Carnegie Mellon University" },
      { tierlist: "Pepe University" }
    ]
  },

  'information-systems': {
    title: "Masters of Science in Information Systems",
    description: "The Masters of Science in Information Systems prepares students with the cutting edge training in Robotics, AI, Mechanics, and Software Engineering. The programs  on a wide array",
    data: [
      {
        Medium_Salary: '$116,679',
        Average_Tuition: '$47,324 (year)',
        Program_Length: '1-2 years',
        Occupations_PostGrad: 'Software Developer, Data Scientist, Computer Scientist'
      }
    ],
    columns: [
      {
        title: 'Medium Salary',
        dataIndex: 'Medium_Salary',
      },
      {
        title: 'Average Tuition',
        dataIndex: 'Average_Tuition',
      },
      {
        title: 'Program Length',
        dataIndex: 'Program_Length',
      },
      {
        title: 'Occupations_PostGrad',
        dataIndex: 'Occupations_PostGrad',
      }
    ],
    schools: [
      {
        header: "Massachusettes Institute of Technology",
        link: "MIT",
        title: "Masters in Computer Engineering",
        gre: "169",
        gpa: "3.8",
        arate: "4% (800 applicants)"
      },
      {
        header: "California Institute of Technology",
        link: "CIT",
        title: "Masters in Computer Science",
        gre: "170",
        gpa: "3.8",
        arate: "5% (800 applicants)"
      },
      {
        header: "Carnegie Mellon University",
        link: "CMU",
        title: "Master of Science in Computer Science",
        gre: "169",
        gpa: "3.7",
        arate: "6% (800 applicants)"
      }
    ],
    tiers: [
      { tierlist: "Massachusettes Institute of Technology, California Institute of Technology" },
      { tierlist: "Carnegie Mellon University" },
      { tierlist: "Pepe University" }
    ]
  },

  /* Science Programs */

  'mathematics': {
    title: "Masters of Science in Mathematics",
    description: "The Masters of Science in Mathematics prepares students with the cutting edge training in Robotics, AI, Mechanics, and Software Engineering. The programs  on a wide array",
    data: [
      {
        Medium_Salary: '$116,679',
        Average_Tuition: '$47,324 (year)',
        Program_Length: '1-2 years',
        Occupations_PostGrad: 'Software Developer, Data Scientist, Computer Scientist'
      }
    ],
    columns: [
      {
        title: 'Medium Salary',
        dataIndex: 'Medium_Salary',
      },
      {
        title: 'Average Tuition',
        dataIndex: 'Average_Tuition',
      },
      {
        title: 'Program Length',
        dataIndex: 'Program_Length',
      },
      {
        title: 'Occupations_PostGrad',
        dataIndex: 'Occupations_PostGrad',
      }
    ],
    schools: [
      {
        header: "Massachusettes Institute of Technology",
        link: "MIT",
        title: "Masters in Computer Engineering",
        gre: "169",
        gpa: "3.8",
        arate: "4% (800 applicants)"
      },
      {
        header: "California Institute of Technology",
        link: "CIT",
        title: "Masters in Computer Science",
        gre: "170",
        gpa: "3.8",
        arate: "5% (800 applicants)"
      },
      {
        header: "Carnegie Mellon University",
        link: "CMU",
        title: "Master of Science in Computer Science",
        gre: "169",
        gpa: "3.7",
        arate: "6% (800 applicants)"
      }
    ],
    tiers: [
      { tierlist: "Massachusettes Institute of Technology, California Institute of Technology" },
      { tierlist: "Carnegie Mellon University" },
      { tierlist: "Pepe University" }
    ]
  },

  'statistics': {
    title: "Masters of Science in Statistics",
    description: "The Masters of Science in Statistics prepares students with the cutting edge training in Robotics, AI, Mechanics, and Software Engineering. The programs  on a wide array",
    data: [
      {
        Medium_Salary: '$116,679',
        Average_Tuition: '$47,324 (year)',
        Program_Length: '1-2 years',
        Occupations_PostGrad: 'Software Developer, Data Scientist, Computer Scientist'
      }
    ],
    columns: [
      {
        title: 'Medium Salary',
        dataIndex: 'Medium_Salary',
      },
      {
        title: 'Average Tuition',
        dataIndex: 'Average_Tuition',
      },
      {
        title: 'Program Length',
        dataIndex: 'Program_Length',
      },
      {
        title: 'Occupations_PostGrad',
        dataIndex: 'Occupations_PostGrad',
      }
    ],
    schools: [
      {
        header: "Massachusettes Institute of Technology",
        link: "MIT",
        title: "Masters in Computer Engineering",
        gre: "169",
        gpa: "3.8",
        arate: "4% (800 applicants)"
      },
      {
        header: "California Institute of Technology",
        link: "CIT",
        title: "Masters in Computer Science",
        gre: "170",
        gpa: "3.8",
        arate: "5% (800 applicants)"
      },
      {
        header: "Carnegie Mellon University",
        link: "CMU",
        title: "Master of Science in Computer Science",
        gre: "169",
        gpa: "3.7",
        arate: "6% (800 applicants)"
      }
    ],
    tiers: [
      { tierlist: "Massachusettes Institute of Technology, California Institute of Technology" },
      { tierlist: "Carnegie Mellon University" },
      { tierlist: "Pepe University" }
    ]
  },

  'physics': {
    title: "Masters of Science in Physics",
    description: "The Masters of Science in Physics prepares students with the cutting edge training in Robotics, AI, Mechanics, and Software Engineering. The programs  on a wide array",
    data: [
      {
        Medium_Salary: '$116,679',
        Average_Tuition: '$47,324 (year)',
        Program_Length: '1-2 years',
        Occupations_PostGrad: 'Software Developer, Data Scientist, Computer Scientist'
      }
    ],
    columns: [
      {
        title: 'Medium Salary',
        dataIndex: 'Medium_Salary',
      },
      {
        title: 'Average Tuition',
        dataIndex: 'Average_Tuition',
      },
      {
        title: 'Program Length',
        dataIndex: 'Program_Length',
      },
      {
        title: 'Occupations_PostGrad',
        dataIndex: 'Occupations_PostGrad',
      }
    ],
    schools: [
      {
        header: "Massachusettes Institute of Technology",
        link: "MIT",
        title: "Masters in Computer Engineering",
        gre: "169",
        gpa: "3.8",
        arate: "4% (800 applicants)"
      },
      {
        header: "California Institute of Technology",
        link: "CIT",
        title: "Masters in Computer Science",
        gre: "170",
        gpa: "3.8",
        arate: "5% (800 applicants)"
      },
      {
        header: "Carnegie Mellon University",
        link: "CMU",
        title: "Master of Science in Computer Science",
        gre: "169",
        gpa: "3.7",
        arate: "6% (800 applicants)"
      }
    ],
    tiers: [
      { tierlist: "Massachusettes Institute of Technology, California Institute of Technology" },
      { tierlist: "Carnegie Mellon University" },
      { tierlist: "Pepe University" }
    ]
  },

  'chemistry': {
    title: "Masters of Science in Chemistry",
    description: "The Masters of Science in Chemistry prepares students with the cutting edge training in Robotics, AI, Mechanics, and Software Engineering. The programs  on a wide array",
    data: [
      {
        Medium_Salary: '$116,679',
        Average_Tuition: '$47,324 (year)',
        Program_Length: '1-2 years',
        Occupations_PostGrad: 'Software Developer, Data Scientist, Computer Scientist'
      }
    ],
    columns: [
      {
        title: 'Medium Salary',
        dataIndex: 'Medium_Salary',
      },
      {
        title: 'Average Tuition',
        dataIndex: 'Average_Tuition',
      },
      {
        title: 'Program Length',
        dataIndex: 'Program_Length',
      },
      {
        title: 'Occupations_PostGrad',
        dataIndex: 'Occupations_PostGrad',
      }
    ],
    schools: [
      {
        header: "Massachusettes Institute of Technology",
        link: "MIT",
        title: "Masters in Computer Engineering",
        gre: "169",
        gpa: "3.8",
        arate: "4% (800 applicants)"
      },
      {
        header: "California Institute of Technology",
        link: "CIT",
        title: "Masters in Computer Science",
        gre: "170",
        gpa: "3.8",
        arate: "5% (800 applicants)"
      },
      {
        header: "Carnegie Mellon University",
        link: "CMU",
        title: "Master of Science in Computer Science",
        gre: "169",
        gpa: "3.7",
        arate: "6% (800 applicants)"
      }
    ],
    tiers: [
      { tierlist: "Massachusettes Institute of Technology, California Institute of Technology" },
      { tierlist: "Carnegie Mellon University" },
      { tierlist: "Pepe University" }
    ]
  },

  'biology': {
    title: "Masters of Science in Biology",
    description: "The Masters of Science in Biology prepares students with the cutting edge training in Robotics, AI, Mechanics, and Software Engineering. The programs  on a wide array",
    data: [
      {
        Medium_Salary: '$116,679',
        Average_Tuition: '$47,324 (year)',
        Program_Length: '1-2 years',
        Occupations_PostGrad: 'Software Developer, Data Scientist, Computer Scientist'
      }
    ],
    columns: [
      {
        title: 'Medium Salary',
        dataIndex: 'Medium_Salary',
      },
      {
        title: 'Average Tuition',
        dataIndex: 'Average_Tuition',
      },
      {
        title: 'Program Length',
        dataIndex: 'Program_Length',
      },
      {
        title: 'Occupations_PostGrad',
        dataIndex: 'Occupations_PostGrad',
      }
    ],
    schools: [
      {
        header: "Massachusettes Institute of Technology",
        link: "MIT",
        title: "Masters in Computer Engineering",
        gre: "169",
        gpa: "3.8",
        arate: "4% (800 applicants)"
      },
      {
        header: "California Institute of Technology",
        link: "CIT",
        title: "Masters in Computer Science",
        gre: "170",
        gpa: "3.8",
        arate: "5% (800 applicants)"
      },
      {
        header: "Carnegie Mellon University",
        link: "CMU",
        title: "Master of Science in Computer Science",
        gre: "169",
        gpa: "3.7",
        arate: "6% (800 applicants)"
      }
    ],
    tiers: [
      { tierlist: "Massachusettes Institute of Technology, California Institute of Technology" },
      { tierlist: "Carnegie Mellon University" },
      { tierlist: "Pepe University" }
    ]
  },


}

const ProgramInfoCard = {
  marginBottom: 25
  //,  width: '18rem' 
}

const ProgramInfoTitle = {
  fontSize: 28
}

const ProgramInfoP = {
  fontSize: 20
}

const ProgramInfoStyle = {
  marginTop: 50,
  //marginLeft: 250,
  //marginRight: 250
};

const { Title, Paragraph, Text } = AntTypography;

const TitleColor = {

  color: "#FFFFFF"

}

const Banner = {
  fontSize: 20
}

class ProgramInfo extends React.Component {
  render() {
    const { programId } = this.props.match.params;
    var programData;
    if (!programs.hasOwnProperty(programId)) {
      // program doesn't exist
      window.location.href = "/";
    } else {
      programData = programs[programId];
    }

    return (
      <div>
        <TopMenu />

        <Carousel autoplay>
          <div style={Banner}>
            <h3>A Masters Degree is like A College Degree 10 Years Ago</h3>
          </div>
          <div>
            <h3>Find the Best Investment In Your Future</h3>
          </div>
          <div>
            <h3>Find the Best Investment In Your Future</h3>
          </div>
        </Carousel>

        <div className="gutter-example" style={ProgramInfoStyle}>
          <Row>
            <Col xs={1} sm={1} md={2} lg={3} xl={3}>{/* Spacer */}</Col>
            <Col xs={22} sm={22} md={20} lg={18} xl={18}>
              <Typography>
                <Title style={ProgramInfoTitle}>{programData.title}</Title>
                <Paragraph style={ProgramInfoP}>
                  {programData.description}
                </Paragraph>
              </Typography>
            </Col>
            <Col xs={1} sm={1} md={2} lg={3} xl={3}>{/* Spacer */}</Col>
          </Row>

          {/* Divider to separate the buttons and the mission statement */}
          <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
          </Divider>

          <Row>
            <Col xs={1} sm={1} md={2} lg={3} xl={3}>{/* Spacer */}</Col>
            <Col xs={22} sm={22} md={20} lg={18} xl={18}>
              <Typography>
                <Title style={ProgramInfoTitle}>Summary Data</Title>
              </Typography>
              <Table pagination={false} dataSource={programData.data} columns={programData.columns} style={ProgramInfoCard} />
            </Col>
            <Col xs={1} sm={1} md={2} lg={3} xl={3}>{/* Spacer */}</Col>

          </Row>



          {/* Divider just for looks */}
          <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
          </Divider>

          <Row justify="space-around">
            <Col xs={1} sm={1} md={2} lg={3} xl={3}>{/* Spacer */}</Col>
            <Col xs={22} sm={22} md={20} lg={18} xl={18}>
              <Typography>
                <Title style={ProgramInfoTitle}>Schools</Title>
              </Typography>
            </Col>
            <Col xs={1} sm={1} md={2} lg={3} xl={3}>{/* Spacer */}</Col>
          </Row>
          <Row>
            <Col xs={1} sm={1} md={2} lg={3} xl={3}>{/*Spacer */}</Col>
            <Col xs={18} sm={18} md={17} lg={16} xl={16}>
              {programData.schools.map((school, idx) =>
                <Card
                  border={colorpal[idx]}
                  style={ProgramInfoCard}
                >
                  <Card.Header> <Link to={"/school/" + school.link}> {"#" + (idx + 1) + " " + school.header}</Link> </Card.Header>
                  <Card.Body>
                    <Card.Title>{school.title}</Card.Title>
                    <Card.Text>
                      Average GRE Score: {school.gre} <br />
                  Average Unweighted GPA: {school.gpa} <br />
                  Acceptance Rate: {school.arate}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              )}
            </Col>
            {/* Side list for 20/20 rating. Possibily turn into a scrolling list if it gets too long. */}
            <Col xs={4} sm={4} md={4} lg={4} xl={4} offset={1}>
              <Typography>
                <Title style={ProgramInfoTitle}>20/20 Tier List</Title>
              </Typography>
              {programData.tiers.map((tier, idx) =>
                <List
                  size="large"
                  itemLayout="horizontal"
                  dataSource={rankingdata}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        //For testing purposes I just imported a random image to hold the space.
                        avatar={<Avatar shape="square" size={64} src={tierpic[idx]} />}
                        title={tier.tierlist}
                      />
                    </List.Item>
                  )}
                />
              )}
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default ProgramInfo;
