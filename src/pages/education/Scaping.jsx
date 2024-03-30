import React, { useState } from 'react'

function Scaping() {
  const [active,setActive]=useState("risk")
  return (
    <>
    {/*Page Header Start*/}
    <section className="page-header">
      <div
        className="page-header-bg-2"
        style={{
          backgroundImage: "url(/assets/images/img1/section/education/scalp2.webp)"
        }}
      ></div>
      <div className="container">
        <div className="page-header__inner">
          <h2>Scalping Strategies </h2>
        </div>
      </div>
    </section>
    {/*Page Header end*/}
    <section className="progress-one" style={{ padding: "60px 0 40px" }}>
      <div className="container">
        {/* <h3 class="progress-one__title">We have the Tools and Expertise <br>
                to help you Succeed online</h3> */}
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="progress-one__left">
              <div className="progress-one__progress-box">
                <div data-aos="fade-right">
                  <h2
                    className="progress-one__progress-box-title"
                    style={{ color: "black", fontSize: "2rem"  }}
                  >
                    What is scalping trading ?
                  </h2>
                  <div className="progress-levels">
                    {/*Skill Box*/}
                    <div className="progress-box">
                      <div className="inner count-box">
                        <div className="bar pt-4">
                          <p
                            className="services-details__text-1"
                            style={{ color: "black", textAlign: "justify" }}
                          >
                            Scalping trading is a fast-paced and short-term
                            trading strategy focused on capitalizing on small
                            price movements within the financial markets.
                          </p>
                          <p
                            className="services-details__text-1"
                            style={{ color: "black", textAlign: "justify" }}
                          >
                            Scalpers aim to profit from rapid changes in price,
                            often executing multiple trades within a single day,
                            or even within minutes.{" "}
                          </p>{" "}
                          <p
                            className="services-details__text-1"
                            style={{ color: "black", textAlign: "justify" }}
                          >
                            This strategy involves entering and exiting positions
                            swiftly, relying on technical analysis and chart
                            patterns to identify momentary opportunities.
                          </p>
                        </div>
                        <div className="progress-one__img-box pt-5">
                          <div className="progress-one__img">
                            <div data-aos="fade-left">
                              <img
                                src="/assets/images/img1/section/education/scalp.webp"
                                alt=""
                                style={{ border: "1px solid #b3adad" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="services-details__left">
              <div className="services-details__category">
                <div className="sidebar__title-box1 pb-4">
                  <h3 className="sidebar__title1">Education</h3>
                </div>
                <ul className="services-details__category-box list-unstyled ">
                  <li>
                    <a href="day_trading">
                      Day trading strategies
                      <span className="icon-arrow-right services-details__category-arrow" />
                    </a>
                  </li>
                  <li className="active">
                    <a href="scalp">
                      Scalping strategies
                      <span className="icon-arrow-right services-details__category-arrow" />
                    </a>
                  </li>
                  <li>
                    <a href="chart_analysis">
                      Chart analysis
                      <span className="icon-arrow-right services-details__category-arrow" />
                    </a>
                  </li>
                  <li>
                    <a href="news_and_events">
                      News and Events
                      <span className="icon-arrow-right services-details__category-arrow" />
                    </a>
                  </li>
                  {/* <li>
                                    <a href="#">Swing trading<span
                                            class="icon-arrow-right services-details__category-arrow"></span></a>
                                </li> */}
                  <li>
                    <a href="marketpsycology">
                      Market psychology
                      <span className="icon-arrow-right services-details__category-arrow" />
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="services-details__book-a-call"
                style={{ marginTop: 250 }}
              >
                <div className="sidebar__title-box">
                  <h3 className="sidebar__title">Quick Consulting</h3>
                </div>
                <div className="services-details__book-a-call-img-box">
                  <div className="services-details__book-a-call-img"></div>
                  <div className="services-details__book-a-call-title-box">
                    <h3 className="services-details__book-a-call-title">
                      "Never, ever argue with your trading system"
                    </h3>
                    <div className="services-details__book-a-call-btn-box">
                      <a
                        href="support"
                        className="thm-btn services-details__book-a-call-btn"
                      >
                        Open demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Progress One End*/}
    {/*Shop Details Start*/}
    <section
      className="pricing"
      style={{ padding: "40px 0 120px", backgroundColor: "whitesmoke" }}
    >
      <div className="container">
        <div className="shop-details__bottom">
          <div className="shop-details__description">
            <div className="shop-details__main-tab-box tabs-box">
              <ul className="tab-buttons clearfix list-unstyled" style={{width:'fit-content',margin:'auto'}}>
                <li
                  data-tab="#description"
                  className={`tab-btn ${active=="risk"&&"active-btn"}`}
                  id="tab2"
                  onClick={()=>setActive("risk")}
                >
                  <span id="tabbb">
                    <b>Risk</b>
                  </span>
                </li>
                <li data-tab="#specifications"
                 className={`tab-btn ${active=="rules"&&"active-btn"}`}
                 id="tab2"
                 onClick={()=>setActive("rules")}
                  >
                  <span id="tabbb">
                    <b>Rules</b>
                  </span>
                </li>
                <br />
                <br />
              </ul>
              <div className="tabs-content">
                {/*tab*/}
                <div className={`tab ${active=="risk"&&"active-tab"}`} id="description">
                  <div
                    className="shop-details__tab-content-inner"
                    style={{
                      backgroundColor: "white",
                      boxShadow: "2px 2px 8px 8px rgb(172 171 171)"
                    }}
                  >
                    {/*Review One Start*/}
                    <div className="review-one">
                      <div className="comments-area">
                        {/*Progress One Start*/}
                        <section
                          className="progress-one"
                          style={{ padding: "0px 0 40px" }}
                        >
                          <div className="container">
                            {/* <h3 class="progress-one__title">We have the Tools and Expertise <br>
                to help you Succeed online</h3> */}
                            <div className="row">
                              <div className="col-xl-12">
                                <div className="progress-one__left">
                                  <div className="progress-one__progress-box">
                                    <div data-aos="fade-right">
                                      <div className="progress-levels">
                                        {/*Skill Box*/}
                                        <div className="progress-box">
                                          <div className="inner count-box">
                                            <h4
                                              className="progress-one__progress-box-title pt-4"
                                              style={{
                                                color: "black",
                                                 fontSize: "2rem"
                                              }}
                                            >
                                              Scalping Trading Risks :
                                            </h4>
                                            <div className="bar pt-2">
                                              <p>
                                                <b>High Transaction Costs :</b>
                                              </p>
                                              <p
                                                style={{
                                                  color: "black",
                                                  textAlign: "justify"
                                                }}
                                              >
                                                Frequent trading can result in
                                                higher transaction costs,
                                                including spreads, commissions,
                                                and fees, which can eat into your
                                                profits.{" "}
                                              </p>
                                              <div className="bar">
                                                <p>
                                                  <b>Emotional Pressure :</b>
                                                </p>
                                                <p
                                                  style={{
                                                    color: "black",
                                                    textAlign: "justify"
                                                  }}
                                                >
                                                  The fast-paced nature of
                                                  scalping can lead to emotional
                                                  pressure and stress, especially
                                                  when dealing with rapid price
                                                  movements.
                                                </p>
                                              </div>
                                              <div className="bar">
                                                <p>
                                                  <b>Slippage :</b>
                                                </p>
                                                <p
                                                  style={{
                                                    color: "black",
                                                    textAlign: "justify"
                                                  }}
                                                >
                                                  Quick execution is crucial in
                                                  scalping. However, during
                                                  volatile market conditions,
                                                  trades may be executed at a
                                                  different price than expected
                                                  due to slippage.
                                                </p>
                                              </div>
                                              <div className="bar">
                                                <p>
                                                  <b>Overtrading :</b>
                                                </p>
                                                <p
                                                  style={{
                                                    color: "black",
                                                    textAlign: "justify"
                                                  }}
                                                >
                                                  The desire to capture every
                                                  small price movement can lead to
                                                  overtrading, which increases the
                                                  risk of losses.{" "}
                                                </p>
                                              </div>
                                              <div className="bar">
                                                <p>
                                                  <b>Lack of Analysis :</b>
                                                </p>
                                                <p
                                                  style={{
                                                    color: "black",
                                                    textAlign: "justify"
                                                  }}
                                                >
                                                  Scalping often relies on
                                                  technical analysis, but
                                                  fundamental factors can still
                                                  impact the market. Ignoring them
                                                  can lead to losses.
                                                </p>
                                              </div>
                                              <div className="bar">
                                                <p>
                                                  <b>Broker Restrictions :</b>
                                                </p>
                                                <p
                                                  style={{
                                                    color: "black",
                                                    textAlign: "justify"
                                                  }}
                                                >
                                                  Some brokers may have
                                                  restrictions or limitations on
                                                  scalping, including minimum
                                                  holding periods or maximum trade
                                                  frequency.
                                                </p>
                                              </div>
                                              <div className="bar">
                                                <p>
                                                  <b>
                                                    Limited Profit Potential :
                                                  </b>
                                                </p>
                                                <p
                                                  style={{
                                                    color: "black",
                                                    textAlign: "justify"
                                                  }}
                                                >
                                                  While individual scalping trades
                                                  aim for small profits, the
                                                  overall gains might not be
                                                  substantial if not managed well.
                                                </p>
                                              </div>
                                              <div className="bar">
                                                <p>
                                                  <b>Time-Consuming :</b>
                                                </p>
                                                <p
                                                  style={{
                                                    color: "black",
                                                    textAlign: "justify"
                                                  }}
                                                >
                                                  Scalping requires constant
                                                  monitoring of the market, making
                                                  it time-consuming and
                                                  potentially impacting other
                                                  aspects of your life.
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
                            </div>
                          </div>
                        </section>
                        {/*Progress One End*/}
                      </div>
                    </div>
                    {/*Review One End*/}
                  </div>
                </div>
                {/*tab*/}
                <div className={`tab ${active=="rules"&&"active-tab"}`} id="specifications">
                  <div
                    className="shop-details__tab-content-inner"
                    style={{
                      backgroundColor: "white",
                      boxShadow: "2px 2px 8px 8px rgb(172 171 171)"
                    }}
                  >
                    {/*Review One Start*/}
                    <div className="review-one">
                      <div className="comments-area">
                        {/*Progress One Start*/}
                        <section
                          className="progress-one"
                          style={{ padding: "0px 0 40px" }}
                        >
                          <div className="container">
                            
                            <div className="row">
                              <div className="col-xl-12">
                                <div className="progress-one__left">
                                  <div className="progress-one__progress-box">
                                    <div data-aos="fade-right">
                                      <div className="progress-levels">
                                        {/*Skill Box*/}
                                        <div className="progress-box">
                                          <div className="inner count-box">
                                            <h2
                                              className="progress-one__progress-box-title pt-4"
                                              style={{
                                                color: "black",
                                                fontSize: 35
                                              }}
                                            >
                                              Scalping Trading Rules :
                                            </h2>
                                            <div className="bar pt-2">
                                              <p>
                                                <b>Choose Liquid Markets :</b>
                                              </p>
                                              <p
                                                style={{
                                                  color: "black",
                                                  textAlign: "justify"
                                                }}
                                              >
                                                Focus on highly liquid markets
                                                with tight bid-ask spreads, such
                                                as major currency pairs in the
                                                forex market or heavily traded
                                                stocks in equities.{" "}
                                              </p>
                                              <div className="bar">
                                                <p>
                                                  <b>Timeframes :</b>
                                                </p>
                                                <p
                                                  style={{
                                                    color: "black",
                                                    textAlign: "justify"
                                                  }}
                                                >
                                                  Use very short timeframes,
                                                  typically ranging from seconds
                                                  to minutes. Common timeframes
                                                  include 1-minute and 5-minute
                                                  charts.
                                                </p>
                                              </div>
                                              <div className="bar">
                                                <p>
                                                  <b>
                                                    Use Tight Stop-Loss Orders :
                                                  </b>
                                                </p>
                                                <p
                                                  style={{
                                                    color: "black",
                                                    textAlign: "justify"
                                                  }}
                                                >
                                                  Set tight stop-loss orders to
                                                  minimize potential losses in
                                                  case the trade goes against you.
                                                  Scalping involves quick trades,
                                                  so protecting your capital is
                                                  crucial.
                                                </p>
                                              </div>
                                              <div className="bar">
                                                <p>
                                                  <b>Take Quick Profits :</b>
                                                </p>
                                                <p
                                                  style={{
                                                    color: "black",
                                                    textAlign: "justify"
                                                  }}
                                                >
                                                  Aim for small profit targets on
                                                  each trade. The goal is to
                                                  accumulate multiple small gains,
                                                  which can add up over time.{" "}
                                                </p>
                                              </div>
                                              <div className="bar">
                                                <p>
                                                  <b>Volume and Liquidity :</b>
                                                </p>
                                                <p
                                                  style={{
                                                    color: "black",
                                                    textAlign: "justify"
                                                  }}
                                                >
                                                  Scalping requires sufficient
                                                  trading volume and liquidity to
                                                  ensure smooth execution of
                                                  trades without significant
                                                  slippage.{" "}
                                                </p>
                                              </div>
                                              <div className="bar">
                                                <p>
                                                  <b>
                                                    Trade During High Volatility :
                                                  </b>
                                                </p>
                                                <p
                                                  style={{
                                                    color: "black",
                                                    textAlign: "justify"
                                                  }}
                                                >
                                                  Look for periods of high market
                                                  volatility, as this provides
                                                  more price movement
                                                  opportunities.
                                                </p>
                                              </div>
                                              <div className="bar">
                                                <p>
                                                  <b>Stay Informed :</b>
                                                </p>
                                                <p
                                                  style={{
                                                    color: "black",
                                                    textAlign: "justify"
                                                  }}
                                                >
                                                  Monitor economic releases, news,
                                                  and events that can impact the
                                                  market, as they can lead to
                                                  increased volatility.
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
                            </div>
                          </div>
                        </section>
                        {/*Progress One End*/}
                      </div>
                    </div>
                    {/*Review One End*/}
                  </div>
                </div>
                {/*tab*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Shop Details End*/}
    <section
      className="pricing"
      style={{ padding: "40px 0 120px", textAlign: "justify" }}
    >
      <div className="container">
        <div className="shop-details__bottom">
          <div className="shop-details__description">
            <div className="shop-details__main-tab-box tabs-box">
              <p>
                <b>
                  <span className="icon-heavy-check" /> Scalping can be rewarding
                  for experienced traders who are well-prepared and have a strong
                  grasp of the markets. However, due to the high risk and intense
                  nature of the strategy, it may not be suitable for all traders,
                  particularly beginners. It's important to practice with a demo
                  account and fully understand the strategy before trading real
                  capital.
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

export default Scaping
