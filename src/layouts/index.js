import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import 'jquery/src/jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'


const Header = () => (
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
                      <li><a onClick={'#AboutUs'}>ABOUT</a></li>
                      <li><a>PROPERTY LISTINGS</a></li>
                      <li><a onClick={'#HowItWorks'}>HOW IT WORKS</a></li>
                      <li><a>CONTACT</a></li>
                  </ul>
              </div>
          </nav>
      </div>
  </section>
)

const Footer = () => (
  <section className={'footer'} style={{'background-color':'#444444', 'color':'white',}}>
      <div className={'row'} style={{'width':'90%', 'margin-left':'auto', 'margin-right':'auto', 'padding':'50px 0px 30px 0px',}}>
          <div className={'col-sm-4'}>
              <img className={'footer-logo'} src={'images/footer-logo.png'} />
              <p className={'col-sm-12 footer-para'}>Impetus oportere prodesset his ut, fabellas tincidunt qui te. Sit porro adversarium ea. An usu nullam noster rationibus, agam dicam eu nec, audire comprehensam ut eos.</p>
          </div>
          <div className={'col-sm-2'}>
              <h3 style={{'margin-bottom':'20px',}}>Agency 21</h3>
              <a className={'short-footer-links'} onClick={'#AboutUs'}>About Us</a><br />
              <a className={'short-footer-links'}>Property Listings</a><br />
              <a className={'short-footer-links'} onClick={'#HowItWorks'}>How it works</a><br />
              <a className={'short-footer-links'}>Contact</a>
          </div>
          <div className={'col-sm-3 office'}>
              <h3 style={{'margin-bottom':'20px',}}>Head Office</h3>
              <div className={'row'}><img className={'col-sm-2'} src={'images/mail-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}>info&#64;agency21.com</p></div>
              <div className={'row'}><img className={'col-sm-2'} src={'images/phone-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}>&#43;92&#45;331&#45;2178621</p></div>
              <div className={'row'}><img className={'col-sm-2'} src={'images/map-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}>1921 Lorem Impsum Ave, Suit 3 <br /> Behria Town Islamabad.</p></div>
          </div>
          <div className={'col-sm-3 office'}>
              <h3 style={{'margin-bottom':'20px',}}>Regional Office</h3>
              <div className={'row'}><img className={'col-sm-2'} src={'images/mail-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}>info&#64;agency21.com</p></div>
              <div className={'row'}><img className={'col-sm-2'} src={'images/phone-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}>&#43;92&#45;331&#45;2178621</p></div>
              <div className={'row'}><img className={'col-sm-2'} src={'images/map-icon.png'} style={{'width':'50px', 'margin-top':'5px',}} /><p className={'col-sm-6'} style={{'line-height':'170%',}}>1921 Lorem Impsum Ave, Suit 3 <br /> Behria Town Islamabad.</p></div>
          </div>
      </div>
      <div className={'row copy-right'} style={{'width':'89%', 'margin-right':'auto', 'margin-left':'auto', 'padding':'30px 0px 30px 0px', 'color':'#a0a0a0',}}>
          <footer>Copyright &copy; Agency21Pvt Ltd. All rights reserved.</footer>
          <div className={'row social'} style={{'padding-right':'20px',}}>
              <a><img src={'images/fb-icon.png'} style={{'height':'22px', 'padding-right':'15px',}} /></a>
              <a><img src={'images/twitter-icon.png'} style={{'height':'20px', 'padding-right':'15px',}} /></a>
              <a><img src={'images/gmail-icon.png'} style={{'height':'20px', 'padding-right':'15px',}} /></a>
              <a><img src={'images/instagram-icon.png'} style={{'height':'20px',}} /></a>
          </div>
      </div>
  </section>
)

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
