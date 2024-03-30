import React from 'react'

function Insurance() {
  return (
    <>
  <>
  <section className="page-header">
    <div
      className="page-header-bg-2"
      style={{ backgroundImage: "url(/assets/images/img1/b22.png)" }}
    ></div>
    <div className="container">
      <div className="page-header__inner">
        <h2>How does our insurance work?</h2>
      </div>
    </div>
  </section>
  {/*Page Header End*/}
  {/*Project Details Start*/}
  <section className="project-details" style={{ padding: "25px 0 0" }}>
    <div className="container">
      <div className="project-details__bottom">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <h3
              className="project-details__title pt-2"
             
            >
              Our Insurance Work
            </h3>
            <p
              className="project-details__overview-text-1"
              style={{ color: "black", textAlign: "justify" }}
            >
              Secure your deposits and receive up to a 100% payout with an
              Insurance from TransX. You can cover any range from 10% and up to
              100% of your funds.{" "}
            </p>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="img">
              <img
                src="/assets/images/img1/insurance.jpg"
                style={{ height: 300 }}
                alt="insurance-image"
              />
            </div>
          </div>
        </div>
        <div className="project-details__feature" style={{ paddingTop: 20 }}>
          <div className="project-details__overview text-center">
            <h3
              className="project-details__overview-itle"
              style={{ fontSize: 30 }}
            >
              Reasons to Go with TransX Insurance:
            </h3>
            <ul
              style={{
                listStyleType: "none",
                color: "black",
                textAlign: "start"
              }}
            >
              <li>
                <img
                  src="/assets/images/img1/bullet3.png"
                  alt="bullets"
                  style={{ height: 30, width: 40, paddingBottom: 5 }}
                />{" "}
                Program is absolutely free
              </li>
              <li>
                {" "}
                <img
                  src="/assets/images/img1/bullet3.png"
                  alt="bullets"
                  style={{ height: 30, width: 40, paddingBottom: 5 }}
                />{" "}
                Easy fulfillment terms to receive coverage
              </li>
              <li>
                {" "}
                <img
                  src="/assets/images/img1/bullet3.png"
                  alt="bullets"
                  style={{ height: 30, width: 40, paddingBottom: 5 }}
                />{" "}
                Perfect tool to save funds on your account and minimize risks
              </li>
              <li>
                {" "}
                <img
                  src="/assets/images/img1/bullet3.png"
                  alt="bullets"
                  style={{ height: 30, width: 40, paddingBottom: 5 }}
                />{" "}
                Available on the most popular account types - Prime / ultra low
                / islamic account
              </li>
            </ul>
          </div>
          <div className="row">
            <div
              className="project-details__brand-identity"
              style={{ padding: "40px 0 30px" }}
            >
              <h5 className="project-details__brand-identity-title text-center">
                How it Works
              </h5>
            </div>
            <div className="project-details__goal">
              <div className="row">
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div
                    className="services-one__single"
                    style={{ padding: "10px 0 10px" }}
                  >
                    <div className="services-one__icon">
                      <img src="/assets/images/icon1/trading.png" />
                    </div>
                    <h3
                      className="services-two__title text-center"
                      style={{ marginTop: 25, fontSize: 17 }}
                    >
                      1.Deposit your acoount
                    </h3>
                  </div>
                </div>
                {/*Services One Single End*/}
                {/*Services One Single Start*/}
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="services-one__single">
                    <div className="services-one__icon">
                      <img src="/assets/images/icon1/sequre.png" />
                    </div>
                    <h3
                      className="services-two__title text-center"
                      style={{ marginTop: 25, fontSize: 17 }}
                    >
                      2.Apply
                    </h3>
                  </div>
                </div>
                {/*Services One Single End*/}
                {/*Services One Single Start*/}
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="services-one__single">
                    <div className="services-one__icon">
                      <img src="/assets/images/icon1/trade.png" />
                    </div>
                    <h3
                      className="services-two__title text-center"
                      style={{ marginTop: 25, fontSize: 17 }}
                    >
                      3.Trade confidently by knowing that your funds are insured
                      and safe
                    </h3>
                  </div>
                </div>
                {/*Services One Single End*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="project-details__feature"
      style={{ paddingTop: "0px 0px 0px" }}
    >
      <div className="row">
        <div
          className="project-details__brand-identity"
          style={{ padding: "0px 0 0" }}
        >
          <h5 className="project-details__brand-identity-title text-center">
            Try loss-free trading!
          </h5>
          <h6 className="text-center">
            Take advantage of the free funds insurance program!
          </h6>
        </div>
        <div className="project-details__goal">
          <div
            className="services-one__single"
            style={{ padding: "5px 0 0px" }}
          >
            <div className="container text-center">
              <div className="row pt-5">
                <table className="deposit-table">
                  <tbody className="row-hover">
                    <tr className="row-8 even">
                      <td className="column-1">
                        <p>
                          <b>Account Balance:</b>
                        </p>
                      </td>
                      <td className="column-2">
                        <div className="slidecontainer">
                          <input
                            type="range"
                            min={500}
                            max={20000}
                            defaultValue={500}
                            className="slider"
                            id="myRange1"
                            style={{ width: 300, color: "black" }}
                          />
                        </div>
                      </td>
                      <td className="column-3">
                        <p>
                          <span id="demo1" />
                        </p>
                      </td>
                    </tr>
                    <tr className="row-8 even">
                      <td className="column-1">
                        <p>
                          <b>Insurance Percentage:</b>
                        </p>
                      </td>
                      <td className="column-2">
                        <div className="slidecontainer">
                          <input
                            type="range"
                            min={10}
                            max={100}
                            defaultValue={10}
                            className="slider"
                            id="myRange2"
                            style={{ width: 300, color: "black" }}
                          />
                        </div>
                      </td>
                      <td className="column-3">
                        <p>
                          <span id="demo2" />
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  <b>Total Value(insured amount):</b>{" "}
                  <span
                    id="totalValue"
                    className="text-right"
                    style={{ color: "green" }}
                  />
                </p>
                <p>
                  <b>Required Trading Volume:</b> <span id="volume" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Project Details End*/}
  <section className="project-details" style={{ padding: "0px 0 90px" }}>
    <div className="container">
      <div className="project-details__bottom">
        <div className="project-details__overview">
          <ul style={{ listStyleType: "none", color: "black" }}>
            <h5 className="project-details__overview-itle">
              Primary Elements of the Program:
            </h5>
            <li style={{ paddingTop: 10 }}>
              {" "}
              <img
                src="/assets/images/img1/bullet3.png"
                alt="bullets"
                style={{ height: 30, width: 40, paddingBottom: 5 }}
              />
              The insurance program is available for all live trading accounts,
              except Prime / ultra low / islamic account.{" "}
            </li>
            <li style={{ paddingTop: 10 }}>
              <img
                src="/assets/images/img1/bullet3.png"
                alt="bullets"
                style={{ height: 30, width: 40, paddingBottom: 5 }}
              />
              The program covers deposits ranging from $500 to $20,000 and
              above.
            </li>
            <li style={{ paddingTop: 10 }}>
              {" "}
              <img
                src="/assets/images/img1/bullet3.png"
                alt="bullets"
                style={{ height: 30, width: 40, paddingBottom: 5 }}
              />
              Clients have the flexibility to insure their account for anywhere
              between 10% and 100% of their deposit amount.{" "}
            </li>
            <li style={{ paddingTop: 10 }}>
              <img
                src="/assets/images/img1/bullet3.png"
                alt="bullets"
                style={{ height: 30, width: 40, paddingBottom: 5 }}
              />
              Upon enrolling in the Trans X Markets insurance program, clients
              are required to pay a 5% processing fee calculated on their
              deposit amount.
            </li>
            <li style={{ paddingTop: 10 }}>
              <img
                src="/assets/images/img1/bullet3.png"
                alt="bullets"
                style={{ height: 30, width: 40, paddingBottom: 5 }}
              />{" "}
              Clients have the liberty to apply for or cancel the insurance at
              any given time.{" "}
            </li>
            <li style={{ paddingTop: 10 }}>
              <img
                src="/assets/images/img1/bullet3.png"
                alt="bullets"
                style={{ height: 30, width: 40, paddingBottom: 5 }}
              />
              The insurance is valid for a full year (365 days) and is
              applicable for one MT5 account number under the depositor's name.
            </li>
            <li style={{ paddingTop: 10 }}>
              <img
                src="/assets/images/img1/bullet3.png"
                alt="bullets"
                style={{ height: 30, width: 40, paddingBottom: 5 }}
              />
              If a client decides to increase their deposit (for example, adding
              an extra $500 to an existing $500), the insurance will only cover
              the original $500 deposit.
            </li>
            <li style={{ paddingTop: 10 }}>
              <img
                src="/assets/images/img1/bullet3.png"
                alt="bullets"
                style={{ height: 30, width: 40, paddingBottom: 5 }}
              />
              If clients wish to insure the additional deposit, they need to pay
              the difference amount, calculated as 5% of their new deposit. The
              entire account will then be protected under the Trans X Markets
              insurance program.
            </li>
            <li style={{ paddingTop: 10 }}>
              <img
                src="/assets/images/img1/bullet3.png"
                alt="bullets"
                style={{ height: 30, width: 40, paddingBottom: 5 }}
              />
              Clients aiming to claim their insurance must complete a certain
              volume of trades (measured in lots). The full insurance amount is
              claimable upon completion of this volume (click here for
              calculation details).
            </li>
            <li style={{ paddingTop: 10 }}>
              <img
                src="/assets/images/img1/bullet3.png"
                alt="bullets"
                style={{ height: 30, width: 40, paddingBottom: 5 }}
              />
              If clients have not completed the full volume of required trades,
              they will receive a partial payment corresponding to their
              completed trading volume.
            </li>
            <li style={{ paddingTop: 10 }}>
              <img
                src="/assets/images/img1/bullet3.png"
                alt="bullets"
                style={{ height: 30, width: 40, paddingBottom: 5 }}
              />
              At a minimum, clients need to complete 10% of the trading volume
              measured in lots to be eligible for an insurance claim.
            </li>
            <li style={{ paddingTop: 10 }}>
              <img
                src="/assets/images/img1/bullet3.png"
                alt="bullets"
                style={{ height: 30, width: 40, paddingBottom: 5 }}
              />
              If client deposit above 10000$ then, they no need to pay for the
              insurance 5% and if any loss happen they will get guarantee return
              of 5% from the deposit even the lot size is not completed.
            </li>
          </ul>
          <p style={{ textIndent: 70 }}>
            {" "}
            For more information and procedure please contact our insurance
            department{" "}
            <a href="mailto:insurance@transxmarket.com">
              insurance@transxmarket.com
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</>

  </>
  
  )
}

export default Insurance
