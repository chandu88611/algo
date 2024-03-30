import React from 'react'

function Stocks() {
  return (
<>
  <section className="page-header">
    <div
      className="page-header-bg-2"
      style={{ backgroundImage: "url(/assets/images/img1/b38.jpg)" }}
    ></div>
    <div className="container">
      <div className="page-header__inner">
        <h2> Stocks Trade</h2>
      </div>
    </div>
  </section>
  {/*Page Header end*/}
  {/*Progress One Start*/}
  <section className="progress-one" style={{ padding: "60px 0 50px" }}>
    <div className="container">
      {/* <h3 class="progress-one__title">We have the Tools and Expertise <br>
              to help you Succeed online</h3> */}
      <div className="row">
        <div className="col-xl-6">
          <div className="progress-one__left">
            <br />
            <div className="progress-one__progress-box">
              <div data-aos="fade-right">
                <h1
                  className="section-title__title"
                  style={{ color: "black", fontSize: 50 }}
                >
                  Trade Stocks
                </h1>
                <div className="progress-levels">
                  {/*Skill Box*/}
                  <div className="progress-box">
                    <div className="inner count-box pt-2">
                      <h4 style={{ color: "red" }}>
                        <b>About Shares Trading</b>
                      </h4>
                      <div className="bar pt-3">
                        <p style={{ color: "black", textAlign: "justify" }}>
                          Embark on trading shares CFDs featuring some of the
                          globe's most renowned brands like Amazon, Meta
                          Platforms, Inc., Apple, Microsoft, and Alphabet.
                        </p>
                        <p
                          className="pt-2"
                          style={{ color: "black", textAlign: "justify" }}
                        >
                          With TransX Market, capitalize on opportunities
                          whether prices rise or fall using our adaptable
                          leverage*, minimal commissions, and exceptional trade
                          execution speeds.
                        </p>
                        <p
                          className="pt-2"
                          style={{ color: "black", textAlign: "justify" }}
                        >
                          Explore a vast range of premium shares CFDs from major
                          exchanges, starting from as low as 0.01 lots. All this
                          takes place within a secure, regulated environment,
                          ensuring your peace of mind.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="progress-one__right">
            <br />
            <div className="progress-one__img-box">
              <div className="progress-one__img" style={{ paddingLeft: 50 }}>
                <div data-aos="fade-left">
                  <img
                    src="/assets/images/img1/section/stock.png"
                    alt=""
                    style={{ width: 500 }}
                  />
                </div>
              </div>
              {/* <div class="progress-one__shape-1 float-bob-x">
                              <img src="/assets/images/shapes/progress-one-shape-1.png" alt="">
                          </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Progress One End*/}
  {/*Services One Start*/}
  <section className="services-one" style={{ padding: "50px 0 120px" }}>
    <div className="container">
      <div className="section-title">
        <h2
          className="section-title__title text-center"
          style={{ color: "black" }}
        >
          Stocks Trade on
        </h2>
      </div>
      <div className="row">
        <table className="table4">
          <tbody>
            <tr className="group animated slideInUp1s" data-animate-text="up">
              {/* <td colspan="7"><b>1. Popular Majors</b></td> */}
            </tr>
            <tr
              className="____EURUSDz____ animated slideInUp1s odd"
              data-animate-text="up"
            >
              <td
                className="symbol-info-column dtr-control"
                tabIndex={0}
                style={{ display: "flex", listStyleType: "none" }}
              >
                <div className="image" style={{ paddingLeft: 10 }}>
                  <img
                    src="/assets/images/img1/section/b.svg"
                    alt=""
                    className="abc"
                  />
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <div className="name">AAL.OQ</div>
                  <div className="desc5">
                    <p>American Airlines Group Inc</p>
                  </div>
                </div>
              </td>
              <td className="center">
                <div className="real-time-quote ">
                  <a href="#" className="quote-ask down but1" target="_blank">
                    SELL
                  </a>
                  <a href="#" className="quote-bid down but2" target="_blank">
                    BUY
                  </a>
                </div>
              </td>
              <td className="center">Market</td>
              <td className="center">0.05%</td>
            </tr>
            {/* More rows similar to the above one... */}
            <tr
              className="____EURUSDz____ animated slideInUp1s even"
              data-animate-text="up"
            >
              <td
                className="symbol-info-column dtr-control"
                tabIndex={0}
                style={{ display: "flex", listStyleType: "none" }}
              >
                <div className="image" style={{ paddingLeft: 10 }}>
                  <img
                    src="/assets/images/img1/section/a.svg"
                    alt=""
                    className="abc"
                  />
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <div className="name">AAPL.OQ</div>
                  <div className="desc5">
                    <p>Apple Inc</p>
                  </div>
                </div>
              </td>
              <td className="center">
                <div className="real-time-quote">
                  <a href="#" className="quote-ask down but1" target="_blank">
                    SELL
                  </a>
                  <a href="#" className="quote-bid down but2" target="_blank">
                    BUY
                  </a>
                </div>
              </td>
              <td className="center">Market</td>
              <td className="center">0.05%</td>
            </tr>
            {/* More rows similar to the above one... */}
            <tr
              className="____EURUSDz____ animated slideInUp1s odd"
              data-animate-text="up"
            >
              <td
                className="symbol-info-column dtr-control"
                tabIndex={0}
                style={{ display: "flex", listStyleType: "none" }}
              >
                <div className="image" style={{ paddingLeft: 10 }}>
                  <img
                    src="/assets/images/img1/section/c.png"
                    alt=""
                    className="abc"
                  />
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <div className="name"> ACAD.OQ</div>
                  <div className="desc5">
                    <p>ACADIA Pharmaceuticals Inc</p>
                  </div>
                </div>
              </td>
              <td className="center">
                <div className="real-time-quote">
                  <a href="#" className="quote-ask down but1" target="_blank">
                    SELL
                  </a>
                  <a href="#" className="quote-bid down but2" target="_blank">
                    BUY
                  </a>
                </div>
              </td>
              <td className="center">Market</td>
              <td className="center">0.05%</td>
            </tr>
            {/* More rows similar to the above one... */}
            <tr
              className="____EURUSDz____ animated slideInUp1s even"
              data-animate-text="up"
            >
              <td
                className="symbol-info-column dtr-control"
                tabIndex={0}
                style={{ display: "flex", listStyleType: "none" }}
              >
                <div className="image" style={{ paddingLeft: 10 }}>
                  <img
                    src="/assets/images/img1/section/d.svg"
                    alt=""
                    className="abc"
                  />
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <div className="name">ADBE.OQ</div>
                  <div className="desc5">
                    <p>Adobe Inc</p>
                  </div>
                </div>
              </td>
              <td className="center">
                <div className="real-time-quote">
                  <a href="#" className="quote-ask down but1" target="_blank">
                    SELL
                  </a>
                  <a href="#" className="quote-bid down but2" target="_blank">
                    BUY
                  </a>
                </div>
              </td>
              <td className="center">Market</td>
              <td className="center">0.05%</td>
            </tr>
            {/* More rows similar to the above one... */}
            <tr
              className="____EURUSDz____ animated slideInUp1s odd"
              data-animate-text="up"
            >
              <td
                className="symbol-info-column dtr-control"
                tabIndex={0}
                style={{ display: "flex", listStyleType: "none" }}
              >
                <div className="image" style={{ paddingLeft: 10 }}>
                  <img
                    src="/assets/images/img1/section/e.svg"
                    alt=""
                    className="abc"
                  />
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <div className="name"> ADI.O</div>
                  <div className="desc5">
                    <p>Analog Devices Inc</p>
                  </div>
                </div>
              </td>
              <td className="center">
                <div className="real-time-quote">
                  <a href="#" className="quote-ask down but1" target="_blank">
                    SELL
                  </a>
                  <a href="#" className="quote-bid down but2" target="_blank">
                    BUY
                  </a>
                </div>
              </td>
              <td className="center">Market</td>
              <td className="center">0.05%</td>
            </tr>
            {/* More rows similar to the above one... */}
            <tr
              className="____EURUSDz____ animated slideInUp1s even"
              data-animate-text="up"
            >
              <td
                className="symbol-info-column dtr-control"
                tabIndex={0}
                style={{ display: "flex", listStyleType: "none" }}
              >
                <div className="image" style={{ paddingLeft: 10 }}>
                  <img
                    src="/assets/images/img1/section/f.svg"
                    alt=""
                    className="abc"
                  />
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <div className="name"> ADP.OQ</div>
                  <div className="desc5">
                    <p>Automatic Data Processing Inc</p>
                  </div>
                </div>
              </td>
              <td className="center">
                <div className="real-time-quote">
                  <a href="#" className="quote-ask down but1" target="_blank">
                    SELL
                  </a>
                  <a href="#" className="quote-bid down but2" target="_blank">
                    BUY
                  </a>
                </div>
              </td>
              <td className="center">Market</td>
              <td className="center">0.05%</td>
            </tr>
            {/* More rows similar to the above one... */}
            <tr
              className="____EURUSDz____ animated slideInUp1s odd"
              data-animate-text="up"
            >
              <td
                className="symbol-info-column dtr-control"
                tabIndex={0}
                style={{ display: "flex", listStyleType: "none" }}
              >
                <div className="image" style={{ paddingLeft: 10 }}>
                  <img
                    src="/assets/images/img1/section/g.svg"
                    alt=""
                    className="abc"
                  />
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <div className="name"> ADSK.OQ</div>
                  <div className="desc5">
                    <p>Autodesk Inc</p>
                  </div>
                </div>
              </td>
              <td className="center">
                <div className="real-time-quote">
                  <a href="#" className="quote-ask down but1" target="_blank">
                    SELL
                  </a>
                  <a href="#" className="quote-bid down but2" target="_blank">
                    BUY
                  </a>
                </div>
              </td>
              <td className="center">Market</td>
              <td className="center">0.05%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</>

  )
}

export default Stocks
