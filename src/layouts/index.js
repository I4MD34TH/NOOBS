import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import 'jquery/src/jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'
import Scrollchor from 'react-scrollchor';

class Header extends React.Component {
  navigate =  ()=> {
    window.location='/page-3'
  }
  render() {
    return (
        <section className={'header'} style={{'position':'absolute', 'z-index':'3', 'width':'100%',}}>
            <div className={'container-fluid'}>
                <nav className={'navbar'}>
                    <img className={'navbar-brand'} src={'images/logo-header.png'} />
                    <div className={'navbar-header'}>
                        <button type={'button'} className={'navbar-toggle'} data-toggle={'collapse'} data-target={'#header-navbar'}>
                            <span className={'glyphicon glyphicon-menu-hamburger'} style={{'color':'white', 'font-size':'24px',}}></span>
                        </button>
                    </div>
                    <div className={'collapse navbar-collapse'} id={'header-navbar'}>
                        <ul className={'nav navbar-nav navbar-right'} style={{'margin-top':'15px', 'font-size':'15px',}}>
                            <li><Scrollchor to={'#AboutUs'}><a>ABOUT</a></Scrollchor></li>
                            <li><a onClick={this.navigate}>PROPERTY LISTINGS</a></li>
                            <li><Scrollchor to={'#HowItWorks'}><a>HOW IT WORKS</a></Scrollchor></li>
                            <li><a onClick={this.navigate}>CONTACT</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
      )
    }
  }

class Footer extends React.Component {
    navigate =  ()=> {
      window.location='/page-3'
    }
    render() {
      return (
        <section className={'footer'} style={{'background-color':'#444444', 'color':'white',}}>
            <div className={'row'} style={{'width':'90%', 'margin-left':'auto', 'margin-right':'auto', 'padding':'50px 0px 30px 0px',}}>
                <div className={'col-sm-4'}>
                    <img className={'footer-logo'} src={'images/footer-logo.png'} />
                    <p className={'col-sm-12 footer-para'} style={{'font-size':'16px', 'color':'#ccc',}}>Agency21 is the leading real estate brand of Pakistan and aims to revolutionise the real estate sector of Pakistan.</p>
                </div>
                <div className={'col-sm-2'}>
                    <h3 style={{'margin-bottom':'20px',}}>Agency 21</h3>
                    <a className={'short-footer-links'}><Scrollchor to={'#AboutUs'}>About Us</Scrollchor></a><br />
                    <a className={'short-footer-links'} onClick={this.navigate}>Property Listings</a><br />
                    <a className={'short-footer-links'}><Scrollchor to={'#HowItWorks'}>How it works</Scrollchor></a><br />
                    <a className={'short-footer-links'} onClick={this.navigate}s>Contact</a>
                </div>
                <div className={'col-sm-3 office'}>
                    <h3 style={{'margin-bottom':'20px',}}>Head Office</h3>
                    <div className={'row'}><img className={'col-sm-2'} src={'images/mail-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}>info&#64;agency21.com</p></div>
                    <div className={'row'}><img className={'col-sm-2'} src={'images/map-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}>4th Floor, 44 East Plaza, Fazal-e-Haq Road, Blue Area, Islamabad</p></div>
                    <div className={'row'}><img className={'col-sm-2'} src={'images/phone-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}>&#43;92&#45;51&#45;8737777</p></div>
                    <div className={'row'}><img className={'col-sm-2'} src={'images/phone-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}><strong>UAN: 111&#45;021&#45;111</strong></p></div>
                </div>
                <div className={'col-sm-3 office'}>
                    <h3 style={{'margin-bottom':'20px',}}>Regional Offices</h3>
                    <div className={'row'}><img className={'col-sm-2'} src={'images/map-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}>Near DHA-2, Gate-1, Main G.T. Road, Islamabad</p></div>
                    <div className={'row'}><img className={'col-sm-2'} src={'images/map-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}>Plaza-91, Main Civic Center, Phase 1-4, Bahria Town</p></div>
                    <div className={'row'}><img className={'col-sm-2'} src={'images/map-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}>Office-1, Midway Commercial, Bahria Phase-7, Rawalpindi</p></div>
                </div>
            </div>
            <div className={'row copy-right'} style={{'width':'89%', 'margin-right':'auto', 'margin-left':'auto', 'padding':'30px 0px 30px 0px', 'color':'#a0a0a0',}}>
                <footer>Copyright &copy; Agency21Pvt Ltd. All rights reserved.</footer>
                <div className={'row social'} style={{'padding-right':'20px',}}>
                    <a href={'https://www.facebook.com/Agency21pk/'} target={'_blank'}><img src={'images/fb-icon.png'} style={{'height':'22px', 'padding-right':'15px',}} /></a>
                    <a href={'https://twitter.com/Agency21Pk?lang=en'} target={'_blank'}><img src={'images/twitter-icon.png'} style={{'height':'20px', 'padding-right':'15px',}} /></a>
                    <a href={'https://www.instagram.com/agency21pk/'} target={'_blank'}><img src={'images/instagram-icon.png'} style={{'height':'20px',}} /></a>
                </div>
            </div>
        </section>
      )
    }
  }

const TemplateWrapper = ({ children }) => (
  <div style={{'position':'relative', 'z-index':'1',}}>
    <Helmet title="Agency 21" meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' },]}/>
    <Header />
    <div>
      {children()}
    </div>
    <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
