import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { Table } from 'antd';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Typography as AntTypography, Divider } from 'antd';
import { List, Avatar } from 'antd';
import './App.css';

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import Logo from './Logo.png';

//Importing avatars for 20/20 rankings
import t1 from './RankingIcon/TL1.png';
import t2 from './RankingIcon/TL2.png';
import t3 from './RankingIcon/TL3.png';
import t4 from './RankingIcon/TL4.png';
const tierpic = [t1, t2, t3, t4];

// Empty set just to initialize the list. Actual data comes from elsewhere.
const rankingdata = [
  {
  }
];

let arrow = "->";

const colorpal = [
  '#C94A4A', '#E89637', '#5799D6', '#78D657', '#F3B700', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary',
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
        link: 'mit',
        linkID: 'business-analytics',
        tier:'1',
        title: "Master of Business Analytics (Sloan)",
        location: "",
        gre: "GRE: 169",
        gpa: "GPA: 3.9",
        arate: "Acceptance Rate: 4% (800 applicants)"
      },
      {
        header: "University of Texas - Austin",
        link: 'utaustin',
        linkID: 'business-analytics',
        tier:'2',
        title: "Master of Science in Business Analytics (McCombs)",
        location: "",
        gre: "GRE: 165, GMAT: 730",
        gpa: "GPA: 3.69",
        arate: "unknown"
      },
      {
        header: "University of California - Los Angeles",
        link: 'ucla',
        linkID: 'business-analytics',
        tier:'2',
        title: "Master of Science in Business Analytics (Anderson)",
        location: "",
        gre: "GRE: 165, GMAT: 710",
        gpa: "GPA: 3.7",
        arate: "unknown"
      },
      {
        header: "Carnegie Mellon University",
        link: 'cmu',
        linkID: 'business-analytics',
        tier:'2',
        title: "Master of Science in Management Information Systems - Business Intelligence & Data Analytics (Heinz)",
        location: "",
        gre: "GRE: 165, GMAT: 710",
        gpa: "GPA: 3.7",
        arate: "unknown"
      },
      {
        header: "Northwestern University",
        link: 'northwestern',
        linkID: 'business-analytics',
        tier:'2',
        title: "Master of Science in Analytics (McCormick)",
        location: "",
        gre: "GRE: 165, GMAT: 730",
        gpa: "GPA: 3.69",
        arate: "unknown"
      },
      {
        header: "University of Minnesota",
        link: 'northwestern',
        linkID: 'business-analytics',
        tier:'2',
        title: "Master of Science in Business Analytics (Carlson)",
        location: "",
        gre: "GRE: 165, GMAT: 730",
        gpa: "GPA: 3.69",
        arate: "unknown"
      },
      {
        header: "University of Southern California",
        link: 'usc',
        linkID: 'business-analytics',
        tier:'3',
        title: "Master of Science in Business Analytics (Marshall)",
        location: "",
        gre: "GRE: 166, GMAT: 724",
        gpa: "3.7",
        arate: "unknown"
      },
      {
        header: "Emory University",
        link: 'emory',
        linkID: 'business-analytics',
        tier:'3',
        title: "Master of Science in Business Analytics (Goizueta)",
        location: "",
        gre: "GRE: 166, GMAT: 724",
        gpa: "3.7",
        arate: "unknown"
      },
      {
        header: "Duke University",
        link: 'duke',
        linkID: 'business-analytics',
        tier:'3',
        title: "Master of Science in Quantitative Management (Fuqua)",
        location: "",
        gre: "GRE: 166, GMAT: 724",
        gpa: "3.7",
        arate: "unknown"
      },
      {
        header: "Georgia Institute of Technology",
        link: 'git',
        linkID: 'business-analytics',
        tier:'3',
        title: "Master of Science in Analytics",
        location: "",
        gre: "GRE: 166, GMAT: 724",
        gpa: "3.7",
        arate: "unknown"
      },
      {
        header: "University of Chicago",
        link: 'uchicago',
        linkID: 'business-analytics',
        tier:'3',
        title: "Master of Science in Analytics (Graham)",
        location: "",
        gre: "GRE: 166, GMAT: 724",
        gpa: "3.7",
        arate: "unknown"
      },
      {
        header: "Columbia University",
        link: 'columbia',
        linkID: 'business-analytics',
        tier:'3',
        title: "Master of Science in Business Analytics (FU & CBS)",
        location: "",
        gre: "GRE: 166, GMAT: 724",
        gpa: "3.7",
        arate: "unknown"
      },
      {
        header: "Washginton University St. Louis",
        link: 'wustl',
        linkID: 'business-analytics',
        tier:'3',
        title: "Master of Science in Business Analytics (Olin)",
        location: "",
        gre: "GRE: 166, GMAT: 724",
        gpa: "3.7",
        arate: "unknown"
      },
      {
        header: "North Carolina State University",
        link: 'ncsu',
        linkID: 'business-analytics',
        tier:'3',
        title: "Master of Science in Analytics (IAA)",
        location: "",
        gre: "GRE: 166, GMAT: 724",
        gpa: "3.7",
        arate: "unknown"
      },
      {
        header: "University of California - San Diego",
        link: 'ucsd',
        linkID: 'business-analytics',
        tier:'4',
        title: "Master of Science in Business Analytics (Rady)",
        location: "",
        gre: "GRE: 166, GMAT: 724",
        gpa: "3.7",
        arate: "unknown"
      },
      {
        header: "University of California - Davis",
        link: 'ucd',
        linkID: 'business-analytics',
        tier:'4',
        title: "Master of Science in Business Analytics (GSM)",
        location: "",
        gre: "GRE: 166, GMAT: 724",
        gpa: "3.7",
        arate: "unknown"
      },
      {
        header: "University of Notre Dame",
        link: 'notredame',
        linkID: 'business-analytics',
        tier:'4',
        title: "Master of Science in Business Analytics (Mendoza)",
        location: "",
        gre: "GRE: 166, GMAT: 724",
        gpa: "3.7",
        arate: "unknown"
      },
      {
        header: "John Hopkins University",
        link: 'jhu',
        linkID: 'business-analytics',
        tier:'4',
        title: "Master of Science in Business Analytics and Risk Management (Carey)",
        location: "",
        gre: "GRE: 166, GMAT: 724",
        gpa: "3.7",
        arate: "unknown"
      },
      {
        header: "New York University",
        link: 'nyu',
        linkID: 'business-analytics',
        tier:'4',
        title: "Master of Science in Business Analytics (Stern)",
        location: "",
        gre: "GRE: 166, GMAT: 724",
        gpa: "3.7",
        arate: "unknown"
      },
      {
        header: "University of California - Irvine",
        link: 'uci',
        linkID: 'business-analytics',
        tier:'4',
        title: "Master of Science in Business Analytics (Paul Merage)",
        location: "",
        gre: "GRE: 166, GMAT: 724",
        gpa: "3.7",
        arate: "unknown"
      }

    ],
    tiers: [
      { tierlist: "MIT" },
      { tierlist: "UTAustin, CMU, UCLA, NorthWestern, UMN" },
      { tierlist: "USC, Emory, Duke, GeorgiaTech, UChicago, Columbia, WUSTL, NCSU" },
      { tierlist: "UCSD, UCD, NotreDame, John Hopkins, NYU, UCI"}
    ]
  },

  'mba': {
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
        linkID: 'MBA',
        title: "Harvard Business School",
        gre: "169",
        gpa: "3.7",
        arate: "4% (800 applicants)"
      },
      {
        header: "Stanford University",
        link: "Stanford",
        linkID: 'MBA',
        title: "Stanford Graduate School of Business",
        gre: "170",
        gpa: "3.8",
        arate: "5% (800 applicants)"
      },
      {
        header: "University of Pennslyvania",
        link: "UPenn",
        linkID: 'MBA',
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

  'economics': {
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



const { Title, Paragraph, Text } = AntTypography;

const TitleColor = {

  color: "#FFFFFF"

}

const Banner = {
  fontSize: 20
}

class Program extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      data: {
        school_data: [],
        summary_data: {
          post_grad_occupations: [],
        },
      },
    };
  }

  componentDidMount() {
    const { programId } = this.props.match.params;
    fetch(process.env.REACT_APP_API_URL + "/programs?program_name=" + programId)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ 
          data: responseJson,
        });
        console.log(this.state.data);
      })
      .catch((error) => {
        console.error(error);
        window.location.href = "/";
      });
  }

  render() {
    const number_occupations_displayed = 3;
    const summaryData = [
      {
        "average_salary": "$" + this.state.data.summary_data.average_salary,
        "average_tuition": "$" + this.state.data.summary_data.average_tuition + " (year)",
        "program_length": this.state.data.summary_data.min_program_length_low + "-" + this.state.data.summary_data.max_program_length_high + " months",
        "post_grad_occupations": this.state.data.summary_data.post_grad_occupations.slice(0, number_occupations_displayed).map((role, idx) => {
          return role.role_name;
        }).join(", "),
      }
    ];
    const summaryDataCols = [
      {
        title: "Average Salary",
        dataIndex: "average_salary",
      },
      {
        title: "Average Tuition",
        dataIndex: "average_tuition",
      },
      {
        title: "Program Length",
        dataIndex: "program_length", 
      },
      {
        title: "Post-grad Occupations",
        dataIndex: "post_grad_occupations",
      }
    ];

    const tierData = {};
    this.state.data.school_data.forEach(school => {
      if (!tierData.hasOwnProperty(school.tier)) {
        tierData[school.tier] = [];
      }
      tierData[school.tier].push(school.school_name);
    });
    const sortedTierData = [];
    const sortedKeys = Object.keys(tierData);
    sortedKeys.sort();
    for (var i = 0; i < sortedKeys.length; i++) {
      sortedTierData.push({
        tier: parseInt(sortedKeys[i]),
        tierData: tierData[sortedKeys[i]],
      });
    }
    console.log(sortedTierData);

    return (

        <div>

          <Row>
            {/* Column here is for blank space on the sides*/}
            <Col xs={2} sm={2} md={2} lg={4} xl={4}>

            </Col>

            <Col xs={20} sm={20} md={20} lg={16} xl={16}>  

              <Row style={{marginBottom:0}}> 
                {/*top logo portion*/}
                <Col xs={3} sm={3} md={3} lg={4} xl={4} style={{borderRight:"1px solid #D3D3D3"}}>
                    <img src={Logo} height={100} width ={100} alt="logo"/>                              
                </Col>

                <Col xs={20} sm={20} md={20} lg={18} xl={18} style={{marginLeft:20}}>

                    <Row justify="left" style={{fontSize:18}}>
                        Quick, Simple, Information - A new way to search for graduate programs. 
                    </Row>

                    <Row justify="left" style={{ marginTop:8, fontSize:12}}>
                        This centralized website that provides the top 20 graduate programs in the U.S. and each program’s 
                        corresponding top 20 schools. Our goal is to empower and encourage those seeking a graduate school 
                        education. We look to ease and refine the graduate program search process. 
                    </Row>

                </Col>
              </Row>

              <Row style={{marginTop:20}}>
                <Link style={{color:"#808080"}} to={"/"}>Home</Link> <Text style={{marginLeft:10, color:"#808080"}}>{arrow}</Text>
                <Link style={{color:"#808080", marginLeft:10}} >{this.state.data.program_category_name}</Link>
              </Row>

              </Col>
                {/* Column here is for blank space on the sides*/}
              <Col xs={2} sm={2} md={2} lg={4} xl={4}>
        
            </Col>
          </Row>

          <Row>

            <Col xs={2} sm={2} md={2} lg={4} xl={4}>{/* Spacer */}</Col>

            <Col xs={20} sm={20} md={20} lg={16} xl={16}>
              <Typography>
                <Title class="programheader"><span>{this.state.data.program_category_name}</span> </Title>
                <Paragraph style={ProgramInfoP}>
                  {this.state.data.description}
                </Paragraph>
              </Typography>
            </Col>

            <Col xs={2} sm={2} md={2} lg={4} xl={4}>{/* Spacer */}</Col>

          </Row>

          {/* Divider to separate the buttons and the mission statement */}
          <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
          </Divider>

          <Row>
            <Col xs={2} sm={2} md={2} lg={4} xl={4}>{/* Spacer */}</Col>
            <Col xs={20} sm={20} md={20} lg={16} xl={16}>
              <Typography>
                <Title style={{fontSize:28}}>Summary Data</Title>
              </Typography>
              <Table pagination={false} dataSource={summaryData} columns={summaryDataCols} style={ProgramInfoCard} />
            </Col>
            <Col xs={2} sm={2} md={2} lg={4} xl={4}>{/* Spacer */}</Col>
          </Row>

          {/* Divider just for looks */}
          <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
          </Divider>

          <Row justify="space-around">
            <Col xs={2} sm={2} md={2} lg={4} xl={4}>{/* Spacer */}</Col>
            <Col xs={20} sm={20} md={20} lg={16} xl={16}>
              <Typography>
                <Title style={ProgramInfoTitle}>Schools</Title>
              </Typography>
            </Col>
            <Col xs={2} sm={2} md={2} lg={4} xl={4}>{/* Spacer */}</Col>
          </Row>

          <Row>
            <Col xs={2} sm={2} md={2} lg={4} xl={4}>{/*Spacer */}</Col>
            <Col xs={15} sm={15} md={15} lg={12} xl={12}>
              {this.state.data.school_data.map((school, idx) =>
                <Card
                  //border = {'#E72F08'}
                  //border={colorpal[idx]}
                  style={{marginBottom: 25 , borderColor: colorpal[school.tier-1]}}
                >
                <Card.Header style={{backgroundColor: colorpal[school.tier-1], fontSize:18}}> <Link to={"/Program/" + this.state.data.program_category_name + "/" + school.school_name}> {"#" + (idx + 1) + " " + school.school_name}</Link> </Card.Header>
                  <Card.Body>
                    <Card.Title style={{fontSize:16}}>{school.school_name}</Card.Title>
                    <Card.Text>
                      Average GRE Score: {school.average_gre} <br />
                      Average Unweighted GPA: {school.average_gpa} <br />
                      Acceptance Rate: {school.arate || "unknown"}
                    </Card.Text>
                    <Link style={{color:"#606060"}} to={"/Program/" + this.state.data.program_category_name + "/" + school.school_name}>Details...</Link>
                  </Card.Body>
                </Card>
              )}
            </Col>
            {/* Side list for 20/20 rating. Possibily turn into a scrolling list if it gets too long. */}
            <Col xs={4} sm={4} md={4} lg={6} xl={6} offset={1}>

              <Typography>
                <Title style={ProgramInfoTitle}>20/20 Tier List</Title>
              </Typography>
              
         
                {sortedTierData.map((tier, idx) =>
                  <Row>

                    <Col xs={2} sm={2} md={2} lg={4} xl={4}>
                      <img src={tierpic[tier.tier-1]} height={40} width ={40} alt="logo"/>   
                    </Col>

                    <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                      <p style={{marginBottom:1}}>{tier.tierData.join(", ")}</p>
                    </Col>

                    <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
                    </Divider>

                  </Row>
                   
                  
                )}
            
            {/* Old Code for Tier List - Avatar Method
              <Typography>
                <Title style={ProgramInfoTitle}>20/20 Tier List</Title>
              </Typography>
              {programData.tiers.map((tier, idx) =>
                <List
                  style={{marginLeft:0}}
                  size="large"
                  itemLayout="horizontal"
                  dataSource={rankingdata}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta 
                        //For testing purposes I just imported a random image to hold the space.
                        avatar={<Avatar shape="square" size={40}  src={tierpic[idx]} />}
                        title={tier.tierlist}
                      />
                    </List.Item>
                  )}
                />
              )}
              */}
            
              <Typography>
                <Title style={ProgramInfoTitle}>Short List</Title>
              </Typography>

        
              <Text style={{fontSize:16, color:colorpal[0], marginBottom:10}}>Tier 1</Text> <p></p>

              {this.state.data.school_data.map((school, idx) =>
               
                {if (school.tier === 1) {
                  return(
                  <Typography style={{fontSize:14}}> 
                    <Link style={{marginLeft:10, color:"#696969"}} to={"/Program/" + this.state.data.program_category_name + "/" + school.school_name}> #{idx+1}. {school.school_name}</Link>  <p></p>
                  </Typography>
                  )
                }
                }
              )}

              <Text style={{fontSize:16, color:colorpal[1]}}>Tier 2</Text> <p></p>

              {this.state.data.school_data.map((school, idx) =>
              
                {if (school.tier === 2) {
                  return(
                  <Typography style={{fontSize:14, color:"696969"}}> 
                    <Link style={{marginLeft:10, color:"#696969"}} to={"/Program/" + this.state.data.program_category_name + "/" + school.school_name}> #{idx+1}. {school.school_name}</Link>  <p></p>
                  </Typography>
                  )
                }
                }
              )}

              <Text style={{fontSize:16, color:colorpal[2], marginBottom:10}}>Tier 3</Text> <p></p>

              {this.state.data.school_data.map((school, idx) =>

                {if (school.tier === 3) {
                  return(
                  <Typography style={{fontSize:14, color:"696969"}}> 
                    <Link style={{marginLeft:10, color:"#696969"}} to={"/Program/" + this.state.data.program_category_name + "/" + school.school_name}> #{idx+1}. {school.school_name}</Link>  <p></p>
                  </Typography>
                  )
                }
                }
              )}

              <Text style={{fontSize:16, color:colorpal[3], marginBottom:10}}>Tier 4</Text> <p></p>

              {this.state.data.school_data.map((school, idx) =>

                {if (school.tier === 4) {
                  return(
                  <Typography style={{fontSize:14, color:"696969"}}> 
                    <Link style={{marginLeft:10, color:"#696969"}} to={"/Program/" + this.state.data.program_category_name + "/" + school.school_name}> #{idx+1}. {school.school_name}</Link>  <p></p>
                  </Typography>
                  )
                }
                }
              )}

            </Col>

            <Col xs={2} sm={2} md={2} lg={2} xl={2}>{/*Spacer */}</Col>

          </Row>
        </div>
 
    )
  }
}

export default Program;
