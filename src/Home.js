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

import { Link } from 'react-router';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import harvard from './harvard.png';
import mit from './mit.png';
import stanford from './stanford.png';

import Button from 'antd/es/button';
import { Row, Col } from 'antd';
import { Typography as AntTypography, Divider } from 'antd';
import './App.css';

import TopMenu from './TopMenu';

const ColoredLineH = ({ color }) => (
  <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
)

const ColoredLineV = ({ color }) => (
  <vl
        style={{
          color:color,
          height:500,
          left: 50,
          marginleft: 3,
          top: 0
        }}
    />
)

const BannerText = {
  fontSize: 20,
  color: "#FFFFFF",
  fontWeight: 300
}

const divStyle = {
  margin: 50
};

const searchButtonPicture = {
height: 180,
width: 300
}

const searchButtonStyle = {
  height: 40,
  width: 300,
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

function onChange(a, b, c) {
  console.log(a, b, c);
}

function getOnClickHrefHandler(addr) {
  return function() {
    window.location.href = addr
    }
  }

class Home extends React.Component {
  render(){ 
    return(
    <div>

    <div>
      <TopMenu />
    </div>

    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={stanford}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={mit}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={harvard}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

      <div style={divStyle}>

          <Row gutter={16}>
              <Col>
                <AntTypography style={SearchTypography} >
                  <Paragraph> 
                    <Divider orientation="left">Find Your Next Institution</Divider>    
                  </Paragraph>
                </AntTypography>
              </Col>
          </Row>

          <Row gutter={36}>
            <Col className="gutter-row" span={6} offset={3}>
              <Row>
                <img src="https://theshopsatyale.com/cms/wp-content/uploads/2017/07/coverb01_0-1.jpg" style={searchButtonPicture}/>                 
              </Row>
              <Row>
                <div className="gutter-box">
                  <Button block={true} style={searchButtonStyle} onClick={getOnClickHrefHandler("/school")}>
                    <div>
                      <p style={searchBy}>Search by School</p>
                      <p style={Program}></p>
                    </div>
                  </Button>
                </div>
              </Row>
            </Col>

            <Col className="gutter-row" span={6} >
              <Row>
                <img src="https://www.michiganstateuniversityonline.com/wp-content/uploads/sites/3/2018/05/how-business-analytics-can-help-your-business.jpg?w=715&h=375&crop=1" style={searchButtonPicture}/>      
              </Row>
              <Row>
                <div className="gutter-box">
                  <Button block={true} style={searchButtonStyle} onClick={getOnClickHrefHandler("/program")}>
                    <div>
                      <p style={searchBy}>Search by Program</p>
                      <p style={Program}></p>
                    </div>
                  </Button>
                </div>
              </Row>
            </Col>

            <Col className="gutter-row" span={6} >
              <Row>
                <img src="https://media.istockphoto.com/photos/in-the-classroom-multi-ethnic-students-listening-to-a-lecturer-and-picture-id962475722?k=6&m=962475722&s=612x612&w=0&h=Q2P383wBZjKAAz7vzEoBgdo1fJycf3eFWqlfEBeX8gs=" style={searchButtonPicture}/>      
              </Row>
              <Row>
                <div className="gutter-box">
                  <Button block={true} style={searchButtonStyle}>
                    <div>
                      <p style={searchBy}>Search by Popularity</p>
                      <p style={Program}></p>
                    </div>
                  </Button>
                </div>
              </Row>
            </Col>

          </Row>

        <div>    
          <Row>
            <Typography style={LATypography} >
            <Title>- Mission Statement -</Title>
            <Paragraph style={MissionStatementP}>
              "At GradSchooled our mission is to empower and encourage those seeking a graduate school
              education by{' '}
                <Text strong>
                  providing access to centralized information about universities and their programs.
                </Text>
              {' '}Through our website, we look to ease and refine the graduate program search process."
            </Paragraph>
          </Typography>
          </Row>
        </div>

      </div>
    </div>
  );
  }
}

export default Home;
