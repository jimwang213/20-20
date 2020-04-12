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

var viewportWidth = window.innerWidth;
var viewportHeight = window.innerHeight;
var refviewportWidth = window.innerWidth;
var refviewportHeight = window.innerHeight;
var widthratioupdate = 1;
var heightratioupdate = 1;

// Resize webpage based on viewport size
function ResizeUpdate(widthupdate, heightupdate) {
  refviewportWidth = viewportWidth;
  refviewportHeight = viewportHeight;
  console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
  viewportWidth = widthupdate;
  viewportHeight = heightupdate;
  widthratioupdate = viewportWidth / refviewportWidth;
  heightratioupdate = viewportHeight / refviewportHeight;
  console.log('ratio (width, height): ', widthratioupdate, 'x', heightratioupdate)
  return [widthratioupdate, heightratioupdate];
}

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
      color: color,
      height: 500,
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

const backgroundImage = {
  backgroundImage: 'url(https://teachingcommons.stanford.edu/sites/teachingcommons/files/styles/ug-8-col-header/public/images/2015/08/cfr-p4-14_2.jpg?itok=3GTpg8xj)'
}

var searchBy = {
  fontSize: 20,
  marginBottom: 0,
  test: function () {

  }
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

const LATypographyC = {
  textAlign: "center"
}

const SearchTypography = {
  textAlign: "center",
  fontSize: 36
}

const { Title, Paragraph, Text } = AntTypography;

function onChange(a, b, c) {
  console.log(a, b, c);
}

function getOnClickHrefHandler(addr) {
  return function () {
    window.location.href = addr
  }
}



class Home extends React.Component {

  state = {
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    
    searchButtonStyle: {
      height: window.innerHeight/5.0,
      width: window.innerWidth/6.3,
      fontSize: 16,
      position: "center",
    },

    searchButtonPicture: {
      height: window.innerWidth/6.3*0.57,
      width: window.innerWidth/6.3
    }
  }


  handleResize = () => {
    var ratio = ResizeUpdate(window.innerWidth, window.innerHeight);
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,

      searchButtonStyle:{
        //height: this.state.searchButtonStyle.height*ratio[1],
        width: this.state.searchButtonStyle.width*ratio[0],
        fontSize: 16,
        position: "center",
      },

      searchButtonPicture: {
        height: this.state.searchButtonPicture.height*ratio[0],
        width: this.state.searchButtonPicture.width*ratio[0],
      }
    });
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    return (
      <div>

        <div>
          <TopMenu />
        </div>

        <div>

          <p>{this.state.windowWidth} x {this.state.windowHeight}</p>
          <p>{widthratioupdate}</p>

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


        <ColoredLineH color="blue" />

        <div style={divStyle}>

          <Row gutter={16} justify="space-around" align="middle">
            <Col>
              <AntTypography style={SearchTypography} >
                <Paragraph>
                  Find Your Next Institution
                  </Paragraph>
              </AntTypography>
            </Col>
          </Row>

          <Row gutter={36} justify="space-around" align="middle">
            <Col className="gutter-row" span={6} offset={4}>
              <Row>
                <img src="https://theshopsatyale.com/cms/wp-content/uploads/2017/07/coverb01_0-1.jpg" style={this.state.searchButtonPicture} />
              </Row>
              <Row>
                <div className="gutter-box">
                  <Button block={true} style={this.state.searchButtonStyle} onClick={getOnClickHrefHandler("/school")}>
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
                <img src="https://www.michiganstateuniversityonline.com/wp-content/uploads/sites/3/2018/05/how-business-analytics-can-help-your-business.jpg?w=715&h=375&crop=1" style={this.state.searchButtonPicture} />
              </Row>
              <Row>
                <div className="gutter-box">
                  <Button block={true} style={this.state.searchButtonStyle} onClick={getOnClickHrefHandler("/program")}>
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
                <img src="https://media.istockphoto.com/photos/in-the-classroom-multi-ethnic-students-listening-to-a-lecturer-and-picture-id962475722?k=6&m=962475722&s=612x612&w=0&h=Q2P383wBZjKAAz7vzEoBgdo1fJycf3eFWqlfEBeX8gs=" style={this.state.searchButtonPicture} />
              </Row>
              <Row>
                <div className="gutter-box">
                  <Button block={true} style={this.state.searchButtonStyle}>
                    <div>
                      <p style={searchBy}>Search by Popularity</p>
                      <p style={Program}></p>
                    </div>
                  </Button>
                </div>
              </Row>
            </Col>

          </Row>

          {/* Divider to separate the buttons and the mission statement */}
          <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
          </Divider>

          <div>
            <Row justify="space-around" align="middle">
              <Col span={12} offset={6}>
              <Typography style={LATypographyC} >
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
              </Col>
            </Row>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
