import React, { useState } from 'react'

function VPS() {
  const [active,setActive]=useState("vps")
  return (
    <>
    <section className="page-header">
      <div
        className="page-header-bg-2"
        style={{ backgroundImage: "url(/assets/images/img1/b23.png)" }}
      ></div>
      <div className="container">
        <div className="page-header__inner">
          <h2>Virtual Private Server</h2>
        </div>
      </div>
    </section>
  
    <section className="progress-one" style={{ padding: "60px 0 70px" }}>
      <div className="container">
 
        <div
          className="row"
          style={{
            backgroundColor: "whitesmoke",
            borderRadius: 10,
            border: "2px solid lightgrey"
          }}
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
                    Transx Market's Virtual Private Server
                  </h4>
                  <div className="progress-levels">
              
                    <div className="progress-box">
                      <div className="inner count-box">
                        <div className="bar">
                          <p style={{ color: "black", textAlign: "justify" }}>
                            A Transx Market VPS is a distinct segment of a server
                            situated in a high-performance data facility. Each VPS
                            within the Transx Market environment operates
                            independently from others and functions comparably to
                            an individual server.
                          </p>
                          <p style={{ color: "black", textAlign: "justify" }}>
                            This VPS operates just as if it were an independent
                            computer, possessing its unique hardware, resources,
                            and bandwidth. Designed with robustness in mind, it
                            eliminates any single point of hardware vulnerability,
                            guaranteeing a trustworthy and stable framework for
                            online algorithmic trading.
                          </p>
                        </div>
                        <br />
                        <button
                          style={{
                            color: "white",
                            backgroundColor: "black",
                            borderRadius: 10,
                            padding: "3px 15px 3px 15px"
                          }}
                        >
                          Go Trade
                        </button>
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div
              className="progress-one__right"
              style={{ backgroundColor: "whitesmoke" }}
            >
              <div className="progress-one__img-box">
                <div className="progress-one__img">
                  <div data-aos="fade-left">
                    <br />
                    <img src="/assets/images/trading1/vps5.gif" alt="" />
                  </div>
                </div>
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section className="pricing" style={{ padding: "20px 0 0px" }}>
      <div className="container">
        <div className="shop-details__bottom">
          <div className="shop-details__description">
            <div className="shop-details__main-tab-box tabs-box">
              <ul className="tab-buttons clearfix list-unstyled" style={{width:'fit-content',margin:'auto'}}>
                <li
                  data-tab="#description"
                 
                  id="tab"
                  className={`tab-btn ${active=="vps"&&"active-btn"}`} onClick={()=>setActive('vps')}
                >
                  <span id="tabb" style={{ color: "black" }}>
                    <b>VPS</b>
                  </span>
                </li>
                <li data-tab="#specifications"                   className={`tab-btn ${active=="latency"&&"active-btn"}`} onClick={()=>setActive('latency')} id="tab1">
                  <span id="tabb" style={{ color: "black" }}>
                    <b>Latency</b>
                  </span>
                </li>
              </ul>
              <div className="tabs-content">
               
                <div className={`tab ${active=="vps"&&"active-tab"}`} id="description">
                  <div className="shop-details__tab-content-inner">
         
                    <div className="review-one">
                      <div className="comments-area">
                        <div className="review-one__title"></div>
                
                        <section
                          className="progress-one"
                          style={{ padding: "10px 0 120px" }}
                        >
                          <div className="container">
                             
                            <div className="row" style={{ borderRadius: 10 }}>
                              <div className="col-xl-6">
                                <div className="progress-one__right">
                                  <div className="progress-one__img-box">
                                    <div className="progress-one__img">
                                      <div data-aos="fade-left">
                                        <br />
                                        <img
                                          src="/assets/images/img1/section/vps.png"
                                          alt=""
                                        />
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
                                        Transx Market's Virtual Private Server
                                      </h4>
                                      <div className="progress-levels">
                                     
                                        <div className="progress-box">
                                          <div className="inner count-box">
                                            <div className="bar">
                                              <p
                                                style={{
                                                  color: "black",
                                                  textAlign: "justify"
                                                }}
                                              >
                                                Using a Virtual Private Server
                                                (VPS) for MT5 trading offers
                                                several critical advantages for
                                                traders. Firstly, it ensures
                                                near-continuous uptime, allowing
                                                trades to be executed without
                                                interruption, which is
                                                particularly essential for those
                                                running automated trading
                                                strategies or Expert Advisors
                                                (EAs).
                                              </p>{" "}
                                              <p
                                                style={{
                                                  color: "black",
                                                  textAlign: "justify"
                                                }}
                                              >
                                                A VPS provides a stable and secure
                                                environment, reducing the risk of
                                                technical disruptions or internet
                                                outages that might occur on a
                                                local machine.Secondly, given that
                                                many VPS servers are located near
                                                major data centers, they often
                                                offer faster connection speeds and
                                                lower latency.
                                              </p>
                                            </div>
                                            <br />
                                            <div className="text-center">
                                              <button
                                                style={{
                                                  color: "white",
                                                  backgroundColor: "red",
                                                  borderRadius: 10,
                                                  padding: "3px 15px 3px 15px"
                                                }}
                                              >
                                                Go Trade
                                              </button>
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
                              <p style={{ color: "black", textAlign: "justify" }}>
                                {" "}
                                This can be crucial for high-frequency traders,
                                where even milliseconds matter. Lastly, using a
                                VPS grants traders the flexibility to access their
                                trading platform from anywhere in the world,
                                without being tied down to a specific device or
                                location. This ensures that traders can monitor
                                and manage their positions conveniently,
                                irrespective of their physical location.
                              </p>
                            </div>
                          </div>
                        </section>
                 
                      </div>
                    </div>
                 
                  </div>
                </div>
               
                <div className={`tab ${active=="latency"&&"active-tab"}`} id="specifications">
                  <div className="shop-details__tab-content-inner">
      
                    <div className="review-one">
                      <div className="comments-area">
                        <div className="review-one__title"></div>
                
                        <section
                          className="progress-one"
                          style={{ padding: "60px 0 120px" }}
                        >
                          <div className="container">
                    
                            <div className="row" style={{ borderRadius: 10 }}>
                              <div className="col-xl-6">
                                <div className="progress-one__right">
                                  <div className="progress-one__img-box">
                                    <div className="progress-one__img">
                                      <div data-aos="fade-left">
                                        <br />
                                        <img
                                          src="/assets/images/img1/section/latency.png"
                                          alt=""
                                        />
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
                                        Transx Market's VPS latency
                                      </h4>
                                      <div className="progress-levels">
                                       
                                        <div className="progress-box">
                                          <div className="inner count-box">
                                            <div className="bar">
                                              <p
                                                style={{
                                                  color: "black",
                                                  textAlign: "justify"
                                                }}
                                              >
                                                Latency in the context of a
                                                Virtual Private Server (VPS)
                                                refers to the time taken for data
                                                to travel between a trader's
                                                terminal and the broker's server.
                                                This delay can significantly
                                                impact trading activities,
                                                especially in high-frequency
                                                trading where milliseconds matter.
                                                When using a VPS located close to
                                                a broker's server, latency is
                                                often minimized, resulting in
                                                faster execution times and reduced
                                                slippage.
                                              </p>{" "}
                                              <p
                                                style={{
                                                  color: "black",
                                                  textAlign: "justify"
                                                }}
                                              >
                                                A low-latency environment is
                                                crucial for ensuring that trades
                                                are executed at the desired
                                                levels, especially during volatile
                                                market conditions. Moreover, for
                                                traders utilizing algorithmic
                                                strategies or Expert Advisors, a
                                                VPS with low latency can be the
                                                difference between a successful
                                                and an unsuccessful trade.
                                              </p>
                                            </div>
                                            <br />
                                            <div className="text-center">
                                              <button
                                                style={{
                                                  color: "white",
                                                  backgroundColor: "red",
                                                  borderRadius: 10,
                                                  padding: "3px 15px 3px 15px"
                                                }}
                                              >
                                                Go Trade
                                              </button>
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
                              <p style={{ color: "black", textAlign: "justify" }}>
                                {" "}
                                By selecting a VPS provider strategically located
                                near the data centers of major brokers, traders
                                can optimize their trading conditions and
                                potentially improve their overall performance.
                              </p>
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
        </div>
      </div>
    </section>
  </>
  
  )
}

export default VPS
