import React from 'react'

function About() {
  return (
    <>
  <section className="page-header">
    <div
      className="page-header-bg-2"
      style={{ backgroundImage: "url(/assets/images/img1/about-banner.jpg)" }}
    ></div>
    <div className="container">
      <div className="page-header__inner">
        <h2> About Us</h2>
      </div>
    </div>
  </section>
  {/*Services One Start*/}
  <section
    className="services-one1 "
    style={{ margin: "30px 0 0px", textAlign: "center" }}
  >
    <div className="container">
      <div className="section-title text-center">
        <h2 className="section-title__title " style={{ color: "red",lineHeight:'normal'}}>
          Redefining Online Trading: Partnering for Your Success
        </h2>
        <p style={{ color: "black", textAlign: "center" }}>
          TransX Markets is a premier provider of online foreign exchange (FX)
          trading, CFD trading, spread betting, and related services. Our
          mission is to offer global traders access to the world's largest and
          most liquid market by providing innovative trading tools, top-notch
          trading education, and maintaining rigorous financial standards. We
          strive to deliver the best online trading experience, ensuring that
          clients have the advantage of mobile trading, one-click order
          execution, and real-time chart trading.
        </p>
      </div>
    </div>
  </section>
  {/*Services One End*/}
  {/*Progress two Start*/}
  <section
    className="progress-one"
    style={{ backgroundColor: "azure", paddingBottom: 90 }}
  >
    <div className="container">
      {/* <h3 class="progress-one__title">We have the Tools and Expertise <br>
              to help you Succeed online</h3> */}
      <div className="row">
        <div className="col-xl-5">
          <div className="progress-one__right">
            <div className="progress-one__img-box">
              <div className="progress-one__img">
                <img src="/assets/images/img1/s2.jpg" alt="" id="box-img" />
              </div>
              {/* <div class="progress-one__shape-1 float-bob-x">
                              <img src="/assets/images/shapes/progress-one-shape-1.png" alt="">
                          </div> */}
            </div>
          </div>
        </div>
        <div className="col-xl-7">
          <div className="progress-one__left ">
            <br />
            <div className="progress-one__progress-box ">
              <h4 className="progress-one__progress-box-title">
                Why Choose TransX Markets ?
              </h4>
              <div className="progress-levels">
                {/*Skill Box*/}
                <div className="progress-box">
                  <div className="inner count-box">
                    <div className="bar">
                      <p style={{ color: "black", textAlign: "justify" }}>
                        <b>Comprehensive Education and Training:</b>
                        <br />
                        At TransX Markets, we believe in empowering our clients.
                        We organize seminars and special events, offering
                        training materials, cutting-edge trading technologies,
                        and the latest strategies in the Forex market. Whether
                        you're a novice or a seasoned trader, our events are
                        meticulously planned to provide a family-like
                        atmosphere, where everyone can learn, share experiences,
                        and enjoy the company of the best TransX Markets traders
                        and partners.
                      </p>
                      <p style={{ color: "black", textAlign: "justify" }}>
                        <b>Diverse Account Options:</b>
                        <br />
                        We value the diversity of our clients and understand
                        that different traders have different needs. That's why
                        we offer swap-free accounts, also known as Islamic
                        accounts, designed for some special traders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-12">
          <div className="progress-one__left ">
            <br />
            <div className="progress-one__progress-box ">
              <div className="progress-levels">
                {/*Skill Box*/}
                <div className="progress-box">
                  <div className="inner count-box">
                    <div className="bar">
                      <p style={{ color: "black", textAlign: "justify" }}>
                        <b>Customer-Centric Approach:</b>
                        <br />
                        Protecting your funds is our top priority. At TransX
                        Markets, we never engage in proprietary trading. We
                        enforce robust bank review and monitoring guidelines set
                        by the Risk Committee. All customer deposits are kept
                        separate from our operating funds and distributed across
                        a network of banks
                      </p>
                    </div>
                  </div>
                </div>
                {/*Skill Box*/}
                <div className="progress-box">
                  <div className="inner count-box">
                    <div className="bar">
                      <p style={{ color: "black", textAlign: "justify" }}>
                        <b>Global Access with our Universe:</b>
                        <br />
                        TransX Markets extends its reach to retail brokers,
                        small hedge funds, and emerging market banks through
                        TransX Universe. This provides access to wholesale
                        execution and liquidity, along with prime brokerage
                        services for high and medium-frequency funds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Progress two End*/}
  {/*Services two End*/}
  <section
    className="services-two services-three"
    style={{ backgroundColor: "rgb(40, 40, 40)", padding: "0px 0 80px" }}
  >
    <div
      className="team-one__bg"
      style={{
        backgroundImage: "url(/assets/images/img1/ban.jpg)",
        backgroundRepeat: "no-repeat",
        mixBlendMode: "overlay"
      }}
    />
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="services-two__single" id="servi">
            <h2
              className="services-two__title text-white"
              style={{ fontSize: 35 }}
            >
              Experience the Ease of Trading with TransX Markets
            </h2>
            <p className="services-two__text">
              <b>
                If you're seeking a reliable and honest broker, consider opening
                an account at TransX Markets. Discover how easy and comfortable
                trading on Forex can be when supported by a professional company
                with a track record of excellence. Join us and embark on your
                trading journey with confidence and security.
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default About
