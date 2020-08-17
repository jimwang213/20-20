import React from 'react';
import Typography from '@material-ui/core/Typography';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';

import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';

import Button from 'antd/es/button';
import { Row, Col } from 'antd';
import { Typography as AntTypography, Divider } from 'antd';
import './App.css';
import SearchBar from './SearchBar';

import Logo from './Logo.png';


const colorpal = [
    '#C94A4A', '#E89637', '#5799D6', '#78D657', '#F3B700', 'secondary'
];

const languages = [
    {
      name: 'Harvard University',
  
    },
    {
      name: 'Stanford University',
  
    },
    {
      name: 'Princeton University',
  
    }
]

const HeroTitle = {
    fontSize: 52,
    color:"#000000",
    marginBottom:40,
    marginTop:30,
};

const HeroText = {
    fontSize: 14,
    color:"#000000",
    textAlign: 'left',
    marginBottom: 70,

};

const CategoryTitle = {
    fontSize:20,
    
}

const CategoryProgramBorder = {
    padding:16,
    borderTop: "1px solid #D3D3D3",
    margin:0,
    textIndent:0
}


const CategoryProgramText = {
    fontSize:12,
    color:"#000000",
    padding:0,
    textIndent:0,
}

const CategoryProgramR = {
    color:colorpal[0],
    fontSize:16,
    padding:12,
    borderTop: "1px solid #D3D3D3",
    margin:0,
}

const CategoryProgramO = {
    color:colorpal[1],
    fontSize:16,
    padding:12,
    borderTop: "1px solid #D3D3D3",
    margin:0,
}

const CategoryProgramB = {
    color:colorpal[2],
    fontSize:16,
    padding:12,
    borderTop: "1px solid #D3D3D3",
    margin:0,
}

const CategoryProgramG = {
    color:colorpal[3],
    fontSize:16,
    padding:12,
    borderTop: "1px solid #D3D3D3",
    margin:0,
}


class HomeN extends React.Component {

    render() {
        return (
            <div>

                <Row>
                    {/* Column here is for blank space on the sides*/}
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    
                    </Col>

                    <Col xs={20} sm={20} md={20} lg={16} xl={16}>  

                        <Row style={{marginBottom:20}}> 
                            {/*top logo portion*/}
                            <Col xs={3} sm={3} md={3} lg={3} xl={3} style={{borderRight:"1px solid #D3D3D3"}}>
                                <img src={Logo} height={100} width ={100} alt="logo"/>                              
                            </Col>

                            <Col xs={20} sm={20} md={20} lg={18} xl={18} style={{marginLeft:30}}>
                                <Row justify="left" style={{fontSize:18}}>
                                    Quick, Simple, Information - A new way to search for graduate programs. 
                                </Row>

                                <Row style={{marginTop:25}}>
                                    <SearchBar style={{height:600}} placeholder="Harvard, Stanford...etc" suggestions={languages}>
                                        containerStyle = {{alignItems:'center', justifyContent:'center' }}
                                    </SearchBar>
                                </Row>
                            </Col>
                        </Row>

                    </Col>

                    <Col xs={1} sm={1} md={1} lg={1} xl={2}>
                        <p style={{fontSize:18}}>About Us</p>                   
                    </Col>

                    <Col xs={1} sm={1} md={1} lg={1} xl={2}>
                        <p style={{fontSize:18}}>Methodology</p>                   
                    </Col>

                    <Col xs={1} sm={1} md={1} lg={1} xl={2}>
                        <p style={{fontSize:18}}>Sign-up</p>                   
                    </Col>

                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    
                    </Col>

                </Row>

                <Row style={{marginTop:20, borderTop: "1px solid #D3D3D3"}}> </Row>
                    
               
                <Row justify="center">
                    <p style={HeroTitle}>20 TOP PROGRAMS - 20 TOP SCHOOLS</p>
                </Row>

                <Row>
                    {/* Column here is for blank space on the sides*/}
                    <Col xs={4} sm={4} md={4} lg={6} xl={6}>

                    </Col>

                    <Col xs={16} sm={16} md={16} lg={12} xl={12}>
                    <p style={HeroText}>Congratulations on your first step to invest in yourself! Below are Year 2020’s top Master programs, 
                        selected based on our methodology - popularity, job prospects, graduate salary, 
                        tuition, growth, and other factors. The ranking this year took a lesser emphasis on job placement based on the current 
                        economy that is yet to recover from COVID-19. Please select your programs of interest based on the 
                        categories below. Happy Searching!</p>
                    </Col>

                    {/* Column here is for blank space on the sides*/}
                    <Col xs={4} sm={4} md={4} lg={6} xl={6}>

                    </Col>
                </Row>

                <Row>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}> </Col>

                    <Col xs={2} sm={2} md={2} lg={2} xl={3}> <p style ={CategoryProgramR}>Business</p> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link class="indent" to="/Program/mba" style={CategoryProgramText}>M.B.A</Link> </Col>   

                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link to="/Program/Business+Analytics" style={CategoryProgramText}>Business Analytics</Link> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link to="/Program/finance" style={CategoryProgramText}>Finance</Link> </Col>  
                    
                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link to="/Program/marketing" style={CategoryProgramText}>Marketing</Link> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link to="/Program/economics" style={CategoryProgramText}>Economics</Link> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={2} style={CategoryProgramBorder}> <Link to="/Program/accounting" style={CategoryProgramText}>Accounting</Link> </Col>   

                    <Col xs={2} sm={2} md={2} lg={2} xl={2}> </Col> 
                </Row>

                <Row>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}> </Col>

                    <Col xs={2} sm={2} md={2} lg={2} xl={3}> <p style ={CategoryProgramO}>Engineering</p> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link to="/Program/computer-science" style={CategoryProgramText}>Computer Science</Link> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link to="/Program/information-systems" style={CategoryProgramText}>Information Systems</Link> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link to="/Program/electrical-engineering" style={CategoryProgramText}>Electrical Engineering</Link> </Col>  
                    
                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link to="/Program/mechanical-engineering" style={CategoryProgramText}>Mechanical Engineering</Link> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link to="/Program/industrial-engineering" style={CategoryProgramText}>Industrial Engineering</Link> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={2} style={CategoryProgramBorder}> <Link to="/Program/data-science" style={CategoryProgramText}>Data Science</Link> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={2}> </Col> 
                </Row>

                <Row>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}> </Col>

                    <Col xs={2} sm={2} md={2} lg={2} xl={3}> <p style ={CategoryProgramG}>Healthcare</p> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link style={CategoryProgramText}>Medical Doctor</Link> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link style={CategoryProgramText}>Nursing</Link> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link style={CategoryProgramText}>Physician Assistant</Link> </Col>  
                    
                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link style={CategoryProgramText}></Link> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link style={CategoryProgramText}></Link> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={2} style={CategoryProgramBorder}> <Link style={CategoryProgramText}></Link> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={2}> </Col> 

                </Row>

                <Row>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}> </Col>

                    <Col xs={2} sm={2} md={2} lg={2} xl={3}> <p style ={CategoryProgramB}>Arts + Science</p> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link style={CategoryProgramText}>Statistics</Link> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link style={CategoryProgramText}>Mathematics</Link> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link style={CategoryProgramText}>Public Policy</Link> </Col>  
                    
                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link style={CategoryProgramText}>Political Science</Link> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={3} style={CategoryProgramBorder}> <Link style={CategoryProgramText}>Education</Link> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={2} style={CategoryProgramBorder}> <Link style={CategoryProgramText}></Link> </Col>  

                    <Col xs={2} sm={2} md={2} lg={2} xl={2}> </Col> 

                </Row>

                <Row>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}> </Col> 
                    <Col xs={20} sm={20} md={20} lg={20} xl={20} style={{borderTop: "1px solid #D3D3D3"}}> </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}> </Col> 
                </Row>

                <Row style={{marginTop:50, borderTop: "1px solid #D3D3D3"}}> </Row>


                
                {/* <Row style={{marginTop:300}}>
         
                    <Col xs={2} sm={2} md={2} lg={4} xl={4}>
                    
                    </Col>

                    <Col xs={20} sm={20} md={20} lg={16} xl={16}>  

                        <Row style={{marginBottom:20}}> 
                
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

                        <Row justify="center" style={{border:"3px solid #D3D3D3", fontSize: 36}}>
                            Year: 2020’s Top 20 Programs
                        </Row>

                        <Row justify="left" style={{fontSize:18, marginBottom:30 }}>
                            <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
                            </Divider>
                                Congratulations on your first step to invest in yourself! Below are Year 2020’s top Master programs, 
                                selected based on their popularity, job prospects, graduate salary, tuition, field growth, and 
                                multiple factors. The ranking this year took a lesser emphasis on job placement based on the current 
                                economy that is yet to recover from COVID-19. Please select your programs of interest based on the 
                                categories below. Happy Searching!
                        </Row>

                        <Row>
                            <div class="card mb-3">
                            <div class="row no-gutters" >
                                <div class="col-md-2" style={{backgroundColor: colorpal[0], height:160, minWidth:150, borderColor:"C94A4A"}}>
                                    <p style = {{fontSize:18, color:"#FFFFFF", textIndent: "10px", marginTop:10}}> Business </p>
                                </div>
                                <div class="col-md-9"> 
                                <div class="card-body" style = {{height:160, minWidth:1500}}>
                
                                    <div class="col-sm-3">
                                    <a href="/Program/mba" class="card-link" style={{color:colorpal[0]}}>M.B.A</a><p/>
                                    <a href="/Program/business-analytics" class="card-link" style={{color:colorpal[0]}}>Masters in Business Analytics</a><p/>
                                    <a href="/Program/finance" class="card-link" style={{color:colorpal[0]}}>Masters in Finance</a><p/>
                                    <a href="/Program/marketing" class="card-link" style={{color:colorpal[0]}}>Masters in Marketing</a>
                                    </div>

                                    <div class="col-sm-3">
                                    <a href="/Program/accounting" class="card-link" style={{color:colorpal[0]}}>Masters in Accounting</a><p/>
                                    <a href="/Program/financial-engineering" class="card-link" style={{color:colorpal[0]}}>Masters in Financial Engineering</a><p/>
                                    <a href="/Program/economics" class="card-link" style={{color:colorpal[0]}}>Masters in Economics</a><p/>
                                    </div>                         
                                    
                                </div>
                                </div>
                            </div>
                            </div>
                        </Row>

                        <Row>
                            <div class="card mb-3">
                            <div class="row no-gutters" >
                                <div class="col-md-2" style={{backgroundColor: colorpal[1], height:160, minWidth:150}}>
                                    <p style = {{fontSize:18, color:"#FFFFFF", textIndent: "10px", marginTop:10}}> Engineering </p>
                                </div>
                                <div class="col-md-9"> 
                                <div class="card-body" style = {{height:160, minWidth:1500}}>
                                    
                                    <div class="col-sm-3">
                                    <a href="/Program/computer-science" class="card-link" style={{color:colorpal[1]}}>Masters in Computer Science</a><p/>
                                    <a href="/Program/information-systems" class="card-link" style={{color:colorpal[1]}}>Masters in Information Systems</a><p/>
                                    <a href="/Program/electrical-engineering" class="card-link" style={{color:colorpal[1]}}>Masters in Electrical Engineering</a><p/>
                                    <a href="/Program/data-science" class="card-link" style={{color:colorpal[1]}}>Masters in Data Science</a>   
                                    </div>

                                    <div class="col-sm-3">
                                    <a href="/Program/industrial-engineering" class="card-link" style={{color:colorpal[1]}}>Masters in Industrial Engineering</a><p/>
                                    <a href="/Program/mechanical-engineering" class="card-link" style={{color:colorpal[1]}}>Masters in Mechanical Engineering</a><p/>
                                    <a href="/Program/civil-engineering" class="card-link" style={{color:colorpal[1]}}>Masters in Civil Engineering</a><p/>
                                    </div>                         
                                    
                                </div>
                                </div>
                            </div>
                            </div>
                        </Row>

                        <Row>
                            <div class="card mb-3">
                            <div class="row no-gutters" >
                                <div class="col-md-2" style={{backgroundColor: colorpal[2], height:160, minWidth:150}}>
                                    <p style = {{fontSize:18, color:"#FFFFFF", textIndent: "10px", marginTop:10}}> Healthcare </p>
                                </div>
                                <div class="col-md-9"> 
                                <div class="card-body" style = {{height:160, minWidth:1500}}>
                                    
                                    <div class="col-sm-3">
                                    <a href="/Program/md" class="card-link" style={{color:colorpal[2]}}>Medical Doctor</a><p/>
                                    <a href="/Program/nursing" class="card-link" style={{color:colorpal[2]}}>Masters in Nursing</a><p/>
                                    <a href="/Program/physician-assistant" class="card-link" style={{color:colorpal[2]}}>Masters in Physician Assistant</a><p/>
                                    <p class="card-text"></p>    
                                    </div>

                                    <div class="col-sm-3">
                                    <p class="card-text"></p>
                                    <p class="card-text"></p>
                                    <p class="card-text"></p>
                                    <p class="card-text"></p>
                                    </div>                         
                                    
                                </div>
                                </div>
                            </div>
                            </div>
                        </Row>

                        <Row>
                            <div class="card mb-3">
                            <div class="row no-gutters" >
                                <div class="col-md-2" style={{backgroundColor: colorpal[3], height:160, minWidth:150}}>
                                    <p style = {{fontSize:18, color:"#FFFFFF", textIndent: "10px", marginTop:10}}> Science </p>
                                </div>
                                <div class="col-md-9"> 
                                <div class="card-body" style = {{height:160, minWidth:1500}}>
                                    
                                    <div class="col-sm-3">
                                    <a href="/Program/statistics" class="card-link" style={{color:colorpal[3]}}>Masters in Statistics</a><p/>
                                    <a href="/Program/mathematics" class="card-link" style={{color:colorpal[3]}}>Masters in Mathematics</a><p/>
                                    <p class="card-text"></p>
                                    <p class="card-text"></p>    
                                    </div>

                                    <div class="col-sm-3">
                                    <p class="card-text"></p>
                                    <p class="card-text"></p>
                                    <p class="card-text"></p>
                                    <p class="card-text"></p>
                                    </div>                         
                                    
                                </div>
                                </div>
                            </div>
                            </div>
                        </Row>

                    </Col>
                     
                    <Col xs={2} sm={2} md={2} lg={4} xl={4}>
                    
                    </Col>

                </Row> */}
            </div>
        )
    }
}

export default HomeN;