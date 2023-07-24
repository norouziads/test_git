import React from "react";

const AboutThree = () => {
  return (
    <>
      <section className="about-section-two">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Get to know us</span>
                  <h2>Global Logistics Solution Provider 1996</h2>
                  <h4>Simplify your freight and logistics needs with a personal approch.</h4>
                  <div className="text">Explain to you how all this mistaken denouncing pleasure and praising pain was born and we will give you a complete account of the system, and expound the actual teachings.</div>
                </div>
                <div className="row">
                  <div className="feature-block-three col-lg-4 col-md-4 col-sm-12">
                    <div className="inner">
                      <i className="icon flaticon-delivery-courier"></i>
                      <h4 className="title">Cost Optimisation</h4>
                    </div>
                  </div>
                  <div className="feature-block-three col-lg-4 col-md-4 col-sm-12">
                    <div className="inner">
                      <i className="icon flaticon-delivery-insurance-3"></i>
                      <h4 className="title">
                        Reduced <br />
                        Transit Time
                      </h4>
                    </div>
                  </div>
                  <div className="feature-block-three col-lg-4 col-md-4 col-sm-12">
                    <div className="inner">
                      <i className="icon flaticon-delivery-box-3"></i>
                      <h4 className="title">
                        Delivery <br />
                        on Time
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="founder-info">
                  <div className="thumb">
                    <img src="images/resource/ceo.jpg" title="Tronis" />
                  </div>
                  <h5 className="name">Brittary Herman</h5>
                  <span className="designation">CEO & Founder of Company</span>
                </div>
              </div>
            </div>
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <figure className="image-1 wow fadeInUp">
                  <img src="images/resource/about-3.jpg" title="Tronis" />
                </figure>
                <figure className="image-2 wow fadeInRight">
                  <img src="images/resource/about-4.jpg" title="Tronis" />
                  <div className="icon-box">
                    <i className="icon flaticon-delivery-box-4"></i>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutThree;
