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

import Button from 'antd/es/button';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Typography as AntTypography, Divider } from 'antd';
import './App.css';

const TitleColor = {

  color: "#FFFFFF"

}

const Banner = {
  fontSize: 20
}

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

function onChange(a, b, c) {
  console.log(a, b, c);
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

          <Row gutter={16}>
              <Col>
                <AntTypography style={SearchTypography} >
                  <Paragraph>
                    Find Your Next Institution
                  </Paragraph>
                </AntTypography>
              </Col>

            <Col className="gutter-row" span={24}>
              <div className="gutter-example" style={divStyle}>
                <Row />

                <Row gutter={16}>
                  <Col className="gutter-row" span={6} offset={4}>
                    <div className="gutter-box">
                      <Button type="primary" block={true} style={searchButtonStyle} onClick="localhost:3000/School">
                        <div>
                          <p style={searchBy}>Search by </p>
                          <p style={Program}>School </p>
                        </div>
                      </Button>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6} >
                    <div className="gutter-box">
                      <Button type="primary" block={true} style={searchButtonStyle} >
                        <div>
                          <p style={searchBy}>Search by </p>
                          <p style={Program}>Program</p>
                        </div>
                      </Button>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6} >
                    <div className="gutter-box">
                      <Button type="primary" block={true} style={searchButtonStyle}>
                        <div>
                          <p style={searchBy}>Search by D </p>
                          <p style={Program}>Popularity</p>
                        </div>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

         <Row>
          <Typography style={LATypography} >
           <Title>- Mission Statement -</Title>
           <Paragraph style={MissionStatementP}>
            "At GradSchooled our mission is to empower and encourage those seeking a graduate school
            education by{' '}
              <Text strong>
                providing access to centralized information about universities and their programs.
              </Text>
            {' '}Through our website, we look to ease and refine the graduate program search process."
           </Paragraph>
         </Typography>
        </Row>
      </div>
    </div>
  );
}