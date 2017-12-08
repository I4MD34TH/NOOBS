import React from 'react'
import PropertyTile from '../../components/AgencyTile'
import { Grid, Col, Button, Modal } from 'react-bootstrap'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Row } from 'react-bootstrap'
import Scrollchor from 'react-scrollchor';
import * as firebase from "firebase";

export default class IndexPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      listingsData: [],
      email: '',
      profilepic: '',
    }
    console.log(firebase);
  }
  navigate =  ()=> {
    window.location='../page-2'
  }
  navigatehome =  ()=> {
    window.location='../'
  }
  navigateListings = ()=> {
    window.location='../PropertyListings'
  }
  navigatedetails = ()=> {
    window.location='../PropertyPage'
  }
  navigateAddProp = ()=> {
    window.location='../AddProperty'
  }
  getInitialState = ()=> {
    return { showAnonymous: false, showUsr: false };
  }
  writeUserData(e) {
    const database = firebase.database();
    database.ref('contact/').push({
      email: this.state.email,
    });
  }
  chksignin () {
    var usr = firebase.auth().currentUser;
    var usremail = usr.email;
    var db = firebase.database().ref('contact/');
    if (usr == null) {
      this.setState({ showAnonymous: true, });
    } else {
      if (usr.isAnonymous) {
        this.setState({ showAnonymous: true, });
      } else {
        this.setState({ showUsr: true, });
        db.push({
          email: usremail,
        });
      }
    }
  }
  signin () {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(function() {
      //var provider = new firebase.auth.GoogleAuthProvider();
      var provider = new firebase.auth.OAuthProvider('google.com');
      //firebase.auth().signInWithPopup(provider)
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you the OAuth Access Token for that provider.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
      });
      // In memory persistence will be applied to the signed in Google user
      // even though the persistence was set to 'none' and a page redirect
      // occurred.
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
    // //var provider = new firebase.auth.GoogleAuthProvider();
    // var usr = firebase.auth().currentUser;
    // firebase.auth().signInWithPopup(provider).then(function(result) {
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   var token = result.credential.accessToken;
    //   // The signed-in user info.
    //   var user = result.user;
    //   // ...
    // }).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // })
    firebase.auth().onAuthStateChanged(function(user) {
      document.getElementById('signinbtn').style.display = 'none';
      document.getElementById('usrimg').style.display = 'block';
    });
  }
  signout () {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
  componentDidMount() {
    var database = firebase.database();
    var provider = new firebase.auth.GoogleAuthProvider();

    if (firebase.apps.length === 0) {
      firebase.initializeApp({
        apiKey: "AIzaSyC7TEjW_DaBTWIWxVsOZIXbPC0rBej-g9c",
        authDomain: "starting-firebase-7cff0.firebaseapp.com",
        databaseURL: "https://starting-firebase-7cff0.firebaseio.com",
        projectId: "starting-firebase-7cff0",
        storageBucket: "starting-firebase-7cff0.appspot.com",
        messagingSenderId: "317371861792"
      });
    };

    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user == null) {
        document.getElementById('signinbtn').style.display = 'block';
        document.getElementById('usrimg').style.display = 'none';
        document.getElementById('signoutbtn').style.display = 'none';
      } else {
        if (user.isAnonymous) {
          document.getElementById('signinbtn').style.display = 'block';
          document.getElementById('usrimg').style.display = 'none';
          document.getElementById('signoutbtn').style.display = 'none';
        } else {
          document.getElementById('signinbtn').style.display = 'none';
          document.getElementById('usrimg').style.display = 'block';
          document.getElementById('signoutbtn').style.display = 'block';
        }
      }
      this.setState({
        profilepic: user.photoURL,
      })
    });

    var listingsData = [
      {
        title: '12 Marla House for sale',
        location: 'Dha 2',
        area: '12 Marla',
        status: 'Sold',
        bed: 2,
        bath: 2,
        garage: 1,
        imgUrl: '../images/thumb-1.jpg',
      },
      {
        title: '10 Marla House for sale',
        location: 'Bahria',
        area: '10 Marla',
        status: 'Available',
        bed: 3,
        bath: 3,
        garage: 0,
        imgUrl: '../images/thumb-2.jpg',
      },
      {
        title: '12 Marla House for sale',
        location: 'Dha 2',
        area: '12 Marla',
        status: 'Available',
        bed: 4,
        bath: 4,
        garage: 0,
        imgUrl: '../images/thumb-3.jpg',
      }
    ]
    this.setState({
      listingsData,
    })
  }
  render () {
    let closeAnonymous = () => this.setState({ showAnonymous: false, });
    let closeUsr = () => this.setState({ showUsr: false, });
    return (
      <div className={'HomePage'}>
          <section className={'header'} style={{'position':'absolute', 'z-index':'3', 'width':'100%',}}>
            <Navbar className={'navbar'} style={{'background-color':'transparent', 'border':'none',}}>
              <Navbar.Header>
                <Navbar.Brand>
                    <img onClick={this.navigatehome} src={'../images/logo-header.png'} style={{'cursor':'pointer',}} />
                </Navbar.Brand>
                <Navbar.Toggle style={{'margin-top':'15px', 'filter': 'brightness(1) invert(0)', '-webkit-filter': 'brightness(1) invert(0)',}} />
              </Navbar.Header>
                <Navbar.Collapse>
                <Nav pullRight style={{'margin-top':'15px', }}>
                  <li><a onClick={this.navigateAddProp} style={{'color':'#75ce69', 'background-color': '#fff', 'margin-left':'5px', 'margin-right':'5px', }}>ADD PROPERTY</a></li>
                  <li id={'signinbtn'}><a onClick={()=>{this.signin()}} style={{'color':'#75ce69', 'background-color': '#fff', 'margin-left':'5px', 'margin-right':'5px', }}>SIGN IN</a></li>
                  <li id={'signoutbtn'}><a onClick={()=>{this.signout()}} style={{'color':'#75ce69', 'background-color': '#fff', 'margin-left':'5px', 'margin-right':'5px', }}>SIGN OUT</a></li>
                  <li>
                    <div id={'usrimg'} href={'#'} style={{'padding':'0px', 'margin':'0px 5px', }}>
                      <img height={'50px'} src={this.state.profilepic} />
                      <div className="usrimg-content">
                        <ol>
                          <li><a>page-1</a></li>
                          <li><a>page-2</a></li>
                          <li><a>page-3</a></li>
                        </ol>
                      </div>
                    </div>
                  </li>
                </Nav>
                <Nav className={'main-nav'} pullRight style={{'margin-top':'15px', }}>
                    <li><Scrollchor to={'#AboutUs'} style={{'margin-left':'5px', 'margin-right':'5px', 'color':'#fff', }}>ABOUT</Scrollchor></li>
                    <li><a onClick={this.navigateListings} style={{'margin-left':'5px', 'margin-right':'5px', 'color':'#fff', }}>PROPERTY LISTINGS</a></li>
                    <li><Scrollchor to={'#HowItWorks'} style={{'margin-left':'5px', 'margin-right':'5px', 'color':'#fff', }}>HOW IT WORKS</Scrollchor></li>
                    <li><a onClick={this.navigate} style={{'margin-left':'5px', 'margin-right':'5px', 'color':'#fff', }}>CONTACT</a></li>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
          </section>
          <section className={'search-section'} style={{'height':'100vh', 'background-color': '#75ce69', 'background-image': 'url(images/header_background.jpg)', 'background-position': 'bottom', 'z-index':'2',}}>
              <div className={'text-center'}>
                  <h1 className={'search-section-heading-1'} style={{'margin-top':'0px', 'padding-top':'28vh', 'color':'white', 'letter-spacing':'1px',}}><strong>Looking for a Home? - We can Help!</strong></h1>
                  <h1 className={'search-section-heading-2 text-center'} style={{'margin-top':'0px', 'padding-top':'28vh', 'color':'white', 'letter-spacing':'1px', 'word-spacing':'2px',}}><strong>Looking for a Home? <br /> We can Help!</strong></h1>
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
          <section id={'AboutUs'} className={'about-section text-center'}>
            <Grid>
                <h1 className={'about-heading'} style={{'letter-spacing':'3px', 'color':'#595959',}}><strong>ABOUT US</strong></h1>
                <p className={'about-para'} style={{'color':'#5b5b5b', 'width':'87%', 'margin':'auto', 'line-height': '180%',}}>Agency21 International is Pakistan’s first leading real estate brand, and is the only real estate chain in the twin cities. Being a sister company of Steptons International UK, Agency21 is the only brand to set global trends in Pakistan’s real estate sector. With an aim to revolutionise Pakistan's real estate and the conviction of changing the way of business, Agency21 has introduced unparalleled standards of professionalism and transparency. We aim to provide you with an unmatched quality of service, clarity of transaction and complete legal cover which is being introduced for the first time in Pakistan.</p>
                <img className={'about-img'} src={'images/about_img.png'} />
            </Grid>
            <h1 id={'HowItWorks'} className={'container work-heading'} style={{'letter-spacing':'3px', 'color':'#595959',}}><strong>OUR SERVICES</strong></h1>
            <Grid className={'work-steps'}>
              <Col xs={'6'} md={'4'}><Grid fluid={true}><img className={'col-sm-3 tick'} src={'images/tick.png'} style={{'margin-top':'20px',}} /><h3><strong>Comparative Market Analysis (CMA)</strong></h3></Grid><p>A comparative and comprehensive estimate of your property’s value to help you in planning your future buying or selling.</p></Col>
              <Col xs={'6'} md={'4'}><Grid fluid={true}><img className={'col-sm-3 tick'} src={'images/tick.png'} style={{'margin-top':'20px',}} /><h3><strong>Exposure & Facilitation</strong></h3></Grid><p>Marketing your property to potential buyers and facilitating you through the whole property purchasing & selling process.</p></Col>
              <Col xs={'6'} md={'4'}><Grid fluid={true}><img className={'col-sm-3 tick'} src={'images/tick.png'} style={{'margin-top':'20px',}} /><h3><strong>Document & Legal cover</strong></h3></Grid><p>Providing you with complete legal cover and consultation through a certified legal firm, and preparing necessary paperwork for property transaction.</p></Col>
            </Grid>
            <div className={'container-fluid graded'} style={{'padding':'3vh 0vw 3vh 0vw', 'color':'white', 'margin-top':'50px', }}>
              <Grid>
                <h1><strong>A Game Changer - In Real Estate Agency of Pakistan</strong></h1>
                <button className={'contact-btn'} onClick={()=>{this.chksignin()}}><strong>Contact Us</strong></button>
                <Modal show={this.state.showAnonymous} onHide={closeAnonymous} container={this} aria-labelledby="AnonymousModal">
                  <Modal.Header closeButton>
                    <Modal.Title id="AnonymousModal">Fill up this form and we'll contact you shortly.</Modal.Title>
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
                    <Button onClick={closeAnonymous}>Close</Button>
                  </Modal.Footer>
                </Modal>
                <Modal show={this.state.showUsr} onHide={closeUsr} container={this} aria-labelledby="UsrModal">
                  <Modal.Header closeButton>
                    <Modal.Title id="UsrModal">We have your Email, We'll contact you shortly...</Modal.Title>
                  </Modal.Header>
                  <Modal.Body />
                  <Modal.Footer>
                    <Button onClick={closeUsr}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </Grid>
            </div>
          </section>
          <section style={{'margin':'0px 0px 0px 0px'}}></section>
          <Grid fluid={true} style={{'padding':'0px',}}>
              <h1 className={'tile-heading text-center'}><strong>LISTED PROPERTIES</strong></h1>
              <div className={'container-fluid tiles'} style={{'display':'flex', 'flex-wrap':'wrap', 'margin-left':'auto', 'margin-right':'auto', 'margin-bottom':'70px',}}>
                {this.state.listingsData.map((listing, index)=>{
                  return (
                    <div className={'tile'} style={{'margin-left':'auto', 'margin-right':'auto', }}>
                        <PropertyTile data={listing}/>
                    </div>
                  )
                })}
              </div>
              <button className={'load-more'} onClick={this.navigateListings}><strong>More...</strong></button>
          </Grid>
      </div>
    )
  }
}
