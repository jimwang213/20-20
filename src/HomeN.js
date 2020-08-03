import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';

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
import { borders } from '@material-ui/system';

import { Link } from 'react-router';

import Carousel from 'react-bootstrap/Carousel';
import harvard from './harvard.png';
import mit from './mit.png';
import stanford from './stanford.png';

import Button from 'antd/es/button';
import { Row, Col } from 'antd';
import { Typography as AntTypography, Divider } from 'antd';
import './App.css';

import Logo from './Logo.png';



const colorpal = [
    '#C94A4A', '#E89637', '#5799D6', '#78D657', '#F3B700', 'secondary'
];

const ProgramTitle = {
    fontSize: 36
};

class HomeN extends React.Component {

    render() {
        return (
            <div>
            
                <Row>
                    {/* Column here is for blank space on the sides*/}
                    <Col xs={2} sm={2} md={2} lg={4} xl={4}>
                    
                    </Col>

                    <Col xs={20} sm={20} md={20} lg={16} xl={16}>  

                        <Row style={{marginBottom:20}}> 
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

                        <Row justify="left" style={{fontSize: 36}}>
                            Year: 2020’s Top 20 Programs
                            <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
                            </Divider>
                        </Row>

                        <Row justify="left" style={{ marginTop: 8, fontSize:18, marginBottom:30 }}>
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
                     
                    {/* Column here is for blank space on the sides*/}
                    <Col xs={2} sm={2} md={2} lg={4} xl={4}>
                    
                    </Col>

                </Row>
            </div>
        )
    }
}

export default HomeN;