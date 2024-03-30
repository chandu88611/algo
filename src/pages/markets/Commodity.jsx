import React from 'react'

function Commodity() {
  return (
    <>
  <section className="page-header">
    <div
      className="page-header-bg-2"
      style={{ backgroundImage: "url(/assets/images/img1/14.png)" }}
    ></div>
    <div className="container">
      <div className="page-header__inner">
        <h2> Commoditiy Trade</h2>
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
                  Trade Commodities
                </h1>
                <div className="progress-levels">
                  {/*Skill Box*/}
                  <div className="progress-box">
                    <div className="inner count-box pt-2">
                      <h4 style={{ color: "red" }}>
                        <b>
                          Discover Commodity
                          <br /> Trading
                        </b>
                      </h4>
                      <div className="bar pt-3">
                        <p style={{ color: "black", textAlign: "justify" }}>
                          Engage with primary resources like gold, oil, and
                          silver through Commodity CFD trading and leverage the
                          market fluctuations inherent to these globally
                          significant assets.
                        </p>
                        <br />
                        <p style={{ color: "black", textAlign: "justify" }}>
                          Delve into trading your preferred commodities with
                          TransX Market, encompassing precious metals, energy
                          sources, and agricultural products.
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
                <div data-aos="fade-left">
                  <img src="/assets/images/img1/section/commee.jpg" alt="" />
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
  <section className="services-one" style={{ padding: "40px 0 40px" }}>
    <div className="container-fluid">
      <div className="section-title text-center">
        <h2 className="section-title__title " style={{ color: "black" }}>
          About Commodity Trading ?
        </h2>
      </div>
      <div className="row">
        {/*Services One Single Start*/}
        <div
          className="col-xl-12 col-lg-12 wow fadeInUp"
          data-wow-delay="100ms"
        >
          <div className="services-one__single">
            <div className="services-one__inner" id="services-one__inner3">
              <p
                className="services-one__text"
                id="services-one__text1"
                style={{ textAlign: "justify" }}
              >
                <span className="icon-heavy-check" /> Dive into trading by
                tracking the price shifts of global top-tier commodities,
                including oil and precious metals, paired with leading
                currencies.
              </p>
              <p
                className="services-one__text pt-2"
                id="services-one__text1"
                style={{ textAlign: "justify" }}
              >
                <span className="icon-heavy-check" /> Serving as pivotal
                elements in global markets, commodities exhibit considerable
                volatility and act as a diversification instrument for traders'
                asset allocations.
              </p>
              <p
                className="services-one__text pt-2"
                id="services-one__text1"
                style={{ textAlign: "justify" }}
              >
                <span className="icon-heavy-check" /> With TransX Market,
                exploit the potential of both upward and downward price
                trajectories utilizing adaptable leverage*, benefit from minimal
                commissions, and relish unparalleled execution speeds.
              </p>
              <p
                className="services-one__text pt-2"
                id="services-one__text1"
                style={{ textAlign: "justify" }}
              >
                {" "}
                <span className="icon-heavy-check" /> Enroll now to harness our
                distinguished platforms, adept charting solutions, foremost
                market perspectives, and beyond.
              </p>
            </div>
          </div>
        </div>
        {/*Services One Single End*/}
      </div>
    </div>
  </section>
  {/*Services One End*/}
  <div className="compare-pricing-area" style={{ padding: "40px 0 60px" }}>
    <div className="container">
      <div className="section-title">
        <h2
          className="section-title__title text-center"
          style={{ color: "black" }}
        >
          Trading condition for commodity
        </h2>
      </div>
      <div className="compare-pricing-table table-responsive pt-5">
        <table className="table2 table-bordered">
          <thead>
            <tr>
              <th scope="col" className="bg-2A3F65">
                COMMODITIES
              </th>
              <th scope="col">Leverage (Margin Requirement)</th>
              <th scope="col">Units per Lot</th>
              <th scope="col">Point Value per Lot</th>
              <th scope="col">Commission USD</th>
              <th scope="col">Minimum Lot Size</th>
              <th scope="col">Maximum Lot Size</th>
              <th scope="col">Swap short</th>
              <th scope="col">Swap long</th>
              <th scope="col">Average Spread</th>
            </tr>
          </thead>
          <tbody className="ro">
            <tr
              className="bg-F7F7F7 green"
              style={{ backgroundColor: "whitesmoke" }}
            >
              <td className="bg-2A3F65">CL_BRENT</td>
              <td className="">1%</td>
              <td className="">100.0</td>
              <td className="">USD 0.1</td>
              <td className="">0.00</td>
              <td className="">0.0</td>
              <td className="">50.0</td>
              <td className="">-7.5</td>
              <td className="">-13.452</td>
              <td className="">0.172</td>
            </tr>
            <tr className="green">
              <td className="bg-2A3F65">usoil</td>
              <td className="color-90006F">1% </td>
              <td className=" color-009286">100.0</td>
              <td className=" color-009286">USD 0.1</td>
              <td className=" color-009286">0.00</td>
              <td className=" color-009286">0.01</td>
              <td className=" color-009286">50.0</td>
              <td className=" color-009286">-8.5</td>
              <td className=" color-009286">-15.0</td>
              <td className=" color-009286">0.050</td>
            </tr>
            <tr className="green" style={{ backgroundColor: "whitesmoke" }}>
              <td className="bg-2A3F65">XAGUSD</td>
              <td className=" color-90006F">1% </td>
              <td className="color-009286">100.0</td>
              <td className=" color-009286">USD 0.1</td>
              <td className="color-009286">0.00</td>
              <td className=" color-009286">0.01</td>
              <td className=" color-009286">50.0</td>
              <td className=" color-009286">-3.75</td>
              <td className=" color-009286">-12.75</td>
              <td className=" color-009286">0.061</td>
            </tr>
            <tr className="green">
              <td className="bg-2A3F65">XAUEUR</td>
              <td className=" color-90006F">0.5%</td>
              <td className="color-90006F">100.0</td>
              <td className=" color-90006F">1 EUR</td>
              <td className=" color-90006F">0.00</td>
              <td className=" color-90006F">0.01</td>
              <td className=" color-90006F">50.0</td>
              <td className=" color-90006F">1.412758</td>
              <td className=" color-90006F">-18.468176</td>
              <td className=" color-90006F">0.51</td>
            </tr>
            <tr className="green" style={{ backgroundColor: "whitesmoke" }}>
              <td className="bg-2A3F65">XAUUSD</td>
              <td className="color-90006F">0.5%</td>
              <td className=" color-90006F">100.0</td>
              <td className=" color-90006F">1 EUR</td>
              <td className=" color-90006F">0.00</td>
              <td className=" color-90006F">0.01</td>
              <td className=" color-90006F">50.0</td>
              <td className=" color-90006F">20.0</td>
              <td className=" color-90006F">-28.0</td>
              <td className=" color-90006F">0.35</td>
            </tr>
            <tr className="green">
              <td className="bg-2A3F65">XPTUSD</td>
              <td className=" color-90006F">1%</td>
              <td className=" color-90006F">100.0</td>
              <td className=" color-90006F">1 EUR</td>
              <td className=" color-90006F">0.00</td>
              <td className=" color-90006F">0.01</td>
              <td className=" color-90006F">50.0</td>
              <td className="color-90006F">2.06988</td>
              <td className=" color-90006F">-40.8274</td>
              <td className="color-90006F">2.42</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <section className="services-one" style={{ padding: "0px 0 60px" }}>
    <div className="row">
      <div className="container">
        <div
          className="col-xl-12 col-lg-12 wow fadeInUp"
          data-wow-delay="100ms"
        >
          <div className="services-one__single">
            <div className="services-one__inner4" id="services-one__inner4">
              <p
                className="services-one__text"
                id="services-one__text1"
                style={{ textAlign: "justify" }}
              >
                *Average spreads are based on the previous trading day's prices
              </p>
              <p
                className="services-one__text pt-1"
                id="services-one__text1"
                style={{ textAlign: "justify" }}
              >
                *There are zero margin requirements to open a hedged position
                when free margin is positive (margin level &gt; 100%)
              </p>
              <p
                className="services-one__text pt-1"
                id="services-one__text1"
                style={{ textAlign: "justify" }}
              >
                *Swaps on Wednesdays are charged triple
              </p>
              <p
                className="services-one__text pt-1"
                id="services-one__text1"
                style={{ textAlign: "justify" }}
              >
                *If a trading abuse is suspected The company reserves the right
                to modify the swap prices for specific customers in case of
              </p>
              <p
                className="services-one__text pt-1"
                id="services-one__text1"
                style={{ textAlign: "justify" }}
              >
                *Swap prices are subject to change at any point of time
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*Services One Single End*/}
    </div>
  </section>
</>

  )
}

export default Commodity
