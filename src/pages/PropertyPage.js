import React from 'react'
import PropertyDetails from '../../components/PropertyDetails'
import { Grid, Col, Button, Modal } from 'react-bootstrap'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Row } from 'react-bootstrap'
import Scrollchor from 'react-scrollchor';
import firebase from '../../firebase'

export default class PropertyPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      listingDetails: [],
      email: ''
    }
    console.log(firebase);
  }
  getInitialState = ()=> {
    return { show: false };
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
    var listingDetails = [
      {
        title: '12 Marla House for sale',
        location: 'Dha 2',
        build: '2015',
        age: '5 days',
        lastupdt: '04/13/2017 12:00 AM',
        imgUrl: ['https://static1.squarespace.com/static/53690146e4b094e1f0fb2239/t/58fe960a197aea4f7f27993b/1493324448380/','https://static1.squarespace.com/static/53690146e4b094e1f0fb2239/t/58fe960a197aea4f7f27993b/1493324448380/','https://static1.squarespace.com/static/53690146e4b094e1f0fb2239/t/58fe960a197aea4f7f27993b/1493324448380/','https://static1.squarespace.com/static/53690146e4b094e1f0fb2239/t/58fe960a197aea4f7f27993b/1493324448380/'],
        f1: '1250',
        f2: 'Central Heating',
        f3: 'Electricity',
        f4: '4 Bedrooms',
        f5: '4 Bathrooms',
        f6: 'Gas',
        f7: '1 Parking Space',
        f8: 'Servant Quarter',
        f9: 'Lawn',
        bed: 4,
        garage: 1,
        bath: 4
      }
    ]
    this.setState({
      listingDetails,
    })
  }
  render() {
    let close = () => this.setState({ show: false });
    return (
      <div className={'PropertyPage'}>
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
        {this.state.listingDetails.map((details, index)=>{
          return (
            <PropertyDetails data={details} />
          )
        })}
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
