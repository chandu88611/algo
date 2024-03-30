import React from 'react'

function Market() {
  return (
    <>
    <section className="page-header">
      <div
        className="page-header-bg-2"
        style={{ backgroundImage: "url(/assets/images/img1/b22.png)" }}
      ></div>
      <div className="container">
        <div className="page-header__inner">
          <h2>Market Pshycology</h2>
        </div>
      </div>
    </section>
    {/*CTA Two Start*/}
    <section className="cta-two">
      <div className="cta-two__shape-1">
        <img src="/assets/images/shapes/cta-two-shape-1.png" alt="" />
      </div>
      <div className="cta-two__shape-2">
        <img src="/assets/images/shapes/cta-two-shape-2.png" alt="" />
      </div>
      <div className="container">
        <div className="cta-two__inner">
          <div className="cta-two__title-box">
            <h3 className="cta-two__title text-center">Trading Psychology</h3>
            <p className="cta-two__text" style={{ color: "white", fontSize: 18 }}>
              Trading psychology refers to the emotional and mental aspects that
              influence a trader's decision-making process in the financial
              markets. It plays a critical role in determining a trader's success
              or failure. Here are some key aspects of trading psychology
            </p>
          </div>
        </div>
      </div>
    </section>
    {/*CTA Two End*/}
    {/*Team Page Start*/}
    <section className="team-page">
      <div
        className="team-one__bg"
        style={{ backgroundImage: "url(/assets/images/TradingBG.jpg)" }}
      />
      <div className="container">
        <div className="row">
          {/*Team One Single Start*/}
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="team-one__single">
              <div className="team-one__img-box">
                <div className="team-one__img">
                  <img src="/assets/images/trading1/emotion.jpg" alt=""  style={{ height: 197 }} />
                </div>
                {/* <div class="team-one__icon">
                                <a href="#"><span class="icon-plus"></span></a>
                            </div> */}
              </div>
              <div className="team-one__content" style={{ height:'320px' }}>
                <div className="team-one__shape-1">
                  <img
                    src="/assets/images/shapes/team-one-shape-1.png"
                    alt=""
                    style={{ width: 90 }}
                  />
                </div>
                <div className="team-one__shape-2">
                  <img
                    src="/assets/images/shapes/team-one-shape-1.png"
                    alt=""
                    style={{ width: 90 }}
                  />
                </div>
                <h3 className="team-one__name">
                  <a href="#">Emotions</a>
                </h3>
                <p className="team-one__sub-title parag">
                  {" "}
                  Emotions like fear and greed can significantly impact trading
                  decisions. Fear of losses may lead to premature exits or
                  hesitation to take necessary risks, while greed can lead to
                  overtrading or holding onto positions too long.
                </p>
              </div>
            </div>
          </div>
          {/*Team One Single End*/}
          {/*Team One Single Start*/}
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div className="team-one__single">
              <div className="team-one__img-box">
                <div className="team-one__img">
                  <img
                    src="/assets/images/trading1/discipline.jpg"
                    alt=""
                    style={{ height: 197 }}
                  />
                </div>
                {/* <div class="team-one__icon">
                                <a href="#"><span class="icon-plus"></span></a>
                            </div> */}
              </div>
              <div className="team-one__content" style={{ height:'320px' }}>
                <div className="team-one__shape-1">
                  <img
                    src="/assets/images/shapes/team-one-shape-1.png"
                    alt=""
                    style={{ width: 90 }}
                  />
                </div>
                <div className="team-one__shape-2">
                  <img
                    src="/assets/images/shapes/team-one-shape-1.png"
                    alt=""
                    style={{ width: 90 }}
                  />
                </div>
                <h3 className="team-one__name">
                  <a href="#">Discipline</a>
                </h3>
                <p className="team-one__sub-title parag">
                  Discipline is crucial in following a trading plan and sticking
                  to a set of rules, even when emotions are high. Lack of
                  discipline can lead to impulsive decisions and erratic trading
                  behavior.
                </p>
              </div>
            </div>
          </div>
          {/*Team One Single End*/}
          {/*Team One Single Start*/}
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="team-one__single">
              <div className="team-one__img-box">
                <div className="team-one__img">
                  <img
                    src="/assets/images/trading1/risk.jpg"
                    alt=""
                    style={{ height: 197 }}
                  />
                </div>
                {/*  <div class="team-one__icon">
                                <a href="#"><span class="icon-plus"></span></a>
                            </div> */}
              </div>
              <div className="team-one__content" style={{ height:'320px' }}>
                <div className="team-one__shape-1">
                  <img
                    src="/assets/images/shapes/team-one-shape-1.png"
                    alt=""
                    style={{ width: 90 }}
                  />
                </div>
                <div className="team-one__shape-2">
                  <img
                    src="/assets/images/shapes/team-one-shape-1.png"
                    alt=""
                    style={{ width: 90 }}
                  />
                </div>
                <h3 className="team-one__name">
                  <a href="#">Risk Management</a>
                </h3>
                <p className="team-one__sub-title parag">
                  Effective risk management is part of trading psychology. Traders
                  must determine how much capital to risk on each trade and set
                  stop-loss orders to limit potential losses.
                </p>
              </div>
            </div>
          </div>
          {/*Team One Single End*/}
          {/*Team One Single Start*/}
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="400ms"
          >
            <div className="team-one__single">
              <div className="team-one__img-box">
                <div className="team-one__img">
                  <img
                    src="/assets/images/trading1/patience.jpg"
                    alt=""
                    style={{ height: 197 }}
                  />
                </div>
                {/* <div class="team-one__icon">
                                <a href="#"><span class="icon-plus"></span></a>
                            </div> */}
              </div>
              <div className="team-one__content" style={{ height:'320px' }}>
                <div className="team-one__shape-1">
                  <img
                    src="/assets/images/shapes/team-one-shape-1.png"
                    alt=""
                    style={{ width: 90 }}
                  />
                </div>
                <div className="team-one__shape-2">
                  <img
                    src="/assets/images/shapes/team-one-shape-1.png"
                    alt=""
                    style={{ width: 90 }}
                  />
                </div>
                <h3 className="team-one__name">
                  <a href="#">Patience</a>
                </h3>
                <p className="team-one__sub-title parag">
                  Patience is required to wait for the right trading opportunities
                  and not rush into trades out of boredom or the desire for quick
                  profits.
                </p>
              </div>
            </div>
          </div>
          {/*Team One Single End*/}
          {/*Team One Single Start*/}
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="500ms"
          >
            <div className="team-one__single">
              <div className="team-one__img-box">
                <div className="team-one__img">
                  <img
                    src="/assets/images/trading1/confident.jpg"
                    alt=""
                    style={{ height: 197 }}
                  />
                </div>
                {/* <div class="team-one__icon">
                                <a href="#"><span class="icon-plus"></span></a>
                            </div> */}
              </div>
              <div className="team-one__content" style={{ height:'320px' }}>
                <div className="team-one__shape-1">
                  <img src="/assets/images/shapes/team-one-shape-1.png" alt="" />
                </div>
                <div className="team-one__shape-2">
                  <img src="/assets/images/shapes/team-one-shape-2.png" alt="" />
                </div>
                <h3 className="team-one__name">
                  <a href="#">Confidence</a>
                </h3>
                <p className="team-one__sub-title parag">
                  Confidence in one's trading strategy and decision-making is
                  vital. Lack of confidence can lead to second-guessing and
                  hesitation.
                </p>
              </div>
            </div>
          </div>
          {/*Team One Single End*/}
          {/*Team One Single Start*/}
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="team-one__single">
              <div className="team-one__img-box">
                <div className="team-one__img">
                  <img
                    src="/assets/images/trading1/overtrading.jpg"
                    alt=""
                    style={{ height: 197 }}
                  />
                </div>
                {/* <div class="team-one__icon">
                                <a href="#"><span class="icon-plus"></span></a>
                            </div> */}
              </div>
              <div className="team-one__content" style={{ height:'320px' }}>
                <div className="team-one__shape-1">
                  <img src="/assets/images/shapes/team-one-shape-1.png" alt="" />
                </div>
                <div className="team-one__shape-2">
                  <img src="/assets/images/shapes/team-one-shape-2.png" alt="" />
                </div>
                <h3 className="team-one__name">
                  <a href="#">Overtrading</a>
                </h3>
                <p className="team-one__sub-title parag">
                  Overtrading occurs when traders take too many positions at once
                  or trade with larger positions than they can afford. This often
                  results from a desire to recover losses quickly.
                </p>
              
              </div>
            </div>
          </div>
          {/*Team One Single End*/}
          {/*Team One Single Start*/}
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="team-one__single">
              <div className="team-one__img-box">
                <div className="team-one__img">
                  <img
                    src="/assets/images/trading1/adapt.jpg"
                    alt=""
                    style={{ height: 197 }}
                  />
                </div>
                {/* <div class="team-one__icon">
                                <a href="#"><span class="icon-plus"></span></a>
                            </div> */}
              </div>
              <div className="team-one__content" style={{ height:'320px' }}>
                <div className="team-one__shape-1">
                  <img src="/assets/images/shapes/team-one-shape-1.png" alt="" />
                </div>
                <div className="team-one__shape-2">
                  <img src="/assets/images/shapes/team-one-shape-2.png" alt="" />
                </div>
                <h3 className="team-one__name">
                  <a href="#">Adaptability</a>
                </h3>
                <p className="team-one__sub-title parag">
                  Markets can be unpredictable. Traders need to be adaptable and
                  open to adjusting their strategies when market conditions
                  change.
                </p>
              </div>
            </div>
          </div>
          {/*Team One Single End*/}
          {/*Team One Single Start*/}
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="team-one__single">
              <div className="team-one__img-box">
                <div className="team-one__img">
                  <img
                    src="/assets/images/trading1/baises.jpg"
                    alt=""
                    style={{ height: 197 }}
                  />
                </div>
                {/* <div class="team-one__icon">
                                <a href="#"><span class="icon-plus"></span></a>
                            </div> */}
              </div>
              <div className="team-one__content" style={{ height:'320px' }}>
                <div className="team-one__shape-1">
                  <img src="/assets/images/shapes/team-one-shape-1.png" alt="" />
                </div>
                <div className="team-one__shape-2">
                  <img src="/assets/images/shapes/team-one-shape-2.png" alt="" />
                </div>
                <h3 className="team-one__name">
                  <a href="#">Cognitive Biases</a>
                </h3>
                <p className="team-one__sub-title parag">
                  Traders may fall victim to cognitive biases, such as
                  confirmation bias (seeking information that confirms
                  preconceived notions) or anchoring bias (placing too much
                  importance on one piece of information).
                </p>
              </div>
            </div>
          </div>
          {/*Team One Single End*/}
          {/*Team One Single Start*/}
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="team-one__single">
              <div className="team-one__img-box">
                <div className="team-one__img">
                  <img
                    src="/assets/images/trading1/loss1.jpg"
                    alt=""
                    style={{ height: 197 }}
                  />
                </div>
                {/* <div class="team-one__icon">
                                <a href="#"><span class="icon-plus"></span></a>
                            </div> */}
              </div>
              <div className="team-one__content" style={{ height:'320px' }}>
                <div className="team-one__shape-1">
                  <img src="/assets/images/shapes/team-one-shape-1.png" alt="" />
                </div>
                <div className="team-one__shape-2">
                  <img src="/assets/images/shapes/team-one-shape-2.png" alt="" />
                </div>
                <h3 className="team-one__name">
                  <a href="#">Loss Aversion</a>
                </h3>
                <p className="team-one__sub-title parag">
                  Traders often experience a stronger emotional response to losses
                  than gains of equal magnitude, leading them to avoid taking
                  necessary losses or exiting profitable positions too soon.
                </p>
              </div>
            </div>
          </div>
          {/*Team One Single End*/}
          {/*Team One Single Start*/}
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="team-one__single">
              <div className="team-one__img-box">
                <div className="team-one__img">
                  <img
                    src="/assets/images/trading1/mindset.jpg"
                    alt=""
                    style={{ height: 197 }}
                  />
                </div>
                {/* <div class="team-one__icon">
                                <a href="#"><span class="icon-plus"></span></a>
                            </div> */}
              </div>
              <div className="team-one__content" style={{ height:'320px' }}>
                <div className="team-one__shape-1">
                  <img src="/assets/images/shapes/team-one-shape-1.png" alt="" />
                </div>
                <div className="team-one__shape-2">
                  <img src="/assets/images/shapes/team-one-shape-2.png" alt="" />
                </div>
                <h3 className="team-one__name">
                  <a href="#">Mindset</a>
                </h3>
                <p className="team-one__sub-title parag">
                  A trader's mindset can be categorized as either a growth mindset
                  (believing in the ability to improve and learn from mistakes) or
                  a fixed mindset (believing abilities are static). A growth
                  mindset can help traders adapt and learn from their experiences.
                </p>
              </div>
            </div>
          </div>
          {/*Team One Single End*/}
          {/*Team One Single Start*/}
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="team-one__single">
              <div className="team-one__img-box">
                <div className="team-one__img">
                  <img
                    src="/assets/images/trading1/fomo.jpg"
                    alt=""
                    style={{ height: 197 }}
                  />
                </div>
                {/* <div class="team-one__icon">
                                <a href="#"><span class="icon-plus"></span></a>
                            </div> */}
              </div>
              <div className="team-one__content" style={{ height:'320px' }}>
                <div className="team-one__shape-1">
                  <img src="/assets/images/shapes/team-one-shape-1.png" alt="" />
                </div>
                <div className="team-one__shape-2">
                  <img src="/assets/images/shapes/team-one-shape-2.png" alt="" />
                </div>
                <h3 className="team-one__name">
                  <a href="#">FOMO (Fear of Missing Out)</a>
                </h3>
                <p className="team-one__sub-title parag">
                  FOMO can lead to impulsive trades made out of a fear of missing
                  out on potentially profitable moves. It's essential to make
                  decisions based on analysis rather than emotional reactions.
                </p>
              </div>
            </div>
          </div>
          {/*Team One Single End*/}
          {/*Team One Single Start*/}
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="team-one__single">
              <div className="team-one__img-box">
                <div className="team-one__img">
                  <img
                    src="/assets/images/trading1/stress.jpg"
                    alt=""
                    style={{ height: 197 }}
                  />
                </div>
                {/* <div class="team-one__icon">
                                <a href="#"><span class="icon-plus"></span></a>
                            </div> */}
              </div>
              <div className="team-one__content" style={{ height:'320px' }}>
                <div className="team-one__shape-1">
                  <img src="/assets/images/shapes/team-one-shape-1.png" alt="" />
                </div>
                <div className="team-one__shape-2">
                  <img src="/assets/images/shapes/team-one-shape-2.png" alt="" />
                </div>
                <h3 className="team-one__name">
                  <a href="#">Stress Management</a>
                </h3>
                <p className="team-one__sub-title parag">
                  Trading can be stressful, especially during volatile market
                  conditions. Traders must develop strategies to manage stress,
                  such as through mindfulness, exercise, or taking breaks.
                </p>
              </div>
            </div>
          </div>
          {/*Team One Single End*/}
          {/*Team One Single Start*/}
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="600ms"
          ></div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="team-one__single">
              <div className="team-one__img-box">
                <div className="team-one__img">
                  <img
                    src="/assets/images/trading1/record.jpg"
                    alt=""
                    style={{ height: 197 }}
                  />
                </div>
                {/* <div class="team-one__icon">
                                <a href="#"><span class="icon-plus"></span></a>
                            </div> */}
              </div>
              <div className="team-one__content" style={{ height:'320px' }}>
                <div className="team-one__shape-1">
                  <img src="/assets/images/shapes/team-one-shape-1.png" alt="" />
                </div>
                <div className="team-one__shape-2">
                  <img src="/assets/images/shapes/team-one-shape-2.png" alt="" />
                </div>
                <h3 className="team-one__name">
                  <a href="#">Record Keeping</a>
                </h3>
                <p className="team-one__sub-title parag">
                  Keeping a trading journal to track trades and analyze past
                  decisions can be beneficial for learning from mistakes and
                  improving future performance.
                </p>
              </div>
            </div>
          </div>
          {/*Team One Single End*/}
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="600ms"
          ></div>
        </div>
      </div>
    </section>
    {/*Team Page End*/}
    {/*Blog Page Start*/}
    <section className="blog-page" style={{ background: "#fff0f0" }}>
      <h2 style={{ textAlign: "center" }}>
        <b>Market Psychology</b>
      </h2>
      <br />
      <p style={{ padding: "0 70px 0 70px" }}>
        Market psychology, also known as investor sentiment or crowd psychology,
        refers to the collective psychological and emotional factors that
        influence the behavior of participants in financial markets. It plays a
        significant role in determining market trends and price movements. Market
        psychology is based on the idea that human emotions, biases, and herd
        behavior can impact trading decisions and market dynamics. Here are some
        key aspects of market psychology
      </p>{" "}
      <br />
      <div className="container">
        <div className="row">
          {/*Blog One Single Start*/}
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__img-box">
                <div className="blog-one__img">
                  <img src="/assets/images/trading1/Fear-Greed.jpg" alt=""          style={{ height: 197 }}/>
                </div>
                {/* <div class="blog-one__tag-and-date">
                                <div class="blog-one__tag">
                                    <p>Greed and Fear</p>
                                </div>
                                <div class="blog-one__date">
                                    <p>1 Jan 2022</p>
                                </div>
                            </div> */}
              </div>
              <div className="blog-one__content">
                <h3 className="blog-one__title">
                  <a href="blog-details.html">Greed and Fear</a>
                </h3>
                <div className="blog-one__meta-and-arrow" style={{ height:'320px' }}>
                  <ul className="blog-one__meta-list list-unstyled">
                    <li>
                      <a href="blog-details.html">
                        Two dominant emotions in market psychology are greed and
                        fear. Greed can drive investors to buy assets at high
                        prices in anticipation of further gains, while fear can
                        lead to panic selling during market downturns.{" "}
                      </a>
                    </li>
                  </ul>
                  {/* <div class="blog-one__arrow-box">
                                    <a href="blog-details.html" class="blog-one__arrow"><span
                                            class="icon-right-arrow-2"></span></a>
                                </div> */}
                </div>
              </div>
            </div>
          </div>
          {/*Blog One Single End*/}
          {/*Blog One Single Start*/}
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__img-box">
                <div className="blog-one__img">
                  <img src="/assets/images/trading1/maxresdefault.jpg" alt=""         style={{ height: 197 }} />
                </div>
                {/* <div class="blog-one__tag-and-date">
                                <div class="blog-one__tag">
                                    <p>Corporate</p>
                                </div>
                                <div class="blog-one__date">
                                    <p>1 Jan 2022</p>
                                </div>
                            </div> */}
              </div>
              <div className="blog-one__content">
                <h3 className="blog-one__title">
                  <a href="#">Herd Mentality</a>
                </h3>
                <div className="blog-one__meta-and-arrow" style={{ height:'320px' }}>
                  <ul className="blog-one__meta-list list-unstyled">
                    <li>
                      <a href="blog-details.html">
                        {" "}
                        Investors often follow the crowd, assuming that if others
                        are buying or selling, they should too. This herd
                        mentality can lead to market bubbles and crashes.{" "}
                      </a>
                      <br />
                      <br />
                    </li>
                    {/* <li>
                                        <a href="blog-details.html"><i class="icon-comment-outline"></i>07
                                            Comment</a>
                                    </li> */}
                  </ul>
                  {/* <div class="blog-one__arrow-box">
                                    <a href="blog-details.html" class="blog-one__arrow"><span
                                            class="icon-right-arrow-2"></span></a>
                                </div> */}
                </div>
              </div>
            </div>
          </div>
          {/*Blog One Single End*/}
          {/*Blog One Single Start*/}
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__img-box">
                <div className="blog-one__img">
                  <img src="/assets/images/trading1/confidence.jpg" alt=""         style={{ height: 197 }}/>
                </div>
                {/* <div class="blog-one__tag-and-date">
                                <div class="blog-one__tag">
                                    <p>Corporate</p>
                                </div>
                                <div class="blog-one__date">
                                    <p>1 Jan 2022</p>
                                </div>
                            </div> */}
              </div>
              <div className="blog-one__content">
                <h3 className="blog-one__title">
                  <a href="# ">Overconfidence</a>
                </h3>
                <div className="blog-one__meta-and-arrow" style={{ height:'320px' }}>
                  <ul className="blog-one__meta-list list-unstyled">
                    <li>
                      <a href="blog-details.html">
                        Some investors become overconfident in their abilities,
                        leading them to take excessive risks or ignore warning
                        signs.
                      </a>
                      <br />
                      <br />
                      <br />
                    </li>
                    {/* <li>
                                        <a href="blog-details.html"><i class="icon-comment-outline"></i>07
                                            Comment</a>
                                    </li> */}
                  </ul>
                  {/*  <div class="blog-one__arrow-box">
                                    <a href="blog-details.html" class="blog-one__arrow"><span
                                            class="icon-right-arrow-2"></span></a>
                                </div> */}
                </div>
              </div>
            </div>
          </div>
          {/*Blog One Single End*/}
          {/*Blog One Single Start*/}
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="400ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__img-box">
                <div className="blog-one__img">
                  <img
                    src="/assets/images/trading1/confirm.jpg"
                    alt=""
                    style={{ height: 197 }}
                  />
                </div>
                {/* <div class="blog-one__tag-and-date">
                                <div class="blog-one__tag">
                                    <p>Corporate</p>
                                </div>
                                <div class="blog-one__date">
                                    <p>1 Jan 2022</p>
                                </div>
                            </div> */}
              </div>
              <div className="blog-one__content">
                <h3 className="blog-one__title">
                  <a href="#">Confirmation Bias</a>
                </h3>
                <div className="blog-one__meta-and-arrow" style={{ height:'320px' }}>
                  <ul className="blog-one__meta-list list-unstyled">
                    <li>
                      <a href="blog-details.html">
                        People tend to seek information that confirms their
                        preconceived beliefs and ignore information that
                        contradicts them. In trading, this can lead to selective
                        attention and biased decision-making.
                      </a>
                    </li>
                    {/* <li>
                                        <a href="blog-details.html"><i class="icon-comment-outline"></i>07
                                            Comment</a>
                                    </li> */}
                  </ul>
                  {/* <div class="blog-one__arrow-box">
                                    <a href="blog-details.html" class="blog-one__arrow"><span
                                            class="icon-right-arrow-2"></span></a>
                                </div> */}
                </div>
              </div>
            </div>
          </div>
          {/*Blog One Single End*/}
          {/*Blog One Single Start*/}
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="500ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__img-box">
                <div className="blog-one__img">
                  <img
                    src="/assets/images/trading1/loss.jpg"
                    alt=""
                            style={{ height: 197 }}
                  />
                </div>
                {/* <div class="blog-one__tag-and-date">
                                <div class="blog-one__tag">
                                    <p>Corporate</p>
                                </div>
                                <div class="blog-one__date">
                                    <p>1 Jan 2022</p>
                                </div>
                            </div> */}
              </div>
              <div className="blog-one__content">
                <h3 className="blog-one__title">
                  <a href="#">Loss Aversion</a>
                </h3>
                <div className="blog-one__meta-and-arrow" style={{ height:'320px' }}>
                  <ul className="blog-one__meta-list list-unstyled">
                    <li>
                      <a href="#">
                        Investors often feel the pain of losses more acutely than
                        the pleasure of gains. This can lead to selling winning
                        positions too early and holding onto losing positions in
                        the hope of a recovery.
                      </a>
                    </li>
                  </ul>
                  {/*  <div class="blog-one__arrow-box">
                                    <a href="blog-details.html" class="blog-one__arrow"><span
                                            class="icon-right-arrow-2"></span></a>
                                </div> */}
                </div>
              </div>
            </div>
          </div>
          {/*Blog One Single End*/}
          {/*Blog One Single Start*/}
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__img-box">
                <div className="blog-one__img">
                  <img
                    src="/assets/images/trading1/Recency_bias.jpg"
                    alt=""
                            style={{ height: 197 }}
                  />
                </div>
                {/*  <div class="blog-one__tag-and-date">
                                <div class="blog-one__tag">
                                    <p>Corporate</p>
                                </div>
                                <div class="blog-one__date">
                                    <p>1 Jan 2022</p>
                                </div>
                            </div> */}
              </div>
              <div className="blog-one__content">
                <h3 className="blog-one__title">
                  <a href="#">Recency Bias</a>
                </h3>
                <div className="blog-one__meta-and-arrow" style={{ height:'320px' }}>
                  <ul className="blog-one__meta-list list-unstyled">
                    <li>
                      <a href="#">
                        Investors often give more weight to recent events or
                        trends, assuming they will continue. This can result in
                        irrational exuberance during bull markets and excessive
                        pessimism during bear markets.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*Blog One Single End*/}
          {/*Blog One Single Start*/}
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__img-box">
                <div className="blog-one__img">
                  <img
                    src="/assets/images/trading1/anchor.jpg"
                    alt=""
                            style={{ height: 197 }}
                  />
                </div>
                {/*  <div class="blog-one__tag-and-date">
                                <div class="blog-one__tag">
                                    <p>Corporate</p>
                                </div>
                                <div class="blog-one__date">
                                    <p>1 Jan 2022</p>
                                </div>
                            </div> */}
              </div>
              <div className="blog-one__content">
                <h3 className="blog-one__title">
                  <a href="#">Anchoring</a>
                </h3>
                <div className="blog-one__meta-and-arrow" style={{ height:'320px' }}>
                  <ul className="blog-one__meta-list list-unstyled">
                    <li>
                      <a href="#">
                        Investors may anchor their decisions to a particular price
                        level or recent performance, even when new information
                        suggests a different course of action.
                      </a>
                      <br />
                      <br />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*Blog One Single End*/}
          {/*Blog One Single Start*/}
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__img-box">
                <div className="blog-one__img">
                  <img
                    src="/assets/images/trading1/contradian.jpg"
                    alt=""
                            style={{ height: 197 }}
                  />
                </div>
                {/*  <div class="blog-one__tag-and-date">
                                <div class="blog-one__tag">
                                    <p>Corporate</p>
                                </div>
                                <div class="blog-one__date">
                                    <p>1 Jan 2022</p>
                                </div>
                            </div> */}
              </div>
              <div className="blog-one__content">
                <h3 className="blog-one__title">
                  <a href="#">Contrarianism</a>
                </h3>
                <div className="blog-one__meta-and-arrow" style={{ height:'320px' }}>
                  <ul className="blog-one__meta-list list-unstyled">
                    <li>
                      <a href="#">
                        Contrarian investors go against the prevailing market
                        sentiment. They may buy when others are selling or sell
                        when others are buying, believing that crowd behavior
                        often leads to overreactions.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*Blog One Single End*/}
          {/*Blog One Single Start*/}
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__img-box">
                <div className="blog-one__img">
                  <img
                    src="/assets/images/trading1/market.jpg"
                    alt=""
                            style={{ height: 197 }}
                  />
                </div>
                {/*  <div class="blog-one__tag-and-date">
                                <div class="blog-one__tag">
                                    <p>Corporate</p>
                                </div>
                                <div class="blog-one__date">
                                    <p>1 Jan 2022</p>
                                </div>
                            </div> */}
              </div>
              <div className="blog-one__content">
                <h3 className="blog-one__title">
                  <a href="#">Market Sentiment Indicators</a>
                </h3>
                <div className="blog-one__meta-and-arrow" style={{ height:'320px' }}>
                  <ul className="blog-one__meta-list list-unstyled">
                    <li>
                      <a href="#">
                        Various tools and indicators are used to gauge market
                        sentiment, including surveys, put/call ratios, and
                        sentiment indices. These can provide insights into the
                        collective mood of investors
                      </a>
                      <br />
                      <br />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*Blog One Single End*/}
          {/*Blog One Single Start*/}
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__img-box">
                <div className="blog-one__img">
                  <img
                    src="/assets/images/trading1/behave.jpg"
                    alt=""
                            style={{ height: 197 }}
                  />
                </div>
                {/*  <div class="blog-one__tag-and-date">
                                <div class="blog-one__tag">
                                    <p>Corporate</p>
                                </div>
                                <div class="blog-one__date">
                                    <p>1 Jan 2022</p>
                                </div>
                            </div> */}
              </div>
              <div className="blog-one__content">
                <h3 className="blog-one__title">
                  <a href="#">Behavioral Finance</a>
                </h3>
                <div className="blog-one__meta-and-arrow" style={{ height:'320px' }}>
                  <ul className="blog-one__meta-list list-unstyled">
                    <li>
                      <a href="#">
                        {" "}
                        Behavioral finance is an interdisciplinary field that
                        studies how psychological factors impact financial
                        decision-making. It seeks to understand and explain market
                        anomalies and irrational behavior.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*Blog One Single End*/}
        </div>
      </div>
    </section>
    {/*Blog Page End*/}
    {/*How It Work Start*/}
    <section className="how-it-work how-it-work-two" style={{ paddingTop: 50 }}>
      <div
        className="team-one__bg"
        style={{ backgroundImage: "url(/assets/images/trading1/bg1.jpg)" }}
      />
      <div className="container">
        <div className="section-title text-center">
          <h2 className="section-title__title" style={{ line: "white" }}>
            How can handle the market and trading psychology
          </h2>
          <span className="section-title__tagline" style={{ color: "white" }}>
            <b>
              Handling trading psychology effectively is crucial for traders to
              make informed decisions and maintain a disciplined approach to
              trading. Here are some strategies to help you manage trading
              psychology
            </b>
          </span>
        </div>
        <br />
        <br />
        <div className="how-it-work__bottom">
          <div className="row">
            {/*How It Work Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="how-it-work__single backbg ">
                <div className="how-it-work__count" />
                <div className="how-it-work__icon">
                  <span className="icon-idea" />
                  {/* <span class="icon-photos-brand"></span> */}
                </div>
                <h3 className="how-it-work__title headh3">
                  Create a Trading Plan
                </h3>
                <p className="how-it-work__text-2 para">
                  Develop a well-defined trading plan that includes entry and exit
                  criteria, risk management rules, and position sizing guidelines.
                  Having a plan provides structure and reduces emotional
                  decision-making.
                </p>
              </div>
            </div>
            {/*How It Work Single End*/}
            {/*How It Work Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="how-it-work__single backbg">
                <div className="how-it-work__count" />
                <div className="how-it-work__icon">
                  <span className="">
                    <img
                      src="/assets/images/trading1/goal.png"
                      style={{ height: 90 }}
                    />
                  </span>
                </div>
                <h3 className="how-it-work__title headh3">Set Realistic Goals</h3>
                <p className="how-it-work__text-2 para">
                  Set achievable, specific, and realistic trading goals. Avoid
                  overly ambitious targets that can lead to frustration and
                  impulsive behavior.{" "}
                </p>
                <br />
                <br />
              </div>
            </div>
            {/*How It Work Single End*/}
            {/*How It Work Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="how-it-work__single backbg">
                <div className="how-it-work__count" />
                <div className="how-it-work__icon">
                  <span className="">
                    <img
                      src="/assets/images/trading1/risk.png"
                      style={{ height: 80 }}
                    />
                  </span>
                </div>
                <h3 className="how-it-work__title headh3">Risk Management</h3>
                <p className="how-it-work__text-2 para">
                  Implement strict risk management practices, including setting
                  stop-loss orders and limiting the percentage of your trading
                  capital you risk on each trade. This helps protect your capital
                  and reduces fear of large losses.{" "}
                </p>
              </div>
            </div>
            {/*How It Work Single End*/}
            {/*How It Work Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="how-it-work__single backbg">
                <div className="how-it-work__count" />
                <div className="how-it-work__icon">
                  <span className="">
                    <img
                      src="/assets/images/trading1/stay.png"
                      style={{ height: 50 }}
                    />{" "}
                  </span>
                </div>
                <h3 className="how-it-work__title headh3">Stay Informed</h3>
                <p className="how-it-work__text-2 para">
                  Stay informed about the financial markets and the assets you are
                  trading. Knowledge and understanding can boost confidence and
                  reduce uncertainty.
                </p>
              </div>
            </div>
            {/*How It Work Single End*/}
            {/*How It Work Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="500ms"
            >
              <div className="how-it-work__single backbg">
                <div className="how-it-work__count" />
                <div className="how-it-work__icon">
                  <span className="">
                    <img
                      src="/assets/images/trading1/learn.png"
                      style={{ height: 70 }}
                    />{" "}
                  </span>
                </div>
                <h3 className="how-it-work__title headh3">Practice Patience</h3>
                <p className="how-it-work__text-2 para">
                  Be patient and wait for high-probability trading opportunities
                  that align with your strategy. Avoid trading out of boredom or
                  impulsiveness.
                </p>
              </div>
            </div>
            {/*How It Work Single End*/}
            {/*How It Work Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="how-it-work__single backbg">
                <div className="how-it-work__count" />
                <div className="how-it-work__icon">
                  <span className="">
                    <img
                      src="/assets/images/trading1/discipline.png"
                      style={{ height: 80 }}
                    />
                  </span>
                </div>
                <h3 className="how-it-work__title headh3">Maintain Discipline</h3>
                <p className="how-it-work__text-2 para">
                  Stick to your trading plan and rules. Discipline is key to
                  preventing emotional decisions. Consider using trading journals
                  to track your adherence to your plan.
                </p>
              </div>
            </div>
            {/*How It Work Single End*/}
            {/*How It Work Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="700ms"
            >
              <div className="how-it-work__single backbg">
                <div className="how-it-work__count" />
                <div className="how-it-work__icon">
                  <span className="">
                    <img
                      src="/assets/images/trading1/stop.png"
                      style={{ height: 50 }}
                    />
                  </span>
                </div>
                <h3 className="how-it-work__title headh3">
                  Use Stop-Loss Orders
                </h3>
                <p className="how-it-work__text-2 para">
                  Always use stop-loss orders to limit potential losses. This can
                  help alleviate the fear of losing more than you're comfortable
                  with.
                </p>
                <br />
              </div>
            </div>
            {/*How It Work Single End*/}
            {/*How It Work Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="800ms"
            >
              <div className="how-it-work__single backbg">
                <div className="how-it-work__count" />
                <div className="how-it-work__icon">
                  <span className="">
                    <img
                      src="/assets/images/trading1/loss1.png"
                      style={{ height: 50 }}
                    />
                  </span>
                </div>
                <h3 className="how-it-work__title headh3">
                  Avoid Revenge Trading
                </h3>
                <p className="how-it-work__text-2 para">
                  If you incur losses, resist the urge to seek revenge by
                  increasing your position size or taking impulsive trades to
                  recover losses. This can lead to further losses.{" "}
                </p>
              </div>
            </div>
            {/*How It Work Single End*/}
            {/*How It Work Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="900ms"
            >
              <div className="how-it-work__single backbg">
                <div className="how-it-work__count" />
                <div className="how-it-work__icon">
                  <span className="">
                    <img
                      src="/assets/images/trading1/position.png"
                      style={{ height: 50 }}
                    />
                  </span>
                </div>
                <h3 className="how-it-work__title headh3">
                  Manage Position Sizes
                </h3>
                <p className="how-it-work__text-2 para">
                  Ensure that your position sizes are appropriate for your account
                  size and risk tolerance. Over-leveraging can cause anxiety and
                  emotional turmoil.{" "}
                </p>
              </div>
            </div>
            {/*How It Work Single End*/}
            {/*How It Work Single Start*/}
            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="">
              <div className="how-it-work__single backbg">
                <div className="how-it-work__count" />
                <div className="how-it-work__icon">
                  <span className="">
                    <img
                      src="/assets/images/trading1/emotion.png"
                      style={{ height: 50 }}
                    />
                  </span>
                </div>
                <h3 className="how-it-work__title headh3">
                  Stay Emotionally Detached
                </h3>
                <p className="how-it-work__text-2 para">
                  Try to remain emotionally detached from your trades. Don't
                  become overly attached to winning or losing positions. Maintain
                  a rational mindset.{" "}
                </p>
              </div>
            </div>
            {/*How It Work Single End*/}
            {/*How It Work Single Start*/}
            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="">
              <div className="how-it-work__single backbg">
                <div className="how-it-work__count" />
                <div className="how-it-work__icon">
                  <span className="">
                    <img
                      src="/assets/images/trading1/practice.png"
                      style={{ height: 80 }}
                    />
                  </span>
                </div>
                <h3 className="how-it-work__title headh3">
                  Practice Mindfulness
                </h3>
                <p className="how-it-work__text-2 para">
                  Techniques like mindfulness meditation can help you stay focused
                  and manage stress during trading. It can also reduce impulsive
                  reactions to market movements.
                </p>
                <br />
              </div>
            </div>
            {/*How It Work Single End*/}
            {/*How It Work Single Start*/}
            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="">
              <div className="how-it-work__single backbg">
                <div className="how-it-work__count" />
                <div className="how-it-work__icon">
                  <span className="">
                    <img
                      src="/assets/images/trading1/break.png"
                      style={{ height: 80 }}
                    />
                  </span>
                </div>
                <h3 className="how-it-work__title headh3">Take Breaks</h3>
                <p className="how-it-work__text-2 para">
                  Avoid continuous screen watching. Take regular breaks to clear
                  your mind and reduce stress. This can help prevent overtrading.
                </p>
                <br />
                <br />
              </div>
            </div>
            {/*How It Work Single End*/}
            {/*How It Work Single Start*/}
            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="">
              <div className="how-it-work__single backbg">
                <div className="how-it-work__count" />
                <div className="how-it-work__icon">
                  <span className="">
                    <img
                      src="/assets/images/trading1/support.png"
                      style={{ height: 80 }}
                    />
                  </span>
                </div>
                <h3 className="how-it-work__title headh3">Seek Support</h3>
                <p className="how-it-work__text-2 para">
                  {" "}
                  Consider joining trading communities or forums to share
                  experiences and gain insights from other traders. Talking about
                  your challenges can be therapeutic.{" "}
                </p>
              </div>
            </div>
            {/*How It Work Single End*/}
            {/*How It Work Single Start*/}
            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="">
              <div className="how-it-work__single backbg">
                <div className="how-it-work__count" />
                <div className="how-it-work__icon">
                  <span className="">
                    <img
                      src="/assets/images/trading1/learn1.png"
                      style={{ height: 55 }}
                    />
                  </span>
                </div>
                <h3 className="how-it-work__title headh3">Learn from Mistakes</h3>
                <p className="how-it-work__text-2 para">
                  Analyze both winning and losing trades to identify patterns and
                  areas for improvement. Learning from mistakes can help you
                  evolve as a trader.
                </p>
              </div>
            </div>
            {/*How It Work Single End*/}
            {/*How It Work Single Start*/}
            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="">
              <div className="how-it-work__single backbg">
                <div className="how-it-work__count" />
                <div className="how-it-work__icon">
                  <span className="">
                    <img
                      src="/assets/images/trading1/11.png"
                      style={{ height: 50 }}
                    />
                  </span>
                </div>
                <h3 className="how-it-work__title headh3">Professional Help</h3>
                <p className="how-it-work__text-2 para">
                  If trading psychology issues persist and significantly impact
                  your trading, consider seeking guidance from a trading
                  psychologist or therapist.{" "}
                </p>
              </div>
            </div>
            {/*How It Work Single End*/}
          </div>
        </div>
      </div>
    </section>
    {/*How It Work End*/}
    <section
      className="cta-three cta-four"
      style={{ marginBottom: 0, marginTop: 0 }}
    >
      <div className="container">
        <div className="cta-three__inner">
          <div className="cta-three__shape-1 zoominout">
            <img src="/assets/images/shapes/cta-three-shape-1.png" alt="" />
          </div>
          <div className="cta-three__shape-2 img-bounce">
            <img src="/assets/images/shapes/cta-three-shape-2.png" alt="" />
          </div>
          <div className="cta-three__title-box">
            <div className="cta-three__icon">
              <span className="icon-cooperation-group" />
            </div>
            <h5 className="cta-three__title">
              <span style={{ fontSize: 29 }}>
                <b>Conclusion</b>
              </span>
              <br />
              Remember that managing trading and market psychology is an ongoing
              process, and it's natural to experience emotional ups and downs in
              trading. By implementing these strategies and continuously working
              on your mental discipline, you can improve your ability to make
              rational and well-informed trading decisions.
            </h5>
          </div>
        </div>
      </div>
    </section>
    {/*Services two End*/}
    <section
      className="services-two services-three"
      style={{ backgroundColor: "#0c0c0c" }}
    >
      <div
        className="team-one__bg"
        style={{
          backgroundImage: "url(/assets/images/img1/20.jpg)",
          backgroundRepeat: "no-repeat",
          mixBlendMode: "overlay"
        }}
      />
      <div className="section-title text-center">
        <h2 className="section-title__title">
          Positive Trading with Pshycology Tips
        </h2>
      </div>
      <ul className="steps" style={{width:'fit-content',margin:'auto'}}>
        {/* <li class="step1">
        <div class="services-two__arrow-box" id="arrow">
            <span class="icon-right-arrow-2" style="color: white;"></span>
        </div>
    </li> */}
        <li>
          <div className="services-two__single" id="servi">
            <div className="services-one__icon">
              <img src="/assets/images/trading1/1.png" height="90px" />
            </div>
            <h3 className="services-two__title text-white">Spend Weekends</h3>
            <p className="services-two__text">
              Forecasting to avoid <br />
              last minutes Decision.
            </p>
          </div>
        </li>
        {/*  <li>
        <div class="services-two__arrow-box" id="arrow">
            <span class="icon-right-arrow-2" style="color: white;"></span>
        </div>
    </li> */}
        <li>
          <div className="services-two__single" id="servi">
            <div className="services-one__icon">
              <img src="/assets/images/trading1/2.png" height="90px" />
            </div>
            <h3 className="services-two__title text-white">Eliminate Rear By</h3>
            <p className="services-two__text">
              Risking 1% of <br /> capital per trade.
            </p>
          </div>
        </li>
        {/*  <li>
        <div class="services-two__arrow-box" id="arrow">
            <span class="icon-right-arrow-2" style="color: white;"></span>
        </div>
    </li> */}
        <li>
          <div className="services-two__single" id="servi">
            <div className="services-one__icon">
              <img src="/assets/images/trading1/3.png" height="90px" />
            </div>
            <h3 className="services-two__title text-white">
              Everyone Trades With
            </h3>
            <p className="services-two__text">
              Different capitals so <br />
              results will vary.
            </p>
          </div>
        </li>
        {/* <li>
        <div class="services-two__arrow-box" id="arrow">
            <span class="icon-right-arrow-2" style="color: white;"></span>
        </div>
    </li> */}
        <li>
          <div className="services-two__single" id="servi">
            <div className="services-one__icon">
              <img src="/assets/images/trading1/4.png" height="90px" />
            </div>
            <h3 className="services-two__title text-white">
              When You Lose Don't Be
            </h3>
            <p className="services-two__text">
              Hard on yourself- loss in inevitable
            </p>
          </div>
        </li>
      </ul>
    </section>
  </>
  
  )
}

export default Market
