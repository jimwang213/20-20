import React from 'react';
import Typography from '@material-ui/core/Typography';

import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Typography as AntTypography, Divider } from 'antd';
import './App.css';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { Box, ChakraProvider } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from "@chakra-ui/react";

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
//*import Accordion from 'react-bootstrap/Accordion'
import ContentLoader from 'react-content-loader'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import Logo7 from './Logo7.png';
import { light } from '@material-ui/core/styles/createPalette';
import ReactMarkdown from 'react-markdown';

let arrow = "|";

const colorpal = [
  '#C94A4A', '#E89637', '#5799D6', '#78D657', '#F3B700', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary',
  'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary',
];

const ProgramInfoProgramName = {
  fontSize: 20,
  color: 'grey',
  fontStyle: 'italic',
  marginTop: 10
}

const ProgramInfoTitle = {
  fontSize: 28,
  marginBottom: 0,
  textAlign:"center",

}

const ProgramInfoDescription = {
  color:"#505050", 
  fontWeight:"normal",
  fontSize:20, 
  textAlign:"center", 
  marginLeft:50, 
  marginRight:50, 
  marginTop:30, 
  marginBottom:50,
}

const CareerText = {
  textAlign:"center",
  fontSize:20
}

const CareerTextVar = {
  textAlign:"center",
  fontSize:28,
  fontWeight:"bold",
  marginTop:20
}

const ClassProfile = {
  fontSize: 28,
  marginTop: 20,
}

const CareerOutcome= {
  fontSize: 28,
  marginTop:20,
  marginBottom:40, 
}


const ProgramInfoP = {
  fontSize: 20
}

const ProgramOutComeTitle = {
  fontSize: 20,
  color: 'black'
}

const ProgramInfoStyle = {
  marginTop: 50,
  marginLeft: 250,
  marginRight: 250
};

const { Title, Paragraph, Text } = AntTypography;

const Banner = {
  fontSize: 20
}

const ProgramInfoCard = {
  marginBottom: 25
}


class ProgramSchool extends React.Component {

  constructor(props) {
    super(props);

    const { programId, schoolId } = this.props.match.params;

    this.state = {
      data: {},
      data_loaded: false,
      program_name: programId,
      school_name: schoolId,
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL + "/programs/" + this.state.program_name + "/school/" + this.state.school_name)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ 
          data: responseJson,
          data_loaded: true,
        });
        console.log(this.state.data);
      })
      .catch((error) => {
        console.error(error);
        //window.location.href = "/";
      });
  }

  formatMoneyString(money) {
    if (!money) return money;
    return "$" + money.toLocaleString();
  }

  render() {
    let placement = this.state.data.job_placement_rate;
    if (placement) {
      placement = placement + "%";
    }
    let program_ID = this.state.data.program_id;
    let employers = this.state.data.employers;
    if (employers) {
      employers = employers.join(", ");
    }
    let full_time_roles = this.state.data.roles;
    if (full_time_roles) {
      full_time_roles = full_time_roles.join(", ");
    }
    let maximum_salary = this.state.data.maximum_salary;
    if(program_ID=='6') {
      maximum_salary = maximum_salary + "%";
    } else {
      maximum_salary = this.formatMoneyString(maximum_salary);
    }

    const careerData = {
      placement: placement,
      // maximum_salary: this.formatMoneyString(this.state.data.maximum_salary),
      maximum_salary: maximum_salary,
      average_salary: this.formatMoneyString(this.state.data.average_salary),
      employers_list: employers,
      full_time_roles: full_time_roles,
    };
    let program_length = this.state.data.program_length_low + " months";
    if (this.state.data.program_length_low != this.state.data.program_length_high) {
      program_length = this.state.data.program_length_low + "-" + this.state.data.program_length_high + " months";
    }
    const summaryData = [{
      tuition: this.formatMoneyString(this.state.data.tuition_out_state),
      program_length: program_length,
      post_grad_occupations: full_time_roles,
    }];
    let timelineData = [];
    if (this.state.data.timeline) {
      timelineData = this.state.data.timeline.split("\n");
    }
    const summaryDataCols = [
      {
        title: "Tuition (out of state)",
        dataIndex: "tuition",
      },
      {
        title: "Program Length",
        dataIndex: "program_length",
      },
      {
        title: "Post-grad Occupations",
        dataIndex: "post_grad_occupations",
      },
    ];
    return (
      <div>

        <Row>
          <Col xs={1} sm={1} md={1}></Col>
          <Col>
              <Link to={"/"}> <img style={{marginLeft:0}} src={Logo7} width ={140} alt="logo"/> </Link>     
          </Col>

          <Col>
              <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="justify-content-end" style={{ width: "100%" }}>
                  <Nav.Link style={{color:"#000000", borderBottom: "2px solid #C94A4A", fontWeight:'normal'}} href="/AboutUs/">About Us</Nav.Link>
                  <Nav.Link style={{marginLeft:10, color:"#000000", borderBottom: "2px solid #5799D6", fontWeight:'normal'}} href="/Methodology/">Methodology</Nav.Link>
                  <Nav.Link style={{marginLeft:10, marginRight:30, color:"#000000", borderBottom: "2px solid #78D657", fontWeight:'normal'}} href="/SignUp/">Sign Up</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
              </Navbar>
          </Col>
        </Row>
  
        <Row style = {{backgroundColor:"#F8F8F8"}}>
          {/* Column here is for blank space on the sides*/}
          <Col xs={1} sm={1} md={2}>

          </Col>

          <Col xs={10} sm={10} md={8}> 

            <Row style={{marginTop:20, textAlign:"center"}}>
              <Link style={{color:"#505050"}} to={"/"}>Home</Link> <Text style={{marginLeft:10, color:"#808080", fontWeight: "bold"}}>{arrow}</Text>
              <Link style={{color:"#505050", marginLeft:10}} to={"/Program/" + this.state.program_name}>{this.state.program_name}</Link> <Text style={{marginLeft:10, color:"#808080", fontWeight: "bold"}}>{arrow}</Text>
              <Text style={{color:"#808080", marginLeft:10, marginBottom:20}}>{this.state.school_name}</Text>
            </Row>

            </Col>
              {/* Column here is for blank space on the sides*/}
            <Col xs={1} sm={1} md={2}>
      
          </Col>
        </Row>

        <Row style={{ marginTop: 32 }}>

            <Col xs={1} sm={1} md={2} >
              {/* Column here is for blank space on the sides*/}
            </Col>

            <Col xs={10} sm={10} md={8}>

              <Row>
                <Typography className="schoolheader">
                    <p style={{color:colorpal[0]}} style={ProgramInfoTitle}> <span>{this.state.school_name} </span></p>

                    {this.state.data_loaded ? <div>
                      <Title className="programnameheader" style={ProgramInfoProgramName}><span> {this.state.data.program_local_name} </span></Title>

                      <p style={ProgramInfoDescription}>
                        {this.state.data.program_description} 
                      </p>
                    </div> : 
                    <ContentLoader viewBox="0 0 1000 70">
                    {/* Only SVG shapes */}    
                    <rect x="0" y="20" rx="4" ry="4" width="500" height="13" />
                    <rect x="0" y="40" rx="3" ry="3" width="450" height="10" />
                    </ContentLoader>}
           
                </Typography>
              </Row>

              {/* Divider just for looks */}
              <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
              </Divider>

              <Row style={{ marginTop: 32 }, { marginBottom: 20 }}>
                <Typography>
                  <Title style={CareerOutcome}>Career Outcome</Title>
                </Typography>
              </Row>

              {this.state.data_loaded ? 
              <Row>
                <Col xs={12} sm={12} md={4}>
                  <p class="careerborder">{careerData.placement || "N/A"}</p>
                  <p style={CareerText}> Job Placement</p>
                </Col>

                <Col xs={12} sm={12} md={4}>
                  <p class="careerborder2">{careerData.average_salary || "N/A"}</p>
                  <p style={CareerText}> Average Salary</p>
                </Col>

                <Col xs={12} sm={12} md={4}>
                  <p class="careerborder3">{careerData.maximum_salary || "N/A"}</p>
                  {/* // <p style={CareerText}> Maximum Salary</p> */}
                  {program_ID=='6'? <p style={CareerText}> Big 4 Placement</p>: <p style={CareerText}> Maximum Salary</p> }
                
                </Col>

              </Row> :
                <ContentLoader viewBox="0 0 380 60">
                {/* Only SVG shapes */}    
                <rect x="0" y="20" rx="4" ry="4" width="500" height="13" />
                <rect x="0" y="40" rx="3" ry="3" width="450" height="10" />
                </ContentLoader>}
              
              {/* List of Employers Text */}
              <Row style={{marginTop:20, marginBottom: 10 }}>
                <div style={ProgramOutComeTitle}>List of Employers</div>
                <ContentLoader viewBox="0 0 380 70">
                {/* Only SVG shapes */}    
                <rect x="0" y="20" rx="4" ry="4" width="500" height="13" />
                <rect x="0" y="40" rx="3" ry="3" width="450" height="10" />
                </ContentLoader>
              </Row>

              <Row style={{marginTop:10, marginBottom: 32 }}>
                {this.state.data_loaded ? <div>{careerData.employers_list}</div> :
                <ContentLoader viewBox="0 0 380 70">
                {/* Only SVG shapes */}    
                <rect x="0" y="20" rx="4" ry="4" width="500" height="13" />
                <rect x="0" y="40" rx="3" ry="3" width="450" height="10" />
                </ContentLoader>}
              </Row>

              <Row style={{marginTop:20, marginBottom: 10 }}>
                <div style={ProgramOutComeTitle}>Full-Time Role</div>
                <ContentLoader viewBox="0 0 380 70">
                {/* Only SVG shapes */}    
                <rect x="0" y="20" rx="4" ry="4" width="500" height="13" />
                <rect x="0" y="40" rx="3" ry="3" width="450" height="10" />
                </ContentLoader>
              </Row>

              <Row style={{marginTop:10, marginBottom: 32 }}>
                {this.state.data_loaded ? <div>{careerData.full_time_roles}</div> :
                <ContentLoader viewBox="0 0 380 70">
                {/* Only SVG shapes */}    
                <rect x="0" y="20" rx="4" ry="4" width="500" height="13" />
                <rect x="0" y="40" rx="3" ry="3" width="450" height="10" />
                </ContentLoader>}
              </Row>

              {/* Divider just for looks */}
              <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
              </Divider>

              <Row>
                <Typography>
                  <Title style={ClassProfile}>Program Statistics</Title>
                </Typography>
              </Row>

              {this.state.data_loaded ? <Table pagination={false} dataSource={summaryData} columns={summaryDataCols} /> :
              <ContentLoader viewBox="0 0 380 70">
              {/* Only SVG shapes */}    
              <rect x="0" y="20" rx="4" ry="4" width="500" height="13" />
              <rect x="0" y="40" rx="3" ry="3" width="450" height="10" />
              </ContentLoader>}

              {/* Divider just for looks */}
              <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
              </Divider>

              <Row style={{ marginTop: 32 }, { marginBottom: 20 }}>
                <Typography>
                  <Title style={CareerOutcome}>Class Profile</Title>
                </Typography>
              </Row>

              {this.state.data_loaded ? 
              <Row>
                <Col xs={12} sm={12} md={4}>
                  <p class="careerborder2">{this.state.data.average_gpa || "N/A"}</p>
                  <p style={CareerText}> Median GPA</p>
                </Col>

                <Col xs={12} sm={12} md={4}>
                  <p class="careerborder">{this.state.data.average_gre || "N/A"}</p>
                  <p style={CareerText}> Median GRE</p>
                </Col>

                <Col xs={12} sm={12} md={4}>
                  <p class="careerborder3">{this.state.data.average_gmat || "N/A"}</p>
                  <p style={CareerText}> Median GMAT </p>
                </Col>

                <Col xs={12} sm={12} md={4} style={{marginTop: 35}}>
                  <p class="careerborder3">{this.state.data.class_size || "N/A"}</p>
                  <p style={CareerText}> Class Size</p>
                </Col>

                <Col xs={12} sm={12} md={4} style={{marginTop: 35}}>
                  <p class="careerborder4">{this.state.data.average_work_experience_years || "N/A"}</p>
                  <p style={CareerText}> Work Experience (months)</p>
                </Col>

                <Col xs={12} sm={12} md={4} style={{marginTop: 35}}>
                  <p class="careerborder">{this.state.data.international_i_percent || "N/A"}</p>
                  <p style={CareerText}> International %</p>
                </Col>

              </Row> :
                 <ContentLoader viewBox="0 0 380 70">
                 {/* Only SVG shapes */}    
                 <rect x="0" y="20" rx="4" ry="4" width="500" height="13" />
                 <rect x="0" y="40" rx="3" ry="3" width="450" height="10" />
                 </ContentLoader>}
                 {/* Divider just for looks */}
                 <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
                 </Divider>

              <Row>
                <Typography>
                  <Title style={ClassProfile}>Curriculum</Title>
                </Typography>
              </Row>

              {this.state.data_loaded ? 
              <div>
              <Divider orientation="left">Core Classes</Divider>
              <Row >
                <ReactMarkdown>{this.state.data.core_classes || "* N/A"}</ReactMarkdown> 
              </Row>

              <Divider orientation="left"> Electives </Divider>
              <Row>
                <ReactMarkdown>{this.state.data.electives || "* N/A"}</ReactMarkdown> 
              </Row>
              </div> : 
              <ContentLoader viewBox="0 0 380 70">
              {/* Only SVG shapes */}    
              <rect x="0" y="20" rx="4" ry="4" width="500" height="13" />
              <rect x="0" y="40" rx="3" ry="3" width="450" height="10" />
              </ContentLoader>}

              {/* Divider just for looks */}
              <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
              </Divider>

              <Row>
                <Typography>
                  <Title style={ClassProfile}>Application Materials</Title>
                </Typography>
              </Row>
              
              <ChakraProvider>

                <Accordion allowMultiple style={{marginBottom:50}}> 

                  <AccordionItem>
                    <AccordionButton _expanded={{ bg: "#F8F8F8", fontWeight:'bold', color: colorpal[0]}}>
                      <Box flex="1" textAlign="left">
                        Timeline
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <ReactMarkdown>{this.state.data.timeline}</ReactMarkdown>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButton _expanded={{ bg: "#F8F8F8", fontWeight:'bold', color: colorpal[0]}}>
                      <Box flex="1" textAlign="left">
                        Pre-Requisite
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <ReactMarkdown>{this.state.data.pre_requisite}</ReactMarkdown>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButton _expanded={{ bg: "#F8F8F8", fontWeight:'bold', color: colorpal[0]}}>
                      <Box flex="1" textAlign="left">
                        Resume
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <ReactMarkdown>{this.state.data.resume}</ReactMarkdown>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButton _expanded={{ bg: "#F8F8F8", fontWeight:'bold', color: colorpal[0]}}>
                      <Box flex="1" textAlign="left">
                        Essay Questions
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <ReactMarkdown>{this.state.data.essay_questions}</ReactMarkdown>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButton _expanded={{ bg: "#F8F8F8", fontWeight:'bold', color: colorpal[0]}}>
                      <Box flex="1" textAlign="left">
                        Letters of Recommendation
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <ReactMarkdown>{this.state.data.letters_of_recommendation}</ReactMarkdown>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButton _expanded={{ bg: "#F8F8F8", fontWeight:'bold', color: colorpal[0]}}>
                      <Box flex="1" textAlign="left">
                        Transcripts
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <ReactMarkdown>{this.state.data.transcripts}</ReactMarkdown>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButton _expanded={{ bg: "#F8F8F8", fontWeight:'bold', color: colorpal[0]}}>
                      <Box flex="1" textAlign="left">
                        Video Questions
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <ReactMarkdown>{this.state.data.video_question}</ReactMarkdown>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButton _expanded={{ bg: "#F8F8F8", fontWeight:'bold', color: colorpal[0]}}>
                      <Box flex="1" textAlign="left">
                        GRE/GMAT
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <ReactMarkdown>{this.state.data.gre_gmat}</ReactMarkdown>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButton _expanded={{ bg: "#F8F8F8", fontWeight:'bold', color: colorpal[0]}}>
                      <Box flex="1" textAlign="left">
                        TOEFL/IELTS
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <ReactMarkdown>{this.state.data.toefl_ielts}</ReactMarkdown>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButton _expanded={{ bg: "#F8F8F8", fontWeight:'bold', color: colorpal[0]}}>
                      <Box flex="1" textAlign="left">
                        Application Fee
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <ReactMarkdown>{this.state.data.application_fee}</ReactMarkdown>
                    </AccordionPanel>
                  </AccordionItem>

                </Accordion>
              </ChakraProvider>

            
              
              {/*
              <Accordion>
           
                <Card style={ProgramInfoCard}>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Timeline
                      </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <ReactMarkdown>{this.state.data.timeline}</ReactMarkdown>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card style={ProgramInfoCard}>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    Pre-Requisite
                      </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <ReactMarkdown>{this.state.data.pre_requisite}</ReactMarkdown>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card style={ProgramInfoCard}>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    Resume
                      </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <ReactMarkdown>{this.state.data.resume}</ReactMarkdown>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card style={ProgramInfoCard}>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    Essay Questions
                  </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <ReactMarkdown>{this.state.data.essay_questions}</ReactMarkdown>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card style={ProgramInfoCard}>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    Letters of Recommendation
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <ReactMarkdown>{this.state.data.letters_of_recommendation}</ReactMarkdown>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card style={ProgramInfoCard}>
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                    Transcripts
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      <ReactMarkdown>{this.state.data.transcripts}</ReactMarkdown>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card style={ProgramInfoCard}>
                  <Accordion.Toggle as={Card.Header} eventKey="6">
                    Video Questions
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="6">
                    <Card.Body>
                      <ReactMarkdown>{this.state.data.video_question}</ReactMarkdown>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card style={ProgramInfoCard}>
                  <Accordion.Toggle as={Card.Header} eventKey="7">
                    GRE/GMAT
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="7">
                    <Card.Body>
                      <ReactMarkdown>{this.state.data.gre_gmat}</ReactMarkdown>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card style={ProgramInfoCard}>
                  <Accordion.Toggle as={Card.Header} eventKey="8">
                    TOEFL/IELTS
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="8">
                    <Card.Body>
                      <ReactMarkdown>{this.state.data.toefl_ielts}</ReactMarkdown>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card style={ProgramInfoCard}>
                  <Accordion.Toggle as={Card.Header} eventKey="9">
                    Application Fee
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="9">
                    <Card.Body>
                      <ReactMarkdown>{this.state.data.application_fee}</ReactMarkdown>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion> */}

            </Col>

            <Col xs={1} sm={1} md={2}>
              {/* Column here is for blank space on the sides*/}
            </Col>

        </Row>
      </div>
    )
  }
}

export default ProgramSchool;