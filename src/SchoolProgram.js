import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Button from 'antd/es/button';
import { Table } from 'antd';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Typography as AntTypography, Divider } from 'antd';
import './App.css';

import {Link} from 'react-router-dom'

import Card from 'react-bootstrap/Card'

import TopMenu from './TopMenu';

const schoolPrograms =
{

/* MIT and its programs */
    'mit': {

        'business-analytics': {
        title: "Massachusettes Institute of Technology",
        pname: "Masters in Business Analytics (Sloan)",
        description: 'A 12-month program focused on applying the tools of modern data science, optimization, and machine learning to solve real-world business problems.'
        },

        'mba': {
        title: "M.B.A.",
        description: "The Masters in Business Administration program prepares prospective students with 2-4 years of work experience to become our future executives that lead core business decisions.",
        },   
    }
}

const ProgramInfoProgramName = {
    fontSize:20,
    color: 'grey',
    fontStyle: 'italic',
    marginTop: 0
}

const ProgramInfoTitle = {
    fontSize: 28,
    marginBottom: 0
}

const ProgramInfoP = {
    fontSize:24
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
  

 class SchoolProgram extends React.Component {
  render(){
    const {schoolId,programId} = this.props.match.params;
    var programData;  
    var schoolProgramsBySchool;
    var actualProgramId = programId.toLowerCase();
    var actualSchoolId = schoolId.toLowerCase();
    console.log(programId)
    console.log(schoolPrograms)
    if (!schoolPrograms.hasOwnProperty(actualSchoolId)) {
      // school doesn't exist
      window.location.href = "/"; 
    } else {
        schoolProgramsBySchool = schoolPrograms[actualSchoolId]
        console.log(schoolProgramsBySchool)
        if (!schoolProgramsBySchool.hasOwnProperty(actualProgramId)) {
            // program doesn't exist 
        window.location.href = "/";
            }
            else {
            programData = schoolProgramsBySchool[actualProgramId]; 
            console.log(programData)
                }
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
           <Title style={ProgramInfoTitle}>{programData.title}</Title>
           <Title style={ProgramInfoProgramName}>{programData.pname} </Title>
            <Paragraph style={ProgramInfoP}>
              {programData.description}
            </Paragraph>
         </Typography>
        </Row>

        <Row>
            <Typography>
                <Title style={ProgramInfoTitle}>Summary Data</Title>  
            </Typography>        
        </Row>



      </div>
    </div>
      )
    }
 }

 export default SchoolProgram;