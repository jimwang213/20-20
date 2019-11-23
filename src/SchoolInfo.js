import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import Button from 'antd/es/button';
import { Table } from 'antd';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Typography as AntTypography, Divider } from 'antd';
import { Cascader } from 'antd';
import './App.css';

import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

import TopMenu from './TopMenu';

const schools =
{
    'MIT': {
      title: "Massachusettes Institute of Technology",
      description: "Massachusetts Institute of Technology is a private research university in Cambridge, Massachusetts. The Institute is a land-grant, sea-grant, and space-grant university, with an urban campus that extends more than a mile alongside the Charles River.",
      ranking: 'Rankings and Top Programs',
      programranking: '#1 Computer Science', 
      programs: [
        {
          name: 'Masters of Science in Business Analytics',
          deadline: 'Jan. 8th 2020',
          gre: '169'
        },
        {
          name: 'Masters of Science in Computer Science',
          deadline: 'Jan. 28th 2020',
          gre: '168'
        },
        {
          name: 'Masters of Science in Physics',
          deadline: 'Feb. 1st 2020',
          gre: '170'
        }
      ],
      column: [
        {
          title: 'name',
          dataIndex: 'name'
        },
        {
          title: 'deadline',
          dataIndex: 'deadline',
        },
        {
          title: 'gre',
          dataIndex: 'gre',
        }
      ],

    },
    'Harvard': {
      title: "Harvard University",
      description: "Harvard is a private research university in Boston, Massachusetts. The Institute is a land-grant, sea-grant, and space-grant university, with an urban campus that extends more than a mile alongside the Charles River.",
      ranking: 'Rankings and Top Programs',
      programranking: '#1 M.B.A', 
      programs: [
        {
          name: 'J.D.',
          deadline: 'Jan. 8th 2020',
          gre: '169'
        },
        {
          name: 'M.B.A.',
          deadline: 'Jan. 28th 2020',
          gre: '168'
        },
        {
          name: 'M.D.',
          deadline: 'Feb. 1st 2020',
          gre: '170'
        }
      ],
      column: [
        {
          title: 'name',
          dataIndex: 'name'
        },
        {
          title: 'deadline',
          dataIndex: 'deadline',
        },
        {
          title: 'gre',
          dataIndex: 'gre',
        }
      ],
    },
    'UTAustin': {
      title: "University of Texas - Austin",
      description: "UT Austin is a public research university in Austin, Texas. The Institute is a land-grant, sea-grant, and space-grant university, with an urban campus that extends more than a mile alongside the Charles River.",
      ranking: 'Rankings and Top Programs',
      programranking: '#1 M.B.A', 
      programs: [
        {
          name: 'Business Analytics',
          deadline: 'Jan. 8th 2020',
          gre: '169'
        },
        {
          name: 'M.B.A.',
          deadline: 'Jan. 28th 2020',
          gre: '168'
        },
        {
          name: 'M.D.',
          deadline: 'Feb. 1st 2020',
          gre: '170'
        }
      ],
      column: [
        {
          title: 'name',
          dataIndex: 'name'
        },
        {
          title: 'deadline',
          dataIndex: 'deadline',
        },
        {
          title: 'gre',
          dataIndex: 'gre',
        }
      ],
    },
    'USC': {
      title: "University of Southern California",
      description: "USC is a private research university in Los Angeles, California. The Institute is a land-grant, sea-grant, and space-grant university, with an urban campus that extends more than a mile alongside the Charles River.",
      ranking: 'Rankings and Top Programs',
      programranking: '#1 M.B.A', 
      programs: [
        {
          name: 'Business Analytics',
          deadline: 'Jan. 8th 2020',
          gre: '169'
        },
        {
          name: 'M.B.A.',
          deadline: 'Jan. 28th 2020',
          gre: '168'
        },
        {
          name: 'M.D.',
          deadline: 'Feb. 1st 2020',
          gre: '170'
        }
      ],
      column: [
        {
          title: 'name',
          dataIndex: 'name'
        },
        {
          title: 'deadline',
          dataIndex: 'deadline',
        },
        {
          title: 'gre',
          dataIndex: 'gre',
        }
      ],
    },
    'CIT': {
      title: "California Institute of Technology",
      description: "California Institute of Technology is a private research university in Pasadena, California. The Institute is a land-grant, sea-grant, and space-grant university, with an urban campus that extends more than a mile alongside the Charles River.",
      ranking: 'Rankings and Top Programs',
      programranking: '#1 M.B.A', 
      programs: [
        {
          name: 'Business Analytics',
          deadline: 'Jan. 8th 2020',
          gre: '169'
        },
        {
          name: 'M.B.A.',
          deadline: 'Jan. 28th 2020',
          gre: '168'
        },
        {
          name: 'M.D.',
          deadline: 'Feb. 1st 2020',
          gre: '170'
        }
      ],
      column: [
        {
          title: 'name',
          dataIndex: 'name'
        },
        {
          title: 'deadline',
          dataIndex: 'deadline',
        },
        {
          title: 'gre',
          dataIndex: 'gre',
        }
      ],
    },
    'CMU': {
      title: "Carnegie Mellon University",
      description: "Carnegie Mellon is a private research university in Pittsburg, Pennslyvania. The Institute is a land-grant, sea-grant, and space-grant university, with an urban campus that extends more than a mile alongside the Charles River.",
      ranking: 'Rankings and Top Programs',
      programranking: '#1 M.B.A', 
      programs: [
        {
          name: 'Business Analytics',
          deadline: 'Jan. 8th 2020',
          gre: '169'
        },
        {
          name: 'M.B.A.',
          deadline: 'Jan. 28th 2020',
          gre: '168'
        },
        {
          name: 'M.D.',
          deadline: 'Feb. 1st 2020',
          gre: '170'
        }
      ],
      column: [
        {
          title: 'name',
          dataIndex: 'name'
        },
        {
          title: 'deadline',
          dataIndex: 'deadline',
        },
        {
          title: 'gre',
          dataIndex: 'gre',
        }
      ],
    }
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

  class SchoolInfo extends React.Component {
    render(){
      const {schoolId} = this.props.match.params;
      var schoolData;
      if (!schools.hasOwnProperty(schoolId)) {
        // program doesn't exist
        window.location.href = "/";
      } else {
        schoolData = schools[schoolId];
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
             <Title style={ProgramInfoTitle}>{schoolData.title}</Title>
             <Paragraph style={ProgramInfoP}>
               {schoolData.description}
             </Paragraph>
           </Typography>
          </Row>
  
          <Row>
              <Typography>
                  <Title style={ProgramInfoTitle}>Rankings and Top Programs</Title>  
              </Typography>        
          </Row>

            <Table pagination={false} dataSource={schoolData.data} columns={schoolData.columns} />
 
          <Row>
            <Typography>
              <Title style={ProgramInfoTitle}>Programs</Title>  
            </Typography>        
          </Row>

          {schoolData.programs.map((program, idx) => 
 
          <Table pagination={false} dataSource={[program]} columns={schoolData.column} /> 
  
            )}

          </div>
        </div>
        )
      }
   }
  
   export default SchoolInfo;