import React, { Children, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Layout({children}) {
    const location=useLocation()

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
const [menu,setmenu]=useState(false)
   useEffect(()=>{
setMobileMenuOpen(false)
   },[location.pathname])
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    
    };

    useEffect(()=>{
      window.scrollTo(0, 0);
    },[location.pathname])
  
  return (
    <>
   
     
    <div className="page-wrapper" id='top123'>
      <header className="main-header-three">
        <div className="main-menu-three__shape-1">
          <img src="/assets/images/shapes/main-menu-shape-1.png" alt="" />
        </div>
        <div className="main-header-three__top">
          <div className="main-header-three__top-wrapper">
            <div className="main-header-three__top-inner">
              <div className="main-header-three__top-left">
                <div className="main-header-three__location-box">
                  <div className="main-header-three__location-icon">
                    <span className="icon-email-3" />
                  </div>
                  <p lass="main-header-three__location-text">
                    <Link
                      onClick={()=>    window.scrollTo(0, 0)}
                      to="mailto:support@transxmarket.com"
                      style={{ color: "white" }}
                    >
                      support@transxmarket.com
                    </Link>
                  </p>
                </div>
              </div>
              <div className="main-header-three__top-right">
                {/*<ul class="main-header-three__contact-list list-unstyled topbar-action">*/}
                {/*    <li>*/}
                {/*        <div class="content">*/}
                {/*            <h4 style="color: white;"><Link 
                to="/support.php">Support</Link></h4>*/}
                {/*        </div>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*    <div class="content">*/}
                {/*            <h4 style="color: white;">|</h4>*/}
                {/*        </div>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <div class="content">*/}
                {/*            <h4 style="color: white;"><Link 
                to="/support.php">Help Centre</Link></h4>*/}
                {/*        </div>*/}
                {/*    </li>*/}
                {/*</ul>*/}
              </div>
            </div>
          </div>
        </div>
        <nav className="main-menu main-menu-three">
          <div className="main-menu-three__wrapper">
            <div className="main-menu-three__wrapper-inner">
              <div className="main-menu-three__left">
                <div className="main-menu-three__logo">
                  <Link 
                  onClick={()=>    window.scrollTo(0, 0)}
                  to="/">
                    <img src="/assets/Trans-X-Markets-Logo-165x60.png" alt="" />
                  </Link>
                </div>
                <div className="main-menu-three__main-menu-box">
                  <Link   className="mobile-nav__toggler" onClick={toggleMobileMenu}>
                    <i className="fa fa-bars" />
                  </Link>
                  <ul className="main-menu__list">
                    <li className="dropdown">
                      <Link onClick={()=>    window.scrollTo(0, 0)} className='ex'  style={{
                        color:(location?.pathname?.includes("whytochoose")||
                        location?.pathname?.includes("deposit")||
                        location?.pathname?.includes("trading")||
                        location?.pathname?.includes("insurance"))&&"#fd8e44"}}>
                        Quick start <i className="ri-arrow-down-s-line" />

           
                      </Link>
                      <ul>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/whytochoose">
                            Why to choose Transxmarkets{" "}
                          </Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/deposit">
                            How can i deposit and withdraw
                          </Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/trading">Type of trading account?</Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/insurance">
                            How does our insurance work?
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link onClick={()=>    window.scrollTo(0, 0)} style={{
                        color:(location?.pathname?.includes("trade5")||
                        location?.pathname?.includes("webtrader")||
                        location?.pathname?.includes("transxcopytrade")||
                        location?.pathname?.includes("vps"))&&"#fd8e44"}}>Trading</Link>
                      <ul>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/trade5">Meta trader 5</Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/webtrader">Web trader</Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/transxcopytrade">TransX copy trade</Link>
                        </li>
                        <li className="nav-item">
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/vps">VPS service </Link>{" "}
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link onClick={()=>    window.scrollTo(0, 0)} style={{
                        color:(location?.pathname?.includes("forex")||
                        location?.pathname?.includes("commodity")||
                        location?.pathname?.includes("stock")||
                        location?.pathname?.includes("crypto")||
                        location?.pathname?.includes("indices"))&&"#fd8e44"}}> Markets</Link>
                      <ul>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/forex">Forex</Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/commodity">Commodity</Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/stock">Stocks</Link>
                        </li>
                        <li>
                          <Link
                          onClick={()=>    window.scrollTo(0, 0)} 
                          to="/indices">Indices</Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/crypto">Crypto</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link onClick={()=>    window.scrollTo(0, 0)} style={{
                        color:(location?.pathname?.includes("day_trading")||
                        location?.pathname?.includes("scalp")||
                        location?.pathname?.includes("chart_analysis")||
                        location?.pathname?.includes("news_and_events")||
                        location?.pathname?.includes("marketpsycology"))&&"#fd8e44"}}> Education</Link>
                      <ul>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/day_trading" className="nav-link">
                            Day trading strategies
                          </Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/scalp" className="nav-link">
                            Scalping strategies
                          </Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/chart_analysis" className="nav-link">
                            Chart analysis
                          </Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/news_and_events" className="nav-link">
                            News and Events
                          </Link>
                        </li>
                        {/* <li class="nav-item">
                                        <Link 
                                        to="/swingtrading.php" class="nav-link">Swing trading</Link>
                                    </li> */}
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/marketpsycology" className="nav-link">
                            Market Psychology
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link 
                      onClick={()=>    window.scrollTo(0, 0)}
                      to="/smart_invesment_plan" style={{
                        color:location?.pathname?.includes("smart_invesment_plan")&&"#fd8e44"}} > Smart Investment</Link>
                    </li>
                    <li>
                      <Link 
                      onClick={()=>    window.scrollTo(0, 0)}
                      to="/partner" style={{
                        color:location?.pathname?.includes("partner")&&"#fd8e44"}} >  Partner</Link>
                    </li>
                    <li>
                      <Link 
                      onClick={()=>    window.scrollTo(0, 0)}
                      to="/about" style={{
                        color:location?.pathname?.includes("about")&&"#fd8e44"}} >About Us</Link>
                    </li>
                    <li>
                      <Link 
                      onClick={()=>    window.scrollTo(0, 0)}
                      to="/support" style={{
                        color:location?.pathname?.includes("support")&&"#fd8e44"}} >Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="main-menu-three__right">
                {/* <div class="main-menu-three__consultant-box">
                            <p class="main-menu-three__consultant-text"> <span class="icon-idea-3"></span> Find
                                Consultant</p>
                            <Link 
                            to="/contact" class="main-menu-three__consultant-btn">Consultant</Link>
                        </div> */}
                <div className="main-menu-three__search-box">
                  <Link
                    
                    to="https://member.transxmarket.com/login"
                    className="main-menu-three__search "
                  >
                    {" "}
                    Log In
                  </Link>
                </div>
                <br />
                <div className="main-menu-three__search-box1">
                  <Link
                    
                    to="https://member.transxmarket.com/register"
                    className="main-menu-three__search1 "
                  >
                    {" "}
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
   
      <div className="stricky-header stricked-menu main-menu main-menu-three">
  <div className="sticky-header__content" >
  <header className="main-header-three">
        
      
        <nav className="main-menu main-menu-three">
          <div className="main-menu-three__wrapper">
            <div className="main-menu-three__wrapper-inner">
              <div className="main-menu-three__left">
                <div className="main-menu-three__logo">
                  <Link 
                  onClick={()=>    window.scrollTo(0, 0)}
                  to="/">
                    <img src="/assets/Trans-X-Markets-Logo-165x60.png" alt="" />
                  </Link>
                </div>
                <div className="main-menu-three__main-menu-box">
                  <Link   className="mobile-nav__toggler" onClick={toggleMobileMenu}>
                    <i className="fa fa-bars" />
                  </Link>
                  <ul className="main-menu__list">
                    <li className="dropdown">
                      <Link onClick={()=>    window.scrollTo(0, 0)} className='ex'  style={{
                        color:(location?.pathname?.includes("whytochoose")||
                        location?.pathname?.includes("deposit")||
                        location?.pathname?.includes("trading")||
                        location?.pathname?.includes("insurance"))&&"#fd8e44"}}>
                        Quick start <i className="ri-arrow-down-s-line" />

           
                      </Link>
                      <ul>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/whytochoose">
                            Why to choose Transxmarkets{" "}
                          </Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/deposit">
                            How can i deposit and withdraw
                          </Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/trading">Type of trading account?</Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/insurance">
                            How does our insurance work?
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link onClick={()=>    window.scrollTo(0, 0)} style={{
                        color:(location?.pathname?.includes("trade5")||
                        location?.pathname?.includes("webtrader")||
                        location?.pathname?.includes("transxcopytrade")||
                        location?.pathname?.includes("vps"))&&"#fd8e44"}}>Trading</Link>
                      <ul>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/trade5">Meta trader 5</Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/webtrader">Web trader</Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/transxcopytrade">TransX copy trade</Link>
                        </li>
                        <li className="nav-item">
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/vps">VPS service </Link>{" "}
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link onClick={()=>    window.scrollTo(0, 0)} style={{
                        color:(location?.pathname?.includes("forex")||
                        location?.pathname?.includes("commodity")||
                        location?.pathname?.includes("stock")||
                        location?.pathname?.includes("crypto")||
                        location?.pathname?.includes("indices"))&&"#fd8e44"}}> Markets</Link>
                      <ul>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/forex">Forex</Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/commodity">Commodity</Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/stock">Stocks</Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/indices">Indices</Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/crypto">Crypto</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link onClick={()=>    window.scrollTo(0, 0)} style={{
                        color:(location?.pathname?.includes("day_trading")||
                        location?.pathname?.includes("scalp")||
                        location?.pathname?.includes("chart_analysis")||
                        location?.pathname?.includes("news_and_events")||
                        location?.pathname?.includes("marketpsycology"))&&"#fd8e44"}}> Education</Link>
                      <ul>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/day_trading" className="nav-link">
                            Day trading strategies
                          </Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/scalp" className="nav-link">
                            Scalping strategies
                          </Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/chart_analysis" className="nav-link">
                            Chart analysis
                          </Link>
                        </li>
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/news_and_events" className="nav-link">
                            News and Events
                          </Link>
                        </li>
                        {/* <li class="nav-item">
                                        <Link 
                                        to="/swingtrading.php" class="nav-link">Swing trading</Link>
                                    </li> */}
                        <li>
                          <Link 
                          onClick={()=>    window.scrollTo(0, 0)}
                          to="/marketpsycology" className="nav-link">
                            Market Psychology
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link 
                      onClick={()=>    window.scrollTo(0, 0)}
                      to="/smart_invesment_plan" style={{
                        color:location?.pathname?.includes("smart_invesment_plan")&&"#fd8e44"}} > Smart Investment</Link>
                    </li>
                    <li>
                      <Link 
                      onClick={()=>    window.scrollTo(0, 0)}
                      to="/partner" style={{
                        color:location?.pathname?.includes("partner")&&"#fd8e44"}} >  Partner</Link>
                    </li>
                    <li>
                      <Link 
                      onClick={()=>    window.scrollTo(0, 0)}
                      to="/about" style={{
                        color:location?.pathname?.includes("about")&&"#fd8e44"}} >About Us</Link>
                    </li>
                    <li>
                      <Link 
                      onClick={()=>    window.scrollTo(0, 0)}
                      to="/support" style={{
                        color:location?.pathname?.includes("support")&&"#fd8e44"}} >Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="main-menu-three__right">
                {/* <div class="main-menu-three__consultant-box">
                            <p class="main-menu-three__consultant-text"> <span class="icon-idea-3"></span> Find
                                Consultant</p>
                            <Link 
                            to="/contact" class="main-menu-three__consultant-btn">Consultant</Link>
                        </div> */}
                <div className="main-menu-three__search-box">
                  <Link
                    
                    to="https://member.transxmarket.com/login"
                    className="main-menu-three__search "
                  >
                    {" "}
                    Log In
                  </Link>
                </div>
                <br />
                <div className="main-menu-three__search-box1">
                  <Link
                    
                    to="https://member.transxmarket.com/register"
                    className="main-menu-three__search1 "
                  >
                    {" "}
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
  </div>

</div>

    
      
 
     
{children}
     
    </div>
   
        <footer className="site-footer-two" style={{overflow:'hidden'}}>
          <div className="site-footer__shape-1 float-bob-x">
            <img src="/assets/images/shapes/site-footer-shape-1.png" alt="" />
          </div>
          <div className="site-footer__shape-2 img-bounce">
            <img src="/assets/images/shapes/site-footer-two-shape-1.png" alt="" />
          </div>
          <div className="site-footer__shape-3 float-bob-y">
            <img src="/assets/images/shapes/site-footer-shape-3.png" alt="" />
          </div>
          <div className="site-footer__shape-4 img-bounce">
            <img src="/assets/images/shapes/site-footer-two-shape-2.png" alt="" />
          </div>
          <div className="site-footer__shape-5 float-bob-x">
            <img src="/assets/images/shapes/site-footer-shape-5.png" alt="" />
          </div>
          <div className="site-footer__shape-6 float-bob-y">
            <img src="/assets/images/shapes/site-footer-shape-6.png" alt="" />
          </div>
          <div
            className="site-footer-two__bg-one"
            style={{
              backgroundImage:
                "url(/assets/images/backgrounds/site-footer-two-bg.jpg)"
            }}
          />
          <div
            className="site-footer-two__bg-two"
            style={{
              backgroundImage:
                "url(/assets/images/backgrounds/site-footer-two-bg-2)"
            }}
          />
          <div className="site-footer__top">
            <div className="container">
              <div className="row">
                <div
                  className="col-xl-2 col-lg-2 col-md-2 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="footer-widget__column footer-widget-two__about">
                    <div className="footer-widget-two__logo">
                      <Link 
                      onClick={()=>    window.scrollTo(0, 0)}
                      to="/">
                        <img
                          src="/assets/Trans-X-Markets-Logo-260x95.png"
                          alt=""
                          style={{ height: 85, width: 200 }}
                        />
                      </Link>
                    </div>
                    {/* <h4 class="text-white">Registered Office</h4> */}
                    {/* <p class="footer-widget-two__about-text">
                            No.55/9,
  1st Floor,Karikaalan Street,
  Paari Nagar,
  Jafferkhanpet,<br>
  Chennai – 600 083 </p>*/}
                    <div className="footer-widget-two__latest-post-content"></div>
                  </div>
                </div>
                {/* <div class="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div class="footer-widget__column footer-widget-two__explore">
                            <div class="footer-widget-two__title-box">
                                <h4 class="footer-widget-two__title">Explore Link</h4>
                            </div>
                            <ul class="footer-widget-two__explore-list list-unstyled">
                                <li><Link >Cookie Policy</Link></li>
                                <li><Link >Regulatory/compliance</Link></li>
                                <li><Link >Privacy Policy</Link></li>
                                <li><Link >Risk Disclosure</Link></li>
                                <li><Link >Safety Of Fund</Link></li>
                                <li><Link >Terms and Conditions</Link></li>
                                <li><Link >Client Agreement</Link></li>
                            </ul>
                        </div>
                    </div> */}
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="footer-widget-two__latest-post">
                    <div className="footer-widget-two__title-box">
                      <h4
                        className="footer-widget-two__title"
                        style={{ paddingLeft: 20 }}
                      >
                        About Us
                      </h4>
                    </div>
                    <ul className="footer-widget-two__latest-post-list list-unstyled">
                      <li>
                        <div className="footer-widget-two__latest-post-content">
                          <h5
                            className="footer-widget-two__latest-post-title"
                            style={{ color: "white" }}
                          >
                            Forex trading is the buying and selling of currencies
                            to make a profit from fluctuations in their value
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget-two__latest-post-content">
                          <h5
                            className="footer-widget-two__latest-post-title"
                            style={{ color: "white" }}
                          >
                            The 24/7 Forex Trading: Opportunities Don't Sleep, and
                            Neither Do We.
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="footer-widget__column footer-widget-two__explore">
                    <div className="footer-widget-two__title-box">
                      <h4 className="footer-widget-two__title">Quick Link</h4>
                    </div>
                    <ul className="footer-widget-two__explore-list list-unstyled">
                      <li>
                        <Link 
                        onClick={()=>    window.scrollTo(0, 0)}
                        to="/forex">Forex Trading</Link>
                      </li>
                      <li>
                        <Link 
                        onClick={()=>    window.scrollTo(0, 0)}
                        to="/commodity">Commodity Trading</Link>
                      </li>
                      <li>
                        <Link 
                        onClick={()=>    window.scrollTo(0, 0)}
                        to="/stock">Stocks Trading</Link>
                      </li>
                      <li>
                        <Link 
                        onClick={()=>    window.scrollTo(0, 0)}
                        to="/indices">Indices Trading</Link>
                      </li>
                      <li>
                        <Link 
                        onClick={()=>    window.scrollTo(0, 0)}
                        to="/crypto">Crypto Trading</Link>
                      </li>
                      <li>
                        <Link 
                        onClick={()=>    window.scrollTo(0, 0)}
                        to="/vps">VPS Service</Link>
                      </li>
                      <li>
                        <Link 
                        onClick={()=>    window.scrollTo(0, 0)}
                        to="/aml_policy">AML Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="footer-widget__column footer-widget-two__explore">
                    <div className="footer-widget-two__title-box">
                      <h4 className="footer-widget-two__title">Explore Link</h4>
                    </div>
                    <ul className="footer-widget-two__explore-list list-unstyled">
                      <li>
                        <Link 
                        onClick={()=>    window.scrollTo(0, 0)}
                        to="/privacy_policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link 
                        onClick={()=>    window.scrollTo(0, 0)}
                        to="/terms">Terms and Conditions</Link>
                      </li>
                      <li>
                        <Link 
                        onClick={()=>    window.scrollTo(0, 0)}
                        to="/disclaimer">Risk Disclosure</Link>
                      </li>
                      <li>
                        <Link onClick={()=>    window.scrollTo(0, 0)}>Safety Of Fund</Link>
                      </li>
                      <li>
                        <Link 
                        onClick={()=>    window.scrollTo(0, 0)}
                        to="/cookies">Cookie Policy</Link>
                      </li>
                      <li>
                        <Link 
                        onClick={()=>    window.scrollTo(0, 0)}
                        to="/Clients">Client Agreement</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <p
                  style={{
                    color: "white",
                    fontSize: 13,
                    textAlign: "justify",
                    fontWeight: 500
                  }}
                >
                  Legal: Trans X Market Limited, authorised and incorporated by
                  the Financial Services Registry of St.Lucia ,IBC no
                  (2023-00543).
                  <br />
                  Risk Statement: An investment in derivatives may mean investors
                  may lose an amount even greater than their original investment.
                  Anyone wishing to invest in any of the products mentioned in
                  transxmarket.com should seek their own financial or professional
                  advice. Trading of securities, forex, stock market, commodities,
                  options, and futures may not be suitable for everyone and
                  involves the risk of losing part or all of your money. Trading
                  in the financial markets has large potential rewards, but also
                  large potential risk. You must be aware of the risks and be
                  willing to accept them in order to invest in the markets. Don't
                  invest and trade with money which you can't afford to lose.
                  Forex trading is not allowed in some countries. Before investing
                  your money, make sure whether your country is allowing this or
                  not.
                  <br />
                  You are strongly advised to obtain independent financial, legal,
                  and tax advice before proceeding with any currency or spot
                  metals trade. Nothing in this site should be read or construed
                  as constituting advice on the part of TransX Markets Limited or
                  any of its affiliates, directors, officers, or employees.
                  <br />
                  Restricted Regions: TransX Markets Limited does not provide
                  services for citizens/residents of the United States, Cuba,
                  Iraq, Myanmar, North Korea, and Sudan. The services of TransX
                  Markets Limited are not intended for distribution to, or use by,
                  any person in any country or jurisdiction where such
                  distribution or use would be contrary to local law or
                  regulation. (OR) Information on this site is not directed at
                  residents in any country or jurisdiction where such distribution
                  or use would be contrary to local law or regulation.
                </p>
              </div>
            </div>
          </div>
          <div className="site-footer__bottom">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="site-footer__bottom-inner">
                    <div className="site-footer__social">
                      {/* <p class="site-footer__social-tag">Social</p> */}
                      <ul className="site-footer__social-box list-unstyled">
                        <li>
                          <Link >
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link >
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link >
                            <i className="fab fa-pinterest-p" />
                          </Link>
                        </li>
                        <li>
                          <Link >
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <p className="site-footer__bottom-text">
                      Copyright © {new Date().getFullYear()+" "}Trans X Market Limited. All Rights
                      Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        
        <div className={`mobile-nav__wrapper  ${isMobileMenuOpen ? 'expanded' : ''}`}>
          <div className="mobile-nav__overlay mobile-nav__toggler" />
     
          <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler" onClick={()=>{setMobileMenuOpen(false)}}>
              <i className="fa fa-times" />
              
            </span>
            <div className="logo-box">
              <Link 
              to="/" aria-label="logo image">
                <img
                  src="/assets/images/Trans-X-Markets-Logo-600x240.png"
                  width={260}
                  alt=""
                />
              </Link>
            </div>
         
            <div className="mobile-nav__container" >

            <ul className="main-menu__list">
                    <li className="dropdown">
                      <Link  onClick={()=>{if(menu=="quick"){
setmenu("")
                      }else{
                        setmenu("quick")
                      }
                    }}  style={{
                        color:(location?.pathname?.includes("whytochoose")||
                        location?.pathname?.includes("deposit")||
                        location?.pathname?.includes("trading")||
                        location?.pathname?.includes("insurance"))&&"#fd8e44"}}>
                        Quick start <i className="ri-arrow-down-s-line" />
                        <button aria-label="dropdown toggler" className={`${menu=="quick"&&"expanded"}`}>
  <i className="fa fa-angle-down" />
</button>
                      </Link>
                      <ul style={{display:menu=="quick"&&'block'}}>
                        <li>
                          <Link 
                          to="/whytochoose">
                            Why to choose Transxmarkets{" "}
                          </Link>
                        </li>
                        <li>
                          <Link 
                          to="/deposit">
                            How can i deposit and withdraw
                          </Link>
                        </li>
                        <li>
                          <Link 
                          to="/trading">Type of trading account?</Link>
                        </li>
                        <li>
                          <Link 
                          to="/insurance">
                            How does our insurance work?
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link onClick={()=>{if(menu=="trading"){
setmenu("")
                      }else{
                        setmenu("trading")
                      }
                    }}  style={{
                        color:(location?.pathname?.includes("trade5")||
                        location?.pathname?.includes("webtrader")||
                        location?.pathname?.includes("transxcopytrade")||
                        location?.pathname?.includes("vps"))&&"#fd8e44"}}>Trading
                        
                        <button aria-label="dropdown toggler" className={`${menu=="trading"&&"expanded"}`}>
  <i className="fa fa-angle-down" />
</button></Link>
                      <ul style={{display:menu=="trading"&&'block'}}>
                        <li>
                          <Link 
                          to="/trade5">Meta trader 5</Link>
                        </li>
                        <li>
                          <Link 
                          to="/webtrader">Web trader</Link>
                        </li>
                        <li>
                          <Link 
                          to="/transxcopytrade">TransX copy trade</Link>
                        </li>
                        <li className="nav-item">
                          <Link 
                          to="/vps">VPS service </Link>{" "}
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link  onClick={()=>{if(menu=="markets"){
setmenu("")
                      }else{
                        setmenu("markets")
                      }
                    }} style={{
                        color:(location?.pathname?.includes("forex")||
                        location?.pathname?.includes("commodity")||
                        location?.pathname?.includes("stock")||
                        location?.pathname?.includes("crypto")||
                        location?.pathname?.includes("indices"))&&"#fd8e44"}}> Markets
                                  <button aria-label="dropdown toggler" className={`${menu=="markets"&&"expanded"}`}>
  <i className="fa fa-angle-down" />
</button>
                        </Link>
                      <ul style={{display:menu=="markets"&&'block'}}>
                        <li>
                          <Link 
                          to="/forex">Forex</Link>
                        </li>
                        <li>
                          <Link 
                          to="/commodity">Commodity</Link>
                        </li>
                        <li>
                          <Link 
                          to="/stock">Stocks</Link>
                        </li>
                        <li>
                          <Link 
                          to="/indices">Indices</Link>
                        </li>
                        <li>
                          <Link 
                          to="/crypto">Crypto</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link  onClick={()=>{if(menu=="education"){
setmenu("")
                      }else{
                        setmenu("education")
                      }
                    }} style={{
                        color:(location?.pathname?.includes("day_trading")||
                        location?.pathname?.includes("scalp")||
                        location?.pathname?.includes("chart_analysis")||
                        location?.pathname?.includes("news_and_events")||
                        location?.pathname?.includes("marketpsycology"))&&"#fd8e44"}}> Education
                                  <button aria-label="dropdown toggler" className={`${menu=="education"&&"expanded"}`}>
  <i className="fa fa-angle-down" />
</button>
                        
                        </Link>
                      <ul style={{display:menu=="education"&&'block'}}>
                        <li>
                          <Link 
                          to="/day_trading" className="nav-link">
                            Day trading strategies
                          </Link>
                        </li>
                        <li>
                          <Link 
                          to="/scalp" className="nav-link">
                            Scalping strategies
                          </Link>
                        </li>
                        <li>
                          <Link 
                          to="/chart_analysis" className="nav-link">
                            Chart analysis
                          </Link>
                        </li>
                        <li>
                          <Link 
                          to="/news_and_events" className="nav-link">
                            News and Events
                          </Link>
                        </li>
                        {/* <li class="nav-item">
                                        <Link 
                                        to="/swingtrading.php" class="nav-link">Swing trading</Link>
                                    </li> */}
                        <li>
                          <Link 
                          to="/marketpsycology" className="nav-link">
                            Market Psychology
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link 
                      to="/smart_invesment_plan" style={{
                        color:location?.pathname?.includes("smart_invesment_plan")&&"#fd8e44"}} > Smart Investment</Link>
                    </li>
                    <li>
                      <Link 
                      to="/partner" style={{
                        color:location?.pathname?.includes("partner")&&"#fd8e44"}} >  Partner</Link>
                    </li>
                    <li>
                      <Link 
                      to="/about" style={{
                        color:location?.pathname?.includes("about")&&"#fd8e44"}} >About Us</Link>
                    </li>
                    <li>
                      <Link 
                      to="/support" style={{
                        color:location?.pathname?.includes("support")&&"#fd8e44"}} >Contact Us</Link>
                    </li>
                  </ul>
            </div>
            {/* /.mobile-nav__container */}
            <ul className="mobile-nav__contact list-unstyled">
              <li>
                <Link
                  
                  to="https://member.transxmarket.com/login"
                  className="btn btn-3"
                >
                  {" "}
                  Log In
                </Link>{" "}
                <Link
                  
                  to="https://member.transxmarket.com/register"
                  className="btn btn-4"
                >
                  {" "}
                  Register
                </Link>
              </li>
              <li>
                <i className="fa fa-envelope" />
                <Link 
                to="/mailto:support@transxmarket.com">
                  {" "}
                  support@transxmarket.com
                </Link>
              </li>
              <li>
                <i className="search-toggler icon-search" />
                <Link >Help Centre</Link>
              </li>
            </ul>
            {/* /.mobile-nav__contact */}
            <div className="mobile-nav__top">
              <div className="mobile-nav__social">
                <Link  className="fab fa-twitter" />
                <Link  className="fab fa-facebook-square" />
                <Link  className="fab fa-pinterest-p" />
                <Link  className="fab fa-instagram" />
              </div>
              {/* /.mobile-nav__social */}
            </div>
            {/* /.mobile-nav__top */}
          </div>
          {/* /.mobile-nav__content */}
        </div>
        
      
        <a href={"#top123"}  data-target="html" className="scroll-to-target scroll-to-top" >
          <i className="fa fa-angle-up" />
        </a>
        
     
  </>
  

  )
}

export default Layout
