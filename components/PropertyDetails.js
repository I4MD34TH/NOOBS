import React from 'react'
import RelativeListing from './RelativeListing'
import { Grid, Col, Button, Modal, Row } from 'react-bootstrap'
import firebase from 'firebase'

export default class PropertyDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      relativelistingsData: []
    }
    console.log(firebase);
  }
  componentDidMount() {
    var database = firebase.database();
    var relativelistingsData = [
      {
        title: '12 Marla House for sale',
        location: 'Dha 2',
        imgUrl: 'https://static1.squarespace.com/static/53690146e4b094e1f0fb2239/t/58fe960a197aea4f7f27993b/1493324448380/'
      }
    ]
    this.setState({
      relativelistingsData,
    })
  }
  render() {
    return (
      <Grid className={'details'} style={{'padding-top':'40px', 'padding-bottom':'40px', }}>
        <Col xs={6} md={4}>
          <Row style={{'padding':'5px', }}>
            <img className={'img-responsive'} src={this.props.data.imgUrl[0]} />
          </Row>
          <Row>
            <Col xs={6} md={4} style={{'padding':'5px',}}><img className={'img-responsive'} src={this.props.data.imgUrl[1]} /></Col>
            <Col xs={6} md={4} style={{'padding':'5px',}}><img className={'img-responsive'} src={this.props.data.imgUrl[2]} /></Col>
            <Col xs={6} md={4} style={{'padding':'5px',}}><img className={'img-responsive'} src={this.props.data.imgUrl[3]} /></Col>
          </Row>
          <Row style={{'padding':'5px', }}>
            <Button className={'bkgrad'}><strong>CALL US FOR MORE DETAILS</strong></Button>
          </Row>
          <Row style={{'padding':'0px', }}>
            <Col xs={6} md={4} style={{'padding':'5px',}}><Button className={'prop-btns'}>Save Property</Button></Col>
            <Col xs={6} md={4} style={{'padding':'5px',}}><Button className={'prop-btns'}>Send to Friend</Button></Col>
            <Col xs={6} md={4} style={{'padding':'5px',}}><Button className={'prop-btns'}>Add Notes</Button></Col>
          </Row>
        </Col>
        <Col md={7} style={{'margin-left':'20px', }}>
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
                  <Col xs={6} md={4}>{this.props.data.f1} ft&#178; Area</Col><Col xs={6} md={4}>{this.props.data.f2}</Col><Col xs={6} md={4}>{this.props.data.f3}</Col>
                </Row>
                <Row style={{'margin-top':'10px', 'color':'#666666', }}>
                  <Col xs={6} md={4}>{this.props.data.f4}</Col><Col xs={6} md={4}>{this.props.data.f5}</Col><Col xs={6} md={4}>{this.props.data.f6}</Col>
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
        </Col>
      </Grid>
    )
  }
}