import React from 'react'
import PropertyTile from '../../components/AgencyTile'
import { Grid, Col, Button, Modal } from 'react-bootstrap'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Row } from 'react-bootstrap'
import Scrollchor from 'react-scrollchor';
import * as firebase from "firebase";

export default class PropertyListings extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      listingsData: [],
      email: '',
      profilepic: '',
    }
    console.log(firebase);
  }
  getInitialState = ()=> {
    return { showAnonymous: false, showUsr: false };
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
    const database = firebase.database();
    database.ref('users/').push({
      email: this.state.email,
    });
  }
  chksignin () {
    var usr = firebase.auth().currentUser;
    var usremail = usr.email;
    var db = firebase.database().ref('users/');
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
    let closeAnonymous = () => this.setState({ showAnonymous: false, });
    let closeUsr = () => this.setState({ showUsr: false, });
    return (
      <div className={'listingPage'}>
        <section className={'header'} style={{'width':'100%',}}>
          <Navbar className={'navbar'} style={{'background-color':'transparent', 'border':'none',}}>
            <Navbar.Header>
              <Navbar.Brand>
                  <img onClick={this.navigatehome} src={'../images/footer-logo.png'} style={{'cursor':'pointer',}} />
              </Navbar.Brand>
              <Navbar.Toggle style={{'margin-top':'15px', 'filter': 'brightness(1) invert(0)', '-webkit-filter': 'brightness(1) invert(0)',}} />
            </Navbar.Header>
              <Navbar.Collapse>
              <Nav pullRight style={{'margin-top':'15px', }}>
                <li><a onClick={this.navigateAddProp} style={{'color':'#fff', 'background-color': '#75ce69', 'margin-left':'5px', 'margin-right':'5px', }}>ADD PROPERTY</a></li>
                <li id={'signinbtn'}><a onClick={()=>{this.signin()}} style={{'color':'#fff', 'background-color': '#75ce69', 'margin-left':'5px', 'margin-right':'5px', }}>SIGN IN</a></li>
                <li id={'signoutbtn'}><a onClick={()=>{this.signout()}} style={{'color':'#fff', 'background-color': '#75ce69', 'margin-left':'5px', 'margin-right':'5px', }}>SIGN OUT</a></li>
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
                  <li><a onClick={this.navigatehome} style={{'margin-left':'5px', 'margin-right':'5px', 'background-color':'#eee', }}>ABOUT</a></li>
                  <li><Scrollchor to={'#property'} style={{'margin-left':'5px', 'margin-right':'5px', 'background-color':'#eee', }}>PROPERTY LISTINGS</Scrollchor></li>
                  <li><a onClick={this.navigatehome} style={{'margin-left':'5px', 'margin-right':'5px', 'background-color':'#eee', }}>HOW IT WORKS</a></li>
                  <li><a onClick={this.navigate} style={{'margin-left':'5px', 'margin-right':'5px', 'background-color':'#eee', }}>CONTACT</a></li>
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
        <Grid className={'tilesarea'} fluid={true} style={{'max-width':'1500px', 'margin-top':'7vh', }}>
          {this.state.listingsData.map((listing, index)=>{
            return (
              <div className={'tilewrap'}>
                <div className={'tile'}>
                  <PropertyTile data={listing}/>
                </div>
              </div>
            )
          })}
        </Grid>
        <section id={'AboutUs'} className={'about-section text-center'}>
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
      </div>
    )
  }
}
