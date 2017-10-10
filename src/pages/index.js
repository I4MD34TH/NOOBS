import React from 'react'
import PropertyTile from '../../components/AgencyTile'

export default class IndexPage extends React.Component {
  constructor (props) {
    super(props);
    console.log('abc');
    this.state = {
      listingsData: [],
    }
  }
  componentDidMount() {
    var listingsData = [
      {
        title: '12 Marla House for sale',
        location:'Dha 2',
        area: '12 Marla',
        status: 'Sold',
        bed: 2,
        bath:2,
        garage:1,
        imgUrl:'https://static1.squarespace.com/static/53690146e4b094e1f0fb2239/t/58fe960a197aea4f7f27993b/1493324448380/',
      },
      {
        title: '10 Marla House for sale',
        location:'Bahria',
        area: '10 Marla',
        status: 'Available',
        bed: 3,
        bath:3,
        garage:0,
        imgUrl:'https://static1.squarespace.com/static/53690146e4b094e1f0fb2239/t/58fe960a197aea4f7f27993b/1493324448380/',
      }
    ]

    this.setState({
      listingsData,
    })
  }
  render () {
    return (
      <div>
          <section className={'search-section'} style={{'height':'100vh', 'background-color': '#75ce69', 'background-image': 'url(images/header_background.jpg)', 'background-position': 'bottom', 'z-index':'2',}}>
              <div className={'text-center'}>
                  <h1 className={'search-section-heading-1'} style={{'margin-top':'0px', 'padding-top':'24vh', 'color':'white', 'letter-spacing':'-2px',}}><strong>Looking for a Home? - We can Help!</strong></h1>
                  <h1 className={'search-section-heading-2 text-center'} style={{'margin-top':'0px', 'padding-top':'20vh', 'color':'white', 'letter-spacing':'-2px',}}><strong>Looking for a Home? <br /> We can Help!</strong></h1>
                  <p className={'search-section-para'} style={{'color':'white', 'margin':'auto', 'line-height': '150%',}}>We have stepped into Pakistans real estate market with the conviction of changing the image of this field in Pakistan</p>
                  <div className={'input-field'} style={{'font-size':'18px',}}>
                      <input type={'search'} placeholder={'City'} style={{'border-radius':'5px 0px 0px 5px', 'width':'200px',}}/>
                      <input type={'search'} placeholder={'Area'} style={{'border-left':'1px solid #d8d8d8', 'width':'250px',}} />
                      <input type={'search'} placeholder={'Type'} style={{'border-left':'1px solid #d8d8d8', 'width':'250px',}} />
                      <button className={'input-submit'} type={'submit'} style={{'border-left':'1px solid #d8d8d8', 'width':'150px',}}>Buy</button>
                      <button className={'input-submit'} type={'submit'} style={{'border-left':'1px solid #8e8e8e', 'border-radius':'0px 5px 5px 0px', 'width':'150px',}}>Rent</button>
                  </div>
              </div>
          </section>
          <section className={'about-section text-center'}>
              <h1 className={'about-heading'} style={{'letter-spacing':'3px', 'color':'#595959',}}><strong>ABOUT US</strong></h1>
              <p className={'about-para'} style={{'color':'#5b5b5b', 'width':'75vw', 'margin':'auto', 'line-height': '180%',}}>Impetus oportere prodesset his ut, fabellas tincidunt qui te. Sit porro adversarium ea. An usu nullam noster rationibus, agam dicam eu nec, audire comprehensam ut eos. Per sumo theophrastus et, ne mazim erroribus liberavisse has. Ius te eros timeam. Percipit disputando ea ius, rebum ancillae mei at. An est novum iusto nonumes. Sea animal consequat torquatos ne, probo noluisse accusata ne nec. Mel ut melius oporteat, has ea copiosae consulatu incorrupte.</p>
              <img className={'about-img'} src={'images/about_img.png'} />
              <h1 className={'work-heading'} style={{'letter-spacing':'3px', 'color':'#595959',}}><strong>SEE HOW IT WORKS</strong></h1>
              <div className={'work-steps'}>
                  <figure><img className={'col-sm-3 tick'} src={'images/tick.png'} /><div className={'col-sm-9'}><h3><strong>Choose what to do</strong></h3><p>Impetus oportere prodesset his ut, fabellas tincidunt qui te. Sit porro adversarium ea. An usu nullam noster rationibus, agam dicam eu nec, audire comprehensam ut eos. Per sumo theophrastus et, ne mazim erroribus liberavisse has.</p></div></figure>
                  <figure><img className={'col-sm-3 tick'} src={'images/tick.png'} /><div className={'col-sm-9'}><h3><strong>Find what you want</strong></h3><p>Impetus oportere prodesset his ut, fabellas tincidunt qui te. Sit porro adversarium ea. An usu nullam noster rationibus, agam dicam eu nec, audire comprehensam ut eos. Per sumo theophrastus et, ne mazim erroribus liberavisse has.</p></div></figure>
                  <figure><img className={'col-sm-3 tick'} src={'images/tick.png'} /><div className={'col-sm-9'}><h3><strong>Buy your dream property</strong></h3><p>Impetus oportere prodesset his ut, fabellas tincidunt qui te. Sit porro adversarium ea. An usu nullam noster rationibus, agam dicam eu nec, audire comprehensam ut eos. Per sumo theophrastus et, ne mazim erroribus liberavisse has.</p></div></figure>
              </div>
              <div className={'container-fluid graded'} style={{'padding':'3vh 10vw 3vh 10vw', 'color':'white', 'margin-top':'50px',}}>
                  <h1><strong>A Game Changer - In Real Estate Agency of Pakistan</strong></h1><button className={'contact-btn'}><strong>Contact Us</strong></button>
              </div>
          </section>
          <section className={'container-fluid'} style={{'padding':'0px',}}>
              <h1 className={'tile-heading text-center'}><strong>LISTED PROPERTIES</strong></h1>
              <div className={'container-fluid tiles'} style={{'display':'flex', 'flex-wrap':'wrap', 'margin-left':'auto', 'margin-right':'auto', 'margin-bottom':'70px',}}>
                {this.state.listingsData.map((listing, index)=>{
                  return <div className={'tile-1'} style={{'margin-left':'auto', 'margin-right':'auto',}}>
                       <PropertyTile data={listing}/>
                   </div>
                })}
              </div>
          </section>
      </div>
    )
  }
}
