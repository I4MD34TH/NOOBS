import React from 'react'

export default class PropertyTile extends React.Component {
  render() {
    return (
        <div className={'tile'}>
            <img className={'img-responsive'} src={this.props.data.imgUrl} />
            <div className={'inner-tile'}>
                <h3 style={{'color':'#555555',}}>{this.props.data.title}</h3>
                <p style={{'color':'#999999', 'padding-bottom':'20px',}}>{this.props.data.location}</p>
                <div className={'row container-fluid'}><p className={'pull-left'} style={{'color':'#999999',}}>Details:</p><p className={'pull-left'} style={{'margin-left':'5px',}}>{this.props.data.area}</p></div>
                <div className={'row container-fluid'}><p className={'pull-left'} style={{'color':'#999999',}}>Status: </p><p className={'pull-left'} style={{'margin-left':'5px',}}>{this.props.data.status}</p></div>
                <div className={'row common-details'} style={{'padding-top':'20px'}}>
                    <div className={'col-sm-4'}>
                        <img src={'images/bed-icon.png'} style={{'width':'25px',}} />
                        <p style={{'margin-left':'10px',}}>{this.props.data.bed} beds</p>
                    </div>
                    <div className={'col-sm-4'}>
                        <img src={'images/bath-icon.png'} style={{'width':'24px',}} />
                        <p style={{'margin-left':'10px',}}>{this.props.data.bath} baths</p>
                    </div>
                    <div className={'col-sm-4'}>
                        <img src={'images/garage-icon.png'} style={{'width':'20px',}} />
                        <p style={{'margin-left':'8px',}}>{this.props.data.garage} garage</p>
                    </div>
                </div>
                <a className={'details-link'} style={{'line-height':'500%',}}>View details</a>
            </div>
        </div>
    )
  }
}
