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
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Typography as AntTypography, Divider } from 'antd';
import { Cascader } from 'antd';
import './App.css';

import SearchBar from './SearchBar';
import TopMenu from './TopMenu';

const languages = [
  {
    name: 'Harvard University',

  },
  {
    name: 'Stanford University',

  },
  {
    name: 'Princeton University',

  },
  {
    name: 'Massachusettes Institute of Technology',

  },
  {
    name: 'California Institute of Technology',

  },
  {
    name: 'Northwestern University',

  },
  {
    name: 'Brown University',

  },
  {
    name: 'Dartmouth University',

  },
  {
    name: 'Yale University',

  },
  {
    name: 'Duke University',

  },
  {
    name: 'University of Southern California',

  },
  {
    name: 'University of California Berkeley',

  },
  {
    name: 'University of California Los Angeles',

  },
  {
    name: 'Vanderbilt University',

  }
];

/*
 huehueheuheu
*/
const MastersInSearch = {
    height: 50,
    width: 400
  }
  
  const ProgramTitle = {
    fontSize:16
  }
  
  const explore = {
    color:"#808080"
  };
  
  const divStyle = {
    margin: 50
  };
  
  const searchButtonStyle = {
    height: 100,
    width: 200,
    fontSize: 16,
    position:"center"
  };
  
  const searchBy = {
    fontSize: 16,
    marginBottom: 0
  };
  
  const Program = {
    fontSize: 24,
    marginBottom: 0
  }
  
  const MissionStatementP = {
    fontSize: 25
  }
  
  const LATypography = {
    textAlign: "left"
  }
  
  const SearchTypography = {
    textAlign: "center",
    fontSize: 25
  }
  
  const { Title, Paragraph, Text } = AntTypography;
  
  const TitleColor = {
  
    color: "#FFFFFF"
  
  }
  
 
const BannerText = {
  fontSize: 20,
  color: "#FFFFFF",
  fontWeight: 300
}
  
  class School extends React.Component {
    render(){ 
      return(
        <div>
        <TopMenu />
      
        <Carousel autoplay>
          <div>
            <h3 style={BannerText}>An insitution establishes your prestige, credibilitiy, and professional brand</h3>
          </div>
          <div>
            <h3 style={BannerText}>Your degree is one of first things recruiters see on your resume</h3>
          </div>
          <div>
            <h3 style={BannerText}>Comprehensive information on Ivy Leagues, top engineering schools, and state universities</h3>
          </div>
        </Carousel>
      
      <div className="gutter-example" style={divStyle}>
  
        <Row>
          <Col offset={7} span={4}>
            <Typography style={LATypography}>
              <Title>Masters at </Title>
            </Typography>
          </Col>
          <Col span={8} >
            <SearchBar placeholder="Harvard, Stanford...etc" suggestions={languages}>

            </SearchBar>
          </Col>
        </Row>
        
        <Row gutter={8} type="flex" justify="space-around">
          <Col span={7} offset={3}>
            <div>
              <Row>
                <Text underline style={ProgramTitle}>
                  Best Graduate Schools
                </Text>
              </Row>
              <Row>
                <Button type="link">
                  #1 Harvard University
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #2 Stanford University
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #3 University of Pennslyvania
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #4 University of Chicago
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #5 Massachusettes Institute of Technology
                </Button>
              </Row>
              <Row>
                <Button type="link" style={explore}>
                  (Explore the complete top 30 list)
                </Button>
              </Row>
            </div>
          </Col>
          <Col span={7} >
            <div>
              <Row>
                <Text underline style={ProgramTitle}>
                  Best Value Schools
                </Text>
              </Row>
              <Row>
                <Button type="link">
                  #1 University of California, Berkeley
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #2 University of California, Los Angeles
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #3 University of Texas-Austin
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #4 Pennslyvania State University
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #5 University of Washington
                </Button>
              </Row>
              <Row>
                <Button type="link" style={explore}>
                  (Explore the complete top 30 list)
                </Button>
              </Row>
            </div>
          </Col>
          <Col span={7} >
          <div>
              <Row>
                <Text underline style={ProgramTitle}>
                  Best Scholarship Package Schools
                </Text>
              </Row>
              <Row>
                <Button type="link">
                  #1 Brown University
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #2 Cooper Union
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #3 Cornell University
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #4 Curtis Institute of Music
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #5 Deep Springs College
                </Button>
              </Row>
              <Row>
                <Button type="link" style={explore}>
                  (Explore the complete top 30 list)
                </Button>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
      );
    }
  }
  export default School;
  