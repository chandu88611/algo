import React from 'react'

function News() {
  return (
    <>
    <section className="page-header">
      <div
        className="page-header-bg-2"
        style={{ backgroundImage: "url(/assets/images/img1/news.png)" }}
      ></div>
      <div className="container">
        <div className="page-header__inner">
          <h2> News and Events </h2>
        </div>
      </div>
    </section>
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
                    style={{ color: "black", fontSize: 43 }}
                  >
                    News and Events
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
                            TransX trading platform is offer real-time market
                            news, research, and analysis to help traders make
                            informed decisions.
                          </p>{" "}
                          <p
                            className="services-details__text-1"
                            style={{ color: "black", textAlign: "justify" }}
                          >
                            Visit the official website of the TransX trading
                            platform. Often, they have news sections, blogs, or
                            educational resources that provide valuable content
                            for traders.
                          </p>
                        </div>
                        <div className="progress-one__img-box pt-5">
                          <div className="progress-one__img">
                            <div data-aos="fade-left">
                              <img
                                src="/assets/images/img1/section/news.jpg"
                                alt=""
                                style={{ border: "1px solid #b3adad" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <p
                        className="services-details__text-1 pt-4"
                        style={{ color: "black", textAlign: "justify" }}
                      >
                        {" "}
                        Contact the customer support team of the trading platform
                        to inquire about available trading content and resources.
                      </p>
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
                  <li>
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
                  <li className="active">
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
    <section className="shop-details" style={{ padding: "40px 0 30px" }}>
      <div className="container">
        <div className="shop-details__top">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="shop-detils-top__left">
                <div className="shop-detils-top__left-inner">
                  <div className="shop-details-top__content-box">
                    <div
                      className="swiper-container"
                      id="shop-details-one__carousel"
                    >
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="shop-details-top__img">
                            <img
                              src="/assets/images/img1/unemployment.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        {/* /.swiper-slide */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="shop-detils-top__right">
                <h3 className="shop-detils__title" style={{ fontSize: 40 }}>
                  Unemployment Rate
                </h3>
                <p className="shop-detils-top__text-1" style={{ color: "black" }}>
                  One of the key responsibilities of the central banks around the
                  world is to maintain a low unemployment rate. All of the major
                  monetary policy decisions taken by any central bank is to keep
                  it near the Non-Accelerating Inflation Rate of Unemployment or
                  NAIRU.
                  <br />
                  <br />
                  All the major economies release unemployment rate statistics on
                  a monthly basis and the lower it goes; the better the currency’s
                  valuation becomes. Partly because when the unemployment rate
                  goes down below NAIRU, which is always near 4.0%, central banks
                  start increasing the interest rate to reduce inflation and cool
                  down the economy.
                  <br />
                  <br /> This expectation of higher inflation and higher interest
                  rate is highly correlated with a low unemployment rate. Hence,
                  unemployment rate acts as a leading indicator of future monetary
                  policy decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shop-details__bottom">
          <div className="shop-details__description">
            <div className="shop-details__main-tab-box tabs-box">
              <div className="tabs-content">
                {/*tab*/}
                <div className="tab active-tab" id="description">
                  <div className="shop-details__tab-content-inner">
                    <div className="shop-details__description-content"></div>
                    <div className="blog-details__quote-box">
                      <div className="blog-details__icon-quote">
                        <span className="icon-quote-left" />
                      </div>
                      <p className="blog-details__quote-text">
                        "In the world of trading, the Unemployment Rate isn't just
                        a statistic; it's a powerful indicator that moves markets
                        and shapes trading strategies."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Shop Details End*/}
    {/*Shop Details Start*/}
    <section className="shop-details" style={{ padding: "30px 0 30px" }}>
      <div className="container">
        <div className="shop-details__top">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="shop-detils-top__left">
                <div className="shop-detils-top__left-inner">
                  <div className="shop-details-top__content-box">
                    <div
                      className="swiper-container"
                      id="shop-details-one__carousel"
                    >
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="shop-details-top__img">
                            <img src="/assets/images/img1/gdb.jpg" alt="" />
                          </div>
                        </div>
                        {/* /.swiper-slide */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="shop-detils-top__right">
                <h3 className="shop-detils__title" style={{ fontSize: 40 }}>
                  Gross Domestic Product (GDP) Growth Rate
                </h3>
                <p className="shop-detils-top__text-1" style={{ color: "black" }}>
                  The Gross Domestic Product (GDP) is like the scorecard for a
                  game. It measures the overall health of an economy and the
                  higher the GDP growth rate, the stronger the currency would be.
                  If you are trading the GBP/USD, just by keeping an eye on the
                  GDP growth of the US and the UK, you can easily figure out which
                  way the pair would move in the coming weeks.
                  <br />
                  <br />
                  Economic data releases like Gross Domestic Product (GDP) and
                  inflation rates offer traders a direct glimpse into a country's
                  economic health. GDP quantifies economic activity, while
                  inflation measures the rate at which prices rise. Traders
                  consider these indicators as fundamental guides to making
                  informed trading decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shop-details__bottom">
          <div className="shop-details__description">
            <div className="shop-details__main-tab-box tabs-box">
              <div className="tabs-content">
                {/*tab*/}
                <div className="tab active-tab" id="description">
                  <div className="shop-details__tab-content-inner">
                    <div className="shop-details__description-content"></div>
                    <div className="blog-details__quote-box">
                      <div className="blog-details__icon-quote">
                        <span className="icon-quote-left" />
                      </div>
                      <p className="blog-details__quote-text">
                        "GDP growth rate isn't just a number; it's the heartbeat
                        of an economy, measuring its vitality and strength."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Shop Details End*/}
    {/*Shop Details Start*/}
    <section className="shop-details" style={{ padding: "30px 0 30px" }}>
      <div className="container">
        <div className="shop-details__top">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="shop-detils-top__left">
                <div className="shop-detils-top__left-inner">
                  <div className="shop-details-top__content-box">
                    <div
                      className="swiper-container"
                      id="shop-details-one__carousel"
                    >
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="shop-details-top__img">
                            <img src="/assets/images/img1/cpi.jpg" alt="" />
                          </div>
                        </div>
                        {/* /.swiper-slide */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="shop-detils-top__right">
                <h3 className="shop-detils__title" style={{ fontSize: 40 }}>
                  Consumer Price Index (CPI)
                </h3>
                <p className="shop-detils-top__text-1" style={{ color: "black" }}>
                  The Consumer Price Index (CPI) measures the inflation rate in
                  the economy compared to a base year. You do not need to be an
                  economist to understand how inflation affects a given set of
                  currency pair, but some basic understanding would help you go
                  the extra mile. <br />
                  <br />
                  You see, most central banks have a monetary policy that tries to
                  limit inflation rate to a certain predefined range. When
                  inflation goes above this range, central banks usually increase
                  the interest rate to curb down inflation. This expectation of
                  higher inflation and higher Most central banks try to limit
                  inflation rate to 2.0% and use the CPI to measure it. <br />
                  <br /> However, the Federal Reserve, the central bank of the
                  USA, uses the Personal Consumption Expenditure index instead of
                  CPI. So, if you are trading the U.S. Dollar and want to
                  anticipate the future interest rate landscape, use the PCE
                  index.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shop-details__bottom">
          <div className="shop-details__description">
            <div className="shop-details__main-tab-box tabs-box">
              <div className="tabs-content">
                {/*tab*/}
                <div className="tab active-tab" id="description">
                  <div className="shop-details__tab-content-inner">
                    <div className="shop-details__description-content"></div>
                    <div className="blog-details__quote-box">
                      <div className="blog-details__icon-quote">
                        <span className="icon-quote-left" />
                      </div>
                      <p className="blog-details__quote-text">
                        "The Consumer Price Index is more than just numbers; it's
                        a snapshot of the cost of living, a reflection of the
                        everyday economic reality faced by people."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Shop Details End*/}
    {/*Shop Details Start*/}
    <section className="shop-details" style={{ padding: "30px 0 30px" }}>
      <div className="container">
        <div className="shop-details__top">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="shop-detils-top__left">
                <div className="shop-detils-top__left-inner">
                  <div className="shop-details-top__content-box">
                    <div
                      className="swiper-container"
                      id="shop-details-one__carousel"
                    >
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="shop-details-top__img">
                            <img src="/assets/images/img1/night.jpg" alt="" />
                          </div>
                        </div>
                        {/* /.swiper-slide */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="shop-detils-top__right">
                <h3 className="shop-detils__title" style={{ fontSize: 40 }}>
                  Overnight Interest Rate
                </h3>
                <p className="shop-detils-top__text-1" style={{ color: "black" }}>
                  You see, banks also borrow money from each other, but they do it
                  on an overnight basis. Central banks try to influence the
                  overnight rate by lending in the money market at their own
                  overnight rate and it is an important tool in their monetary
                  policy arsenal.
                  <br />
                  <br />
                  You see, most central banks have a monetary Overnight interest
                  rate is the key reason prices fluctuate in the market as it also
                  affects the swap rate. In fact, many traders think that the main
                  purpose of fundamental analysis is to predict future interest
                  rates of major central banks.
                  <br />
                  <br /> However, the Federal Reserve, the central bank of the
                  USA, While understanding monetary policy is difficult, even for
                  veteran economists, the way to interpret this news is rather
                  easy. If you see a forecast that says the Federal Reserve will
                  likely increase the overnight rate, it will likely have a
                  bullish effect on the U.S. Dollar. So, for example, if the
                  Japanese Central Bank keeps its rate unchanged, it will be a
                  piece of bullish news for the USD/JPY.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shop-details__bottom">
          <div className="shop-details__description">
            <div className="shop-details__main-tab-box tabs-box">
              <div className="tabs-content">
                {/*tab*/}
                <div className="tab active-tab" id="description">
                  <div className="shop-details__tab-content-inner">
                    <div className="shop-details__description-content"></div>
                    <div className="blog-details__quote-box">
                      <div className="blog-details__icon-quote">
                        <span className="icon-quote-left" />
                      </div>
                      <p className="blog-details__quote-text">
                        "In the world of finance, overnight interest rates are the
                        silent force that can either stimulate or slow down
                        economic activity."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Shop Details End*/}
    {/*Shop Details Start*/}
    <section className="shop-details" style={{ padding: "30px 0 30px" }}>
      <div className="container">
        <div className="shop-details__top">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="shop-detils-top__left">
                <div className="shop-detils-top__left-inner">
                  <div className="shop-details-top__content-box">
                    <div
                      className="swiper-container"
                      id="shop-details-one__carousel"
                    >
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="shop-details-top__img">
                            <img src="/assets/images/img1/chart/pmi.png" alt="" />
                          </div>
                        </div>
                        {/* /.swiper-slide */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="shop-detils-top__right">
                <h3 className="shop-detils__title" style={{ fontSize: 40 }}>
                  Purchasing Managers’ Index (PMI)
                </h3>
                <p className="shop-detils-top__text-1" style={{ color: "black" }}>
                  Trading strategies often incorporate the insights gleaned from
                  Purchasing Managers' Index (PMI) data releases, as this economic
                  indicator offers a valuable window into the health of the
                  manufacturing sector and the broader economy.
                  <br />
                  <br /> By closely analyzing PMI readings, traders and investors
                  can make informed decisions that take into account the current
                  and potential future economic conditions. A higher PMI reading,
                  indicating an expansion in manufacturing activities, might
                  encourage traders to consider buying assets like stocks, as it
                  suggests increased demand for goods and potential economic
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shop-details__bottom">
          <div className="shop-details__description">
            <div className="shop-details__main-tab-box tabs-box">
              <div className="tabs-content">
                {/*tab*/}
                <div className="tab active-tab" id="description">
                  <div className="shop-details__tab-content-inner">
                    <div className="shop-details__description-content"></div>
                    <div className="blog-details__quote-box">
                      <div className="blog-details__icon-quote">
                        <span className="icon-quote-left" />
                      </div>
                      <p className="blog-details__quote-text">
                        "In the world of trading, PMI releases are moments of
                        anticipation and reaction, as they hold the potential to
                        move markets in a matter of minutes."
                      </p>
                    </div>
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

export default News
