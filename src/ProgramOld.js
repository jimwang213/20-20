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
    name: 'C#',

  },
  {
    name: 'C++',

  },
  {
    name: 'Clojure',

  },
  {
    name: 'Elm',

  },
  {
    name: 'Go',

  },
  {
    name: 'Haskell',

  },
  {
    name: 'Java',

  },
  {
    name: 'Javascript',

  },
  {
    name: 'Perl',

  },
  {
    name: 'PHP',

  },
  {
    name: 'Python',

  },
  {
    name: 'Ruby',

  },
  {
    name: 'Scala',

  }
];

const MastersInSearch = {
  height: 50
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

function getOnClickHrefHandler(addr) {
  return function() {
    window.location.href = addr
    }
  }

class Program extends React.Component {
  render(){ 
    return(
    <div>
      <TopMenu />
 
      <Carousel autoplay>
        <div>
          <h3 style={BannerText}>Find the program that aligns with your career goals</h3>
        </div>
        <div>
          <h3 style={BannerText}>Join a new program in another field for a career shift</h3>
        </div>
        <div>
          <h3 style={BannerText}>Further enhance your skills in your domain by pursuing higher education</h3>
        </div>
      </Carousel>
    
    <div className="gutter-example" style={divStyle}>

      <Row>
        <Col offset={7} span={4}>
          <Typography style={LATypography}>
            <Title>Masters in </Title>
          </Typography>
        </Col>
        <Col span={8} >
            <SearchBar placeholder="Business, Law...etc" suggestions={languages}>
              
            </SearchBar>
          </Col>
      </Row>
      
      <Row gutter={8} type="flex" justify="space-around">
        <Col span={7} offset={3}>
          <div>
            <Row>
              <Text underline style={ProgramTitle}>
                Business, Economics, Finance
              </Text>
            </Row>
            <Row>
              <Button type="link" onClick={getOnClickHrefHandler("/program/business-analytics")}>
                #1 MS. Business Analytics
              </Button>
            </Row>
            <Row>
              <Button type="link" onClick={getOnClickHrefHandler("/program/MBA")}>
                #2 M.B.A
              </Button>
            </Row>
            <Row>
              <Button type="link" onClick={getOnClickHrefHandler("/program/management")}>
                #3 MS. Management
              </Button>
            </Row>
            <Row>
              <Button type="link" onClick={getOnClickHrefHandler("/program/economics")}>
                #4 MS. Economics
              </Button>
            </Row>
            <Row>
              <Button type="link" onClick={getOnClickHrefHandler("/program/finance")}>
                #5 MS. Finance
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
                Engineering
              </Text>
            </Row>
            <Row>
              <Button type="link" onClick={getOnClickHrefHandler("/program/computer-science")}>
                #1 MS. Computer Science
              </Button>
            </Row>
            <Row>
              <Button type="link" onClick={getOnClickHrefHandler("/program/mechanical-engineering")}>
                #2 MS. Mechanical Engineering
              </Button>
            </Row>
            <Row>
              <Button type="link" onClick={getOnClickHrefHandler("/program/electrical-engineering")}>
                #3 MS. Electrical Engineering
              </Button>
            </Row>
            <Row>
              <Button type="link" onClick={getOnClickHrefHandler("/program/material-engineering")}>
                #4 MS. Material Engineering
              </Button>
            </Row>
            <Row>
              <Button type="link" onClick={getOnClickHrefHandler("/program/information-systems")}>
                #5 MS. Information Systems
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
                Science
              </Text>
            </Row>
            <Row>
              <Button type="link" onClick={getOnClickHrefHandler("/program/mathematics")}>
                #1 Ms. Mathematics
              </Button>
            </Row>
            <Row>
              <Button type="link" onClick={getOnClickHrefHandler("/program/statistics")}>
                #2 MS. Statistics
              </Button>
            </Row>
            <Row>
              <Button type="link" onClick={getOnClickHrefHandler("/program/physics")}>
                #3 MS. Physics
              </Button>
            </Row>
            <Row>
              <Button type="link" onClick={getOnClickHrefHandler("/program/chemistry")}>
                #4 MS. Chemistry
              </Button>
            </Row>
            <Row>
              <Button type="link" onClick={getOnClickHrefHandler("/program/biology")}>
                #5 MS. Biology
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

export default Program;