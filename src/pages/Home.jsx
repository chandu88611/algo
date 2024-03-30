import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
function Home() {
  const [video, setVideo] = useState(4);
  const [previousVideo, setPreviousVideo] = useState(4);
  const [isSliding, setIsSliding] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideo(prevVideo => (prevVideo == 4 ? 2 : 4));
 
    },7000);

    return () => clearTimeout(timer);
  }, [video]);
  return (
    <div>
   <section className="main-slider-three"     >
   {/* <Swiper
                modules={[Autoplay, Navigation, A11y]}
                loop={true}
                spaceBetween={10}
                draggable={true}
                slidesPerView={1}
                
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}>
                  <SwiperSlide>
                  <div
          className="swiper-container thm-swiper__slider"
        
        >
          <div className="swiper-wrapper">
         
            <div className="swiper-slide">
           

       
      
    
                <div className="image-layer-three">
                    <video
        autoPlay
        loop
        muted
        playsInline
        
      >
        <source src={`/assets/videos/${2}-new.mp4`} type="video/mp4" />
      </video> </div>
   
              <div className="main-slider__shape-2 float-bob-y">
    
              </div>
              <div className="main-slider__shape-3 float-bob-x">
                <img src="/assets/images/shapes/main-slider-shape-4.png" alt="" />
              </div>
              <div className="main-slider-three__overly-bg" />
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider-three__content"  >
                      <h2 className="main-slider-three__title" style={{visibility:'visible',opacity:1,display:'block',marginTop:'80px',textShadow:'1px 2px 1px black'}}>
                       Exploring the Potential <br /> of Crypto Trading
                      </h2>
                      <p className="main-slider-three__text" style={{visibility:'visible',opacity:1,display:'block' ,marginBottom:'-50px' ,textShadow:'1px 2px 1px black'}}>
                        "Unlock Your Financial Freedom with Our CryptoCurrency Trading
                        <br />
                         Track, Trade Triumph: Indices for the Modern Investor"
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </SwiperSlide>
                  <SwiperSlide>
                  <div
          className="swiper-container thm-swiper__slider"
        
        >
          <div className="swiper-wrapper">
         
            <div className="swiper-slide">
           

  
      
    
                <div className="image-layer-three">
                    <video
        autoPlay
        loop
        muted
        playsInline
 
      >
        <source src={`/assets/videos/4-new.mp4`} type="video/mp4" />
      </video> </div>
   
              <div className="main-slider__shape-2 float-bob-y">
       
              </div>
              <div className="main-slider__shape-3 float-bob-x">
                <img src="/assets/images/shapes/main-slider-shape-4.png" alt="" />
              </div>
              <div className="main-slider-three__overly-bg" />
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider-three__content"  >
                      <h2 className="main-slider-three__title" style={{visibility:'visible',opacity:1,display:'block',marginTop:'80px',textShadow:'1px 2px 1px black'}}>
                        Strategies for Finding <br /> Deals and Discounts
                      </h2>
                      <p className="main-slider-three__text" style={{visibility:'visible',opacity:1,display:'block' ,marginBottom:'-50px' ,textShadow:'1px 2px 1px black'}}>
                        "Trans X Market majors with spreads from 0 on our
                        Advantage account.
                        <br />
                        Enjoy commission-free trading with our Micro account"
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div></SwiperSlide>
                </Swiper> */}
           <div
          className="swiper-container thm-swiper__slider"
   
        >
          <div className="swiper-wrapper" >
         
            <div className="swiper-slide">
           

      
    
                <div className="image-layer-three" style={{overflow:'hidden',backgroundImage:"url(/assets/images/b1.jpg)",backgroundPosition:'center',backgroundSize:'cover'}}>
                    <video
        autoPlay
        loop
        muted
        playsInline
        key={`video-${video}`}
className='custom-video'
    
      >
        <source src={`/assets/videos/${2}-new.mp4`} type="video/mp4" />
      </video>
       </div>
   
              <div className="main-slider__shape-2 float-bob-y">
                {/* <img src="/assets/images/shapes/main-slider-shape-2.png" alt="" > */}
              </div>
              <div className="main-slider__shape-3 float-bob-x">
                <img src="/assets/images/shapes/main-slider-shape-4.png" alt="" />
              </div>
              <div className="main-slider-three__overly-bg" />
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider-three__content"  >
                      <h2 className="main-slider-three__title" style={{visibility:'visible',opacity:1,display:'block',marginTop:'80px',textShadow:'1px 2px 1px black'}}>
                       Exploring the Potential <br /> of Crypto Trading
                      </h2>
                      <p className="main-slider-three__text" style={{visibility:'visible',opacity:1,display:'block' ,marginBottom:'-50px' ,textShadow:'1px 2px 1px black'}}>
                        "Unlock Your Financial Freedom with Our CryptoCurrency Trading
                        <br />
                         Track, Trade Triumph: Indices for the Modern Investor"
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>
      <section
        className="services-two services-three"
        style={{ padding: "70px 0 180px", backgroundColor: "#0c0c0c" }}
      >
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Why Trade With TransX Market</h2>
            <p style={{ color: "white" }}>
              Trade multiple financial products which includes Forex, Commodities,
              Indices, and Metals
            </p>
          </div>
          <div className="row">
    
            <div
              className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="services-two__single" style={{ padding: "unset" }}>
                <div className="services-two__arrow-box">
                  <div className="services-two__arrow-shape-1">
                     
                  </div>
                </div>
                <div className="services-two__icon">
                  <span>
                    <img src="/assets/images/icon1/swap.png" alt="" />
                  </span>
                </div>
                <h3
                  className="services-two__title"
                  style={{ marginTop: 25, fontSize: 18, color: "white" }}
                >
                  SWAP FREE <br />
                  Account
                </h3>
                <p
                  className="services-two__text"
                  style={{ color: "white", fontSize: 15, paddingBottom: 20 }}
                >
                  Seamless interest-free trading. *Swap Free Accounts are
                  available to all our clients
                </p>
              </div>
            </div>
         
            <div
              className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="services-two__single" style={{ padding: "unset" }}>
                <div className="services-two__arrow-box">
                  <div className="services-two__arrow-shape-1">
                    
                  </div>
                </div>
                <div className="services-two__icon">
                  <span>
                    <img src="/assets/images/icon1/bank.png" alt="" />
                  </span>
                </div>
                <h3
                  className="services-two__title"
                  style={{ marginTop: 25, fontSize: 18, color: "white" }}
                >
                  NO DEPOSIT /<br />
                  WITHDRAW CHARGES
                </h3>
                <p
                  className="services-two__text"
                  style={{ color: "white", fontSize: 15, paddingBottom: 25 }}
                >
                  ZERO deposit/withdrawal charges to earn maximum profits at
                  minimum trading cost
                </p>
              </div>
            </div>
 
            <div
              className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="services-two__single" style={{ padding: "unset" }}>
                <div className="services-two__arrow-box">
                  <div className="services-two__arrow-shape-1">
 
                  </div>
                </div>
                <div className="services-two__icon">
                  <span>
                    <img src="/assets/images/icon1/lowest.png" alt="" />
                  </span>
                </div>
                <h3
                  className="services-two__title"
                  style={{ marginTop: 25, fontSize: 18, color: "white" }}
                >
                  LOWEST &amp; VARIABLE SPREADS
                </h3>
                <p
                  className="services-two__text"
                  style={{ color: "white", fontSize: 15, paddingBottom: 25 }}
                >
                  Offers lowest trading cost in the market (0.0 Pips) to earn
                  highest profits possible
                </p>
              </div>
            </div>
          
            <div
              className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="services-two__single" style={{ padding: "unset" }}>
                <div className="services-two__arrow-box">
                  <div className="services-two__arrow-shape-1">
              
                  </div>
                </div>
                <div className="services-two__icon">
                  <span>
                    <img src="/assets/images/icon1/leverage.png" alt="" />
                  </span>
                </div>
                <h3
                  className="services-two__title"
                  style={{ marginTop: 25, fontSize: 18, color: "white" }}
                >
                  LEVERAGE UPTO <br />
                  1:500
                </h3>
                <p
                  className="services-two__text"
                  style={{ color: "white", fontSize: 15, paddingBottom: 25 }}
                >
                  Access to a larger portion of financial market &amp; increase
                  potential profits
                </p>
              </div>
            </div>
       
            <div
              className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="services-two__single" style={{ padding: "unset" }}>
                <div className="services-two__arrow-box">
                  <div className="services-two__arrow-shape-1">
    
                  </div>
                </div>
                <div className="services-two__icon">
                  <span>
                    <img src="/assets/images/icon1/trade.png" alt="" />
                  </span>
                </div>
                <h3
                  className="services-two__title"
                  style={{ marginTop: 25, fontSize: 18, color: "white" }}
                >
                  NEGATIVE BALANCE PROTECTION
                </h3>
                <p
                  className="services-two__text"
                  style={{ color: "white", fontSize: 15, paddingBottom: 25 }}
                >
                  Secure trading with NBP allows you to not lose more than
                  deposited
                </p>
              </div>
            </div>
    
      
            <div
              className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="services-two__single" style={{ padding: "unset" }}>
                <div className="services-two__arrow-box">
                  <div className="services-two__arrow-shape-1">
             
                  </div>
                </div>
                <div className="services-two__icon">
                  <span>
                    <img src="/assets/images/icon1/trading.png" alt="" />
                  </span>
                </div>
                <h3
                  className="services-two__title"
                  style={{ marginTop: 25, fontSize: 18, color: "white" }}
                >
                  24/5 MULTILINGUAL SERVICE
                </h3>
                <p
                  className="services-two__text"
                  style={{ color: "white", fontSize: 15, paddingBottom: 25 }}
                >
                  Dedicated customer support team available to assist you via
                  various contact channels
                </p>
              </div>
            </div>
  
          </div>
        </div>
      </section>

      <section className="team-one">
        <div
          className="team-one__bg"
          style={{ backgroundImage: "url(/assets/images/img1/section/bg1.jpg)" }}
        />
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Who We Serve</h2>
            <p className="text-white pt-4">
              "At Trans X market, we serve a diverse range of clients including
              individual traders, institutional investors, and corporations,
              providing them with a robust platform to navigate the dynamic world
              of forex trading."
            </p>
          </div>
          <div className="row"></div>
        </div>
      </section>
      <section className="services-one">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title " style={{ color: "black" }}>
              Account Features
            </h2>
            <p style={{ color: "black" }}>
              Make informed trading decisions based on accurate and timely
              information
            </p>
          </div>
          <div className="row">
            {/*Services One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="services-one__single">
                <div className="services-one__inner">
                  {/* <div class="services-one__shape-1" style="background-color: black;"></div>
                            <div class="services-one__shape-2">
                                <div class="services-one__shape-3"> */}
                  {/* <img src="/assets/images/shapes/services-one-shape-3.png" alt=""> */}
                  {/* </div>
                            </div> */}
                  <div className="services-one__icon">
                    <img src="/assets/images/icon1/credit-card.png" alt="" />
                  </div>
                  <h3 className="services-one__title">
                    <a href="brand-identity.html" style={{ color: "red" }}>
                      Multi-Currency Trading
                    </a>
                  </h3>
                  <p className="services-one__text">
                    Our platform allows you to trade a wide variety of currency
                    pairs, ranging from major pairs like EUR/USD to exotic pairs.
                    Explore the global forex market from one account.
                  </p>
                </div>
              </div>
            </div>
            {/*Services One Single End*/}
            {/*Services One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="services-one__single">
                <div className="services-one__inner">
                  {/* <div class="services-one__shape-1" style="background-color: black;"></div>
                            <div class="services-one__shape-2">
                                <div class="services-one__shape-3"> */}
                  {/* <img src="/assets/images/shapes/services-one-shape-3.png" alt=""> */}
                  {/* </div>
                            </div> */}
                  <div className="services-one__icon">
                    <img src="/assets/images/icon1/trade.png" alt="" />
                  </div>
                  <h3 className="services-one__title">
                    <a href="digital-marketing.html" style={{ color: "red" }}>
                      Sophisticated Trading Tools
                    </a>
                  </h3>
                  <p className="services-one__text">
                    Benefit from advanced charting tools, real-time market
                    analysis, and technical indicators to make informed trading
                    decisions.
                  </p>
                  <br />
                </div>
              </div>
            </div>
            {/*Services One Single End*/}
            {/*Services One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="services-one__single">
                <div className="services-one__inner">
                  {/* <div class="services-one__shape-1" style="background-color: black;"></div>
                            <div class="services-one__shape-2">
                                <div class="services-one__shape-3"> */}
                  {/* <img src="/assets/images/shapes/services-one-shape-3.png" alt=""> */}
                  {/* </div>
                            </div> */}
                  <div className="services-one__icon">
                    <img src="/assets/images/icon1/trading.png" />
                  </div>
                  <h3 className="services-one__title">
                    <a href="web-design.html" style={{ color: "red" }}>
                      Tight Spreads
                    </a>
                  </h3>
                  <p className="services-one__text">
                    Experience competitive spreads on all currency pairs to
                    maximize your potential returns.
                  </p>
                  <br />
                  <br />
                </div>
              </div>
            </div>
            {/*Services One Single End*/}
            {/*Services One Single Start*/}
            <div
              className="col-xl-2 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            ></div>
            {/*Services One Single End*/}
            {/*Services One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="services-one__single">
                <div className="services-one__inner">
                  {/* <div class="services-one__shape-1" style="background-color: black;"></div>
                            <div class="services-one__shape-2" >
                                <div class="services-one__shape-3"> */}
                  {/* <img src="/assets/images/shapes/services-one-shape-3.png" alt=""> */}
                  {/* </div>
                            </div> */}
                  <div className="services-one__icon">
                    <img src="/assets/images/icon1/risk.png" alt="" />
                  </div>
                  <h3 className="services-one__title">
                    <a href="brand-identity.html" style={{ color: "red" }}>
                      Risk Management Tools
                    </a>
                  </h3>
                  <p className="services-one__text">
                    Protect your investments with stop loss orders, take profit
                    orders, and negative balance protection.
                  </p>
                  <br />
                </div>
              </div>
            </div>
            {/*Services One Single End*/}
            {/*Services One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="services-one__single">
                <div className="services-one__inner">
                  {/* <div class="services-one__shape-1" style="background-color: black;"></div>
                            <div class="services-one__shape-2">
                                <div class="services-one__shape-3"> */}
                  {/* <img src="/assets/images/shapes/services-one-shape-3.png" alt=""> */}
                  {/* </div>
                            </div> */}
                  <div className="services-one__icon">
                    <img src="/assets/images/icon1/sequre.png" alt="" />
                  </div>
                  <h3 className="services-one__title">
                    <a href="digital-marketing.html" style={{ color: "red" }}>
                      Secure Transactions
                    </a>
                  </h3>
                  <p className="services-one__text">
                    All transactions on our platform are encrypted using the
                    latest security protocols to ensure your financial and
                    personal data is safe.
                  </p>
                </div>
              </div>
            </div>
            {/*Services One Single End*/}
            {/*Services One Single Start*/}
            <div
              className="col-xl-2 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            ></div>
            {/*Services One Single End*/}
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <div className="text-end">
                  <div className="main-menu-three__search-box2">
                    <a href="#" className="main-menu-three__search2">
                      {" "}
                      Open Account
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-two" style={{ backgroundColor: "black" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title text-left">
              <h2 className="section-title__title">
                <b>Join the Winning side</b>
              </h2>
              <p className="text" style={{ color: "white" }}>
                The premium trading condition
              </p>
              <br />
              <p style={{ color: "white" }}>
                Direct market access and low cost is what we are all about.
                Experience our ultra-sharp market prices. Trade with the best
                forex broker for online trading.
                <br />
                Trading high volumes? Need tailored trading setups? Speak to us
                about our customised prime solutions.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            
            <Swiper
                modules={[Autoplay, Navigation, A11y]}
                loop={true}
                spaceBetween={10}
                draggable={true}
                slidesPerView={3}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}>
<SwiperSlide> <div className="item" id="item-item">
                <div
                  className="testimonial-two__single"
                  id="testimonial-two__single_join"
                >
                  <h4 className="testimonial-two__title" id="join">
                    TIRE 1
                  </h4>
                  <br />
                  <p id="join1">Inter-Bank &amp; Darkpool Liquidity</p>
                </div>
              </div></SwiperSlide>
              
<SwiperSlide> <div className="item" id="item-item">
                <div
                  className="testimonial-two__single"
                  id="testimonial-two__single_join"
                >
                  <h4 className="testimonial-two__title" id="join">
                    STP
                  </h4>
                  <br />
                  <p id="join1">
                    Direct market
                    <br /> access
                  </p>
                </div>
              </div></SwiperSlide>
              
<SwiperSlide><div className="item" id="item-item">
                <div
                  className="testimonial-two__single"
                  id="testimonial-two__single_join"
                >
                  <h4 className="testimonial-two__title" id="join">
                    RAW
                  </h4>
                  <br />
                  <p id="join1">ECN Spreads from 0 pips</p>
                </div>
              </div></SwiperSlide>
          
                </Swiper>
            <div className="text-white text-center pt-4">
              <a href="#">
                <button
                  type="button"
                  style={{
                    padding: "4px 20px 4px 20px",
                    color: "white",
                    backgroundColor: "red",
                    borderRadius: 7
                  }}
                >
                  Go Trade
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Testimonial Three End*/}
    {/*Progress One Start*/}
    <section className="progress-one" style={{ backgroundColor: "azure" }}>
      <div className="container">
        {/* <h3 class="progress-one__title">We have the Tools and Expertise <br>
                to help you Succeed online</h3> */}
        <div className="row">
          <div className="col-xl-6">
            <div className="progress-one__left">
              <br />
              <br />
              <div className="progress-one__progress-box">
                <h4 className="progress-one__progress-box-title">
                  What is forex trading ?
                </h4>
                <br />
                <div className="progress-levels">
                  {/*Skill Box*/}
                  <div className="progress-box">
                    <div className="inner count-box">
                      <div className="bar">
                        <p style={{ color: "black" }}>
                          Forex trading is the buying and selling of currencies to
                          make a profit from fluctuations in their value. It
                          operates in the largest financial market globally, with
                          over $6 trillion traded daily as of 2021. Trades are
                          always conducted in pairs, such as USD/EUR. Participants
                          range from large financial institutions to individual
                          retail traders. While potentially profitable, it carries
                          significant risk, requiring a thorough understanding and
                          careful risk management.
                        </p>
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
                  <img src="/assets/images/img1/s1.jpg" alt="" />
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
    {/*Progress two Start*/}
    <section className="progress-one" style={{ backgroundColor: "azure" }}>
      <div className="container">
        {/* <h3 class="progress-one__title">We have the Tools and Expertise <br>
                to help you Succeed online</h3> */}
        <div className="row">
          <div className="col-xl-6">
            <div className="progress-one__right">
              <div className="progress-one__img-box">
                <div className="progress-one__img">
                  <img src="/assets/images/img1/s2.jpg" alt="" />
                </div>
                {/* <div class="progress-one__shape-1 float-bob-x">
                                <img src="/assets/images/shapes/progress-one-shape-1.png" alt="">
                            </div> */}
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="progress-one__left ">
              <br />
              <br />
              <div className="progress-one__progress-box ">
                <h4 className="progress-one__progress-box-title">
                  What is crypto trading ?
                </h4>
                <div className="progress-levels">
                  <br />
                  {/*Skill Box*/}
                  <div className="progress-box">
                    <div className="inner count-box">
                      <div className="bar">
                        <p style={{ color: "black" }}>
                          Crypto trading is the buying and selling of digital
                          currencies, such as Bitcoin and Ethereum, to profit from
                          their value changes. It operates 24/7 on various
                          exchanges globally, unlike traditional markets. Trades
                          can be made directly (crypto-to-crypto) or against a
                          fiat currency pair, such as BTC/USD. Participants range
                          from individual retail traders to institutional
                          investors. Though it offers high potential returns, it
                          also carries significant risks due to high market
                          volatility.
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
          Trade with TransX in 4 easy steps
        </h2>
      </div>
      <ul className="steps" style={{margin:'auto',width:'fit-content'}}>
        <li className="step1">
          <div className="services-two__arrow-box" id="arrow">
            <span className="icon-right-arrow-2" style={{ color: "white" }} />
          </div>
        </li>
        <li>
          <div className="services-two__single" id="servi">
            <div className="services-one__icon">
              <img src="/assets/images/img1/regi.png" height="50px" width="50px" />
            </div>
            <h3 className="services-two__title text-white">Register</h3>
            <p className="services-two__text">
              Submit your details via our
              <br /> registration form.
            </p>
          </div>
        </li>
        <li>
          <div className="services-two__arrow-box" id="arrow">
            <span className="icon-right-arrow-2" style={{ color: "white" }} />
          </div>
        </li>
        <li>
          <div className="services-two__single" id="servi">
            <div className="services-one__icon">
              <img
                src="/assets/images/img1/approval.png"
                height="50px"
                width="50px"
              />
            </div>
            <h3 className="services-two__title text-white">Approval</h3>
            <p className="services-two__text">
              Upload your documents and
              <br /> await approval.
            </p>
          </div>
        </li>
        <li>
          <div className="services-two__arrow-box" id="arrow">
            <span className="icon-right-arrow-2" style={{ color: "white" }} />
          </div>
        </li>
        <li>
          <div className="services-two__single" id="servi">
            <div className="services-one__icon">
              <img src="/assets/images/img1/fund.png" height="50px" width="50px" />
            </div>
            <h3 className="services-two__title text-white">Fund</h3>
            <p className="services-two__text">
              Fund your wallet and transfer <br />
              to your trading account.
            </p>
          </div>
        </li>
        <li>
          <div className="services-two__arrow-box" id="arrow">
            <span className="icon-right-arrow-2" style={{ color: "white" }} />
          </div>
        </li>
        <li>
          <div className="services-two__single" id="servi">
            <div className="services-one__icon">
              <img
                src="/assets/images/img1/trade.png"
                height="50px"
                width="50px"
              />
            </div>
            <h3 className="services-two__title text-white">Trade</h3>
            <p className="services-two__text">Start trading!</p>
          </div>
        </li>
      </ul>
    </section>
    {/*Blog List Start*/}
    <section className="blog-list">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-6">
            <h4 className="progress-one__progress-box-title">Market Analysis</h4>
          </div>
          <div className="col-lg-6 col-md-6 col-6">
            <h4 className="progress-one__progress-box-title">
              Economic calendar
            </h4>
          </div>
          <div className="col-lg-2 col-md-6 col-6 pt-5">
            <div className="">
              <a href="blog-1.html">
                <img
                  src="/assets/images/img1/section/m1.jpg"
                  alt="image"
                  className="rounded pb-3"
                  height="165px"
                  width="166px"
                />
                <h6>
                  Projected interest rates in 5 years: Is the central bank done
                  hiking?
                </h6>
              </a>
              <p style={{ fontSize: 14 }}>Jekaterina Drozdovica</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-6 pt-5">
            <div>
              <a href="blog-2.html">
                <img
                  src="/assets/images/img1/section/m2.jpg"
                  alt="image"
                  className="rounded pb-3"
                  height="165px"
                  width="166px"
                />
                <h6>USD/JPY continues to build higher towards 138</h6>
              </a>
              <p style={{ fontSize: 14 }}>Daniela Hathorn</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 pt-5">
            <div>
              <a href="blog-3.html">
                <img
                  src="/assets/images/img1/section/m3.jpg"
                  alt="image"
                  className="rounded pb-3"
                  height="165px"
                  width="166px"
                />
                <h6>EUR/USD forecast: Will the euro rise continue?</h6>
              </a>
              <p style={{ fontSize: 14 }}>Kathryn Davies</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 ">
            <div>
              <iframe
                src="https://sslecal2.forexprostools.com/?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=25,32,6,37,72,22,17,39,14,10,35,43,56,36,110,11,26,12,4,5&calType=week&timeZone=8&lang=1"
                height={350}
                frameBorder={0}
                allowTransparency="true"
                marginWidth={0}
                marginHeight={0}
                style={{ width: "" }}
                className='responsive-classw'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Blog List End*/}
    {/*FAQ One Start*/}
    <section
      className="faq-one"
      style={{
        backgroundImage: "url(/assets/images/img1/b31.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="container">
        <div className="section-title text-center">
          <h2 className="section-title__title text-white">
            Copy trading and how it work
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 pt-4 pb-3">
            <div className="faq-one__left">
              <div
                className="accrodion-grp faq-one-accrodion"
                data-grp-name="faq-one-accrodion-1"
              >
                <div className="accrodion active">
                  <div className="accrodion-title">
                    <h4 style={{ fontWeight: 800 }}>Choose a Trader to Copy</h4>
                  </div>
                  <div
                    className="accrodion-content"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="inner">
                      <p style={{ color: "black" }}>
                        <b>
                          On a copy trading platform, investors can view the
                          profiles of successful traders, their trading
                          performance, strategies, risk level, profit percentage,
                          and more
                        </b>
                      </p>
                    </div>
                    {/* /.inner */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 pt-4 ">
            <div className="faq-one__left">
              <div
                className="accrodion-grp faq-one-accrodion"
                data-grp-name="faq-one-accrodion-1"
              >
                <div className="accrodion active">
                  <div className="accrodion-title">
                    <h4 style={{ fontWeight: 800 }}>
                      Set Your Investment Amount
                    </h4>
                  </div>
                  <div
                    className="accrodion-content"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="inner">
                      <p style={{ color: "black" }}>
                        <b>
                          Decide how much capital you want to allocate for copying
                          each trader.
                        </b>
                      </p>
                      <br />
                    </div>
                    {/* /.inner */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 pb-3">
            <div className="faq-one__left">
              <div
                className="accrodion-grp faq-one-accrodion"
                data-grp-name="faq-one-accrodion-1"
              >
                <div className="accrodion active">
                  <div className="accrodion-title">
                    <h4 style={{ fontWeight: 800 }}>Copy Trading</h4>
                  </div>
                  <div
                    className="accrodion-content"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="inner">
                      <p style={{ color: "black" }}>
                        <b>
                          Once you've chosen a trader and set your investment
                          amount, the copy trading platform will replicate the
                          trader's open trades and any future trades in your
                          account automatically.
                        </b>
                      </p>
                    </div>
                    {/* /.inner */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="faq-one__left">
              <div
                className="accrodion-grp faq-one-accrodion"
                data-grp-name="faq-one-accrodion-1"
              >
                <div className="accrodion active">
                  <div className="accrodion-title">
                    <h4 style={{ fontWeight: 800 }}>Monitor and Adjust</h4>
                  </div>
                  <div
                    className="accrodion-content"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="inner">
                      <p style={{ color: "black" }}>
                        <b>
                          Keep track of your account's performance. You can stop
                          copying a trader, withdraw the profits, or adjust your
                          settings anytime.
                        </b>
                      </p>
                      <br />
                    </div>
                    {/* /.inner */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3"></div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="faq-one__left">
              <div
                className="accrodion-grp faq-one-accrodion"
                data-grp-name="faq-one-accrodion-1"
              >
                <div className="accrodion active">
                  <div className="accrodion-title">
                    <h4 style={{ fontWeight: 800 }}>Pay a Fee</h4>
                  </div>
                  <div
                    className="accrodion-content"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="inner">
                      <p style={{ color: "black" }}>
                        <b>
                          Typically, there are fees involved. The trader being
                          copied usually gets a percentage of the profits they
                          make for their followers or a commission per follower.
                          <b />
                        </b>
                      </p>
                      <b>
                        <b></b>
                      </b>
                    </div>
                    {/* /.inner */}
                    <b>
                      <b></b>
                    </b>
                  </div>
                  <b>
                    <b></b>
                  </b>
                </div>
                <b>
                  <b></b>
                </b>
              </div>
              <b>
                <b></b>
              </b>
            </div>
            <b>
              <b></b>
            </b>
          </div>
          <b>
            <b>
              <div className="col-xl-3 col-lg-3 col-md-3"></div>
            </b>
          </b>
        </div>
        <b>
          <b></b>
        </b>
      </div>
      <b>
        <b></b>
      </b>
    </section>
    
        {/*Brand One Start*/}
        <section
          className="brand-one"
          style={{ padding: "0px 0 0px", backgroundColor: "black" }}
        >
          <div className="container">
            <div className="brand-one__wrap">
              <div className="brand-one__inner">
                <div className="brand-one__brand">
                <Swiper
                modules={[Autoplay, Navigation, A11y]}
                loop={true}
                spaceBetween={50}
                draggable={true}
                // slidesPerView={3}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}>
                 
                      <SwiperSlide>

                      <div className="swiper-slide">
                        <img
                          src="/assets/images/img1/section/logo/master.png"
                          alt=""
                          height="100px"
                          width="150px"
                        />
                      </div>
                      </SwiperSlide>
                      {/* /.swiper-slide */}
                      <SwiperSlide>

                      <div className="swiper-slide">
                        <img
                          src="/assets/images/img1/section/logo/netller-removebg-preview.png"
                          alt=""
                          height="100px"
                          width="150px"
                        />
                      </div>
                      </SwiperSlide>
                      {/* /.swiper-slide */}
                      <SwiperSlide>

                      <div className="swiper-slide">
                        <img
                          src="/assets/images/img1/section/logo/visa2-removebg-preview.png"
                          alt=""
                          height="100px"
                          width="150px"
                        />
                      </div>
                      </SwiperSlide>
                      {/* /.swiper-slide */}
                      <SwiperSlide>

                      <div className="swiper-slide pt-4">
                        <img
                          src="/assets/images/img1/section/logo/sepa.png"
                          alt=""
                          height="50px"
                          width="150px"
                        />
                      </div>
                      </SwiperSlide>
                      {/* /.swiper-slide */}
                      <SwiperSlide>

                      <div className="swiper-slide">
                        <img
                          src="/assets/images/img1/section/logo/visa1.png"
                          alt=""
                          height="100px"
                          width="150px"
                        />
                      </div>
                      </SwiperSlide>
                      {/* /.swiper-slide */}
                      <SwiperSlide>

                      <div className="swiper-slide pt-4">
                        <img
                          src="/assets/images/img1/section/logo/skrill.png"
                          alt=""
                          height="50px"
                          width="150px"
                        />
                      </div>
                      </SwiperSlide>
                      {/* /.swiper-slide */}
                     
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home
