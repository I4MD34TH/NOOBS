import React from 'react'
import { Grid, Col, Button, Modal } from 'react-bootstrap'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Row } from 'react-bootstrap'
import Scrollchor from 'react-scrollchor';
import firebase from '../../firebase'

export default class PropertyPage extends React.Component {
  navigate =  ()=> {
    window.location='/page-2'
  }
  navigatehome =  ()=> {
    window.location='../'
  }
  navigateListings = ()=> {
    window.location='../PropertyListings'
  }
  render() {
    return(
      <div className={'AddProperty'}>
        <section className={'header'} style={{'width':'100%',}}>
            <Navbar className={'navbar'} style={{'background-color':'transparent', 'border':'none',}}>
            <Navbar.Header>
              <Navbar.Brand>
                  <img onClick={this.navigatehome} src={'../images/footer-logo.png'} style={{'height':'70px', 'cursor':'pointer',}} />
              </Navbar.Brand>
              <Navbar.Toggle style={{'margin-top':'15px', 'filter': 'brightness(1) invert(0)', '-webkit-filter': 'brightness(1) invert(0)',}} />
            </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight className={'main-nav'} pullRight style={{'margin-top':'15px', }}>
                        <li><a onClick={this.navigatehome}>ABOUT</a></li>
                        <li><a onClick={this.navigateListings}>PROPERTY LISTINGS</a></li>
                        <li><a onClick={this.navigatehome}>HOW IT WORKS</a></li>
                        <li><a onClick={this.navigate}>CONTACT</a></li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section>
        <Grid className={'add-details'}>
          <Row style={{'margin':'0px 10px', 'padding-left':'20px', 'padding-right':'20px', 'padding-bottom':'10px', 'background-color':'#efefef', 'border':'1px solid #cecece', }}>
            <h2>Put your Property up for Sale or Rent!</h2>
            <p style={{'color':'#666666', }}>Everything you need to know about putting your property up for Sale or Rent! <br /> We are here to help you every step of the way. Give us the required Information and let us help you with our best!</p>
          </Row>
          <form>
            <Row style={{'margin':'0px 10px', }}>
              <Col xs={12} md={4} style={{'padding':'0px 15px',}}>
                <h4 style={{'margin-top':'30px', }}>Purpose</h4>
                <Row style={{'margin-top':'20px', }}>
                  <Col xs={12} md={4}>
                    <input type={"radio"} id={"switch_left"} name={"purpose"} value={"sale"}/>
                    <label for={"switch_left"}>Sale</label>
                  </Col>
                  <Col xs={12} md={4}>
                    <input type={"radio"} id={"switch_right"} name={"purpose"} value={"rent"} />
                    <label for={"switch_right"}>Rent</label>
                  </Col>
                </Row>
                <h4 style={{'margin-top':'30px', }}>Type of Property</h4>
                <Row style={{'margin-top':'20px', }}>
                  <Col xs={12} md={4}>
                    <input type={"radio"} id={"rad1"} name={"PropertyType"} value={'house'} />
                    <label for={"rad1"}>House</label>
                  </Col>
                  <Col xs={12} md={4}>
                    <input type={"radio"} id={"rad2"} name={"PropertyType"} value={'plot'} />
                    <label for={"rad2"}>Plot</label>
                  </Col>
                  <Col xs={12} md={4}>
                    <input type={"radio"} id={"rad3"} name={"PropertyType"} value={'commercial'} />
                    <label for={"rad3"}>Commercial</label>
                  </Col>
                  <div className={'arrow-in'}>
                    <select style={{'padding':'10px 15px', 'border':'1px solid #cecece', 'border-radius':'0px', 'margin-top':'20px', 'width':'100%', }}>
                      <option>Select Subtype</option>
                    </select>
                    <div className={'arrow-1'}></div>
                  </div>
                </Row>
              </Col>
              <Col xs={12} md={12}>
                <hr />
                <h4>Details about your listings</h4>
                <Row style={{'padding':'0',}}>
                  <Col xs={12} md={4}>
                    <Col xs={8} md={8} style={{'padding':'0',}}>
                      <input type={'text'} style={{'padding':'10px 15px', 'border':'1px solid #cecece', 'border-radius':'0px', 'margin-top':'20px', 'width':'100%', 'height':'auto', }} placeholder={'Area'} />
                    </Col>
                    <Col xs={4} md={4} style={{'padding':'0',}}>
                      <div className={'arrow-in'}>
                        <select style={{'padding':'10px 15px', 'border':'1px solid #cecece', 'border-left':'none', 'border-radius':'0px', 'margin-top':'20px', 'width':'100%', 'height':'42px',}}>
                          <option>Unit</option>
                        </select>
                        <div className={'arrow-2'}></div>
                      </div>
                    </Col>
                  </Col>
                  <Col xs={12} md={4} style={{'padding':'0px 15px',}}>
                    <input type={'text'} style={{'padding':'10px 15px', 'border':'1px solid #cecece', 'border-radius':'0px', 'margin-top':'20px', 'width':'100%', 'height':'auto', }} placeholder={'Price'} />
                  </Col>
                  <Col xs={12} md={8}>
                    <textarea rows={'4'} placeholder={'Description'} style={{'width':'100%', 'margin-top':'20px', 'resize':'vertical', 'padding':'10px 15px', 'border':'1px solid #cecece', 'border-radius':'0px', }}></textarea>
                  </Col>
                  <Col xs={12} md={8}>
                    <div className={'text-center'} style={{'border':'2px dashed #ccc', 'height':'150px', 'background-color':'#efefef', 'margin-top':'20px', 'cursor':'pointer', }}>
                      <button type={'button'} style={{'padding':'10px 15px', 'border':'1px solid #75ce69', 'border-radius':'0px', 'background-color':'#fff', 'color':'#75ce69', 'margin-top':'40px', }}>Upload Photos</button>
                      <h6 style={{'color':'#7a7a7a'}}>or drag them in...</h6>
                    </div>
                  </Col>
                  <Col xs={12} md={12}>
                    <div style={{'border-left':'5px solid #75ce69', 'padding':'10px 15px', 'margin-top':'20px', 'background-color':'#efefef', }}>
                      <h4>Add More Details</h4>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </form>
        </Grid>
      </div>
    )
  }
}
