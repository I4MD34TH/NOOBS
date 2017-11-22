import React from 'react'
import AdditionalDetails_house from '../../components/AdditionalDetails_house'
import AdditionalDetails_plot from '../../components/AdditionalDetails_plot'
import AdditionalDetails_commercial from '../../components/AdditionalDetails_commercial'
import { Grid, Col, Button, Modal } from 'react-bootstrap'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Row } from 'react-bootstrap'
import Scrollchor from 'react-scrollchor';
import firebase from '../../firebase'

export default class PropertyPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
    }
  }
  housetypes = ()=> {
    document.getElementById('subtypes').innerHTML = [
      '<option>House</option>',
      '<option>Flat</option>',
      '<option>Upper Portion</option>',
      '<option>Lower Portion</option>',
      '<option>Farm House</option>',
      '<option>Pent House</option>',
    ]
    this.setState({
      allowed1: true,
      allowed2: false,
      allowed3: false,
    })
  }
  plottypes() {
    document.getElementById('subtypes').innerHTML = [
      '<option>Residential Plot</option>',
      '<option>Commercial Plot</option>',
      '<option>Agricultural Land</option>',
      '<option>Industrial Land</option>',
      '<option>Plot File</option>',
      '<option>Plot Form</option>',
    ]
    this.setState({
      allowed1: false,
      allowed2: true,
      allowed3: false,
    })
  }
  getInitialState = ()=> {
    return { show: false };
  }
  commercialtypes() {
    document.getElementById('subtypes').innerHTML = [
      '<option>Office</option>',
      '<option>Shop</option>',
      '<option>Warehouse</option>',
      '<option>Factory</option>',
      '<option>Building</option>',
      '<option>Other</option>',
    ]
    this.setState({
      allowed1: false,
      allowed2: false,
      allowed3: true,
    })
  }
  onImageChange(evt) {
    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++) {
      if (!f.type.match('image.*')) {
        continue;
      }
      var reader = new FileReader();
      reader.onload = (function(theFile) {
        return function(e) {
          var span = document.createElement('span');
          span.innerHTML =
          ['<img style="height:100px; margin:5px;" src="',
            e.target.result,
            '" title="', escape(theFile.name),
            '"/>'
          ].join('');
          document.getElementById('list').insertBefore(span, null);
        };
      })(f);
      reader.readAsDataURL(f);
    }
  }
  navigate =  ()=> {
    window.location='/page-2'
  }
  navigatehome =  ()=> {
    window.location='../'
  }
  navigateListings = ()=> {
    window.location='../PropertyListings'
  }
  writeUserData(e) {
    console.log('submitted');
    e.preventDefault();
    firebase.database().ref('users/').set({
      email: this.state.email
    });
  }
  componentDidMount() {
    var database = firebase.database();
  }
  render() {
    var allowed1 = true;
    var allowed2 = true;
    var allowed3 = true;
    let close = () => this.setState({ show: false });
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
                    <input type={"radio"} id={"switch_left"} name={"purpose"} value={"sale"} />
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
                    <input type={"radio"} id={"rad1"} name={"PropertyType"} value={'house'} onClick={()=>{this.housetypes()}} />
                    <label for={"rad1"}>House</label>
                  </Col>
                  <Col xs={12} md={4}>
                    <input type={"radio"} id={"rad2"} name={"PropertyType"} value={'plot'} onClick={()=>{this.plottypes()}} />
                    <label for={"rad2"}>Plot</label>
                  </Col>
                  <Col xs={12} md={4}>
                    <input type={"radio"} id={"rad3"} name={"PropertyType"} value={'commercial'} onClick={()=>{this.commercialtypes()}} />
                    <label for={"rad3"}>Commercial</label>
                  </Col>
                  <div className={'arrow-in'} style={{'padding':'0px 15px', }}>
                    <select id={'subtypes'} style={{'padding':'10px 15px', 'border':'1px solid #cecece', 'border-radius':'0px', 'margin-top':'20px', 'width':'100%', }}>
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
                      <input type={'number'} min={"0"} step={"any"} style={{'padding':'10px 15px', 'border':'1px solid #cecece', 'border-radius':'0px', 'margin-top':'20px', 'width':'100%', 'height':'auto', }} placeholder={'Area'} />
                    </Col>
                    <Col xs={4} md={4} style={{'padding':'0',}}>
                      <div className={'arrow-in'}>
                        <select style={{'padding':'10px 15px', 'border':'1px solid #cecece', 'border-left':'none', 'border-radius':'0px', 'margin-top':'20px', 'width':'100%', 'height':'42px',}}>
                          <option>Unit</option>
                          <option>Ft&#178;</option>
                          <option>Yd&#178;</option>
                          <option>M&#178;</option>
                          <option>Kanal</option>
                          <option>Marla</option>
                        </select>
                        <div className={'arrow-2'}></div>
                      </div>
                    </Col>
                  </Col>
                  <Col xs={12} md={4} style={{'padding':'0px 15px',}}>
                    <input type={'number'} min={0} style={{'padding':'10px 15px', 'border':'1px solid #cecece', 'border-radius':'0px', 'margin-top':'20px', 'width':'100%', 'height':'auto', 'appearance':'textfield', '-webkit-appearance': 'none', '-moz-appearance': 'textfield', }} placeholder={'Price'} />
                  </Col>
                  <Col xs={12} md={8}>
                    <textarea rows={'4'} placeholder={'Description'} style={{'width':'100%', 'margin-top':'20px', 'resize':'vertical', 'padding':'10px 15px', 'border':'1px solid #cecece', 'border-radius':'0px', }}></textarea>
                  </Col>
                  <Col xs={12} md={8}>
                      <button className={'uploadbtn'} type={'button'} onClick={()=>{document.getElementById("uploadpics").click()}} style={{'padding':'10px 15px', 'border':'1px solid #75ce69', 'border-radius':'0px', 'margin-top':'40px', 'width':'100%', }}>Upload Photos</button>
                      <input type={"file"} onChange={this.onImageChange.bind(this)} id={'uploadpics'} name={"pics"} accept={"image/*"} style={{'display':'none', }} />
                      <h6 style={{'margin-top':'20px', }}>Images to be uploaded appear here:</h6>
                      <div id={"list"} style={{'border':'2px dashed #ccc', 'background-color':'#ededed', 'min-height':'115px', }}></div>
                  </Col>
                  <Col xs={12} md={12}>
                    <div style={{'border-left':'5px solid #75ce69', 'padding':'10px 15px', 'margin-top':'20px', 'background-color':'#efefef', }}>
                      <h4>Add More Details</h4>
                    </div>
                    <div id={'additional_details'}>
                      {this.state.allowed1 ? <AdditionalDetails_house /> : null}
                      {this.state.allowed2 ? <AdditionalDetails_plot /> : null}
                      {this.state.allowed3 ? <AdditionalDetails_commercial /> : null}
                    </div>
                  </Col>
                  <Col xs={12} md={12}>
                    <div style={{'border-left':'5px solid #75ce69', 'padding':'10px 15px', 'margin-top':'20px', 'background-color':'#efefef', }}>
                      <h4>Contact Information</h4>
                    </div>
                    <Col md={4} xs={12} style={{'padding':'0px',}}>
                      <input type={'number'} min={0} style={{'padding':'10px 15px', 'border':'1px solid #cecece', 'border-radius':'0px', 'margin-top':'20px', 'width':'100%', 'height':'auto', 'appearance':'textfield', '-webkit-appearance': 'none', '-moz-appearance': 'textfield', }} placeholder={'Phone'} />
                    </Col>
                  </Col>
                </Row>
                <div style={{'border-left':'5px solid #75ce69', 'padding':'10px 15px', 'margin-top':'20px', 'background-color':'#efefef', }}>
                  <h4>Submit</h4>
                </div>
                <div className={'submit-cntnr'}>
                  <input type={'submit'} className={'sbmt-prpty'} style={{'padding':'10px 15px', 'border':'1px solid #75ce69', 'border-radius':'0px', 'margin-top':'20px', 'margin-bottom':'20px', 'width':'100%', }} />
                </div>
              </Col>
            </Row>
          </form>
        </Grid>
        <section id={'AboutUs'} className={'about-section text-center'}>
          <div className={'container-fluid graded'} style={{'padding':'3vh 0vw 3vh 0vw', 'color':'white', 'margin-top':'50px', }}>
            <Grid>
              <h1><strong>A Game Changer - In Real Estate Agency of Pakistan</strong></h1>
              <button className={'contact-btn'} onClick={() => this.setState({ show: true })}><strong>Contact Us</strong></button>
              <Modal show={this.state.show} onHide={close} container={this} aria-labelledby="contained-modal-title">
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title">Fill up this form and we'll contact you shortly.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form id={'submitEmail'}>
                    <input name={'email'} type={'email'}
                      onChange={
                        (email) => {
                          this.setState({
                            email: email.target.value
                          })
                        }
                      }
                    placeholder={'Email'} style={{'background-color':'#f0f0f0', 'padding':'10px 20px 10px 20px',}} />
                    <button type={'button'} onClick={(e)=>{this.writeUserData(e)}} style={{'padding':'20px', 'background-color':'#e0e0e0', 'border':'none', 'border-radius':'0px',}}>Submit</button>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={close}>Close</Button>
                </Modal.Footer>
              </Modal>
            </Grid>
          </div>
        </section>
      </div>
    )
  }
}
