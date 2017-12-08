import React from 'react'
import RelativeListing from './RelativeListing'
import { Grid, Col, Button, Modal, Row } from 'react-bootstrap'
import * as firebase from "firebase";
import Slider from 'react-slick';


export default class PropertyDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      relativelistingsData: []
    }
    console.log(firebase);
  }
  getInitialState = ()=> {
    return { showCarousel: false };
  }
  componentDidMount() {
    var database = firebase.database();

    var relativelistingsData = [
      {
        title: '12 Marla House for sale',
        location: 'Dha 2',
        imgUrl: '../images/thumb-2.jpg'
      },
      {
        title: '12 Marla House for sale',
        location: 'Dha 2',
        imgUrl: '../images/thumb-3.jpg'
      }
    ]
    this.setState({
      relativelistingsData,
    })
  }
  render() {
    var settings = {
      slidesToShow: 1,
      dots:true,
      centerMode: true,
    };
    let closeCarousel = () => this.setState({ showCarousel: false, });
    return (
      <Grid className={'details'} style={{'padding-top':'40px', 'padding-bottom':'40px', }}>
        <Col xs={12} md={4}>
          <Row style={{'padding':'5px', }}>
            <img className={'img-responsive bitfade'} onClick={()=>{this.setState({ showCarousel: true, });}} src={this.props.data.imgUrl[0]} />
          </Row>
          <Row>
            <Col xs={6} md={4} style={{'padding':'5px',}}><img className={'img-responsive bitfade'} onClick={()=>{this.setState({ showCarousel: true, });}} src={this.props.data.imgUrl[1]} /></Col>
            <Col xs={6} md={4} style={{'padding':'5px',}}><img className={'img-responsive bitfade'} onClick={()=>{this.setState({ showCarousel: true, });}} src={this.props.data.imgUrl[2]} /></Col>
            <Col xs={6} md={4} style={{'padding':'5px',}}><img className={'img-responsive bitfade'} onClick={()=>{this.setState({ showCarousel: true, });}} src={this.props.data.imgUrl[3]} /></Col>
          </Row>
          <Row style={{'padding':'5px', }}>
            <Button className={'bkgrad'}><strong>CALL US FOR MORE DETAILS</strong></Button>
          </Row>
          <Row style={{'padding':'0px', }}>
            <Col xs={6} md={4} style={{'padding':'5px',}}><Button className={'prop-btns'}>Save</Button></Col>
            <Col xs={6} md={4} style={{'padding':'5px',}}><Button className={'prop-btns'}>Share</Button></Col>
            <Col xs={6} md={4} style={{'padding':'5px',}}><Button className={'prop-btns'}>Add Notes</Button></Col>
          </Row>
          <Modal show={this.state.showCarousel} onHide={closeCarousel} container={this} aria-labelledby="CarouselModal">
            <Slider {...settings}>
              <div><img className={'img-responsive'} src={this.props.data.imgUrl[0]} /></div>
              <div><img className={'img-responsive'} src={this.props.data.imgUrl[1]} /></div>
              <div><img className={'img-responsive'} src={this.props.data.imgUrl[2]} /></div>
              <div><img className={'img-responsive'} src={this.props.data.imgUrl[3]} /></div>
              <div><img className={'img-responsive'} src={this.props.data.imgUrl[4]} /></div>
              <div><img className={'img-responsive'} src={this.props.data.imgUrl[5]} /></div>
            </Slider>
          </Modal>
        </Col>
        <Col xs={12} md={7} className={'marginprob'}>
          <Row>
            <h1 style={{'margin-top':'0px', }}><strong>{this.props.data.title}</strong></h1>
            <p style={{'color':'#888888', }}>{this.props.data.location}</p>
          </Row>
          <Row style={{'padding':'0px', 'border':'1px solid #cfcfcf'}}>
            <Row style={{'margin':'0px', 'padding-left':'20px', 'padding-right':'20px', 'background-color':'#efefef'}}>
              <h3>About this Property</h3>
              <p style={{'color':'#888888', }}>Built in {this.props.data.build}, {this.props.data.age} on Agency21</p>
              <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout.</p>
              <Row style={{'margin':'0px', 'padding':'0px', 'margin-top':'20px', 'margin-bottom':'15px', }}>
                <div style={{'float':'left', 'width':'120px' }}>
                  <img src={'images/bed-icon.png'} style={{'width':'25px', 'float':'left', 'margin-right':'10px',}} />
                  <p>{this.props.data.bed} beds</p>
                </div>
                <div style={{'float':'left', 'width':'120px' }}>
                  <img src={'images/bath-icon.png'} style={{'width':'23px', 'float':'left', 'margin-right':'10px',}} />
                  <p>{this.props.data.bath} baths</p>
                </div>
                <div style={{'float':'left', 'width':'120px' }}>
                  <img src={'images/garage-icon.png'} style={{'width':'21px', 'float':'left', 'margin-right':'11px',}} />
                  <p>{this.props.data.garage} garage</p>
                </div>
              </Row>
            </Row>
            <Row style={{'margin':'0px', 'padding-left':'20px', 'padding-right':'20px', }}>
                <h3>Property Details</h3>
                <p style={{'color':'#888888', }}>information last updated on: {this.props.data.lastupdt}</p>
                <Row style={{'margin-top':'10px', 'color':'#666666', }}>
                  <Col xs={6} md={4}>{this.props.data.f1} ft&#178; Area</Col>
                  <Col xs={6} md={4}>{this.props.data.f2}</Col>
                  <Col xs={6} md={4}>{this.props.data.f3}</Col>
                </Row>
                <Row style={{'margin-top':'10px', 'color':'#666666', }}>
                  <Col xs={6} md={4}>{this.props.data.f4}</Col>
                  <Col xs={6} md={4}>{this.props.data.f5}</Col>
                  <Col xs={6} md={4}>{this.props.data.f6}</Col>
                </Row>
                <Row style={{'margin-top':'10px', 'margin-bottom':'20px', 'color':'#666666', }}>
                  <Col xs={6} md={4}>{this.props.data.f7}</Col><Col xs={6} md={4}>{this.props.data.f8}</Col><Col xs={6} md={4}>{this.props.data.f9}</Col>
                </Row>
            </Row>
            <Row style={{'margin':'0px', 'padding-left':'20px', 'padding-right':'20px', 'padding-bottom':'10px', 'background-color':'#efefef'}}>
              <h3>The Neighborhood</h3>
              <p style={{'color':'#666666'}}>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout.</p>
              <p style={{'color':'#666666'}}>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout.</p>
            </Row>
          </Row>
          <Row style={{'padding':'0px', }}>
            <h3>Relevent Properties</h3>
            {this.state.relativelistingsData.map((relativelisting, index)=>{
              return (
                <div className={'relList'} style={{'margin-top':'30px', }}>
                    <RelativeListing data={relativelisting}/>
                </div>
              )
            })}
          </Row>
          <Row>
            <h3>Map Location</h3>
            <iframe height={450} frameborder={0} style={{"border":"0", 'width':'100%', 'margin-top':'30px', }} src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyCcHOD6AxKpd0gHp6ivvBuKL1y_0v41qWg&q=Space+Needle,Seattle+WA"} allowfullscreen></iframe>
          </Row>
        </Col>
      </Grid>
    )
  }
}
