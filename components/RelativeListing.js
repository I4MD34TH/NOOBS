import React from 'react'

export default class RelativeListing extends React.Component {
  navigatedetails = ()=> {
    window.location='../PropertyPage'
  }
  render () {
    return (
      <a onClick={this.navigatedetails}>
        <img src={this.props.data.imgUrl} style={{'width':'100px', 'float':'left', 'margin-right':'10px', }} />
        <h4>{this.props.data.title}</h4>
        <p>{this.props.data.location}</p>
        <p>View Details</p>
      </a>
    )
  }
}
