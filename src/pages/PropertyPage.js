import React from 'react'
import PropertyDetails from '../../components/PropertyDetails'
import { Grid, Col, Button, Modal } from 'react-bootstrap'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Row } from 'react-bootstrap'
import Scrollchor from 'react-scrollchor';
import * as firebase from "firebase";

export default class PropertyPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      listingDetails: [],
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
  navigateListings = ()=> {
    window.location='../PropertyListings'
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
    });
  }
  render() {
    let closeAnonymous = () => this.setState({ showAnonymous: false, });
    let closeUsr = () => this.setState({ showUsr: false, });
    return (
      <div className={'PropertyPage'}>
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
                    <li><a onClick={this.navigateListings} style={{'margin-left':'5px', 'margin-right':'5px', 'background-color':'#eee', }}>PROPERTY LISTINGS</a></li>
                    <li><a onClick={this.navigatehome} style={{'margin-left':'5px', 'margin-right':'5px', 'background-color':'#eee', }}>HOW IT WORKS</a></li>
                    <li><a onClick={this.navigate} style={{'margin-left':'5px', 'margin-right':'5px', 'background-color':'#eee', }}>CONTACT</a></li>
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
