import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { Link, withRouter } from 'react-router-dom';
import reactStringReplace from 'react-string-replace';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { Typeahead } from 'react-bootstrap-typeahead';
import ContentLoader from 'react-content-loader'
import FormGroup from 'react-bootstrap/FormGroup'
import FormLabel from 'react-bootstrap/FormLabel'

import './App.css';

import Logo7 from './Logo7.png';


const colorpal = [
    '#C94A4A', '#E89637', '#5799D6', '#78D657', '#F3B700', 'secondary'
];

const HeroTitle = {
    fontSize: 24,
    color:"#000000",
    marginBottom:40,
    marginTop:30,
    textAlign: 'center',
};

const HeroText = {
    fontSize: 14,
    color:"#000000",
    textAlign: 'left',
};



class SignUp extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          category_data: [],
          category_data_loaded: false,
          queries: [],
          queries_loaded: false,
          query: "",
        };
      }
    
      componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + "/programs/")
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
                category_data: responseJson,
                category_data_loaded: true,
            });
          })
          .catch((error) => {
            console.error(error);
          });
        fetch(process.env.REACT_APP_API_URL + "/queries/")
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({ 
              queries: responseJson,
              queries_loaded: true,
            });
            console.log(this.state.queries);
          })
          .catch((error) => {
            console.error(error);
          });
      }

    render() {
        const longestCategoryLen = Math.max(...this.state.category_data.map(cd => cd.program_data.length));
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



              <Row style={{backgroundColor:"#F8F8F8"}}>

                <Col xs={1} sm={1} md={2}></Col>

                <Col xs={10} sm={10} md={8}>
                  <p style={{marginTop:150}} class ="programheaderRed"> <span> About Us </span></p>
                  <p style={{fontSize:22, textAlign:"center", marginBottom:100}}>The Sign Up feature will be coming soon!)</p>
                </Col>

              </Row>

            </div>)
    }
}

export default SignUp;