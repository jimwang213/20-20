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
import './App.css';

import {Link} from 'react-router-dom'

import Card from 'react-bootstrap/Card'

import TopMenu from './TopMenu';

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
          title: 'Medium_Salary',
          dataIndex: 'Medium_Salary',
        },
        {
          title: 'Average_Tuition',
          dataIndex: 'Average_Tuition',
        },
        {
          title: 'Program_Length',
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
          title: 'Medium_Salary',
          dataIndex: 'Medium_Salary',
        },
        {
          title: 'Average_Tuition',
          dataIndex: 'Average_Tuition',
        },
        {
          title: 'Program_Length',
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
          title: 'Medium_Salary',
          dataIndex: 'Medium_Salary',
        },
        {
          title: 'Average_Tuition',
          dataIndex: 'Average_Tuition',
        },
        {
          title: 'Program_Length',
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
          title: 'Medium_Salary',
          dataIndex: 'Medium_Salary',
        },
        {
          title: 'Average_Tuition',
          dataIndex: 'Average_Tuition',
        },
        {
          title: 'Program_Length',
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
          title: 'Medium_Salary',
          dataIndex: 'Medium_Salary',
        },
        {
          title: 'Average_Tuition',
          dataIndex: 'Average_Tuition',
        },
        {
          title: 'Program_Length',
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
          title: 'Medium_Salary',
          dataIndex: 'Medium_Salary',
        },
        {
          title: 'Average_Tuition',
          dataIndex: 'Average_Tuition',
        },
        {
          title: 'Program_Length',
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
          title: 'Medium_Salary',
          dataIndex: 'Medium_Salary',
        },
        {
          title: 'Average_Tuition',
          dataIndex: 'Average_Tuition',
        },
        {
          title: 'Program_Length',
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
          Occupations_PostGrad: 'Software Developer, Data Scientist, Computer Scientist'
        }
      ],
      columns: [
        {
          title: 'Medium_Salary',
          dataIndex: 'Medium_Salary',
        },
        {
          title: 'Average_Tuition',
          dataIndex: 'Average_Tuition',
        },
        {
          title: 'Program_Length',
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
          title: 'Medium_Salary',
          dataIndex: 'Medium_Salary',
        },
        {
          title: 'Average_Tuition',
          dataIndex: 'Average_Tuition',
        },
        {
          title: 'Program_Length',
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
          title: 'Medium_Salary',
          dataIndex: 'Medium_Salary',
        },
        {
          title: 'Average_Tuition',
          dataIndex: 'Average_Tuition',
        },
        {
          title: 'Program_Length',
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
      title: 'Medium_Salary',
      dataIndex: 'Medium_Salary',
    },
    {
      title: 'Average_Tuition',
      dataIndex: 'Average_Tuition',
    },
    {
      title: 'Program_Length',
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
      title: 'Medium_Salary',
      dataIndex: 'Medium_Salary',
    },
    {
      title: 'Average_Tuition',
      dataIndex: 'Average_Tuition',
    },
    {
      title: 'Program_Length',
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
      title: 'Medium_Salary',
      dataIndex: 'Medium_Salary',
    },
    {
      title: 'Average_Tuition',
      dataIndex: 'Average_Tuition',
    },
    {
      title: 'Program_Length',
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
      title: 'Medium_Salary',
      dataIndex: 'Medium_Salary',
    },
    {
      title: 'Average_Tuition',
      dataIndex: 'Average_Tuition',
    },
    {
      title: 'Program_Length',
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
      title: 'Medium_Salary',
      dataIndex: 'Medium_Salary',
    },
    {
      title: 'Average_Tuition',
      dataIndex: 'Average_Tuition',
    },
    {
      title: 'Program_Length',
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
  ] 
},


}

const ProgramInfoCard = {
  marginBottom: 25
}

const ProgramInfoTitle = {
    fontSize:28
}

const ProgramInfoP = {
    fontSize:20
}

  const ProgramInfoStyle = {
    marginTop:50,
    marginLeft: 250,
    marginRight: 250
  };
  
  const { Title, Paragraph, Text } = AntTypography;
  
  const TitleColor = {
  
    color: "#FFFFFF"
  
  }
  
  const Banner = {
    fontSize: 20
  }
  
 class ProgramInfo extends React.Component {
  render(){
    const {programId} = this.props.match.params;
    var programData;
    if (!programs.hasOwnProperty(programId)) {
      // program doesn't exist
      window.location.href = "/";
    } else {
      programData = programs[programId];
    }

      return (
      <div>
      <TopMenu/>
 
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
          <Typography>
           <Title style={ProgramInfoTitle}>{programData.title}</Title>
            <Paragraph style={ProgramInfoP}>
              {programData.description}
            </Paragraph>
         </Typography>
        </Row>

        <Row>
            <Typography>
                <Title style={ProgramInfoTitle}>Summary Data</Title>  
            </Typography>        
        </Row>

        <Table pagination={false} dataSource={programData.data} columns={programData.columns} style={ProgramInfoCard}/>

        <Row>
            <Typography>
                <Title style={ProgramInfoTitle}>Schools</Title>  
            </Typography>        
        </Row>
        
          {programData.schools.map((school, idx) => 
 
            <Card style={ProgramInfoCard}>
              <Card.Header> <Link to={"/school/" + school.link}> {"#" + (idx+1) + " " + school.header}</Link> </Card.Header>
              <Card.Body>
                <Card.Title>{school.title}</Card.Title>
                <Card.Text>
                  {school.gre} <br/>
                  {school.gpa} <br/>
                  {school.arate} 
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
          )}

      </div>
    </div>
      )
    }
 }

 export default ProgramInfo;
