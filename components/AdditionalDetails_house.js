import React from 'react'
import { Grid, Col, Button, Modal } from 'react-bootstrap'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Row } from 'react-bootstrap'

export default class AdditionalDetails_house extends React.Component {
  componentDidMount() {
    var start = 2017;
    var end = 1900;
    var options = "<option>Made in</option>";
    for(var year = start; year >= end; year--){
      options += "<option>"+ year +"</option>";
    }
    document.getElementById("year").innerHTML = options;
  }
  render() {
    return(
      <div>
        <div className={"row"}>
          <Col md={4} xs={12} className={'arrow-in'}>
            <select id={"year"} style={{'padding':'10px 15px', 'border':'1px solid #cecece', 'border-radius':'0px', 'margin-top':'20px', 'width':'100%', }}></select>
            <div className={'arrow-1'}></div>
          </Col>
          <Col md={4} xs={12} className={'arrow-in'}>
            <select style={{'padding':'10px 15px', 'border':'1px solid #cecece', 'border-radius':'0px', 'margin-top':'20px', 'width':'100%', }}>
              <option>No. of Bathrooms</option>
              <option>1 Bathroom</option>
              <option>2 Bathrooms</option>
              <option>3 Bathrooms</option>
              <option>4 Bathrooms</option>
              <option>5 Bathrooms</option>
              <option>6 Bathrooms</option>
              <option>7 Bathrooms</option>
              <option>8 Bathrooms</option>
              <option>9 Bathrooms</option>
              <option>10 Bathrooms</option>
            </select>
            <div className={'arrow-1'}></div>
          </Col>
        </div>
        <div className={"row"}>
          <Col md={4} xs={12} className={'arrow-in'}>
            <select style={{'padding':'10px 15px', 'border':'1px solid #cecece', 'border-radius':'0px', 'margin-top':'20px', 'width':'100%', }}>
              <option>No. of Bedrooms</option>
              <option>1 Bedroom</option>
              <option>2 Bedrooms</option>
              <option>3 Bedrooms</option>
              <option>4 Bedrooms</option>
              <option>5 Bedrooms</option>
              <option>6 Bedrooms</option>
              <option>7 Bedrooms</option>
              <option>8 Bedrooms</option>
              <option>9 Bedrooms</option>
              <option>10 Bedrooms</option>
            </select>
            <div className={'arrow-1'}></div>
          </Col>
          <Col md={4} xs={12} className={'arrow-in'}>
            <select style={{'padding':'10px 15px', 'border':'1px solid #cecece', 'border-radius':'0px', 'margin-top':'20px', 'width':'100%', }}>
              <option>Parking Spaces</option>
              <option>1 Parking Space</option>
              <option>2 Parking Spaces</option>
              <option>3 Parking Spaces</option>
              <option>4 Parking Spaces</option>
              <option>5 Parking Spaces</option>
              <option>6 Parking Spaces</option>
              <option>7 Parking Spaces</option>
              <option>8 Parking Spaces</option>
              <option>9 Parking Spaces</option>
              <option>10 Parking Spaces</option>
            </select>
            <div className={'arrow-1'}></div>
          </Col>
        </div>
        <hr />
        <Col md={6} xs={12}>
          <h4 style={{"color":"#666666", }}>Additional Features</h4>
          <hr />
          <Col md={6} xs={12} style={{'padding':'0',}}>
            <Col xs={12} md={12} style={{'padding':'0',}}>
              <input type={"checkbox"} id={"ft-1"} name={"additional_features"} value={"central heating"} />
              <label for={"ft-1"}>Central Heating</label>
            </Col>
            <Col xs={12} md={12} style={{'padding':'0',}}>
              <input type={"checkbox"} id={"ft-2"} name={"additional_features"} value={"central cooling"} />
              <label for={"ft-2"}>Central Cooling</label>
            </Col>
            <Col xs={12} md={12} style={{'padding':'0',}}>
              <input type={"checkbox"} id={"ft-3"} name={"additional_features"} value={"dirty kitchen"} />
              <label for={"ft-3"}>Dirty Kitchen</label>
            </Col>
            <Col xs={12} md={12} style={{'padding':'0',}}>
              <input type={"checkbox"} id={"ft-4"} name={"additional_features"} value={"lawn"} />
              <label for={"ft-4"}>Lawn</label>
            </Col>
            <Col xs={12} md={12} style={{'padding':'0',}}>
              <input type={"checkbox"} id={"ft-5"} name={"additional_features"} value={"swimming pool"} />
              <label for={"ft-5"}>Swimming Pool</label>
            </Col>
          </Col>
          <Col md={6} xs={12} style={{'padding':'0',}}>
            <Col xs={12} md={12} style={{'padding':'0',}}>
              <input type={"checkbox"} id={"ft-6"} name={"additional_features"} value={"furnished"} />
              <label for={"ft-6"}>Furnished</label>
            </Col>
            <Col xs={12} md={12} style={{'padding':'0',}}>
              <input type={"checkbox"} id={"ft-7"} name={"additional_features"} value={"wifi"} />
              <label for={"ft-7"}>Wi-fi</label>
            </Col>
            <Col xs={12} md={12} style={{'padding':'0',}}>
              <input type={"checkbox"} id={"ft-8"} name={"additional_features"} value={"balcony"} />
              <label for={"ft-8"}>Balcony</label>
            </Col>
            <Col xs={12} md={12} style={{'padding':'0',}}>
              <input type={"checkbox"} id={"ft-9"} name={"additional_features"} value={"laundry room"} />
              <label for={"ft-9"}>Laundry Room</label>
            </Col>
            <Col xs={12} md={12} style={{'padding':'0',}}>
              <input type={"checkbox"} id={"ft-10"} name={"additional_features"} value={"servant quarter"} />
              <label for={"ft-10"}>Servant Quarter</label>
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
              <input type={"checkbox"} id={"ut-3"} name={"utilities"} value={"maintenance"} />
              <label for={"ut-3"}>Maintenance</label>
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
