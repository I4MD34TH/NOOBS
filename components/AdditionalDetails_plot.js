import React from 'react'
import { Grid, Col, Button, Modal } from 'react-bootstrap'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Row } from 'react-bootstrap'

export default class AdditionalDetails_plot extends React.Component {
  render() {
    return(
      <div style={{'margin-top':'20px', }}>
        <Col md={6} xs={12}>
          <h4 style={{"color":"#666666", }}>Additional Features</h4>
          <hr />
          <Col md={12} xs={12} style={{'padding':'0',}}>
            <Col xs={12} md={12} style={{'padding':'0',}}>
              <input type={"checkbox"} id={"mft-1"} name={"main_features"} value={"possesion"} />
              <label for={"mft-1"}>Possesion</label>
            </Col>
            <Col xs={12} md={12} style={{'padding':'0',}}>
              <input type={"checkbox"} id={"mft-2"} name={"main_features"} value={"corner"} />
              <label for={"mft-2"}>Corner</label>
            </Col>
            <Col xs={12} md={12} style={{'padding':'0',}}>
              <input type={"checkbox"} id={"mft-3"} name={"main_features"} value={"park facing"} />
              <label for={"mft-3"}>Park Facing</label>
            </Col>
            <Col xs={12} md={12} style={{'padding':'0',}}>
              <input type={"checkbox"} id={"mft-4"} name={"main_features"} value={"disputer"} />
              <label for={"mft-4"}>Disputer</label>
            </Col>
            <Col xs={12} md={12} style={{'padding':'0',}}>
              <input type={"checkbox"} id={"mft-5"} name={"main_features"} value={"boundry wall"} />
              <label for={"mft-5"}>Boundry Wall</label>
            </Col>
          </Col>
        </Col>
        <Col md={6} xs={12}>
          <h4 style={{"color":"#666666", }}>Utilities</h4>
          <hr />
          <Col md={12} xs={12} style={{'padding':'0',}}>
            <Col xs={12} md={12} style={{'padding':'0',}}>
              <input type={"checkbox"} id={"ut-1"} name={"utilities"} value={"electricity"} />
              <label for={"ut-1"}>Electricity</label>
            </Col>
            <Col xs={12} md={12} style={{'padding':'0',}}>
              <input type={"checkbox"} id={"ut-2"} name={"utilities"} value={"gas"} />
              <label for={"ut-2"}>Gas</label>
            </Col>
            <Col xs={12} md={12} style={{'padding':'0',}}>
              <input type={"checkbox"} id={"ut-3"} name={"utilities"} value={"sewerage"} />
              <label for={"ut-3"}>Sewerage</label>
            </Col>
            <Col xs={12} md={12} style={{'padding':'0',}}>
              <input type={"checkbox"} id={"ut-4"} name={"utilities"} value={"water"} />
              <label for={"ut-4"}>Water</label>
            </Col>
          </Col>
        </Col>
      </div>
    )
  }
}
