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

import { Link } from 'react-router';

import Carousel from 'react-bootstrap/Carousel';
import harvard from './harvard.png';
import mit from './mit.png';
import stanford from './stanford.png';

import Button from 'antd/es/button';
import { Row, Col } from 'antd';
import { Typography as AntTypography, Divider } from 'antd';
import './App.css';

import TopMenu from './TopMenu';



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
                    <Col xs={3} sm={3} md={3} lg={5} xl={5}>
                    
                    </Col>

                    <Col xs={18} sm={18} md={18} lg={14} xl={14}>  

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
                                    
                                    <div class="col-sm-2">
                                    <p class="card-text">M.B.A.</p>
                                    <p class="card-text">Masters in Business Analytics</p>
                                    <p class="card-text">Masters in Finance</p>
                                    <p class="card-text">Masters in Marketing</p>    
                                    </div>

                                    <div class="col-sm-2">
                                    <p class="card-text">Masters in Accounting</p>
                                    <p class="card-text">Masters in Financial Engineering</p> 
                                    <p class="card-text">Masters in Economics</p>  
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
                                    
                                    <div class="col-sm-2">
                                    <p class="card-text">Masters in Computer Science</p>
                                    <p class="card-text">Masters in Information Systems</p>
                                    <p class="card-text">Masters in Electrical Engineering</p>
                                    <p class="card-text">Masters in Data Science</p>    
                                    </div>

                                    <div class="col-sm-2">
                                    <p class="card-text">Masters in Industrial Engineering</p>
                                    <p class="card-text">Masters in Mechanical Engineering</p>
                                    <p class="card-text">Masters in Civil Engineering</p>
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
                                <div class="col-md-2" style={{backgroundColor: colorpal[2], height:160, minWidth:150}}>
                                    <p style = {{fontSize:18, color:"#FFFFFF", textIndent: "10px", marginTop:10}}> Healthcare </p>
                                </div>
                                <div class="col-md-9"> 
                                <div class="card-body" style = {{height:160, minWidth:1500}}>
                                    
                                    <div class="col-sm-2">
                                    <p class="card-text">Medical Doctor</p>
                                    <p class="card-text">Masters in Nursing</p>
                                    <p class="card-text">Masters in Physician Assistant</p>
                                    <p class="card-text"></p>    
                                    </div>

                                    <div class="col-sm-2">
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
                                    
                                    <div class="col-sm-2">
                                    <p class="card-text">Masters in Statistics</p>
                                    <p class="card-text">Masters in Mathematics</p>
                                    <p class="card-text"></p>
                                    <p class="card-text"></p>    
                                    </div>

                                    <div class="col-sm-2">
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
                    <Col xs={3} sm={3} md={3} lg={5} xl={5}>
                    
                    </Col>

                </Row>

   
    

            </div>


        )
    }
}

export default HomeN;