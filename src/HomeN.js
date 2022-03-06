import React from 'react';
import './App.css';
import './index.css'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
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


import Logo from './Logo.png';


const colorpal = [
    '#C94A4A', '#E89637', '#5799D6', '#78D657', '#F3B700', 'secondary'
];

const HeroTitle = {
    fontSize: 52,
    color:"#000000",
    marginBottom:20,
    marginTop:30,
    textAlign: 'center',
};

const HeroText = {
    fontSize: 14,
    color:"#000000",
    textAlign: 'center',
    marginBottom:20

};

const CategoryProgramBorder = {
    padding:16,
    margin:0,
    textIndent:0
}

const Divider = {
    borderTop: "1px solid #D3D3D3",
}


const CategoryProgramTextOpen = {
    fontSize:12,
    color:"#000000",
    padding:0,
    textIndent:0,
    fontWeight: 'normal'
}

const CategoryProgramTextClosed = {
    fontSize:11,
    color:"#B0B0B0",
    padding:0,
    textIndent:0,
    fontWeight: 'normal',
}

const CategoryProgram = {
    fontSize:16,
    padding:12,
    margin:0,
    marginBottom:0
}

class HomeN extends React.Component {

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
                <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <Nav.Link href="/AboutUs/">About Us</Nav.Link>
                    <Nav.Link href="/Methodology/">Methodology</Nav.Link>
                    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>

                <Container>
                    <Row style={{marginBottom:20}}> 
                        <Col sm={{span: 8, offset:4}} md={{span: 2, offset: 0}} style={{borderRight:"1px solid #D3D3D3"}}>
                        <Link to={"/"}> <img src={Logo} height={100} width ={100} alt="logo"/> </Link>                          
                        </Col>

                        <Col style={{marginLeft:30, marginRight:30}}>
                            <Row justify="left" style={{fontSize:18}}>
                                Quick, Simple, Information - A new way to search for graduate programs. 
                            </Row>
                            <Row style={{marginTop:25}}>
                            <Typeahead
                            style={{width: 700}}
                            id="searchBar"
                            onChange={(selected) => {
                                // Handle selections...
                            }}
                            options={this.state.queries}
                            placeholder="Find a school or program..."
                            onChange={(selectedItems) => {
                                let selectedItem = selectedItems[0];
                                if (!selectedItem) return;
                                if (selectedItem.type == "Program") {
                                    this.props.history.push("/Program/" + selectedItem.name);
                                } else if (selectedItem.type == "School Program") {
                                    this.props.history.push("/Program/" + selectedItem.program_name + "/" + selectedItem.school_name);
                                }
                            }}
                            labelKey="name"
                            renderMenuItemChildren={
                                (option, { text }, index) => (
                                    <React.Fragment>
                                      <p style={{color: "black", fontWeight: "bold"}}>
                                        {option.name}
                                      </p>
                                      <div>
                                        <small style={{color: "black"}}>
                                          Type: {option.type.toLocaleString()}
                                        </small>
                                      </div>
                                    </React.Fragment>
                                  )
                            }
                            />
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <div style={{marginTop:20, borderTop: "1px solid #D3D3D3"}}> </div>
                
                <div justify="center">
                    <p  style={HeroTitle}>  20 TOP PROGRAMS - 20 TOP SCHOOLS</p>
             
                </div>

                <Container>
                    
                    <Row>
                    <Col xs={1} sm={1} md={2}></Col>
                    <Col xs={10} sm={10} md={8}>
                        <p  style={HeroText}>
                            An easier way to search for <b> rankings, application material, and program statistics </b> for graduate school programs.
                            The below <b> 20 most popular programs  </b> are selected based on our methodology - popularity, job prospects, graduate salary, 
                            tuition, growth, and other factors. In each program, there are the <b> top ranked 20 schools </b>. Happy Searching!
                        </p>
                    </Col>
                    <Col xs={1} sm={1} md={2}></Col>

                    </Row>
                </Container>
                <br/>

                <Container>
                    {this.state.category_data_loaded ? this.state.category_data.map(cd => {
                        return <Row style={{borderTop: "1px solid #D3D3D3"}}>
                            <Col  sm={12} md style={{...CategoryProgram, color: cd.display_rgb}}>
                                <p style = {{marginBottom:0}}>{cd.category_name}</p>
                            </Col>
                            {cd.program_data.map(pd => {
                                return <Col xs={4} md style={CategoryProgramBorder}>
                                            {
                                                (pd.preview) ? 
                                                <OverlayTrigger placement='top' overlay={<Tooltip>Coming soon!</Tooltip>}>
                                                    <Link to={"/Program/" + pd.program_name} onClick={(event) => event.preventDefault()} style={CategoryProgramTextClosed}>{pd.program_name}</Link>
                                                </OverlayTrigger> :
                                                <Link to={"/Program/" + pd.program_name} style={CategoryProgramTextOpen}>{pd.program_name}</Link>
                                            }
                                        </Col>})}
                            {[...Array(longestCategoryLen - cd.program_data.length)].map(i => {
                                return <Col style={CategoryProgramBorder}/>
                            })}
                        </Row>
                    }) :
                    <ContentLoader viewBox="0 0 380 70">
                        {/* Only SVG shapes */}    
                        <rect x="0" y="20" rx="4" ry="4" width="500" height="13" />
                        <rect x="0" y="40" rx="3" ry="3" width="450" height="10" />
                    </ContentLoader>}

                    {this.state.category_data_loaded && <Row>
                        <Col style={{borderTop: "1px solid #D3D3D3"}}> </Col>
                    </Row>}

                </Container>
                    
                {/*
                <div style={{marginTop:50, borderTop: "1px solid #D3D3D3"}}> </div>

                <Container style={{marginTop:50}}>
            
                    <Row>
                    <Col xs={2} sm={2} md={2}>
                        <Card style={{backgroundColor: colorpal[0], width: '18rem'}}>
                        <Card.Header>Featured</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        </Card>
                    </Col>
                    <Col xs={1} sm={1} md={1}></Col>
                    <Col xs={2} sm={2} md={2}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Header>Featured</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        </Card>
                    </Col>
                    <Col xs={1} sm={1} md={1}></Col>
                    <Col xs={2} sm={2} md={2}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Header>Featured</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        </Card>
                    </Col>
                    <Col xs={1} sm={1} md={1}></Col>
                    <Col xs={2} sm={2} md={2}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Header>Featured</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        </Card>
                    </Col>

                    </Row>
                </Container>
                */}

            </div>)
    }
}

export default withRouter(HomeN);
