import React, { useState } from 'react'

function TransXCopy() {
  const [active,setActive]=useState("key")
  return (
    <>
    <section className="page-header">
      <div
        className="page-header-bg-2"
        style={{ backgroundImage: "url(/assets/images/img1/b21.jpg)" }}
      ></div>
      <div className="container">
        <div className="page-header__inner">
          <h2>TransX Copy Trade</h2>
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
            <div className="progress-one__right">
              <div className="progress-one__img-box">
                <div className="progress-one__img">
                  <div data-aos="fade-left">
                    <img src="/assets/images/img1/section/copy.png" alt="" />
                  </div>
                </div>
                {/* <div class="progress-one__shape-1 float-bob-x">
                                <img src="/assets/images/shapes/progress-one-shape-1.png" alt="">
                            </div> */}
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="progress-one__left">
              <br />
              <div className="progress-one__progress-box">
                <div data-aos="fade-right">
                  <h2 className="section-title__title ">Why TransX Copy Trade</h2>
                  <div className="progress-levels">
                    {/*Skill Box*/}
                    <div className="progress-box">
                      <div className="bar pt-4">
                        <p style={{ color: "black", textAlign: "justify" }}>
                          Copy trading is a form of investing in which individuals
                          can automatically copy the trades of experienced and
                          successful traders.
                        </p>
                        <p
                          className="pt-3"
                          style={{ color: "black", textAlign: "justify" }}
                        >
                          {" "}
                          This allows the less experienced investor to replicate
                          the trade strategies of professionals without needing to
                          make individual trading decisions themselves.
                        </p>
                        <p
                          className="pt-3"
                          style={{ color: "black", textAlign: "justify" }}
                        >
                          Here's a more detailed overview:
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
    {/*Progress One End*/}
    {/*Shop Details Start*/}
    <section
      className="pricing"
      style={{
        backgroundImage: "url(/assets/images/b1.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingTop: 30
      }}
    >
      <div className="container">
        <div className="shop-details__bottom">
          <div className="shop-details__description">
            <div className="shop-details__main-tab-box tabs-box">
              <ul className="tab-buttons clearfix list-unstyled" style={{width:'fit-content',margin:'auto'}}>
                <li data-tab="#description"               className={`tab-btn ${active=="key"&&"active-btn"}`} onClick={()=>setActive('key')}>
                  <span>Key Features</span>
                </li>
                <li data-tab="#specifications"               className={`tab-btn ${active=="benifits"&&"active-btn"}`} onClick={()=>setActive('benifits')} >
                  <span>Benefits</span>
                </li>
                <li data-tab="#reviews"               className={`tab-btn ${active=="draw"&&"active-btn"}`} onClick={()=>setActive('draw')}>
                  <span>Potential Drawbacks</span>
                </li>
              </ul>
              <div className="tabs-content">
                {/*tab*/}
                <div className={`tab ${active=="key"&&"active-tab"}`} id="description">
                  <div className="shop-details__tab-content-inner">
                    {/*Review One Start*/}
                    <div className="review-one">
                      <div className="team-one__bg" />
                      <div className="comments-area">
                        <div className="review-one__title"></div>
                        {/*Start Comment Box*/}
                        <div className="comment-box">
                          <div className="comment">
                            <div className="review-one__content">
                              <div className="review-one__content-top">
                                <div className="info">
                                  <h2 style={{ color: "white" }}>
                                    Automatic Copying{" "}
                                  </h2>
                                </div>
                              </div>
                              <div className="review-one__content-bottom">
                                <p style={{ color: "white" }}>
                                  Once an investor decides to copy a trader, all
                                  the trades made by the copied trader are
                                  automatically executed in the investor's account
                                  in proportion to the allocated funds.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End Comment Box*/}
                        {/*Start Comment Box*/}
                        <div className="comment-box">
                          <div className="comment">
                            <div className="review-one__content">
                              <div className="review-one__content-top">
                                <div className="info">
                                  <h2 style={{ color: "white" }}>
                                    Diverse Portfolios
                                  </h2>
                                </div>
                              </div>
                              <div className="review-one__content-bottom">
                                <p style={{ color: "white" }}>
                                  Investors can choose to copy one or multiple
                                  traders, allowing them to diversify their
                                  portfolio based on different trading strategies
                                  and risk profiles.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End Comment Box*/}
                        {/*Start Comment Box*/}
                        <div className="comment-box">
                          <div className="comment">
                            <div className="review-one__content">
                              <div className="review-one__content-top">
                                <div className="info">
                                  <h2 style={{ color: "white" }}>
                                    Controlled Risks{" "}
                                  </h2>
                                </div>
                              </div>
                              <div className="review-one__content-bottom">
                                <p style={{ color: "white" }}>
                                  Most copy trading platforms allow investors to
                                  set stop-loss limits to manage potential losses.
                                  Additionally, investors can disconnect from a
                                  trader or change the funds allocated at any
                                  time.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End Comment Box*/}
                        {/*Start Comment Box*/}
                        <div className="comment-box">
                          <div className="comment">
                            <div className="review-one__content">
                              <div className="review-one__content-top">
                                <div className="info">
                                  <h2 style={{ color: "white" }}>
                                    Transparency{" "}
                                  </h2>
                                </div>
                              </div>
                              <div className="review-one__content-bottom">
                                <p style={{ color: "white" }}>
                                  Typically, the performance, trading history,
                                  risk score, and other relevant metrics of each
                                  trader are available on the platform, allowing
                                  potential copiers to make informed decisions.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End Comment Box*/}
                        {/*Start Comment Box*/}
                        <div className="comment-box">
                          <div className="comment">
                            <div className="review-one__content">
                              <div className="review-one__content-top">
                                <div className="info">
                                  <h2 style={{ color: "white" }}>
                                    Social Interaction{" "}
                                  </h2>
                                </div>
                              </div>
                              <div className="review-one__content-bottom">
                                <p style={{ color: "white" }}>
                                  Many copy trading platforms incorporate social
                                  features, enabling traders and copiers to
                                  interact, discuss strategies, and share
                                  insights.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End Comment Box*/}
                      </div>
                    </div>
                    {/*Review One End*/}
                  </div>
                </div>
                {/*tab*/}
                <div className={`tab ${active=="benifits"&&"active-tab"}`} id="specifications">
                  <div className="shop-details__tab-content-inner">
                    {/*Review One Start*/}
                    <div className="review-one">
                      <div className="comments-area">
                        <div className="review-one__title"></div>
                        {/*Start Comment Box*/}
                        <div className="comment-box">
                          <div className="comment">
                            <div className="review-one__content">
                              <div className="review-one__content-top">
                                <div className="info">
                                  <h2 style={{ color: "white" }}>Time-Saving </h2>
                                </div>
                              </div>
                              <div className="review-one__content-bottom">
                                <p style={{ color: "white" }}>
                                  Investors don't need to spend time analyzing
                                  markets and making trade decisions
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End Comment Box*/}
                        {/*Start Comment Box*/}
                        <div className="comment-box">
                          <div className="comment">
                            <div className="review-one__content">
                              <div className="review-one__content-top">
                                <div className="info">
                                  <h2 style={{ color: "white" }}>
                                    Learning Opportunity{" "}
                                  </h2>
                                </div>
                              </div>
                              <div className="review-one__content-bottom">
                                <p style={{ color: "white" }}>
                                  Beginners can learn by observing the strategies
                                  and decisions of experienced traders.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End Comment Box*/}
                        {/*Start Comment Box*/}
                        <div className="comment-box">
                          <div className="comment">
                            <div className="review-one__content">
                              <div className="review-one__content-top">
                                <div className="info">
                                  <h2 style={{ color: "white" }}>
                                    Accessibility
                                  </h2>
                                </div>
                              </div>
                              <div className="review-one__content-bottom">
                                <p style={{ color: "white" }}>
                                  Offers a gateway for those who might be new to
                                  trading or those who don't have the confidence
                                  or knowledge to trade on their own.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End Comment Box*/}
                        {/*Start Comment Box*/}
                        <div className="comment-box">
                          <div className="comment">
                            <div className="review-one__content">
                              <div className="review-one__content-top">
                                <div className="info">
                                  <h2 style={{ color: "white" }}>
                                    Diversification{" "}
                                  </h2>
                                </div>
                              </div>
                              <div className="review-one__content-bottom">
                                <p style={{ color: "white" }}>
                                  Allows investors to spread their capital among
                                  various traders and strategies.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End Comment Box*/}
                      </div>
                    </div>
                    {/*Review One End*/}
                  </div>
                </div>
                {/*tab*/}
                <div className={`tab ${active=="draw"&&"active-tab"}`} id="reviews">
                  <div className="shop-details__tab-content-inner">
                    {/*Review One Start*/}
                    <div className="review-one">
                      <div className="comments-area">
                        <div className="review-one__title"></div>
                        {/*Start Comment Box*/}
                        <div className="comment-box">
                          <div className="comment">
                            <div className="review-one__content">
                              <div className="review-one__content-top">
                                <div className="info">
                                  <h2 style={{ color: "white" }}>Dependence </h2>
                                </div>
                              </div>
                              <div className="review-one__content-bottom">
                                <p style={{ color: "white" }}>
                                  Over-reliance on copy trading can hinder an
                                  individual's growth and understanding of the
                                  market.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End Comment Box*/}
                        {/*Start Comment Box*/}
                        <div className="comment-box">
                          <div className="comment">
                            <div className="review-one__content">
                              <div className="review-one__content-top">
                                <div className="info">
                                  <h2 style={{ color: "white" }}>
                                    No Guarantee{" "}
                                  </h2>
                                </div>
                              </div>
                              <div className="review-one__content-bottom">
                                <p style={{ color: "white" }}>
                                  Just because a trader has been successful in the
                                  past doesn't guarantee future profits.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End Comment Box*/}
                        {/*Start Comment Box*/}
                        <div className="comment-box">
                          <div className="comment">
                            <div className="review-one__content">
                              <div className="review-one__content-top">
                                <div className="info">
                                  <h2 style={{ color: "white" }}>
                                    Lack of Control{" "}
                                  </h2>
                                </div>
                              </div>
                              <div className="review-one__content-bottom">
                                <p style={{ color: "white" }}>
                                  Investors give up a degree of control over
                                  individual trade decisions.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End Comment Box*/}
                        {/*Start Comment Box*/}
                        <div className="comment-box">
                          <div className="comment">
                            <div className="review-one__content">
                              <div className="review-one__content-top">
                                <div className="info">
                                  <h2 style={{ color: "white" }}>
                                    Platform Fees
                                  </h2>
                                </div>
                              </div>
                              <div className="review-one__content-bottom">
                                <p style={{ color: "white" }}>
                                  Some platforms might charge additional fees for
                                  using the copy trading service.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End Comment Box*/}
                      </div>
                    </div>
                    {/*Review One End*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Shop Det
     */}
  </>
  
  )
}

export default TransXCopy
