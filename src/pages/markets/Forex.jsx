import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

// Style customization for MUI Accordion
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2), // Add gap between accordions
}));
function Forex() {
  const [active,setActive]=useState("spreads")
  return (
    <>
  <section className="page-header">
    <div
      className="page-header-bg-2"
      style={{ backgroundImage: "url(/assets/images/img1/bg36.jpg)" }}
    ></div>
    <div className="container">
      <div className="page-header__inner">
        <h2> Forex Trading</h2>
      </div>
    </div>
  </section>
  {/*Page Header end*/}
  {/*Progress One Start*/}
  <section className="progress-one" style={{ padding: "20px 0 40px" }}>
    <div className="container">
      {/* <h3 class="progress-one__title">We have the Tools and Expertise <br>
              to help you Succeed online</h3> */}
      <div className="row" style={{ borderRadius: 10, padding: 20 }}>
        <div className="col-xl-6">
          <div className="progress-one__left">
            <br />
            <div className="progress-one__progress-box">
              <div data-aos="fade-right">
                <br />
                <h2
                  className="section-title__title"
                  style={{ color: "black", fontSize: 50 }}
                >
                  Forex Trading
                </h2>
                <div className="progress-levels">
                  {/*Skill Box*/}
                  <div className="progress-box">
                    <div className="inner count-box">
                      <div className="bar pt-4">
                        <p
                          style={{
                            color: "black",
                            textAlign: "justify",
                            fontSize: 16
                          }}
                        >
                          The FX market is dynamic and possesses immense
                          liquidity, with daily trading volumes exceeding 7
                          trillion USD, distinguishing it as the world's largest
                          market.
                        </p>
                        <p
                          style={{
                            color: "black",
                            textAlign: "justify",
                            fontSize: 16
                          }}
                        >
                          We provide competitive spreads for individual forex
                          traders, offering leverage of up to 1:500, starting
                          spreads at 0.0 pips, and a typical execution time
                          under 20ms.
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
          <div className="progress-one__left">
            <div className="progress-one__progress-box">
              <div data-aos="fade-right">
                <div className="section-img">
                  <img src="/assets/images/img1/section/forex1.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Progress One Start*/}
  <section className="progress-one" style={{ padding: "40px 0 40px" }}>
    <div className="container">
      {/* <h3 class="progress-one__title">We have the Tools and Expertise <br>
              to help you Succeed online</h3> */}
      <div
        className="row"
        style={{ borderRadius: 10, border: "4px solid whitesmoke" }}
      >
        <div className="col-xl-6">
          <div className="progress-one__left">
            <br />
            <div className="progress-one__progress-box">
              <div data-aos="fade-right">
                <h4
                  className="progress-one__progress-box-title"
                  style={{ color: "black" }}
                >
                  What is forex market ?
                </h4>
                <div className="progress-levels">
                  {/*Skill Box*/}
                  <div className="progress-box" style={{ marginTop: 40 }}>
                    <div className="inner count-box">
                      <div className="bar">
                        <p
                          style={{
                            color: "black",
                            textAlign: "justify",
                            fontSize: 16
                          }}
                        >
                          The Forex market operates in a decentralized manner,
                          with trading occurring over-the-counter (OTC) through
                          an interconnected network of banks, financial
                          institutions, and individual traders. It boasts the
                          distinction of being the world's largest and most
                          liquid financial market, handling daily trading
                          volumes that exceed several trillion dollars.
                          Operating 24 hours a day, five days a week, it spans
                          across major financial hubs, from Tokyo to London to
                          New York.
                        </p>
                        <p
                          style={{
                            color: "black",
                            textAlign: "justify",
                            fontSize: 16
                          }}
                        >
                          {" "}
                          While many engage in the Forex market for speculative
                          gains, it also plays a crucial role for businesses and
                          governments needing to conduct international
                          transactions or hedge against currency fluctuations.
                          With various factors, from economic data releases to
                          geopolitical events, influencing currency values, the
                          market's dynamic nature demands a deep understanding
                          and careful risk management from its participants.
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
          <div className="progress-one__left">
            <br />
            <div className="progress-one__progress-box">
              <div data-aos="fade-right">
                <h4
                  className="progress-one__progress-box-title"
                  style={{ color: "black" }}
                >
                  Why Trade Forex with TransX
                </h4>
                <div className="progress-levels">
                  {/*Skill Box*/}
                  <div className="progress-box">
                    <div className="inner count-box">
                      <div className="bar">
                        <div className="about-three__grow-your-business-points-box">
                          <ul
                            className="list-unstyled about-three__grow-your-business-points"
                            id="li"
                          >
                            <li>
                              <div className="icon">
                                <span
                                  className="icon-heavy-check"
                                  style={{ width: 50, marginLeft: 5 }}
                                />
                              </div>
                              <div className="text">
                                <p>
                                  Competitive spreads are consistently offered,
                                  backed by quotes from several leading Tier 1
                                  banks.
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-heavy-check" />
                              </div>
                              <div className="text">
                                <p>Leverage of up to 1:500 is accessible.</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span
                                  className="icon-heavy-check"
                                  style={{ width: 50, marginLeft: 5 }}
                                />
                              </div>
                              <div className="text">
                                <p>
                                  Experience complete fulfillment on all
                                  currency exchange trades without the concern
                                  of partial execution or requotes. Benefit from
                                  a 99.94% fill rate*, rapid transaction speed,
                                  and no interference from a dealing desk.
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-heavy-check" />
                              </div>
                              <div className="text">
                                <p> We are duly regulated.</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span
                                  className="icon-heavy-check"
                                  style={{ width: 50, marginLeft: 5 }}
                                />
                              </div>
                              <div className="text">
                                <p>
                                  Our award-winning customer service is at your
                                  disposal 24/5, and for 18 hours daily on
                                  weekends**.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <br />
                      <br />
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
  {/*Shop Details Start*/}
  <section className="pricing" style={{ padding: "40px 0 60px" }}>
    <div className="container">
      <div className="shop-details__bottom">
        <div className="shop-details__description">
          <div className="shop-details__main-tab-box tabs-box">
            <ul className="tab-buttons clearfix list-unstyled">
              <li
                data-tab="#description"
                className={`tab-btn ${active=="spreads"&&"active-btn"}`}
                id="tab2"
                onClick={()=>setActive("spreads")}
              >
                <span id="tabb">
                  <b>Spreads From</b>
                </span>
              </li>
              <li data-tab="#specifications" className={`tab-btn ${active=="conditions"&&"active-btn"}`}id="tab2"   onClick={()=>setActive("conditions")}>
                <span id="tabb">
                  <b>Conditions</b>
                </span>
              </li>
              <li data-tab="#swaps" className={`tab-btn ${active=="swaps"&&"active-btn"}`} id="tab2"   onClick={()=>setActive("swaps")}>
                <span id="tabb">
                  <b>Swaps</b>
                </span>
              </li>
            </ul>
            <div className="tabs-content">
              {/*tab*/}
              <div className={`tab ${active=="spreads"&&"active-tab"}`} >
                {/*Review One Start*/}
                <div className="review-one">
                  <div className="comments-area">
                    {/*Progress One Start*/}
                    <section
                      className="progress-one"
                      style={{ padding: "0px 0 50px" }}
                    >
                      <div className="container">
                        {/* <h3 class="progress-one__title">We have the Tools and Expertise <br>
              to help you Succeed online</h3> */}
                        <div className="row" style={{ borderRadius: 10 }}>
                          <div className="col-xl-12">
                            <div className="progress-one__left">
                              <br />
                              <div className="progress-one__progress-box">
                                <div data-aos="fade-right">
                                  <div className="container conditions">
                                    <div className="row header">
                                      <div className="col-sm-6 col-xs-6">
                                        Symbol
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        Spread
                                      </div>
                                    </div>
                                    {/* Insert the rest of the content here */}
                                    {/* ... */}
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        USDJPY
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.022286942
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        GBPJPY
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.030721521
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        EURJPY
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.021385535
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        AUDJPY
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.024269214
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        CADJPY
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.027738019
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        CHFJPY
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.027084795
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        NZDJPY
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.02766442
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        GBPJPY.m
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.034288032
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        USDJPY.m
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.023541728
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        EURJPY.m
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.02474717
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        EURHUF
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.358289444
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        CADJPY.m
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.028188776
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        AUDJPY.m
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.025519231
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        EURUSD
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.00014898
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        NZDJPY.m
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.028219858
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        GBPUSD
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.000213589
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        USDHUF
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.438273333
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        CHFJPY.m
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.031166667
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        EURUSD.m
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.000207651
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        USDCAD
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.000202279
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        USDZAR
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.006110299
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        AUDUSD
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.000181261
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        EURAUD
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.000282689
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        GBPUSD.m
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.000245619
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        USDBRL
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.005067708
                                      </div>
                                    </div>
                                    <div className="row list last">
                                      <div className="col-sm-6 col-xs-6">
                                        USDINR
                                      </div>
                                      <div className="col-sm-6 col-xs-6">
                                        0.0723
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
              {/*tab*/}
              <div className={`tab ${active=="conditions"&&"active-tab"}`} >
                {/*Review One Start*/}
                <div className="review-one">
                  <div className="comments-area">
                    {/*Progress One Start*/}
                    <section
                      className="progress-one"
                      style={{ padding: "60px 0 120px" }}
                    >
                      <div className="container">
                        {/* <h3 class="progress-one__title">We have the Tools and Expertise <br>
              to help you Succeed online</h3> */}
                        <div className="row" style={{ borderRadius: 10 }}>
                          <div className="col-xl-12">
                            <div className="progress-one__right">
                              <div className="progress-one__img-box">
                                <div className="progress-one__img">
                                  <div data-aos="fade-left">
                                    <div className="container conditions">
                                      {/* Insert the rest of the content here */}
                                      {/* ... */}
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          Initial Minimum Funding
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          $10
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          Commissions
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          none
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          Spread Type
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          Floating
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          Minimum Order Size
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          0.01 lot = 1,000 of base currency
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          Stopout Level
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          Equity = 40% of used margin
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          Server Time
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          GMT+3
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          Account Denomination
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          USD, EUR, GBP
                                        </div>
                                      </div>
                                    </div>
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
                  </div>
                </div>
              </div>
              {/*tab*/}
              <div className={`tab ${active=="swaps"&&"active-tab"}`} >
                {/*Review One Start*/}
                <div className="review-one">
                  <div className="comments-area">
                    {/*Progress One Start*/}
                    <section
                      className="progress-one"
                      style={{ padding: "60px 0 120px" }}
                    >
                      <div className="container">
                        {/* <h3 class="progress-one__title">We have the Tools and Expertise <br>
              to help you Succeed online</h3> */}
                        <div className="row" style={{ borderRadius: 10 }}>
                          <div className="col-xl-12">
                            <div className="progress-one__right">
                              <div className="progress-one__img-box">
                                <div className="progress-one__img">
                                  <div data-aos="fade-left">
                                    <div className="container conditions">
                                      <div className="row header">
                                        <div className="col-sm-6 col-xs-6">
                                          Symbol
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          Long
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          Short
                                        </div>
                                      </div>
                                    
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          EURUSD
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -7.08
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          3.44
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          AUDUSD
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -3.96
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          0.64
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          EURGBP
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -6.12
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          1.84
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          GBPUSD
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -2.58
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -1.176
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          NZDUSD
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -1.56
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -2.4
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          USDCAD
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -0.336
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -5.04
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          USDCHF
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          5.4
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -12
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          USDJPY
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          14.536
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -26.292
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          EURCHF
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          2.32
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -7.44
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          AUDCAD
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -3.96
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -0.36
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          AUDCHF
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          1.84
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -6.36
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          AUDJPY
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          7.44
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -15.24
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          AUDNZD
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -7.8
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          1.12
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          CADCHF
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          3.04
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -8.28
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          CADJPY
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          10
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -18.96
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          CHFJPY
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          4.704
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -12.42
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          EURAUD
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -5.52
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          0.48
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          EURCAD
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -7.68
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          2.16
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          EURCAD
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -7.68
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          2.16
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          EURJPY
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          10.96
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -20.64
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          EURNZD
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -15
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          4.8
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          GBPJPY
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          19.04
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -33.36
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          NZDJPY
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          9.04
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -18.84
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          GBPCHF
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          6.32
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -14.88
                                        </div>
                                      </div>
                                      <div className="row list last">
                                        <div className="col-sm-6 col-xs-6">
                                          GBPAUD
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          2.32
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                          -8.64
                                        </div>
                                      </div>
                                    </div>
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
                  </div>
                </div>
              </div>
            </div>
            {/*tab*/}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Shop Details End*/}
  {/*FAQ One Start*/}
  <section className="faq-one1" style={{ padding: "0px 0 120px" }}>
  <div className="container">
    <div className="row">
      <div className="col-xl-12 col-lg-12">
        <div className="faq-one__left">
          <div className="faq-one__agency-questions-one">
            <h2 className="section-title__title">Frequently Asked Questions</h2>
          </div>
          {/* <div
            className="accrodion-grp faq-one-accrodion"
            data-grp-name="faq-one-accrodion-1"
          >
            <div className="accrodion">
              <div className="accrodion-title">
                <h4>What is forex trading?</h4>
              </div>
              <div className="accrodion-content"  >
                <div className="inner">
                  <p>
                    Forex trading refers to the buying and selling of currencies
                    on the foreign exchange market. Traders speculate on the
                    price movements of different currency pairs, aiming to
                    profit from these fluctuations.
                  </p>
                </div>
               
              </div>
            </div>
            <div className="accrodion">
              <div className="accrodion-title">
                <h4>What influences forex prices?</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>
                    Forex prices are influenced by a variety of factors,
                    including economic indicators, geopolitical events, central
                    bank policies, interest rates, and market sentiment.
                  </p>
                </div>
               
              </div>
            </div>
            <div className="accrodion">
              <div className="accrodion-title">
                <h4>How can I start trading forex?</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>
                    To start trading forex, you'll typically need to open a
                    trading account with a forex broker like Pepperstone. You
                    can then deposit funds into your account and start trading
                    any currency pair.
                  </p>
                </div>
               
              </div>
            </div>
            <div className="accrodion">
              <div className="accrodion-title">
                <h4>What is a currency pair?</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>
                    A currency pair consists of two currencies quoted in
                    relation to each other. For example, EUR/USD represents the
                    euro against the U.S. dollar. The first currency in the pair
                    is the base currency, and the second currency is the quote
                    currency. At Pepperstone, you can trade over 60+ currency
                    pairs including majors, minors, crosses and exotics.
                  </p>
                </div>
               
              </div>
            </div>
            <div className="accrodion">
              <div className="accrodion-title">
                <h4>What is technical analysis?</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>
                    Technical analysis involves analysing historical price data,
                    charts, and indicators to identify patterns, trends, and
                    potential trading opportunities. Traders use technical
                    analysis to make predictions about future price movements. A
                    broker like Pepperstone offers several tools to assist
                    traders with technical analysis including powerful charts.
                  </p>
                </div>
               
              </div>
            </div>
            <div className="accrodion">
              <div className="accrodion-title">
                <h4>What is fundamental analysis?</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>
                    Fundamental analysis involves assessing economic, financial,
                    and geopolitical factors that may influence currency prices.
                    Traders using fundamental analysis consider factors such as
                    economic indicators, central bank policies, and news events.
                  </p>
                </div>
               
              </div>
            </div>
            <div className="accrodion">
              <div className="accrodion-title">
                <h4>What risks are associated with forex trading?</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>
                    Forex trading carries various risks, including market
                    volatility, leverage-related risks, liquidity risks, and the
                    risk of loss. Traders should carefully manage their risk
                    exposure, use risk management tools, and have a solid
                    understanding of the market before engaging in forex
                    trading.
                  </p>
                </div>
               
              </div>
            </div>
          </div> */}
          <div>
      <StyledAccordion>
        <AccordionSummary
          expandIcon={<AddIcon />} // Plus icon beside the title
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">What is forex trading?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Forex trading refers to the buying and selling of currencies on the foreign exchange market.
            Traders speculate on the price movements of different currency pairs, aiming to profit from these fluctuations.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<AddIcon />} // Plus icon beside the title
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6">What influences forex prices?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Forex prices are influenced by a variety of factors, including economic indicators, geopolitical events, central bank policies, interest rates, and market sentiment.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<AddIcon />} // Plus icon beside the title
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">How can I start trading forex?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To start trading forex, you'll typically need to open a trading account with a forex broker like Pepperstone. You can then deposit funds into your account and start trading any currency pair.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<AddIcon />} // Plus icon beside the title
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography variant="h6">What is a currency pair?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A currency pair consists of two currencies quoted in relation to each other. For example, EUR/USD represents the euro against the U.S. dollar. The first currency in the pair is the base currency, and the second currency is the quote currency. At Pepperstone, you can trade over 60+ currency pairs including majors, minors, crosses, and exotics.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<AddIcon />} // Plus icon beside the title
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography variant="h6">What is technical analysis?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Technical analysis involves analyzing historical price data, charts, and indicators to identify patterns, trends, and potential trading opportunities. Traders use technical analysis to make predictions about future price movements. A broker like Pepperstone offers several tools to assist traders with technical analysis including powerful charts.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<AddIcon />} // Plus icon beside the title
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography variant="h6">What is fundamental analysis?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Fundamental analysis involves assessing economic, financial, and geopolitical factors that may influence currency prices. Traders using fundamental analysis consider factors such as economic indicators, central bank policies, and news events.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<AddIcon />} // Plus icon beside the title
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography variant="h6">What risks are associated with forex trading?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Forex trading carries various risks, including market volatility, leverage-related risks, liquidity risks, and the risk of loss. Traders should carefully manage their risk exposure, use risk management tools, and have a solid understanding of the market before engaging in forex trading.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
    </div>
        </div>
      </div>
    </div>
  </div>
</section>

</>

  )
}

export default Forex
