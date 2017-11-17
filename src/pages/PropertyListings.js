import React from 'react'
import PropertyTile from '../../components/AgencyTile'
import { Grid, Col, Button, Modal } from 'react-bootstrap'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Row } from 'react-bootstrap'
import Scrollchor from 'react-scrollchor';
import firebase from '../../firebase'

export default class PropertyListings extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      listingsData: [],
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
  navigatedetails = ()=> {
    window.location='../PropertyPage'
  }
  navigateAddProp = ()=> {
    window.location='../AddProperty'
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
    var listingsData = [
      {
        title: '12 Marla House for sale',
        location: 'Dha 2',
        area: '12 Marla',
        status: 'Sold',
        bed: 2,
        bath: 2,
        garage: 1,
        imgUrl: 'https://static1.squarespace.com/static/53690146e4b094e1f0fb2239/t/58fe960a197aea4f7f27993b/1493324448380/',
      },
      {
        title: '10 Marla House for sale',
        location: 'Bahria',
        area: '10 Marla',
        status: 'Available',
        bed: 3,
        bath: 3,
        garage: 0,
        imgUrl: 'https://static1.squarespace.com/static/53690146e4b094e1f0fb2239/t/58fe960a197aea4f7f27993b/1493324448380/',
      },
      {
        title: '12 Marla House for sale',
        location: 'Dha 2',
        area: '12 Marla',
        status: 'Available',
        bed: 4,
        bath: 4,
        garage: 0,
        imgUrl: 'https://static1.squarespace.com/static/53690146e4b094e1f0fb2239/t/58fe960a197aea4f7f27993b/1493324448380/',
      }
    ]
    this.setState({
      listingsData,
    })
  }
  render() {
    let close = () => this.setState({ show: false });
    return (
      <div className={'listingPage'}>
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
                        <li><Scrollchor to={'#property'}>PROPERTY LISTINGS</Scrollchor></li>
                        <li><a onClick={this.navigatehome}>HOW IT WORKS</a></li>
                        <li><a onClick={this.navigate}>CONTACT</a></li>
                        <li><a onClick={this.navigateAddProp} style={{'color':'#fff', 'background-color': '#75ce69', 'margin-left':'10px', }}>ADD PROPERTY</a></li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section>
        <section id={'property'} className={'search-section listing-search'} style={{'background-color': '#75ce69', 'z-index':'2',}}>
            <div className={'text-center'}>
                <h1 className={'search-section-heading-1'} style={{'margin-top':'0px', 'padding-top':'15vh', 'color':'white', 'letter-spacing':'1px',}}><strong>Looking for a Home? - We can Help!</strong></h1>
                <h1 className={'search-section-heading-2 text-center'} style={{'margin-top':'0px', 'padding-top':'15vh', 'color':'white', 'letter-spacing':'1px', 'word-spacing':'2px',}}><strong>Looking for a Home? <br /> We can Help!</strong></h1>
                <p className={'search-section-para'} style={{'color':'white', 'margin':'auto', 'line-height': '150%', 'letter-spacing':'4px', 'word-spacing':'4px', 'font-weight':'300',}}>Pakistan’s Leading Real Estate Brand</p>
                <Grid className={'input-field'} style={{'font-size':'18px', 'padding-left':'0px', 'padding-right':'0px', }}>
                  <Col md={2} style={{'padding-left':'0px', 'padding-right':'0px', }}>
                    <input type={'search'} placeholder={'City'} style={{'width':'100%', }} />
                  </Col>
                  <Col md={3} style={{'padding-left':'0px', 'padding-right':'0px', }}>
                    <input type={'search'} placeholder={'Area'} style={{'border-left':'1px solid #d8d8d8', 'width':'100%', }} />
                  </Col>
                  <Col md={3} style={{'padding-left':'0px', 'padding-right':'0px', }}>
                    <input type={'search'} placeholder={'Type'} style={{'border-left':'1px solid #d8d8d8', 'width':'100%', }} />
                  </Col>
                  <Col md={2} style={{'padding-left':'0px', 'padding-right':'0px', }}>
                    <button onClick={this.navigate} className={'input-submit'} type={'submit'} style={{'border-left':'1px solid #d8d8d8', 'width':'100%', }}>Buy</button>
                  </Col>
                  <Col md={2} style={{'padding-left':'0px', 'padding-right':'0px', }}>
                    <button onClick={this.navigate} className={'input-submit'} type={'submit'} style={{'border-left':'1px solid #8e8e8e', 'width':'100%', }}>Rent</button>
                  </Col>
                </Grid>
            </div>
        </section>
        <Grid fluid={true} style={{'max-width':'1500px', 'margin-top':'7vh', 'display':'flex',}}>
          {this.state.listingsData.map((listing, index)=>{
            return (
              <div className={'tile'} style={{'margin-left':'auto', 'margin-right':'auto', }}>
                  <PropertyTile data={listing}/>
              </div>
            )
          })}
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
