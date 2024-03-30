import React from 'react'

function Meta() {
  return (
    <>
    <section>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-12 p-0 ">
            {/* <img src="/assets/images/trad5/b1.jpg" class="img-fluid p-0" alt="banner1"> */}
            <div className="trad5bg"style={{width:'100%'}}>
              <img
                src="/assets/images/trad5/b1.jpg"
                className="img-fluid p-0 img-2"
                style={{width:'100vw'}}
                alt="banner1"
              />
              <div className="tradebg p-4">
                <h3 className='h3-title pt-4'>
                  <b>Meta Trader 5</b>
                </h3>
                <p className="pt-4 p-para" style={{ color: "black", fontWeight: 600 }}>
                  The MT5 trading platform equips you with all the essentials for
                  navigating the financial markets. With its user-friendly
                  interface, MT5 can be tailored to accommodate both novices and
                  seasoned traders, offering an enriched array of advanced
                  functionalities.
                </p>
                <div className="cta-one__btn-box pt-3">
                  <a href="#" className="thm-btn cta-one__btn" id="thm-btn-meta">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Page hero End*/}
    {/*Why Choose One Start*/}
    <section className="why-choose-one" style={{ padding: "60px 0 50px" }}>
      {/* <div class="why-choose-one__bg"
            style="background-image: url(/assets/images/backgrounds/why-choose-one-bg.jpg);"></div> */}
      <div className="container">
        <div className="why-choose-one__top mt-5">
          <div className="row">
            <div className="col-xl-4">
              <img src="/assets/images/trad5/phone.png" className="img-fluid " />
            </div>
            <div className="col-xl-8">
              <div className="why-choose-one__left">
                <div className="section-title text-left">
                  <h2 className="section-title__title">Why trade with MT5</h2>
                  <p className="text-white">
                    Trans X Market is delighted to present our clients with the
                    opportunity to engage with MT5, one of the foremost trading
                    platforms on the global stage.
                    <br />
                    <br />
                    Experience MT5 on desktop, web, and mobile, leveraging its
                    diverse capabilities that encompass in-depth price analysis
                    tools, expert advisory features, and the convenience of copy
                    trading.
                  </p>
                </div>
              </div>
              <div className="row pt-5 text-white text-center">
                <div className="col-lg-4">
                  <img
                    src="/assets/images/trad5/2.jpg"
                    id="image-88-691"
                    alt="Tradable Assets icon"
                    style={{ height: 100, width: 130 }}
                  />
                  <br />
                  <p className="pt-3">26,000</p>
                  <p>Tradable Assets</p>
                </div>
                <div className="col-lg-4">
                  <img
                    id="image-91-691"
                    alt=""
                    src="/assets/images/trad5/3.jpg"
                    className="ct-image image-image"
                    srcSet=""
                    sizes="(max-width: 191px) 100vw, 191px"
                    style={{ height: 100, width: 130 }}
                  />
                  <br />
                  <p className="pt-3">MT5</p>
                  <p>Integrated</p>
                </div>
                <div className="col-lg-4">
                  <img
                    id="image-94-691"
                    alt=""
                    src="/assets/images/trad5/4.jpg"
                    className="ct-image image-image"
                    srcSet=""
                    sizes="(max-width: 191px) 100vw, 191px"
                    style={{ height: 100, width: 130 }}
                  />
                  <br />
                  <p className="pt-3">1:500</p>
                  <p>Leverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Why Choose One End*/}
    {/*  */}
    <section style={{ padding: "0px 0px 30px" }}>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-12 p-0 ">
            <div className="advc5">
              <img
                src="/assets/images/trad5/sec2bg.jpg"
                className="img-fluid p-0"
                alt="banner1"
                style={{ padding: "30px 0 30px" ,width:'100vw',height:'600px'}}
              />
              <div className="advc5con text-white">
                <h3 className="text-white">FEATURES</h3>
                <ul
                  className="mt-3 pt-2"
                  style={{
                    listStyleType: "none",
                    color: "white",
                    textAlign: "start",
                    paddingLeft: 5
                  }}
                >
                  <li>
                    <i className="bi bi-signpost-fill" />
                    &nbsp; Multiple Market Access
                  </li>
                  <li>
                    <i className="bi bi-signpost-fill" />
                    &nbsp; 21 Timeframes
                  </li>
                  <li>
                    <i className="bi bi-signpost-fill" />
                    &nbsp; Economic Calendar
                  </li>
                  <li>
                    <i className="bi bi-signpost-fill" />
                    &nbsp; 6 Order Types
                  </li>
                  <li>
                    <i className="bi bi-signpost-fill" />
                    &nbsp; Depth of Market (DOM)
                  </li>
                  <li>
                    <i className="bi bi-signpost-fill" />
                    &nbsp; Hedging
                  </li>
                  <li>
                    {" "}
                    <i className="bi bi-signpost-fill" />
                    &nbsp; 2659 available symbols
                  </li>
                  <li>
                    {" "}
                    <i className="bi bi-signpost-fill" />
                    &nbsp; Desktop, mobile and web browser applications
                  </li>
                  <li>
                    {" "}
                    <i className="bi bi-signpost-fill" />
                    &nbsp; 36 Indicators
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*  */}
    {/*About One Start*/}
    <section className="about-one" style={{ padding: "30px 0px 60px" }}>
      <div className="container">
        <div className="section-title text-center">
          <h2 className="section-title__title">MT4 Vs MT5 </h2>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="about-one__left">
              <div className="about-one__img-box">
                <div className="about-one__img">
                  <img src="/assets/images/trad5/mt4-mt5.png" alt="" />
                </div>
                <div className="about-one__img-2">
                  <img
                    src="/assets/images/resources/about-one-img-2.html"
                    alt=""
                  />
                  <div className="about-one__shape-4 float-bob-x" />
                </div>
                <div className="about-one__shape-1 float-bob-x" />
                <div className="about-one__shape-2 float-bob-y" />
                <div className="about-one__shape-3 zoominout" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-one__right">
              <p>
                Both MT4 and MT5 platforms are widely available to all TransX
                market clients.
                <br />
                <br /> However, when determining the best desktop platform for
                your needs, there are essential distinctions to bear in mind. The
                enhanced MetaTrader5 showcases top-tier features, notably the
                hedging options.
                <br />
                <br /> On the other hand, MetaTrader4, while slightly more basic,
                is ideally suited for traders just venturing into the markets.
                <br />
                <br /> Unsure of your choice? We've laid out a comparison between
                the two MetaTrader platforms in the table below to assist you.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*About One End*/}
    {/*  */}
    <section style={{ padding: "30px 0px 30px" }}>
      <div className="container ">
        <div className="row">
          <div className="col-lg-12 p-0 pb-5">
            <div className=" " style={{ overflowX: "auto" }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Features</th>
                    <th />
                    <th>MT5</th>
                    <th>MT4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pending Order Types</td>
                    <td>
                      Types of pending orders requesting a broker to buy or to
                      sell a financial security under predefined conditions in the
                      future
                    </td>
                    <td>6</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Technical indicators</td>
                    <td>
                      The number of technical indicators, which can automatically
                      detect patterns in the financial instrument price dynamics
                      and help users make trading decisions
                    </td>
                    <td>38</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Graphical Objects</td>
                    <td>
                      The number of analytical objects that help identify
                      financial instrument price trends, detect cycles, define
                      support/resistance levels and more
                    </td>
                    <td>44</td>
                    <td>31</td>
                  </tr>
                  <tr>
                    <td>Timeframes</td>
                    <td>
                      The number of timeframes — time intervals in which quotes of
                      financial instruments are grouped
                    </td>
                    <td>21</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>Economic Calendar</td>
                    <td>
                      Availability of the Economic Calendar which includes
                      publications on various countries’ macroeconomic indicators,
                      which can affect financial instrument prices
                    </td>
                    <td>
                      <img
                        src="/assets/images/trad5/yes.png"
                        className="img-fluid"
                      />
                    </td>
                    <td>
                      <img
                        src="/assets/images/trad5/no.png"
                        className="img-fluid"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Email System</td>
                    <td>
                      The features of the built-in email service, which enables
                      users to receive important information from a broker
                      straight in the platform
                    </td>
                    <td>
                      <img
                        src="/assets/images/trad5/yes.png"
                        className="img-fluid"
                      />
                      <p>with attachments</p>
                    </td>
                    <td>
                      <img
                        src="/assets/images/trad5/no.png"
                        className="img-fluid"
                      />
                      <p>No attachments</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Embedded MQL5.community chat</td>
                    <td>
                      Possibility to chat with other traders directly in the
                      platform
                    </td>
                    <td>
                      <img
                        src="/assets/images/trad5/yes.png"
                        className="img-fluid"
                      />
                    </td>
                    <td>
                      <img
                        src="/assets/images/trad5/no.png"
                        className="img-fluid"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Strategy Tester</td>
                    <td>
                      Trading robot testing and optimization modes supported by
                      the built-in Strategy Tester
                    </td>
                    <td>
                      <p>Multi-threaded + Multi-currency + Real ticks</p>
                    </td>
                    <td>Single thread</td>
                  </tr>
                  <tr>
                    <td>Hedging</td>
                    <td>
                      Support for the hedging accounting system, which allows
                      having multiple positions of a financial instrument, both in
                      the same and opposite direction
                    </td>
                    <td>
                      <img
                        src="/assets/images/trad5/yes.png"
                        className="img-fluid"
                      />
                    </td>
                    <td>
                      <img
                        src="/assets/images/trad5/yes.png"
                        className="img-fluid"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Compatibility</td>
                    <td>
                      Ability to download and use the platform on different
                      operating systems. This enables the user to download the
                      MetaTrader platform, access their account and view all past
                      positions / recorded data on any compatible operating
                      system.
                    </td>
                    <td>
                      <img
                        src="/assets/images/trad5/ios.png"
                        className="img-fluid"
                      />
                    </td>
                    <td>
                      <img
                        src="/assets/images/trad5/ios.png"
                        className="img-fluid"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*  */}
    {/*About One Start*/}
    <section className="about-one" style={{ padding: "20px 0px 120px" }}>
      <div className="container">
        <div className="section-title text-center">
          <h2 className="section-title__title">Download MetaTrader 5</h2>
        </div>
        <div className="row">
          <div className="col-xl-9">
            <div className="about-one__right pt-3">
              <p>
                You can either download our platform here or from within our
                Secure Client Area after creating an account. For Windows and
                Android users, simply download and run the installer by clicking
                on the appropriate button to the right. MAC users can find a
                step-by-step guide for installing the platform here and video
                guide here.
              </p>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="borederleft">
              <div className="about-one__left">
                <div className="mt-3">
                  <div className="pb-3">
                    <a href="https://download.mql5.com/cdn/web/trans.x.market/mt5/transxmarket5setup.exe">
                      <button type="button" className="btn btn-danger">
                        <i className="bi bi-microsoft" /> | Download MT5
                      </button>{" "}
                    </a>
                  </div>
                  <div className="pb-3">
                    <a href="https://download.mql5.com/cdn/mobile/mt5/ios?server=TransXMarket-Server">
                      <button type="button" className="btn btn-danger">
                        <i className="bi bi-apple" /> | Download MT5
                      </button>{" "}
                    </a>
                  </div>
                  <div className="pb-3">
                    <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=TransXMarket-Server">
                      <button type="button" className="btn btn-danger">
                        <i className="bi bi-android2" /> | Download MT5
                      </button>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}

export default Meta
