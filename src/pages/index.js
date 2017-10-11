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
  navigate =  ()=> {
    window.location='/page-3'
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
                  <h1 className={'search-section-heading-1'} style={{'margin-top':'0px', 'padding-top':'30vh', 'color':'white', 'letter-spacing':'-2px',}}><strong>Looking for a Home? - We can Help!</strong></h1>
                  <h1 className={'search-section-heading-2 text-center'} style={{'margin-top':'0px', 'padding-top':'20vh', 'color':'white', 'letter-spacing':'-2px',}}><strong>Looking for a Home? <br /> We can Help!</strong></h1>
                  <p className={'search-section-para'} style={{'color':'white', 'margin':'auto', 'line-height': '150%', 'letter-spacing':'4px', 'word-spacing':'4px', 'font-weight':'300',}}>Pakistan’s Leading Real Estate Brand</p>
                  <div className={'input-field'} style={{'font-size':'18px',}}>
                      <input type={'search'} placeholder={'City'} style={{'border-radius':'5px 0px 0px 5px', 'width':'200px',}}/>
                      <input type={'search'} placeholder={'Area'} style={{'border-left':'1px solid #d8d8d8', 'width':'250px',}} />
                      <input type={'search'} placeholder={'Type'} style={{'border-left':'1px solid #d8d8d8', 'width':'250px',}} />
                      <button onClick={this.navigate} className={'input-submit'} type={'submit'} style={{'border-left':'1px solid #d8d8d8', 'width':'150px',}}>Buy</button>
                      <button onClick={this.navigate} className={'input-submit'} type={'submit'} style={{'border-left':'1px solid #8e8e8e', 'border-radius':'0px 5px 5px 0px', 'width':'150px',}}>Rent</button>
                  </div>
              </div>
          </section>
          <section id={'AboutUs'} className={'about-section text-center'}>
              <h1 className={'about-heading'} style={{'letter-spacing':'3px', 'color':'#595959',}}><strong>ABOUT US</strong></h1>
              <p className={'about-para'} style={{'color':'#5b5b5b', 'width':'75vw', 'margin':'auto', 'line-height': '180%',}}>Agency21 International is Pakistan’s first leading real estate brand, and is the only real estate chain in the twin cities. Being a sister company of Steptons International UK, Agency21 is the only brand to set global trends in Pakistan’s real estate sector. With an aim to revolutionise Pakistan's real estate and the conviction of changing the way of business, Agency21has introduced unparalleled standards of professionalism and transparency. We aim to provide you with an unmatched quality of service, clarity of transaction and complete legal cover which is being introduced for the first time in Pakistan.</p>
              <img className={'about-img'} src={'images/about_img.png'} />
              <h1 id={'HowItWorks'} className={'work-heading'} style={{'letter-spacing':'3px', 'color':'#595959',}}><strong>OUR SERVICES</strong></h1>
              <div className={'work-steps'}>
                  <figure><img className={'col-sm-3 tick'} src={'images/tick.png'} /><div className={'col-sm-9'}><h3><strong>Comparative Market Analysis (CMA)</strong></h3><p>A comparative and comprehensive estimate of your property’s value to help you in planning your future buying or selling.</p></div></figure>
                  <figure><img className={'col-sm-3 tick'} src={'images/tick.png'} /><div className={'col-sm-9'}><h3><strong>Exposure & Facilitation</strong></h3><p>Marketing your property to potential buyers and facilitating you through the whole property purchasing & selling process.</p></div></figure>
                  <figure><img className={'col-sm-3 tick'} src={'images/tick.png'} /><div className={'col-sm-9'}><h3><strong>Document & Legal cover</strong></h3><p>Providing you with complete legal cover and consultation through a certified legal firm, and preparing necessary paperwork for property transaction.</p></div></figure>
              </div>
              <div className={'container-fluid graded'} style={{'padding':'3vh 10vw 3vh 10vw', 'color':'white', 'margin-top':'50px',}}>
                  <h1><strong>A Game Changer - In Real Estate Agency of Pakistan</strong></h1><button className={'contact-btn'}><strong>Contact Us</strong></button>
              </div>
          </section>
          <section style={{'margin':'20px 0px 20px 0px'}}></section>
          <section className={'container-fluid'} style={{'padding':'0px', 'display':'none',}}>
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
