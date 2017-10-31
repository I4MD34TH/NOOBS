import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Grid, Col, Row } from 'react-bootstrap'
import Scrollchor from 'react-scrollchor';
import firebase from 'firebase'

import './index.css'

class Header extends React.Component {
  navigate =  ()=> {
    window.location='../page-2'
  }
  navigatehome =  ()=> {
    window.location='../'
  }
  render() {
    return (
        <section className={'header'} style={{'position':'absolute', 'z-index':'3', 'width':'100%',}}>
            <Navbar className={'navbar'} style={{'background-color':'transparent', 'border':'none',}}>
              <Navbar.Header>
                <Navbar.Brand>
                    <img onClick={this.navigatehome} src={'../images/logo-header.png'} style={{'height':'70px', 'cursor':'pointer',}} />
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight className={'main-nav'} pullRight style={{'margin-top':'5px', 'color': '#fff',}}>
                        <li><Scrollchor to={'#AboutUs'}>ABOUT</Scrollchor></li>
                        <li><a onClick={this.navigate}>PROPERTY LISTINGS</a></li>
                        <li><Scrollchor to={'#HowItWorks'}>HOW IT WORKS</Scrollchor></li>
                        <li><a onClick={this.navigate}>CONTACT</a></li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section>
      )
    }
  }

class Footer extends React.Component {
    navigate =  ()=> {
      window.location='../page-2'
    }
    navigatehome =  ()=> {
      window.location='../'
    }
    render() {
      return (
        <section className={'footer'} style={{'background-color':'#444444', 'color':'white',}}>
          <Grid fluid={true}>
            <Row style={{'width':'90%', 'margin-left':'auto', 'margin-right':'auto', 'padding':'50px 0px 30px 0px',}}>
                <Col xs={'6'} md={'4'}>
                    <img onClick={this.navigatehome} className={'footer-logo'} src={'../images/footer-logo.png'} style={{'cursor':'pointer',}} />
                    <p className={'col-sm-12 footer-para'} style={{'font-size':'16px', 'color':'#ccc',}}>Agency21 is the leading real estate brand of Pakistan and aims to revolutionise the real estate sector of Pakistan.</p>
                </Col>
                <Col xs={'3'} md={'2'}>
                    <h3 style={{'margin-bottom':'20px',}}>Agency 21</h3>
                    <Scrollchor to={'#AboutUs'} className={'short-footer-links'}>About Us</Scrollchor><br />
                    <a className={'short-footer-links'} onClick={this.navigate}>Property Listings</a><br />
                    <Scrollchor to={'#HowItWorks'} className={'short-footer-links'}>How it works</Scrollchor><br />
                    <a className={'short-footer-links'} onClick={this.navigate}s>Contact</a>
                </Col>
                <Col xs={'4'} md={'3'}  className={'office'}>
                    <h3 style={{'margin-bottom':'20px',}}>Head Office</h3>
                    <Row><img className={'col-sm-2'} src={'../images/mail-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}>info&#64;agency21.com</p></Row>
                    <Row><img className={'col-sm-2'} src={'../images/map-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}>4th Floor, 44 East Plaza, Fazal-e-Haq Road, Blue Area, Islamabad</p></Row>
                    <Row><img className={'col-sm-2'} src={'../images/phone-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}>&#43;92&#45;51&#45;8737777</p></Row>
                    <Row><img className={'col-sm-2'} src={'../images/phone-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}><strong>UAN: 111&#45;021&#45;111</strong></p></Row>
                </Col>
                <Col xs={'4'} md={'3'} className={'office'}>
                    <h3 style={{'margin-bottom':'20px',}}>Regional Offices</h3>
                    <Row><img className={'col-sm-2'} src={'../images/map-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}>Near DHA-2, Gate-1, Main G.T. Road, Islamabad</p></Row>
                    <Row><img className={'col-sm-2'} src={'../images/map-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}>Plaza-91, Main Civic Center, Phase 1-4, Bahria Town</p></Row>
                    <Row><img className={'col-sm-2'} src={'../images/map-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}>Office-1, Midway Commercial, Bahria Phase-7, Rawalpindi</p></Row>
                </Col>
            </Row>
            <Row className={'copy-right'} style={{'width':'89%', 'margin-right':'auto', 'margin-left':'auto', 'padding':'30px 0px 30px 0px', 'color':'#a0a0a0',}}>
                <Col xs={9} md={6}><footer>Copyright &copy; Agency21Pvt Ltd. All rights reserved.</footer></Col>
                <Col xs={9} md={6} className={'social text-right'} style={{'padding-right':'20px',}}>
                    <a href={'https://www.facebook.com/Agency21pk/'} target={'_blank'}><img src={'../images/fb-icon.png'} style={{'height':'22px', 'padding-right':'15px',}} /></a>
                    <a href={'https://twitter.com/Agency21Pk?lang=en'} target={'_blank'}><img src={'../images/twitter-icon.png'} style={{'height':'20px', 'padding-right':'15px',}} /></a>
                    <a href={'https://www.instagram.com/agency21pk/'} target={'_blank'}><img src={'../images/instagram-icon.png'} style={{'height':'20px',}} /></a>
                </Col>
            </Row>
          </Grid>
        </section>
      )
    }
  }

const TemplateWrapper = ({ children }) => (
  <div style={{'position':'relative', 'z-index':'1',}}>
    <Helmet title="Agency 21" meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' },]}>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <script src="https://www.gstatic.com/firebasejs/4.6.0/firebase.js"></script>
    </Helmet>
    <Header />
    <div>
      {children()}
    </div>
    <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
