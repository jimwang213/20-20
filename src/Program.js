import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Carousel from 'react-bootstrap/Carousel'
import {ChakraProvider } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react"

import { Chrono } from "react-chrono";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Typography as AntTypography, Divider } from 'antd';
import './App.css';

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import ContentLoader from 'react-content-loader'

import Logo7 from './Logo7.png';
import BA_Timeline from './BA_Timeline.png';


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

let arrow = "|";

const colorpal = [
  '#C94A4A', '#E89637', '#5799D6', '#78D657', '#F3B700', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary',
  'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary',
];


const ProgramInfoCard = {
  marginBottom: 25
  //,  width: '18rem' 
}

const ProgramInfoTitle = {
  fontSize: 28
}

const ProgramInfoP = {
  fontSize: 20,
  textAlign: 'center',
  marginTop:10
}

const { Title, Paragraph, Text } = AntTypography;

const TitleColor = {

  color: "#FFFFFF"

}

const Banner = {
  fontSize: 20
}

const ProgramInfoProgramName = {
  fontSize: 20,
  color: 'grey',
  // fontStyle: 'italic',
  marginTop: 10,
  marginBottom:10,
}



class Program extends React.Component {
  
  constructor(props) {
    super(props);

    const { programId } = this.props.match.params;

    this.state = {
      program_name: programId,
      data: {
        school_data: [],
        summary_data: {
          post_grad_occupations: [],
        },
        data_loaded: false,
      },
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL + "/programs/" + this.state.program_name)
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.school_data.sort((a, b) => a.tier - b.tier);
        this.setState({ 
          data: responseJson,
          data_loaded: true,
        });
      })
      .catch((error) => {
        console.error(error);
        window.location.href = "/";
      });
  }

  render() {
    const number_occupations_displayed = 3;
    let average_salary = this.state.data.summary_data.average_salary;
    if (average_salary) {
      average_salary = average_salary.toFixed(2);
    }
    let average_tuition = this.state.data.summary_data.average_tuition;
    if (average_tuition) {
      average_tuition = average_tuition.toFixed(2);
    }

    //* code below is for creating the domestic deadline  
    const domesticDeadline = this.state.data.school_data.map((ps) => {
      
      return {"schoolName" : ps["school_name"], "domDeadline" : ps["domestic_deadline"], "tier": ps["tier"]}
      
    });
    domesticDeadline.sort((a, b) => Date.parse(a.domDeadline) - Date.parse(b.domDeadline));
    
    const domesticDeadlineMonths = []
    let lastMonth = null;
    const deadlineDictionaryDom = {}
    
    for (const deadline of domesticDeadline) {
     
      const month = new Date(Date.parse(deadline.domDeadline)).toLocaleString('default', { month: 'long' }) + " " + new Date(Date.parse(deadline.domDeadline)).getFullYear();;
      // const year = new Date(Date.parse(deadline.domDeadline)).getFullYear();
      if(lastMonth != month ) {
        domesticDeadlineMonths.push(month);
      } 
      if (!deadlineDictionaryDom[month]) {
        deadlineDictionaryDom[month] = [];
      }
      deadlineDictionaryDom[month].push(deadline);
      lastMonth = month;
    }  

    const domesticDates = domesticDeadlineMonths.map(m => {
      return {"title": `${m} (${deadlineDictionaryDom[m].length})` , "cardSubtitle": <div>
        <p class="programnameheader" style={ProgramInfoProgramName}> <span>{m}</span></p>
        {deadlineDictionaryDom[m].map(d => {return <div style={{fontSize: 14}}><Link style={{color:colorpal[0]}} to={"/Program/" + this.state.data.program_name + "/" + d["schoolName"]}> <b> {d["schoolName"]} </b></Link>{": " + d["domDeadline"]}</div>})}
      </div>}
    })

    console.log(domesticDeadline)
    console.log(deadlineDictionaryDom)
    console.log(domesticDates)


    //* code below is for creating the international deadline  

    const internationalDeadline = this.state.data.school_data.map((ps) => {
      
      return {"schoolName" : ps["school_name"], "intDeadline" : ps["international_deadline"]}
      
    });
    internationalDeadline.sort((a, b) => Date.parse(a.intDeadline) - Date.parse(b.intDeadline));

    console.log(internationalDeadline)

    const internationalDeadlineMonths = []
    lastMonth = null;
    const deadlineDictionaryInt = {}
    
    for (const deadline of internationalDeadline) {
      
      const month = new Date(Date.parse(deadline.intDeadline)).toLocaleString('default', { month: 'long' }) + " " + new Date(Date.parse(deadline.intDeadline)).getFullYear();;
      if(lastMonth != month) {
        internationalDeadlineMonths.push(month);
      } 
      if (!deadlineDictionaryInt[month]) {
        deadlineDictionaryInt[month] = [];
      }
      deadlineDictionaryInt[month].push(deadline);
      lastMonth = month;
    }  

    const internationalDates = internationalDeadlineMonths.map(m => {
      return {"title": `${m} (${deadlineDictionaryInt[m].length})`, "cardSubtitle": <div>
        <p class="programnameheader" style={ProgramInfoProgramName}> <span>{m}</span></p>
        {deadlineDictionaryInt[m].map(d => {return <div style={{fontSize: 14}}><Link style={{color:colorpal[0]}} to={"/Program/" + this.state.data.program_name + "/" + d["schoolName"]}> <b>{d["schoolName"]}</b></Link>{": " + d["intDeadline"]}</div>})}
      </div>}
    })

    console.log(deadlineDictionaryInt)

    const summaryData = [
      {
        "average_salary": "$" + Math.round(average_salary),
        "average_tuition": "$" + Math.round(average_tuition) + " (year)",
        "program_length": this.state.data.summary_data.min_program_length_low + "-" + this.state.data.summary_data.max_program_length_high + " months",
        "post_grad_occupations": this.state.data.summary_data.post_grad_occupations.slice(0, number_occupations_displayed).join(", "),
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
                <Text style={{color:"#808080", marginLeft:10, marginBottom:20}}>{this.state.program_name}</Text>
              </Row>

              </Col>
                {/* Column here is for blank space on the sides*/}
              <Col xs={1} sm={1} md={2}>
        
            </Col>
          </Row>

      

          <Row style = {{marginBottom:30}}>
            {/* Column here is for blank space on the sides*/}
            <Col xs={1} sm={1} md={2}></Col>

            <Col xs ={10}  sm={10} md={8}>  
    
              <Row style={{marginTop:20}}>
                <Typography>
                  <Title class="programheader"><span>{this.state.program_name}</span> </Title>
                  <Paragraph style={ProgramInfoP}>
                    {this.state.data_loaded ? this.state.data.description :
                    <ContentLoader viewBox="0 0 380 60">
                    {/* Only SVG shapes */}    
                    <rect x="0" y="20" rx="4" ry="4" width="500" height="10" />
                    <rect x="0" y="40" rx="4" ry="4" width="500" height="10" />
                  </ContentLoader>}
                  </Paragraph>
                </Typography>
              </Row>

              </Col>
                {/* Column here is for blank space on the sides*/}
              <Col xs = {1} sm={1} md={2}>
        
            </Col>
          </Row>

          {/* original table for information
          <Row>
            <Col xs ={1} sm={1} md={2}>{/* Spacer </Col>
            <Col xs ={10} sm={10} md={8}>
              <Typography>
                <Title style={{fontSize:28}}>Summary Data</Title>
              </Typography>
              {this.state.data_loaded ? <Table pagination={false} dataSource={summaryData} columns={summaryDataCols} style={ProgramInfoCard} /> :
                 <ContentLoader viewBox="0 0 380 40">
                 {/* Only SVG shapes     
                 <rect x="0" y="0" rx="4" ry="4" width="500" height="10" />
                 <rect x="0" y="20" rx="3" ry="3" width="450" height="10" />
             </ContentLoader>}
            </Col>
            <Col xs ={1} sm={1} md={2}>{/* Spacer </Col>
          </Row>
          */}

          <Row style={{marginTop:30}}>
              <Col xs ={1} sm={1} md={2}>{/* Spacer */}</Col> 
                
                <Col xs ={10} sm={10} md={8}>
                <Typography>
                  <Title style={{fontSize:28}}>Application Timeline</Title>
                </Typography>
                
                <Tabs onSelect={() => {}} defaultActiveKey="home" id="uncontrolled-tab-example">
                  
                  <Tab eventKey="home" title="International">
                    <div>
                      {internationalDates.length > 0 && <Chrono
                        // hideControls={true}
                        items={internationalDates}
                        theme={{primary: colorpal[0], secondary: "#fff", cardBgColor:"#fff", cardForeColor: "#fff" }}
                      />}
                    </div>
                    <p style={{textAlign:"center", color:"#808080"}}>* Please note that these are the final deadlines. There may be other rounds before this deadline.</p>
                  </Tab>

                  <Tab eventKey="second" title="Domestic">
                    <div>
                      {domesticDates.length > 0 && <Chrono style={{fontSize:12}}
                        // hideControls={true}
                        items={domesticDates}
                        theme={{primary:colorpal[0], secondary: "#fff", cardBgColor:"#fff", cardForeColor:"#fff" }}
                      />}
                    </div>
                    <p style={{textAlign:"center", color:"#808080"}}>* Please note that these are the final deadlines. There may be other rounds before this deadline.</p>
                  </Tab>
  
                </Tabs>

                </Col>
                
              <Col xs ={1} sm={1} md={2}>{/* Spacer */}</Col> 
          </Row>


          <Row style={{marginTop:30}}>
              <Col xs ={1} sm={1} md={2}>{/* Spacer */}</Col> 
                
                <Col xs ={10} sm={10} md={8}>
                <Typography>
                  <Title style={{fontSize:28}}>Application Matrix</Title>
                </Typography>

                <Tabs onSelect={() => {}} defaultActiveKey="home" id="uncontrolled-tab-example">
                
                  <Tab eventKey="home" title="Class Profile">
                    <ChakraProvider>
                      <Table style={{marginTop:20}} size="sm">
                        <Thead>
                          <Tr>
                            <Th>School Name</Th>
                            <Th>GPA</Th>
                            <Th>GMAT</Th>
                            <Th>GRE</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {this.state.data.school_data.map((school, idx) =>
                          <Tr>
                            <Td style={{color:colorpal[school.tier-1]}}><Link to={"/Program/" + this.state.data.program_name + "/" + school.school_name}>{idx+1}. {school.school_name}</Link></Td>
                            <Td>{school.average_gpa}</Td>
                            <Td>{school.average_gmat}</Td>
                            <Td>{school.average_gre}</Td>
                          </Tr>
                          )}
                        </Tbody>
                      </Table>
                    </ChakraProvider>
                  </Tab>

                  <Tab eventKey="second" title="Job Placement">
                    <ChakraProvider>
                      <Table style={{marginTop:20}} size="sm">
                        <Thead>
                          <Tr>
                            <Th>School Name</Th>
                            <Th>Placement Rate</Th>
                            <Th>Average Salary</Th>
                            <Th>Maximum Salary</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {this.state.data.school_data.map((school, idx) =>
                          <Tr>
                            <Td style={{color:colorpal[school.tier-1]}}><Link to={"/Program/" + this.state.data.program_name + "/" + school.school_name}>{idx+1}. {school.school_name}</Link></Td>
                            <Td>{school.job_placement_rate}</Td>
                            <Td>{school.average_salary}</Td>
                            <Td>{school.maximum_salary}</Td>
                          </Tr>
                          )}
                        </Tbody>
                      </Table>
                    </ChakraProvider>
                  </Tab>

                  <Tab eventKey="third" title="Application Materials">
                    <ChakraProvider>
                      <Table style={{marginTop:20}} size="sm">
                        <Thead>
                          <Tr>
                            <Th>School Name</Th>
                            <Th>Essays</Th>
                            <Th>Recommendations</Th>
                            <Th>Video Question?</Th>
                            <Th>GRE/GMAT Required?</Th>
                            <Th>Interview?</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {this.state.data.school_data.map((school, idx) =>
                          <Tr>
                            <Td style={{color:colorpal[school.tier-1]}}><Link to={"/Program/" + this.state.data.program_name + "/" + school.school_name}>{idx+1}. {school.school_name}</Link></Td>
                            <Td>{school.essays_count}</Td>
                            <Td>{school.lor_count}</Td>
                            <Td>{school.video_question_b}</Td>
                            <Td>{school.gre_gmat_b}</Td>
                            <Td>{school.interview_b}</Td>
                          </Tr>
                          )}
                        </Tbody>
                      </Table>
                    </ChakraProvider>
                  </Tab>

                </Tabs>
              </Col>
                
              <Col xs ={1} sm={1} md={2}>{/* Spacer */}</Col> 
          </Row>

          {/* Divider just for looks */}
          <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
          </Divider>

          <Row justify="space-around">
            <Col xs ={1} sm={1} md={2}>{/* Spacer */}</Col>
            <Col xs ={10} sm={10} md={8}>
              <Typography>
                <Title style={ProgramInfoTitle}>Schools</Title>
              </Typography>
            </Col>
            <Col xs ={1} sm={1} md={2}>{/* Spacer */}</Col>
          </Row>

          <Row>
            <Col xs ={1} sm={1} md={2}>{/*Spacer */}</Col>
            <Col xs ={10} sm={10} md={6}>
              {this.state.data_loaded ? this.state.data.school_data.map((school, idx) =>
                <Card
                  //border = {'#E72F08'}
                  //border={colorpal[idx]}
                  style={{marginBottom: 25 , borderColor: colorpal[school.tier-1]}}
                >
                <Card.Header style={{backgroundColor: colorpal[school.tier-1], fontSize:16}}> <Link className="white" to={"/Program/" + this.state.data.program_name + "/" + school.school_name}> {"#" + (idx + 1) + " " + school.school_name}</Link> </Card.Header>
                  <Card.Body>
                    <Card.Title style={{fontSize:16}}>{school.program_local_name}</Card.Title>
                    <Card.Text>
                      Average GMAT Score: {school.average_gmat || "N/A"} <br />
                      Average GRE Score: {school.average_gre || "N/A"} <br />
                      Average GPA: {school.average_gpa || "N/A"} <br />
                    </Card.Text>
                    <Link style={{color:"#606060"}} to={"/Program/" + this.state.data.program_name + "/" + school.school_name}>Details...</Link>
                  </Card.Body>
                </Card>
              ) :
              <ContentLoader viewBox="0 0 380 40">
                 {/* Only SVG shapes */}    
                 <rect x="0" y="0" rx="4" ry="4" width="500" height="10" />
                 <rect x="0" y="20" rx="3" ry="3" width="450" height="10" />
             </ContentLoader>}
            </Col>

            {/* Side list for 20/20 rating. Possibily turn into a scrolling list if it gets too long. */}
            <Col sm={0} md={4} offset={1} className="d-none d-md-block">

              <Typography>
                <Title style={ProgramInfoTitle}>20/20 Tier List</Title>
              </Typography>
              
         
                {this.state.data_loaded ? sortedTierData.map((tier, idx) =>
                  <Row>

                    <Col sm={2} md={2}>
                      <img src={tierpic[tier.tier-1]} height={40} width ={40} alt="logo"/>   
                    </Col>

                    <Col sm={8} md={8}>
                      {tier.tierData.map(tierData => <p>{tierData}</p>)}
                    </Col>

                    <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
                    </Divider>

                  </Row>
                   
                  
                ) :
                <ContentLoader viewBox="0 0 380 40">
                 {/* Only SVG shapes */}    
                 <rect x="0" y="0" rx="4" ry="4" width="500" height="10" />
                 <rect x="0" y="20" rx="3" ry="3" width="450" height="10" />
                </ContentLoader>}
            
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
              

            

              <Typography>
                <Title style={ProgramInfoTitle}>Short List</Title>
              </Typography>
              {this.state.data_loaded ? 
              <div>
                <Text style={{fontSize:16, color:colorpal[0], marginBottom:10}}>Tier 1</Text> <p></p>

                  {this.state.data.school_data.map((school, idx) =>
                  
                    {if (school.tier === 1) {
                      return(
                      <Typography style={{fontSize:14}}> 
                        <Link style={{marginLeft:10, color:"#696969"}} to={"/Program/" + this.state.data.program_name + "/" + school.school_name}> #{idx+1}. {school.school_name}</Link>  <p></p>
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
                        <Link style={{marginLeft:10, color:"#696969"}} to={"/Program/" + this.state.data.program_name + "/" + school.school_name}> #{idx+1}. {school.school_name}</Link>  <p></p>
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
                        <Link style={{marginLeft:10, color:"#696969"}} to={"/Program/" + this.state.data.program_name + "/" + school.school_name}> #{idx+1}. {school.school_name}</Link>  <p></p>
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
                        <Link style={{marginLeft:10, color:"#696969"}} to={"/Program/" + this.state.data.program_name + "/" + school.school_name}> #{idx+1}. {school.school_name}</Link>  <p></p>
                      </Typography>
                      )
                    }
                    }
                  )} 
              </div> :
              <ContentLoader viewBox="0 0 380 40">
              {/* Only SVG shapes    
              <rect x="0" y="0" rx="4" ry="4" width="500" height="10" />
              <rect x="0" y="20" rx="3" ry="3" width="450" height="10" />
              </ContentLoader>
              }
              */}

              

            </Col>

            <Col xs ={1} sm={1} md={0}> </Col>

          </Row>
        </div>
 
    )
  }
}

export default Program;
