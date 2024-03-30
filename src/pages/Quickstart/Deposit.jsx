import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";

function Deposit() {
  const [active,setActive]=useState("deposit")
  return (
    <>
    <section className="page-header">
      <div
        className="page-header-bg-2"
        style={{ backgroundImage: "url(/assets/images/img1/b19.jpg)" }}
      ></div>
      <div className="container">
        <div className="page-header__inner">
          <h2>How to deposit and withdraw?</h2>
        </div>
      </div>
    </section>
 
    <div className="shop-details__bottom" style={{ padding: "70px 0 40px" }}>
      <div className="container">
        <div className="page-header__inner">
          <h2 className="text-black" style={{ color: "black" }}>
            How to deposit and withdraw funds  
          </h2>
          <p
            className="testimonial-one__client-text"
            style={{ fontSize: 17, fontWeight: 500 }}>
            Fund and withdraw from your account hassle-free and with full
            transparency.
          </p>
        </div>
      </div>
      <div className="shop-details__description">
        <div className="shop-details__main-tab-box tabs-box">
          <ul className="tab-buttons clearfix list-unstyled" style={{width:"fit-content",margin:'auto'}}>
            <li data-tab="#description" className={`tab-btn ${active=="deposit"&&"active-btn"}`} onClick={()=>setActive('deposit')} >
              <span>Deposit Methods</span>
            </li>
            <li data-tab="#specifications" className={`tab-btn ${active=="withdraw"&&"active-btn"}`} onClick={()=>setActive('withdraw')}>
              <span>Widthdraw Methods</span>
            </li>
          </ul>
          <div className="tabs-content">
            {/*tab*/}
            <div className={`tab ${active=="deposit"&&"active-tab"}`} id="description">
              <div className="shop-details__tab-content-inner">
                <div className="shop-details__description-content">
                  <section>
                    <div className="container" style={{ padding: "70px 0 70px" }}>
                      <div
                        className="table-wrapper"
                        style={{ overflowX: "auto" }}
                      >
                        <table className="deposit-table">
                          <thead>
                            <tr>
                              <th />
                              <th>Method</th>
                              <th>Process Time</th>
                              <th>Minimum Deposit</th>
                              <th>Maximum Amount</th>
                              <th>Supported Currencies</th>
                              <th>Availability</th>
                              <th>Fees</th>
                            </tr>
                          </thead>
                          <tbody className="row-hover">
                            <tr className="row-2 even">
                              <td className="column-1">
                                <img
                                  src="/assets/images/icon/visa.png"
                                  alt=""
                                  width={47}
                                  height={18}
                                />
                              </td>
                              <td className="column-2">Visa</td>
                              <td className="column-3">Instant</td>
                              <td className="column-4">$1</td>
                              <td className="column-5">$50,000</td>
                              <td className="column-6">Multi-currencies</td>
                              <td className="column-7">Global</td>
                              <td className="column-8">$0</td>
                            </tr>
                            <tr className="row-3 even">
                              <td className="column-1">
                                <img
                                  src="/assets/images/icon/skrill.png"
                                  alt=""
                                  width={65}
                                  height={60}
                                />
                              </td>
                              <td className="column-2">Skrill</td>
                              <td className="column-3">Instant</td>
                              <td className="column-4">$50</td>
                              <td className="column-5">$50,000</td>
                              <td className="column-6">Multi-currencies</td>
                              <td className="column-7">Global</td>
                              <td className="column-8">$0</td>
                            </tr>
                            <tr className="row-4 odd">
                              <td className="column-1">
                                <img
                                  src="/assets/images/icon/sepa.png"
                                  alt=""
                                  width={60}
                                  height={30}
                                />
                              </td>
                              <td className="column-2">SEPA</td>
                              <td className="column-3">Instant</td>
                              <td className="column-4">$1</td>
                              <td className="column-5">N/A</td>
                              <td className="column-6">EUR,GBP</td>
                              <td className="column-7">Europe</td>
                              <td className="column-8">$0</td>
                            </tr>
                            <tr className="row-5 even">
                              <td className="column-1">
                                <img
                                  src="/assets/images/icon/netler.png"
                                  alt=""
                                  width={50}
                                  height={10}
                                />
                              </td>
                              <td className="column-2">Neteller</td>
                              <td className="column-3">Instant</td>
                              <td className="column-4">$50</td>
                              <td className="column-5">$50,000</td>
                              <td className="column-6">Multi-currencies</td>
                              <td className="column-7">Global</td>
                              <td className="column-8">$0</td>
                            </tr>
                            <tr className="row-6 even">
                              <td className="column-1">
                                <img
                                  src="/assets/images/icon/astro.png"
                                  alt=""
                                  width={65}
                                  height={50}
                                />
                              </td>
                              <td className="column-2">AstroPay</td>
                              <td className="column-3">Instant</td>
                              <td className="column-4">$5</td>
                              <td className="column-5">N/A</td>
                              <td className="column-6">Multi-currencies</td>
                              <td className="column-7">New Zealand</td>
                              <td className="column-8">$0</td>
                            </tr>
                            <tr className="row-7 even">
                              <td className="column-1">
                                <img
                                  src="/assets/images/img1/section/logo/visa2-removebg-preview.png"
                                  alt=""
                                  width={52}
                                  height={35}
                                />
                              </td>
                              <td className="column-2">Visa Electron</td>
                              <td className="column-3">Instant</td>
                              <td className="column-4">$5</td>
                              <td className="column-5">N/A</td>
                              <td className="column-6">Multi-currencies</td>
                              <td className="column-7">Global except</td>
                              <td className="column-8">$0</td>
                            </tr>
                            <tr className="row-8 even">
                              <td className="column-1">
                                <img
                                  src="/assets/images/img1/section/logo/master.png"
                                  alt=""
                                  width={52}
                                  height={30}
                                />
                              </td>
                              <td className="column-2">Mastro Card</td>
                              <td className="column-3">Instant</td>
                              <td className="column-4">$5</td>
                              <td className="column-5">N/A</td>
                              <td className="column-6">Multi-currencies</td>
                              <td className="column-7">New Zealand</td>
                              <td className="column-8">$0</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                  {/* Add more data rows here */}
                  {/*Testimonial One Start*/}
                  <section
                    className="testimonial-one testimonial-three"
                    style={{ padding: "80px 0 10px" }}
                  >
                    <div className="container">
                      <div className="testimonial-one__top">
                        <div className="section-title text-center ">
                          <h2
                            className="section-title__title"
                            style={{ color: "black" ,lineHeight:"normal"}}
                          >
                            The 4-step process to deposit funds to your account
                          </h2>
                        </div>
                      </div>
                      <div className="testimonial-one__bottom">
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

                  <SwiperSlide><div className="item">
                            <div
                              className="testimonial-one__single"
                              id="testimonial-one__single1"
                            >
                              <h1
                                className="section-title__title"
                                style={{ color: "red", fontSize: 25 }}
                              >
                                Step 1
                              </h1>
                              <img
                                src="/assets/images/img1/section/step1.jpg"
                                alt="image"
                                style={{width:'100%'}}
                              />
                              <div style={{height:'180px'}}>

                              <p
                                className="testimonial-one__client-text"
                                style={{ fontSize: 30, fontWeight: 800 }}
                              >
                                Select The Wallet
                              </p>
                              <p
                                className="testimonial-one__client-text-2"
                                style={{ fontSize: 17 }}
                              >
                                Select the account you want to deposit funds and
                                click 'ADD FUNDS'
                              </p>
                              </div>
                            </div>
                          </div></SwiperSlide>
                  <SwiperSlide> <div className="item">
                            <div
                              className="testimonial-one__single"
                              id="testimonial-one__single1"
                            >
                              <h1
                                className="section-title__title"
                                style={{ color: "red", fontSize: 25 }}
                              >
                                Step 2
                              </h1>
                              <img
                                src="/assets/images/img1/section/step2.jpg"
                                alt="image"
                                style={{width:'100%'}}
                              />
                              <div style={{height:'180px'}}>

                              <p
                                className="testimonial-one__client-text"
                                style={{ fontSize: 30, fontWeight: 800 }}
                              >
                                Select the Method
                              </p>
                              <p
                                className="testimonial-one__client-text-2"
                                style={{ fontSize: 17 }}
                              >
                                Select the payment method by which you want to
                                make the deposit
                              </p>
                              </div>
                   
                            </div>
                          </div></SwiperSlide>
                  <SwiperSlide> <div className="item">
                            <div
                              className="testimonial-one__single"
                              id="testimonial-one__single1"
                            >
                              <h1
                                className="section-title__title"
                                style={{ color: "red", fontSize: 25 }}
                              >
                                Step 3
                              </h1>
                              <img
                                src="/assets/images/img1/section/step3.jpg"
                                alt="image"
                                style={{width:'100%'}}
                              />
                              <div style={{height:'180px'}}>


                              <p
                                className="testimonial-one__client-text"
                                style={{ fontSize: 30, fontWeight: 800 }}
                              >
                                Specify The Amount
                              </p>
                              <p
                                className="testimonial-one__client-text-2"
                                style={{ fontSize: 17 }}
                              >
                                Specify the amount you want to deposit and click
                                'NEXT'.
                              </p>
                              </div>
                        
                            </div>
                          </div></SwiperSlide>
                  <SwiperSlide><div className="item">
                            <div
                              className="testimonial-one__single"
                              id="testimonial-one__single1"
                            >
                              <h1
                                className="section-title__title"
                                style={{ color: "red", fontSize: 25 }}
                              >
                                Step 4
                              </h1>
                              <img
                                src="/assets/images/img1/section/step4.jpg"
                                alt="image"
                                style={{width:'100%'}}
                              />
                              <div style={{height:'180px'}}>


                              <p
                                className="testimonial-one__client-text"
                                style={{ fontSize: 30, fontWeight: 800 }}
                              >
                                Confirm The Deposit
                              </p>
                              <p
                                className="testimonial-one__client-text-2"
                                style={{ fontSize: 17 }}
                              >
                                Check the payment details and click 'CONFIRM'
                              </p>
                              
                              </div>
                            </div>
                          </div></SwiperSlide>
                </Swiper>
                       
                      </div>
                    </div>
                  </section>
                  {/*Testimonial One End*/}
                </div>
              </div>
            </div>
            <div className={`tab ${active=="withdraw"&&"active-tab"}`} id="specifications">
        <div className="shop-details__tab-content-inner">
          <div className="shop-details__additional-information-content">
            <section>
              <div className="container" style={{ padding: "70px 0 70px" }}>
                <div className="table-wrapper" style={{ overflowX: "auto" }}>
                  <table className="deposit-table">
                    <thead>
                      <tr>
                        <th />
                        <th>Method</th>
                        <th>Process Time</th>
                        <th>Minimum Widthdraw</th>
                        <th>Maximum Amount</th>
                        <th>Supported Currencies</th>
                        <th>Availability</th>
                        <th>Fees</th>
                      </tr>
                    </thead>
                    <tbody className="row-hover">
                      <tr className="row-2 even">
                        <td className="column-1">
                          <img
                            src="/assets/images/icon/visa.png"
                            alt=""
                            width={47}
                            height={18}
                          />
                        </td>
                        <td className="column-2">Visa</td>
                        <td className="column-3">Instant</td>
                        <td className="column-4">$1</td>
                        <td className="column-5">$50,000</td>
                        <td className="column-6">Multi-currencies</td>
                        <td className="column-7">Global</td>
                        <td className="column-8">$5</td>
                      </tr>
                      <tr className="row-3 even">
                        <td className="column-1">
                          <img
                            src="/assets/images/icon/skrill.png"
                            alt=""
                            width={65}
                            height={60}
                          />
                        </td>
                        <td className="column-2">Skrill</td>
                        <td className="column-3">Instant</td>
                        <td className="column-4">$50</td>
                        <td className="column-5">$50,000</td>
                        <td className="column-6">Multi-currencies</td>
                        <td className="column-7">Global</td>
                        <td className="column-8">$5</td>
                      </tr>
                      <tr className="row-4 odd">
                        <td className="column-1">
                          <img
                            src="/assets/images/icon/sepa.png"
                            alt=""
                            width={60}
                            height={30}
                          />
                        </td>
                        <td className="column-2">SEPA</td>
                        <td className="column-3">Instant</td>
                        <td className="column-4">$1</td>
                        <td className="column-5">N/A</td>
                        <td className="column-6">EUR,GBP</td>
                        <td className="column-7">Europe</td>
                        <td className="column-8">$5</td>
                      </tr>
                      <tr className="row-5 even">
                        <td className="column-1">
                          <img
                            src="/assets/images/icon/netler.png"
                            alt=""
                            width={50}
                            height={10}
                          />
                        </td>
                        <td className="column-2">Neteller</td>
                        <td className="column-3">Instant</td>
                        <td className="column-4">$50</td>
                        <td className="column-5">$50,000</td>
                        <td className="column-6">Multi-currencies</td>
                        <td className="column-7">Global</td>
                        <td className="column-8">$5</td>
                      </tr>
                      <tr className="row-6 even">
                        <td className="column-1">
                          <img
                            src="/assets/images/icon/astro.png"
                            alt=""
                            width={65}
                            height={50}
                          />
                        </td>
                        <td className="column-2">AstroPay</td>
                        <td className="column-3">Instant</td>
                        <td className="column-4">$5</td>
                        <td className="column-5">N/A</td>
                        <td className="column-6">Multi-currencies</td>
                        <td className="column-7">New Zealand</td>
                        <td className="column-8">$5</td>
                      </tr>
                      <tr className="row-7 even">
                        <td className="column-1">
                          <img
                            src="/assets/images/img1/section/logo/visa2-removebg-preview.png"
                            alt=""
                            width={52}
                            height={35}
                          />
                        </td>
                        <td className="column-2">Visa Electron</td>
                        <td className="column-3">Instant</td>
                        <td className="column-4">$5</td>
                        <td className="column-5">N/A</td>
                        <td className="column-6">Multi-currencies</td>
                        <td className="column-7">Global except</td>
                        <td className="column-8">$5</td>
                      </tr>
                      <tr className="row-8 even">
                        <td className="column-1">
                          <img
                            src="/assets/images/img1/section/logo/master.png"
                            alt=""
                            width={52}
                            height={30}
                          />
                        </td>
                        <td className="column-2">Mastro Card</td>
                        <td className="column-3">Instant</td>
                        <td className="column-4">$5</td>
                        <td className="column-5">N/A</td>
                        <td className="column-6">Multi-currencies</td>
                        <td className="column-7">New Zealand</td>
                        <td className="column-8">$5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            {/* Add more data rows here */}
            {/*Testimonial One Start*/}
            <section
              className="testimonial-one testimonial-three"
              style={{ padding: "80px 0 10px" }}
            >
              <div className="container">
                <div className="testimonial-one__top">
                  <div className="section-title text-center ">
                    <h2
                      className="section-title__title"
                      style={{ color: "black" ,lineHeight:"normal"}}
                    >
                      The 4-step process to deposit funds to your account
                    </h2>
                  </div>
                </div>
                <div className="testimonial-one__bottom">
                  <div
                    className="testimonial-one__carousel thm-owl__carousel owl-theme owl-carousel"
                    data-owl-options='{
              "items": 3,
              "margin": 30,
              "smartSpeed": 700,
              "loop":true,
              "autoplay": 6000,
              "nav":true,
              "dots":false,
              "navText": ["<span class=\"icon-right-arrow\"></span>","<span class=\"icon-right-arrow1\"></span>"],
              "responsive":{
                  "0":{
                      "items":1
                  },
                  "768":{
                      "items":2
                  },
                  "992":{
                      "items": 2
                  }
              }
          }'
                  >
                    {/*Testimonial One Single Start*/}
                    <div className="item">
                      <div
                        className="testimonial-one__single"
                        id="testimonial-one__single1"
                      >
                        <h1
                          className="section-title__title"
                          style={{ color: "red", fontSize: 25 }}
                        >
                          Step 1
                        </h1>
                        <img
                          src="/assets/images/img1/section/step1.jpg"
                          alt="image"
                          style={{width:'100%'}}
                        />
                        <p
                          className="testimonial-one__client-text"
                          style={{ fontSize: 30, fontWeight: 800 }}
                        >
                          Select The Wallet
                        </p>
                        <p
                          className="testimonial-one__client-text-2"
                          style={{ fontSize: 17 }}
                        >
                          Select the method by which you want to make a
                          withdrawal.
                        </p>
                        <br />
                      </div>
                    </div>
                    {/*Testimonial One Single End*/}
                    {/*Testimonial One Single Start*/}
                    <div className="item">
                      <div
                        className="testimonial-one__single"
                        id="testimonial-one__single1"
                      >
                        <h1
                          className="section-title__title"
                          style={{ color: "red", fontSize: 25 }}
                        >
                          Step 2
                        </h1>
                        <img
                          src="/assets/images/img1/section/step2.jpg"
                          alt="image"
                          style={{width:'100%'}}
                        />
                        <p
                          className="testimonial-one__client-text"
                          style={{ fontSize: 30, fontWeight: 800 }}
                        >
                          Select the Method
                        </p>
                        <p
                          className="testimonial-one__client-text-2"
                          style={{ fontSize: 17 }}
                        >
                          Select the wallet from which you want to make a
                          withdrawal.
                        </p>
                        <br />
                      </div>
                    </div>
                    {/*Testimonial One Single End*/}
                    {/*Testimonial One Single Start*/}
                    <div className="item">
                      <div
                        className="testimonial-one__single"
                        id="testimonial-one__single1"
                      >
                        <h1
                          className="section-title__title"
                          style={{ color: "red", fontSize: 25 }}
                        >
                          Step 3
                        </h1>
                        <img
                          src="/assets/images/img1/section/step3.jpg"
                          alt="image"
                          style={{width:'100%'}}
                        />
                        <p
                          className="testimonial-one__client-text"
                          style={{ fontSize: 30, fontWeight: 800 }}
                        >
                          Specify The Amount
                        </p>
                        <p
                          className="testimonial-one__client-text-2"
                          style={{ fontSize: 17 }}
                        >
                          Specify the amount you want to withdraw and click
                          'NEXT'.
                        </p>
                        <br />
                      </div>
                    </div>
                    {/*Testimonial One Single End*/}
                    {/*Testimonial One Single Start*/}
                    <div className="item">
                      <div
                        className="testimonial-one__single"
                        id="testimonial-one__single1"
                      >
                        <h1
                          className="section-title__title"
                          style={{ color: "red", fontSize: 25 }}
                        >
                          Step 4
                        </h1>
                        <img
                          src="/assets/images/img1/section/step4.jpg"
                          alt="image"
                          style={{width:'100%'}}
                        />
                        <p
                          className="testimonial-one__client-text"
                          style={{ fontSize: 30, fontWeight: 800 }}
                        >
                          Confirm The Deposit
                        </p>
                        <p
                          className="testimonial-one__client-text-2"
                          style={{ fontSize: 17 }}
                        >
                          Confirm your request, and the status of your request
                          will change to pending.{" "}
                        </p>
                      </div>
                    </div>
                    {/*Testimonial One Single End*/}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
            </div>
            
          </div>
        </div>
      </div>
   


    </div>
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
  </>
  
  )
}

export default Deposit
