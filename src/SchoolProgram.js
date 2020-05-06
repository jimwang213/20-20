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

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

import TopMenu from './TopMenu';

const schoolPrograms =
{

  /* MIT and its programs */
  'mit': {

    'business-analytics': {
      //Title
      title: "Massachusettes Institute of Technology",
      pname: "Masters in Business Analytics (Sloan)",
      description: 'A 12-month program focused on applying the tools of modern data science, optimization, and machine learning to solve real-world business problems.',

      //Class Profile
      gpa: '3.9',
      gre: '169',
      avw: '15.36 months',
      classSize: '60',
      countries: '23',
      international: '70%',
      undergrad: 'Computer Science, Statistics, Mathematics, Economics, Engineering, Finance',
      //Program Statistics/Information

      data: [
        {
          Medium_Salary: '$110,000',
          Tuition: '$65,000 (year)',
          Program_Length: '12-18 months',
          Occupations_PostGrad: 'Data Scientists, Business Analysts, Management Consultants',
          Placement: '100%',
          Maximum_Salary: '$160,000'
        }
      ],
      columns: [
        {
          title: 'Medium Salary',
          dataIndex: 'Medium_Salary',
        },
        {
          title: 'Tuition',
          dataIndex: 'Tuition',
        },
        {
          title: 'Program Length',
          dataIndex: 'Program_Length',
        },
        {
          title: 'Occupations PostGrad',
          dataIndex: 'Occupations_PostGrad',
        }
      ],
      //Curriculum
      fallCurriculum: [

        <li>15.071: Analytics Edge (12)</li>,
        <li>15.093: Optimization Methods (12) </li>,
        <li>15.095: Machine Learning Under a Modern Optimization Lens (12)</li>,
        <li>15.572: Analytics Lab (9)</li>,
        <li>15.681: From Analytics to Action (6)</li>,
        <li>15.003: Analytics Software Tools in R, Python, SQL and Julia (3)</li>
      ],

      springCurriculum: [

        <li>15.089: Analytics Capstone Project (24 units spanning IAP, Spring and Summer)</li>,
        <li>15.003: Analytics Software Tools in R, Python, SQL and Julia (3)" </li>,
        <li>15.286: Communicating with Data (3) </li>
      ],
      //Application/Timeline

      timeline: [
        <li>Applications due: Wednesday, January 8, 2020, 3:00 p.m. EST</li>,
        <li>Admission decision notified: Thursday, March 5, 2020</li>,
        <li>Admitted applicants must reply: Wednesday, April 15, 2020</li>
      ],

      resume: [
        <text>
          Please submit a one-page resume (Times New Roman 10 point font preferred) that includes your employment history and academic record. Other information appropriate to a business resume is welcomed and encouraged, including extracurricular activities, awards, and achievements.
          <br /><br />
          For formatting purposes, please list the information in the following order: <br /><br /> </text>,

        <li>Education - please list institutions where degree is in progress or was awarded in reverse chronological order. Please feel free to include information about study abroad activities, relevant awards, scholarships, professional societies</li>,
        <li>Work Experience - please list in reverse chronological order and include: company name, title, results-oriented bullets that demonstrate your skill set, and dates.</li>,
        <li>Additional information - languages, extracurricular activities/community service, technical skills/certifications, special skills/interests (if appropriate)</li>
      ],

      essay: [
        <text> Please describe your reason for pursuing the Master of Business Analytics (MBAn) degree.  What do you hope to gain from the program? And what are your career aspirations? (500 words or less) </text>
      ],

      recommendation: [
        <text>Please include three letters of recommendation. Two of the letters should come from an academic source that can speak to your quantitative abilities, academic achievement and potential. The third recommendation should be from an individual, e.g., a work supervisor or manager, who is able to speak with certainty about your professional achievement and potential.
            <br /><br />Recommenders must submit recommendations online. We do not accept recommendations via mail. Recommendations may be in either letter or short answer format and should not exceed two pages. Please choose recommenders who are able to provide specific answers to the following questions:
            <br /><br />
        </text>,

        <li>How long and in what capacity have you known the applicant?</li>,
        <li>How does the applicant stand out from others in a similar capacity?</li>,
        <li>Please give an example of the applicant’s impact on a person, group, or organization.</li>,
        <li>Please give a representative example of how the applicant interacts with other people.</li>,
        <li>If you are an academic/technical recommender, please tell us how well the applicant mastered the subject you taught or supervised and in what ways did the applicant demonstrate this mastery.</li>,
        <li>Which of the applicant’s personal or professional characteristics would you change?</li>,
        <li>Please tell us anything else you think we should know about this applicant.</li>
      ],

      transcripts: [
        <text>
          The Admissions Committee would like to see all of your transcripts, please include electronic copies of all of your academic records whose courses counted toward a degree. Do not mail in your official academic records or transcripts.
            <br /><br />If your transcripts are not in English, you are required to translate them. There are several companies, such as WES, that offer translation services. We ask that you scan both the original and translated copies and submit them with your application.
            <br /><br />Relevant Coursework: We are interested in relevant classes that you are currently taking or have previously completed.  Using short answer fields in the application you’ll be asked to include details of courses you have completed from the following areas: Math, Statistics, Machine Learning, and Computer Programming.
            <br /><br />Admitted applicants will be required to provide an official signed and sealed transcript from all schools attended. Any discrepancies between the scanned transcripts and official transcripts may result in a candidate's rejection or a withdrawal of our offer of admission.
          </text>
      ],

      video: [
        <text>
          1. Please upload a one-minute (60 second) video introducing yourself to your future classmates and letting us know why you are interested in the field of analytics and data science. The video should be a single take (no editing) and lasting no more than one minute, consisting of you speaking directly to the camera. We recommend using an application such as QuickTime or iMovie to record yourself.
            <br /><br />2. All MBAn applicants must submit a brief video statement in response to a simple, open-ended general interest question. The question is designed to help us get to know you better; to see how you express yourself and to assess fit with the MIT Sloan culture. It does not require prior preparation and will not be a technical question. The Video Question 2 is a part of your required application materials and will appear as a page within the application, once the other parts of your application are completed.
            <br /><br />Applicant receives a randomly generated question and has one minute to prepare a 60 second response.
          </text>
      ],

      standardizedtest: [
        <text>
          The GRE or GMAT is required of all applicants. We accept both the GMAT and GRE test results and have no preference for one over the other. Test scores are only valid for five years. Please include percentiles when submitting your score.
            <br /><br /> A valid test score (GRE or GMAT) must be taken on or after January 8, 2015. Additional scores will not be accepted after you have submitted your application. Master of Business Analytics GRE School Code: 3514 Master of Business Analytics GMAT School Code: X5X-QS-64.
          </text>
      ],

      englishtest: [
        <text>
          All applicants whose native language is not English and who have not received their entire undergraduate education in an English-speaking country must submit scores from one of two internationally recognized assessments of English language proficiency, the International English Language Testing System (IELTS) or the Test of English as a Foreign Language (TOEFL). Test scores are valid for two years. For applicants planning to enter the program in 2020, we will consider scores for tests taken on or after January 8, 2018.
            <br /><br /> Receiving your undergraduate degree in a country that lists English as an official language such as India, Pakistan, Hong Kong SAR, or Singapore does not exempt you from the English language proficiency requirement.
            <br /><br /> Master of Business Analytics TOEFL School Code: 3935 IELTS electronic scores sent to: MIT Graduate Admissions
          </text>
      ],

      applicationfee: [
        <text>
          Master of Business Analytics application fee: $150The non-refundable application fee is payable by credit card when you apply online. You will be prompted for payment information after pressing the “Submit Application” button. We offer fee waivers to the following applicants:
            <br /><br />
        </text>,
        <li>College seniors with U.S. citizenship, graduating from a U.S. institution in 2020</li>,
        <li>Active U.S. military personnel</li>,
        <li>Teach for America members/alumni</li>,
        <li>Peace Corps members</li>,
        <text>
          <br /><br />
            Applicants who qualify must submit the fee waiver form at least ONE week before the application deadline. Your request will be reviewed and you will receive an email with the results. If your fee is waived, you will be able to proceed to submit your application.
          </text>
      ]


    },

    'mba': {
      title: "M.B.A.",
      description: "The Masters in Business Administration program prepares prospective students with 2-4 years of work experience to become our future executives that lead core business decisions.",
      gpa: '3.5',
      greGmat: '724',
      avw: '2-4 years',
      classSize: '500',
      countries: '25',
      international: '40%',
      undergrad: 'Business, Management, Mathematics, Economics, Engineering, Finance',
    },
  }
}


const ProgramInfoProgramName = {
  fontSize: 20,
  color: 'grey',
  fontStyle: 'italic',
  marginTop: 0
}

const ProgramInfoTitle = {
  fontSize: 28,
  marginBottom: 0
}

const ClassProfile = {
  fontSize: 28,
  marginTop: 20
}

const ProgramInfoP = {
  fontSize: 20
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


class SchoolProgram extends React.Component {
  render() {
    const { schoolId, programId } = this.props.match.params;
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
        <TopMenu />

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

        <Row style={{ marginTop: 32 }}>
          <div class="row justify-content-around">
            <Col xs={20} sm={20} md={20} lg={14} xl={14}>
              <Row>
                <Typography>
                  <Title style={ProgramInfoTitle}>{programData.title}</Title>
                  <Title style={ProgramInfoProgramName}>{programData.pname} </Title>
                  <Paragraph style={ProgramInfoP}>
                    {programData.description}
                  </Paragraph>
                </Typography>
              </Row>

              {/* Divider just for looks */}
              <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
              </Divider>

              <Row style={{ marginTop: 32 }}>
                <Typography>
                  <Title style={ClassProfile}>Career Outcome</Title>
                </Typography>
              </Row>

              <div class="container">
                <div class="row justify-content-around align-items-end">
                    <div class="col-4" align="center"> 
                      <div class="circletxt">{programData.data[0].Placement}</div>
                    </div>
                    <div class="col-4" align="center">
                      <div class="circletxt">{programData.data[0].Medium_Salary}</div>
                    </div>
                    <div class="col-4" align="center">
                      <div class="circletxt">{programData.data[0].Maximum_Salary}</div>
                    </div>
                </div>
                <div class="row justify-content-around align-items-start">
                  <div class="col-4">
                  <div class="circlelab">Placement Rate</div>
                  </div>
                  <div class="col-4">
                  <div class="circlelab">Medium Salary</div>
                  </div>
                  <div class="col-4">
                  <div class="circlelab">Maximum Salary</div>
                  </div>
                </div>
              </div>

              <Row>
                <Typography>
                  <Title style={ClassProfile}>Program Statistics</Title>
                </Typography>
              </Row>

              <Table pagination={false} dataSource={programData.data} columns={programData.columns} />

              {/* Divider just for looks */}
              <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
              </Divider>

              <Row>
                <Typography>
                  <Title style={ClassProfile}>Class Profile</Title>
                </Typography>
              </Row>

              <Row style={ProgramInfoP}>

                <Col span={6}>
                  <Row>
                    <Text>
                      Median GPA
              </Text>
                  </Row>
                  <Row>
                    <Text>
                      Median GMAT
              </Text>
                  </Row>
                  <Row>
                    <Text>
                      Average Work Experience
              </Text>
                  </Row>
                </Col>

                <Col span={6}>
                  <Row>
                    <Text>
                      : {programData.gpa}
                    </Text>
                  </Row>
                  <Row>
                    <Text>
                      : {programData.gre}
                    </Text>
                  </Row>
                  <Row>
                    <Text>
                      : {programData.avw}
                    </Text>
                  </Row>
                </Col>

                <Col span={6}>
                  <Row>
                    <Text>
                      Class Size
              </Text>
                  </Row>
                  <Row>
                    <Text>
                      Countries Represented
              </Text>
                  </Row>
                  <Row>
                    <Text>
                      International %
              </Text>
                  </Row>
                </Col>

                <Col span={6}>
                  <Row>
                    <Text>
                      : {programData.classSize}
                    </Text>
                  </Row>
                  <Row>
                    <Text>
                      : {programData.countries}
                    </Text>
                  </Row>
                  <Row>
                    <Text>
                      : {programData.international}
                    </Text>
                  </Row>
                </Col>

              </Row>

              {/* Divider just for looks */}
              <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
              </Divider>

              <Row>
                <Typography>
                  <Title style={ClassProfile}>Sample Curriculum</Title>
                </Typography>
              </Row>

              <Row>
                <Divider orientation="left"> Fall Curriculum </Divider>
                <Text>
                  {programData.fallCurriculum}
                </Text>
              </Row>

              <Row>
                <Divider orientation="left"> Spring Curriculum </Divider>
                <Text>
                  {programData.springCurriculum}
                </Text>
              </Row>

              {/* Divider just for looks */}
              <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
              </Divider>

              <Row>
                <Typography>
                  <Title style={ClassProfile}>Application Materials</Title>
                </Typography>
              </Row>

              <Accordion>

                <Card style={ProgramInfoCard}>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Timeline
            </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>{programData.timeline}</Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card style={ProgramInfoCard}>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    Resume
            </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>{programData.resume} </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card style={ProgramInfoCard}>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    Essay Questions
            </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>{programData.essay}</Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card style={ProgramInfoCard}>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    Letters of Recommendation
            </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>{programData.recommendation}</Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card style={ProgramInfoCard}>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    Transcripts
            </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>{programData.transcripts}</Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card style={ProgramInfoCard}>
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                    Video Questions
            </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>{programData.video}</Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card style={ProgramInfoCard}>
                  <Accordion.Toggle as={Card.Header} eventKey="6">
                    GRE/GMAT
            </Accordion.Toggle>
                  <Accordion.Collapse eventKey="6">
                    <Card.Body>{programData.standardizedtest}</Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card style={ProgramInfoCard}>
                  <Accordion.Toggle as={Card.Header} eventKey="7">
                    TOEFL/IELTS
            </Accordion.Toggle>
                  <Accordion.Collapse eventKey="7">
                    <Card.Body>{programData.englishtest}</Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card style={ProgramInfoCard}>
                  <Accordion.Toggle as={Card.Header} eventKey="8">
                    Application Fee
            </Accordion.Toggle>
                  <Accordion.Collapse eventKey="8">
                    <Card.Body>{programData.applicationfee}</Card.Body>
                  </Accordion.Collapse>
                </Card>

              </Accordion>

              <Row>
                <Typography>
                  <Title style={ClassProfile}>Application Materials</Title>
                </Typography>
              </Row>
            </Col>
          </div>
        </Row>
      </div>
    )
  }
}

export default SchoolProgram;