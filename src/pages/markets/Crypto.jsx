import React from 'react'

function Crypto() {
  return (
<>
  <section className="page-header">
    <div
      className="page-header-bg-2"
      style={{ backgroundImage: "url(/assets/images/img1/b41.jpg)" }}
    ></div>
    <div className="container">
      <div className="page-header__inner">
        <h2>Crypto Trade</h2>
      </div>
    </div>
  </section>
  {/*Page Header end*/}
  {/*Progress One Start*/}
  <section className="progress-one" style={{ padding: "30px 0 40px" }}>
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
                  className="section-title__title pt-1"
                  style={{ color: "black", fontSize: 50 }}
                >
                  Crypto Trading
                </h1>
                <div className="progress-levels">
                  {/*Skill Box*/}
                  <div className="progress-box">
                    <div className="inner count-box pt-3">
                      <h4 style={{ color: "red" }}>
                        <b>About Crypto trading</b>
                      </h4>
                      <div className="bar pt-4">
                        <p style={{ color: "black", textAlign: "justify" }}>
                          Cryptocurrency, often referred to as "crypto,"
                          represents a groundbreaking evolution in the realm of
                          digital finance.
                        </p>
                        <p
                          className="pt-2"
                          style={{ color: "black", textAlign: "justify" }}
                        >
                          It is a form of decentralized digital currency that
                          utilizes cryptography for secure transactions and the
                          creation of new units.
                        </p>
                        <p
                          className="pt-2"
                          style={{ color: "black", textAlign: "justify" }}
                        >
                          Unlike traditional currencies issued by governments
                          and central banks, cryptocurrencies operate on
                          blockchain technology, a distributed and transparent
                          ledger that ensures transparency.
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
            <div className="progress-one__img-box">
              <div className="progress-one__img">
                <br />
                <div data-aos="fade-left">
                  <img src="/assets/images/img1/section/crypto.png" alt="" />
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
  <section className="services-one" style={{ padding: "40px 0 120px" }}>
    <div className="container">
      <div className="section-title">
        <h2
          className="section-title__title text-center"
          style={{ color: "black" }}
        >
          Crypto Trade on
        </h2>
      </div>
      <div className="row">
        <table>
          <tbody>
            <tr className="group animated slideInUp1s" data-animate-text="up">
              <th className="na">
                <b>Name</b>
              </th>
              <th>
                <b>Sell</b>
              </th>
              <th>
                <b>Buy</b>
              </th>
              <th>
                <b>Spread</b>
              </th>
              <th>
                <b>1D Chg</b>
              </th>
            </tr>
            <tr
              className="____EURUSDz____ animated slideInUp1s odd2"
              data-animate-text="up"
            >
              <td
                className="symbol-info-column dtr-control"
                tabIndex={0}
                style={{ display: "flex", listStyleType: "none" }}
              >
                <div className="image5" style={{ paddingLeft: 10 }}>
                  <img src="/assets/images/fav-logo.png" alt="" />
                </div>
                <div style={{ paddingLeft: 50 }}>
                  <div className="name2">BTCUSD</div>
                  <div className="desc7">
                    <p>Bitcoin vs. USD</p>
                  </div>
                </div>
              </td>
              <td className="center2">
                <div className="real-time-quote">
                  <a href="#" className="quote-ask down but5" target="_blank">
                    26112.97
                  </a>
                </div>
              </td>
              <td className="center2">
                <a href="#" className="quote-bid down but6" target="_blank">
                  1.08208
                </a>
              </td>
              <td className="center2"> 134.8</td>
              <td className="center2 sorting_2" style={{ color: "red" }}>
                {" "}
                -0.005%
              </td>
            </tr>
            {/* More rows similar to the above one... */}
            <tr
              className="____EURUSDz____ animated slideInUp1s even2"
              data-animate-text="up"
            >
              <td
                className="symbol-info-column dtr-control"
                tabIndex={0}
                style={{ display: "flex", listStyleType: "none" }}
              >
                <div className="image5" style={{ paddingLeft: 10 }}>
                  <img src="/assets/images/fav-logo.png" alt="" />
                </div>
                <div style={{ paddingLeft: 50 }}>
                  <div className="name2">ETHUSD</div>
                  <div className="desc7">
                    <p>Ethereum vs. USD</p>
                  </div>
                </div>
              </td>
              <td className="center2">
                <div className="real-time-quote">
                  <a href="#" className="quote-ask down but5" target="_blank">
                    {" "}
                    1682.70
                  </a>
                </div>
              </td>
              <td className="center2">
                <a href="#" className="quote-bid down but6" target="_blank">
                  1.08208
                </a>
              </td>
              <td className="center2"> 10.1</td>
              <td className="center2 sorting_2" style={{ color: "red" }}>
                {" "}
                -1.710%
              </td>
            </tr>
            {/* More rows similar to the above one... */}
            <tr
              className="____EURUSDz____ animated slideInUp1s odd2"
              data-animate-text="up"
            >
              <td
                className="symbol-info-column dtr-control"
                tabIndex={0}
                style={{ display: "flex", listStyleType: "none" }}
              >
                <div className="image5" style={{ paddingLeft: 10 }}>
                  <img src="/assets/images/fav-logo.png" alt="" />
                </div>
                <div style={{ paddingLeft: 50 }}>
                  <div className="name2">BCHUSD</div>
                  <div className="desc7">
                    <p>Bitcoin cash vs. USD</p>
                  </div>
                </div>
              </td>
              <td className="center2">
                <div className="real-time-quote">
                  <a href="#" className="quote-ask down but5" target="_blank">
                    {" "}
                    189.600
                  </a>
                </div>
              </td>
              <td className="center2">
                <a href="#" className="quote-bid down but6" target="_blank">
                  1.08208
                </a>
              </td>
              <td className="center2"> 321</td>
              <td className="center2 sorting_2" style={{ color: "green" }}>
                {" "}
                0.015%
              </td>
            </tr>
            {/* More rows similar to the above one... */}
            <tr
              className="____EURUSDz____ animated slideInUp1s even2"
              data-animate-text="up"
            >
              <td
                className="symbol-info-column dtr-control"
                tabIndex={0}
                style={{ display: "flex", listStyleType: "none" }}
              >
                <div className="image5" style={{ paddingLeft: 10 }}>
                  <img src="/assets/images/fav-logo.png" alt="" />
                </div>
                <div style={{ paddingLeft: 50 }}>
                  <div className="name2">XRPUSD</div>
                  <div className="desc7">
                    <p>Ripple vs. USD</p>
                  </div>
                </div>
              </td>
              <td className="center2">
                <div className="real-time-quote">
                  <a href="#" className="quote-ask down but5" target="_blank">
                    0.5255
                  </a>
                </div>
              </td>
              <td className="center2">
                <a href="#" className="quote-bid down but6" target="_blank">
                  1.08208
                </a>
              </td>
              <td className="center2"> 10.1</td>
              <td className="center2 sorting_2" style={{ color: "red" }}>
                {" "}
                -0.019%
              </td>
            </tr>
            {/* More rows similar to the above one... */}
            <tr
              className="____EURUSDz____ animated slideInUp1s odd2"
              data-animate-text="up"
            >
              <td
                className="symbol-info-column dtr-control"
                tabIndex={0}
                style={{ display: "flex", listStyleType: "none" }}
              >
                <div className="image5" style={{ paddingLeft: 10 }}>
                  <img src="/assets/images/fav-logo.png" alt="" />
                </div>
                <div style={{ paddingLeft: 50 }}>
                  <div className="name2">LTCUSD</div>
                  <div className="desc7">
                    <p>LITECOIN VS USD</p>
                  </div>
                </div>
              </td>
              <td className="center2">
                <div className="real-time-quote">
                  <a href="#" className="quote-ask down but5" target="_blank">
                    64.86
                  </a>
                </div>
              </td>
              <td className="center2">
                <a href="#" className="quote-bid down but6" target="_blank">
                  64.77
                </a>
              </td>
              <td className="center2"> 0.9</td>
              <td className="center2 sorting_2" style={{ color: "red" }}>
                {" "}
                -0.107%
              </td>
            </tr>
            {/* More rows similar to the above one... */}
            <tr
              className="____EURUSDz____ animated slideInUp1s even2"
              data-animate-text="up"
            >
              <td
                className="symbol-info-column dtr-control"
                tabIndex={0}
                style={{ display: "flex", listStyleType: "none" }}
              >
                <div className="image5" style={{ paddingLeft: 10 }}>
                  <img src="/assets/images/fav-logo.png" alt="" />
                </div>
                <div style={{ paddingLeft: 50 }}>
                  <div className="name2">ADAUSD</div>
                  <div className="desc7">
                    <p>Cardano Vs. USD</p>
                  </div>
                </div>
              </td>
              <td className="center2">
                <div className="real-time-quote">
                  <a href="#" className="quote-ask down but5" target="_blank">
                    0.2618
                  </a>
                </div>
              </td>
              <td className="center2">
                <a href="#" className="quote-bid down but6" target="_blank">
                  0.2617
                </a>
              </td>
              <td className="center2"> 0.1</td>
              <td className="center2 sorting_2" style={{ color: "red" }}>
                {" "}
                -0.839%
              </td>
            </tr>
            {/* More rows similar to the above one... */}
            <tr
              className="____EURUSDz____ animated slideInUp1s odd2"
              data-animate-text="up"
            >
              <td
                className="symbol-info-column dtr-control"
                tabIndex={0}
                style={{ display: "flex", listStyleType: "none" }}
              >
                <div className="image5" style={{ paddingLeft: 10 }}>
                  <img src="/assets/images/fav-logo.png" alt="" />
                </div>
                <div style={{ paddingLeft: 50 }}>
                  <div className="name2">DOGUSD</div>
                  <div className="desc7">
                    <p>Dogecoin vs. USD</p>
                  </div>
                </div>
              </td>
              <td className="center2">
                <div className="real-time-quote">
                  <a href="#" className="quote-ask down but5" target="_blank">
                    0.06270
                  </a>
                </div>
              </td>
              <td className="center2">
                <a href="#" className="quote-bid down but6" target="_blank">
                  0.06260
                </a>
              </td>
              <td className="center2"> 1</td>
              <td className="center2 sorting_2" style={{ color: "green" }}>
                {" "}
                0.954%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</>

  )
}

export default Crypto
