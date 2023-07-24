import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="bg-image" style={{ backgroundImage: "url(./images/background/5.jpg)" }} />
        <div className="anim-icons">
          <span className="icon icon-plane-3 bounce-x" />
        </div>
        {/* Contact info */}
        <div className="contacts-outer">
          <div className="auto-container">
            <div className="row">
              {/* Contact Info Block */}
              <div className="contact-info-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon flaticon-international-shipping-2" />
                  </div>
                  <h4 className="title">Address</h4>
                  <div className="text">30 St Kilda Road, Jackson Store, Australia</div>
                </div>
              </div>
              {/* Contact Info Block */}
              <div className="contact-info-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon flaticon-stock-1" />
                  </div>
                  <h4 className="title">Contact</h4>
                  <div className="text">
                    <Link href="mailto:needhelp@company.com">needhelp@company.com</Link>
                    <Link href="tel:+92(8800)48720">+92 (8800) 48720</Link>
                  </div>
                </div>
              </div>
              {/* Contact Info Block */}
              <div className="contact-info-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon flaticon-24-hours-2" />
                  </div>
                  <h4 className="title">Timing</h4>
                  <div className="text">Mon - Sat: 8 am - 5 pm, Sunday: CLOSED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Contact info */}
        {/*Widgets Section*/}
        <div className="widgets-section">
          <div className="auto-container">
            <div className="row">
              {/*Footer Column*/}
              <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
                <div className="footer-widget about-widget">
                  <div className="logo">
                    <Link href="/">
                      <img src="images/logo-2.png" title="Tronis" />
                    </Link>
                  </div>
                  <div className="text">We work with a passion of taking challenges and creating new ones in advertising sector.</div>
                  <Link href="/page-about" className="theme-btn btn-style-one hvr-light small">
                    <span className="btn-title">About</span>
                  </Link>
                </div>
              </div>
              {/*Footer Column*/}
              <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="footer-widget">
                  <h3 className="widget-title">Service</h3>
                  <ul className="user-links">
                    <li>
                      <Link href="#">Reliability &amp; Punctuality</Link>
                    </li>
                    <li>
                      <Link href="#">Trusted Franchise</Link>
                    </li>
                    <li>
                      <Link href="#">Warehoues Storage</Link>
                    </li>
                    <li>
                      <Link href="#">Real Time Tracking</Link>
                    </li>
                    <li>
                      <Link href="#">Transparent Pricing</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/*Footer Column*/}
              <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget gallery-widget">
                  <h3 className="widget-title">Projects</h3>
                  <div className="widget-content">
                    <div className="outer clearfix">
                      <figure className="image">
                        <Link href="#">
                          <img src="images/resource/project-thumb-1.jpg" title="Tronis" />
                        </Link>
                      </figure>
                      <figure className="image">
                        <Link href="#">
                          <img src="images/resource/project-thumb-2.jpg" title="Tronis" />
                        </Link>
                      </figure>
                      <figure className="image">
                        <Link href="#">
                          <img src="images/resource/project-thumb-3.jpg" title="Tronis" />
                        </Link>
                      </figure>
                      <figure className="image">
                        <Link href="#">
                          <img src="images/resource/project-thumb-4.jpg" title="Tronis" />
                        </Link>
                      </figure>
                      <figure className="image">
                        <Link href="#">
                          <img src="images/resource/project-thumb-5.jpg" title="Tronis" />
                        </Link>
                      </figure>
                      <figure className="image">
                        <Link href="#">
                          <img src="images/resource/project-thumb-6.jpg" title="Tronis" />
                        </Link>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              {/*Footer Column*/}
              <div className="footer-column col-xl-3 col-lg-5 col-md-6 col-sm-12">
                <div className="footer-widget">
                  <h3 className="widget-title">Newsletter</h3>
                  <div className="widget-content">
                    <div className="subscribe-form">
                      <div className="text">Subscribe our newsletter to get our latest update &amp; news</div>
                      <form method="post" action="#">
                        <div className="form-group">
                          <input type="email" name="email" className="email" placeholder="Email Address" required />
                          <button type="button" className="theme-btn btn-style-one">
                            <span className="btn-title">
                              <i className="fa fa-paper-plane" />
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Footer Bottom*/}
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container">
              <div className="copyright-text">
                <p>
                  © Copyright 2022 by <Link href="/">Company.com</Link>
                </p>
              </div>
              <ul className="social-icon-two">
                <li>
                  <Link href="#">
                    <i className="fab fa-facebook" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-pinterest" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
