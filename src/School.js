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

import Button from 'antd/es/button';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Typography as AntTypography, Divider } from 'antd';
import { Cascader } from 'antd';
import './App.css';

const MastersInSearch = {
    height: 50,
    width: 400
  }
  
  const ProgramTitle = {
    fontSize:16
  }
  
  const explore = {
    color:"#808080"
  };
  
  const divStyle = {
    margin: 50
  };
  
  const searchButtonStyle = {
    height: 100,
    width: 200,
    fontSize: 16,
    position:"center"
  };
  
  const searchBy = {
    fontSize: 16,
    marginBottom: 0
  };
  
  const Program = {
    fontSize: 24,
    marginBottom: 0
  }
  
  const MissionStatementP = {
    fontSize: 25
  }
  
  const LATypography = {
    textAlign: "left"
  }
  
  const SearchTypography = {
    textAlign: "center",
    fontSize: 25
  }
  
  const { Title, Paragraph, Text } = AntTypography;
  
  const TitleColor = {
  
    color: "#FFFFFF"
  
  }
  
  const Banner = {
    fontSize: 20
  }
  
  const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block'
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));
  
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
            {
              value: 'xiasha',
              label: 'Xia Sha',
              disabled: true,
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua men',
            },
          ],
        },
      ],
    },
  ];
  
  function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
  }
  
  function filter(inputValue, path) {
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  }
  
  export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    function handleProfileMenuOpen(event) {
      setAnchorEl(event.currentTarget);
    }
  
    function handleMobileMenuClose() {
      setMobileMoreAnchorEl(null);
    }
  
    function handleMenuClose() {
      setAnchorEl(null);
      handleMobileMenuClose();
    }
  
    function handleMobileMenuOpen(event) {
      setMobileMoreAnchorEl(event.currentTarget);
    }
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
  
  
      return (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
  
            <Typography className={classes.title} variant="h6" noWrap style={TitleColor}>
              GradSchooled
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search for a School or Program.."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
  
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
      
      <div className="gutter-example" style={divStyle}>
  
        <Row>
          <Col offset={7} span={4}>
            <Typography style={LATypography}>
              <Title>Masters at </Title>
            </Typography>
          </Col>
          <Col span={8} >
            <Cascader 
              style={MastersInSearch}
              options={options}
              onChange={onChange}
              placeholder="Harvard, Stanford..."
              showSearch={{ filter }}
            />
          </Col>
        </Row>
        
        <Row gutter={8} type="flex" justify="space-around">
          <Col span={7} offset={3}>
            <div>
              <Row>
                <Text underline style={ProgramTitle}>
                  Highest Ranked Schools
                </Text>
              </Row>
              <Row>
                <Button type="link">
                  #1 Harvard University
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #2 Stanford University
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #3 University of Pennslyvania
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #4 University of Chicago
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #5 Massachusettes Institute of Technology
                </Button>
              </Row>
              <Row>
                <Button type="link" style={explore}>
                  (Explore the complete top 30 list)
                </Button>
              </Row>
            </div>
          </Col>
          <Col span={7} >
            <div>
              <Row>
                <Text underline style={ProgramTitle}>
                  Best Value Schools
                </Text>
              </Row>
              <Row>
                <Button type="link">
                  #1 University of California, Berkeley
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #2 University of California, Los Angeles
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #3 University of Texas-Austin
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #4 Pennslyvania State University
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #5 University of Washington
                </Button>
              </Row>
              <Row>
                <Button type="link" style={explore}>
                  (Explore the complete top 30 list)
                </Button>
              </Row>
            </div>
          </Col>
          <Col span={7} >
          <div>
              <Row>
                <Text underline style={ProgramTitle}>
                  Best Scholarship Package Schools
                </Text>
              </Row>
              <Row>
                <Button type="link">
                  #1 Brown University
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #2 Cooper Union
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #3 Cornell University
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #4 Curtis Institute of Music
                </Button>
              </Row>
              <Row>
                <Button type="link">
                  #5 Deep Springs College
                </Button>
              </Row>
              <Row>
                <Button type="link" style={explore}>
                  (Explore the complete top 30 list)
                </Button>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
      )
    }
  
  