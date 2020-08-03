import React from 'react';
import Typography from '@material-ui/core/Typography';

import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { Row, Col } from 'antd';
import { Typography as AntTypography, Divider } from 'antd';
import './App.css';
import { useState } from 'react';

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

import Logo from './Logo.png';
import { light } from '@material-ui/core/styles/createPalette';

let arrow = "->";

const colorpal = [
  '#C94A4A', '#E89637', '#5799D6', '#78D657', '#F3B700', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary',
  'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary',
];

const programsSchools =
{

  /* business-analytics  and its schools */
  'business-analytics': {

    'mit': {
      //Title
      title: "Massachusettes Institute of Technology",
      tier:1,
      ptitle: "Business Analytics",
      pname: "Masters in Business Analytics (Sloan)",
      description: '"The best program in business analytics. Established in conjuction with the Operations Research Center, the MIT MSBA is a 12-month program focused on applying the tools of modern data science, optimization, and machine learning to solve real-world business problems. The program is tailored for students with engineering backgrounds." -2020',

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
      careerOutcome: [
        {
          Placement: '100%',
          Maximum_Salary: '$160,000',
          Medium_Salary: '$110,000',
          List_of_Employers: 'Apple, Disney, Microsoft, Nike, Amazon, BCG Gamma, Facebook, Microsoft, Ebay, Yelp, Sony, ZS, Worday, Discover, Lending Club, TicketMaster, Abbott, Snapchat, PwC, LinkedIn, EY, Autodesk, Paramount, Capital One, Uber, Visa...',
          Full_Time_Roles: 'Data Analyst, Consultant, Data Scientist, Business Analyst, Pricing Strategist, Customer Anlyst, Business Intelligence Engineer, Supply Chain Analyst, Risk Strategy Analyst'
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
        {
        AppDue: 'Wednesday, January 8, 2020, 3:00 p.m. EST',
        Dec_Notif: 'Thursday, March 5, 2020',
        Offer_Reply: 'Wednesday, April 15, 2020'
        }
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

    'usc': {
      //Title
      title: "University of Southern California",
      ptitle: "Business Analytics",
      pname: "Masters in Business Analytics (Marshall)",
      description: 'A 12-month program focused on applying the tools of modern data science, optimization, and machine learning to solve real-world business problems.',

      //Class Profile
      gpa: '3.7',
      gre: 'GRE: 169. GMAT:730',
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
      careerOutcome: [
        {
          Placement: '100%',
          Maximum_Salary: '$160,000',
          Medium_Salary: '$110,000',
          List_of_Emplyers: 'Apple, Disney, Microsoft, Nike, Amazon, BCG Gamma, Facebook, Microsoft, Ebay, Yelp, Sony, ZS, Worday, Discover, Lending Club, TicketMaster, Abbott, Snapchat, PwC, LinkedIn, EY, Autodesk, Paramount, Capital One, Uber, Visa...',
          Full_Time_Roles: 'Data Analyst, Consultant, Data Scientist, Business Analyst, Pricing Strategist, Customer Anlyst, Business Intelligence Engineer, Supply Chain Analyst, Risk Strategy Analyst'
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
        {
        AppDue: 'Wednesday, January 8, 2020, 3:00 p.m. EST',
        Dec_Notif: 'Thursday, March 5, 2020',
        Offer_Reply: 'Wednesday, April 15, 2020'
        }
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

    'ucla': {
      //Title
      title: "University of California - Los Angeles",
      ptitle: "Business Analytics",
      pname: "Masters in Business Analytics (Anderson)",
      description: 'A 12-month program focused on applying the tools of modern data science, optimization, and machine learning to solve real-world business problems.',

      //Class Profile
      gpa: '3.7',
      gre: 'GMAT:730',
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
      careerOutcome: [
        {
          Placement: '100%',
          Maximum_Salary: '$160,000',
          Medium_Salary: '$110,000',
          List_of_Emplyers: 'Apple, Disney, Microsoft, Nike, Amazon, BCG Gamma, Facebook, Microsoft, Ebay, Yelp, Sony, ZS, Worday, Discover, Lending Club, TicketMaster, Abbott, Snapchat, PwC, LinkedIn, EY, Autodesk, Paramount, Capital One, Uber, Visa...',
          Full_Time_Roles: 'Data Analyst, Consultant, Data Scientist, Business Analyst, Pricing Strategist, Customer Anlyst, Business Intelligence Engineer, Supply Chain Analyst, Risk Strategy Analyst'
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
        {
        AppDue: 'Wednesday, January 8, 2020, 3:00 p.m. EST',
        Dec_Notif: 'Thursday, March 5, 2020',
        Offer_Reply: 'Wednesday, April 15, 2020'
        }
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

    'utaustin': {
      //Title
      title: "University of Texas - Austin",
      ptitle: "Business Analytics",
      pname: "Masters in Business Analytics (McCombs)",
      description: 'A 12-month program focused on applying the tools of modern data science, optimization, and machine learning to solve real-world business problems.',

      //Class Profile
      gpa: '3.7',
      gre: 'GMAT:730',
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
      careerOutcome: [
        {
          Placement: '100%',
          Maximum_Salary: '$160,000',
          Medium_Salary: '$110,000',
          List_of_Emplyers: 'Apple, Disney, Microsoft, Nike, Amazon, BCG Gamma, Facebook, Microsoft, Ebay, Yelp, Sony, ZS, Worday, Discover, Lending Club, TicketMaster, Abbott, Snapchat, PwC, LinkedIn, EY, Autodesk, Paramount, Capital One, Uber, Visa...',
          Full_Time_Roles: 'Data Analyst, Consultant, Data Scientist, Business Analyst, Pricing Strategist, Customer Anlyst, Business Intelligence Engineer, Supply Chain Analyst, Risk Strategy Analyst'
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
        {
        AppDue: 'Wednesday, January 8, 2020, 3:00 p.m. EST',
        Dec_Notif: 'Thursday, March 5, 2020',
        Offer_Reply: 'Wednesday, April 15, 2020'
        }
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


  }
}


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
  marginTop: 20
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
  render() {
    const { programId, schoolId } = this.props.match.params;
    var programData;
    var schoolProgramsBySchool;
    var actualProgramId = programId.toLowerCase();
    var actualSchoolId = schoolId.toLowerCase();
    console.log(programId)
    console.log(programsSchools)
    if (!programsSchools.hasOwnProperty(actualProgramId)) {
      // program doesn't exist
      window.location.href = "/";
    } else {
      schoolProgramsBySchool = programsSchools[actualProgramId]
      console.log(schoolProgramsBySchool)
      if (!schoolProgramsBySchool.hasOwnProperty(actualSchoolId)) {
        // program doesn't exist 
        window.location.href = "/";
      }
      else {
        programData = schoolProgramsBySchool[actualSchoolId];
        console.log(programData)
      }
    }

    return (
      <div>
        <Row>
          {/* Column here is for blank space on the sides*/}
          <Col xs={2} sm={2} md={2} lg={4} xl={4}>

          </Col>

          <Col xs={20} sm={20} md={20} lg={16} xl={16}>  

            <Row> 
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

            <Row style={{marginTop:20}}>
              <Link style={{color:"#808080"}} to={"/"}>Home</Link> <Text style={{marginLeft:10, color:"#808080"}}>{arrow}</Text>
              <Link style={{color:"#808080", marginLeft:10}} to={"/Program/" + actualProgramId}>{programData.ptitle}</Link> <Text style={{marginLeft:10, color:"#808080"}}>{arrow}</Text>
              <Link style={{color:"#808080", marginLeft:10}} >{programData.title}</Link>
            </Row>

            </Col>
              {/* Column here is for blank space on the sides*/}
            <Col xs={2} sm={2} md={2} lg={4} xl={4}>
      
          </Col>
        </Row>

        <Row style={{ marginTop: 32 }}>

            <Col xs={2} sm={2} md={2} lg={4} xl={4}>
              {/* Column here is for blank space on the sides*/}
            </Col>

            <Col xs={20} sm={20} md={20} lg={16} xl={16}>

              <Row>
                <Typography class="schoolheader">
                    <p style={{color:colorpal[0]}} style={ProgramInfoTitle}> <span>{programData.title} </span></p>

                    <Title class="programnameheader" style={ProgramInfoProgramName}><span> {programData.pname} </span></Title>

                    <p style={ProgramInfoDescription}>
                      {programData.description} 
                    </p>
           
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

              {/*}
              <Row>
                <div class="container">
                  <div class="row justify-content-around align-items-end">
                    <div class="col-4" align="center">
                      <div class="circletxt">{programData.careerOutcome[0].Placement}</div>
                    </div>
                    <div class="col-4" align="center">
                      <div class="circletxt">{programData.careerOutcome[0].Medium_Salary}</div>
                    </div>
                    <div class="col-4" align="center">
                      <div class="circletxt">{programData.careerOutcome[0].Maximum_Salary}</div>
                    </div>
                  </div>
                  <div class="row justify-content-around align-items-center">
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
              </Row>
              */}

              <Row>
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                  <p class="careerborder">{programData.careerOutcome[0].Placement}</p>
                  <p style={CareerText}> Job Placement</p>
                </Col>

                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                  <p class="careerborder2">{programData.careerOutcome[0].Medium_Salary}</p>
                  <p style={CareerText}> Average Salary</p>
                </Col>

                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                  <p class="careerborder3">{programData.careerOutcome[0].Maximum_Salary}</p>
                  <p style={CareerText}> Maximum Salary</p>
                </Col>

              </Row>

              <Row style={{ marginBottom: 32 }}>
                <div style={ProgramOutComeTitle}>List of Employers</div>
                <div>{programData.careerOutcome[0].List_of_Employers}</div>
              </Row>

              <Row>
                <div style={ProgramOutComeTitle}>Full-Time Role</div>
                <div>{programData.careerOutcome[0].Full_Time_Roles}</div>
              </Row>

              {/* Divider just for looks */}
              <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
              </Divider>

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
                        <Card.Body>
                        <Timeline mode="left">
                          <Timeline.Item label={programData.timeline[0].AppDue}>Application due date and time.</Timeline.Item>
                          <Timeline.Item label={programData.timeline[0].Dec_Notif}>Aniticipated decision notification.</Timeline.Item>
                          <Timeline.Item label={programData.timeline[0].Offer_Reply}>Last day to reply to offer.</Timeline.Item>
                        </Timeline>
                    </Card.Body>
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

            </Col>

            <Col xs={2} sm={2} md={2} lg={4} xl={4}>
              {/* Column here is for blank space on the sides*/}
            </Col>

        </Row>
      </div>
    )
  }
}

export default ProgramSchool;