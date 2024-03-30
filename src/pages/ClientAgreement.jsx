import React from 'react'

function ClientAgreement() {
  return (
    <div className="container" style={{marginBottom:'80px'}}>
  {/* <h3 class="progress-one__title">We have the Tools and Expertise <br>
              to help you Succeed online</h3> */}
  <div className="row">
    <div className="col-xl-4 col-lg-4">
      <div className="services-details__left">
        <div
          className="services-details__category"
          style={{ backgroundColor: "unset" }}
        >
          <ul className="services-details__category-box list-unstyled ">
            <li>
              <a href="privacy_policy">Privacy Policy</a>
            </li>
            <li>
              <a href="disclaimer">Disclaimer</a>
            </li>
            <li>
              <a href="terms">Terms and Conditions</a>
            </li>
            <li>
              <a href="cookies">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col-xl-8 col-lg-8">
      <div className="progress-one__left">
        <div className="progress-one__progress-box">
          <div data-aos="fade-right">
            <h2
              className="progress-one__progress-box-title"
              style={{ color: "black", fontSize: 43  }}
            >
              Client's Obligation and Rights
            </h2>
            <div className="progress-levels">
              {/*Skill Box*/}
              <div className="progress-box">
                <div className="inner count-box pt-4">
                  <h4> Client's Obligation</h4>
                  <div className="bar pt-2">
                    <p
                      className="services-details__text-1"
                      style={{ color: "black", textAlign: "justify" }}
                    >
                      The Client recognizes and agrees not to hold Dukascopy
                      Group, or any of their officers, directors, employees, and
                      affiliates, accountable for any form of losses, including
                      financial losses, incurred by the Client in instances
                      where a third party utilizes the Client’s confidential
                      information. This includes situations where the login and
                      password are either shared with the third party by the
                      Client or acquired by the third party from the Client
                      through abusive/fraudulent means. The Client will bear
                      sole responsibility for any disclosure of such personal
                      data to unauthorized third parties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner count-box pt-4">
            <h4> Client’s Rights</h4>
            <div className="bar pt-2">
              <p
                className="services-details__text-1"
                style={{ color: "black", textAlign: "justify" }}
              >
                Upon a written request, the Client has the right to obtain a
                copy of their Personal Data held by the Company. However, the
                Company retains the right to deny such requests if they are
                excessive or repetitive, and may charge a reasonable fee
                considering the resources required to prepare such a copy.
                <br />
                - The Client can ask the Company to amend their Personal Data.
                <br />
                - The Client can request the erasure of their Personal Data, as
                far as the law and other regulations applicable to the Company
                allow.
                <br />
                - The Client can limit the Company’s processing of their
                Personal Data, within the boundaries set by applicable laws and
                regulations.
                <br />
                - The Client has the right to receive their Personal Data in a
                structured, commonly used, and electronic format and to transmit
                it to another controller.
                <br />
                - The Client can withdraw consent for Processing for direct
                marketing purposes at any time
                <br />
                - The Client has the right to be informed about automated
                individual decision-making, including profiling.
                <br />
                - All the aforementioned rights must be exercised in good faith
                and initiated through a written request.
                <br />
                - If the Company and its Data Protection Officer do not
                satisfactorily address your request or concern through the
                contact details provided in Section 11 upon your written
                request, you have the right to file a complaint with the
                personal data protection authority of the Swiss Confederation.
                <br />- The Data Controller can refuse, limit, or delay the
                provision of information in situations where formal law
                prescribes it, in the presence of predominant interests, upon
                third-party requests, or when the access request is evidently
                unfounded.
              </p>
            </div>
          </div>
          <div className="inner count-box pt-4">
            <h4> Data Security</h4>
            <div className="bar pt-2">
              <p
                className="services-details__text-1"
                style={{ color: "black", textAlign: "justify" }}
              >
                The Company will ensure that appropriate security measures are
                taken against unlawful or unauthorized processing of Personal
                data and against the accidental loss of, or damage to, Personal
                data.
              </p>
              <p
                className="services-details__text-1"
                style={{ color: "black", textAlign: "justify" }}
              >
                Maintaining data security means guaranteeing the
                confidentiality, integrity and availability of Personal data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ClientAgreement
