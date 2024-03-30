import React, { useState } from 'react'
import Swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import { CircularProgress } from '@mui/material';
 
function Contact() {

  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setloading] = useState(false);
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  return (
    <>
    {/*Page Header Start*/}
    <section className="page-header">
      <div
        className="page-header-bg-2"
        style={{ backgroundImage: "url(/assets/images/img1/bg.jpg)" }}
      ></div>
      <div className="container">
        <div className="page-header__inner">
          <h2> Contact Us </h2>
        </div>
      </div>
    </section>
    {/*Contact One Start*/}
    <section className="contact-four">
      <div className="contact-four__bg"></div>
      <div className="container">
        <div className="contact-four__inner">
          <div className="contact-four__inner-content">
            <div className="contact-four__map">
              <img src="/assets/images/shapes/contact-four-map.png" alt="" />
            </div>
            <h2 className="contact-four__title">
              <b>
                Don't Hold Back, Send Us <br /> Your Message!
              </b>
            </h2>
            <div className="row">
              <div className="col-xl-6 col-lg-8">
                <div className="contact-four__left">
                  <div className="contact-four__form-box">
                    <h3 className="contact-four__form-title">
                      Get a Consultation
                    </h3>
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
  
                        if (!captchaToken) {
                          Swal.fire({
                            // title: "Error",
                            text: "Captha is Required",
                            icon: "warning",
                          });
                          return;
                        }
                        const currentUrl = window?.location?.href;
                        let updatedUrl;
  
                        if (
                          currentUrl &&
                          (currentUrl.startsWith("http://") ||
                            currentUrl.startsWith("https://"))
                        ) {
                          // Replace "http://" or "https://" with "www."
                          updatedUrl = currentUrl.replace(
                            /^(https?:\/\/)/,
                            "www."
                          );
                        } else {
                          console.log(currentUrl);
                        }
                        try {
                          setloading(true);
                          const formData = new FormData();
                          formData.append("g-recaptcha-response", captchaToken);
                          formData.append("name", values.name);
                          formData.append("email", values.email);
                          formData.append("phone", values?.phone);
                          formData.append("message", values?.message);
                          formData.append("domain", updatedUrl.split("/")[0]);
                          
                          const res = await axios.post(
                            "https://gtechwebservice.com/api/api.php",
                            formData,
                            {
                              headers: {
                                "Content-Type": "multipart/form-data",
                              },
                            }
                          );
                          if (res?.data?.status) {
                            setloading(false);
                            // toast?.success(res?.data?.message)
                            Swal.fire({
                              title: "Success",
                              text: res?.data?.message,
                              icon: "success",
                            }).then((result) => {
                              if (result.isConfirmed) {
                                window.location.reload();
                              }
                            });
                          }
                          console.log(res);
                        } catch (error) {
                          if (error?.response?.data?.message) {
                            // toast?.error(error?.response?.data?.message[0])
                            Swal.fire({
                              title: "Error",
                              text: error?.response?.data?.message,
                              icon: "error",
                            });
                            setTimeout(() => {
                              window.location.reload();
                            }, 2000);
                          }
                          if (error?.response?.data?.errors?.email) {
                            // toast?.error(error?.response?.data?.errors?.email[0])
                            Swal.fire({
                              title: "Error",
                              text: error?.response?.data?.errors?.email[0],
                              icon: "error",
                            });
                          }
                          if (error?.response?.data?.errors?.phone) {
                            Swal.fire({
                              title: "Error",
                              text: error?.response?.data?.errors?.phone[0],
                              icon: "error",
                            });
                            // toast?.error(error?.response?.data?.errors?.phone[0])
                          }
                          setloading(false);
                        }
                        setloading(false);
                      }}
                      className="contact-four__form contact-form-validated"
                   
                    >
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="contact-form__input-box">
                            <input
                              type="text"
                              placeholder="Your Name"
                              name="name"
                              required
                              value={values?.name}
                              onChange={(e) => {
                                const inputValue = e.target.value;
                                const sanitizedValue = inputValue.replace(
                                  /[^a-zA-Z ]/g,
                                  ""
                                );
                                setValues((prev) => ({
                                  ...prev,
                                  name: sanitizedValue,
                                }));
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="contact-form__input-box">
                            <input
                              type="email"
                              placeholder="Email@gmail.com"
                              name="email"
                              required
                              value={values?.email}
                              onChange={(e) =>
                                setValues((prev) => ({
                                  ...prev,
                                  email: e.target.value,
                                }))
                              }
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="contact-form__input-box">
                            <input
                              type="text"
                              placeholder="Phone number"
                              name="Phone"
                              required
                              value={values?.phone}
                              onChange={(e) => {
                                const inputValue = e.target.value;
                                const sanitizedValue = inputValue.replace(
                                  /[^0-9]/g,
                                  ""
                                );
                                setValues((prev) => ({
                                  ...prev,
                                  phone: sanitizedValue,
                                }));
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="contact-form__input-box text-message-box">
                            <textarea
                              name="message"
                              placeholder="Write about your project"
                              value={values?.message}
                              onChange={(e) => {
                                const inputValue = e.target.value;
                                const sanitizedValue = inputValue.replace(
                                  /[^a-zA-Z0-9 .]/g,
                                  ""
                                );
                                setValues((prev) => ({
                                  ...prev,
                                  message: sanitizedValue,
                                }));
                              }}
                            />
                          </div>
                          <br />
                          <ReCAPTCHA
                      sitekey="6Lc_VX0pAAAAAJ-rhA4YLVUQ1_anf1Fe4PIKXM88"
                      onChange={handleCaptchaChange}
                      style={{
                        transform: "scale(0.60)",
                        WebkitTransform: "scale(0.70)",
                        transformOrigin: "0 0",
                        WebkitTransformOrigin: "0 0",
                      }}
                    
                    />
                  
                          <div className="contact-form__btn-box">
                            <button type="submit" className="contact-form__btn">
                            {loading ? <CircularProgress size={21} /> : "Send Message"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="result" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-4">
                <div className="contact-four__right">
                  <ul className="list-unstyled contact-four__address">
                    <li>
                      <div className="contact-four__address-single">
                        <div className="contact-four__address-icon">
                          <span className="icon-map" />
                        </div>
                        <div className="contact-four__address-content-box">
                          <p className="contact-four__address-sub-title">
                            <b>REGISTERED OFFICE:</b> GROUND FLOOR , THE SOTHEBY ,
                            RODNEY VILLAGE , ST. LUCIA P.O BOX : 838.
                          </p>
                          {/*<h4 class="contact-four__address-number">DUBAI</h4>*/}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-four__address-single">
                        <div className="contact-four__address-icon">
                          <span className="icon-technical" />
                        </div>
                        <div className="contact-four__address-content-box">
                          <p className="contact-four__address-sub-title">
                            For Consultants
                          </p>
                          <h4 className="contact-four__address-number">
                            <a href="tel:+971 567845290">+971 567845290</a>
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Contact One End*/}
    {/*Google Map Start*/}
    {/* <section class="google-map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
            class="google-map__one" allowfullscreen></iframe>
  
    </section> */}
    {/*Google Map End*/}
    {/*Contact One STart*/}
    <section className="contact-one contact-one--mar-t">
      <div className="contact-one__wrap">
        <div className="container">
          <div className="contact-one__inner">
            <ul className="contact-one__contact-list list-unstyled">
              <li>
                <div className="icon">
                  <span className="icon-location-filled-1" />
                </div>
                <div className="contact">
                  <p className="contact-one__text lettercap1">
                  WHP2-BLOCK-A COMMERCIAL
                    <br />
Plot Number -13_0
                    <br />
Land area-saih shuaib-3
                    <br />  
DIC, Dubai, UAE
               
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-phone-auricular" />
                </div>
                <div className="contact">
                  <p className="contact-one__text-2">Get In Touch</p>
                  <a href="tel:+971 567845290">+971 567845290</a>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-email-3" />
                </div>
                <div className="contact">
                  <p className="contact-one__text-2">Quick Email us</p>
                  <a href="mailto:support@transxmarket.com">
                    support@transxmarket.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}

export default Contact
