import React from 'react';
import './App.css';
import './index.css'

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup';
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
import Logo1 from './Logo1.png';
import Logo2 from './Logo2.png';
import Logo3 from './Logo3.png';
import Logo4 from './Logo4.png';
import Logo5 from './Logo5.png';
import Logo6 from './Logo6.png';
import Logo7 from './Logo7.png';
import TitlePic from './TitlePic.png';



const colorpal = [
    '#C94A4A', '#E89637', '#5799D6', '#78D657', '#F3B700', 'secondary'
];

const HeroTitle = {
    fontSize: 52,
    // color:"#555",
    marginBottom:20,
    marginTop:30,
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'center',
};

const HeroText = {
    fontSize: 13,
    lineHeight: 1.5,
    color:"#000000",
    textAlign: 'center',
    marginBottom:20

};

const CategoryProgramBorder = {
    paddingTop:12,
    margin:0,
    textIndent:0
}

const Divider = {
    borderTop: "1px solid #D3D3D3",
}


const CategoryProgramTextOpen = {
    fontSize:11,
    color:"#000000",
    padding:0,
    textIndent:0,
    fontWeight: 'normal',
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
    paddingTop:12,
    paddingBottom:12,
    margin:0,
    marginBottom:0
}

class Home2 extends React.Component {

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

                <Row>
                    <p style={{fontSize: 42, marginTop: 150}}> 
                        <b style={{fontWeight:'normal'}} class="highlightRed"> Quick, </b> 
                        <b style={{fontWeight:'normal'}} class="highlightOrange">Simple,</b>
                        <b style={{fontWeight:'normal'}} class="highlightBlue"> Information. </b>
                        <img style={{marginLeft:5}} src={TitlePic} width ={100} alt="logo"/>
                    </p>
                </Row>

                <Row>
                    <p style={{fontSize: 22}}> 
                        An easier way to search for graduate programs
                    </p>
                </Row>

                <Row>
                <Typeahead
                    style={{width: 600}}
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

                    <Row style={{fontSize:14, marginTop:20, marginBottom:30}}>
                        <ul class="checkmarkList">
                            <li >Find rankings, application material, employment stats, and admission standards...</li>
                            <li style={{marginTop:5}}>Browse our top 20 graduate programs and find the top 20 schools in each program</li>
                            <li style={{marginTop:5}}>Explore features such as timelines, tier list, and more!</li>
                        </ul>
                    </Row>
                
                </Col>

            </Row>
                
                <div justify="center">
                    <p  style={HeroTitle}>  Top 20 Schools in Top 20 Programs</p>
             
                </div>

                <Container>
                    
                    <Row>
                    <Col xs={1} sm={1} md={2}></Col>
                    <Col xs={10} sm={10} md={8}>
                        <p  style={HeroText}>
                            An easier way to search for <b> rankings, application material, and program statistics </b> for graduate school programs.
                            The below <b> 20 most popular programs  </b> are selected based on our methodology - popularity, job prospects, graduate salary, 
                            tuition, growth, and other factors. In each program, there are the <b> top ranked 20 schools</b>. Happy searching!
                        </p>
                    </Col>
                    <Col xs={1} sm={1} md={2}></Col>

                    </Row>
                </Container>
                <br/>

                <Container >
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

                    {this.state.category_data_loaded && <Row >
                        <Col style={{borderTop: "1px solid #D3D3D3"}}> </Col>
                    </Row>}

                </Container>


                <Row style={{backgroundColor:"#F8F8F8", marginTop:30, marginBotton:30}}>
                <Container >
                <div justify="center">
                    <p  style={HeroTitle}>  Discover</p>
             
                </div>
                    <Row >
                        <Col xs={12} sm={12} md={4}>
                            <Card style = {{marginTop:20, marginBottom:20, marginLeft: 20, borderColor: colorpal[0]}}>
                            <Card.Body>
                            <Link to={"/Program/Business Analytics"} ><p class="programnameheader" href="/Methodology/" style={{fontSize:18}}> <span>Business Analytics</span></p> </Link>

                            <ListGroup variant = "flush" style={{fontSize:12}}>
                                <ListGroup.Item > <Link style={{color:"#505050", fontWeight:"normal"}} to={"/Program/Business Analytics/Massachusetts Institute of Technology"}>#1 Massachusettes Institute of Technology</Link></ListGroup.Item>
                                <ListGroup.Item > <Link style={{color:"#505050", fontWeight:"normal"}} to={"/Program/Business Analytics/Northwestern University"}>#2 Northwestern University</Link></ListGroup.Item>
                                <ListGroup.Item > <Link style={{color:"#505050", fontWeight:"normal"}} to={"/Program/Business Analytics/University of California - Los Angeles"}>#3 University of California, Los Angeles</Link></ListGroup.Item>
                                <ListGroup.Item > <Link style={{color:"#505050", fontWeight:"normal"}} to={"/Program/Business Analytics/Carnegie Mellon University"}>#4 Carnegie Mellon University</Link></ListGroup.Item>
                                <ListGroup.Item > <Link style={{color:"#505050", fontWeight:"normal"}} to={"/Program/Business Analytics/University of Minnesota - Twin Cities"}>#5 University of Minnesota, Twin Cities</Link></ListGroup.Item>
                            </ListGroup>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted" style={{textAlign:"center"}}> <Link style={{color:"#505050", fontWeight:"bold"}} to={"/Program/Business Analytics/"}> See the full 20 programs... </Link> </small>
                            </Card.Footer>
                            </Card>
                           
                        </Col>

                        <Col xs={12} sm={12} md={4}>
                            <Card style = {{marginTop:20, marginBottom:20, marginLeft: 20, borderColor: colorpal[2]}}>
                            <Card.Body>
                            <Link to={"/Program/MBA"} ><p class="programnameheader" style={{fontSize:18, color:colorpal[2]}}> <span>M.B.A</span></p></Link>
                        
                            <ListGroup variant ="flush" style={{fontSize:12}}>
                                <ListGroup.Item > <Link style={{color:"#505050", fontWeight:"normal"}} to={"/Program/MBA/Harvard University"}> #1 Harvard University </Link> </ListGroup.Item>
                                <ListGroup.Item > <Link style={{color:"#505050", fontWeight:"normal"}} to={"/Program/MBA/Stanford University"}> #2 Stanford University</Link> </ListGroup.Item>
                                <ListGroup.Item > <Link style={{color:"#505050", fontWeight:"normal"}} to={"/Program/MBA/University of Pennsylvania"}> #3 University of Pennsylvania</Link></ListGroup.Item>
                                <ListGroup.Item > <Link style={{color:"#505050", fontWeight:"normal"}} to={"/Program/MBA/University of Chicago"}> #4 University of Chicago </Link></ListGroup.Item>
                                <ListGroup.Item > <Link style={{color:"#505050", fontWeight:"normal"}} to={"/Program/MBA/Massachusetts Institute of Technology"}> #5 Massachusettes Institute of Technology </Link></ListGroup.Item>
                            </ListGroup>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted" style={{textAlign:"center"}}> <Link style={{color:"#505050", fontWeight:"bold"}} to={"/Program/MBA/"}> See the full 20 programs... </Link> </small>
                            </Card.Footer>
                            </Card>
                   
                        </Col>

                        <Col xs={12} sm={12} md={4}>

                            <Card style = {{marginTop:20, marginBottom:20, marginLeft: 20, borderColor: colorpal[1]}}>
                            <Card.Body>
                            <Link to={"/Program/Finance"} > <p class="programnameheader" style={{fontSize:18, color: colorpal[1]}}> <span>Finance</span></p></Link>
                            
                            <ListGroup variant = "flush" style={{fontSize:12}}>
                                <ListGroup.Item > <Link style={{color:"#505050", fontWeight:"normal"}} to={"/Program/Finance/Princeton University"}> #1 Princeton University </Link></ListGroup.Item>
                                <ListGroup.Item > <Link style={{color:"#505050", fontWeight:"normal"}} to={"/Program/Finance/Baruch College - The City University of New York"}> #2 Baruch College - City University of NY </Link></ListGroup.Item>
                                <ListGroup.Item > <Link style={{color:"#505050", fontWeight:"normal"}} to={"/Program/Finance/Carnegie Mellon University"}> #3 Carnegie Mellon University </Link></ListGroup.Item>
                                <ListGroup.Item > <Link style={{color:"#505050", fontWeight:"normal"}} to={"/Program/Finance/Columbia University"}> #4 Columbia University </Link></ListGroup.Item>
                                <ListGroup.Item > <Link style={{color:"#505050", fontWeight:"normal"}} to={"/Program/Finance/University of California - Berkeley"}> #5 University of California - Berkeley </Link></ListGroup.Item>
                            </ListGroup>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted" style={{textAlign:"center"}}> <Link style={{color:"#505050", fontWeight:"bold"}} to={"/Program/Finance/"}> See the full 20 programs... </Link> </small>
                            </Card.Footer>
                            </Card>
    
                        </Col>


          

                    </Row>
                
                </Container>

                </Row>

              
                <Row style={{marginTop:50}}>

                </Row>

            </div>)
    }
}

export default withRouter(Home2);
